/* =========================================================
   BackendPath Developer — logika aplikasi
   ========================================================= */

const STORAGE_PREFIX = 'backendpath:progress:';
const LANG_KEY = 'backendpath:lang';

/* ================= Teks antarmuka (ID + EN) ================= */
const STATIC_TEXT = {
    id: {
        'meta.title': 'BackendPath Developer — Belajar Backend untuk Junior',
        'meta.description': 'BackendPath Developer — panduan belajar backend untuk junior: Node.js, PHP, Python, Go, database, REST API, dan deploy. Langkah demi langkah untuk pemula.',

        'nav.home': 'Belajar',
        'nav.materi': 'Materi',
        'nav.latihan': 'Latihan',
        'nav.docs': 'Dokumentasi',
        'nav.login': 'Masuk',
        'search.label': 'Cari',
        'start.label': 'Mulai belajar',

        'aria.brand': 'BackendPath Developer, ke beranda',
        'aria.nav': 'Navigasi utama',
        'aria.menu': 'Buka menu',
        'aria.search': 'Cari materi',
        'aria.tabs': 'Pilih stack belajar',
        'aria.lang': 'Pilih bahasa',
        'side.progressAria': 'Progres panduan',

        'hero.crumb': 'Belajar / Backend Junior',
        'hero.title': 'Memulai backend untuk junior, langkah demi langkah',
        'hero.desc': 'Pilih stack, ikuti panduan praktis, dan tandai setiap langkah yang sudah selesai. Semua materi disusun untuk kamu yang baru mulai, tanpa perlu pengalaman kerja.',
        'hero.meta.beginner': 'Pemula',
        'hero.meta.stacks': '7 panduan stack',
        'hero.meta.practice': 'Praktik langsung',
        'hero.meta.free': 'Gratis',

        'side.progress': 'Progres',
        'side.browse': 'Lihat semua panduan →',
        'guide.exampleKicker': 'Gambaran hasil',
        'guide.prereqTitle': 'Yang perlu disiapkan',
        'guide.filesKicker': 'Struktur proyek',

        'home.kicker': 'Lanjutkan',
        'home.title': 'Setelah mencoba panduan pertama',
        'home.tile1.kicker': '01 / Jelajahi',
        'home.tile1.title': 'Pilih dari 7 panduan',
        'home.tile1.text': 'Bandingkan Node.js, PHP, Python, Go, database, REST, dan Git sesuai minatmu.',
        'home.tile2.kicker': '02 / Uji',
        'home.tile2.title': 'Coba kuis singkat',
        'home.tile2.text': 'Enam soal untuk mengecek pemahaman HTTP, SQL, Express, dan Git.',
        'home.tile3.kicker': '03 / Referensi',
        'home.tile3.title': 'Buka dokumentasi',
        'home.tile3.text': 'Cheat sheet status code, query SQL, perintah Git, dan keamanan dasar.',

        'materi.crumb': 'Belajar / Materi',
        'materi.title': 'Pilih panduan yang ingin kamu mulai',
        'materi.desc': 'Tujuh jalur praktik untuk membangun fondasi backend. Setiap panduan punya langkah, contoh kode, dan tips yang bisa langsung dicoba.',
        'materi.placeholder': 'Cari materi, misalnya SQL atau Express',
        'materi.empty': 'Tidak ada materi yang cocok. Coba kata kunci lain seperti "SQL", "API", atau "Git".',

        'latihan.crumb': 'Belajar / Latihan',
        'latihan.title': 'Uji pemahaman dengan enam soal singkat',
        'latihan.desc': 'Tanpa batas waktu. Setiap jawaban langsung diberi penjelasan, jadi kamu bisa belajar dari kesalahan.',

        'quiz.resultKicker': 'Hasil kuis',
        'quiz.retry': 'Coba lagi',
        'quiz.openMateri': 'Buka materi',
        'quiz.tipsStrong': 'Tips:',
        'quiz.tipsText': 'ulangi kuis sampai skor 6/6, lalu praktikkan konsepnya di panduan stack yang kamu pilih.',

        'docs.crumb': 'Belajar / Dokumentasi',
        'docs.title': 'Cheat sheet backend untuk pemula',
        'docs.desc': 'Referensi singkat yang bisa dibuka saat coding: HTTP, SQL, Git, Express, dan checklist keamanan dasar.',
        'docs.navLabel': 'Di halaman ini',
        'docs.navHttp': 'HTTP & REST',
        'docs.navSql': 'SQL dasar',
        'docs.navGit': 'Git',
        'docs.navExpress': 'Express',
        'docs.navSecurity': 'Keamanan',

        'docs.http.title': 'HTTP & REST',
        'docs.http.desc': 'Gunakan method sesuai aksi, dan kembalikan status code yang jujur.',
        'docs.http.method': 'Method',
        'docs.http.use': 'Kegunaan',
        'docs.http.example': 'Contoh endpoint',
        'docs.http.getUse': 'Mengambil data',
        'docs.http.postUse': 'Membuat data baru',
        'docs.http.putUse': 'Mengganti seluruh data',
        'docs.http.deleteUse': 'Menghapus data',
        'docs.http.status': 'Status',
        'docs.http.statusMeaning': 'Arti',
        'docs.http.s200': 'Permintaan berhasil',
        'docs.http.s201': 'Data baru berhasil dibuat',
        'docs.http.s400': 'Input tidak valid',
        'docs.http.s401': 'Belum terautentikasi',
        'docs.http.s403': 'Sudah login, tetapi tidak punya izin',
        'docs.http.s404': 'Data atau endpoint tidak ditemukan',
        'docs.http.s500': 'Kesalahan di sisi server',

        'docs.sql.title': 'SQL dasar',
        'docs.sql.desc': 'Empat query yang paling sering dipakai saat membangun CRUD.',
        'docs.sql.li1': 'Gunakan parameterized query (<code>$1</code>, <code>?</code>) untuk mencegah SQL injection.',
        'docs.sql.li2': 'Tambahkan <code>INDEX</code> pada kolom yang sering dipakai di <code>WHERE</code> atau <code>JOIN</code>.',
        'docs.sql.li3': 'Selalu uji <code>DELETE</code> dan <code>UPDATE</code> dengan <code>SELECT</code> lebih dulu.',

        'docs.git.title': 'Git',
        'docs.git.desc': 'Alur minimum untuk menyimpan pekerjaan dan berkolaborasi.',
        'docs.git.cmd': 'Perintah',
        'docs.git.fn': 'Fungsi',
        'docs.git.fn1': 'Melihat file yang berubah',
        'docs.git.fn2': 'Menandai perubahan untuk di-commit',
        'docs.git.fn3': 'Menyimpan snapshot perubahan',
        'docs.git.fn4': 'Membuat branch baru',
        'docs.git.fn5': 'Mengirim commit ke GitHub',

        'docs.express.title': 'Express',
        'docs.express.desc': 'Kerangka minimal untuk API Node.js. Urutan middleware penting: body parser dipasang sebelum route yang membutuhkannya.',
        'docs.express.li1': 'Simpan port dan kredensial di <code>.env</code>, bukan langsung di kode.',
        'docs.express.li2': 'Kembalikan <code>400</code> untuk input tidak valid, bukan <code>500</code>.',
        'docs.express.li3': 'Gunakan <code>express.Router()</code> jika route mulai banyak.',

        'docs.security.title': 'Keamanan dasar',
        'docs.security.desc': 'Checklist minimum sebelum API dibagikan ke orang lain.',
        'docs.security.li1': 'Hash password dengan <code>bcrypt</code> atau <code>argon2</code>; jangan simpan teks asli.',
        'docs.security.li2': 'Validasi semua input di server, bukan hanya di front-end.',
        'docs.security.li3': 'Jangan commit <code>.env</code>; tambahkan ke <code>.gitignore</code>.',
        'docs.security.li4': 'Gunakan HTTPS di produksi dan rotasi token rahasia secara berkala.',
        'docs.security.li5': 'Tambahkan rate limit pada endpoint login untuk mencegah brute force.',

        'footer.copy': 'BackendPath Developer. Dibuat untuk belajar backend secara mandiri.',
        'footer.motto': 'Belajar → praktik → ulangi.',

        'level.beginner': 'Pemula',
        'level.intermediate': 'Menengah'
    },
    en: {
        'meta.title': 'BackendPath Developer — Learn Backend for Juniors',
        'meta.description': 'BackendPath Developer — beginner backend guides: Node.js, PHP, Python, Go, databases, REST APIs, and deployment. Step by step for beginners.',

        'nav.home': 'Learn',
        'nav.materi': 'Guides',
        'nav.latihan': 'Practice',
        'nav.docs': 'Docs',
        'nav.login': 'Log in',
        'search.label': 'Search',
        'start.label': 'Start learning',

        'aria.brand': 'BackendPath Developer, back to home',
        'aria.nav': 'Main navigation',
        'aria.menu': 'Open menu',
        'aria.search': 'Search guides',
        'aria.tabs': 'Choose a learning stack',
        'aria.lang': 'Choose language',
        'side.progressAria': 'Guide progress',

        'hero.crumb': 'Learn / Junior Backend',
        'hero.title': 'Start your backend journey, one step at a time',
        'hero.desc': 'Pick a stack, follow practical guides, and mark every step you finish. Everything is written for beginners, with no work experience needed.',
        'hero.meta.beginner': 'Beginner',
        'hero.meta.stacks': '7 stack guides',
        'hero.meta.practice': 'Hands-on practice',
        'hero.meta.free': 'Free',

        'side.progress': 'Progress',
        'side.browse': 'Browse all guides →',
        'guide.exampleKicker': "What you'll build",
        'guide.prereqTitle': "What you'll need",
        'guide.filesKicker': 'Project structure',

        'home.kicker': 'Keep going',
        'home.title': 'After your first guide',
        'home.tile1.kicker': '01 / Explore',
        'home.tile1.title': 'Choose from 7 guides',
        'home.tile1.text': 'Compare Node.js, PHP, Python, Go, databases, REST, and Git.',
        'home.tile2.kicker': '02 / Test',
        'home.tile2.title': 'Try a short quiz',
        'home.tile2.text': 'Six questions to check your understanding of HTTP, SQL, Express, and Git.',
        'home.tile3.kicker': '03 / Reference',
        'home.tile3.title': 'Open the docs',
        'home.tile3.text': 'Cheat sheets for status codes, SQL queries, Git commands, and basic security.',

        'materi.crumb': 'Learn / Guides',
        'materi.title': 'Choose the guide you want to start',
        'materi.desc': 'Seven hands-on tracks to build your backend foundation. Every guide has steps, code samples, and tips you can try right away.',
        'materi.placeholder': 'Search guides, for example SQL or Express',
        'materi.empty': 'No matching guides. Try another keyword such as "SQL", "API", or "Git".',

        'latihan.crumb': 'Learn / Practice',
        'latihan.title': 'Test your understanding with six short questions',
        'latihan.desc': 'No time limit. Every answer comes with an explanation, so you can learn from mistakes.',

        'quiz.resultKicker': 'Quiz result',
        'quiz.retry': 'Try again',
        'quiz.openMateri': 'Open guides',
        'quiz.tipsStrong': 'Tip:',
        'quiz.tipsText': 'repeat the quiz until you score 6/6, then apply the concepts in the stack guide you chose.',

        'docs.crumb': 'Learn / Docs',
        'docs.title': 'Beginner backend cheat sheet',
        'docs.desc': 'Quick references you can open while coding: HTTP, SQL, Git, Express, and a basic security checklist.',
        'docs.navLabel': 'On this page',
        'docs.navHttp': 'HTTP & REST',
        'docs.navSql': 'Basic SQL',
        'docs.navGit': 'Git',
        'docs.navExpress': 'Express',
        'docs.navSecurity': 'Security',

        'docs.http.title': 'HTTP & REST',
        'docs.http.desc': 'Use the right method for each action, and return honest status codes.',
        'docs.http.method': 'Method',
        'docs.http.use': 'Purpose',
        'docs.http.example': 'Endpoint example',
        'docs.http.getUse': 'Read data',
        'docs.http.postUse': 'Create new data',
        'docs.http.putUse': 'Replace the whole record',
        'docs.http.deleteUse': 'Delete data',
        'docs.http.status': 'Status',
        'docs.http.statusMeaning': 'Meaning',
        'docs.http.s200': 'Request succeeded',
        'docs.http.s201': 'New record created',
        'docs.http.s400': 'Invalid input',
        'docs.http.s401': 'Not authenticated',
        'docs.http.s403': 'Logged in but not allowed',
        'docs.http.s404': 'Record or endpoint not found',
        'docs.http.s500': 'Server error',

        'docs.sql.title': 'Basic SQL',
        'docs.sql.desc': 'The four queries you use most when building CRUD.',
        'docs.sql.li1': 'Use parameterized queries (<code>$1</code>, <code>?</code>) to prevent SQL injection.',
        'docs.sql.li2': 'Add an <code>INDEX</code> to columns often used in <code>WHERE</code> or <code>JOIN</code>.',
        'docs.sql.li3': 'Always test <code>DELETE</code> and <code>UPDATE</code> with a <code>SELECT</code> first.',

        'docs.git.title': 'Git',
        'docs.git.desc': 'The minimum workflow for saving work and collaborating.',
        'docs.git.cmd': 'Command',
        'docs.git.fn': 'Purpose',
        'docs.git.fn1': 'See changed files',
        'docs.git.fn2': 'Stage changes for commit',
        'docs.git.fn3': 'Save a snapshot of changes',
        'docs.git.fn4': 'Create a new branch',
        'docs.git.fn5': 'Send commits to GitHub',

        'docs.express.title': 'Express',
        'docs.express.desc': 'A minimal skeleton for a Node.js API. Middleware order matters: the body parser must come before routes that need it.',
        'docs.express.li1': 'Keep the port and credentials in <code>.env</code>, not directly in code.',
        'docs.express.li2': 'Return <code>400</code> for invalid input, not <code>500</code>.',
        'docs.express.li3': 'Use <code>express.Router()</code> when routes start piling up.',

        'docs.security.title': 'Basic security',
        'docs.security.desc': 'A minimum checklist before sharing your API with others.',
        'docs.security.li1': 'Hash passwords with <code>bcrypt</code> or <code>argon2</code>; never store plain text.',
        'docs.security.li2': 'Validate every input on the server, not only on the front-end.',
        'docs.security.li3': "Don't commit <code>.env</code>; add it to <code>.gitignore</code>.",
        'docs.security.li4': 'Use HTTPS in production and rotate secret tokens regularly.',
        'docs.security.li5': 'Add rate limiting to login endpoints to prevent brute force.',

        'footer.copy': 'BackendPath Developer. Built for learning backend on your own.',
        'footer.motto': 'Learn → practice → repeat.',

        'level.beginner': 'Beginner',
        'level.intermediate': 'Intermediate'
    }
};

