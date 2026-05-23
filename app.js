/* ═══════════════════════════════════════════════
   GILDA PWA — app.js v4.0
═══════════════════════════════════════════════ */

const SUPA_URL = 'https://qnhnsjqzheyiacfmmmbe.supabase.co';
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuaG5zanF6aGV5aWFjZm1tbWJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzODEyMjMsImV4cCI6MjA5NDk1NzIyM30.Y0XwmMed7pRlBPmMpCpmgfdppTEUI0-FIKXOWbaRuYk';

const CATALOG = [
  {
    id: 'autosabotaggio', slug: 'autosabotaggio', tag: 'Percorso',
    title: 'Come ti fai fuori da sola',
    description: 'Il tuo pattern di autosabotaggio — riconoscerlo, capirlo, smettere di alimentarlo.',
    price: '€9',
    sections: [
      { id: 'pattern', name: 'Il tuo pattern', questions: [
        'Descrivi un momento recente in cui hai sabotato qualcosa che volevi davvero. Cosa è successo esattamente?',
        'Qual è la storia che ti racconti in quel momento? Cosa ti dici?',
        'Questo schema si ripete? In quali aree della tua vita lo riconosci di più?',
        'Chi beneficia del fatto che tu rimanga ferma?',
      ]},
      { id: 'momento-esatto', name: 'Il momento esatto', questions: [
        'Individua il momento preciso in cui la parte di te che si fa da parte prende il controllo. Cosa senti nel corpo?',
        "C'è un'emozione che precede il blocco? Rabbia, paura, vergogna, eccitazione?",
        'Cosa succederebbe — davvero — se riuscissi?',
        'Cosa ti costerebbe riuscire?',
      ]},
      { id: 'logica-interna', name: 'La logica interna', questions: [
        'Il tuo autosabotaggio ti protegge da qualcosa. Da cosa?',
        'Quando hai imparato che era pericoloso avere troppo? Troppo successo, troppa gioia, troppa visibilità?',
        'Se il sabotaggio avesse una voce, cosa direbbe?',
        "C'è qualcosa che questa strategia ti ha davvero salvato, in passato?",
      ]},
      { id: 'passo-piccolo', name: 'Il passo piccolo', questions: [
        'Non ti chiedo di cambiare tutto. Ti chiedo: qual è la cosa più piccola possibile che potresti fare diversamente la prossima volta?',
        'Come vorresti che qualcuno ti trattasse quando ti fai fuori da sola?',
        'Scrivi una lettera breve alla versione di te che sabota. Non per giudicarla — per capirla.',
        'Cosa ci vorrà per scegliere te, anche solo una volta?',
      ]},
    ],
  },
  {
    id: 'confini', slug: 'confini', tag: 'Percorso',
    title: 'I confini',
    description: 'Imparare a dire no non è essere difficili. È sapere dove finisci tu e dove inizia il dovere degli altri.',
    price: '€9',
    sections: [
      { id: 's1', name: 'Dove sono i tuoi confini oggi', questions: [
        'Pensa a una situazione recente in cui hai detto sì quando volevi dire no. Cosa è successo?',
        'Come ti sei sentita dopo?',
        'Hai paura di deludere qualcuno se metti un limite?',
        'Chi nella tua vita rispetta i tuoi spazi?',
      ]},
      { id: 's2', name: 'Quando hai smesso di averli', questions: [
        'Ricordi un momento in cui avevi confini chiari? Cosa è cambiato?',
        'Cosa ti ha insegnato la famiglia sul dire no?',
        'Hai mai pagato un prezzo per aver messo un confine?',
        'Cosa significava "essere difficile" nella tua famiglia?',
      ]},
      { id: 's3', name: 'Il costo del sì continuo', questions: [
        'Cosa ti costa dire sempre sì?',
        'In quale area della tua vita senti più il peso?',
        'Cosa hai rinunciato a fare per accontentare gli altri?',
        'Il tuo corpo ti manda segnali quando superi i tuoi limiti?',
      ]},
      { id: 's4', name: 'Costruire confini che reggono', questions: [
        'Qual è il confine più piccolo che potresti iniziare a mettere domani?',
        'Con chi è più difficile? Perché?',
        'Cosa cambierebbe nella tua vita se dicessi no più spesso?',
        'Scrivi una frase che potresti usare la prossima volta.',
      ]},
    ],
  },
];

