/* ═══════════════════════════════════════════════
   GILDA PWA — app.js v5.0
   Il Meccanismo — struttura completa
═══════════════════════════════════════════════ */

const SUPA_URL = 'https://qnhnsjqzheyiacfmmmbe.supabase.co';
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuaG5zanF6aGV5aWFjZm1tbWJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzODEyMjMsImV4cCI6MjA5NDk1NzIyM30.Y0XwmMed7pRlBPmMpCpmgfdppTEUI0-FIKXOWbaRuYk';

/* ═══════════════════════════════════════════════
   CATALOGO PRODOTTI
═══════════════════════════════════════════════ */
const CATALOG = [
  {
    id: 'autosabotaggio',
    slug: 'il-meccanismo',
    tag: 'Strumento di autoanalisi',
    title: 'Il Meccanismo',
    description: 'Come funziona il tuo autosabotaggio specifico. E come smettere di fingere che non ci sia.',
    price: '€9',
    type: 'meccanismo',
    intro: {
      title: 'Una nota onesta.',
      text: 'Questo non è un workbook per sentirti meglio. Non promette cambiamenti in sette giorni. Non ti chiede di credere in te stessa. È uno strumento per guardare da vicino qualcosa che di solito preferisci tenere leggermente sfocato: il modo preciso in cui ti metti i bastoni tra le ruote, e le ragioni impeccabili con cui giustifichi questa scelta. Non cerchiamo colpevoli. Sarebbe comodo, quindi lo lasciamo fare ad altri. Cerchiamo il meccanismo. Il tuo, specifico, personale, probabilmente abbastanza intelligente da sembrare ragionevole la maggior parte delle volte. Puoi compilarlo in una seduta o a spezzoni. Puoi tornare indietro, cancellare, riscrivere. L\'unica cosa che non ha senso fare è rispondere quello che pensi si debba rispondere.',
      signature: '— Gilda ☕'
    },
    sections: [
      {
        id: 's1',
        name: 'Il tuo pattern',
        number: 'I',
        intro: 'Non sei ferma. Sei occupatissima a non fare la cosa che conta. L\'autosabotaggio elegante non assomiglia all\'immobilità. Ha un\'agenda piena, ottimi motivi, un senso di responsabilità molto sviluppato. In questa sezione identifichiamo il tuo modo specifico di fare una cosa invece dell\'altra.',
        checklist: [
          { id: 'p1', title: 'Faccio cose utili per evitare quella che conta davvero', note: 'Rispondo email, sistemo, organizzo. Tutto urgente. Niente importante.' },
          { id: 'p2', title: 'Perfeziono ancora prima di agire', note: 'Non è mai abbastanza pronto. Ancora un giro. Ancora.' },
          { id: 'p3', title: 'Aiuto qualcuno invece di espormi io', note: 'Generosità strutturale. Comoda.' },
          { id: 'p4', title: 'Raccolgo informazioni invece di scegliere', note: 'Ancora un libro, ancora un corso. La decisione aspetta.' },
          { id: 'p5', title: 'Cambio piano appena diventa concreto', note: 'Funzionava benissimo finché era un\'idea.' },
          { id: 'p6', title: 'Divento lucidissima proprio quando dovrei agire', note: 'Chiarezza improvvisa. Analisi perfetta. Zero movimento.' },
          { id: 'p7', title: 'Mi convinco che non è il momento giusto', note: 'Aspetto settembre. Poi gennaio. Poi.' },
          { id: 'p8', title: 'Trasformo una scelta semplice in una questione esistenziale', note: 'Ogni decisione diventa il Test Finale della propria identità.' },
        ],
        questions: [
          { id: 'q-pattern-principale', label: 'Il tuo pattern principale', hint: 'Tra quelli che hai selezionato, quale ti appartiene di più? Descrivilo con parole tue.', placeholder: 'Il mio modo è...' },
          { id: 'q-camuffato', label: 'Com\'è camuffato', hint: 'Qual è la versione presentabile di questo pattern? Come lo chiami di solito?', placeholder: 'Di solito lo chiamo...' },
          { id: 'q-quando-attiva', label: 'Quando si attiva', hint: 'In quale tipo di situazione compare? Prima di cosa, esattamente?', placeholder: 'Compare quando...' },
        ],
        synthesis: {
          title: 'Metti a fuoco.',
          label: 'Il tuo meccanismo in una frase',
          fields: [
            { id: 'q-sintesi-x', label: 'Quando devo fare X, faccio invece...', placeholder: '...' },
            { id: 'q-sintesi-evito', label: 'In questo modo evito di...', placeholder: '...' },
          ]
        },
        quote: 'Non hai un problema di disciplina. Hai una parte di te che ha delle priorità diverse dalle tue.'
      },
      {
        id: 's2',
        name: 'Il momento esatto',
        number: 'II',
        intro: 'Il punto non è diventare invincibile. Il punto è beccarti in flagrante. In questa sezione lavoriamo su un episodio specifico: il momento preciso in cui stavi per fare la cosa vera e hai fatto altro. Non in generale. Quella volta lì.',
        questions: [
          { id: 'q-episodio', label: 'L\'episodio', hint: 'Descrivi brevemente cosa stava per succedere. Cosa avevi in programma di fare?', placeholder: 'Stavo per...' },
          { id: 'q-visibilita', label: 'Cosa sarebbe diventato visibile', hint: 'Se fossi andata avanti, cos\'avrebbe potuto vedere qualcuno?', placeholder: 'Se lo facevo, diventava visibile che...' },
          { id: 'q-conseguenza', label: 'La conseguenza concreta', hint: 'Non nel senso catastrofico. Nel senso pratico: cosa sarebbe cambiato davvero?', placeholder: 'Sarebbe accaduto concretamente...' },
          { id: 'q-micro-azione', label: 'La micro-azione di deviazione', hint: 'Cosa hai fatto esattamente invece? Il più preciso possibile.', placeholder: 'Ho fatto invece...' },
          { id: 'q-punto-deviazione', label: 'Il punto esatto della deviazione', hint: 'In quale momento preciso hai cambiato direzione? Dopo quale pensiero, sensazione, gesto?', placeholder: 'Ho deviato nel momento in cui...' },
          { id: 'q-corpo', label: 'Cosa sentivi nel corpo', hint: 'Prima di deviare. Fisicamente.', placeholder: 'Tensione, calore, vuoto...' },
          { id: 'q-pensiero', label: 'Il primo pensiero', hint: 'Il primo pensiero razionale che è arrivato.', placeholder: 'Il pensiero era...' },
          { id: 'q-storia', label: 'La storia che ti sei raccontata', hint: 'La spiegazione interna. La narrativa con cui hai chiuso la questione.', placeholder: 'Mi sono detta che...' },
        ],
        synthesis: {
          title: 'Il momento in una riga.',
          label: 'La formula del mio momento',
          fields: [
            { id: 'q-stavo-per', label: 'Stavo per...', placeholder: '...' },
            { id: 'q-fatto-invece', label: 'Ho fatto invece...', placeholder: '...' },
            { id: 'q-storia-breve', label: 'La mia storia era...', placeholder: '...' },
          ]
        },
        quote: 'La deviazione raramente sembra una fuga. Sembra una scelta ragionevole.'
      },
      {
        id: 's3',
        name: 'La logica interna',
        number: 'III',
        intro: 'L\'autosabotaggio non è stupidità. È una strategia. Spesso funziona benissimo, per quello che è stata progettata per fare. Non cerchiamo cause, non risaliamo alle origini, non diagnostichiamo niente. Cerchiamo la logica: cosa stava proteggendo quella parte di te che ha deviato?',
        questions: [
          { id: 'q-vantaggio', label: 'Il vantaggio immediato', hint: 'Cosa hai guadagnato nell\'immediato fermandoti? Anche una cosa piccola conta.', placeholder: 'Mi sono risparmiata... ho mantenuto...' },
          { id: 'q-protezione', label: 'La protezione', hint: 'Da cosa ti ha protetta quella deviazione? Sii precisa, non generica.', placeholder: 'Mi ha protetta da...' },
          { id: 'q-fino-in-fondo', label: 'Cosa sarebbe successo andando fino in fondo', hint: 'Non la versione catastrofista. La versione realistica, concreta.', placeholder: 'Se ci andavo, avrei dovuto...' },
          { id: 'q-controllo', label: 'Il controllo che ti restava', hint: 'Cosa controlli quando rimandi? Anche qualcosa di piccolo.', placeholder: 'Controllavo ancora...' },
          { id: 'q-scommessa', label: 'La scommessa che non volevi fare', hint: 'Andare avanti significava scommettere su qualcosa. Su cosa, esattamente?', placeholder: 'Avrei dovuto scommettere su...' },
          { id: 'q-funziona', label: 'Cosa funziona nel tuo meccanismo', hint: 'Che cosa ottieni, ogni volta che si attiva? Anche qualcosa che non vorresti ammettere.', placeholder: 'Ottengo...' },
          { id: 'q-senza', label: 'Cosa succederebbe senza', hint: 'Se il meccanismo sparisse domani, cosa dovresti affrontare direttamente?', placeholder: 'Dovrei affrontare...' },
        ],
        synthesis: {
          title: 'La logica in chiaro.',
          label: 'La struttura del mio meccanismo',
          fields: [
            { id: 'q-sintesi-perche', label: 'Mi fermo perché...', placeholder: '...' },
            { id: 'q-sintesi-non-devo', label: 'In questo modo non devo...', placeholder: '...' },
            { id: 'q-sintesi-controllo', label: 'E mantengo il controllo su...', placeholder: '...' },
          ]
        },
        quote: 'Nessuna di queste risposte ti rende stupida. Ti rendono umana con una strategia precisa.'
      },
      {
        id: 's4',
        name: 'Il passo piccolo',
        number: 'IV',
        intro: 'Non devi diventare un\'altra persona. Devi rendere più difficile mentirti. Non si tratta di superare la resistenza con la forza. Si tratta di aggirarla. Un\'azione così piccola da sembrare quasi ridicola. Concreta. Reale. Domani.',
        questions: [
          { id: 'q-opzione-1', label: 'Prima opzione di passo piccolo', hint: 'Un\'azione che si fa in meno di 10 minuti, specifica e verificabile, nella direzione della cosa che stai evitando.', placeholder: 'Potrei...' },
          { id: 'q-opzione-2', label: 'Seconda opzione', hint: 'Anche quella che sembra banale o insufficiente.', placeholder: 'Oppure...' },
          { id: 'q-opzione-3', label: 'Terza opzione', hint: '', placeholder: 'O anche...' },
          { id: 'q-passo-scelto', label: 'Il passo che scegli', hint: 'Uno solo. Il più piccolo, se hai dubbi.', placeholder: 'Scelgo...' },
          { id: 'q-quando', label: 'Quando', hint: 'Un piano senza orario è un\'intenzione. Con orario è un impegno.', placeholder: 'Domani alle...' },
          { id: 'q-dove', label: 'Dove', hint: '', placeholder: '...' },
          { id: 'q-deviazione-prossima', label: 'Come proverà a deviarti', hint: 'Quale storia ti racconterà? Quale urgenza inventerà? Quale scusa sembrerà ragionevole?', placeholder: 'Probabilmente mi dirò che...' },
          { id: 'q-contromossa', label: 'La tua contromossa', hint: 'Una risposta pratica. Non emotiva, non motivazionale. Cosa fai esattamente quando il meccanismo si attiva?', placeholder: 'Quando succede, faccio...' },
          { id: 'q-soglia', label: 'La soglia minima accettabile', hint: 'Se non riesci a fare il passo intero, qual è la versione più ridotta che conta comunque?', placeholder: 'Basta anche solo...' },
        ],
        synthesis: {
          title: 'Il tuo meccanismo, in chiaro.',
          label: 'Il mio profilo di autosabotaggio',
          fields: [
            { id: 'q-riepilogo-pattern', label: 'Il mio pattern principale', placeholder: '...' },
            { id: 'q-riepilogo-momento', label: 'Il momento in cui si attiva', placeholder: '...' },
            { id: 'q-riepilogo-logica', label: 'Cosa sta proteggendo', placeholder: '...' },
            { id: 'q-riepilogo-passo', label: 'Il passo che faccio', placeholder: '...' },
          ]
        },
        closing: {
          title: 'Hai visto il meccanismo.',
          text: 'Non è un risultato. È un punto di partenza. Il meccanismo continuerà ad attivarsi. Ma ora sai dove guardare. La prossima volta che devia, la riconoscerai. E questo, già, è qualcosa.',
          signature: '— Gilda 🌙'
        }
      },
    ],
  },
];