/* ================= Data panduan ================= */
const GUIDES = {
    node: {
        name: 'Node.js',
        icon: 'assets/logos/nodejs.svg',
        level: 'beginner',
        minutes: 45,
        search: 'node js javascript express backend api server pemula beginner',
        cardTitle: 'Node.js + Express',
        blurb: {
            id: 'Buat API pertama dengan JavaScript di server: routing, JSON, dan endpoint POST.',
            en: 'Build your first API with JavaScript on the server: routing, JSON, and POST endpoints.'
        },
        exampleCode: `[
  { "id": 1, "title": "Belajar Node.js", "done": false },
  { "id": 2, "title": "Coba API", "done": false }
]`,
        example: {
            id: { label: 'Respons GET /api/todos' },
            en: { label: 'GET /api/todos response' }
        },
        files: {
            nav: { id: 'Struktur proyek', en: 'Project files' },
            title: { id: 'Folder data dan file JavaScript', en: 'Data folder and JavaScript files' },
            desc: {
                id: 'Folder data menyimpan data backend sebagai JavaScript biasa, sedangkan folder routes menyimpan alamat API. Pisahkan keduanya supaya server.js tetap pendek dan mudah dibaca.',
                en: 'The data folder keeps backend data as plain JavaScript, while the routes folder keeps the API addresses. Keeping them apart makes server.js short and easy to read.'
            },
            blocks: [
                {
                    label: { id: 'Struktur folder', en: 'Folder structure' },
                    code: `todo-api/
├── data/
│   └── todos.js
├── routes/
│   └── todos.js
├── server.js
└── package.json`
                },
                {
                    label: { id: 'data/todos.js', en: 'data/todos.js' },
                    code: `let todos = [
  { id: 1, title: 'Belajar Node.js', done: false }
]

let nextId = 2

function getAll() {
  return todos
}

function add(title) {
  const todo = {
    id: nextId,
    title: title,
    done: false
  }

  nextId = nextId + 1
  todos.push(todo)

  return todo
}

module.exports = { getAll, add }`
                }
            ]
        },
        steps: [
            {
                label: 'Terminal',
                code: `mkdir todo-api
cd todo-api
npm init -y
npm install express
mkdir data routes`,
                id: {
                    title: 'Siapkan proyek dan folder',
                    body: 'Buat folder proyek, pasang Express, lalu siapkan folder data dan routes. Struktur sederhana ini mirip proyek sekolah: setiap bagian punya tugas sendiri.',
                    tip: 'Cek dengan node -v dan npm -v sebelum mulai. Gunakan Node.js versi LTS agar stabil.'
                },
                en: {
                    title: 'Set up the project and folders',
                    body: 'Create the project folder, install Express, then prepare the data and routes folders. This simple structure keeps every part focused on one job.',
                    tip: 'Check node -v and npm -v before you start. Use the Node.js LTS version for stability.'
                }
            },
            {
                label: 'routes/todos.js',
                code: `const express = require('express')
const store = require('../data/todos')

const router = express.Router()

router.get('/', function (req, res) {
  res.json(store.getAll())
})

router.post('/', function (req, res) {
  const title = req.body.title

  if (!title) {
    return res.status(400).json({ error: 'title wajib diisi' })
  }

  const todo = store.add(title)
  res.status(201).json(todo)
})

module.exports = router`,
                id: {
                    title: 'Buat route memakai folder routes',
                    body: 'File ini mengambil data dari data/todos.js lalu mengirimnya sebagai JSON. Router baru dipasang di server.js pada langkah berikutnya.',
                    tip: 'Awalan / di router.get menjadi /api/todos karena router dipasang dengan app.use(\'/api/todos\', ...).'
                },
                en: {
                    title: 'Create a route inside the routes folder',
                    body: 'This file reads data from data/todos.js and sends it as JSON. The router is mounted in server.js in the next step.',
                    tip: 'The / prefix in router.get becomes /api/todos because the router is mounted with app.use(\'/api/todos\', ...).'
                }
            },
            {
                label: 'server.js',
                code: `const express = require('express')
const todoRoutes = require('./routes/todos')

const app = express()
const PORT = 3000

app.use(express.json())
app.use('/api/todos', todoRoutes)

app.listen(PORT, function () {
  console.log('API berjalan di http://localhost:' + PORT)
})`,
                id: {
                    title: 'Hubungkan route ke server.js',
                    body: 'server.js hanya menyiapkan Express, membaca body JSON, memasang route todo, lalu menjalankan server di port 3000.',
                    tip: 'express.json() wajib dipasang sebelum route POST agar req.body terisi.'
                },
                en: {
                    title: 'Connect the route to server.js',
                    body: 'server.js only sets up Express, reads the JSON body, mounts the todo routes, then starts the server on port 3000.',
                    tip: 'express.json() must be mounted before POST routes so req.body gets filled.'
                }
            },
            {
                label: 'Terminal',
                code: `curl http://localhost:3000/api/todos

curl -X POST http://localhost:3000/api/todos \\
  -H "Content-Type: application/json" \\
  -d '{"title":"Coba API"}'`,
                id: {
                    title: 'Uji endpoint GET dan POST',
                    body: 'Uji kedua endpoint sebelum menghubungkannya ke front-end. Perhatikan status code pada setiap respons.',
                    tip: 'Simpan request di Postman atau file .http agar pengujian bisa diulang kapan saja.'
                },
                en: {
                    title: 'Test the GET and POST endpoints',
                    body: 'Test both endpoints before connecting them to a front-end. Pay attention to the status code in every response.',
                    tip: 'Save requests in Postman or an .http file so you can repeat the tests anytime.'
                }
            }
        ],
        id: {
            title: 'Memulai Backend dengan Node.js',
            intro: [
                'Node.js adalah runtime yang menjalankan JavaScript di luar browser. Dengan Node.js kamu bisa membuat server, API, dan tooling memakai bahasa yang sama dengan front-end.',
                'Di panduan ini kamu akan membangun API todo kecil dengan Express. Data disimpan di file JavaScript pada folder data, route dipisah ke folder routes, dan semua respons berbentuk JSON.'
            ],
            prereqs: [
                'Node.js versi LTS dan npm',
                'Terminal atau Command Prompt',
                'Editor kode seperti VS Code',
                'Browser untuk membuka http://localhost:3000'
            ],
            next: {
                title: 'Lanjut ke REST API & keamanan',
                text: 'Setelah CRUD berjalan, rapikan desain endpoint dan amankan data pengguna.',
                guide: 'rest',
                label: 'Buka panduan REST'
            }
        },
        en: {
            title: 'Getting Started with Node.js Backend',
            intro: [
                'Node.js is a runtime that runs JavaScript outside the browser. With Node.js you can build servers, APIs, and tooling using the same language as the front-end.',
                'In this guide you will build a small todo API with Express. Data lives in a JavaScript file inside the data folder, routes are split into the routes folder, and every response is JSON.'
            ],
            prereqs: [
                'Node.js LTS and npm',
                'A terminal or Command Prompt',
                'A code editor such as VS Code',
                'A browser for http://localhost:3000'
            ],
            next: {
                title: 'Continue to REST API & security',
                text: 'Once CRUD works, tidy up endpoint design and secure user data.',
                guide: 'rest',
                label: 'Open REST guide'
            }
        }
    },

    php: {
        name: 'PHP',
        icon: 'assets/logos/php.svg',
        level: 'beginner',
        minutes: 50,
        search: 'php laravel composer mvc backend pemula beginner',
        cardTitle: 'PHP + Laravel',
        blurb: {
            id: 'Kenali struktur MVC, routing API, dan migration database dengan Laravel.',
            en: 'Learn MVC structure, API routing, and database migrations with Laravel.'
        },
        exampleCode: `{
  "id": 1,
  "title": "Belajar Laravel",
  "done": false
}`,
        example: {
            id: { label: 'Respons GET /api/todos' },
            en: { label: 'GET /api/todos response' }
        },
        steps: [
            {
                label: 'Terminal',
                code: `composer create-project laravel/laravel todo-api
cd todo-api
php artisan serve`,
                id: {
                    title: 'Pasang Laravel',
                    body: 'Composer membuat proyek Laravel lengkap beserta struktur folder dan konfigurasi awalnya.',
                    tip: 'Butuh PHP 8.2+ dan Composer. Buka http://127.0.0.1:8000 untuk memastikan instalasi berhasil.'
                },
                en: {
                    title: 'Install Laravel',
                    body: 'Composer creates a complete Laravel project with its folder structure and initial configuration.',
                    tip: 'Requires PHP 8.2+ and Composer. Open http://127.0.0.1:8000 to confirm the installation worked.'
                }
            },
            {
                label: 'routes/api.php',
                code: `use App\\Http\\Controllers\\TodoController;
use Illuminate\\Support\\Facades\\Route;

Route::get('/todos', [TodoController::class, 'index']);`,
                id: {
                    title: 'Pahami alur MVC',
                    body: 'Request masuk lewat routes/api.php, diteruskan ke controller, lalu controller memanggil model untuk mengolah data.',
                    tip: 'Route di dalam routes/api.php otomatis berawalan /api, jadi route di atas diakses lewat /api/todos.'
                },
                en: {
                    title: 'Understand the MVC flow',
                    body: 'A request enters through routes/api.php, goes to the controller, then the controller calls the model to work with data.',
                    tip: 'Routes inside routes/api.php automatically start with /api, so the route above is reached at /api/todos.'
                }
            },
            {
                label: 'database/migrations/create_todos_table.php',
                code: `Schema::create('todos', function (Blueprint $table) {
    $table->id();
    $table->string('title');
    $table->boolean('done')->default(false);
    $table->timestamps();
});`,
                id: {
                    title: 'Buat migration dan model',
                    body: 'Migration mendefinisikan struktur tabel lewat kode sehingga bisa dijalankan ulang di komputer lain.',
                    tip: 'Buat file dengan php artisan make:model Todo -m, atur kolomnya, lalu jalankan php artisan migrate.'
                },
                en: {
                    title: 'Create the migration and model',
                    body: 'A migration defines the table structure in code, so it can be run again on another computer.',
                    tip: 'Create the file with php artisan make:model Todo -m, set the columns, then run php artisan migrate.'
                }
            },
            {
                label: 'app/Http/Controllers/TodoController.php',
                code: `Route::apiResource('todos', TodoController::class);

public function index()
{
    return Todo::latest()->get();
}`,
                id: {
                    title: 'Buka endpoint CRUD',
                    body: 'apiResource membuat lima route CRUD sekaligus: index, store, show, update, dan destroy.',
                    tip: 'Validasi input di controller dengan $request->validate([...]) sebelum data disimpan.'
                },
                en: {
                    title: 'Expose CRUD endpoints',
                    body: 'apiResource creates five CRUD routes at once: index, store, show, update, and destroy.',
                    tip: 'Validate input in the controller with $request->validate([...]) before saving data.'
                }
            }
        ],
        id: {
            title: 'Backend dengan PHP dan Laravel',
            intro: [
                'PHP adalah bahasa server yang sudah lama dipakai untuk membangun website dinamis. Laravel menambahkan struktur MVC, routing, migration, dan validasi sehingga proyek tetap rapi saat bertambah besar.',
                'Kamu akan membuat API todo dengan Laravel: route di routes/api.php, controller untuk mengambil data, dan model Eloquent yang terhubung ke tabel todos. Hasil akhirnya berupa JSON yang bisa dipakai front-end atau aplikasi mobile.'
            ],
            prereqs: [
                'PHP 8.2 atau lebih baru',
                'Composer untuk mengelola paket PHP',
                'Database MySQL atau PostgreSQL (opsional untuk latihan)',
                'Editor kode dan terminal'
            ],
            next: {
                title: 'Lanjut ke database & SQL',
                text: 'Pahami relasi tabel dan query JOIN agar struktur data aplikasimu kuat.',
                guide: 'database',
                label: 'Buka panduan SQL'
            }
        },
        en: {
            title: 'Backend with PHP and Laravel',
            intro: [
                'PHP is a server language that has long been used to build dynamic websites. Laravel adds MVC structure, routing, migrations, and validation so the project stays tidy as it grows.',
                'You will build a todo API with Laravel: routes in routes/api.php, a controller to fetch data, and an Eloquent model connected to the todos table. The result is JSON that a front-end or mobile app can use.'
            ],
            prereqs: [
                'PHP 8.2 or newer',
                'Composer to manage PHP packages',
                'MySQL or PostgreSQL (optional for practice)',
                'A code editor and terminal'
            ],
            next: {
                title: 'Continue to databases & SQL',
                text: 'Understand table relations and JOIN queries to make your app data model solid.',
                guide: 'database',
                label: 'Open SQL guide'
            }
        }
    },

    python: {
        name: 'Python',
        icon: 'assets/logos/python.svg',
        level: 'beginner',
        minutes: 40,
        search: 'python fastapi pydantic api backend pemula beginner',
        cardTitle: 'Python + FastAPI',
        blurb: {
            id: 'Buat API modern dengan validasi otomatis dan dokumentasi yang langsung jadi.',
            en: 'Build a modern API with automatic validation and ready-made documentation.'
        },
        exampleCode: `[
  { "id": 1, "title": "Belajar FastAPI", "done": false }
]`,
        example: {
            id: { label: 'Respons GET /api/todos' },
            en: { label: 'GET /api/todos response' }
        },
        steps: [
            {
                label: 'Terminal',
                code: `python -m venv .venv
source .venv/bin/activate
pip install fastapi uvicorn`,
                id: {
                    title: 'Siapkan lingkungan virtual',
                    body: 'Virtual environment memisahkan dependensi proyek ini dari proyek Python lainnya.',
                    tip: 'Di Windows, aktifkan dengan .venv\\Scripts\\activate.'
                },
                en: {
                    title: 'Set up a virtual environment',
                    body: 'A virtual environment separates this project’s dependencies from other Python projects.',
                    tip: 'On Windows, activate it with .venv\\Scripts\\activate.'
                }
            },
            {
                label: 'main.py',
                code: `from fastapi import FastAPI

app = FastAPI()

@app.get("/api/todos")
def list_todos():
    return [{"id": 1, "title": "Belajar FastAPI", "done": False}]`,
                id: {
                    title: 'Buat aplikasi pertama',
                    body: 'Simpan kode di main.py, jalankan server, lalu buka /api/todos. FastAPI otomatis mengubah list Python menjadi JSON.',
                    tip: 'Jalankan dengan uvicorn main:app --reload agar server ikut berubah setiap kali kode disimpan.'
                },
                en: {
                    title: 'Create the first app',
                    body: 'Save the code in main.py, run the server, then open /api/todos. FastAPI automatically turns the Python list into JSON.',
                    tip: 'Run it with uvicorn main:app --reload so the server updates whenever you save the code.'
                }
            },
            {
                label: 'main.py',
                code: `from pydantic import BaseModel

class TodoCreate(BaseModel):
    title: str

@app.post("/api/todos", status_code=201)
def create_todo(payload: TodoCreate):
    return {"id": 2, "title": payload.title, "done": False}`,
                id: {
                    title: 'Validasi input dengan Pydantic',
                    body: 'Pydantic memeriksa tipe data sebelum masuk ke fungsi. Title yang kosong atau bukan string langsung ditolak.',
                    tip: 'Saat validasi gagal, FastAPI otomatis mengembalikan status 422 beserta detail kolom yang salah.'
                },
                en: {
                    title: 'Validate input with Pydantic',
                    body: 'Pydantic checks types before data reaches the function. An empty title or a non-string value is rejected immediately.',
                    tip: 'When validation fails, FastAPI automatically returns status 422 with the details of the invalid field.'
                }
            },
            {
                label: 'Terminal',
                code: `uvicorn main:app --reload

# buka http://127.0.0.1:8000/docs`,
                id: {
                    title: 'Cek dokumentasi otomatis',
                    body: 'FastAPI membuat halaman interaktif di /docs. Kamu bisa mencoba setiap endpoint langsung dari browser tanpa menulis curl.',
                    tip: 'Manfaatkan /docs untuk menguji POST sebelum front-end terhubung ke API.'
                },
                en: {
                    title: 'Check the automatic docs',
                    body: 'FastAPI creates an interactive page at /docs. You can try every endpoint from the browser without writing curl.',
                    tip: 'Use /docs to test POST before connecting a front-end to the API.'
                }
            }
        ],
        id: {
            title: 'API Modern dengan Python dan FastAPI',
            intro: [
                'Python adalah bahasa yang mudah dibaca dan banyak dipakai untuk backend, otomasi, dan data. FastAPI memanfaatkan type hint Python untuk memvalidasi request otomatis dan membuat dokumentasi interaktif.',
                'Di panduan ini kamu akan membuat API todo dengan FastAPI. Satu endpoint membaca daftar tugas, satu endpoint lagi menambah tugas baru. Setelah server berjalan, buka /docs untuk mencoba setiap endpoint langsung dari browser.'
            ],
            prereqs: [
                'Python 3.10 atau lebih baru',
                'pip untuk memasang paket',
                'Terminal dan editor kode',
                'Browser untuk membuka http://127.0.0.1:8000/docs'
            ],
            next: {
                title: 'Lanjut ke database & SQL',
                text: 'Tambahkan penyimpanan permanen dengan tabel dan query yang benar.',
                guide: 'database',
                label: 'Buka panduan SQL'
            }
        },
        en: {
            title: 'Modern APIs with Python and FastAPI',
            intro: [
                'Python is a readable language widely used for backend, automation, and data. FastAPI uses Python type hints to validate requests automatically and generate interactive documentation.',
                'In this guide you will build a todo API with FastAPI. One endpoint reads the task list, another adds a new task. Once the server runs, open /docs to try every endpoint from the browser.'
            ],
            prereqs: [
                'Python 3.10 or newer',
                'pip to install packages',
                'A terminal and code editor',
                'A browser for http://127.0.0.1:8000/docs'
            ],
            next: {
                title: 'Continue to databases & SQL',
                text: 'Add permanent storage with proper tables and queries.',
                guide: 'database',
                label: 'Open SQL guide'
            }
        }
    },

    go: {
        name: 'Go',
        icon: 'assets/logos/go.svg',
        level: 'beginner',
        minutes: 35,
        search: 'go golang net http backend server pemula beginner',
        cardTitle: 'Go + net/http',
        blurb: {
            id: 'Bangun HTTP server ringan dengan paket standar Go, tanpa framework tambahan.',
            en: 'Build a lightweight HTTP server with the Go standard library, no extra framework.'
        },
        exampleCode: `{ "id": 1, "title": "Belajar Go", "done": false }`,
        example: {
            id: { label: 'Respons GET /api/todos' },
            en: { label: 'GET /api/todos response' }
        },
        steps: [
            {
                label: 'Terminal',
                code: `mkdir todo-api
cd todo-api
go mod init todo-api`,
                id: {
                    title: 'Siapkan modul Go',
                    body: 'Modul mencatat identitas proyek dan dependensinya. Untuk panduan ini kamu hanya memakai paket standar.',
                    tip: 'Butuh Go 1.22+ agar pola method seperti "GET /api/todos" didukung ServeMux.'
                },
                en: {
                    title: 'Set up the Go module',
                    body: 'The module records the project identity and its dependencies. In this guide you only use the standard library.',
                    tip: 'Requires Go 1.22+ so ServeMux supports method patterns like "GET /api/todos".'
                }
            },
            {
                label: 'main.go',
                code: `package main

import (
    "encoding/json"
    "net/http"
)

func main() {
    mux := http.NewServeMux()
    mux.HandleFunc("GET /api/todos", listTodos)
    http.ListenAndServe(":3000", mux)
}

func listTodos(w http.ResponseWriter, r *http.Request) {
    json.NewEncoder(w).Encode([]map[string]any{
        {"id": 1, "title": "Belajar Go", "done": false},
    })
}`,
                id: {
                    title: 'Buat handler pertama',
                    body: 'ServeMux mencocokkan method dan path, lalu memanggil handler yang sesuai.',
                    tip: 'json.NewEncoder menulis respons JSON langsung ke ResponseWriter.'
                },
                en: {
                    title: 'Create the first handler',
                    body: 'ServeMux matches the method and path, then calls the matching handler.',
                    tip: 'json.NewEncoder writes the JSON response directly to the ResponseWriter.'
                }
            },
            {
                label: 'main.go',
                code: `type Todo struct {
    Title string \`json:"title"\`
}

func createTodo(w http.ResponseWriter, r *http.Request) {
    var todo Todo

    if err := json.NewDecoder(r.Body).Decode(&todo); err != nil {
        http.Error(w, "JSON tidak valid", http.StatusBadRequest)
        return
    }

    w.WriteHeader(http.StatusCreated)
    json.NewEncoder(w).Encode(todo)
}`,
                id: {
                    title: 'Terima data POST',
                    body: 'Decode body JSON ke struct. Jika formatnya salah, kembalikan status 400 agar klien tahu penyebabnya.',
                    tip: 'Daftarkan handler dengan mux.HandleFunc("POST /api/todos", createTodo).'
                },
                en: {
                    title: 'Accept POST data',
                    body: 'Decode the JSON body into a struct. If the format is wrong, return status 400 so the client knows what happened.',
                    tip: 'Register the handler with mux.HandleFunc("POST /api/todos", createTodo).'
                }
            },
            {
                label: 'Terminal',
                code: `go run .
curl http://localhost:3000/api/todos`,
                id: {
                    title: 'Jalankan dan uji',
                    body: 'Jalankan server lalu uji lewat curl. Saat siap deploy, go build menghasilkan satu binary yang mudah dipasang di server.',
                    tip: 'Jalankan gofmt pada file Go agar format kode konsisten tanpa perlu diatur manual.'
                },
                en: {
                    title: 'Run and test',
                    body: 'Run the server and test it with curl. When it is time to deploy, go build produces a single binary that is easy to install on a server.',
                    tip: 'Run gofmt on Go files so formatting stays consistent without manual work.'
                }
            }
        ],
        id: {
            title: 'HTTP Server Ringan dengan Go',
            intro: [
                'Go adalah bahasa kompilasi yang cepat dan sederhana. Paket standar net/http sudah cukup untuk membuat HTTP server tanpa framework tambahan.',
                'Kamu akan membuat API todo dengan dua handler: GET /api/todos dan POST /api/todos. Data JSON dibaca lewat encoding/json, lalu aplikasi bisa dibangun menjadi satu binary yang mudah dideploy.'
            ],
            prereqs: [
                'Go 1.22 atau lebih baru',
                'Terminal dan editor kode',
                'curl atau Postman untuk menguji endpoint',
                'Browser untuk melihat respons'
            ],
            next: {
                title: 'Lanjut ke database & SQL',
                text: 'Simpan data Go-mu ke database dengan model tabel yang rapi.',
                guide: 'database',
                label: 'Buka panduan SQL'
            }
        },
        en: {
            title: 'Lightweight HTTP Server with Go',
            intro: [
                'Go is a fast and simple compiled language. The standard net/http package is enough to build an HTTP server without extra frameworks.',
                'You will build a todo API with two handlers: GET /api/todos and POST /api/todos. JSON data is read through encoding/json, and the app can be compiled into a single binary that is easy to deploy.'
            ],
            prereqs: [
                'Go 1.22 or newer',
                'A terminal and code editor',
                'curl or Postman to test endpoints',
                'A browser to view responses'
            ],
            next: {
                title: 'Continue to databases & SQL',
                text: 'Store your Go data in a database with a tidy table model.',
                guide: 'database',
                label: 'Open SQL guide'
            }
        }
    },

    database: {
        name: 'Database',
        icon: 'assets/logos/postgresql.svg',
        level: 'beginner',
        minutes: 40,
        search: 'database sql postgres mysql tabel table join query pemula beginner',
        cardTitle: 'Database & SQL',
        blurb: {
            id: 'Rancang tabel, isi data, lalu ambil dengan query JOIN yang benar.',
            en: 'Design tables, insert data, then query it with correct JOINs.'
        },
        exampleCode: `title               | email
--------------------+----------------------
Belajar SQL         | budi@example.com
Belajar JOIN        | sari@example.com`,
        example: {
            id: { label: 'Contoh hasil query JOIN' },
            en: { label: 'Example JOIN result' }
        },
        steps: [
            {
                label: 'schema.sql',
                code: `CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL
);

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  title TEXT NOT NULL,
  done BOOLEAN DEFAULT false
);`,
                id: {
                    title: 'Buat tabel yang saling terhubung',
                    body: 'Mulai dari dua tabel. Kolom user_id di todos adalah foreign key yang menunjuk ke users.id.',
                    tip: 'Foreign key mencegah todo tersimpan tanpa pemilik yang valid.'
                },
                en: {
                    title: 'Create connected tables',
                    body: 'Start with two tables. The user_id column in todos is a foreign key pointing to users.id.',
                    tip: 'A foreign key prevents a todo from being saved without a valid owner.'
                }
            },
            {
                label: 'query.sql',
                code: `INSERT INTO users (email) VALUES ('budi@example.com');
INSERT INTO todos (user_id, title) VALUES (1, 'Belajar SQL');

SELECT id, title, done
FROM todos
WHERE done = false;`,
                id: {
                    title: 'Insert dan select dasar',
                    body: 'Isi data contoh, lalu ambil hanya todo yang belum selesai.',
                    tip: 'Jalankan SELECT dengan WHERE yang sama sebelum UPDATE atau DELETE agar tidak salah sasaran.'
                },
                en: {
                    title: 'Insert and select basics',
                    body: 'Insert sample data, then fetch only unfinished todos.',
                    tip: 'Run a SELECT with the same WHERE before UPDATE or DELETE so you do not hit the wrong rows.'
                }
            },
            {
                label: 'query.sql',
                code: `SELECT todos.title, users.email
FROM todos
JOIN users ON users.id = todos.user_id
WHERE todos.done = false;`,
                id: {
                    title: 'Gabungkan dua tabel dengan JOIN',
                    body: 'JOIN menggabungkan baris dari dua tabel berdasarkan kolom relasi. Hasilnya, setiap todo tampil bersama email pemiliknya.',
                    tip: 'Tulis prefix tabel (todos.title) saat JOIN agar kolom tidak ambigu.'
                },
                en: {
                    title: 'Combine two tables with JOIN',
                    body: 'JOIN merges rows from two tables based on relation columns. As a result, each todo appears with its owner email.',
                    tip: 'Use table prefixes (todos.title) in JOIN queries so columns are not ambiguous.'
                }
            },
            {
                label: 'query.sql',
                code: `CREATE INDEX idx_todos_user_id ON todos(user_id);

-- di kode aplikasi:
-- SELECT * FROM todos WHERE user_id = $1;`,
                id: {
                    title: 'Tambah indeks dan query aman',
                    body: 'Indeks mempercepat pencarian pada kolom yang sering dipakai. Di kode aplikasi, selalu gunakan parameterized query.',
                    tip: 'Jangan memberi indeks ke semua kolom; setiap indeks memperlambat insert dan update.'
                },
                en: {
                    title: 'Add an index and safe queries',
                    body: 'An index speeds up searches on frequently used columns. In application code, always use parameterized queries.',
                    tip: 'Do not index every column; each index slows down inserts and updates.'
                }
            }
        ],
        id: {
            title: 'Database Relasional dan SQL Dasar',
            intro: [
                'Database menyimpan data secara permanen, jadi data tetap ada saat server restart. Di backend, kamu perlu merancang tabel, relasi, dan query yang benar sejak awal.',
                'Panduan ini memakai dua tabel sederhana: users dan todos. Kamu akan berlatih INSERT, SELECT, JOIN, dan menambahkan indeks pada kolom yang sering dicari.'
            ],
            prereqs: [
                'PostgreSQL atau MySQL',
                'psql, MySQL client, atau GUI seperti DBeaver',
                'Terminal untuk menjalankan query',
                'Pemahaman tabel dasar (opsional)'
            ],
            next: {
                title: 'Lanjut ke REST API & keamanan',
                text: 'Hubungkan database ke endpoint yang konsisten dan aman.',
                guide: 'rest',
                label: 'Buka panduan REST'
            }
        },
        en: {
            title: 'Relational Databases and Basic SQL',
            intro: [
                'A database stores data permanently, so the data survives a server restart. In the backend you need to design tables, relations, and correct queries from the start.',
                'This guide uses two simple tables: users and todos. You will practice INSERT, SELECT, JOIN, and add an index to columns that are searched often.'
            ],
            prereqs: [
                'PostgreSQL or MySQL',
                'psql, MySQL client, or a GUI such as DBeaver',
                'A terminal to run queries',
                'Basic table knowledge (optional)'
            ],
            next: {
                title: 'Continue to REST API & security',
                text: 'Connect the database to consistent and secure endpoints.',
                guide: 'rest',
                label: 'Open REST guide'
            }
        }
    },

    rest: {
        name: 'REST API',
        icon: 'assets/logos/swagger.svg',
        level: 'intermediate',
        minutes: 35,
        search: 'rest api http status auth jwt keamanan security validasi validation menengah intermediate',
        cardTitle: 'REST API & keamanan',
        cardTitleEn: 'REST API & security',
        blurb: {
            id: 'Rancang endpoint konsisten, pilih status code tepat, dan amankan password.',
            en: 'Design consistent endpoints, pick the right status codes, and secure passwords.'
        },
        exampleCode: `{
  "id": 3,
  "title": "Belajar REST",
  "done": false
}`,
        example: {
            id: { label: 'Respons 201 Created' },
            en: { label: '201 Created response' }
        },
        steps: [
            {
                label: 'Daftar endpoint',
                code: `GET    /api/todos
GET    /api/todos/:id
POST   /api/todos
PUT    /api/todos/:id
DELETE /api/todos/:id`,
                id: {
                    title: 'Rancang resource dan endpoint',
                    body: 'Gunakan kata benda untuk resource, dan biarkan method HTTP menunjukkan aksinya.',
                    tip: 'Gunakan bentuk jamak (todos), bukan nama aksi seperti getTodos.'
                },
                en: {
                    title: 'Design resources and endpoints',
                    body: 'Use nouns for resources, and let the HTTP method show the action.',
                    tip: 'Use plurals (todos), not action names such as getTodos.'
                }
            },
            {
                label: 'Express',
                code: `app.get('/api/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === Number(req.params.id))

  if (!todo) {
    return res.status(404).json({ error: 'Todo tidak ditemukan' })
  }

  res.json(todo)
})`,
                id: {
                    title: 'Pilih status code yang jujur',
                    body: 'Status code memberi tahu hasil request tanpa perlu membaca body. 200 sukses, 201 dibuat, 400 input salah, 404 tidak ditemukan, 500 kesalahan server.',
                    tip: 'Jangan mengembalikan 200 untuk request yang gagal; front-end akan sulit membedakan hasilnya.'
                },
                en: {
                    title: 'Choose honest status codes',
                    body: 'Status codes tell the result of a request without reading the body. 200 success, 201 created, 400 bad input, 404 not found, 500 server error.',
                    tip: 'Do not return 200 for failed requests; the front-end will struggle to tell the difference.'
                }
            },
            {
                label: 'Express',
                code: `app.post('/api/todos', (req, res) => {
  const { title } = req.body

  if (typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ error: 'title wajib berupa teks' })
  }

  res.status(201).json({ id: 3, title: title.trim(), done: false })
})`,
                id: {
                    title: 'Validasi input di server',
                    body: 'Front-end bisa dimodifikasi siapa saja, jadi validasi tetap wajib dilakukan di server sebelum data disimpan.',
                    tip: 'Trim input dan batasi panjangnya, misalnya maksimal 200 karakter.'
                },
                en: {
                    title: 'Validate input on the server',
                    body: 'The front-end can be changed by anyone, so validation is still required on the server before saving data.',
                    tip: 'Trim input and limit its length, for example 200 characters maximum.'
                }
            },
            {
                label: 'auth.js',
                code: `const bcrypt = require('bcrypt')

const hash = await bcrypt.hash(password, 10)
const cocok = await bcrypt.compare(input, hash)`,
                id: {
                    title: 'Amankan password dan rahasia',
                    body: 'Simpan password sebagai hash, bukan teks asli. Kredensial dan token disimpan di environment variable.',
                    tip: 'Simpan JWT_SECRET dan kredensial database di .env, lalu masukkan .env ke .gitignore.'
                },
                en: {
                    title: 'Secure passwords and secrets',
                    body: 'Store passwords as hashes, not plain text. Keep credentials and tokens in environment variables.',
                    tip: 'Store JWT_SECRET and database credentials in .env, and add .env to .gitignore.'
                }
            }
        ],
        id: {
            title: 'Merancang REST API yang Aman',
            intro: [
                'REST API adalah cara aplikasi bertukar data lewat HTTP. Endpoint yang konsisten membuat front-end mudah menebak alamat dan method yang harus dipakai.',
                'Kamu akan merancang endpoint CRUD untuk resource todos, memilih status code yang tepat, memvalidasi input di server, dan menyimpan password sebagai hash.'
            ],
            prereqs: [
                'Pemahaman dasar HTTP dan JSON',
                'Node.js + Express atau stack lain yang kamu pilih',
                'curl atau Postman',
                'Editor kode'
            ],
            next: {
                title: 'Lanjut ke Git & deploy',
                text: 'Simpan versi kode dan publikasikan API lewat URL HTTPS.',
                guide: 'git',
                label: 'Buka panduan Git'
            }
        },
        en: {
            title: 'Designing a Secure REST API',
            intro: [
                'A REST API is how applications exchange data over HTTP. Consistent endpoints make it easy for a front-end to guess the address and method to use.',
                'You will design CRUD endpoints for the todos resource, choose the right status codes, validate input on the server, and store passwords as hashes.'
            ],
            prereqs: [
                'Basic HTTP and JSON knowledge',
                'Node.js + Express or another stack you like',
                'curl or Postman',
                'A code editor'
            ],
            next: {
                title: 'Continue to Git & deploy',
                text: 'Track code versions and publish your API over HTTPS.',
                guide: 'git',
                label: 'Open Git guide'
            }
        }
    },

    git: {
        name: 'Git & Deploy',
        icon: 'assets/logos/git.svg',
        level: 'beginner',
        minutes: 30,
        search: 'git github deploy railway render ci cd pemula beginner',
        cardTitle: 'Git & deploy',
        blurb: {
            id: 'Simpan versi kode, push ke GitHub, lalu publikasikan API-mu.',
            en: 'Track code versions, push to GitHub, then publish your API.'
        },
        exampleCode: `a1b2c3d feat: filter todo selesai
e4f5g6h feat: API todo pertama`,
        example: {
            id: { label: 'Contoh riwayat commit' },
            en: { label: 'Sample commit history' }
        },
        steps: [
            {
                label: 'Terminal',
                code: `git init
git add .
git commit -m "feat: API todo pertama"`,
                id: {
                    title: 'Inisialisasi repo dan commit pertama',
                    body: 'Git mencatat snapshot kode. Commit pertama menjadi titik balik proyekmu.',
                    tip: 'Buat commit kecil dengan pesan jelas. Hindari satu commit raksasa berisi semua fitur.'
                },
                en: {
                    title: 'Initialize the repo and first commit',
                    body: 'Git records a snapshot of the code. The first commit becomes your project turning point.',
                    tip: 'Make small commits with clear messages. Avoid one huge commit containing every feature.'
                }
            },
            {
                label: '.gitignore',
                code: `node_modules/
.env
.venv/
__pycache__/`,
                id: {
                    title: 'Buat file .gitignore',
                    body: 'Folder dependensi dan file rahasia tidak boleh masuk repository. Daftarkan sebelum commit berikutnya.',
                    tip: 'Jika .env terlanjur ter-commit, hapus dari repository lalu rotasi semua kredensialnya.'
                },
                en: {
                    title: 'Create a .gitignore file',
                    body: 'Dependency folders and secret files must not enter the repository. List them before the next commit.',
                    tip: 'If .env was committed, remove it from the repository and rotate all credentials.'
                }
            },
            {
                label: 'Terminal',
                code: `git switch -c fitur-filter
git add .
git commit -m "feat: filter todo selesai"
git push -u origin fitur-filter`,
                id: {
                    title: 'Kerjakan fitur di branch',
                    body: 'Branch menjaga main tetap stabil. Setelah selesai, push branch lalu buka pull request untuk review.',
                    tip: 'Satu branch untuk satu fitur kecil membuat review jauh lebih cepat.'
                },
                en: {
                    title: 'Work on a feature branch',
                    body: 'Branches keep main stable. When done, push the branch and open a pull request for review.',
                    tip: 'One branch per small feature makes review much faster.'
                }
            },
            {
                label: 'Terminal',
                code: `git remote add origin https://github.com/username/todo-api.git
git push -u origin main`,
                id: {
                    title: 'Hubungkan repo dan deploy',
                    body: 'Platform seperti Railway atau Render bisa terhubung ke repository GitHub. Setiap push ke main memicu deploy baru.',
                    tip: 'Isi environment variable di dashboard platform, bukan di kode. Periksa log deploy bila aplikasi gagal berjalan.'
                },
                en: {
                    title: 'Connect the repo and deploy',
                    body: 'Platforms such as Railway or Render can connect to a GitHub repository. Every push to main triggers a new deploy.',
                    tip: 'Set environment variables in the platform dashboard, not in code. Check the deploy log if the app fails to start.'
                }
            }
        ],
        id: {
            title: 'Git, GitHub, dan Deploy Pertama',
            intro: [
                'Git mencatat riwayat perubahan kode sehingga kamu bisa kembali ke versi sebelumnya dan bekerja di branch terpisah.',
                'Di panduan ini kamu akan membuat commit pertama, menyiapkan .gitignore, mengerjakan fitur di branch, lalu mengunggah proyek ke GitHub dan menghubungkannya ke layanan deploy.'
            ],
            prereqs: [
                'Git sudah terpasang di komputer',
                'Akun GitHub',
                'Terminal atau Git Bash',
                'Proyek API dari panduan sebelumnya (opsional)'
            ],
            next: {
                title: 'Jelajahi panduan lain',
                text: 'Setelah deploy berhasil, pilih stack lain atau ulangi alur dari awal untuk memperkuat fondasi.',
                page: 'materi',
                label: 'Buka materi'
            }
        },
        en: {
            title: 'Git, GitHub, and Your First Deploy',
            intro: [
                'Git records the history of code changes so you can return to an earlier version and work on separate branches.',
                'In this guide you will make your first commit, set up .gitignore, build a feature on a branch, then upload the project to GitHub and connect it to a deploy service.'
            ],
            prereqs: [
                'Git installed on your computer',
                'A GitHub account',
                'A terminal or Git Bash',
                'The API project from earlier guides (optional)'
            ],
            next: {
                title: 'Explore other guides',
                text: 'Once your deploy works, pick another stack or repeat the flow from the start to strengthen the basics.',
                page: 'materi',
                label: 'Browse guides'
            }
        }
    }
};

