/* =========================================================
   Server BackendPath
   Menyajikan file website + API login memakai database SQLite.
   Jalankan: node backend/server.js
   ========================================================= */

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const store = require('./db');

const PORT = Number(process.env.PORT) || 3000;
const ROOT = path.resolve(__dirname, '..');
const SESSION_DAYS = 7;
const MAX_BODY = 10 * 1024;
const LOGIN_LIMIT = 10;
const LOGIN_WINDOW_MS = 10 * 60 * 1000;

const MIME = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon',
    '.woff2': 'font/woff2'
};

/* Batas percobaan login per alamat IP (mencegah tebak password terus-menerus). */
const failedLogins = new Map();

function sendJson(res, status, data, headers = {}) {
    const body = JSON.stringify(data);
    res.writeHead(status, {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(body),
        'Cache-Control': 'no-store',
        'X-Content-Type-Options': 'nosniff',
        ...headers
    });
    res.end(body);
}

function sendText(res, status, text) {
    res.writeHead(status, {
        'Content-Type': 'text/plain; charset=utf-8',
        'X-Content-Type-Options': 'nosniff'
    });
    res.end(text);
}

function readBody(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        let stopped = false;

        req.on('data', chunk => {
            if (stopped) return;
            body += chunk;

            if (body.length > MAX_BODY) {
                stopped = true;
                reject(new Error('TOO_LARGE'));
            }
        });

        req.on('end', () => {
            if (stopped) return;
            if (body.length === 0) return resolve({});

            try {
                resolve(JSON.parse(body));
            } catch (error) {
                reject(new Error('BAD_JSON'));
            }
        });

        req.on('error', reject);
    });
}

function parseCookies(header) {
    const cookies = {};

    String(header || '').split(';').forEach(part => {
        const index = part.indexOf('=');
        if (index === -1) return;

        const name = part.slice(0, index).trim();
        const value = part.slice(index + 1).trim();
        if (name) cookies[name] = decodeURIComponent(value);
    });

    return cookies;
}

function sessionToken(req) {
    return parseCookies(req.headers.cookie).bp_session || '';
}

function sessionCookie(token) {
    const maxAge = SESSION_DAYS * 24 * 60 * 60;
    return `bp_session=${token}; HttpOnly; Path=/; SameSite=Lax; Max-Age=${maxAge}`;
}

function clearSessionCookie() {
    return 'bp_session=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0';
}

function hashPassword(password, salt) {
    return crypto.scryptSync(password, salt, 64).toString('hex');
}

function samePassword(password, salt, expectedHash) {
    const actual = Buffer.from(hashPassword(password, salt), 'hex');
    const expected = Buffer.from(expectedHash, 'hex');

    return actual.length === expected.length && crypto.timingSafeEqual(actual, expected);
}

function cleanName(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
}

function cleanEmail(value) {
    return String(value || '').trim().toLowerCase();
}

function isValidEmail(email) {
    return email.length <= 120 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function loginKey(req) {
    return req.socket.remoteAddress || 'lokal';
}

function isLoginBlocked(key) {
    const entry = failedLogins.get(key);
    if (!entry) return false;

    if (Date.now() > entry.resetAt) {
        failedLogins.delete(key);
        return false;
    }

    return entry.count >= LOGIN_LIMIT;
}

function noteFailedLogin(key) {
    const now = Date.now();
    const entry = failedLogins.get(key);

    if (!entry || now > entry.resetAt) {
        failedLogins.set(key, { count: 1, resetAt: now + LOGIN_WINDOW_MS });
        return;
    }

    entry.count += 1;
}

function startSession(res, user) {
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000).toISOString();

    store.createSession(token, user.id, expiresAt);

    return { token, headers: { 'Set-Cookie': sessionCookie(token) } };
}

