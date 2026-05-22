/* ═══════════════════════════════════════════════
   GILDA PWA — app.js
   Versione: 2.0
   Stack: Supabase Auth + Database, JS vanilla
═══════════════════════════════════════════════ */

/* ─────────────────────────────────────────────
   ⚠️  CONFIGURAZIONE — sostituire con le
   credenziali reali del progetto Supabase
   https://app.supabase.com → Settings → API
───────────────────────────────────────────── */
const SUPABASE_URL = 'https://qnhnsjqzheyiacfmmmbe.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_o_I1mMXd_l9nnnYQU13oHg_otWYXYoz';

/* ─────────────────────────────────────────────
   CATALOGO PRODOTTI
   Aggiungere nuovi prodotti solo qui.
   Il resto dell'app si adatta automaticamente.
───────────────────────────────────────────── */
const PRODUCTS_CATALOG = [
  {
    id: 'autosabotaggio',
    slug: 'autosabotaggio',
    tag: 'Percorso',
    title: 'Come ti fai fuori da sola',
    description: 'Il tuo pattern di autosabotaggio — riconoscerlo, capirlo, smettere di alimentarlo.',
    price: '€9',
    sections: [
      {
        id: 'pattern',
        name: 'Il tuo pattern',
        questions: [
          'Descrivi un momento recente in cui hai sabotato qualcosa che volevi davvero. Cosa è successo esattamente?',
          'Qual è la storia che ti racconti in quel momento? Cosa ti dici?',
          'Questo schema si ripete? In quali aree della tua vita lo riconosci di più?',
          'Chi beneficia del fatto che tu rimanga ferma?',
        ],
      },
      {
        id: 'momento-esatto',
        name: 'Il momento esatto',
        questions: [
          'Individua il momento preciso in cui la parte di te che si fa da parte prende il controllo. Cosa senti nel corpo?',
          'C\'è un\'emozione che precede il blocco? Rabbia, paura, vergogna, eccitazione?',
          'Cosa succederebbe — davvero — se riuscissi?',
          'Cosa ti costerebbe riuscire?',
        ],
      },
      {
        id: 'logica-interna',
        name: 'La logica interna',
        questions: [
          'Il tuo autosabotaggio ti protegge da qualcosa. Da cosa?',
          'Quando hai imparato che era pericoloso avere troppo? Troppo successo, troppa gioia, troppa visibilità?',
          'Se il sabotaggio avesse una voce, cosa direbbe?',
          'C\'è qualcosa che questa strategia ti ha davvero salvato, in passato?',
        ],
      },
      {
        id: 'passo-piccolo',
        name: 'Il passo piccolo',
        questions: [
          'Non ti chiedo di cambiare tutto. Ti chiedo: qual è la cosa più piccola possibile che potresti fare diversamente la prossima volta?',
          'Come vorresti che qualcuno ti trattasse quando ti fai fuori da sola?',
          'Scrivi una lettera breve alla versione di te che sabota. Non per giudicarla — per capirla.',
          'Cosa ci vorrà per scegliere te, anche solo una volta?',
        ],
      },
    ],
  },
  {
    id: 'confini',
    slug: 'confini',
    tag: 'Percorso',
    title: 'I confini',
    description: 'Imparare a dire no non è essere difficili. È sapere dove finisci tu e dove inizia il dovere degli altri.',
    price: '€9',
    locked_preview: true,
    sections: [
      { id: 's1', name: 'Dove sono i tuoi confini oggi', questions: ['Descrizione sezione 1...'] },
      { id: 's2', name: 'Quando hai smesso di averli', questions: ['Descrizione sezione 2...'] },
      { id: 's3', name: 'Il costo del sì continuo', questions: ['Descrizione sezione 3...'] },
      { id: 's4', name: 'Costruire confini che reggono', questions: ['Descrizione sezione 4...'] },
    ],
  },
];

/* ─────────────────────────────────────────────
   CODICI DI SBLOCCO (gestiti su Supabase)
   La tabella `unlock_codes` su Supabase ha:
   - code TEXT UNIQUE
   - product_id TEXT
   - used_by UUID (nullable)
   - used_at TIMESTAMPTZ (nullable)
───────────────────────────────────────────── */

/* ═══════════════════════════════════════════════
   INIZIALIZZAZIONE
═══════════════════════════════════════════════ */