const GUIDE_ORDER = ['node', 'php', 'python', 'go', 'database', 'rest', 'git'];

/* ================= Utilitas ================= */
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

let currentLang = readLang();

function readLang() {
    try {
        const saved = localStorage.getItem(LANG_KEY);
        return saved === 'en' ? 'en' : 'id';
    } catch (error) {
        return 'id';
    }
}

function t(key) {
    const table = STATIC_TEXT[currentLang] || STATIC_TEXT.id;
    return table[key] || STATIC_TEXT.id[key] || key;
}

/* Pilih teks sesuai bahasa aktif, contoh: pick('Halo', 'Hello') */
function pick(idText, enText) {
    return currentLang === 'en' ? enText : idText;
}

function escapeHtml(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function readProgress(guideId) {
    try {
        const raw = localStorage.getItem(STORAGE_PREFIX + guideId);
        const parsed = raw ? JSON.parse(raw) : [];
        return Array.isArray(parsed) ? parsed.filter(n => Number.isInteger(n)) : [];
    } catch (error) {
        return [];
    }
}

function writeProgress(guideId, steps) {
    try {
        localStorage.setItem(STORAGE_PREFIX + guideId, JSON.stringify(steps));
    } catch (error) {
        /* localStorage bisa diblokir; progres hanya tidak tersimpan */
    }
}

/* ================= Bahasa ================= */
function applyStaticLanguage() {
    document.documentElement.lang = currentLang;
    document.title = t('meta.title');

    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t('meta.description'));

    $$('[data-i18n]').forEach(element => {
        element.textContent = t(element.dataset.i18n);
    });

    $$('[data-i18n-html]').forEach(element => {
        element.innerHTML = t(element.dataset.i18nHtml);
    });

    $$('[data-i18n-placeholder]').forEach(element => {
        element.setAttribute('placeholder', t(element.dataset.i18nPlaceholder));
    });

    $$('[data-i18n-aria]').forEach(element => {
        element.setAttribute('aria-label', t(element.dataset.i18nAria));
    });

    $$('.lang-switch button').forEach(button => {
        const active = button.dataset.lang === currentLang;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
    });
}

