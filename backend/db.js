/* =========================================================
   Database BackendPath (SQLite bawaan Node.js)
   File database: backend/database/backendpath.db
   ========================================================= */

const { DatabaseSync } = require('node:sqlite');
const fs = require('node:fs');
const path = require('node:path');

/* DB_DIR bisa diarahkan ke disk permanen hosting; default tetap folder lokal. */
const folder = process.env.DB_DIR || path.join(__dirname, 'database');
fs.mkdirSync(folder, { recursive: true });

const databaseFile = path.join(folder, 'backendpath.db');
const db = new DatabaseSync(databaseFile);

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        password_salt TEXT NOT NULL,
        created_at TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS sessions (
        token TEXT PRIMARY KEY,
        user_id INTEGER NOT NULL,
        expires_at TEXT NOT NULL,
        created_at TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
    );
`);

const insertUser = db.prepare(
    'INSERT INTO users (name, email, password_hash, password_salt, created_at) VALUES (?, ?, ?, ?, ?)'
);
const selectUserByEmail = db.prepare('SELECT * FROM users WHERE email = ?');

const insertSession = db.prepare(
    'INSERT INTO sessions (token, user_id, expires_at, created_at) VALUES (?, ?, ?, ?)'
);
const selectSessionUser = db.prepare(`
    SELECT users.id, users.name, users.email, sessions.expires_at
    FROM sessions
    JOIN users ON users.id = sessions.user_id
    WHERE sessions.token = ?
`);
const deleteSession = db.prepare('DELETE FROM sessions WHERE token = ?');
const deleteExpiredSessions = db.prepare('DELETE FROM sessions WHERE expires_at < ?');

function createUser(name, email, passwordHash, passwordSalt) {
    const result = insertUser.run(
        name,
        email,
        passwordHash,
        passwordSalt,
        new Date().toISOString()
    );

    return Number(result.lastInsertRowid);
}

function findUserByEmail(email) {
    return selectUserByEmail.get(email) || null;
}

function createSession(token, userId, expiresAt) {
    deleteExpiredSessions.run(new Date().toISOString());
    insertSession.run(token, userId, expiresAt, new Date().toISOString());
}

function findUserByToken(token) {
    const row = selectSessionUser.get(token);
    if (!row) return null;

    if (row.expires_at < new Date().toISOString()) {
        deleteSession.run(token);
        return null;
    }

    return { id: row.id, name: row.name, email: row.email };
}

function removeSession(token) {
    deleteSession.run(token);
}

module.exports = {
    databaseFile,
    createUser,
    findUserByEmail,
    createSession,
    findUserByToken,
    removeSession
};
