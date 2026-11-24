/* ==========================================================================
   MatdisMaster - Logika Inti Aplikasi SPA (All-in-One Website & Android PWA)
   ========================================================================== */

const CHAPTERS = [
  { id: 'bab1', num: 'Bab 1', title: 'Pengantar Matdis & Aplikasinya', url: '#bab1', desc: 'Diskrit vs kontinu, bahasa presisi, kasus batas, tabel skenario & aplikasi TI/RPL.' },
  { id: 'bab2', num: 'Bab 2', title: 'Teori Himpunan Dasar & Representasi', url: '#bab2', desc: 'Roster, set-builder, ∈/∉, himpunan kosong/semesta, subset, dan diagram Venn.' },
  { id: 'bab3', num: 'Bab 3', title: 'Relasi, Graf/Matriks & Sifat Relasi', url: '#bab3', desc: 'Pasangan terurut, diagram panah, graf, matriks biner, refleksif, simetris, antisimetris, transitif.' },
  { id: 'bab4', num: 'Bab 4', title: 'Definisi & Jenis Fungsi', url: '#bab4', desc: 'Domain, kodomain, range, preimage, injektif, surjektif, bijektif, & Pigeonhole Principle.' },
  { id: 'bab5', num: 'Bab 5', title: 'Komposisi & Invers Fungsi', url: '#bab5', desc: 'Pipeline (g∘f)(x), fungsi identitas, syarat eksistensi invers & (g∘f)⁻¹ = f⁻¹∘g⁻¹.' },
  { id: 'bab6', num: 'Bab 6', title: 'Logika Proposisional & Tabel Kebenaran', url: '#bab6', desc: '6 operator dasar, tautologi, kontradiksi, hukum ekuivalensi, kontraposisi, DNF/CNF.' },
  { id: 'bab7', num: 'Bab 7', title: 'Logika Predikat & Kuantor', url: '#bab7', desc: 'Predikat P(x), ∀ dan ∃, negasi kuantor, validitas argumen, dan Prenex Normal Form.' },
  { id: 'bab8', num: 'Bab 8', title: 'Kombinatorik Dasar & Permutasi', url: '#bab8', desc: 'Aturan perkalian/penjumlahan, faktorial, P(n,k), constraint, dan permutasi multiset.' },
  { id: 'bab9', num: 'Bab 9', title: 'Kombinasi & Aplikasi Sistem TI', url: '#bab9', desc: 'Rumus kombinasi C(n,r), sifat Pascal, stars & bars, canary patching & quorum.' },
  { id: 'bab10', num: 'Bab 10', title: 'Pohon, MST (Prim/Kruskal), Huffman & BST', url: '#bab10', desc: 'Sifat pohon, hutan, MST Prim & Kruskal, pohon berakar/m-ary, kode Huffman, BST, traversal, DFS & BFS.' },
  { id: 'bab11', num: 'Bab 11', title: 'Teori Graf, Planar, Euler, Hamilton & Warna', url: '#bab11', desc: 'Jenis graf, Lemma Jabat Tangan, matriks/senarai, isomorfik, planar Euler/Kuratowski, Euler/Hamilton, TSP, CPP & Welsh-Powell.' },
  { id: 'bab12', num: 'Bab 12', title: 'Operasi Himpunan, Dualitas & Multiset', url: '#bab12', desc: 'Aljabar himpunan IF1220, tabel keanggotaan 0/1, dualitas, inklusi-eksklusi, partisi, multiset & Python set.' },
  { id: 'bab13', num: 'Bab 13', title: 'Induksi Matematika & Kebenaran Program', url: '#bab13', desc: 'Induksi sederhana, dirampatkan, induksi kuat, fallacy bukti, loop invariant program & latihan kuis IF1220.' },
  { id: 'bab14', num: 'Bab 14', title: 'Aljabar Boolean, K-Map & Rangkaian Logika', url: '#bab14', desc: '11 hukum Boolean, bentuk kanonik SOP/POS, Peta Karnaugh 2–5 peubah, don\'t care, Half/Full Adder & Elevator.' },
  { id: 'bab15', num: 'Bab 15', title: 'Barisan, Rekursi & Relasi Rekurens', url: '#bab15', desc: 'Barisan, sumasi tunggal/ganda, fraktal, Menara Hanoi, relasi rekurens homogen lanjar & persamaan karakteristik.' },
  { id: 'bab16', num: 'Bab 16', title: 'Teori Bilangan, CRT, Fermat & RSA', url: '#bab16', desc: 'Euclidean PBB, kombinasi linier, aritmetika modular, balikan modulo, CRT, Fermat, ISBN, Hash, Caesar, RSA & LCG.' },
  { id: 'bab17', num: 'Bab 17', title: 'Kompleksitas Algoritma & Big-O / Ω / Θ', url: '#bab17', desc: 'T(n) best/worst/avg, Selection/Bubble Sort, Horner, Big-O, Big-Omega, Big-Theta, spektrum 8 kelas & latihan kuis.' },
  { id: 'bab18', num: 'Bab 18', title: 'Peluang Diskrit, Bayes & Ekspektasi', url: '#bab18', desc: 'Ruang sampel, peluang bersyarat, Teorema Bayes (spam/medis), variabel acak, ekspektasi E(X) & Binomial.' },
  { id: 'bab19', num: 'Bab 19', title: 'Bahasa Formal, Grammar & Otomata (FSM)', url: '#bab19', desc: 'Alfabet & string, Hierarki Chomsky, CFG, Mesin Moore/Mealy, DFA vs NFA, dan Ekspresi Reguler (Regex).' }
];