function setLanguage(lang) {
    if (lang !== 'id' && lang !== 'en') return;
    if (lang === currentLang) return;

    currentLang = lang;

    try {
        localStorage.setItem(LANG_KEY, lang);
    } catch (error) {
        /* pilihan bahasa tidak tersimpan, halaman tetap berjalan */
    }

    applyStaticLanguage();
    refreshAuthLink();
    renderMateriGrid();
    filterMateri();
    renderGuide(activeGuideId);

    if (!$('#quizResult').hidden) {
        showQuizResult();
    } else {
        renderQuiz();
    }

    closeMenu();
}

/* ================= Akun pengguna ================= */
let currentUser = null;

function refreshAuthLink() {
    const link = $('#authLink');
    if (!link) return;

    if (!currentUser) {
        link.textContent = pick('Masuk', 'Log in');
        link.href = 'login.html';
        link.removeAttribute('aria-label');
        return;
    }

    link.textContent = pick('Halo, ', 'Hi, ') + currentUser.name;
    link.href = 'login.html';
    link.setAttribute('aria-label', pick('Buka akun ', 'Open account ') + currentUser.name);
}

async function loadCurrentUser() {
    try {
        const response = await fetch('/api/me', {
            headers: { 'Accept': 'application/json' },
            credentials: 'same-origin'
        });

        if (!response.ok) return;

        const data = await response.json();
        currentUser = data.user || null;
        refreshAuthLink();
    } catch (error) {
        /* Website tetap bisa dibuka tanpa server; tautan memakai teks "Masuk". */
    }
}