/* ═══════════════════════════════════════════════
   STATO
═══════════════════════════════════════════════ */
let supa = null;
let me = null;
let prodId = null;
let secIdx = null;
let ans = {};
let checkedItems = {};
let opened = [];
let hist = [];
let timers = {};

/* ═══════════════════════════════════════════════
   DOM
═══════════════════════════════════════════════ */
const g = id => document.getElementById(id);

/* ═══════════════════════════════════════════════
   SCHERMATE
═══════════════════════════════════════════════ */
function showLoading() {
  g('loading').classList.remove('hidden');
  g('screen-auth').classList.add('hidden');
  g('screen-app').classList.add('hidden');
}
function showAuth() {
  g('loading').classList.add('hidden');
  g('screen-auth').classList.remove('hidden');
  g('screen-app').classList.add('hidden');
  window.scrollTo(0, 0);
}
function showApp() {
  g('loading').classList.add('hidden');
  g('screen-auth').classList.add('hidden');
  g('screen-app').classList.remove('hidden');
  window.scrollTo(0, 0);
}

/* ═══════════════════════════════════════════════
   NAVIGAZIONE VIEWS
═══════════════════════════════════════════════ */
const VIEWS = ['view-library', 'view-product', 'view-section', 'view-profile'];

function showView(name) {
  VIEWS.forEach(v => g(v).classList.add('hidden'));
  g(name).classList.remove('hidden');
  window.scrollTo(0, 0);
  hist.push(name);
  g('btn-back').classList.toggle('hidden', hist.length <= 1);
}