let db;
let currentUser = null;
let currentProductId = null;
let currentSectionIndex = null;
let userAnswers = {};      // { "productId:sectionId:questionIndex": "testo" }
let unlockedProducts = []; // array di product_id

try {
  db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} catch (e) {
  console.error('Supabase init error:', e);
}

/* ═══════════════════════════════════════════════
   DOM REFS
═══════════════════════════════════════════════ */
const $ = id => document.getElementById(id);

const dom = {
  screenAuth:      $('screen-auth'),
  screenApp:       $('screen-app'),
  overlayLoading:  $('overlay-loading'),
  toast:           $('toast'),

  // Auth
  formLogin:       $('form-login'),
  formRegister:    $('form-register'),
  loginEmail:      $('login-email'),
  loginPassword:   $('login-password'),
  regEmail:        $('reg-email'),
  regPassword:     $('reg-password'),
  btnLogin:        $('btn-login'),
  btnRegister:     $('btn-register'),
  authMessage:     $('auth-message'),
  linkForgot:      $('link-forgot'),
  authTabs:        document.querySelectorAll('.auth-tab'),

  // App
  btnBack:         $('btn-back'),
  btnProfile:      $('btn-profile'),

  // Views
  viewLibrary:     $('view-library'),
  viewProduct:     $('view-product'),
  viewSection:     $('view-section'),
  viewProfile:     $('view-profile'),

  // Library
  productsGrid:    $('products-grid'),
  unlockInput:     $('unlock-input'),
  btnUnlock:       $('btn-unlock'),
  unlockMessage:   $('unlock-message'),

  // Product
  productHeader:   $('product-header'),
  progressFill:    $('progress-fill'),
  progressLabel:   $('progress-label'),
  sectionsList:    $('sections-list'),
  btnExport:       $('btn-export'),

  // Section
  sectionHeader:   $('section-header'),
  questionsList:   $('questions-list'),
  btnPrevSection:  $('btn-prev-section'),
  btnNextSection:  $('btn-next-section'),

  // Profile
  profileEmail:    $('profile-email'),
  profileStats:    $('profile-stats'),
  btnLogout:       $('btn-logout'),
};

/* ═══════════════════════════════════════════════
   UTILS
═══════════════════════════════════════════════ */

function showLoading() { dom.overlayLoading.classList.remove('hidden'); }
function hideLoading() { dom.overlayLoading.classList.add('hidden'); }

let toastTimer;
function showToast(msg, duration = 2800) {
  dom.toast.textContent = msg;
  dom.toast.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => dom.toast.classList.add('hidden'), duration);
}

function showAuthMessage(msg, type = 'error') {
  dom.authMessage.textContent = msg;
  dom.authMessage.className = `auth-message ${type}`;
}

function hideAuthMessage() {
  dom.authMessage.className = 'auth-message hidden';
}

function answerKey(productId, sectionId, qIndex) {
  return `${productId}:${sectionId}:${qIndex}`;
}

function getProduct(id) {
  return PRODUCTS_CATALOG.find(p => p.id === id) || null;
}

function isUnlocked(productId) {
  return unlockedProducts.includes(productId);
}

/* ═══════════════════════════════════════════════
   VIEW NAVIGATION
═══════════════════════════════════════════════ */

const views = {
  library: dom.viewLibrary,
  product: dom.viewProduct,
  section: dom.viewSection,
  profile: dom.viewProfile,
};

let viewStack = ['library'];

function showView(name, pushToStack = true) {
  Object.values(views).forEach(v => v.classList.remove('active'));
  views[name].classList.add('active');

  if (pushToStack) {
    if (viewStack[viewStack.length - 1] !== name) {
      viewStack.push(name);
    }
  }

  const canGoBack = viewStack.length > 1;
  dom.btnBack.classList.toggle('hidden', !canGoBack);
}

function goBack() {
  if (viewStack.length <= 1) return;
  viewStack.pop();
  const prev = viewStack[viewStack.length - 1];
  showView(prev, false);

  // Refresh views on back navigation
  if (prev === 'library') renderLibrary();
  if (prev === 'product' && currentProductId) renderProduct(currentProductId);
}

/* ═══════════════════════════════════════════════
   AUTH
═══════════════════════════════════════════════ */