const SEARCH_INDEX = [
  { title: 'Diskrit vs Kontinu, IF1220 & Bahasa Presisi', url: '#bab1', tag: 'Bab 1', keywords: 'diskrit kontinu pixel matriks 17 topik 5 pokok if1220 kruskal huffman issimetri aturan presisi kasus batas' },
  { title: 'Teori Himpunan, Roster, Set-Builder & Kuasa', url: '#bab2', tag: 'Bab 2', keywords: 'himpunan elemen roster set-builder kosong semesta subset proper improper kardinalitas kuasa power set c char int' },
  { title: 'Relasi: Matriks, Klosur, Poset & Basis Data SQL', url: '#bab3', tag: 'Bab 3', keywords: 'relasi refleksif simetris setangkup tolak setangkup antisimetris transitif menghantar ekuivalensi kesetaraan poset pengurutan parsial klosur closure warshall komposisi inversi n-ary sql seleksi proyeksi join' },
  { title: 'Fungsi: Injektif, Surjektif, Khusus & Rekursif', url: '#bab4', tag: 'Bab 4', keywords: 'fungsi domain kodomain range preimage injektif surjektif bijektif pigeonhole floor ceiling modulo faktorial eksponensial logaritmik rekursif chebyshev fibonacci uji garis vertikal' },
  { title: 'Komposisi (g∘f)(x), Balikan & Invers Fungsi f⁻¹', url: '#bab5', tag: 'Bab 5', keywords: 'komposisi invers balikan fungsi identitas asosiatif tidak komutatif uts 2022 kuis 2021' },
  { title: 'Logika Proposisional, Inferensi & Penalaran', url: '#bab6', tag: 'Bab 6', keywords: 'proposisi negasi dan atau xor implikasi syarat cukup perlu biimplikasi pulau emas poligraf modus ponens tollens resolusi aksioma teorema irk' },
  { title: 'Logika Predikat, Kuantor ∀ ∃ & Prenex Form', url: '#bab7', tag: 'Bab 7', keywords: 'predikat kuantor universal eksistensial negasi prenex pnf validitas modus ponens' },
  { title: 'Kombinatorik Dasar & Permutasi', url: '#bab8', tag: 'Bab 8', keywords: 'kombinatorik permutasi faktorial perkalian penjumlahan multiset pin statistik google' },
  { title: 'Kombinasi C(n,r), Pascal & Stars and Bars', url: '#bab9', tag: 'Bab 9', keywords: 'kombinasi tanpa pengulangan stars bars simetri pascal server canary quorum' },
  { title: 'Pohon, Hutan, MST (Prim/Kruskal), Huffman, BST & Traversal', url: '#bab10', tag: 'Bab 10', keywords: 'pohon hutan forest berakar daun tinggi spanning tree mst prim kruskal m-ary penuh sempurna biner full complete perfect balanced pohon ekspresi keputusan koin palsu prefix code huffman kompresi bst binary search tree preorder inorder postorder dfs bfs stack queue' },
  { title: 'Graf, Isomorfik, Planar, Kuratowski, Euler, Hamilton & Pewarnaan', url: '#bab11', tag: 'Bab 11', keywords: 'graf konigsberg derajat lemma jabat tangan lengkap bipartit teratur cut-set matriks ketetanggaan bersisian senarai isomorfik planar bidang rumus euler kuratowski k5 k33 petersen dual lintasan sirkuit euler hamilton dirac tsp pedagang keliling chinese postman pewarnaan kromatik welsh powell 4 warna penjadwalan' },
  { title: 'Operasi Himpunan, Dualitas, Inklusi-Eksklusi & Multiset', url: '#bab12', tag: 'Bab 12', keywords: 'irisan gabungan komplemen selisih beda setangkup kartesian hukum himpunan tabel keanggotaan dualitas inklusi eksklusi partisi multiset python set' },
  { title: 'Induksi Matematika, Induksi Kuat & Loop Invariant', url: '#bab13', tag: 'Bab 13', keywords: 'induksi matematika sederhana dirampatkan kuat domino perangko barter coklat kuda fallacy loop invariant kebenaran program exp' },
  { title: 'Aljabar Boolean, Bentuk Kanonik, K-Map & Rangkaian Logika', url: '#bab14', tag: 'Bab 14', keywords: 'aljabar boolean boole kanonik sop pos minterm maxterm peta karnaugh kmap oktet kuad pasangan dont care gerbang logika nand nor xor xnor half adder full adder majority gate elevator 7 segmen' },
  { title: 'Barisan, Sumasi, Rekursi, Menara Hanoi & Relasi Rekurens', url: '#bab15', tag: 'Bab 15', keywords: 'barisan sequence string sumasi ganda nested loop rekursi fraktal menara hanoi bunga majemuk relasi rekurens homogen lanjar persamaan karakteristik akar kembar binet fibonacci dorayaki megamycete' },
  { title: 'Teori Bilangan, CRT, Fermat, ISBN, Hash, Kriptografi RSA & LCG', url: '#bab16', tag: 'Bab 16', keywords: 'teori bilangan euclidean pbb gcd fpb kombinasi linier relatif prima modulo kekongruenan balikan invers crt chinese remainder sun tse prima fermat pseudoprime isbn 10 13 hash kolisi caesar rot13 rsa lcg secret sharing' },
  { title: 'Kompleksitas Algoritma, T(n), Big-O, Big-Omega & Big-Theta', url: '#bab17', tag: 'Bab 17', keywords: 'kompleksitas algoritma sangkil efisien waktu ruang t(n) worst best average case sequential search selection sort bubble sort horner asimptotik big o omega theta upper lower bound polinomial eksponensial konstan logaritmik linier kuadratik kubik faktorial' },
  { title: 'Peluang Diskrit, Teorema Bayes, Ekspektasi & Binomial', url: '#bab18', tag: 'Bab 18', keywords: 'peluang probabilitas diskrit ruang sampel kejadian bersyarat independen bebas teorema bayes spam medis variabel acak nilai harapan ekspektasi binomial bernoulli' },
  { title: 'Teori Bahasa Formal, Grammar, DFA/NFA & Ekspresi Reguler', url: '#bab19', tag: 'Bab 19', keywords: 'bahasa formal alfabet string grammar chomsky cfg otomata fsm finite state machine moore mealy dfa nfa regex ekspresi reguler transisi' },
  { title: 'Ringkasan Rumus, Cheat Sheet & Flashcard Hafalan', url: '#rumus', tag: 'Rumus', keywords: 'rumus cheat sheet flashcard flip card simbol logika inferensi himpunan dualitas inklusi eksklusi multiset klosur floor ceiling induksi boolean kmap sumasi rekurens teori bilangan crt fermat rsa isbn kompleksitas big o omega theta peluang bayes binomial otomata dfa regex permutasi kombinasi graf planar euler hamilton welsh powell pohon mst huffman' },
  { title: 'Bank Latihan Soal, Mode Tryout Timer, Bookmark & UAS', url: '#latihan', tag: 'Latihan & UAS', keywords: 'latihan soal cerita pilihan ganda tryout ujian timer bookmark salah kuis pembahasan uts uas hots kompleksitas big o peluang bayes otomata dfa aljabar boolean kmap rekurens teori bilangan crt fermat rsa graf planar welsh powell mst huffman if1220' },
  { title: 'Studio Video Animasi Penjelasan (23 Episode Materi & UAS)', url: '#video', tag: 'Video', keywords: 'video animasi penjelasan visual suara narasi uas kompleksitas big o peluang bayes otomata dfa boolean kmap rekurens hanoi teori bilangan crt fermat rsa himpunan dualitas multiset induksi relasi fungsi logika permutasi kombinasi graf dfs bfs' },
  { title: 'Arena Game Matematika Diskrit (6 Mini-Games)', url: '#game', tag: 'Game', keywords: 'game permainan gatekeeper logic hunter combo cracker dfs bfs race big o speed ranker modulo rsa cracker' }
];

