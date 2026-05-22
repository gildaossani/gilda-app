/* ═══════════════════════════════════════════════
   GILDA PWA — app.js v3.0 — riscrittura pulita
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

let supa = null;
let me = null;
let prodId = null;
let secIdx = null;
let ans = {};
let open = [];
let hist = ['library'];
let timers = {};

function initSupa() {
  try { supa = window.supabase.createClient(SUPA_URL, SUPA_KEY); return true; }
  catch(e) { console.error(e); return false; }
}

const g = id => document.getElementById(id);
const D = {
  sAuth: g('screen-auth'), sApp: g('screen-app'), load: g('overlay-loading'), toast: g('toast'),
  fLogin: g('form-login'), fReg: g('form-register'),
  lEmail: g('login-email'), lPass: g('login-password'),
  rEmail: g('reg-email'), rPass: g('reg-password'),
  bLogin: g('btn-login'), bReg: g('btn-register'), aMsg: g('auth-message'), forgot: g('link-forgot'),
  tabs: document.querySelectorAll('.auth-tab'),
  back: g('btn-back'), prof: g('btn-profile'),
  vLib: g('view-library'), vProd: g('view-product'), vSec: g('view-section'), vProf: g('view-profile'),
  grid: g('products-grid'), uInput: g('unlock-input'), uBtn: g('btn-unlock'), uMsg: g('unlock-message'),
  pH: g('product-header'), pFill: g('progress-fill'), pLbl: g('progress-label'), sList: g('sections-list'),
  exp: g('btn-export'), sH: g('section-header'), qList: g('questions-list'),
  prev: g('btn-prev-section'), next: g('btn-next-section'),
  pEmail: g('profile-email'), pStats: g('profile-stats'), logout: g('btn-logout'),
};

let toastT;
function showToast(m, t=2800) { D.toast.textContent=m; D.toast.classList.remove('hidden'); clearTimeout(toastT); toastT=setTimeout(()=>D.toast.classList.add('hidden'),t); }
function showLoad() { D.load.classList.remove('hidden'); }
function hideLoad() { D.load.classList.add('hidden'); }
function setAMsg(m, t='error') { D.aMsg.textContent=m; D.aMsg.className=`auth-message ${t}`; }
function clearAMsg() { D.aMsg.className='auth-message hidden'; }
function ak(pid,sid,i) { return `${pid}:${sid}:${i}`; }
function getProd(id) { return CATALOG.find(p=>p.id===id)||null; }
function isOpen(pid) { return open.includes(pid); }

const VIEWS = { library:D.vLib, product:D.vProd, section:D.vSec, profile:D.vProf };

function goTo(name, push=true) {
  Object.values(VIEWS).forEach(v=>v.classList.remove('active'));
  VIEWS[name].classList.add('active');
  if (push && hist[hist.length-1]!==name) hist.push(name);
  D.back.classList.toggle('hidden', hist.length<=1);
}

function goBack() {
  if (hist.length<=1) return;
  hist.pop();
  const p = hist[hist.length-1];
  goTo(p, false);
  if (p==='library') renderLib();
  if (p==='product' && prodId) renderProd(prodId);
}

D.back.addEventListener('click', goBack);
D.prof.addEventListener('click', () => {
  if (D.vProf.classList.contains('active')) goBack();
  else { renderProf(); goTo('profile'); }
});

async function boot() {
  // Reset button states in case browser triggered form submit
  document.getElementById('btn-login').disabled = false;
  document.getElementById('btn-login').textContent = 'Entra';
  document.getElementById('btn-register').disabled = false;
  document.getElementById('btn-register').textContent = 'Crea account';

  showLoad();
  if (!initSupa()) { showAuthScreen(); hideLoad(); return; }

  try {
    const { data, error } = await Promise.race([
      supa.auth.getSession(),
      new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 5000))
    ]);
    if (!error && data?.session?.user) {
      await signIn(data.session.user);
    } else {
      showAuthScreen();
      hideLoad();
    }
  } catch(e) {
    console.warn('boot error:', e);
    showAuthScreen();
    hideLoad();
  }

  supa.auth.onAuthStateChange(async (ev, sess) => {
    if (ev==='SIGNED_IN' && sess?.user) await signIn(sess.user);
    else if (ev==='SIGNED_OUT') signOut();
  });
}

async function signIn(user) {
  me = user;
  await loadData();
  D.sAuth.classList.remove('active');
  D.sApp.classList.add('active');
  renderLib();
  hideLoad();
}

function signOut() {
  me=null; ans={}; open=[]; prodId=null; secIdx=null; hist=['library'];
  showAuthScreen();
}

function showAuthScreen() {
  D.sAuth.classList.add('active');
  D.sApp.classList.remove('active');
}

D.fLogin.addEventListener('submit', e => e.preventDefault());

D.bLogin.addEventListener('click', async () => {
  const email = D.lEmail.value.trim();
  const password = D.lPass.value;
  if (!email || !password) { setAMsg('Inserisci email e password.'); return; }
  clearAMsg();
  D.bLogin.disabled=true; D.bLogin.textContent='…';
  try {
    const { data, error } = await supa.auth.signInWithPassword({ email, password });
    if (error) {
      setAMsg(xlErr(error.message));
      D.bLogin.disabled=false; D.bLogin.textContent='Entra';
    } else if (data?.user) {
      await signIn(data.user);
    }
  } catch(e) {
    console.error('login error:', e);
    setAMsg('Errore di connessione. Riprova.');
    D.bLogin.disabled=false; D.bLogin.textContent='Entra';
  }
});

D.fReg.addEventListener('submit', async e => {
  e.preventDefault(); clearAMsg();
  D.bReg.disabled=true; D.bReg.textContent='…';
  const { error } = await supa.auth.signUp({ email: D.rEmail.value.trim(), password: D.rPass.value });
  if (error) setAMsg(xlErr(error.message));
  else setAMsg("Controlla la tua email per confermare l'account.", 'success');
  D.bReg.disabled=false; D.bReg.textContent='Crea account';
});

D.forgot.addEventListener('click', async e => {
  e.preventDefault();
  const email = D.lEmail.value.trim();
  if (!email) { setAMsg('Inserisci prima la tua email.'); return; }
  const { error } = await supa.auth.resetPasswordForEmail(email, { redirectTo: 'https://gildaossani.github.io/gilda-app/' });
  if (error) setAMsg(xlErr(error.message));
  else setAMsg('Email di reset inviata. Controlla la posta.', 'success');
});

D.tabs.forEach(tab => tab.addEventListener('click', () => {
  D.tabs.forEach(t=>t.classList.remove('active')); tab.classList.add('active');
  const t = tab.dataset.tab;
  D.fLogin.classList.toggle('active', t==='login');
  D.fReg.classList.toggle('active', t==='register');
  clearAMsg();
}));

D.logout.addEventListener('click', () => supa.auth.signOut());

function xlErr(m) {
  const map = {
    'Invalid login credentials': 'Email o password errati.',
    'Email not confirmed': 'Email non confermata. Controlla la posta.',
    'User already registered': 'Questa email è già registrata.',
    'Rate limit exceeded': 'Troppi tentativi. Riprova tra poco.',
  };
  return map[m] || m;
}

async function loadData() {
  if (!supa || !me) return;
  try {
    const { data: rows } = await supa.from('user_answers').select('answer_key, answer_text').eq('user_id', me.id);
    ans = {};
    (rows||[]).forEach(r => { ans[r.answer_key]=r.answer_text; });

    const { data: prods } = await supa.from('user_products').select('product_id').eq('user_id', me.id);
    open = (prods||[]).map(r=>r.product_id);

    if (CATALOG.length>0 && !open.includes(CATALOG[0].id)) {
      open.push(CATALOG[0].id);
      await supa.from('user_products').upsert({ user_id:me.id, product_id:CATALOG[0].id, unlocked_at:new Date().toISOString() }, { onConflict:'user_id,product_id' });
    }
  } catch(e) { console.error('loadData:', e); }
}

async function saveAns(pid, sid, qi, text) {
  const key = ak(pid,sid,qi);
  ans[key] = text;
  if (!supa || !me) return;
  clearTimeout(timers[key]);
  timers[key] = setTimeout(async () => {
    setStat(key, 'saving');
    try {
      await supa.from('user_answers').upsert({ user_id:me.id, answer_key:key, answer_text:text, updated_at:new Date().toISOString() }, { onConflict:'user_id,answer_key' });
      setStat(key, 'saved');
    } catch(e) { console.error('saveAns:', e); }
  }, 800);
}

function setStat(key, st) {
  const el = document.querySelector(`[data-save-key="${key}"]`);
  if (!el) return;
  if (st==='saving') { el.className='question-saved saving'; el.textContent='Salvataggio…'; }
  else { el.className='question-saved saved'; el.textContent='✓ Salvato'; setTimeout(()=>{ if(el){el.className='question-saved'; el.textContent='';} }, 2500); }
}

D.uBtn.addEventListener('click', doUnlock);
D.uInput.addEventListener('keydown', e => { if(e.key==='Enter') doUnlock(); });

async function doUnlock() {
  const code = D.uInput.value.trim().toUpperCase();
  if (!code) return;
  D.uBtn.disabled=true; D.uBtn.textContent='…';
  D.uMsg.className='unlock-message hidden';
  try {
    const { data:row, error } = await supa.from('unlock_codes').select('*').eq('code', code).single();
    if (error||!row) { showUMsg('Codice non valido.', 'error'); return; }
    if (row.used_by && row.used_by!==me.id) { showUMsg('Codice già usato.', 'error'); return; }
    if (isOpen(row.product_id)) { showUMsg('Prodotto già in libreria.', 'error'); return; }
    await supa.from('unlock_codes').update({ used_by:me.id, used_at:new Date().toISOString() }).eq('code', code);
    await supa.from('user_products').upsert({ user_id:me.id, product_id:row.product_id, unlocked_at:new Date().toISOString() }, { onConflict:'user_id,product_id' });
    open.push(row.product_id);
    D.uInput.value='';
    showUMsg('Prodotto sbloccato!', 'success');
    renderLib();
  } catch(e) { showUMsg('Errore. Riprova.', 'error'); }
  finally { D.uBtn.disabled=false; D.uBtn.textContent='Sblocca'; }
}

function showUMsg(m, t) { D.uMsg.textContent=m; D.uMsg.className=`unlock-message ${t}`; }

function pct(pid) {
  const p=getProd(pid); if(!p) return 0;
  let tot=0, done=0;
  p.sections.forEach(s => s.questions.forEach((_,i) => { tot++; const k=ak(pid,s.id,i); if(ans[k]&&ans[k].trim()) done++; }));
  return tot===0 ? 0 : Math.round((done/tot)*100);
}

function secDone(pid, sid) {
  const p=getProd(pid); if(!p) return false;
  const s=p.sections.find(s=>s.id===sid); if(!s) return false;
  return s.questions.every((_,i) => { const k=ak(pid,sid,i); return ans[k]&&ans[k].trim(); });
}

function renderLib() {
  D.grid.innerHTML='';
  CATALOG.forEach(p => D.grid.appendChild(buildCard(p, isOpen(p.id), pct(p.id))));
}

function buildCard(p, unlk, pc) {
  const div=document.createElement('div');
  div.className=`product-card ${unlk?'':'locked'}`;
  if (unlk) div.addEventListener('click', ()=>openProd(p.id));
  const prev=p.sections.slice(0,3).map(s=>`<div class="preview-section-item">${s.name}</div>`).join('');
  div.innerHTML=`
    <div class="card-stripe"></div>
    <div class="card-body">
      <div class="card-tag">${p.tag}</div>
      <div class="card-title">${p.title}</div>
      <div class="card-desc">${p.description}</div>
      ${unlk ? `<div class="card-progress"><div class="card-progress-track"><div class="card-progress-fill" style="width:${pc}%"></div></div><span class="card-progress-pct">${pc}%</span></div>`
              : `<div class="card-locked-badge"><svg class="lock-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg><span class="card-locked-text">Sblocca con codice — ${p.price}</span></div>`}
    </div>
    ${!unlk ? `<div class="card-preview"><div class="card-preview-title">Cosa trovi dentro</div><div class="card-preview-sections">${prev}</div></div>` : ''}
  `;
  return div;
}

function openProd(pid) { prodId=pid; renderProd(pid); goTo('product'); }

function renderProd(pid) {
  const p=getProd(pid); if(!p) return;
  const pc=pct(pid);
  D.pH.innerHTML=`<div class="product-header-tag">${p.tag}</div><div class="product-header-title">${p.title}</div><div class="product-header-desc">${p.description}</div>`;
  D.pFill.style.width=`${pc}%`; D.pLbl.textContent=`${pc}%`;
  D.sList.innerHTML='';
  p.sections.forEach((s,i) => {
    const done=secDone(pid,s.id);
    const item=document.createElement('div');
    item.className=`section-item ${done?'completed':''}`;
    item.innerHTML=`<div class="section-num">${done?'✓':i+1}</div><div class="section-info"><div class="section-name">${s.name}</div><div class="section-count">${s.questions.length} domande</div></div><svg class="section-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="9 18 15 12 9 6"/></svg>`;
    item.addEventListener('click', ()=>openSec(pid,i));
    D.sList.appendChild(item);
  });
}

function openSec(pid, idx) { prodId=pid; secIdx=idx; renderSec(pid,idx); goTo('section'); }

function renderSec(pid, idx) {
  const p=getProd(pid); if(!p) return;
  const s=p.sections[idx]; if(!s) return;
  D.sH.innerHTML=`<div class="section-header-label">${p.title} — ${idx+1} / ${p.sections.length}</div><div class="section-header-title">${s.name}</div>`;
  D.qList.innerHTML='';
  s.questions.forEach((q,qi) => {
    const key=ak(pid,s.id,qi);
    const block=document.createElement('div');
    block.className='question-block';
    block.innerHTML=`<div class="question-num">Domanda ${qi+1}</div><div class="question-text">${q}</div><textarea class="question-textarea" placeholder="Scrivi qui la tua risposta…" rows="4"></textarea><div class="question-saved" data-save-key="${key}"></div>`;
    const ta=block.querySelector('textarea');
    ta.value=ans[key]||'';
    ta.addEventListener('input', ()=>saveAns(pid,s.id,qi,ta.value));
    D.qList.appendChild(block);
  });
  D.prev.disabled=idx===0;
  D.next.disabled=idx===p.sections.length-1;
  D.prev.onclick=()=>{ secIdx--; renderSec(pid,secIdx); window.scrollTo({top:0,behavior:'smooth'}); };
  D.next.onclick=()=>{ secIdx++; renderSec(pid,secIdx); window.scrollTo({top:0,behavior:'smooth'}); };
}

D.exp.addEventListener('click', () => {
  const p=getProd(prodId); if(!p) return;
  let txt=`${p.title}\nEsportato il ${new Date().toLocaleDateString('it-IT')}\n${'═'.repeat(50)}\n\n`;
  p.sections.forEach((s,si) => {
    txt+=`${si+1}. ${s.name}\n${'─'.repeat(30)}\n\n`;
    s.questions.forEach((q,qi) => { const k=ak(p.id,s.id,qi); txt+=`D${qi+1}: ${q}\nR: ${ans[k]||'—'}\n\n`; });
    txt+='\n';
  });
  const blob=new Blob([txt],{type:'text/plain;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a'); a.href=url; a.download=`gilda-${p.slug}-risposte.txt`; a.click();
  URL.revokeObjectURL(url);
  showToast('File esportato ✓');
});

function renderProf() {
  D.pEmail.textContent=me?.email||'';
  const tot=Object.values(ans).filter(v=>v&&v.trim()).length;
  D.pStats.innerHTML=`
    <div class="stat-row"><span class="stat-label">Prodotti sbloccati</span><span class="stat-value">${open.length}</span></div>
    <div class="stat-row"><span class="stat-label">Risposte scritte</span><span class="stat-value">${tot}</span></div>
    ${CATALOG.filter(p=>isOpen(p.id)).map(p=>`<div class="stat-row"><span class="stat-label">${p.title}</span><span class="stat-value">${pct(p.id)}%</span></div>`).join('')}
  `;
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/gilda-app/service-worker.js')
      .then(r=>console.info('SW:', r.scope))
      .catch(e=>console.warn('SW failed:', e));
  });
}

document.addEventListener('DOMContentLoaded', boot);