/* ── Stato ── */
let supa = null;
let me = null;
let prodId = null;
let secIdx = null;
let ans = {};
let opened = [];
let hist = [];
let timers = {};

/* ── DOM refs ── */
const g = id => document.getElementById(id);
const loading     = g('loading');
const screenAuth  = g('screen-auth');
const screenApp   = g('screen-app');
const viewLibrary = g('view-library');
const viewProduct = g('view-product');
const viewSection = g('view-section');
const viewProfile = g('view-profile');

/* ── Mostra/nascondi schermate ── */
function showLoading() {
  loading.classList.remove('hidden');
  screenAuth.classList.add('hidden');
  screenApp.classList.add('hidden');
}

function showAuth() {
  loading.classList.add('hidden');
  screenAuth.classList.remove('hidden');
  screenApp.classList.add('hidden');
  window.scrollTo(0, 0);
}

function showApp() {
  loading.classList.add('hidden');
  screenAuth.classList.add('hidden');
  screenApp.classList.remove('hidden');
  window.scrollTo(0, 0);
}

/* ── Navigazione views ── */
const allViews = [viewLibrary, viewProduct, viewSection, viewProfile];

function showView(view) {
  allViews.forEach(v => v.classList.add('hidden'));
  view.classList.remove('hidden');
  window.scrollTo(0, 0);
  hist.push(view);
  g('btn-back').classList.toggle('hidden', hist.length <= 1);
}

function goBack() {
  if (hist.length <= 1) return;
  hist.pop();
  const prev = hist[hist.length - 1];
  allViews.forEach(v => v.classList.add('hidden'));
  prev.classList.remove('hidden');
  window.scrollTo(0, 0);
  g('btn-back').classList.toggle('hidden', hist.length <= 1);
  if (prev === viewLibrary) renderLibrary();
  if (prev === viewProduct && prodId) renderProduct(prodId);
}

/* ── Toast ── */
let toastT;
function toast(m) {
  const t = g('toast');
  t.textContent = m;
  t.classList.remove('hidden');
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.add('hidden'), 2800);
}

/* ── Auth message ── */
function setMsg(m, type = 'error') {
  const el = g('auth-message');
  el.textContent = m;
  el.className = 'auth-message ' + type;
}
function clearMsg() { g('auth-message').className = 'auth-message hidden'; }

/* ── Helpers ── */
function aKey(pid, sid, i) { return `${pid}:${sid}:${i}`; }
function getProd(id) { return CATALOG.find(p => p.id === id) || null; }
function isOpen(pid) { return opened.includes(pid); }

/* ═══════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════ */
async function boot() {
  showLoading();

  try {
    supa = window.supabase.createClient(SUPA_URL, SUPA_KEY);
  } catch(e) {
    console.error('Supabase init failed:', e);
    showAuth();
    return;
  }

  try {
    const { data } = await supa.auth.getSession();
    if (data && data.session && data.session.user) {
      await enterApp(data.session.user);
    } else {
      showAuth();
    }
  } catch(e) {
    console.error('getSession failed:', e);
    showAuth();
  }
}

async function enterApp(user) {
  me = user;
  await loadData();
  showApp();
  hist = [];
  showView(viewLibrary);
  renderLibrary();
}

function leaveApp() {
  me = null; ans = {}; opened = []; prodId = null; secIdx = null; hist = [];
  showAuth();
}

/* ═══════════════════════════════════════════════
   AUTH EVENTS
═══════════════════════════════════════════════ */

/* Login */
g('btn-login').addEventListener('click', async () => {
  const email = g('login-email').value.trim();
  const password = g('login-password').value;
  if (!email || !password) { setMsg('Inserisci email e password.'); return; }
  clearMsg();
  g('btn-login').disabled = true;
  g('btn-login').textContent = '…';
  try {
    const { data, error } = await supa.auth.signInWithPassword({ email, password });
    if (error) {
      setMsg(xlErr(error.message));
      g('btn-login').disabled = false;
      g('btn-login').textContent = 'Entra';
    } else if (data && data.user) {
      await enterApp(data.user);
    } else if (data && data.session && data.session.user) {
      await enterApp(data.session.user);
    } else {
      setMsg('Risposta inattesa. Riprova.');
      g('btn-login').disabled = false;
      g('btn-login').textContent = 'Entra';
    }
  } catch(e) {
    setMsg('Errore di connessione. Riprova.');
    g('btn-login').disabled = false;
    g('btn-login').textContent = 'Entra';
  }
});