const VALID_VIEWS = ['home', 'bab1', 'bab2', 'bab3', 'bab4', 'bab5', 'bab6', 'bab7', 'bab8', 'bab9', 'bab10', 'bab11', 'bab12', 'bab13', 'bab14', 'bab15', 'bab16', 'bab17', 'bab18', 'bab19', 'rumus', 'latihan', 'video', 'game'];
const STORAGE_KEY = 'matdismaster_state_v1';

function getState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return {
    theme: 'light',
    xp: 0,
    completedChapters: [],
    solvedQuestions: [],
    highScores: { gatekeeper: 0, hunter: 0, cracker: 0, graphrace: 0 }
  };
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {}
  updateGlobalUI();
}

function addXP(amount, reason) {
  const st = getState();
  st.xp = (st.xp || 0) + amount;
  saveState(st);
  if (reason) showToast(`+${amount} XP • ${reason}`);
}

function toggleChapterComplete(chapterId) {
  const st = getState();
  const idx = st.completedChapters.indexOf(chapterId);
  if (idx === -1) {
    st.completedChapters.push(chapterId);
    st.xp += 50;
    saveState(st);
    showToast('Sub-bab ditandai selesai! +50 XP 🎉');
  } else {
    st.completedChapters.splice(idx, 1);
    saveState(st);
    showToast('Status selesai dibatalkan.');
  }
  renderChapterCompletionBtn();
  refreshDrawerChecks();
  if (typeof window.refreshHomeDashboard === 'function') window.refreshHomeDashboard();
}