function goBack() {
  if (hist.length <= 1) return;
  hist.pop();
  const prev = hist[hist.length - 1];
  VIEWS.forEach(v => g(v).classList.add('hidden'));
  g(prev).classList.remove('hidden');
  window.scrollTo(0, 0);
  g('btn-back').classList.toggle('hidden', hist.length <= 1);
  if (prev === 'view-library') renderLibrary();
  if (prev === 'view-product' && prodId) renderProduct(prodId);
}

/* ═══════════════════════════════════════════════
   UTILS
═══════════════════════════════════════════════ */
let toastT;
function toast(m) {
  const t = g('toast');
  t.textContent = m;
  t.classList.remove('hidden');
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.add('hidden'), 2800);
}

function setMsg(m, type = 'error') {
  const el = g('auth-message');
  el.textContent = m;
  el.className = 'auth-message ' + type;
}
function clearMsg() { g('auth-message').className = 'auth-message hidden'; }

function aKey(pid, sid, qid) { return `${pid}:${sid}:${qid}`; }
function cKey(pid, itemId) { return `check:${pid}:${itemId}`; }
function getProd(id) { return CATALOG.find(p => p.id === id) || null; }
function isOpen(pid) { return opened.includes(pid); }

/* ═══════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════ */
async function boot() {
  showLoading();
  try {
    supa = window.supabase.createClient(SUPA_URL, SUPA_KEY);
  } catch(e) { showAuth(); return; }

  try {
    const { data } = await supa.auth.getSession();
    if (data && data.session && data.session.user) {
      await enterApp(data.session.user);
    } else {
      showAuth();
    }
  } catch(e) { showAuth(); }
}