/* Register */
g('btn-register').addEventListener('click', async () => {
  const email = g('reg-email').value.trim();
  const password = g('reg-password').value;
  if (!email || !password) { setMsg('Inserisci email e password.'); return; }
  clearMsg();
  g('btn-register').disabled = true;
  g('btn-register').textContent = '…';
  try {
    const { data, error } = await supa.auth.signUp({ email, password });
    if (error) {
      setMsg(xlErr(error.message));
    } else if (data && data.user && data.user.identities && data.user.identities.length > 0) {
      await enterApp(data.user);
    } else {
      setMsg('Controlla la tua email per confermare l\'account.', 'success');
    }
  } catch(e) {
    setMsg('Errore di connessione. Riprova.');
  }
  g('btn-register').disabled = false;
  g('btn-register').textContent = 'Crea account';
});

/* Forgot password */
g('link-forgot').addEventListener('click', async e => {
  e.preventDefault();
  const email = g('login-email').value.trim();
  if (!email) { setMsg('Inserisci prima la tua email.'); return; }
  const { error } = await supa.auth.resetPasswordForEmail(email, {
    redirectTo: 'https://gildaossani.github.io/gilda-app/'
  });
  if (error) setMsg(xlErr(error.message));
  else setMsg('Email di reset inviata.', 'success');
});

/* Auth tabs */
document.querySelectorAll('.auth-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.dataset.tab;
    g('form-login').classList.toggle('hidden', target !== 'login');
    g('form-register').classList.toggle('hidden', target !== 'register');
    clearMsg();
  });
});

/* Logout */
g('btn-logout').addEventListener('click', async () => {
  await supa.auth.signOut();
  leaveApp();
});

/* Back */
g('btn-back').addEventListener('click', goBack);

/* Profile */
g('btn-profile').addEventListener('click', () => {
  if (!viewProfile.classList.contains('hidden')) {
    goBack();
  } else {
    renderProfile();
    showView(viewProfile);
  }
});

function xlErr(m) {
  const map = {
    'Invalid login credentials': 'Email o password errati.',
    'Email not confirmed': 'Email non confermata. Controlla la posta.',
    'User already registered': 'Questa email è già registrata.',
    'Rate limit exceeded': 'Troppi tentativi. Riprova tra poco.',
  };
  return map[m] || m;
}

/* ═══════════════════════════════════════════════
   DATI
═══════════════════════════════════════════════ */
async function loadData() {
  if (!supa || !me) return;
  try {
    const { data: rows } = await supa.from('user_answers').select('answer_key, answer_text').eq('user_id', me.id);
    ans = {};
    (rows || []).forEach(r => { ans[r.answer_key] = r.answer_text; });

    const { data: prods } = await supa.from('user_products').select('product_id').eq('user_id', me.id);
    opened = (prods || []).map(r => r.product_id);

    if (CATALOG.length > 0 && !opened.includes(CATALOG[0].id)) {
      opened.push(CATALOG[0].id);
      await supa.from('user_products').upsert(
        { user_id: me.id, product_id: CATALOG[0].id, unlocked_at: new Date().toISOString() },
        { onConflict: 'user_id,product_id' }
      );
    }
  } catch(e) { console.error('loadData:', e); }
}

async function saveAns(pid, sid, qi, text) {
  const key = aKey(pid, sid, qi);
  ans[key] = text;
  if (!supa || !me) return;
  clearTimeout(timers[key]);
  timers[key] = setTimeout(async () => {
    setStat(key, 'saving');
    try {
      await supa.from('user_answers').upsert(
        { user_id: me.id, answer_key: key, answer_text: text, updated_at: new Date().toISOString() },
        { onConflict: 'user_id,answer_key' }
      );
      setStat(key, 'saved');
    } catch(e) { console.error('saveAns:', e); }
  }, 800);
}