/* ================= Navigasi halaman ================= */
const PAGE_IDS = ['home', 'materi', 'latihan', 'docs'];
let currentPage = 'home';

function switchPage(pageId, options = {}) {
    const { updateHash = true, scroll = true } = options;

    if (!PAGE_IDS.includes(pageId)) pageId = 'home';

    $$('.page').forEach(page => {
        page.classList.toggle('active-page', page.id === pageId);
    });

    $$('.nav-link').forEach(link => {
        link.classList.toggle('is-active', link.dataset.page === pageId);
        if (link.dataset.page === pageId) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });

    currentPage = pageId;

    if (updateHash) {
        const hash = '#' + pageId;
        if (window.location.hash !== hash) {
            history.pushState({ page: pageId }, '', hash);
        }
    }

    if (scroll) {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }

    if (pageId === 'materi') {
        updateMateriCount();
    }

    if (pageId === 'home') {
        requestAnimationFrame(updateScrollSpy);
    }

    closeMenu();
}

function closeMenu() {
    const header = $('#siteHeader');
    const menuBtn = $('#menuBtn');
    if (!header || !menuBtn) return;
    header.classList.remove('menu-open');
    menuBtn.setAttribute('aria-expanded', 'false');
}

/* ================= Render panduan ================= */
let activeGuideId = 'node';