async function enterApp(user) {
  me = user;
  await loadData();
  showApp();
  hist = [];
  showView('view-library');
  renderLibrary();
}

function leaveApp() {
  me = null; ans = {}; checkedItems = {}; opened = [];
  prodId = null; secIdx = null; hist = [];
  showAuth();
}

/* ═══════════════════════════════════════════════
   AUTH
═══════════════════════════════════════════════ */
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
    } else {
      const user = (data && data.user) || (data && data.session && data.session.user);
      if (user) await enterApp(user);
      else { setMsg('Risposta inattesa. Riprova.'); g('btn-login').disabled = false; g('btn-login').textContent = 'Entra'; }
    }
  } catch(e) {
    setMsg('Errore di connessione. Riprova.');
    g('btn-login').disabled = false;
    g('btn-login').textContent = 'Entra';
  }
});

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
  } catch(e) { setMsg('Errore di connessione. Riprova.'); }
  g('btn-register').disabled = false;
  g('btn-register').textContent = 'Crea account';
});

g('link-forgot').addEventListener('click', async e => {
  e.preventDefault();
  const email = g('login-email').value.trim();
  if (!email) { setMsg('Inserisci prima la tua email.'); return; }
  const { error } = await supa.auth.resetPasswordForEmail(email, { redirectTo: 'https://gildaossani.github.io/gilda-app/' });
  if (error) setMsg(xlErr(error.message));
  else setMsg('Email di reset inviata.', 'success');
});

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

