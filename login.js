/* =========================================================
   BackendPath — logika halaman masuk / daftar
   ========================================================= */

const LANG_KEY = 'backendpath:lang';

const TEXT = {
    id: {
        'meta.title': 'Masuk — BackendPath Developer',
        'meta.description': 'Masuk atau daftar akun BackendPath Developer untuk menyimpan data belajarmu.',

        'aria.brand': 'BackendPath Developer, kembali ke beranda',
        'aria.lang': 'Pilih bahasa',
        'aria.tabs': 'Pilih formulir masuk atau daftar',

        'auth.back': 'Kembali ke materi',
        'auth.asideKicker': 'Akun belajar',
        'auth.asideTitle': 'Masuk supaya belajarmu rapi di satu akun',
        'auth.asideDesc': 'Halaman ini contoh nyata menyimpan akun ke database. Cocok untuk latihan alur login di proyek backend pertamamu.',
        'auth.point1': 'Data akun disimpan di database SQLite lokal.',
        'auth.point2': 'Password di-hash dengan scrypt, bukan disimpan sebagai teks asli.',
        'auth.point3': 'Sesi login memakai cookie HttpOnly.',

        'auth.tabLogin': 'Masuk',
        'auth.tabRegister': 'Daftar akun',
        'auth.loginTitle': 'Selamat datang kembali',
        'auth.loginDesc': 'Masukkan email dan password akunmu.',
        'auth.registerTitle': 'Buat akun baru',
        'auth.registerDesc': 'Cukup nama, email, dan password minimal 8 karakter.',
        'auth.name': 'Nama',
        'auth.namePlaceholder': 'Contoh: Rani Putri',
        'auth.email': 'Email',
        'auth.emailPlaceholder': 'nama@email.com',
        'auth.password': 'Password',
        'auth.passwordPlaceholder': 'Minimal 8 karakter',
        'auth.submitLogin': 'Masuk',
        'auth.submitRegister': 'Daftar',
        'auth.loading': 'Memproses...',
        'auth.accountKicker': 'Sesi aktif',
        'auth.accountTitle': 'Kamu sudah masuk',
        'auth.continue': 'Lanjut belajar',
        'auth.logout': 'Keluar',
        'auth.successLogin': 'Berhasil masuk. Mengarahkan ke materi...',
        'auth.successRegister': 'Akun dibuat. Mengarahkan ke materi...',
        'auth.logoutSuccess': 'Kamu sudah keluar dari akun ini.',
        'auth.footerNote': 'Data akun disimpan di SQLite lokal.',

        'error.INVALID_INPUT': 'Periksa kembali isianmu. Nama minimal 2 karakter dan password minimal 8 karakter.',
        'error.EMAIL_TAKEN': 'Email ini sudah terdaftar. Coba tab Masuk.',
        'error.INVALID_CREDENTIALS': 'Email atau password salah.',
        'error.TOO_MANY_ATTEMPTS': 'Terlalu banyak percobaan login. Coba lagi 10 menit lagi.',
        'error.SERVER_ERROR': 'Terjadi kesalahan di server. Coba lagi.',
        'error.SERVER_DOWN': 'Server Node belum terhubung. Jalankan "node backend/server.js", lalu buka http://localhost:3000/login.html. Jangan lewat Live Server (port 5500).',
        'error.NOT_LOGGED_IN': 'Sesi kamu sudah berakhir. Silakan masuk lagi.'
    },
    en: {
        'meta.title': 'Log in — BackendPath Developer',
        'meta.description': 'Log in or create a BackendPath Developer account to keep your learning data.',

        'aria.brand': 'BackendPath Developer, back to home',
        'aria.lang': 'Choose language',
        'aria.tabs': 'Choose log in or sign up form',

        'auth.back': 'Back to materials',
        'auth.asideKicker': 'Learning account',
        'auth.asideTitle': 'Sign in to keep your learning in one place',
        'auth.asideDesc': 'This page is a real example of storing accounts in a database. It is good practice for your first backend login flow.',
        'auth.point1': 'Account data is stored in a local SQLite database.',
        'auth.point2': 'Passwords are hashed with scrypt, never stored as plain text.',
        'auth.point3': 'Login sessions use an HttpOnly cookie.',

        'auth.tabLogin': 'Log in',
        'auth.tabRegister': 'Sign up',
        'auth.loginTitle': 'Welcome back',
        'auth.loginDesc': 'Enter your account email and password.',
        'auth.registerTitle': 'Create a new account',
        'auth.registerDesc': 'Just a name, email, and a password with at least 8 characters.',
        'auth.name': 'Name',
        'auth.namePlaceholder': 'Example: Rani Putri',
        'auth.email': 'Email',
        'auth.emailPlaceholder': 'name@email.com',
        'auth.password': 'Password',
        'auth.passwordPlaceholder': 'At least 8 characters',
        'auth.submitLogin': 'Log in',
        'auth.submitRegister': 'Sign up',
        'auth.loading': 'Processing...',
        'auth.accountKicker': 'Active session',
        'auth.accountTitle': 'You are signed in',
        'auth.continue': 'Continue learning',
        'auth.logout': 'Log out',
        'auth.successLogin': 'Signed in. Taking you to the materials...',
        'auth.successRegister': 'Account created. Taking you to the materials...',
        'auth.logoutSuccess': 'You have signed out of this account.',
        'auth.footerNote': 'Account data is stored in local SQLite.',

        'error.INVALID_INPUT': 'Check your input. The name needs at least 2 characters and the password at least 8.',
        'error.EMAIL_TAKEN': 'This email is already registered. Try the Log in tab.',
        'error.INVALID_CREDENTIALS': 'Wrong email or password.',
        'error.TOO_MANY_ATTEMPTS': 'Too many login attempts. Try again in 10 minutes.',
        'error.SERVER_ERROR': 'Something went wrong on the server. Try again.',
        'error.SERVER_DOWN': 'The Node server is not connected. Run "node backend/server.js", then open http://localhost:3000/login.html. Do not use Live Server (port 5500).',
        'error.NOT_LOGGED_IN': 'Your session has ended. Please log in again.'
    }
};