function setStat(key, st) {
  const el = document.querySelector(`[data-save-key="${key}"]`);
  if (!el) return;
  if (st === 'saving') { el.className = 'question-saved saving'; el.textContent = 'Salvataggio…'; }
  else { el.className = 'question-saved saved'; el.textContent = '✓ Salvato'; setTimeout(() => { if (el) { el.className = 'question-saved'; el.textContent = ''; } }, 2500); }
}

/* ═══════════════════════════════════════════════
   UNLOCK
═══════════════════════════════════════════════ */
g('btn-unlock').addEventListener('click', doUnlock);
g('unlock-input').addEventListener('keydown', e => { if (e.key === 'Enter') doUnlock(); });

async function doUnlock() {
  const code = g('unlock-input').value.trim().toUpperCase();
  if (!code) return;
  g('btn-unlock').disabled = true;
  g('btn-unlock').textContent = '…';
  g('unlock-message').className = 'unlock-message hidden';
  try {
    const { data: row, error } = await supa.from('unlock_codes').select('*').eq('code', code).single();
    if (error || !row) { showUM('Codice non valido.', 'error'); return; }
    if (row.used_by && row.used_by !== me.id) { showUM('Codice già usato.', 'error'); return; }
    if (isOpen(row.product_id)) { showUM('Prodotto già in libreria.', 'error'); return; }
    await supa.from('unlock_codes').update({ used_by: me.id, used_at: new Date().toISOString() }).eq('code', code);
    await supa.from('user_products').upsert(
      { user_id: me.id, product_id: row.product_id, unlocked_at: new Date().toISOString() },
      { onConflict: 'user_id,product_id' }
    );
    opened.push(row.product_id);
    g('unlock-input').value = '';
    showUM('Prodotto sbloccato!', 'success');
    renderLibrary();
  } catch(e) { showUM('Errore. Riprova.', 'error'); }
  finally { g('btn-unlock').disabled = false; g('btn-unlock').textContent = 'Sblocca'; }
}

function showUM(m, t) {
  const el = g('unlock-message');
  el.textContent = m;
  el.className = 'unlock-message ' + t;
}

/* ═══════════════════════════════════════════════
   PROGRESS
═══════════════════════════════════════════════ */
function pct(pid) {
  const p = getProd(pid); if (!p) return 0;
  let tot = 0, done = 0;
  p.sections.forEach(s => s.questions.forEach((_, i) => {
    tot++;
    const k = aKey(pid, s.id, i);
    if (ans[k] && ans[k].trim()) done++;
  }));
  return tot === 0 ? 0 : Math.round((done / tot) * 100);
}

function secDone(pid, sid) {
  const p = getProd(pid); if (!p) return false;
  const s = p.sections.find(s => s.id === sid); if (!s) return false;
  return s.questions.every((_, i) => { const k = aKey(pid, sid, i); return ans[k] && ans[k].trim(); });
}