async function initAuth() {
  showLoading();

  if (!db) {
    hideLoading();
    showDemoMode();
    return;
  }

  const { data: { session } } = await db.auth.getSession();

  if (session?.user) {
    await onLogin(session.user);
  } else {
    showAuthScreen();
    hideLoading();
  }

  db.auth.onAuthStateChange(async (event, session) => {
    if (event === 'SIGNED_IN' && session?.user) {
      await onLogin(session.user);
    } else if (event === 'SIGNED_OUT') {
      onLogout();
    }
  });
}

async function onLogin(user) {
  currentUser = user;
  await loadUserData();
  showAppScreen();
  renderLibrary();
  hideLoading();
}

function onLogout() {
  currentUser = null;
  userAnswers = {};
  unlockedProducts = [];
  currentProductId = null;
  currentSectionIndex = null;
  viewStack = ['library'];
  showAuthScreen();
}

function showAuthScreen() {
  dom.screenAuth.classList.add('active');
  dom.screenApp.classList.remove('active');
}

function showAppScreen() {
  dom.screenAuth.classList.remove('active');
  dom.screenApp.classList.add('active');
}

// Login
dom.formLogin.addEventListener('submit', async (e) => {
  e.preventDefault();
  hideAuthMessage();
  dom.btnLogin.disabled = true;
  dom.btnLogin.textContent = '…';

  const { error } = await db.auth.signInWithPassword({
    email: dom.loginEmail.value.trim(),
    password: dom.loginPassword.value,
  });

  if (error) {
    showAuthMessage(translateAuthError(error.message));
    dom.btnLogin.disabled = false;
    dom.btnLogin.textContent = 'Entra';
  }
  // onAuthStateChange handles the rest
});

// Register
dom.formRegister.addEventListener('submit', async (e) => {
  e.preventDefault();
  hideAuthMessage();
  dom.btnRegister.disabled = true;
  dom.btnRegister.textContent = '…';

  const { error } = await db.auth.signUp({
    email: dom.regEmail.value.trim(),
    password: dom.regPassword.value,
  });

  if (error) {
    showAuthMessage(translateAuthError(error.message));
  } else {
    showAuthMessage('Controlla la tua email per confermare l\'account.', 'success');
  }

  dom.btnRegister.disabled = false;
  dom.btnRegister.textContent = 'Crea account';
});

// Forgot password
dom.linkForgot.addEventListener('click', async (e) => {
  e.preventDefault();
  const email = dom.loginEmail.value.trim();
  if (!email) { showAuthMessage('Inserisci la tua email prima.'); return; }
  const { error } = await db.auth.resetPasswordForEmail(email);
  if (error) {
    showAuthMessage(translateAuthError(error.message));
  } else {
    showAuthMessage('Email di reset inviata. Controlla la posta.', 'success');
  }
});

// Auth tabs
dom.authTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    dom.authTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.dataset.tab;
    dom.formLogin.classList.toggle('active', target === 'login');
    dom.formRegister.classList.toggle('active', target === 'register');
    hideAuthMessage();
  });
});

function translateAuthError(msg) {
  const map = {
    'Invalid login credentials': 'Email o password errati.',
    'Email not confirmed': 'Email non confermata. Controlla la posta.',
    'User already registered': 'Questa email è già registrata.',
    'Password should be at least 6 characters': 'La password deve avere almeno 6 caratteri.',
    'Rate limit exceeded': 'Troppi tentativi. Riprova tra poco.',
  };
  return map[msg] || msg;
}

/* ═══════════════════════════════════════════════
   USER DATA — Supabase
═══════════════════════════════════════════════ */

async function loadUserData() {
  if (!db || !currentUser) return;

  try {
    // Load answers
    const { data: answers } = await db
      .from('answers')
      .select('answer_key, answer_text')
      .eq('user_id', currentUser.id);

    userAnswers = {};
    (answers || []).forEach(row => {
      userAnswers[row.answer_key] = row.answer_text;
    });

    // Load unlocked products
    const { data: unlocked } = await db
      .from('user_products')
      .select('product_id')
      .eq('user_id', currentUser.id);

    unlockedProducts = (unlocked || []).map(r => r.product_id);

    // First product always unlocked (demo/first product free)
    if (PRODUCTS_CATALOG.length > 0 && !unlockedProducts.includes(PRODUCTS_CATALOG[0].id)) {
      unlockedProducts.push(PRODUCTS_CATALOG[0].id);
      // Persist to db
      await db.from('user_products').upsert({
        user_id: currentUser.id,
        product_id: PRODUCTS_CATALOG[0].id,
        unlocked_at: new Date().toISOString(),
      });
    }

  } catch (err) {
    console.error('loadUserData error:', err);
  }
}