function renderStackTabs() {
    const container = $('#stackTabs');
    container.innerHTML = GUIDE_ORDER.map(id => {
        const guide = GUIDES[id];
        const isActive = id === activeGuideId;
        return `
            <button class="stack-tab${isActive ? ' is-active' : ''}" type="button" role="tab"
                aria-selected="${isActive}" data-guide-tab="${id}">
                <span class="stack-ico"><img src="${guide.icon}" alt="" width="28" height="28"></span>
                <span>${escapeHtml(guide.name)}</span>
            </button>
        `;
    }).join('');
}

function renderGuide(guideId, options = {}) {
    const { scroll = false } = options;
    const guide = GUIDES[guideId] || GUIDES.node;
    activeGuideId = guideId in GUIDES ? guideId : 'node';

    const info = guide[currentLang];
    const filesSection = $('#guideFilesSection');

    renderStackTabs();

    $('#sidebarLabel').textContent = pick('Panduan / ', 'Guide / ') + guide.name;
    $('#guideTitle').textContent = info.title;

    $('#guideIntro').innerHTML = info.intro
        .map(paragraph => `<p>${escapeHtml(paragraph)}</p>`)
        .join('');

    $('#guideExampleLabel').textContent = guide.example[currentLang].label;
    $('#guideExampleCode').textContent = guide.exampleCode;

    $('#guidePrereqs').innerHTML = info.prereqs
        .map(item => `<li>${escapeHtml(item)}</li>`)
        .join('');

    if (guide.files) {
        filesSection.hidden = false;
        $('#guideFilesTitle').textContent = guide.files.title[currentLang];
        $('#guideFilesDesc').textContent = guide.files.desc[currentLang];
        $('#guideFilesBlocks').innerHTML = guide.files.blocks.map(block => `
            <div class="code-block">
                <div class="code-head">
                    <span>${escapeHtml(block.label[currentLang])}</span>
                    <button class="copy-btn" type="button" data-copy>${pick('Salin', 'Copy')}</button>
                </div>
                <pre><code>${escapeHtml(block.code)}</code></pre>
            </div>
        `).join('');
    } else {
        filesSection.hidden = true;
        $('#guideFilesBlocks').innerHTML = '';
    }

    const navItems = [
        { anchor: 'guideIntroSection', label: 'Introduction' },
        { anchor: 'guidePrereqSection', label: 'Prerequisites' }
    ];

    if (guide.files) {
        navItems.push({ anchor: 'guideFilesSection', label: guide.files.nav[currentLang] });
    }

    guide.steps.forEach((step, index) => {
        navItems.push({
            anchor: `step-${activeGuideId}-${index}`,
            label: step[currentLang].title,
            stepIndex: index
        });
    });

    $('#stepNav').innerHTML = navItems.map(item => {
        const isStep = Number.isInteger(item.stepIndex);
        return `
            <li data-anchor="${item.anchor}"${isStep ? ` data-step-nav="${item.stepIndex}"` : ''}>
                <button type="button" data-anchor-link="${item.anchor}">
                    <span>${escapeHtml(item.label)}</span>
                    ${isStep ? '<span class="step-check" aria-hidden="true">\u2713</span>' : ''}
                </button>
            </li>
        `;
    }).join('');

    $('#guideSteps').innerHTML = guide.steps.map((step, index) => {
        const text = step[currentLang];
        return `
        <article class="step-card" id="step-${activeGuideId}-${index}" data-step-card="${index}">
            <div class="step-head">
                <div class="step-heading">
                    <p class="section-kicker">${pick('Langkah', 'Step')} ${String(index + 1).padStart(2, '0')}</p>
                    <h2 class="step-title">${escapeHtml(text.title)}</h2>
                </div>
                <button class="step-toggle" type="button" data-step-toggle="${index}" aria-pressed="false">
                    ${pick('Tandai selesai', 'Mark as done')}
                </button>
            </div>
            <p class="step-body">${escapeHtml(text.body)}</p>
            ${step.code ? `
                <div class="code-block">
                    <div class="code-head">
                        <span>${escapeHtml(step.label || pick('Contoh kode', 'Code example'))}</span>
                        <button class="copy-btn" type="button" data-copy>${pick('Salin', 'Copy')}</button>
                    </div>
                    <pre><code>${escapeHtml(step.code)}</code></pre>
                </div>` : ''}
            ${text.tip ? `<p class="step-tip"><strong>${pick('Tips', 'Tip')}:</strong> ${escapeHtml(text.tip)}</p>` : ''}
        </article>
    `;
    }).join('');

    const next = info.next;
    if (next) {
        const action = next.guide
            ? `<button class="btn btn-primary btn-sm" type="button" data-guide="${next.guide}">${escapeHtml(next.label)}</button>`
            : `<a class="btn btn-primary btn-sm" href="#${next.page}" data-page="${next.page}">${escapeHtml(next.label)}</a>`;

        $('#guideNext').innerHTML = `
            <div>
                <h3>${escapeHtml(next.title)}</h3>
                <p>${escapeHtml(next.text)}</p>
            </div>
            ${action}
        `;
        $('#guideNext').hidden = false;
    } else {
        $('#guideNext').hidden = true;
    }

    updateProgressUI();
    refreshGuideSections();
    activeSectionId = '';
    setActiveSidebarLink('guideIntroSection');

    if (scroll) {
        const shell = $('#guideShell');
        requestAnimationFrame(() => {
            shell.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
}

/* ================= Navigasi sidebar panduan ================= */
let guideSections = [];
let activeSectionId = '';

function refreshGuideSections() {
    const filesSection = $('#guideFilesSection');
    guideSections = [
        $('#guideIntroSection'),
        $('#guidePrereqSection'),
        filesSection && !filesSection.hidden ? filesSection : null,
        ...$$('#guideSteps .step-card')
    ].filter(Boolean);
}

function setActiveSidebarLink(anchorId) {
    if (!anchorId || anchorId === activeSectionId) return;
    activeSectionId = anchorId;

    $$('#stepNav li').forEach(li => {
        li.classList.toggle('is-active', li.dataset.anchor === anchorId);
    });
}

function updateScrollSpy() {
    if (currentPage !== 'home' || !guideSections.length) return;

    const headerHeight = $('#siteHeader')?.offsetHeight || 68;
    const threshold = headerHeight + 96;
    let currentId = guideSections[0].id;

    guideSections.forEach(section => {
        if (section.getBoundingClientRect().top <= threshold) {
            currentId = section.id;
        }
    });

    setActiveSidebarLink(currentId);
}

function updateProgressUI() {
    const guide = GUIDES[activeGuideId];
    const total = guide.steps.length;
    const done = new Set(readProgress(activeGuideId).filter(n => n >= 0 && n < total));
    const completed = done.size;

    $('#sidebarProgress').textContent = `${completed} / ${total} ${pick('langkah', 'steps')}`;

    const track = $('#sidebarTrack');
    track.setAttribute('aria-valuemax', String(total));
    track.setAttribute('aria-valuenow', String(completed));

    $('#sidebarFill').style.width = `${total ? (completed / total) * 100 : 0}%`;

    $$('#stepNav [data-step-nav]').forEach(li => {
        li.classList.toggle('is-done', done.has(Number(li.dataset.stepNav)));
    });

    $$('#guideSteps [data-step-card]').forEach(card => {
        const index = Number(card.dataset.stepCard);
        const isDone = done.has(index);
        card.classList.toggle('is-done', isDone);

        const toggle = $('[data-step-toggle]', card);
        toggle.classList.toggle('is-done', isDone);
        toggle.setAttribute('aria-pressed', String(isDone));
        toggle.textContent = isDone ? pick('Selesai \u2713', 'Done \u2713') : pick('Tandai selesai', 'Mark as done');
    });
}

function toggleStep(index) {
    const done = new Set(readProgress(activeGuideId));
    if (done.has(index)) {
        done.delete(index);
    } else {
        done.add(index);
    }
    writeProgress(activeGuideId, [...done].sort((a, b) => a - b));
    updateProgressUI();
}

function openGuide(guideId) {
    switchPage('home', { scroll: false });
    renderGuide(guideId, { scroll: true });
}

/* ================= Materi + pencarian ================= */
function renderMateriGrid() {
    const grid = $('#materiGrid');
    if (!grid) return;

    grid.innerHTML = GUIDE_ORDER.map(id => {
        const guide = GUIDES[id];
        return `
            <article class="materi-card" data-search="${escapeHtml(guide.search)}">
                <div class="materi-top">
                    <span class="stack-ico large"><img src="${guide.icon}" alt="" width="28" height="28"></span>
                    <span class="materi-level">${escapeHtml(t('level.' + guide.level))}</span>
                </div>
                <h3>${escapeHtml(pick(guide.cardTitle, guide.cardTitleEn || guide.cardTitle))}</h3>
                <p>${escapeHtml(guide.blurb[currentLang])}</p>
                <div class="materi-meta">
                    <span>${guide.steps.length} ${pick('langkah', 'steps')}</span>
                    <span>±${guide.minutes} ${pick('menit', 'min')}</span>
                </div>
                <button class="btn btn-ghost" type="button" data-guide="${id}">${pick('Buka panduan', 'Open guide')}</button>
            </article>
        `;
    }).join('');
}

function updateMateriCount() {
    const visible = $$('#materiGrid .materi-card').filter(card => !card.hidden).length;
    const countEl = $('#materiCount');
    if (!countEl) return;

    if (visible === GUIDE_ORDER.length) {
        countEl.textContent = `${visible} ${pick('panduan', 'guides')}`;
    } else {
        countEl.textContent = `${visible} ${pick('dari', 'of')} ${GUIDE_ORDER.length} ${pick('panduan', 'guides')}`;
    }
}

function filterMateri() {
    const input = $('#materiSearch');
    if (!input) return;

    const query = input.value.trim().toLowerCase();
    let visible = 0;

    $$('#materiGrid .materi-card').forEach(card => {
        const haystack = (card.dataset.search + ' ' + card.textContent).toLowerCase();
        const match = query === '' || haystack.includes(query);
        card.hidden = !match;
        if (match) visible += 1;
    });

    $('#materiEmpty').hidden = visible !== 0;
    updateMateriCount();
}

/* ================= Kuis ================= */
const QUIZ = [
    {
        answer: 0,
        id: {
            question: 'Method HTTP mana yang tepat untuk mengambil daftar todo dari API?',
            options: ['GET', 'POST', 'DELETE', 'PATCH'],
            explanation: 'GET dipakai untuk membaca data. POST membuat data baru, DELETE menghapus, dan PATCH mengubah sebagian data.'
        },
        en: {
            question: 'Which HTTP method is correct for fetching a todo list from an API?',
            options: ['GET', 'POST', 'DELETE', 'PATCH'],
            explanation: 'GET reads data. POST creates data, DELETE removes it, and PATCH updates part of it.'
        }
    },
    {
        answer: 1,
        id: {
            question: 'API berhasil membuat data baru. Status code yang paling tepat adalah\u2026',
            options: ['200', '201', '404', '500'],
            explanation: '201 Created menandakan permintaan berhasil dan resource baru sudah dibuat. 200 berarti berhasil tanpa penekanan pembuatan data.'
        },
        en: {
            question: 'The API successfully created a new record. Which status code fits best?',
            options: ['200', '201', '404', '500'],
            explanation: '201 Created means the request succeeded and a new resource was created. 200 means success without emphasizing creation.'
        }
    },
    {
        answer: 1,
        id: {
            question: 'Di Express, middleware apa yang membuat req.body berisi JSON dari request?',
            options: ['app.use(express.static())', 'app.use(express.json())', 'app.use(cors())', 'app.use(morgan("dev"))'],
            explanation: 'express.json() membaca body berformat JSON dan mengisinya ke req.body. Tanpa middleware ini, req.body bernilai undefined.'
        },
        en: {
            question: 'In Express, which middleware fills req.body with JSON from the request?',
            options: ['app.use(express.static())', 'app.use(express.json())', 'app.use(cors())', 'app.use(morgan("dev"))'],
            explanation: 'express.json() reads a JSON body and puts it in req.body. Without it, req.body is undefined.'
        }
    },
    {
        answer: 2,
        id: {
            question: 'Query SQL mana yang menggabungkan data todos dengan data pemiliknya di tabel users?',
            options: ['GROUP BY', 'ORDER BY', 'JOIN', 'LIMIT'],
            explanation: 'JOIN menghubungkan baris dua tabel berdasarkan kolom relasi, misalnya users.id = todos.user_id.'
        },
        en: {
            question: 'Which SQL query combines todos with their owner data in the users table?',
            options: ['GROUP BY', 'ORDER BY', 'JOIN', 'LIMIT'],
            explanation: 'JOIN connects rows from two tables using a relation column, for example users.id = todos.user_id.'
        }
    },
    {
        answer: 2,
        id: {
            question: 'Cara paling aman menyimpan password pengguna adalah\u2026',
            options: ['Simpan sebagai teks asli', 'Encode dengan base64', 'Hash dengan bcrypt atau argon2', 'Simpan di front-end'],
            explanation: 'bcrypt dan argon2 menghasilkan hash satu arah yang lambat dihitung, sehingga password asli tidak bisa dibaca meskipun database bocor.'
        },
        en: {
            question: 'The safest way to store user passwords is\u2026',
            options: ['Store as plain text', 'Encode with base64', 'Hash with bcrypt or argon2', 'Store on the front-end'],
            explanation: 'bcrypt and argon2 produce slow one-way hashes, so the original password cannot be read even if the database leaks.'
        }
    },
    {
        answer: 1,
        id: {
            question: 'File .env berisi kredensial database. Apa yang harus dilakukan sebelum commit?',
            options: ['Ganti nama menjadi config.txt', 'Tambahkan .env ke .gitignore', 'Commit apa adanya', 'Hapus isinya saja'],
            explanation: 'Masukkan .env ke .gitignore agar kredensial tidak masuk repository. Jika sudah terlanjur, rotasi semua nilainya.'
        },
        en: {
            question: 'The .env file contains database credentials. What should you do before committing?',
            options: ['Rename it to config.txt', 'Add .env to .gitignore', 'Commit it as is', 'Just empty its contents'],
            explanation: 'Add .env to .gitignore so credentials never enter the repository. If they already did, rotate all values.'
        }
    }
];

let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let quizPicks = QUIZ.map(() => null);

function renderQuiz() {
    const item = QUIZ[quizIndex][currentLang];
    const total = QUIZ.length;

    $('#quizProgressLabel').textContent = pick(
        `Soal ${quizIndex + 1} dari ${total}`,
        `Question ${quizIndex + 1} of ${total}`
    );
    $('#quizScoreLabel').textContent = `${quizScore} ${pick('benar', 'correct')}`;
    $('#quizBarFill').style.width = `${(quizIndex / total) * 100}%`;
    $('#quizQuestion').textContent = item.question;

    $('#quizOptions').innerHTML = item.options.map((option, index) => `
        <button class="quiz-option" type="button" data-option="${index}">
            <span class="option-key">${String.fromCharCode(65 + index)}</span>
            <span>${escapeHtml(option)}</span>
        </button>
    `).join('');

    const feedback = $('#quizFeedback');
    feedback.hidden = true;
    feedback.textContent = '';
    feedback.classList.remove('is-wrong');

    const nextBtn = $('#quizNext');
    nextBtn.disabled = true;
    nextBtn.textContent = quizIndex === total - 1
        ? pick('Lihat hasil', 'See results')
        : pick('Soal berikutnya', 'Next question');

    quizAnswered = false;

    if (quizPicks[quizIndex] !== null) {
        paintQuizAnswer(quizPicks[quizIndex]);
    }
}

function answerQuiz(optionIndex) {
    if (quizPicks[quizIndex] !== null) return;

    quizPicks[quizIndex] = optionIndex;
    quizScore = quizPicks.reduce((total, pick, index) => {
        return pick === QUIZ[index].answer ? total + 1 : total;
    }, 0);

    $('#quizScoreLabel').textContent = `${quizScore} ${pick('benar', 'correct')}`;
    $('#quizBarFill').style.width = `${((quizIndex + 1) / QUIZ.length) * 100}%`;

    paintQuizAnswer(optionIndex);
}

function paintQuizAnswer(optionIndex) {
    quizAnswered = true;

    const item = QUIZ[quizIndex];
    const text = item[currentLang];
    const buttons = $$('#quizOptions .quiz-option');
    const isCorrect = optionIndex === item.answer;

    buttons.forEach(button => {
        const index = Number(button.dataset.option);
        button.disabled = true;

        if (index === item.answer) {
            button.classList.add('correct');
        } else if (index === optionIndex) {
            button.classList.add('wrong');
        } else {
            button.classList.add('dim');
        }
    });

    const feedback = $('#quizFeedback');
    feedback.hidden = false;
    feedback.classList.toggle('is-wrong', !isCorrect);
    feedback.textContent = (isCorrect ? pick('Benar. ', 'Correct. ') : pick('Belum tepat. ', 'Not quite. ')) + text.explanation;

    $('#quizNext').disabled = false;
}

function nextQuizQuestion() {
    if (!quizAnswered) return;

    if (quizIndex === QUIZ.length - 1) {
        showQuizResult();
        return;
    }

    quizIndex += 1;
    renderQuiz();
}

function showQuizResult() {
    const total = QUIZ.length;
    $('#quizFinalScore').textContent = String(quizScore);

    let title = pick('Terus berlatih', 'Keep practicing');
    let text = pick(
        'Ulangi materi HTTP, Express, dan SQL sebentar, lalu coba kuis ini lagi. Tidak masalah mengulang lebih dari sekali.',
        'Review HTTP, Express, and SQL for a moment, then try this quiz again. Repeating it more than once is fine.'
    );

    if (quizScore === total) {
        title = pick('Sempurna, fondasimu kuat', 'Perfect, your foundation is strong');
        text = pick(
            'Semua jawaban benar. Lanjutkan dengan membangun API todo dan praktikkan konsep ini di proyek nyata.',
            'Every answer is correct. Keep going by building a todo API and applying these concepts in a real project.'
        );
    } else if (quizScore >= 4) {
        title = pick('Sudah cukup baik', 'Good progress');
        text = pick(
            'Sebagian besar konsep sudah kamu pahami. Baca ulang soal yang salah, lalu ulangi kuis untuk memastikan.',
            'You already understand most concepts. Re-read the questions you missed, then retry the quiz to be sure.'
        );
    }

    $('#quizResultTitle').textContent = title;
    $('#quizResultText').textContent = text;
    $('#quizCard').hidden = true;
    $('#quizResult').hidden = false;
}

function retryQuiz() {
    quizIndex = 0;
    quizScore = 0;
    quizPicks = QUIZ.map(() => null);
    $('#quizResult').hidden = true;
    $('#quizCard').hidden = false;
    renderQuiz();
}

/* ================= Inisialisasi ================= */
function initNavigation() {
    document.addEventListener('click', event => {
        const pageLink = event.target.closest('[data-page]');
        if (pageLink) {
            event.preventDefault();
            switchPage(pageLink.dataset.page);
            return;
        }

        const guideBtn = event.target.closest('[data-guide]');
        if (guideBtn) {
            event.preventDefault();
            openGuide(guideBtn.dataset.guide);
        }
    });

    window.addEventListener('popstate', () => {
        switchPage((window.location.hash || '#home').slice(1), { updateHash: false });
    });

    window.addEventListener('hashchange', () => {
        switchPage((window.location.hash || '#home').slice(1), { updateHash: false });
    });

    const menuBtn = $('#menuBtn');
    const header = $('#siteHeader');
    menuBtn.addEventListener('click', () => {
        const open = header.classList.toggle('menu-open');
        menuBtn.setAttribute('aria-expanded', String(open));
    });

    const headerSearch = $('#headerSearch');
    headerSearch.addEventListener('click', () => {
        switchPage('materi', { scroll: true });
        const input = $('#materiSearch');
        window.setTimeout(() => input.focus(), 80);
    });

    const initialPage = (window.location.hash || '#home').slice(1);
    switchPage(initialPage, { updateHash: false, scroll: false });
}

function initLanguage() {
    $$('.lang-switch button').forEach(button => {
        button.addEventListener('click', () => setLanguage(button.dataset.lang));
    });
}

function initGuideEvents() {
    $('#stackTabs').addEventListener('click', event => {
        const tab = event.target.closest('[data-guide-tab]');
        if (!tab) return;
        renderGuide(tab.dataset.guideTab, { scroll: true });
    });

    $('#stepNav').addEventListener('click', event => {
        const link = event.target.closest('[data-anchor-link]');
        if (!link) return;

        const target = document.getElementById(link.dataset.anchorLink);
        if (!target) return;

        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSidebarLink(link.dataset.anchorLink);
    });

    let spyTicking = false;
    window.addEventListener('scroll', () => {
        if (spyTicking) return;
        spyTicking = true;
        requestAnimationFrame(() => {
            spyTicking = false;
            updateScrollSpy();
        });
    }, { passive: true });

    $('#guideSteps').addEventListener('click', event => {
        const toggle = event.target.closest('[data-step-toggle]');
        if (!toggle) return;
        toggleStep(Number(toggle.dataset.stepToggle));
    });

    document.addEventListener('click', event => {
        const copyBtn = event.target.closest('[data-copy]');
        if (!copyBtn) return;

        const code = $('pre code', copyBtn.closest('.code-block'));
        if (!code) return;

        const text = code.textContent;
        const done = () => {
            copyBtn.textContent = pick('Tersalin', 'Copied');
            window.setTimeout(() => { copyBtn.textContent = pick('Salin', 'Copy'); }, 1600);
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(done).catch(() => {});
        } else {
            const area = document.createElement('textarea');
            area.value = text;
            document.body.appendChild(area);
            area.select();
            document.execCommand('copy');
            area.remove();
            done();
        }
    });
}

function initMateri() {
    renderMateriGrid();
    $('#materiSearch').addEventListener('input', filterMateri);
    updateMateriCount();
}

function initQuiz() {
    $('#quizOptions').addEventListener('click', event => {
        const option = event.target.closest('[data-option]');
        if (!option) return;
        answerQuiz(Number(option.dataset.option));
    });

    $('#quizNext').addEventListener('click', nextQuizQuestion);
    $('#quizRetry').addEventListener('click', retryQuiz);

    renderQuiz();
}

function initDocs() {
    $$('[data-scroll-to]').forEach(button => {
        button.addEventListener('click', () => {
            const target = document.getElementById(button.dataset.scrollTo);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function initYear() {
    const yearEl = $('#year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

document.addEventListener('DOMContentLoaded', () => {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    applyStaticLanguage();
    initNavigation();
    renderGuide('node');
    initGuideEvents();
    initLanguage();
    initMateri();
    initQuiz();
    initDocs();
    initYear();
    loadCurrentUser();
});