let lang = 'id';
let currentUser = null;

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const formsBox = document.getElementById('authForms');
const accountBox = document.getElementById('authAccount');
const statusBox = document.getElementById('authStatus');
const tabButtons = document.querySelectorAll('[data-auth-tab]');

function t(key) {
    return (TEXT[lang] && TEXT[lang][key]) || TEXT.id[key] || key;
}

function errorText(code) {
    const key = 'error.' + (code || 'SERVER_ERROR');
    return (TEXT[lang] && TEXT[lang][key]) || TEXT.id[key] || TEXT.id['error.SERVER_ERROR'];
}

function readLang() {
    try {
        return localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'id';
    } catch (error) {
        return 'id';
    }
}

function applyLanguage() {
    document.documentElement.lang = lang;
    document.title = t('meta.title');

    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = t('meta.description');

    document.querySelectorAll('[data-login-i18n]').forEach(element => {
        const form = element.closest('form');
        const pending = form && form.dataset.pending === 'true';

        if (element.hasAttribute('data-login-submit') && pending) return;
        element.textContent = t(element.dataset.loginI18n);
    });

    document.querySelectorAll('[data-login-placeholder]').forEach(element => {
        element.placeholder = t(element.dataset.loginPlaceholder);
    });

    document.querySelectorAll('[data-login-aria]').forEach(element => {
        element.setAttribute('aria-label', t(element.dataset.loginAria));
    });

    document.querySelectorAll('.lang-switch button').forEach(button => {
        const active = button.dataset.lang === lang;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
    });
}

function showStatus(message, type) {
    statusBox.textContent = message;
    statusBox.classList.remove('is-error', 'is-success');
    statusBox.classList.add(type === 'success' ? 'is-success' : 'is-error');
    statusBox.hidden = false;
}

function clearStatus() {
    statusBox.textContent = '';
    statusBox.classList.remove('is-error', 'is-success');
    statusBox.hidden = true;
}

function setPending(form, pending) {
    const button = form.querySelector('[data-login-submit]');

    form.dataset.pending = pending ? 'true' : 'false';
    button.disabled = pending;
    button.textContent = pending ? t('auth.loading') : t(button.dataset.loginSubmit);
}