g('btn-logout').addEventListener('click', async () => { await supa.auth.signOut(); leaveApp(); });
g('btn-back').addEventListener('click', goBack);
g('btn-profile').addEventListener('click', () => {
  if (!g('view-profile').classList.contains('hidden')) goBack();
  else { renderProfile(); showView('view-profile'); }
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
    ans = {}; checkedItems = {};
    (rows || []).forEach(r => {
      if (r.answer_key.startsWith('check:')) {
        checkedItems[r.answer_key] = r.answer_text === 'true';
      } else {
        ans[r.answer_key] = r.answer_text;
      }
    });

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

async function saveField(key, value) {
  if (key.startsWith('check:')) {
    checkedItems[key] = value === 'true';
  } else {
    ans[key] = value;
  }
  if (!supa || !me) return;
  clearTimeout(timers[key]);
  timers[key] = setTimeout(async () => {
    try {
      await supa.from('user_answers').upsert(
        { user_id: me.id, answer_key: key, answer_text: String(value), updated_at: new Date().toISOString() },
        { onConflict: 'user_id,answer_key' }
      );
    } catch(e) { console.error('saveField:', e); }
  }, 800);
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
function showUM(m, t) { const el = g('unlock-message'); el.textContent = m; el.className = 'unlock-message ' + t; }

/* ═══════════════════════════════════════════════
   PROGRESS
═══════════════════════════════════════════════ */
function productProgress(pid) {
  const p = getProd(pid); if (!p) return 0;
  let tot = 0, done = 0;
  p.sections.forEach(s => {
    (s.questions || []).forEach(q => {
      tot++;
      if (ans[aKey(pid, s.id, q.id)] && ans[aKey(pid, s.id, q.id)].trim()) done++;
    });
    (s.synthesis ? s.synthesis.fields : []).forEach(f => {
      tot++;
      if (ans[aKey(pid, s.id, f.id)] && ans[aKey(pid, s.id, f.id)].trim()) done++;
    });
  });
  return tot === 0 ? 0 : Math.round((done / tot) * 100);
}

function sectionComplete(pid, sid) {
  const p = getProd(pid); if (!p) return false;
  const s = p.sections.find(s => s.id === sid); if (!s) return false;
  return (s.questions || []).every(q => {
    const v = ans[aKey(pid, sid, q.id)];
    return v && v.trim();
  });
}

/* ═══════════════════════════════════════════════
   RENDER LIBRERIA
═══════════════════════════════════════════════ */
function renderLibrary() {
  const grid = g('products-grid');
  grid.innerHTML = '';
  CATALOG.forEach(p => {
    const unlk = isOpen(p.id);
    const pc = productProgress(p.id);
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

/* ═══════════════════════════════════════════════
   RENDER PRODOTTO
═══════════════════════════════════════════════ */
function openProduct(pid) {
  prodId = pid;
  renderProduct(pid);
  showView('view-product');
}

function renderProduct(pid) {
  const p = getProd(pid); if (!p) return;
  const pc = productProgress(pid);

  g('product-header').innerHTML = `
    <div class="product-header-tag">${p.tag}</div>
    <div class="product-header-title">${p.title}</div>
    <div class="product-header-desc">${p.description}</div>
  `;
  g('progress-fill').style.width = pc + '%';
  g('progress-label').textContent = pc + '%';

  const list = g('sections-list');
  list.innerHTML = '';

  /* Intro card */
  if (p.intro) {
    const introCard = document.createElement('div');
    introCard.className = 'intro-card';
    introCard.innerHTML = `
      <div class="intro-card-title">Prima di iniziare</div>
      <div class="intro-card-text">${p.intro.text}</div>
      <div class="intro-card-sig">${p.intro.signature}</div>
    `;
    list.appendChild(introCard);
  }

  /* Section cards */
  p.sections.forEach((s, i) => {
    const done = sectionComplete(pid, s.id);
    const item = document.createElement('div');
    item.className = 'section-item' + (done ? ' completed' : '');
    item.innerHTML = `
      <div class="section-num-roman">${s.number || (i + 1)}</div>
      <div class="section-info">
        <div class="section-name">${s.name}</div>
        <div class="section-count">${(s.questions || []).length} domande</div>
      </div>
      <svg class="section-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="9 18 15 12 9 6"/></svg>
    `;
    item.addEventListener('click', () => openSection(pid, i));
    list.appendChild(item);
  });
}

/* ═══════════════════════════════════════════════
   RENDER SEZIONE
═══════════════════════════════════════════════ */
function openSection(pid, idx) {
  prodId = pid; secIdx = idx;
  renderSection(pid, idx);
  showView('view-section');
}

function renderSection(pid, idx) {
  const p = getProd(pid); if (!p) return;
  const s = p.sections[idx]; if (!s) return;

  const header = g('section-header');
  header.innerHTML = `
    <div class="section-header-number">${s.number}</div>
    <div class="section-header-label">${p.title} — Sezione ${idx + 1} di ${p.sections.length}</div>
    <div class="section-header-title">${s.name}</div>
  `;

  const list = g('questions-list');
  list.innerHTML = '';

  /* Intro sezione */
  if (s.intro) {
    const introBlock = document.createElement('div');
    introBlock.className = 'section-intro-block';
    introBlock.textContent = s.intro;
    list.appendChild(introBlock);
  }

  /* Checklist (solo s1) */
  if (s.checklist) {
    const clBlock = document.createElement('div');
    clBlock.className = 'checklist-block';
    clBlock.innerHTML = `<div class="checklist-label">Riconosci qualcosa? Seleziona i pattern che ti appartengono.</div>`;
    const ul = document.createElement('ul');
    ul.className = 'checklist';
    s.checklist.forEach(item => {
      const key = cKey(pid, item.id);
      const isChecked = checkedItems[key] === true;
      const li = document.createElement('li');
      li.className = 'checklist-item' + (isChecked ? ' checked' : '');
      li.innerHTML = `
        <div class="check-box"></div>
        <div class="check-text">
          <strong>${item.title}</strong>
          ${item.note ? `<span class="check-note">${item.note}</span>` : ''}
        </div>
      `;
      li.addEventListener('click', () => {
        li.classList.toggle('checked');
        saveField(key, String(li.classList.contains('checked')));
      });
      ul.appendChild(li);
    });
    clBlock.appendChild(ul);
    list.appendChild(clBlock);
  }

  /* Domande */
  (s.questions || []).forEach(q => {
    const key = aKey(pid, s.id, q.id);
    const block = document.createElement('div');
    block.className = 'question-block';
    block.innerHTML = `
      <div class="question-label">${q.label}</div>
      ${q.hint ? `<div class="question-hint">${q.hint}</div>` : ''}
      <textarea class="question-textarea" placeholder="${q.placeholder || ''}" rows="3"></textarea>
      <div class="question-saved" data-key="${key}"></div>
    `;
    const ta = block.querySelector('textarea');
    ta.value = ans[key] || '';
    ta.addEventListener('input', () => {
      ans[key] = ta.value;
      saveField(key, ta.value);
    });
    list.appendChild(block);
  });

  /* Sintesi */
  if (s.synthesis) {
    const synBlock = document.createElement('div');
    synBlock.className = 'synthesis-block';
    synBlock.innerHTML = `
      <div class="synthesis-title">${s.synthesis.title}</div>
      <div class="synthesis-label">${s.synthesis.label}</div>
    `;
    s.synthesis.fields.forEach(f => {
      const key = aKey(pid, s.id, f.id);
      const row = document.createElement('div');
      row.className = 'synthesis-field';
      row.innerHTML = `
        <label class="synthesis-field-label">${f.label}</label>
        <textarea class="synthesis-textarea" placeholder="${f.placeholder || ''}" rows="2"></textarea>
      `;
      const ta = row.querySelector('textarea');
      ta.value = ans[key] || '';
      ta.addEventListener('input', () => { ans[key] = ta.value; saveField(key, ta.value); });
      synBlock.appendChild(row);
    });
    list.appendChild(synBlock);
  }

  /* Quote */
  if (s.quote) {
    const q = document.createElement('div');
    q.className = 'section-quote';
    q.textContent = s.quote;
    list.appendChild(q);
  }

  /* Closing (solo s4) */
  if (s.closing) {
    const closing = document.createElement('div');
    closing.className = 'section-closing';
    closing.innerHTML = `
      <div class="closing-title">${s.closing.title}</div>
      <div class="closing-text">${s.closing.text}</div>
      <div class="closing-sig">${s.closing.signature}</div>
    `;
    list.appendChild(closing);
  }

  /* Nav prev/next */
  const btnPrev = g('btn-prev-section');
  const btnNext = g('btn-next-section');
  btnPrev.disabled = idx === 0;
  btnNext.disabled = idx === p.sections.length - 1;
  btnPrev.onclick = () => { secIdx--; renderSection(pid, secIdx); window.scrollTo(0, 0); };
  btnNext.onclick = () => { secIdx++; renderSection(pid, secIdx); window.scrollTo(0, 0); };
}

/* ═══════════════════════════════════════════════
   EXPORT
═══════════════════════════════════════════════ */
g('btn-export').addEventListener('click', () => {
  const p = getProd(prodId); if (!p) return;
  let txt = `${p.title}\nEsportato il ${new Date().toLocaleDateString('it-IT')}\n${'═'.repeat(50)}\n\n`;
  p.sections.forEach((s, si) => {
    txt += `${s.number || si + 1}. ${s.name}\n${'─'.repeat(30)}\n\n`;
    (s.questions || []).forEach(q => {
      const k = aKey(p.id, s.id, q.id);
      txt += `${q.label}\n${ans[k] || '—'}\n\n`;
    });
    if (s.synthesis) {
      txt += `${s.synthesis.title}\n`;
      s.synthesis.fields.forEach(f => {
        const k = aKey(p.id, s.id, f.id);
        txt += `${f.label} ${ans[k] || '—'}\n`;
      });
      txt += '\n';
    }
  });
  const blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = `gilda-${p.slug}-risposte.txt`; a.click();
  URL.revokeObjectURL(url);
  toast('File esportato ✓');
});

/* ═══════════════════════════════════════════════
   PROFILO
═══════════════════════════════════════════════ */
function renderProfile() {
  g('profile-email').textContent = me ? me.email : '';
  const tot = Object.values(ans).filter(v => v && v.trim()).length;
  g('profile-stats').innerHTML = `
    <div class="stat-row"><span class="stat-label">Prodotti sbloccati</span><span class="stat-value">${opened.length}</span></div>
    <div class="stat-row"><span class="stat-label">Risposte scritte</span><span class="stat-value">${tot}</span></div>
    ${CATALOG.filter(p => isOpen(p.id)).map(p => `<div class="stat-row"><span class="stat-label">${p.title}</span><span class="stat-value">${productProgress(p.id)}%</span></div>`).join('')}
  `;
}

/* ═══════════════════════════════════════════════
   AVVIO
═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', boot);