let saveDebounceTimers = {};

async function saveAnswer(productId, sectionId, qIndex, text) {
  const key = answerKey(productId, sectionId, qIndex);
  userAnswers[key] = text;

  if (!db || !currentUser) return;

  clearTimeout(saveDebounceTimers[key]);
  saveDebounceTimers[key] = setTimeout(async () => {
    updateSaveStatus(key, 'saving');
    try {
      await db.from('answers').upsert({
        user_id: currentUser.id,
        answer_key: key,
        answer_text: text,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'user_id,answer_key' });
      updateSaveStatus(key, 'saved');
    } catch (err) {
      console.error('saveAnswer error:', err);
    }
  }, 800);
}

function updateSaveStatus(key, status) {
  const el = document.querySelector(`[data-save-key="${key}"]`);
  if (!el) return;
  if (status === 'saving') {
    el.className = 'question-saved saving';
    el.textContent = 'Salvataggio…';
  } else if (status === 'saved') {
    el.className = 'question-saved saved';
    el.textContent = '✓ Salvato';
    setTimeout(() => {
      if (el) { el.className = 'question-saved'; el.textContent = ''; }
    }, 2500);
  }
}

/* ═══════════════════════════════════════════════
   UNLOCK CODE
═══════════════════════════════════════════════ */

dom.btnUnlock.addEventListener('click', handleUnlock);
dom.unlockInput.addEventListener('keydown', e => { if (e.key === 'Enter') handleUnlock(); });

async function handleUnlock() {
  const code = dom.unlockInput.value.trim().toUpperCase();
  if (!code) return;

  dom.btnUnlock.disabled = true;
  dom.btnUnlock.textContent = '…';
  dom.unlockMessage.className = 'unlock-message hidden';

  try {
    if (!db || !currentUser) {
      showUnlockMessage('Devi essere connessa per sbloccare un prodotto.', 'error');
      return;
    }

    // Find code in db
    const { data: codeRow, error } = await db
      .from('unlock_codes')
      .select('*')
      .eq('code', code)
      .single();

    if (error || !codeRow) {
      showUnlockMessage('Codice non valido. Controlla e riprova.', 'error');
      return;
    }

    if (codeRow.used_by && codeRow.used_by !== currentUser.id) {
      showUnlockMessage('Questo codice è già stato usato.', 'error');
      return;
    }

    if (isUnlocked(codeRow.product_id)) {
      showUnlockMessage('Questo prodotto è già nella tua libreria.', 'error');
      return;
    }

    // Mark code as used
    await db.from('unlock_codes').update({
      used_by: currentUser.id,
      used_at: new Date().toISOString(),
    }).eq('code', code);

    // Add to user products
    await db.from('user_products').upsert({
      user_id: currentUser.id,
      product_id: codeRow.product_id,
      unlocked_at: new Date().toISOString(),
    });

    unlockedProducts.push(codeRow.product_id);
    dom.unlockInput.value = '';
    showUnlockMessage('Prodotto sbloccato! Lo trovi in libreria.', 'success');
    renderLibrary();

  } catch (err) {
    console.error('unlock error:', err);
    showUnlockMessage('Errore. Riprova tra poco.', 'error');
  } finally {
    dom.btnUnlock.disabled = false;
    dom.btnUnlock.textContent = 'Sblocca';
  }
}

function showUnlockMessage(msg, type) {
  dom.unlockMessage.textContent = msg;
  dom.unlockMessage.className = `unlock-message ${type}`;
}

/* ═══════════════════════════════════════════════
   PROGRESS
═══════════════════════════════════════════════ */

function getProductProgress(productId) {
  const product = getProduct(productId);
  if (!product) return 0;

  let total = 0;
  let answered = 0;

  product.sections.forEach(section => {
    section.questions.forEach((_, idx) => {
      total++;
      const key = answerKey(productId, section.id, idx);
      if (userAnswers[key] && userAnswers[key].trim().length > 0) answered++;
    });
  });

  return total === 0 ? 0 : Math.round((answered / total) * 100);
}

function getSectionProgress(productId, sectionId) {
  const product = getProduct(productId);
  if (!product) return false;

  const section = product.sections.find(s => s.id === sectionId);
  if (!section) return false;

  return section.questions.every((_, idx) => {
    const key = answerKey(productId, sectionId, idx);
    return userAnswers[key] && userAnswers[key].trim().length > 0;
  });
}