/* ═══════════════════════════════════════════════
   RENDER
═══════════════════════════════════════════════ */
function renderLibrary() {
  const grid = g('products-grid');
  grid.innerHTML = '';
  CATALOG.forEach(p => {
    const unlk = isOpen(p.id);
    const pc = pct(p.id);
    const div = document.createElement('div');
    div.className = 'product-card' + (unlk ? '' : ' locked');
    if (unlk) div.addEventListener('click', () => openProduct(p.id));
    const prev = p.sections.slice(0, 3).map(s => `<div class="preview-section-item">${s.name}</div>`).join('');
    div.innerHTML = `
      <div class="card-stripe"></div>
      <div class="card-body">
        <div class="card-tag">${p.tag}</div>
        <div class="card-title">${p.title}</div>
        <div class="card-desc">${p.description}</div>
        ${unlk
          ? `<div class="card-progress"><div class="card-progress-track"><div class="card-progress-fill" style="width:${pc}%"></div></div><span class="card-progress-pct">${pc}%</span></div>`
          : `<div class="card-locked-badge"><svg class="lock-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg><span class="card-locked-text">Sblocca con codice — ${p.price}</span></div>`
        }
      </div>
      ${!unlk ? `<div class="card-preview"><div class="card-preview-title">Cosa trovi dentro</div><div class="card-preview-sections">${prev}</div></div>` : ''}
    `;
    grid.appendChild(div);
  });
}

function openProduct(pid) {
  prodId = pid;
  renderProduct(pid);
  showView(viewProduct);
}

function renderProduct(pid) {
  const p = getProd(pid); if (!p) return;
  const pc = pct(pid);
  g('product-header').innerHTML = `
    <div class="product-header-tag">${p.tag}</div>
    <div class="product-header-title">${p.title}</div>
    <div class="product-header-desc">${p.description}</div>
  `;
  g('progress-fill').style.width = pc + '%';
  g('progress-label').textContent = pc + '%';
  const list = g('sections-list');
  list.innerHTML = '';
  p.sections.forEach((s, i) => {
    const done = secDone(pid, s.id);
    const item = document.createElement('div');
    item.className = 'section-item' + (done ? ' completed' : '');
    item.innerHTML = `
      <div class="section-num">${done ? '✓' : i + 1}</div>
      <div class="section-info"><div class="section-name">${s.name}</div><div class="section-count">${s.questions.length} domande</div></div>
      <svg class="section-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="9 18 15 12 9 6"/></svg>
    `;
    item.addEventListener('click', () => openSection(pid, i));
    list.appendChild(item);
  });
}

function openSection(pid, idx) {
  prodId = pid; secIdx = idx;
  renderSection(pid, idx);
  showView(viewSection);
}

function renderSection(pid, idx) {
  const p = getProd(pid); if (!p) return;
  const s = p.sections[idx]; if (!s) return;
  g('section-header').innerHTML = `
    <div class="section-header-label">${p.title} — ${idx + 1} / ${p.sections.length}</div>
    <div class="section-header-title">${s.name}</div>
  `;
  const list = g('questions-list');
  list.innerHTML = '';
  s.questions.forEach((q, qi) => {
    const key = aKey(pid, s.id, qi);
    const block = document.createElement('div');
    block.className = 'question-block';
    block.innerHTML = `
      <div class="question-num">Domanda ${qi + 1}</div>
      <div class="question-text">${q}</div>
      <textarea class="question-textarea" placeholder="Scrivi qui la tua risposta…" rows="4"></textarea>
      <div class="question-saved" data-save-key="${key}"></div>
    `;
    const ta = block.querySelector('textarea');
    ta.value = ans[key] || '';
    ta.addEventListener('input', () => saveAns(pid, s.id, qi, ta.value));
    list.appendChild(block);
  });
  const btnPrev = g('btn-prev-section');
  const btnNext = g('btn-next-section');
  btnPrev.disabled = idx === 0;
  btnNext.disabled = idx === p.sections.length - 1;
  btnPrev.onclick = () => { secIdx--; renderSection(pid, secIdx); window.scrollTo(0, 0); };
  btnNext.onclick = () => { secIdx++; renderSection(pid, secIdx); window.scrollTo(0, 0); };
}

/* Export */
g('btn-export').addEventListener('click', () => {
  const p = getProd(prodId); if (!p) return;
  let txt = `${p.title}\nEsportato il ${new Date().toLocaleDateString('it-IT')}\n${'═'.repeat(50)}\n\n`;
  p.sections.forEach((s, si) => {
    txt += `${si + 1}. ${s.name}\n${'─'.repeat(30)}\n\n`;
    s.questions.forEach((q, qi) => { const k = aKey(p.id, s.id, qi); txt += `D${qi + 1}: ${q}\nR: ${ans[k] || '—'}\n\n`; });
    txt += '\n';
  });
  const blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = `gilda-${p.slug}-risposte.txt`; a.click();
  URL.revokeObjectURL(url);
  toast('File esportato ✓');
});

/* Profile */
function renderProfile() {
  g('profile-email').textContent = me ? me.email : '';
  const tot = Object.values(ans).filter(v => v && v.trim()).length;
  g('profile-stats').innerHTML = `
    <div class="stat-row"><span class="stat-label">Prodotti sbloccati</span><span class="stat-value">${opened.length}</span></div>
    <div class="stat-row"><span class="stat-label">Risposte scritte</span><span class="stat-value">${tot}</span></div>
    ${CATALOG.filter(p => isOpen(p.id)).map(p => `<div class="stat-row"><span class="stat-label">${p.title}</span><span class="stat-value">${pct(p.id)}%</span></div>`).join('')}
  `;
}

/* ═══════════════════════════════════════════════
   AVVIO
═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', boot);