async function handleApi(req, res, pathname) {
    if (pathname === '/api/register' && req.method === 'POST') {
        const body = await readBody(req);
        const name = cleanName(body.name);
        const email = cleanEmail(body.email);
        const password = typeof body.password === 'string' ? body.password : '';

        if (name.length < 2 || name.length > 60 || !isValidEmail(email) || password.length < 8 || password.length > 200) {
            return sendJson(res, 400, { ok: false, error: 'INVALID_INPUT' });
        }

        if (store.findUserByEmail(email)) {
            return sendJson(res, 409, { ok: false, error: 'EMAIL_TAKEN' });
        }

        const salt = crypto.randomBytes(16).toString('hex');
        const passwordHash = hashPassword(password, salt);

        let userId;
        try {
            userId = store.createUser(name, email, passwordHash, salt);
        } catch (error) {
            if (String(error.message).includes('UNIQUE')) {
                return sendJson(res, 409, { ok: false, error: 'EMAIL_TAKEN' });
            }
            throw error;
        }

        const user = { id: userId, name, email };
        const session = startSession(res, user);

        return sendJson(res, 201, { ok: true, user }, session.headers);
    }

    if (pathname === '/api/login' && req.method === 'POST') {
        const body = await readBody(req);
        const email = cleanEmail(body.email);
        const password = typeof body.password === 'string' ? body.password : '';

        if (!isValidEmail(email) || password.length === 0) {
            return sendJson(res, 400, { ok: false, error: 'INVALID_INPUT' });
        }

        const key = loginKey(req);
        if (isLoginBlocked(key)) {
            return sendJson(res, 429, { ok: false, error: 'TOO_MANY_ATTEMPTS' });
        }

        const found = store.findUserByEmail(email);
        const valid = found && samePassword(password, found.password_salt, found.password_hash);

        if (!valid) {
            noteFailedLogin(key);
            return sendJson(res, 401, { ok: false, error: 'INVALID_CREDENTIALS' });
        }

        failedLogins.delete(key);

        const user = { id: found.id, name: found.name, email: found.email };
        const session = startSession(res, user);

        return sendJson(res, 200, { ok: true, user }, session.headers);
    }

    if (pathname === '/api/me' && req.method === 'GET') {
        const token = sessionToken(req);
        const user = token ? store.findUserByToken(token) : null;

        if (!user) {
            return sendJson(res, 401, { ok: false, error: 'NOT_LOGGED_IN' });
        }

        return sendJson(res, 200, { ok: true, user });
    }

    if (pathname === '/api/logout' && req.method === 'POST') {
        const token = sessionToken(req);
        if (token) store.removeSession(token);

        return sendJson(res, 200, { ok: true }, { 'Set-Cookie': clearSessionCookie() });
    }

    return sendJson(res, 404, { ok: false, error: 'NOT_FOUND' });
}

function serveStatic(req, res, pathname) {
    let decoded;

    try {
        decoded = decodeURIComponent(pathname === '/' ? '/index.html' : pathname);
    } catch (error) {
        return sendText(res, 400, 'Alamat tidak valid');
    }

    const relative = decoded.replace(/^\/+/, '');
    const filePath = path.resolve(ROOT, relative);
    const insideRoot = filePath === ROOT || filePath.startsWith(ROOT + path.sep);

    if (!insideRoot) {
        return sendText(res, 403, 'Akses ditolak');
    }

    const relativeName = path.relative(ROOT, filePath).split(path.sep).join('/');
    const isHidden = relativeName.split('/').some(part => part.startsWith('.'));
    const isPrivate = relativeName === 'backend' || relativeName.startsWith('backend/');
    const isDatabase = relativeName.endsWith('.db');

    if (isHidden || isPrivate || isDatabase) {
        return sendText(res, 404, 'File tidak ditemukan');
    }

    const mime = MIME[path.extname(filePath).toLowerCase()];
    if (!mime) {
        return sendText(res, 404, 'File tidak ditemukan');
    }

    fs.stat(filePath, (error, stats) => {
        if (error || !stats.isFile()) {
            return sendText(res, 404, 'File tidak ditemukan');
        }

        res.writeHead(200, {
            'Content-Type': mime,
            'Content-Length': stats.size,
            'Cache-Control': 'no-cache',
            'X-Content-Type-Options': 'nosniff'
        });

        if (req.method === 'HEAD') {
            return res.end();
        }

        fs.createReadStream(filePath).pipe(res);
    });
}

async function handleRequest(req, res) {
    const pathname = new URL(req.url, 'http://localhost').pathname;

    if (pathname.startsWith('/api/')) {
        return handleApi(req, res, pathname);
    }

    if (req.method !== 'GET' && req.method !== 'HEAD') {
        return sendText(res, 405, 'Method tidak diizinkan');
    }

    return serveStatic(req, res, pathname);
}

const server = http.createServer((req, res) => {
    handleRequest(req, res).catch(error => {
        if (error.message === 'TOO_LARGE') {
            return sendJson(res, 413, { ok: false, error: 'INVALID_INPUT' });
        }

        if (error.message === 'BAD_JSON') {
            return sendJson(res, 400, { ok: false, error: 'INVALID_INPUT' });
        }

        console.error(error);
        if (!res.headersSent) {
            sendJson(res, 500, { ok: false, error: 'SERVER_ERROR' });
        } else {
            res.end();
        }
    });
});

server.listen(PORT, () => {
    console.log('');
    console.log(`BackendPath berjalan di http://localhost:${PORT}`);
    console.log(`Halaman login: http://localhost:${PORT}/login.html`);
    console.log(`Database: ${store.databaseFile}`);
    console.log('Tekan Ctrl+C untuk berhenti.');
});