/* ═══════════════════════════════════════════════
   RENDER LIBRARY
═══════════════════════════════════════════════ */

function renderLibrary() {
  dom.productsGrid.innerHTML = '';

  PRODUCTS_CATALOG.forEach(product => {
    const unlocked = isUnlocked(product.id);
    const progress = unlocked ? getProductProgress(product.id) : 0;
    const card = createProductCard(product, unlocked, progress);
    dom.productsGrid.appendChild(card);
  });
}

function createProductCard(product, unlocked, progress) {
  const div = document.createElement('div');
  div.className = `product-card ${unlocked ? '' : 'locked'}`;

  if (unlocked) {
    div.addEventListener('click', () => openProduct(product.id));
  }

  const previewSections = product.sections.slice(0, 3)
    .map(s => `<div class="preview-section-item">${s.name}</div>`)
    .join('');

  div.innerHTML = `
    <div class="card-stripe"></div>
    <div class="card-body">
      <div class="card-tag">${product.tag}</div>
      <div class="card-title">${product.title}</div>
      <div class="card-desc">${product.description}</div>
      ${unlocked ? `
        <div class="card-progress">
          <div class="card-progress-track">
            <div class="card-progress-fill" style="width:${progress}%"></div>
          </div>
          <span class="card-progress-pct">${progress}%</span>
        </div>
      ` : `
        <div class="card-locked-badge">
          <svg class="lock-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          <span class="card-locked-text">Sblocca con codice — ${product.price}</span>
        </div>
      `}
    </div>
    ${!unlocked ? `
      <div class="card-preview">
        <div class="card-preview-title">Cosa trovi dentro</div>
        <div class="card-preview-sections">${previewSections}</div>
      </div>
    ` : ''}
  `;

  return div;
}

/* ═══════════════════════════════════════════════
   RENDER PRODUCT
═══════════════════════════════════════════════ */

function openProduct(productId) {
  currentProductId = productId;
  renderProduct(productId);
  showView('product');
}

function renderProduct(productId) {
  const product = getProduct(productId);
  if (!product) return;

  const progress = getProductProgress(productId);

  dom.productHeader.innerHTML = `
    <div class="product-header-tag">${product.tag}</div>
    <div class="product-header-title">${product.title}</div>
    <div class="product-header-desc">${product.description}</div>
  `;

  dom.progressFill.style.width = `${progress}%`;
  dom.progressLabel.textContent = `${progress}%`;

  dom.sectionsList.innerHTML = '';
  product.sections.forEach((section, index) => {
    const completed = getSectionProgress(productId, section.id);
    const item = document.createElement('div');
    item.className = `section-item ${completed ? 'completed' : ''}`;
    item.innerHTML = `
      <div class="section-num">${completed ? '✓' : index + 1}</div>
      <div class="section-info">
        <div class="section-name">${section.name}</div>
        <div class="section-count">${section.questions.length} domande</div>
      </div>
      <svg class="section-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    `;
    item.addEventListener('click', () => openSection(productId, index));
    dom.sectionsList.appendChild(item);
  });
}

/* ═══════════════════════════════════════════════
   RENDER SECTION / QUESTIONS
═══════════════════════════════════════════════ */

function openSection(productId, sectionIndex) {
  currentProductId = productId;
  currentSectionIndex = sectionIndex;
  renderSection(productId, sectionIndex);
  showView('section');
}

function renderSection(productId, sectionIndex) {
  const product = getProduct(productId);
  if (!product) return;

  const section = product.sections[sectionIndex];
  if (!section) return;

  dom.sectionHeader.innerHTML = `
    <div class="section-header-label">${product.title} — ${sectionIndex + 1} / ${product.sections.length}</div>
    <div class="section-header-title">${section.name}</div>
  `;

  dom.questionsList.innerHTML = '';

  section.questions.forEach((question, qIdx) => {
    const key = answerKey(productId, section.id, qIdx);
    const savedText = userAnswers[key] || '';

    const block = document.createElement('div');
    block.className = 'question-block';
    block.innerHTML = `
      <div class="question-num">Domanda ${qIdx + 1}</div>
      <div class="question-text">${question}</div>
      <textarea class="question-textarea" placeholder="Scrivi qui la tua risposta…" rows="4">${savedText}</textarea>
      <div class="question-saved" data-save-key="${key}"></div>
    `;

    const textarea = block.querySelector('textarea');
    textarea.addEventListener('input', () => {
      saveAnswer(productId, section.id, qIdx, textarea.value);
    });

    dom.questionsList.appendChild(block);
  });

  // Prev / Next buttons
  dom.btnPrevSection.disabled = sectionIndex === 0;
  dom.btnNextSection.disabled = sectionIndex === product.sections.length - 1;
  dom.btnPrevSection.onclick = () => navigateSection(-1);
  dom.btnNextSection.onclick = () => navigateSection(1);
}