function showToast(msg) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('themeToggleBtn');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  const st = getState();
  st.theme = st.theme === 'dark' ? 'light' : 'dark';
  saveState(st);
  applyTheme(st.theme);
}

function getCurrentPageKey() {
  const h = window.location.hash.replace('#', '').trim();
  return VALID_VIEWS.includes(h) ? h : 'home';
}

function getPageSubtitle(key) {
  const chap = CHAPTERS.find((c) => c.id === key);
  if (chap) return `${chap.num} • ${chap.title}`;
  if (key === 'rumus') return 'Ringkasan Rumus & Cheat Sheet';
  if (key === 'latihan') return 'Bank Latihan Soal & Pembahasan';
  if (key === 'video') return 'Studio Video Animasi Penjelasan';
  if (key === 'game') return 'Arena 6 Mini-Game Matematika Diskrit';
  return 'Aplikasi Belajar Android & Web (All-in-One)';
}

function showPage(pageKey, updateHash = false) {
  const key = VALID_VIEWS.includes(pageKey) ? pageKey : 'home';
  if (updateHash && window.location.hash !== `#${key}`) {
    window.location.hash = key;
    return;
  }

  document.querySelectorAll('.spa-view').forEach((v) => v.classList.remove('active'));
  const target = document.getElementById(`view-${key}`);
  if (target) target.classList.add('active');

  const subEl = document.getElementById('topbarSubtitle');
  if (subEl) subEl.textContent = getPageSubtitle(key);

  // Highlight active navigation items
  document.querySelectorAll('.nav-pill').forEach((el) => {
    el.classList.toggle('active', el.dataset.page === key);
  });
  document.querySelectorAll('.drawer-link[data-page]').forEach((el) => {
    el.classList.toggle('active', el.dataset.page === key);
  });
  const isChapter = key.startsWith('bab');
  document.querySelectorAll('.bottom-nav-item[data-page]').forEach((el) => {
    const p = el.dataset.page;
    el.classList.toggle('active', p === key || (p === 'chapters' && isChapter));
  });

  // Close drawer & search modal on navigation
  const drawer = document.getElementById('appDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  if (drawer) drawer.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
  const searchModal = document.getElementById('searchModal');
  if (searchModal) searchModal.classList.remove('open');

  if (key === 'home' && typeof window.refreshHomeDashboard === 'function') {
    window.refreshHomeDashboard();
  }
  if (key !== 'video' && typeof window.stopVideoStudio === 'function') {
    window.stopVideoStudio();
  }
  renderChapterCompletionBtn();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function refreshDrawerChecks() {
  const st = getState();
  CHAPTERS.forEach((c) => {
    const link = document.querySelector(`.drawer-link[data-page="${c.id}"]`);
    if (!link) return;
    let chk = link.querySelector('.drawer-check');
    const done = st.completedChapters.includes(c.id);
    if (done && !chk) {
      chk = document.createElement('span');
      chk.className = 'drawer-check';
      chk.title = 'Selesai';
      chk.textContent = '✔';
      link.appendChild(chk);
    } else if (!done && chk) {
      chk.remove();
    }
  });
}

function injectAppShell() {
  const st = getState();
  const key = getCurrentPageKey();

  const topbar = document.createElement('header');
  topbar.className = 'topbar';
  topbar.innerHTML = `
    <div class="topbar-left">
      <button class="icon-btn" id="openDrawerBtn" aria-label="Buka Daftar Bab">☰</button>
      <a href="#home" class="brand-link">
        <svg class="brand-logo" viewBox="0 0 512 512" aria-label="Logo MatdisMaster">
          <defs>
            <linearGradient id="tbBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#4F46E5"/><stop offset="100%" stop-color="#0EA5E9"/>
            </linearGradient>
          </defs>
          <rect width="512" height="512" rx="112" fill="url(#tbBg)"/>
          <g stroke="#fff" stroke-width="18" stroke-linecap="round"><line x1="150" y1="320" x2="256" y2="145"/><line x1="256" y1="145" x2="362" y2="320"/><line x1="150" y1="320" x2="362" y2="320"/></g>
          <circle cx="256" cy="145" r="44" fill="#FDE047" stroke="#fff" stroke-width="12"/>
          <circle cx="150" cy="320" r="38" fill="#10B981" stroke="#fff" stroke-width="12"/>
          <circle cx="362" cy="320" r="38" fill="#EC4899" stroke="#fff" stroke-width="12"/>
          <text x="256" y="160" font-family="Arial,sans-serif" font-weight="900" font-size="44" fill="#1E1B4B" text-anchor="middle">∀</text>
          <text x="150" y="334" font-family="Arial,sans-serif" font-weight="900" font-size="40" fill="#fff" text-anchor="middle">∩</text>
          <text x="362" y="334" font-family="Arial,sans-serif" font-weight="900" font-size="40" fill="#fff" text-anchor="middle">→</text>
        </svg>
        <div class="brand-text">
          <span class="brand-title">MatdisMaster</span>
          <span class="brand-sub" id="topbarSubtitle">${getPageSubtitle(key)}</span>
        </div>
      </a>
    </div>
    <nav class="desktop-nav" aria-label="Navigasi Utama">
      <a href="#home" class="nav-pill" data-page="home">🏠 Beranda</a>
      <a href="#rumus" class="nav-pill" data-page="rumus">📐 Rumus</a>
      <a href="#latihan" class="nav-pill" data-page="latihan">📝 Latihan</a>
      <a href="#video" class="nav-pill" data-page="video">🎬 Video</a>
      <a href="#game" class="nav-pill" data-page="game">🎮 Game</a>
    </nav>
    <div class="topbar-actions">
      <span class="xp-pill" id="globalXpBadge">⚡ ${st.xp} XP</span>
      <a href="#video" class="icon-btn" title="Video Animasi Penjelasan" aria-label="Video Animasi">🎬</a>
      <button class="icon-btn" id="openSearchBtn" title="Cari Materi / Rumus" aria-label="Cari">🔍</button>
      <button class="icon-btn" id="themeToggleBtn" title="Ganti Tema Terang/Gelap" aria-label="Ganti Tema">${st.theme === 'dark' ? '☀️' : '🌙'}</button>
    </div>
  `;
  document.body.prepend(topbar);

  const backdrop = document.createElement('div');
  backdrop.className = 'drawer-backdrop';
  backdrop.id = 'drawerBackdrop';

  const drawer = document.createElement('aside');
  drawer.className = 'drawer';
  drawer.id = 'appDrawer';
  const chapterLinksHtml = CHAPTERS.map((c, idx) => {
    const isDone = st.completedChapters.includes(c.id);
    return `
      <a href="${c.url}" class="drawer-link" data-page="${c.id}">
        <span class="drawer-badge">${idx + 1}</span>
        <span style="flex:1;line-height:1.25;">${c.title}</span>
        ${isDone ? '<span class="drawer-check" title="Selesai">✔</span>' : ''}
      </a>
    `;
  }).join('');

  drawer.innerHTML = `
    <div class="drawer-header">
      <div>
        <div style="font-weight:800;font-size:1.05rem;">📱 MatdisMaster</div>
        <div style="font-size:0.78rem;opacity:0.9;">19 Sub-Bab Lengkap • 1 Website</div>
      </div>
      <button class="icon-btn" id="closeDrawerBtn" style="background:rgba(255,255,255,0.2);color:#fff;border:none;">✕</button>
    </div>
    <div class="drawer-body">
      <div class="drawer-section-title">Menu Utama</div>
      <a href="#home" class="drawer-link" data-page="home"><span class="drawer-badge">🏠</span> Beranda &amp; Progres</a>
      <a href="#rumus" class="drawer-link" data-page="rumus"><span class="drawer-badge">📐</span> Ringkasan Rumus</a>
      <a href="#latihan" class="drawer-link" data-page="latihan"><span class="drawer-badge">📝</span> Bank Latihan &amp; UAS</a>
      <a href="#video" class="drawer-link" data-page="video"><span class="drawer-badge">🎬</span> Video Animasi Penjelasan</a>
      <a href="#game" class="drawer-link" data-page="game"><span class="drawer-badge">🎮</span> Arena Game Edukasi</a>
      <button class="drawer-link" id="openAndroidGuideBtn" style="width:100%;border:none;background:transparent;cursor:pointer;text-align:left;font-family:inherit;">
        <span class="drawer-badge">🤖</span> Pasang di Android (PWA/APK)
      </button>
      <div class="drawer-section-title">Materi Per Sub-Bab</div>
      ${chapterLinksHtml}
    </div>
  `;
  document.body.appendChild(backdrop);
  document.body.appendChild(drawer);

  const bottomNav = document.createElement('nav');
  bottomNav.className = 'bottom-nav';
  bottomNav.setAttribute('aria-label', 'Navigasi Bawah Android');
  bottomNav.innerHTML = `
    <a href="#home" class="bottom-nav-item" data-page="home"><span class="nav-ico">🏠</span><span>Beranda</span></a>
    <button type="button" class="bottom-nav-item" data-page="chapters" id="bottomChaptersBtn"><span class="nav-ico">📚</span><span>Sub-Bab</span></button>
    <a href="#rumus" class="bottom-nav-item" data-page="rumus"><span class="nav-ico">📐</span><span>Rumus</span></a>
    <a href="#latihan" class="bottom-nav-item" data-page="latihan"><span class="nav-ico">📝</span><span>Latihan</span></a>
    <a href="#game" class="bottom-nav-item" data-page="game"><span class="nav-ico">🎮</span><span>Game</span></a>
  `;
  document.body.appendChild(bottomNav);

  const modals = document.createElement('div');
  modals.innerHTML = `
    <div class="modal-backdrop" id="searchModal">
      <div class="modal-card">
        <div class="modal-header">
          <span>🔍 Cari Materi, Rumus &amp; Game</span>
          <button class="icon-btn" id="closeSearchBtn" style="width:34px;height:34px;">✕</button>
        </div>
        <div class="modal-body">
          <input type="search" id="searchInput" class="input-control" placeholder="Ketik kata kunci: himpunan, de morgan, permutasi, bfs, graf..." />
          <div id="searchResults" style="margin-top:12px;display:grid;gap:8px;"></div>
        </div>
      </div>
    </div>

    <div class="modal-backdrop" id="androidModal">
      <div class="modal-card">
        <div class="modal-header">
          <span>🤖 Jalankan di Android (PWA &amp; Offline)</span>
          <button class="icon-btn" id="closeAndroidBtn" style="width:34px;height:34px;">✕</button>
        </div>
        <div class="modal-body" style="font-size:0.92rem;">
          <p>Seluruh aplikasi <strong>MatdisMaster</strong> kini tergabung dalam <strong>1 website terpadu (Single-Page App + PWA)</strong> sehingga langsung bisa dibuka di Android atau dipasang ke layar utama.</p>
          <div class="callout success">
            <div class="callout-title">📲 Cara 1: Install Langsung via Chrome Android (Paling Mudah)</div>
            <ol style="margin:6px 0 0;padding-left:18px;">
              <li>Buka website ini di <strong>Google Chrome Android</strong> (via hosting HTTPS seperti GitHub Pages / Netlify / Vercel atau jaringan lokal).</li>
              <li>Ketuk tombol <strong>"Pasang di Android"</strong> atau ketuk menu titik tiga <strong>⋮</strong> di pojok kanan atas Chrome.</li>
              <li>Pilih <strong>"Tambahkan ke Layar Utama" (Add to Home Screen / Install App)</strong>.</li>
              <li>Ikon <strong>MatdisMaster</strong> muncul di layar Android dan berjalan fullscreen + offline!</li>
            </ol>
          </div>
          <div class="callout info">
            <div class="callout-title">📦 Cara 2: Buka Offline / Ubah ke .APK</div>
            <p style="margin:4px 0;">Karena seluruh materi, rumus, latihan, dan 4 game berada dalam 1 file <code>Matematika Diskrit.html</code>, Anda juga bisa langsung menyalin file <code>Matematika Diskrit.html</code> ke HP Android dan membukanya di Chrome/WebView, atau membungkusnya menjadi file <strong>.APK</strong> via <strong>PWABuilder.com</strong> / <strong>Capacitor</strong>.</p>
          </div>
          <button class="btn btn-primary" id="modalInstallPwaBtn" style="width:100%;display:none;">⬇️ Install Aplikasi Sekarang</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modals);

  const openDrawer = () => {
    drawer.classList.add('open');
    backdrop.classList.add('open');
  };
  const closeDrawer = () => {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
  };
  document.getElementById('openDrawerBtn').addEventListener('click', openDrawer);
  document.getElementById('bottomChaptersBtn').addEventListener('click', openDrawer);
  document.getElementById('closeDrawerBtn').addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
  document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);

  const searchModal = document.getElementById('searchModal');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  const renderSearch = (q) => {
    const query = q.trim().toLowerCase();
    const list = query
      ? SEARCH_INDEX.filter((item) =>
          (item.title + ' ' + item.keywords + ' ' + item.tag).toLowerCase().includes(query)
        )
      : SEARCH_INDEX;
    if (list.length === 0) {
      searchResults.innerHTML = `<div class="callout warning">Tidak ada hasil untuk "<strong>${q}</strong>".</div>`;
      return;
    }
    searchResults.innerHTML = list
      .map(
        (item) => `
      <a href="${item.url}" class="chapter-card" style="padding:12px 14px;margin:0;">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
          <strong style="font-size:0.92rem;">${item.title}</strong>
          <span class="tag">${item.tag}</span>
        </div>
      </a>
    `
      )
      .join('');
  };

  document.getElementById('openSearchBtn').addEventListener('click', () => {
    searchModal.classList.add('open');
    renderSearch('');
    setTimeout(() => searchInput.focus(), 100);
  });
  document.getElementById('closeSearchBtn').addEventListener('click', () => searchModal.classList.remove('open'));
  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) searchModal.classList.remove('open');
  });
  searchInput.addEventListener('input', (e) => renderSearch(e.target.value));

  const androidModal = document.getElementById('androidModal');
  document.getElementById('openAndroidGuideBtn').addEventListener('click', () => {
    closeDrawer();
    androidModal.classList.add('open');
  });
  document.getElementById('closeAndroidBtn').addEventListener('click', () => androidModal.classList.remove('open'));
  androidModal.addEventListener('click', (e) => {
    if (e.target === androidModal) androidModal.classList.remove('open');
  });

  window.openAndroidGuide = () => androidModal.classList.add('open');
}

function updateGlobalUI() {
  const st = getState();
  const badge = document.getElementById('globalXpBadge');
  if (badge) badge.textContent = `⚡ ${st.xp} XP`;
}

function renderChapterCompletionBtn() {
  const st = getState();
  document.querySelectorAll('.mark-done-btn').forEach((btn) => {
    const chapId = btn.dataset.chapter;
    const isDone = st.completedChapters.includes(chapId);
    if (isDone) {
      btn.className = 'btn btn-accent mark-done-btn';
      btn.innerHTML = '✔ Sub-Bab Selesai Dipelajari';
    } else {
      btn.className = 'btn btn-primary mark-done-btn';
      btn.innerHTML = '☑️ Tandai Sub-Bab Selesai (+50 XP)';
    }
  });
}

function initInteractiveSolutions() {
  document.querySelectorAll('.solution-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const box = document.getElementById(targetId);
      if (!box) return;
      const open = box.classList.toggle('open');
      btn.textContent = open ? '🙈 Sembunyikan Pembahasan' : '💡 Lihat Jawaban & Pembahasan';
    });
  });

  document.querySelectorAll('.quiz-item[data-answer]').forEach((item) => {
    const correct = item.dataset.answer;
    const qId = item.dataset.qid;
    const opts = item.querySelectorAll('.quiz-opt');
    opts.forEach((opt) => {
      opt.addEventListener('click', () => {
        if (item.dataset.locked === '1') return;
        item.dataset.locked = '1';
        const val = opt.dataset.val;
        const sol = item.querySelector('.solution-box');
        if (sol) sol.classList.add('open');
        const toggleBtn = item.querySelector('.solution-toggle');
        if (toggleBtn) toggleBtn.textContent = '🙈 Sembunyikan Pembahasan';

        if (val === correct) {
          opt.classList.add('correct');
          const st = getState();
          if (qId && !st.solvedQuestions.includes(qId)) {
            st.solvedQuestions.push(qId);
            st.xp += 15;
            saveState(st);
            showToast('Benar! +15 XP 🎯');
          } else {
            showToast('Jawaban Benar! ✅');
          }
        } else {
          opt.classList.add('wrong');
          opts.forEach((o) => {
            if (o.dataset.val === correct) o.classList.add('correct');
          });
          showToast('Kurang tepat, pelajari pembahasannya di bawah 💡');
        }
      });
    });
  });
}

let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.querySelectorAll('.pwa-install-btn').forEach((b) => {
    b.style.display = 'inline-flex';
  });
  const modalBtn = document.getElementById('modalInstallPwaBtn');
  if (modalBtn) modalBtn.style.display = 'inline-flex';
});

async function triggerPWAInstall() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      showToast('Aplikasi MatdisMaster sedang dipasang di Android! 📲');
    }
    deferredPrompt = null;
  } else if (window.openAndroidGuide) {
    window.openAndroidGuide();
  }
}

if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

window.addEventListener('hashchange', () => {
  showPage(getCurrentPageKey(), false);
});

document.addEventListener('DOMContentLoaded', () => {
  const st = getState();
  applyTheme(st.theme || 'light');
  injectAppShell();
  renderChapterCompletionBtn();
  initInteractiveSolutions();
  showPage(getCurrentPageKey(), false);

  document.addEventListener('click', (e) => {
    const vidBtn = e.target.closest('.open-video-btn');
    if (vidBtn) {
      const epId = vidBtn.dataset.ep;
      if (window.location.hash !== '#video') window.location.hash = 'video';
      else showPage('video', false);
      if (typeof window.openVideoEpisode === 'function') {
        setTimeout(() => window.openVideoEpisode(epId, true), 40);
      }
      return;
    }
    const doneBtn = e.target.closest('.mark-done-btn');
    if (doneBtn) {
      toggleChapterComplete(doneBtn.dataset.chapter);
      return;
    }
    if (e.target.closest('#modalInstallPwaBtn') || e.target.closest('.pwa-install-btn')) {
      triggerPWAInstall();
      return;
    }
    const anchor = e.target.closest('a[href^="#"]');
    if (anchor) {
      const targetKey = anchor.getAttribute('href').slice(1);
      if (VALID_VIEWS.includes(targetKey)) {
        e.preventDefault();
        if (window.location.hash === `#${targetKey}`) {
          showPage(targetKey, false);
        } else {
          window.location.hash = targetKey;
        }
      }
    }
  });
});