async function callApi(url, options = {}) {
    const response = await fetch(url, {
        method: options.method || 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        body: options.body ? JSON.stringify(options.body) : undefined
    });

    let data = {};
    try {
        data = await response.json();
    } catch (error) {
        data = {};
    }

    return { response, data };
}

function showAccount(user) {
    currentUser = user;

    formsBox.hidden = true;
    accountBox.hidden = false;
    clearStatus();

    document.getElementById('accountName').textContent = user.name;
    document.getElementById('accountEmail').textContent = user.email;
    document.getElementById('accountInitial').textContent = user.name.trim().charAt(0).toUpperCase() || 'B';
}

function showForms() {
    currentUser = null;
    formsBox.hidden = false;
    accountBox.hidden = true;
}

function selectTab(name) {
    tabButtons.forEach(button => {
        const active = button.dataset.authTab === name;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-selected', String(active));
    });

    loginForm.hidden = name !== 'login';
    registerForm.hidden = name !== 'register';
    clearStatus();
}

loginForm.addEventListener('submit', async event => {
    event.preventDefault();
    clearStatus();

    const email = loginForm.elements.email.value.trim();
    const password = loginForm.elements.password.value;

    if (!email || !password) {
        showStatus(errorText('INVALID_INPUT'), 'error');
        return;
    }

    setPending(loginForm, true);

    try {
        const { response, data } = await callApi('/api/login', {
            method: 'POST',
            body: { email, password }
        });

        if (!response.ok) {
            showStatus(data.error ? errorText(data.error) : errorText('SERVER_DOWN'), 'error');
            return;
        }

        showStatus(t('auth.successLogin'), 'success');
        window.setTimeout(() => {
            window.location.href = 'index.html#materi';
        }, 700);
    } catch (error) {
        showStatus(errorText('SERVER_DOWN'), 'error');
    } finally {
        setPending(loginForm, false);
    }
});

registerForm.addEventListener('submit', async event => {
    event.preventDefault();
    clearStatus();

    const name = registerForm.elements.name.value.replace(/\s+/g, ' ').trim();
    const email = registerForm.elements.email.value.trim();
    const password = registerForm.elements.password.value;

    if (name.length < 2 || !email || password.length < 8) {
        showStatus(errorText('INVALID_INPUT'), 'error');
        return;
    }

    setPending(registerForm, true);

    try {
        const { response, data } = await callApi('/api/register', {
            method: 'POST',
            body: { name, email, password }
        });

        if (!response.ok) {
            showStatus(data.error ? errorText(data.error) : errorText('SERVER_DOWN'), 'error');
            return;
        }

        showStatus(t('auth.successRegister'), 'success');
        window.setTimeout(() => {
            window.location.href = 'index.html#materi';
        }, 700);
    } catch (error) {
        showStatus(errorText('SERVER_DOWN'), 'error');
    } finally {
        setPending(registerForm, false);
    }
});

document.getElementById('logoutBtn').addEventListener('click', async () => {
    clearStatus();

    try {
        await callApi('/api/logout', { method: 'POST' });
        showForms();
        showStatus(t('auth.logoutSuccess'), 'success');
    } catch (error) {
        showStatus(errorText('SERVER_DOWN'), 'error');
    }
});

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectTab(button.dataset.authTab);
    });
});

document.querySelectorAll('.lang-switch button').forEach(button => {
    button.addEventListener('click', () => {
        lang = button.dataset.lang === 'en' ? 'en' : 'id';

        try {
            localStorage.setItem(LANG_KEY, lang);
        } catch (error) {
            /* localStorage bisa diblokir di mode privat; bahasa tetap berjalan. */
        }

        clearStatus();
        applyLanguage();
    });
});

async function checkSession() {
    try {
        const { response, data } = await callApi('/api/me');

        if (response.ok && data.user) {
            showAccount(data.user);
            return;
        }

        if (!response.ok && !data.error) {
            showStatus(errorText('SERVER_DOWN'), 'error');
        }
    } catch (error) {
        showStatus(errorText('SERVER_DOWN'), 'error');
    }
}

lang = readLang();
applyLanguage();
checkSession();