function navigateSection(direction) {
  const product = getProduct(currentProductId);
  if (!product) return;

  const newIndex = currentSectionIndex + direction;
  if (newIndex < 0 || newIndex >= product.sections.length) return;

  currentSectionIndex = newIndex;
  renderSection(currentProductId, currentSectionIndex);
  dom.viewSection.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ═══════════════════════════════════════════════
   EXPORT
═══════════════════════════════════════════════ */

dom.btnExport.addEventListener('click', () => {
  const product = getProduct(currentProductId);
  if (!product) return;

  let text = `${product.title}\nEsportato il ${new Date().toLocaleDateString('it-IT')}\n`;
  text += '═'.repeat(50) + '\n\n';

  product.sections.forEach((section, sIdx) => {
    text += `${sIdx + 1}. ${section.name}\n`;
    text += '─'.repeat(30) + '\n\n';
    section.questions.forEach((q, qIdx) => {
      const key = answerKey(product.id, section.id, qIdx);
      const answer = userAnswers[key] || '';
      text += `D${qIdx + 1}: ${q}\n`;
      text += answer ? `R: ${answer}\n` : `R: —\n`;
      text += '\n';
    });
    text += '\n';
  });

  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `gilda-${product.slug}-risposte.txt`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('File esportato ✓');
});

/* ═══════════════════════════════════════════════
   PROFILE
═══════════════════════════════════════════════ */

function renderProfile() {
  dom.profileEmail.textContent = currentUser?.email || '';

  const totalAnswers = Object.values(userAnswers).filter(v => v && v.trim()).length;
  const unlockedCount = unlockedProducts.length;

  dom.profileStats.innerHTML = `
    <div class="stat-row">
      <span class="stat-label">Prodotti sbloccati</span>
      <span class="stat-value">${unlockedCount}</span>
    </div>
    <div class="stat-row">
      <span class="stat-label">Risposte scritte</span>
      <span class="stat-value">${totalAnswers}</span>
    </div>
    ${PRODUCTS_CATALOG.filter(p => isUnlocked(p.id)).map(p => `
      <div class="stat-row">
        <span class="stat-label">${p.title}</span>
        <span class="stat-value">${getProductProgress(p.id)}%</span>
      </div>
    `).join('')}
  `;
}

dom.btnLogout.addEventListener('click', async () => {
  if (db) await db.auth.signOut();
  else onLogout();
});

/* ═══════════════════════════════════════════════
   NAVIGATION EVENTS
═══════════════════════════════════════════════ */

dom.btnBack.addEventListener('click', goBack);

dom.btnProfile.addEventListener('click', () => {
  if (dom.viewProfile.classList.contains('active')) {
    goBack();
  } else {
    renderProfile();
    showView('profile');
  }
});

/* ═══════════════════════════════════════════════
   DEMO MODE (no Supabase configured)
═══════════════════════════════════════════════ */

function showDemoMode() {
  // Bypass auth for local demo
  console.info('Modalità demo attiva — Supabase non configurato');

  currentUser = { id: 'demo-user', email: 'demo@gildaossani.it' };
  unlockedProducts = [PRODUCTS_CATALOG[0]?.id].filter(Boolean);

  dom.screenAuth.classList.remove('active');
  dom.screenApp.classList.add('active');
  renderLibrary();
  showToast('Modalità demo — configura Supabase per la versione completa');
}

/* ═══════════════════════════════════════════════
   SERVICE WORKER REGISTRATION
═══════════════════════════════════════════════ */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.info('SW registered:', reg.scope))
      .catch(err => console.warn('SW registration failed:', err));
  });
}

/* ═══════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  if (SUPABASE_URL.includes('YOUR_PROJECT_ID')) {
    // Demo mode — no Supabase configured yet
    hideLoading();
    showDemoMode();
  } else {
    initAuth();
  }
});
