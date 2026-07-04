/* ═══════════════════════════════════════════════
   GILDA PWA — app.js v6.1
   Aggiunto flusso token da URL (acquisto Ko-fi)
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
    kofiUrl: 'https://ko-fi.com/s/bd0aecbdaa',
    tag: 'Strumento di autoanalisi',
    title: 'Il Meccanismo',
    description: 'Come funziona il tuo autosabotaggio specifico. E come smettere di fingere che non ci sia.',
    price: '€17',
    type: 'meccanismo',
    intro: {
      title: 'Una nota onesta.',
      blockquote: 'Questo non è un workbook per sentirti meglio.\nNon promette cambiamenti in sette giorni. Non ti chiede di credere in te stessa.',
      paragraphs: [
        'È uno strumento per guardare da vicino qualcosa che di solito preferisci tenere leggermente sfocato: il modo preciso in cui ti metti i bastoni tra le ruote, e le ragioni impeccabili con cui giustifichi questa scelta.',
        'Non cerchiamo colpevoli. Sarebbe comodo, quindi lo lasciamo fare ad altri. Cerchiamo il meccanismo. Il tuo, specifico, personale, probabilmente abbastanza intelligente da sembrare ragionevole la maggior parte delle volte.',
        'Puoi compilarlo in una seduta o a spezzoni. Puoi tornare indietro, cancellare, riscrivere. L\'unica cosa che non ha senso fare è rispondere quello che pensi si debba rispondere. Nessuno legge questo tranne te.'
      ],
      signature: '— Gilda'
    },
    instructions: {
      title: 'Come usare questo strumento.',
      items: [
        { label: 'Il test', text: 'Prima di tutto, "Quello che fai invece": quindici domande per nominare la tua forma specifica di autosabotaggio.' },
        { label: 'Quattro sezioni', text: 'Il tuo pattern / Il momento esatto / La logica interna / Il passo piccolo. Seguono una logica. Meglio non saltare.' },
        { label: 'Salvato in automatico', text: 'Tutto quello che scrivi viene salvato nel cloud. Se chiudi e riapri, trovi le tue risposte da qualsiasi dispositivo.' },
        { label: 'Esporta', text: 'Usa il tasto Esporta per scaricare le tue risposte in formato testo. Torna a compilarlo quando il meccanismo si riattiva.' },
        { label: 'Un episodio specifico', text: 'Funziona meglio se pensi a una situazione concreta. Non al tuo modo di essere in generale, ma a una volta precisa.' },
      ]
    },
    sections: [
      {
        id: 's1',
        name: 'Il tuo pattern',
        number: 'I',
        openerBg: 'terracotta',
        openerIntro: 'Non sei ferma. Sei occupatissima a non fare la cosa che conta.',
        intro: 'L\'autosabotaggio elegante non assomiglia all\'immobilità. Ha un\'agenda piena, ottimi motivi, un senso di responsabilità molto sviluppato. In questa sezione identifichiamo il tuo modo specifico di fare una cosa invece dell\'altra.',
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
        quote: 'Non hai un problema di disciplina. Hai una parte di te che ha delle priorità diverse dalle tue.',
        editorialBreak: true
      },
      {
        id: 's2',
        name: 'Il momento esatto',
        number: 'II',
        openerBg: 'beige',
        openerIntro: 'Il punto non è diventare invincibile. Il punto è beccarti in flagrante.',
        intro: 'In questa sezione lavoriamo su un episodio specifico: il momento preciso in cui stavi per fare la cosa vera e hai fatto altro. Non in generale. Quella volta lì.',
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
        quote: 'La deviazione raramente sembra una fuga. Sembra una scelta ragionevole.',
        editorialBreak: false
      },
      {
        id: 's3',
        name: 'La logica interna',
        number: 'III',
        openerBg: 'dark',
        openerIntro: 'L\'autosabotaggio non è stupidità. È una strategia.',
        intro: 'Non cerchiamo cause, non risaliamo alle origini, non diagnostichiamo niente. Cerchiamo la logica: cosa stava proteggendo quella parte di te che ha deviato?',
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
        quote: 'Nessuna di queste risposte ti rende stupida. Ti rendono umana con una strategia precisa.',
        editorialBreak: false
      },
      {
        id: 's4',
        name: 'Il passo piccolo',
        number: 'IV',
        openerBg: 'cipria',
        openerIntro: 'Non devi diventare un\'altra persona. Devi rendere più difficile mentirti.',
        intro: 'Non si tratta di superare la resistenza con la forza. Si tratta di aggirarla. Un\'azione così piccola da sembrare quasi ridicola. Concreta. Reale. Domani.',
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
          signature: '— Gilda'
        },
        final: {
          title: 'Se vuoi andare più a fondo.',
          text: 'Arrivare fino in fondo a questo strumento non è scontato. Significa che sei disposta a guardare, e questo già cambia qualcosa nel modo in cui il meccanismo funziona. Il cervello impara a riconoscere i pattern ogni volta che li incontra. Hai trovato un filo. Ce ne sono altri e ogni volta che ne trovi uno e lo tiri, il meccanismo perde un po\' del suo potere. Puoi scaricare le tue risposte in qualsiasi momento e ricominciare da capo quando il meccanismo si riattiva di nuovo. Funziona meglio nel tempo, non in una sola sessione.',
          signature: '— Gilda'
        }
      },
    ],
  },
  {
    id: 'non-abbastanza',
    slug: 'non-sentirsi-abbastanza',
    kofiUrl: 'https://ko-fi.com/s/c8964c27d8',
    tag: 'Percorso',
    title: 'Non sentirsi abbastanza',
    description: 'La voce che dice che non sei abbastanza non è la verità. È una strategia. Impariamo a riconoscerla.',
    price: '€9',
    type: 'standard',
    intro: {
      title: 'Prima di iniziare.',
      blockquote: 'Questo non è un percorso per convincerti che sei abbastanza.\nNon funzionerebbe. E lo sai già.',
      paragraphs: [
        'È uno strumento per guardare quella voce da vicino — quella che misura, valuta, trova sempre qualcosa che manca. Non per farla tacere, ma per capire cosa sta facendo lì e da dove viene.',
        'Non cerchiamo colpevoli. Cerchiamo la logica. Perché una voce che hai imparato a riconoscere ha meno potere di una che continua a sembrare la verità.',
        'Puoi compilarlo in una seduta o a spezzoni. Puoi tornare indietro, cancellare, riscrivere. L\'unica cosa che non ha senso fare è rispondere quello che pensi si debba rispondere. Nessuno legge questo tranne te.'
      ],
      signature: '— Gilda'
    },
    sections: [
      {
        id: 's1', name: 'La voce', number: 'I', openerBg: 'dark',
        openerIntro: 'C\'è una voce che dice che non sei abbastanza. Prima di ascoltarla, vale la pena capire cosa sta facendo lì.',
        intro: 'Non cerchiamo di zittirla. Cerchiamo di guardarla. Quando si fa sentire, con chi parla, cosa dice esattamente. Perché una voce che non riconosci ha meno potere di una che hai imparato a vedere.',
        quote: 'La voce che dice che non sei abbastanza non è la verità. È una strategia.',
        questions: [
          { id: 'q1', label: "Quando senti per la prima volta quella voce", hint: 'In quale situazione si fa più forte?', placeholder: 'La voce si fa sentire quando...' },
          { id: 'q2', label: "Con chi suona più forte", hint: 'A lavoro, in amore, con la famiglia, da sola?', placeholder: 'Soprattutto con...' },
          { id: 'q3', label: "Se quella voce avesse un volto", hint: 'A chi assomiglierebbe?', placeholder: 'Assomiglierebbe a...' },
          { id: 'q4', label: "Cosa succederebbe se quella voce avesse torto", hint: '', placeholder: 'Se avesse torto...' },
        ]
      },
      {
        id: 's2', name: 'Le prove', number: 'II', openerBg: 'beige',
        openerIntro: 'Cosa fai per sentirti abbastanza? Vale la pena guardarlo senza giudicarlo.',
        intro: 'Non per smettere di farlo. Per capire cosa stai cercando di dimostrare, e a chi. Perché a volte quello che sembra ambizione è solo un tentativo di far tacere quella voce. E quella voce, di solito, non si accontenta mai.',
        quote: 'Il problema non è quello che fai. È per chi lo fai.',
        questions: [
          { id: 'q1', label: "Cosa fai per dimostrare di valere", hint: 'Elenca anche le cose piccole.', placeholder: 'Faccio...' },
          { id: 'q2', label: "Quando ottieni qualcosa riesci a godertelo", hint: 'O passi subito al prossimo obiettivo?', placeholder: 'Di solito...' },
          { id: 'q3', label: "Hai mai sabotato qualcosa di buono", hint: "Perché non ti sentivi abbastanza?", placeholder: 'Sì, quando...' },
          { id: 'q4', label: "Cosa non hai fatto perché non eri pronta", hint: '', placeholder: 'Ho rimandato...' },
        ]
      },
      {
        id: 's3', name: "L'origine", number: 'III', openerBg: 'terracotta',
        openerIntro: 'La misura che usi per valutarti — da dove viene? Non è una domanda retorica.',
        intro: 'Non risaliamo per trovare un colpevole. Risaliamo perché capire da dove viene una convinzione cambia il peso che le dai. Una misura che hai ereditato non è necessariamente quella giusta per te.',
        quote: 'Non hai scelto la misura. Puoi scegliere se continuare a usarla.',
        questions: [
          { id: 'q1', label: "Chi ti ha fatto credere che non fossi abbastanza", hint: 'Per la prima volta.', placeholder: 'È stato...' },
          { id: 'q2', label: "C\'era una versione di te che si sentiva abbastanza", hint: 'Quanti anni aveva?', placeholder: 'Avevo circa...' },
          { id: 'q3', label: "Cosa ti è stato chiesto di essere che non eri", hint: '', placeholder: 'Mi chiedevano di essere...' },
          { id: 'q4', label: "Cosa avresti voluto che qualcuno ti dicesse allora", hint: '', placeholder: 'Avrei voluto sentire...' },
        ]
      },
      {
        id: 's4', name: 'Adesso', number: 'IV', openerBg: 'cipria',
        openerIntro: 'Non ti chiedo di convincerti che sei abbastanza. Ti chiedo di guardare cosa cambierebbe se lo fossi.',
        intro: 'Non è un esercizio di autostima. È un esercizio di chiarezza. Perché spesso sappiamo già cosa vorremmo fare — ma aspettiamo un permesso che non arriverà mai dall\'esterno.',
        quote: 'La chiave non arriva da fuori. Ce l\'hai già.',
        questions: [
          { id: 'q1', label: "Cosa significherebbe sentirti abbastanza", hint: 'Concretamente.', placeholder: 'Significherebbe...' },
          { id: 'q2', label: "Qualcosa che fai bene e che fai fatica ad ammettere", hint: '', placeholder: 'So fare bene...' },
          { id: 'q3', label: "Se una tua amica ti descrivesse cosa direbbe di te", hint: '', placeholder: 'Direbbe che...' },
          { id: 'q4', label: "Una cosa che puoi fare oggi per trattarti come se fossi già abbastanza", hint: '', placeholder: 'Oggi posso...' },
        ],
        synthesis: {
          title: 'Porta qualcosa fuori da questa pagina.',
          label: 'Quello che hai capito, in poche righe.',
          fields: [
            { id: 'q-sint-nonsa-1', label: 'Da quello che ho scritto, la cosa che non sapevo di sapere è...', placeholder: '...' },
            { id: 'q-sint-nonsa-2', label: 'La misura che smetto di usare è...', placeholder: '...' },
            { id: 'q-sint-nonsa-3', label: 'Una cosa concreta che cambia da oggi è...', placeholder: '...' },
          ]
        },
        closing: {
          title: 'Hai fatto una cosa difficile.',
          text: 'Hai guardato quella voce senza cercare di farla tacere. Hai visto da dove viene, cosa misura, a chi apparteneva prima di diventare tua. Una voce che hai imparato a riconoscere ha già perso una parte del suo potere. E magari adesso quel sentirsi abbastanza te lo dici da sola, senza aspettare conferme esterne. Anche perché non sei abbastanza, sei molto di più.',
          signature: '— Gilda'
        }
      },
    ],
  },
  {
    id: 'paura',
    slug: 'la-paura',
    kofiUrl: 'https://ko-fi.com/s/12e6f4363d',
    tag: 'Percorso',
    title: 'La paura',
    description: "La paura non è il problema. È l'informazione. Impariamo a leggerla senza obbedirle.",
    price: '€9',
    type: 'standard',
    intro: {
      title: 'Prima di iniziare.',
      blockquote: 'Questo non è un percorso per eliminare la paura.\nNon funzionerebbe. E probabilmente non è nemmeno quello che vuoi davvero.',
      paragraphs: [
        'La paura è un segnale, non un nemico. Il punto non è farla smettere, ma capire cosa sta dicendo e smettere di lasciarle l\'ultima parola.',
        'In questo percorso guardiamo la tua paura specifica: dove abita, cosa protegge, quanto di quello che racconta è reale. Non per darle torto, ma per scegliere consapevolmente cosa fartene.',
        'Puoi compilarlo in una seduta o tornare più volte. Funziona meglio se pensi a una paura concreta, non al tuo modo di essere in generale.'
      ],
      signature: '— Gilda'
    },
    sections: [
      {
        id: 's1', name: 'Che paura è', number: 'I', openerBg: 'dark',
        openerIntro: 'La paura non è il nemico. È un segnale. Il guaio non è sentirla, ma non sapere cosa sta dicendo.',
        intro: 'C\'è una differenza tra la paura e l\'ansia, anche se le usiamo come sinonimi. La paura risponde a qualcosa di preciso, adesso. L\'ansia abita il futuro, anticipa, inventa. In questa sezione cerchiamo quella concreta. Quella che senti nel corpo quando stai per fare qualcosa che conta.',
        quote: 'La paura non è irrazionale. È una risposta. La domanda è: a cosa, esattamente?',
        questions: [
          { id: 'q1', label: "Descrivi la tua paura principale in questo momento", hint: 'Non la più grande in assoluto. Quella più presente adesso.', placeholder: 'La paura più presente è...' },
          { id: 'q2', label: "Come si manifesta nel corpo", hint: 'Fisicamente. Dove la senti?', placeholder: 'La sento...' },
          { id: 'q3', label: "Da quanto tempo è lì", hint: '', placeholder: 'È lì da...' },
          { id: 'q4', label: "Cosa fa quando si attiva", hint: 'Come cambia il tuo comportamento?', placeholder: 'Quando si attiva, io...' },
        ]
      },
      {
        id: 's2', name: 'Cosa protegge', number: 'II', openerBg: 'beige',
        openerIntro: 'Ogni paura protegge qualcosa. Non è debolezza, ma una strategia che ad un certo punto aveva senso.',
        intro: 'Evitare funziona, nell\'immediato. Togli il disagio, torni a respirare. Ma ogni volta che eviti, la paura prende nota e la prossima volta arriva prima. Non è una questione di forza. È che l\'evitamento insegna al cervello che c\'era davvero qualcosa da cui scappare. In questa sezione guardiamo cosa stai proteggendo, e se vale ancora quello che ti costa.',
        quote: 'La paura non comanda perché è forte. Comanda perché non le abbiamo mai chiesto cosa vuole.',
        questions: [
          { id: 'q1', label: "Da cosa ti sta proteggendo questa paura", hint: 'Sii precisa, non generica.', placeholder: 'Mi sta proteggendo da...' },
          { id: 'q2', label: "Cosa perderesti se sparisse", hint: 'Anche qualcosa di piccolo o apparentemente assurdo.', placeholder: 'Perderei...' },
          { id: 'q3', label: "Quando ha iniziato ad avere senso", hint: 'In quale momento della tua vita questa paura era giustificata?', placeholder: 'Aveva senso quando...' },
          { id: 'q4', label: "Ha ancora senso oggi", hint: 'La situazione è cambiata?', placeholder: 'Oggi...' },
        ]
      },
      {
        id: 's3', name: 'Cosa dice', number: 'III', openerBg: 'terracotta',
        openerIntro: 'La paura parla. Il punto non è darle torto, ma capire cosa dice esattamente prima di obbedirle.',
        intro: 'Quasi tutti i messaggi della paura suonano più grandi di quello che sono. Non vuol dire che ha torto su tutto. Vuol dire che merita un\'analisi seria, non solo obbedienza cieca. Quando sai cosa dice esattamente, puoi scegliere cosa fartene.',
        quote: 'Non devi eliminare la paura. Devi smettere di lasciarle decidere per te.',
        questions: [
          { id: 'q1', label: "Se la paura potesse parlare cosa ti direbbe", hint: '', placeholder: 'Mi direbbe...' },
          { id: 'q2', label: "Quanto di quello che dice è vero", hint: 'Sii onesta.', placeholder: 'È vero che...' },
          { id: 'q3', label: "Quanto è catastrofismo", hint: 'Cosa stai amplificando?', placeholder: 'Sto amplificando...' },
          { id: 'q4', label: "Cosa succederebbe davvero nel caso peggiore", hint: 'La versione realistica, non quella cinematografica.', placeholder: 'Nel caso peggiore...' },
        ]
      },
      {
        id: 's4', name: 'Muoversi lo stesso', number: 'IV', openerBg: 'cipria',
        openerIntro: 'Il coraggio non è assenza di paura. È fare la cosa mentre c\'è ancora.',
        intro: 'Non aspetti che passi, perché non passa così. Si restringe ogni volta che vai avanti lo stesso. Non serve un gesto grande. Serve il passo più piccolo possibile nella direzione giusta, con la paura addosso. Quello conta.',
        quote: 'La paura non sparisce quando vai avanti. Diventa più piccola.',
        questions: [
          { id: 'q1', label: "Cosa faresti se la paura ci fosse ma non comandasse", hint: '', placeholder: 'Farei...' },
          { id: 'q2', label: "Qual è il passo più piccolo possibile in quella direzione", hint: 'Quello che puoi fare anche con la paura addosso.', placeholder: 'Potrei...' },
          { id: 'q3', label: "Chi o cosa ti ha già aiutata a muoverti nonostante la paura", hint: '', placeholder: 'Mi ha aiutata...' },
          { id: 'q4', label: "Cosa vorresti dirti quando la paura si riattiva", hint: '', placeholder: 'Voglio ricordarmi che...' },
        ],
        synthesis: {
          title: 'Porta qualcosa fuori da questa pagina.',
          label: 'Quello che hai capito, in poche righe.',
          fields: [
            { id: 'q-sint-paura-1', label: 'La mia paura in una riga è...', placeholder: '...' },
            { id: 'q-sint-paura-2', label: 'Quello che scelgo di fare comunque è...', placeholder: '...' },
            { id: 'q-sint-paura-3', label: 'La prossima volta che si attiva, faccio...', placeholder: '...' },
          ]
        },
        closing: {
          title: 'Sei arrivata fino in fondo.',
          text: 'Hai guardato qualcosa che di solito si tiene a distanza di sicurezza. Hai capito cosa dice la tua paura, da dove viene, cosa sta proteggendo. Non è poco. La maggior parte delle persone preferisce non saperlo, perché sapere implica scegliere. Ora sai. E questo cambia qualcosa, anche se adesso non lo senti ancora. La paura ci sarà ancora. Ma una paura che hai guardato in faccia non comanda più nello stesso modo.',
          signature: '— Gilda'
        }
      },
    ],
  },
  {
    id: 'confini',
    slug: 'i-confini',
    kofiUrl: 'https://ko-fi.com/s/e8c2cd9c99',
    tag: 'Percorso',
    title: 'I confini',
    description: 'Imparare a dire no non è essere difficili. È sapere dove finisci tu e dove inizia il dovere degli altri.',
    price: '€9',
    type: 'standard',
    intro: {
      title: 'Prima di iniziare.',
      blockquote: 'Questo non è un percorso per diventare più dure.\nO più egoiste. O più difficili da amare.',
      paragraphs: [
        'È uno strumento per capire dove finisci tu e dove inizia il bisogno degli altri. Perché spesso non lo sappiamo. Abbiamo ceduto così tante volte che il confine è diventato irriconoscibile.',
        'Non cerchiamo colpevoli. Cerchiamo il meccanismo: cosa ti ha insegnato a cedere, cosa ti costa dirlo, e come si costruisce qualcosa che regge davvero.',
        'Puoi compilarlo in una seduta o tornare più volte. Funziona meglio se pensi a una relazione concreta, non al tuo modo di essere in generale.'
      ],
      signature: '— Gilda'
    },
    sections: [
      {
        id: 's1', name: 'Dove sono i tuoi confini oggi', number: 'I', openerBg: 'dark',
        openerIntro: 'Un confine non è un muro. È sapere dove finisci tu e dove inizia il bisogno degli altri.',
        intro: 'La maggior parte di noi non ha mai imparato a mettere confini in modo sano. Ha imparato a cedere per evitare conflitti, a dire sì per non deludere, a fare spazio agli altri togliendo spazio a sé. In questa sezione guardiamo dove sei adesso, senza giudicare niente.',
        quote: 'Dire no non è egoismo. È sapere cosa vale il tuo sì.',
        questions: [
          { id: 'q1', label: "Una situazione recente in cui hai detto sì quando volevi dire no", hint: 'Cosa è successo?', placeholder: 'È successo quando...' },
          { id: 'q2', label: "Come ti sei sentita dopo", hint: '', placeholder: 'Mi sono sentita...' },
          { id: 'q3', label: "Hai paura di deludere qualcuno se metti un limite", hint: '', placeholder: 'Ho paura che...' },
          { id: 'q4', label: "Chi nella tua vita rispetta i tuoi spazi", hint: '', placeholder: 'Lo fa...' },
        ]
      },
      {
        id: 's2', name: 'Quando hai smesso di averli', number: 'II', openerBg: 'beige',
        openerIntro: 'I confini si imparano da piccoli. O non si imparano. E quello che non si impara si eredita come normalità.',
        intro: 'Le prime persone che ci hanno detto no, o che non l\'hanno mai fatto, hanno disegnato la mappa di quello che abbiamo creduto possibile nelle relazioni. Non per colpa, ma per trasmissione. In questa sezione guardiamo da dove viene il tuo modo di cedere, e quando ha iniziato a sembrare l\'unica opzione.',
        quote: 'Non hai smesso di avere confini per scelta. Li hai persi per sopravvivenza.',
        questions: [
          { id: 'q1', label: "Ricordi un momento in cui avevi confini chiari", hint: 'Cosa è cambiato?', placeholder: 'Avevo confini quando...' },
          { id: 'q2', label: "Cosa ti ha insegnato la famiglia sul dire no", hint: '', placeholder: 'Mi ha insegnato che...' },
          { id: 'q3', label: "Hai mai pagato un prezzo per aver messo un confine", hint: '', placeholder: 'Ho pagato...' },
          { id: 'q4', label: "Cosa significava essere difficile nella tua famiglia", hint: '', placeholder: 'Significava...' },
        ]
      },
      {
        id: 's3', name: 'Il costo del sì continuo', number: 'III', openerBg: 'terracotta',
        openerIntro: 'Dire sempre sì ha un costo. Non è virtù, è abitudine.',
        intro: 'C\'è una differenza tra essere generose e svuotarsi. La prima nasce da una scelta, la seconda da un automatismo. Quando smetti di scegliere e inizi solo a cedere, il corpo lo sa prima della testa. In questa sezione lo guardiamo senza sconti.',
        quote: 'Il punto non è chi ti chiede troppo. È che hai smesso di tenere il conto.',
        questions: [
          { id: 'q1', label: "Cosa ti costa dire sempre sì", hint: '', placeholder: 'Mi costa...' },
          { id: 'q2', label: "In quale area della tua vita senti più il peso", hint: '', placeholder: 'Lo sento di più...' },
          { id: 'q3', label: "Cosa hai rinunciato a fare per accontentare gli altri", hint: '', placeholder: 'Ho rinunciato a...' },
          { id: 'q4', label: "Il tuo corpo ti manda segnali quando superi i tuoi limiti", hint: '', placeholder: 'Sento...' },
        ]
      },
      {
        id: 's4', name: 'Costruire confini che reggono', number: 'IV', openerBg: 'cipria',
        openerIntro: 'Un confine che cede alla prima resistenza non è un confine. È un\'intenzione.',
        intro: 'Mettere un confine non è un atto ostile. È un atto di chiarezza verso te stessa e verso chi ti sta vicino. Le relazioni sane reggono i confini, anzi ne hanno bisogno. Quelle che si rompono quando dici no erano già fragili prima. In questa sezione costruiamo qualcosa che regge.',
        quote: 'Chi ti vuole bene davvero non se ne va quando dici no. Si adatta.',
        questions: [
          { id: 'q1', label: "Il confine più piccolo che potresti iniziare a mettere domani", hint: '', placeholder: 'Potrei...' },
          { id: 'q2', label: "Con chi è più difficile e perché", hint: '', placeholder: 'Con... perché...' },
          { id: 'q3', label: "Cosa cambierebbe nella tua vita se dicessi no più spesso", hint: '', placeholder: 'Cambierebbe...' },
          { id: 'q4', label: "Una frase che potresti usare la prossima volta", hint: '', placeholder: 'Potrei dire...' },
        ],
        synthesis: {
          title: 'Porta qualcosa fuori da questa pagina.',
          label: 'Quello che hai capito, in poche righe.',
          fields: [
            { id: 'q-sint-confini-1', label: 'Il confine che porto fuori da questa pagina è...', placeholder: '...' },
            { id: 'q-sint-confini-2', label: 'Con chi inizia a cambiare qualcosa è...', placeholder: '...' },
            { id: 'q-sint-confini-3', label: 'Me lo ricordo così...', placeholder: '...' },
          ]
        },
        closing: {
          title: 'Sei arrivata fino in fondo.',
          text: 'Guardare dove cedi, capire da dove viene, rendendoti conto di quanto ti costa, non è un esercizio facile. È più comodo non farlo. Hai scelto la strada difficile, quella che porta a te. Io sai come la chiamo? Libertà. Quello che hai scritto qui non serve a niente se resta su questa pagina. La cosa più utile che puoi fare adesso è prendere una cosa sola, la più piccola o la più importante, sentilo e portarla fuori. Non un cambiamento di vita. Un confine. Uno. Quello che hai già individuato. Ce la fai.',
          signature: '— Gilda'
        }
      },
    ],
  },
  {
    id: 'corpo',
    slug: 'il-corpo-non-mente',
    kofiUrl: 'https://ko-fi.com/s/8c06cb9b7c',
    tag: 'Percorso',
    title: 'Il corpo non mente',
    description: 'Il corpo registra quello che la mente non ha ancora nominato. Impariamo a leggerlo.',
    price: '€9',
    type: 'standard',
    intro: {
      title: 'Prima di iniziare.',
      blockquote: 'Questo non è un percorso per imparare ad ascoltare il corpo.\nSai già farlo. Il problema è che spesso non ci credi.',
      paragraphs: [
        'Il corpo parla prima della mente. Non aspetta che tu abbia le parole giuste, non aspetta il momento opportuno. Manda segnali continui: tensione, insonnia, fame fuori posto, respiro trattenuto. E tu li chiami stress, coincidenza, debolezza.',
        'Non lo sono. Sono informazioni precise. In questo percorso impariamo a leggerle senza squalificarle.',
        'Puoi compilarlo in una seduta o tornare più volte. Funziona meglio se pensi a qualcosa di specifico che senti adesso, non al tuo modo di essere in generale.'
      ],
      signature: '— Gilda'
    },
    sections: [
      {
        id: 's1', name: 'I segnali che ignori', number: 'I', openerBg: 'dark',
        openerIntro: 'Il corpo non mente. Sei tu che hai imparato a non dargli retta.',
        intro: 'Ci sono segnali che arrivano ogni giorno e che tu hai imparato a mettere a tacere in fretta: la notte che non dormi, il respiro che trattieni, la stretta al petto quando dici sì e vuoi dire no. Non sono sintomi da gestire. Sono messaggi da leggere. In questa sezione li guardiamo uno per uno.',
        quote: 'Il corpo non aspetta che tu sia pronta. Parla adesso. La domanda è se stai ascoltando.',
        questions: [
          { id: 'q-corpo-1', label: 'Il segnale che il tuo corpo manda più spesso', hint: 'Tensione, insonnia, mal di testa, nausea, fame improvvisa. Quale riconosci di più?', placeholder: 'Il segnale che sento più spesso è...' },
          { id: 'q-corpo-2', label: 'Quando compare', hint: 'In quale tipo di situazione si presenta? Prima di cosa, dopo cosa?', placeholder: 'Compare quando...' },
          { id: 'q-corpo-3', label: 'Come lo chiami di solito', hint: 'Stanchezza, stress, ansia, debolezza? Come lo hai etichettato finora?', placeholder: 'Di solito lo chiamo...' },
          { id: 'q-corpo-4', label: 'Cosa fai per farlo smettere', hint: 'Non per giudicarti. Per capire la strategia che usi.', placeholder: 'Di solito faccio...' },
        ]
      },
      {
        id: 's2', name: 'Cosa sta dicendo', number: 'II', openerBg: 'beige',
        openerIntro: 'Ogni segnale del corpo è una risposta a qualcosa. Il problema non è il segnale. È che non hai ancora capito a cosa sta rispondendo.',
        intro: 'La notte che non dormi non è insonnia generica: è il sistema nervoso che elabora quello che di giorno non ha avuto spazio. Il mal di testa del lunedì non è coincidenza: è il corpo che registra l\'anticipazione del ritorno. Ogni segnale ha una fonte. In questa sezione la cerchiamo.',
        quote: 'Non è il corpo che si sbaglia. È che stai usando le energie per ignorarlo invece di capirlo.',
        questions: [
          { id: 'q-corpo-5', label: 'Se quel segnale potesse parlare, cosa direbbe', hint: 'Non la versione logica. La versione diretta, quella che non vorresti sentire.', placeholder: 'Direbbe...' },
          { id: 'q-corpo-6', label: 'A quale situazione della tua vita sta rispondendo', hint: 'Il lavoro, una relazione, qualcosa che stai rimandando, qualcosa che stai sopportando.', placeholder: 'Sta rispondendo a...' },
          { id: 'q-corpo-7', label: 'Da quanto tempo lo senti', hint: '', placeholder: 'Lo sento da...' },
          { id: 'q-corpo-8', label: 'Cosa è cambiato nella tua vita nel periodo in cui è comparso', hint: '', placeholder: 'In quel periodo stava succedendo...' },
        ]
      },
      {
        id: 's3', name: 'Il costo di non ascoltare', number: 'III', openerBg: 'terracotta',
        openerIntro: 'Ignorare il corpo non fa smettere il segnale. Lo fa alzare di volume.',
        intro: 'Il corpo non rinuncia. Se non lo ascolti a bassa voce, parla più forte. Prima la tensione, poi il dolore. Prima l\'insonnia occasionale, poi quella strutturale. Non è una punizione, è una logica precisa: il segnale continua finché non viene ricevuto. In questa sezione guardiamo quanto ti sta costando non riceverlo.',
        quote: 'Il corpo non ti tradisce. Si assicura che tu non possa ignorare quello che stai ignorando.',
        questions: [
          { id: 'q-corpo-9', label: 'Cosa hai continuato a fare nonostante il segnale', hint: 'Cosa hai portato avanti lo stesso, mettendo a tacere quello che sentivi?', placeholder: 'Ho continuato a...' },
          { id: 'q-corpo-10', label: 'Cosa ti è costato non ascoltare', hint: 'In energia, in salute, in qualità di vita.', placeholder: 'Mi è costato...' },
          { id: 'q-corpo-11', label: 'C\'è stato un momento in cui il corpo ha alzato la voce', hint: 'Un episodio in cui non potevi più ignorarlo.', placeholder: 'È successo quando...' },
          { id: 'q-corpo-12', label: 'Cosa ti ha detto quella volta', hint: '', placeholder: 'Mi ha detto che...' },
        ]
      },
      {
        id: 's4', name: 'Ascoltare senza obbedire', number: 'IV', openerBg: 'cipria',
        openerIntro: 'Ascoltare il corpo non significa lasciarlo comandare. Significa usarlo come bussola.',
        intro: 'C\'è una differenza tra ascoltare un segnale e farsene travolgere. Il punto non è smettere di fare tutto quello che genera tensione: alcune tensioni sono parte della vita che vuoi. Il punto è saper distinguere il segnale di allarme da quello di adattamento. E rispondere con consapevolezza invece di ignorare o cedere.',
        quote: 'Il corpo non ti chiede di fermarti. Ti chiede di sapere dove stai andando.',
        questions: [
          { id: 'q-corpo-13', label: 'Una cosa che il tuo corpo ti sta chiedendo da tempo', hint: 'Non la versione idealizzata. Quella concreta, quella che sai già.', placeholder: 'Mi sta chiedendo...' },
          { id: 'q-corpo-14', label: 'Perché non l\'hai ancora ascoltata', hint: '', placeholder: 'Non l\'ho ascoltata perché...' },
          { id: 'q-corpo-15', label: 'La risposta più piccola che potresti dargli domani', hint: 'Non una soluzione completa. Un gesto concreto nella direzione giusta.', placeholder: 'Potrei...' },
        ],
        synthesis: {
          title: 'Porta qualcosa fuori da questa pagina.',
          label: 'Quello che hai capito, in poche righe.',
          fields: [
            { id: 'q-sint-corpo-1', label: 'Il segnale che ho smesso di ignorare è...', placeholder: '...' },
            { id: 'q-sint-corpo-2', label: 'Sta rispondendo a...', placeholder: '...' },
            { id: 'q-sint-corpo-3', label: 'La risposta concreta che gli do è...', placeholder: '...' },
          ]
        },
        closing: {
          title: 'Hai ascoltato.',
          text: 'Non è poco. Siamo abituate a mettere a tacere, a spiegare, a razionalizzare. Guardare il corpo come una fonte di informazioni invece che come un problema da gestire è un cambio di prospettiva che richiede pratica. Quello che hai scritto qui è già una risposta al segnale. Il corpo lo sa. Adesso lo sai anche tu.',
          signature: '— Gilda'
        }
      },
    ],
  },
  {
    id: 'amicizie',
    slug: 'le-amicizie',
    kofiUrl: 'https://ko-fi.com/s/c97d2674fa',
    tag: 'Percorso',
    title: 'Le amicizie',
    description: 'Non tutte le amicizie reggono la versione nuova di te. Guardiamo quali tieni, quali hai perso e cosa dicono di chi sei adesso.',
    price: '€9',
    type: 'standard',
    intro: {
      title: 'Prima di iniziare.',
      blockquote: 'Questo non è un percorso per capire se le tue amiche sono buone amiche.\nÈ un percorso per capire cosa dicono di te le persone che hai scelto di tenere vicino.',
      paragraphs: [
        'Le amicizie sono uno specchio. Non nel senso romantico: nel senso che chi tieni vicino parla di chi sei adesso, di cosa cerchi, di dove hai ancora bisogno di crescere.',
        'Non cerchiamo colpevoli. Non giudichiamo nessuna. Guardiamo il meccanismo: perché hai continuato a tornare dove non potevi essere te stessa, e cosa hai guadagnato dall\'amicizia che ti ha permesso di esserlo.',
        'Puoi compilarlo pensando a una persona specifica o alle tue amicizie in generale. Funziona meglio se sei onesta anche sulle cose scomode.'
      ],
      signature: '— Gilda'
    },
    sections: [
      {
        id: 's1', name: 'La mappa delle tue amicizie', number: 'I', openerBg: 'dark',
        openerIntro: 'Non tutte le amicizie reggono la versione nuova di te. Non è un fallimento. È selezione naturale.',
        intro: 'Ci sono amicizie che si sono allargate con te e amicizie che non hanno retto il cambiamento. Entrambe dicono qualcosa. Non su di loro: su di te, su cosa cercavi allora, su cosa cerchi adesso. In questa sezione facciamo il punto su dove sei.',
        quote: 'Il problema non è che le amicizie finiscono. È quando resti per abitudine invece di scegliere.',
        questions: [
          { id: 'q-ami-1', label: "Un'amicizia che si è allargata con il tuo cambiamento", hint: 'Chi c\'è ancora, anche se sei diventata diversa?', placeholder: 'C\'è ancora...' },
          { id: 'q-ami-2', label: "Un'amicizia che non ha retto", hint: 'Non chi ha sbagliato. Cosa è cambiato tra voi.', placeholder: 'Non ha retto quando...' },
          { id: 'q-ami-3', label: "Con chi riesci a essere completamente te stessa", hint: '', placeholder: 'Con... posso...' },
          { id: 'q-ami-4', label: "Con chi reciti ancora una versione di te che non esiste più", hint: 'Anche se è scomodo ammetterlo.', placeholder: 'Con... faccio ancora finta di...' },
        ]
      },
      {
        id: 's2', name: 'Dove hai parlato e dove hai taciuto', number: 'II', openerBg: 'beige',
        openerIntro: 'Certe amicizie ti hanno permesso di essere. Altre no. La domanda non è perché loro, ma perché hai continuato a tornare dove non potevi parlare.',
        intro: 'C\'è sempre un posto in cui la voce è uscita e uno in cui l\'hai tenuta dentro. Non è una questione di carattere: è una questione di sicurezza percepita. Le amicizie in cui taci dicono qualcosa su cosa hai imparato a non aspettarti dagli altri. In questa sezione lo guardiamo.',
        quote: 'Non hai taciuto perché non avevi niente da dire. Hai taciuto perché non era sicuro dirlo.',
        questions: [
          { id: 'q-ami-5', label: "Un argomento che non hai mai tirato fuori con certe amiche", hint: '', placeholder: 'Con... non ho mai parlato di...' },
          { id: 'q-ami-6', label: "Perché hai continuato a frequentarle lo stesso", hint: 'Abitudine, paura di essere sola, convenienza, affetto reale?', placeholder: 'Ho continuato perché...' },
          { id: 'q-ami-7', label: "Con chi hai detto le cose difficili", hint: 'Chi ha ricevuto la versione non filtrata di te?', placeholder: 'L\'ho detto a...' },
          { id: 'q-ami-8', label: "Cosa ti ha permesso di parlare con quella persona", hint: '', placeholder: 'Con lei potevo perché...' },
        ]
      },
      {
        id: 's3', name: 'Il lutto che non hai elaborato', number: 'III', openerBg: 'terracotta',
        openerIntro: 'La fine di un\'amicizia fa male quanto una storia d\'amore. Ma non ha un nome, non ha un rito. E allora non la elabori mai.',
        intro: 'Nessuno ti dice che puoi stare male per la fine di un\'amicizia. Non c\'è un vocabolario per questo tipo di perdita. Eppure la mancanza c\'è, il vuoto c\'è, la domanda su cosa è andato storto c\'è. In questa sezione le diamo spazio.',
        quote: 'Non devi avere una ragione precisa per sentire la mancanza. Basta che fosse reale.',
        questions: [
          { id: 'q-ami-9', label: "Un\'amicizia che hai perso e che ancora senti", hint: '', placeholder: 'Ho perso... e sento ancora...' },
          { id: 'q-ami-10', label: "Come è finita", hint: 'Con un evento preciso o lentamente, senza accorgersene?', placeholder: 'È finita...' },
          { id: 'q-ami-11', label: "Cosa non hai mai detto a quella persona", hint: '', placeholder: 'Non le ho mai detto...' },
          { id: 'q-ami-12', label: "Cosa hai imparato da quella perdita su quello che cerchi davvero nelle amicizie", hint: '', placeholder: 'Ho capito che cerco...' },
        ]
      },
      {
        id: 's4', name: 'Scegliere per risonanza', number: 'IV', openerBg: 'cipria',
        openerIntro: 'L\'età, gli anni in comune, la vicinanza geografica non sono motivi sufficienti. La risonanza sì.',
        intro: 'Scegliere le persone per risonanza richiede di sapere chi sei. Richiede di smettere di accontentarsi delle amicizie che capitano e iniziare a coltivare quelle che scegli. Non è egoismo: è rispetto per entrambe. In questa sezione costruiamo la chiarezza su cosa cerchi davvero.',
        quote: 'Chi tieni vicino parla di chi sei adesso, non di chi eri. Guardarlo senza filtri è uno dei modi più onesti per capire dove sei arrivata.',
        questions: [
          { id: 'q-ami-13', label: "Cosa hanno in comune le amicizie che ti fanno stare bene", hint: '', placeholder: 'Hanno in comune...' },
          { id: 'q-ami-14', label: "Un\'amica che ti ha vista meglio di quanto tu vedessi te stessa", hint: 'Cosa ha detto o fatto?', placeholder: 'Mi ha vista quando...' },
          { id: 'q-ami-15', label: "Un\'amicizia che vorresti costruire e che non hai ancora", hint: 'Che tipo di persona vorresti vicino?', placeholder: 'Vorrei qualcuno che...' },
        ],
        synthesis: {
          title: 'Porta qualcosa fuori da questa pagina.',
          label: 'Quello che hai capito, in poche righe.',
          fields: [
            { id: 'q-sint-ami-1', label: "L'amicizia che ho smesso di tenere per abitudine è...", placeholder: '...' },
            { id: 'q-sint-ami-2', label: "Quello che cerco davvero in una persona vicina è...", placeholder: '...' },
            { id: 'q-sint-ami-3', label: "Una cosa che cambia da oggi nelle mie amicizie è...", placeholder: '...' },
          ]
        },
        closing: {
          title: 'Hai guardato senza filtri.',
          text: 'Le amicizie sono una delle cose più difficili da esaminare onestamente. C\'è affetto di mezzo, ci sono anni, ci sono storie. Guardare chi tieni vicino e chiedersi perché è un atto di rispetto verso te stessa, non una critica verso gli altri. Quello che hai scritto qui è già un passo verso amicizie scelte, non subite. E le amicizie scelte pesano di più, nel senso buono.',
          signature: '— Gilda'
        }
      },
    ],
  },
];

/* ═══════════════════════════════════════════════
   QUIZ — "Quello che fai invece"
   Prima parte di Il Meccanismo (autosabotaggio)
═══════════════════════════════════════════════ */
const QUIZ_PATTERNS = {
  procrastinazione: {
    name: "Procrastinazione",
    subtitle: "Sono troppo occupata per fare la cosa che conta",
    descriptions: {
      alta: `<p>La procrastinazione, quella vera, non assomiglia all'ozio. Assomiglia a una giornata pienissima. Email a cui rispondere, scrivanie da sistemare, favori da fare: tutto urgente, niente importante. Il tempo passa, la lista si svuota, e la cosa che contava davvero resta esattamente dove l'avevi lasciata.</p>
<p>Non è pigrizia. È una strategia, e funziona: finché sei occupata, non devi misurarti con quello che succederebbe se ti fermassi davvero a fare la cosa giusta. Il rischio si rimanda insieme al compito.</p>
<p>Il primo passo non è diventare più organizzata. È notare il momento esatto in cui scegli l'urgente al posto dell'importante, e chiederti cosa stai evitando di scoprire su te stessa fermandoti lì.</p>`,
      media: `<p>La procrastinazione si fa sentire, ma non governa tutto. In certi periodi, davanti a certi compiti, trovi mille cose da fare prima del previsto. In altri momenti riesci ad andare dritta al punto, senza deviazioni. Non è un tratto fisso: è una risposta che si attiva in condizioni precise.</p>
<p>Vale la pena guardare quando arriva. Di solito non compare davanti a qualsiasi compito, ma davanti a quello che ti espone di più.</p>
<p>Riconoscerla nel momento in cui si attiva è già buona parte del lavoro.</p>`,
      bassa: `<p>La procrastinazione è presente, ma in forma lieve. Capita, come capita a chiunque, di rimandare qualcosa di scomodo. Non sembra però un meccanismo che ti governa: nella maggior parte dei casi riesci a fare la cosa che conta senza troppe deviazioni.</p>
<p>Vale comunque la pena osservare le rare volte in cui succede: anche un pattern leggero ha qualcosa da dire su cosa stai evitando di affrontare.</p>`
    },
    mantras: [
      "Quando trovi mille cose urgenti, chiediti cosa stai rimandando davvero.",
      "L'urgente non è sempre importante. Quasi mai, in realtà.",
      "Il compito che eviti di più è di solito quello che conta di più."
    ]
  },
  perfezionismo: {
    name: "Perfezionismo",
    subtitle: "Non è ancora pronto",
    descriptions: {
      alta: `<p>Il perfezionismo non si presenta come ambizione vaga. Si presenta come una scadenza che continua a spostarsi, un altro giro di revisione, un dettaglio che ancora non torna. Mai abbastanza pronto, mai abbastanza buono. La barra si alza ogni volta che stai per raggiungerla.</p>
<p>Non è amore per la qualità. È un modo, molto sofisticato, per non dover mai mostrare qualcosa che possa essere giudicato. Finché lavori ancora su una cosa, nessuno può dire che non va bene: semplicemente, non l'hai ancora finita.</p>
<p>Il primo passo non è abbassare gli standard. È notare quando la revisione smette di migliorare il lavoro e comincia solo a rimandarne l'uscita.</p>`,
      media: `<p>Il perfezionismo si attiva in certi contesti, non in altri. Su alcune cose riesci a dire basta così, senza fatica. Su altre, quelle che contano di più o ti espongono di più, continui a rimandare l'uscita finché non è impeccabile, e impeccabile non arriva mai del tutto.</p>
<p>Vale la pena notare la differenza tra le cose che riesci a chiudere facilmente e quelle che non chiudi mai.</p>
<p>La differenza, di solito, dice più di quanto sembri.</p>`,
      bassa: `<p>Il perfezionismo è presente in forma lieve. Capita di rivedere un lavoro più volte del necessario, ma raramente ti impedisce di consegnarlo, pubblicarlo, mandarlo. Riesci, nella maggior parte dei casi, a distinguere tra ancora da migliorare e abbastanza buono.</p>
<p>Le volte in cui non riesci a farlo restano comunque un indizio utile su cosa, in quel momento, ti sembrava troppo rischioso da mostrare così com'era.</p>`
    },
    mantras: [
      "Non ancora pronto è una frase che puoi dire all'infinito.",
      "A un certo punto, finito conta più di perfetto.",
      "Mostrare qualcosa di imperfetto fa meno male di quanto pensi."
    ]
  },
  iperresponsabilita: {
    name: "Iperresponsabilità",
    subtitle: "Mi occupo di tutti, tranne che di me",
    descriptions: {
      alta: `<p>L'iperresponsabilità ha un'agenda piena, e quasi mai la tua. Rispondi prima alle richieste degli altri, sistemi i problemi che non ti competono, ti rendi disponibile prima ancora che venga chiesto. Generosità, la chiami. Ma è una generosità molto comoda: finché ti occupi degli altri, non devi occuparti di te.</p>
<p>Aiutare non è il problema. Il problema è quando diventa il modo sistematico di evitare quello che ti riguarda da vicino: una scelta, un'esposizione, una cosa che dipende solo da te e quindi può andare storta solo per colpa tua.</p>
<p>Il primo passo non è smettere di aiutare. È notare cosa stai evitando ogni volta che ti metti in coda dopo tutti gli altri.</p>`,
      media: `<p>L'iperresponsabilità si attiva in certe relazioni, non in tutte. Con alcune persone riesci a tenere il tuo spazio. Con altre, finisci sempre per occuparti tu, anche di cose che non ti spettano, anche quando non te lo chiede nessuno esplicitamente.</p>
<p>Vale la pena guardare con chi succede di più, e cosa hanno in comune quelle situazioni.</p>
<p>Spesso non è la persona. È il ruolo che ti sei assegnata.</p>`,
      bassa: `<p>L'iperresponsabilità è presente, ma in misura contenuta. Ti rendi disponibile, certo, ma generalmente riesci anche a riservarti spazio. Non sembra un meccanismo dominante.</p>
<p>Quando capita comunque, è un buon punto da osservare: cosa stavi evitando di affrontare in quel momento, occupandoti di qualcun altro.</p>`
    },
    mantras: [
      "Occuparsi di tutti è un modo elegante per non occuparsi di te.",
      "La tua lista delle priorità inizia da te, non finisce con te.",
      "Aiutare non è obbligatorio. È una scelta, anche quando sembra un dovere."
    ]
  },
  indecisione: {
    name: "Indecisione",
    subtitle: "Ancora un'informazione, poi scelgo",
    descriptions: {
      alta: `<p>L'indecisione non sembra indecisione. Sembra prudenza. Un altro parere, un'altra ricerca, un'altra opzione da valutare prima di chiudere. Sempre un'informazione in più tra te e la scelta, e quell'informazione non arriva mai a essere sufficiente.</p>
<p>Non è mancanza di criterio. È che scegliere significa chiudere tutte le altre strade, e finché non scegli, restano tutte ancora aperte. L'indecisione protegge quella sensazione di avere ancora tutto davanti.</p>
<p>Il primo passo non è raccogliere più dati. È notare quando le informazioni servono davvero, e quando servono solo a non doversi assumere la scelta.</p>`,
      media: `<p>L'indecisione si attiva su certe decisioni, non su tutte. Le cose piccole le chiudi senza fatica. Quelle che pesano di più, che ti espongono o ti vincolano, restano aperte più del necessario, in cerca di un'informazione che le renda definitive.</p>
<p>Vale la pena notare cosa hanno in comune le decisioni che rimandi di più.</p>
<p>Di solito, hanno in comune il fatto che ti riguardano da vicino.</p>`,
      bassa: `<p>L'indecisione è presente, ma in forma lieve. Su alcune scelte ti prendi più tempo del necessario, ma nella maggior parte dei casi arrivi comunque a una decisione in tempi ragionevoli.</p>
<p>Quando ti blocchi più del solito, vale la pena chiederti cosa rende quella scelta diversa dalle altre.</p>`
    },
    mantras: [
      "Più opzioni raccogli, meno urgente sembra scegliere.",
      "Nessuna informazione renderà la scelta priva di rischio.",
      "Decidere male è comunque meglio che non decidere mai."
    ]
  },
  overthinking: {
    name: "Overthinking",
    subtitle: "Ho capito tutto, non ho fatto niente",
    descriptions: {
      alta: `<p>L'overthinking sembra lavoro. È un pensiero dopo l'altro, un'ipotesi dopo l'altra, una versione e poi un'altra dello stesso scenario. Sembra analisi, sembra preparazione. Ma alla fine del giro, sei esattamente al punto di partenza: hai pensato tutto, e non hai fatto niente.</p>
<p>Pensare non è il problema. Il problema è quando il pensiero smette di portare a una decisione e diventa il modo per restare in un luogo sicuro, dove nessuna azione può ancora andare storta perché nessuna azione è ancora stata fatta.</p>
<p>Il primo passo non è pensare meno. È notare il momento esatto in cui il pensiero smette di essere utile e comincia solo a girare.</p>`,
      media: `<p>L'overthinking si attiva in certi momenti, non in modo costante. Davanti a certe situazioni riesci a decidere e andare avanti. Davanti ad altre, quelle che pesano di più, il pensiero comincia a girare in tondo, e fatichi a fermarlo.</p>
<p>Vale la pena guardare cosa hanno in comune i momenti in cui il pensiero si blocca su sé stesso.</p>
<p>Spesso è lì che il rischio sembra più grande.</p>`,
      bassa: `<p>L'overthinking è presente, ma in forma lieve. Capita di rigirare un pensiero più del necessario, ma di solito riesci ad arrivare comunque a una conclusione e a muoverti.</p>
<p>Le volte in cui resti bloccata più a lungo restano comunque un indizio su cosa, in quel momento, sentivi più rischioso da affrontare.</p>`
    },
    mantras: [
      "Pensare non è la stessa cosa che agire.",
      "Un pensiero in più non rende la decisione più sicura.",
      "A un certo punto, il pensiero deve fermarsi per lasciare spazio al fatto."
    ]
  }
};

const QUIZ_QUESTIONS = [
  {
    text: "Hai una cosa importante da fare oggi. Cosa succede di solito?",
    options: [
      { text: "La faccio, anche se mi scoccia.", pattern: null },
      { text: "Trovo dieci cose urgenti da fare prima.", pattern: "procrastinazione" },
      { text: "Continuo a sistemarla finché non è perfetta.", pattern: "perfezionismo" },
      { text: "Mi metto a disposizione di qualcun altro che ha bisogno.", pattern: "iperresponsabilita" },
      { text: "Cerco ancora informazioni prima di iniziare.", pattern: "indecisione" },
      { text: "La giro nella testa così tante volte che si consuma da sola.", pattern: "overthinking" }
    ]
  },
  {
    text: "Quando finisci un lavoro, come ti senti?",
    options: [
      { text: "Soddisfatta, e già con la testa al prossimo.", pattern: null },
      { text: "Sollevata di averlo tolto di mezzo.", pattern: "procrastinazione" },
      { text: "Convinta che potevo fare meglio.", pattern: "perfezionismo" },
      { text: "Più concentrata su come è andata agli altri che a me.", pattern: "iperresponsabilita" },
      { text: "Già a chiedermi se ho scelto bene.", pattern: "indecisione" },
      { text: "A ripensare ogni dettaglio invece di lasciarlo andare.", pattern: "overthinking" }
    ]
  },
  {
    text: "Una decisione importante ti aspetta. Come ti muovi?",
    options: [
      { text: "Valuto, decido, e se sbaglio pazienza.", pattern: null },
      { text: "Trovo altro da fare nel frattempo.", pattern: "procrastinazione" },
      { text: "Aspetto la condizione perfetta per deciderla.", pattern: "perfezionismo" },
      { text: "Chiedo prima a tutti cosa ne pensano, mettendo il mio parere per ultimo.", pattern: "iperresponsabilita" },
      { text: "Raccolgo altre opinioni, ancora una, ancora un'altra.", pattern: "indecisione" },
      { text: "La rigiro nella testa, ipotesi su ipotesi, senza arrivare in fondo.", pattern: "overthinking" }
    ]
  },
  {
    text: "Qualcuno ti chiede un favore in un momento già pieno. Cosa fai?",
    options: [
      { text: "Dico no se non ho tempo, anche se mi costa.", pattern: null },
      { text: "Accetto, è più facile che spiegare perché non posso.", pattern: "procrastinazione" },
      { text: "Rimando la mia cosa per fare bene anche questa.", pattern: "perfezionismo" },
      { text: "Dico sì prima ancora di pensarci.", pattern: "iperresponsabilita" },
      { text: "Chiedo tempo per pensarci, e intanto non rispondo a nessuno dei due.", pattern: "indecisione" },
      { text: "Passo la sera a chiedermi se ho fatto la scelta giusta.", pattern: "overthinking" }
    ]
  },
  {
    text: "Nel corpo, dove senti la tensione quando rimandi qualcosa?",
    options: [
      { text: "Sento la tensione e la lascio passare, senza farne un dramma.", pattern: null },
      { text: "Nello stomaco, una sensazione di peso che mi fa cercare altro da fare.", pattern: "procrastinazione" },
      { text: "Nelle spalle e nel collo, come se dovessi tenere tutto sotto controllo.", pattern: "perfezionismo" },
      { text: "Nel petto, come se dovessi reggere anche il carico di altri.", pattern: "iperresponsabilita" },
      { text: "Nella testa, un brusio che non si ferma.", pattern: "indecisione" },
      { text: "Negli occhi, stanca di rigirare le stesse cose.", pattern: "overthinking" }
    ]
  },
  {
    text: "C'è qualcosa che hai quasi finito e a cui tieni. Cosa ti frena dal dire che è pronto?",
    options: [
      { text: "Nulla, so valutare obiettivamente le cose.", pattern: null },
      { text: "Trovo altro di urgente che richiede attenzione prima.", pattern: "procrastinazione" },
      { text: "Manca ancora qualcosa, non è abbastanza.", pattern: "perfezionismo" },
      { text: "Ho passato il tempo a occuparmi delle cose di altri.", pattern: "iperresponsabilita" },
      { text: "Non riesco a scegliere la versione definitiva.", pattern: "indecisione" },
      { text: "Ho già immaginato troppi scenari su come andrà.", pattern: "overthinking" }
    ]
  },
  {
    text: "Come ti senti quando qualcuno ti chiede un parere netto?",
    options: [
      { text: "Lo do anche se può non piacere.", pattern: null },
      { text: "Trovo il modo di rimandare la risposta.", pattern: "procrastinazione" },
      { text: "Preferisco non sbagliare, quindi ci penso a lungo.", pattern: "perfezionismo" },
      { text: "Chiedo prima cosa pensa lei o lui.", pattern: "iperresponsabilita" },
      { text: "Mi viene difficile scegliere una sola opzione.", pattern: "indecisione" },
      { text: "Comincio a vedere troppe sfumature per dare una risposta secca.", pattern: "overthinking" }
    ]
  },
  {
    text: "Devi scrivere una mail importante e non sai bene da dove iniziare. Cosa fai?",
    options: [
      { text: "La scrivo, magari non perfetta, e la invio.", pattern: null },
      { text: "Rispondo prima a tutte le altre mail, quella la lascio per dopo.", pattern: "procrastinazione" },
      { text: "Scrivo e riscrivo la prima riga decine di volte.", pattern: "perfezionismo" },
      { text: "Prima penso a cosa serve agli altri, la mia resta in fondo.", pattern: "iperresponsabilita" },
      { text: "Apro una bozza, la chiudo, ne apro un'altra.", pattern: "indecisione" },
      { text: "Penso a tutti i modi in cui potrebbe essere fraintesa, prima ancora di scriverla.", pattern: "overthinking" }
    ]
  },
  {
    text: "Hai sbagliato qualcosa di piccolo. Cosa succede dopo?",
    options: [
      { text: "Mi scoccia, lo sistemo, chiudo lì.", pattern: null },
      { text: "Trovo altro da fare per non doverci pensare.", pattern: "procrastinazione" },
      { text: "Ci penso a lungo, voglio capire dove ho sbagliato esattamente.", pattern: "perfezionismo" },
      { text: "Mi scuso anche più del necessario.", pattern: "iperresponsabilita" },
      { text: "Mi chiedo se avrei dovuto fare diversamente fin dall'inizio.", pattern: "indecisione" },
      { text: "Lo ripercorro più e più volte nella testa.", pattern: "overthinking" }
    ]
  },
  {
    text: "Cosa ti fa più paura, davanti a una cosa nuova da iniziare?",
    options: [
      { text: "Mi spaventa, ma parto lo stesso.", pattern: null },
      { text: "Che diventi un'altra cosa rimandata.", pattern: "procrastinazione" },
      { text: "Che il risultato non sia abbastanza buono.", pattern: "perfezionismo" },
      { text: "Che tolga tempo a chi ho intorno.", pattern: "iperresponsabilita" },
      { text: "Che scelga la strada sbagliata.", pattern: "indecisione" },
      { text: "Che ci pensi troppo e non parta mai.", pattern: "overthinking" }
    ]
  },
  {
    text: "Quando guardi la tua lista di cose da fare, cosa provi?",
    options: [
      { text: "La guardo e scelgo da dove iniziare, senza farmi paralizzare.", pattern: null },
      { text: "Mi sento sopraffatta e finisco per fare altro.", pattern: "procrastinazione" },
      { text: "Mi concentro su quella che richiede più cura, anche se non è la priorità.", pattern: "perfezionismo" },
      { text: "Noto soprattutto le cose che riguardano altri.", pattern: "iperresponsabilita" },
      { text: "Fatico a scegliere da dove iniziare.", pattern: "indecisione" },
      { text: "Comincio a pensare a tutto quello che potrebbe andare storto.", pattern: "overthinking" }
    ]
  },
  {
    text: "Hai mai rinunciato a qualcosa che volevi davvero?",
    options: [
      { text: "Sì, ma per scelta, non per blocco.", pattern: null },
      { text: "Sì, perché ho continuato a rimandarla.", pattern: "procrastinazione" },
      { text: "Sì, perché non mi sembrava ancora abbastanza pronta.", pattern: "perfezionismo" },
      { text: "Sì, perché ho dato priorità a qualcun altro.", pattern: "iperresponsabilita" },
      { text: "Sì, perché non riuscivo a scegliere tra le opzioni.", pattern: "indecisione" },
      { text: "Sì, perché l'ho analizzata così tanto da perdere la spinta.", pattern: "overthinking" }
    ]
  },
  {
    text: "Come reagisci quando qualcosa non va come previsto?",
    options: [
      { text: "Mi arrabbio, lo dico, e poi vado avanti.", pattern: null },
      { text: "Trovo altro su cui concentrarmi nel frattempo.", pattern: "procrastinazione" },
      { text: "Voglio capire cosa ho sbagliato per non ripeterlo.", pattern: "perfezionismo" },
      { text: "Mi chiedo se ho deluso qualcuno.", pattern: "iperresponsabilita" },
      { text: "Mi blocco, non so più quale direzione prendere.", pattern: "indecisione" },
      { text: "Ripenso ogni passaggio cercando dove è andato storto.", pattern: "overthinking" }
    ]
  },
  {
    text: "C'è una frase che ti dici spesso, in momenti come questi?",
    options: [
      { text: "\"Vabbè, pazienza.\"", pattern: null },
      { text: "\"Lo faccio dopo, adesso ho altro.\"", pattern: "procrastinazione" },
      { text: "\"Non è ancora abbastanza.\"", pattern: "perfezionismo" },
      { text: "\"Tanto ci penso io.\"", pattern: "iperresponsabilita" },
      { text: "\"Non so cosa sia meglio.\"", pattern: "indecisione" },
      { text: "\"Devo pensarci ancora un po'.\"", pattern: "overthinking" }
    ]
  },
  {
    text: "Se potessi cambiare una sola cosa del tuo modo di funzionare, quale sarebbe?",
    options: [
      { text: "Niente che mi venga in mente subito.", pattern: null },
      { text: "Smettere di rimandare le cose che contano.", pattern: "procrastinazione" },
      { text: "Decidere che basta così, anche se non è perfetto.", pattern: "perfezionismo" },
      { text: "Mettermi prima nella lista.", pattern: "iperresponsabilita" },
      { text: "Fidarmi della prima scelta.", pattern: "indecisione" },
      { text: "Smettere di girare in tondo nella testa.", pattern: "overthinking" }
    ]
  }
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

// Token da URL — salvato prima del login se serve
let pendingToken = null;
let pendingProduct = null;

// Stato quiz "Quello che fai invece"
let quizQ = 0;
let quizAnswers = [];
let quizShuffled = null;

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
  g('btn-export').classList.toggle('hidden', name !== 'view-product');
  const showLibBtn = name === 'view-product' || name === 'view-section';
  g('btn-library-fixed').classList.toggle('hidden', !showLibBtn);
}

function goBack() {
  if (hist.length <= 1) return;
  hist.pop();
  const prev = hist[hist.length - 1];
  VIEWS.forEach(v => g(v).classList.add('hidden'));
  g(prev).classList.remove('hidden');
  window.scrollTo(0, 0);
  g('btn-back').classList.toggle('hidden', hist.length <= 1);
  g('btn-export').classList.toggle('hidden', prev !== 'view-product');
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
   FLUSSO TOKEN DA URL
   Gestisce ?token=UUID&product=product-id
═══════════════════════════════════════════════ */
function readTokenFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const token = params.get('token');
  const product = params.get('product');
  if (token && product) {
    pendingToken = token;
    pendingProduct = product;
  }
}

async function handleTokenFlow() {
  if (!pendingToken || !pendingProduct) return;

  // Pulisce subito l'URL — il token non deve restare visibile
  history.replaceState({}, document.title, window.location.pathname);

  try {
    // Verifica token: esiste e non è ancora usato
    const { data: row, error } = await supa
      .from('unlock_codes')
      .select('id, token, product_id, used_at')
      .eq('token', pendingToken)
      .eq('product_id', pendingProduct)
      .single();

    if (error || !row) {
      toast('Link non valido o già utilizzato.');
      pendingToken = null;
      pendingProduct = null;
      return;
    }

    if (row.used_at !== null) {
      toast('Questo link è già stato usato. Accedi normalmente alla tua libreria.');
      pendingToken = null;
      pendingProduct = null;
      return;
    }

    // Sblocca il percorso per l'utente
    await supa.from('user_products').upsert(
      { user_id: me.id, product_id: pendingProduct, unlocked_at: new Date().toISOString() },
      { onConflict: 'user_id,product_id' }
    );

    // Brucia il token — usato_at impostato
    await supa
      .from('unlock_codes')
      .update({ used_at: new Date().toISOString() })
      .eq('id', row.id);

    if (!opened.includes(pendingProduct)) {
      opened.push(pendingProduct);
    }

    toast('Percorso sbloccato. Benvenuta.');

    // Apre direttamente il percorso appena sbloccato
    const pid = pendingProduct;
    pendingToken = null;
    pendingProduct = null;

    renderLibrary();
    openProduct(pid);

  } catch (e) {
    console.error('handleTokenFlow:', e);
    toast('Errore durante lo sblocco. Riprova o contatta il supporto.');
    pendingToken = null;
    pendingProduct = null;
  }
}

/* ═══════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════ */
async function boot() {
  // Legge il token dall'URL prima di qualsiasi altra cosa
  readTokenFromUrl();

  showLoading();
  try {
    supa = window.supabase.createClient(SUPA_URL, SUPA_KEY);
  } catch(e) { showAuth(); return; }

  try {
    const { data } = await supa.auth.getSession();
    if (data && data.session && data.session.user) {
      await enterApp(data.session.user);
    } else {
      // Se c'è un token pendente mostra auth con messaggio
      if (pendingToken) {
        showAuth();
        setMsg('Accedi o crea un account per sbloccare il tuo percorso.', 'success');
      } else {
        showAuth();
      }
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

  // Se c'è un token pendente lo gestisce subito dopo l'ingresso
  if (pendingToken) {
    await handleTokenFlow();
  }
}

function leaveApp() {
  me = null; ans = {}; checkedItems = {}; opened = [];
  prodId = null; secIdx = null; hist = [];
  pendingToken = null; pendingProduct = null;
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
  clearMsg();
  const { error } = await supa.auth.resetPasswordForEmail(email, {
    redirectTo: 'https://gildaossani.github.io/gilda-app/'
  });
  if (error) {
    setMsg(xlErr(error.message));
  } else {
    setMsg('Controlla la tua email — ti abbiamo mandato un codice a 6 cifre.', 'success');
    showOtpForm(email);
  }
});

function showOtpForm(email) {
  const formLogin = g('form-login');
  formLogin.innerHTML = `
    <div class="auth-field">
      <label class="auth-label">Codice ricevuto via email</label>
      <input type="text" id="otp-code" class="auth-input" placeholder="123456" maxlength="8" autocomplete="one-time-code" style="letter-spacing:0.2em;text-align:center;" />
    </div>
    <div class="auth-field">
      <label class="auth-label">Nuova password</label>
      <input type="password" id="otp-password" class="auth-input" placeholder="min. 6 caratteri" />
    </div>
    <button id="btn-otp-confirm" class="btn-auth-submit">Salva nuova password</button>
    <div class="auth-link-row">
      <a id="link-back-login" class="auth-link" href="#">Torna al login</a>
    </div>
  `;
  g('btn-otp-confirm').addEventListener('click', async () => {
    const code = g('otp-code').value.trim();
    const pwd = g('otp-password').value;
    clearMsg();
    if (!code || code.length < 6) { setMsg('Inserisci il codice a 6 cifre.'); return; }
    if (!pwd || pwd.length < 6) { setMsg('La password deve avere almeno 6 caratteri.'); return; }
    g('btn-otp-confirm').disabled = true;
    g('btn-otp-confirm').textContent = '…';
    try {
      const { error } = await supa.auth.verifyOtp({ email, token: code, type: 'recovery' });
      if (error) throw error;
      const { error: updErr } = await supa.auth.updateUser({ password: pwd });
      if (updErr) throw updErr;
      setMsg('Password aggiornata. Accedi con la nuova password.', 'success');
      setTimeout(() => location.reload(), 2000);
    } catch (err) {
      setMsg(err.message || 'Codice non valido. Riprova.');
      g('btn-otp-confirm').disabled = false;
      g('btn-otp-confirm').textContent = 'Salva nuova password';
    }
  });
  g('link-back-login').addEventListener('click', e => {
    e.preventDefault();
    location.reload();
  });
}

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
g('btn-library-fixed').addEventListener('click', () => { renderLibrary(); showView('view-library'); });
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
   UNLOCK (codice manuale — Il Meccanismo gratuito)
   Nota: i percorsi a pagamento ora arrivano via token URL.
   Questo form resta per GILDA-WELCOME e codici omaggio.
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
    // Cerca per colonna token (rinominata da code)
    const { data: row, error } = await supa
      .from('unlock_codes')
      .select('*')
      .eq('token', code)
      .single();

    if (error || !row) { showUM('Codice non valido.', 'error'); return; }

    const isWelcome = code.startsWith('GILDA-WELCOME');

    // I codici non-welcome vengono bruciati al primo uso
    if (!isWelcome && row.used_at !== null) {
      showUM('Codice già usato.', 'error'); return;
    }

    if (isOpen(row.product_id)) { showUM('Prodotto già in libreria.', 'error'); return; }

    if (!isWelcome) {
      await supa
        .from('unlock_codes')
        .update({ used_at: new Date().toISOString() })
        .eq('id', row.id);
    }

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
          : `<div class="card-locked-buttons">
              <div class="card-locked-badge" data-unlock="true"><svg class="lock-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg><span class="card-locked-text">Ho già un codice</span></div>
              ${p.kofiUrl ? `<a href="${p.kofiUrl}" target="_blank" class="card-kofi-btn">Acquista su Ko-fi — ${p.price}</a>` : ''}
            </div>`
        }
      </div>
      ${!unlk ? `<div class="card-preview"><div class="card-preview-title">Cosa trovi dentro</div><div class="card-preview-sections">${prev}</div></div>` : ''}
    `;
    grid.appendChild(div);
  });

  grid.querySelectorAll('[data-unlock="true"]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const unlockInput = g('unlock-input');
      unlockInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => unlockInput.focus(), 400);
    });
  });
}

/* ═══════════════════════════════════════════════
   QUIZ INLINE — "Quello che fai invece"
   Prima parte del prodotto Il Meccanismo.
   Stile scoped sotto .qz-*, iniettato una sola volta.
═══════════════════════════════════════════════ */
function ensureQuizStyles() {
  if (document.getElementById('qz-styles')) return;
  const style = document.createElement('style');
  style.id = 'qz-styles';
  style.textContent = `
    .qz-wrap { background: #FDFBF7; border: 1px solid rgba(200,169,110,0.35); border-radius: 10px; padding: 32px 28px; margin-bottom: 28px; position: relative; overflow: hidden; }
    .qz-eyebrow { font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: #C8A96E; margin-bottom: 14px; }
    .qz-title { font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: 26px; color: #1A1814; margin-bottom: 10px; line-height: 1.2; }
    .qz-title em { font-style: italic; color: #C8A96E; }
    .qz-intro-text { font-size: 14.5px; line-height: 1.6; color: #5A534C; margin-bottom: 20px; max-width: 480px; }
    .qz-btn { display: inline-block; background: #C8A96E; color: #FDFBF7; font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 12.5px; letter-spacing: 1px; text-transform: uppercase; padding: 13px 30px; border: none; border-radius: 26px; cursor: pointer; }
    .qz-btn:hover { background: #8C7240; }
    .qz-note { font-size: 12px; color: #9A9087; font-style: italic; font-family: 'Cormorant Garamond', serif; margin-top: 14px; }
    .qz-progress-wrap { display: flex; align-items: center; gap: 14px; margin-bottom: 30px; }
    .qz-progress-track { flex: 1; height: 2px; background: #E1DDD5; border-radius: 2px; overflow: hidden; }
    .qz-progress-fill { height: 100%; background: #C8A96E; transition: width 0.4s ease; }
    .qz-progress-label { font-size: 11px; color: #9A9087; white-space: nowrap; font-weight: 500; }
    .qz-q-number { font-family: 'DM Sans', sans-serif; font-size: 10.5px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #DFC898; margin-bottom: 14px; }
    .qz-q-text { font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: 21px; line-height: 1.35; color: #1A1814; margin-bottom: 22px; }
    .qz-options { list-style: none; display: flex; flex-direction: column; gap: 10px; margin: 0; padding: 0; }
    .qz-option { display: flex; align-items: flex-start; gap: 12px; padding: 14px 16px; background: #fff; border: 1px solid transparent; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
    .qz-option:hover { border-color: #DFC898; background: #EDE7DC; }
    .qz-option.qz-selected { border-color: #C8A96E; background: #EFE2D6; }
    .qz-marker { flex-shrink: 0; width: 17px; height: 17px; border: 1px solid #DFC898; border-radius: 50%; margin-top: 1px; }
    .qz-option.qz-selected .qz-marker { background: #C8A96E; border-color: #C8A96E; }
    .qz-opt-text { font-size: 14px; line-height: 1.5; color: #5A534C; }
    .qz-option.qz-selected .qz-opt-text { color: #1A1814; }
    .qz-nav { display: flex; justify-content: space-between; align-items: center; margin-top: 26px; }
    .qz-back { background: none; border: none; font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; color: #9A9087; cursor: pointer; }
    .qz-back:disabled { opacity: 0; pointer-events: none; }
    .qz-result-label { font-size: 10px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #C8A96E; margin-bottom: 10px; }
    .qz-result-name { font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: 32px; color: #1A1814; line-height: 1.1; }
    .qz-result-sub { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 16px; color: #C8A96E; margin-top: 6px; }
    .qz-result-intensity { margin-top: 10px; font-size: 12px; color: #9A9087; font-style: italic; font-family: 'Cormorant Garamond', serif; }
    .qz-result-body { font-family: 'Cormorant Garamond', serif; font-size: 16px; line-height: 1.65; color: #1A1814; margin: 20px 0; }
    .qz-result-body p { margin-bottom: 1.1em; }
    .qz-mantras { background: #fff; border-left: 2px solid #DFC898; padding: 20px 20px 20px 24px; margin: 22px 0; }
    .qz-mantra-title { font-size: 9.5px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #C8A96E; margin-bottom: 14px; font-family: 'DM Sans', sans-serif; }
    .qz-mantra-item { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 15px; line-height: 1.5; color: #5A534C; margin-bottom: 10px; padding-left: 16px; position: relative; }
    .qz-mantra-item::before { content: '—'; position: absolute; left: 0; color: #DFC898; font-style: normal; }
    .qz-restart { background: none; border: none; font-size: 10.5px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; color: #9A9087; cursor: pointer; font-family: 'DM Sans', sans-serif; margin-top: 6px; }
    .qz-loading { text-align: center; padding: 40px 0; font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 18px; color: #5A534C; }
  `;
  document.head.appendChild(style);
}

function quizResultKey(pid) { return aKey(pid, 'quiztest', 'primary'); }

function buildQuizBlock(pid) {
  ensureQuizStyles();
  const wrap = document.createElement('div');
  wrap.className = 'qz-wrap';
  wrap.id = 'qz-wrap';

  const savedPrimary = ans[quizResultKey(pid)];
  if (savedPrimary && QUIZ_PATTERNS[savedPrimary]) {
    renderQuizRecap(wrap, pid, savedPrimary);
  } else {
    renderQuizIntro(wrap, pid);
  }
  return wrap;
}

function renderQuizIntro(wrap, pid) {
  wrap.innerHTML = `
    <div class="qz-eyebrow">Prima di iniziare</div>
    <div class="qz-title">Quello che fai <em>invece</em></div>
    <p class="qz-intro-text">C'è sempre una cosa che conta, e un modo elegante in cui non la fai. Quindici domande per nominare la tua forma specifica di autosabotaggio, quella che usi più spesso.</p>
    <button class="qz-btn" id="qz-btn-start">Inizia il test</button>
    <p class="qz-note">Circa 5 minuti. Nessuna risposta giusta o sbagliata.</p>
  `;
  wrap.querySelector('#qz-btn-start').addEventListener('click', () => startQuizInline(wrap, pid));
}

function renderQuizRecap(wrap, pid, primaryKey) {
  const p = QUIZ_PATTERNS[primaryKey];
  wrap.innerHTML = `
    <div class="qz-eyebrow">Quello che fai invece</div>
    <div class="qz-result-label">Il tuo pattern</div>
    <div class="qz-result-name">${p.name}</div>
    <div class="qz-result-sub">${p.subtitle}</div>
    <button class="qz-restart" id="qz-btn-restart">Rifai il test</button>
  `;
  wrap.querySelector('#qz-btn-restart').addEventListener('click', () => startQuizInline(wrap, pid));
}

function shuffleQz(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuizInline(wrap, pid) {
  quizQ = 0;
  quizAnswers = [];
  quizShuffled = QUIZ_QUESTIONS.map(q => shuffleQz(q.options));
  renderQuizQuestion(wrap, pid);
}

function renderQuizQuestion(wrap, pid) {
  const q = QUIZ_QUESTIONS[quizQ];
  const opts = quizShuffled[quizQ];
  const total = QUIZ_QUESTIONS.length;

  wrap.innerHTML = `
    <div class="qz-progress-wrap">
      <div class="qz-progress-track"><div class="qz-progress-fill" style="width:${(quizQ / total) * 100}%"></div></div>
      <span class="qz-progress-label">${quizQ + 1} / ${total}</span>
    </div>
    <div class="qz-q-number">Domanda ${quizQ + 1}</div>
    <div class="qz-q-text">${q.text}</div>
    <ul class="qz-options">
      ${opts.map((opt, i) => {
        const patternVal = opt.pattern === null ? '__neutral__' : opt.pattern;
        const isSelected = quizAnswers[quizQ] === patternVal;
        return `<li class="qz-option ${isSelected ? 'qz-selected' : ''}" data-pattern="${patternVal}">
          <div class="qz-marker"></div>
          <span class="qz-opt-text">${opt.text}</span>
        </li>`;
      }).join('')}
    </ul>
    <div class="qz-nav">
      <button class="qz-back" id="qz-btn-back" ${quizQ === 0 ? 'disabled' : ''}>Indietro</button>
      <button class="qz-btn" id="qz-btn-next" style="${quizAnswers[quizQ] !== undefined ? '' : 'display:none'}">${quizQ === total - 1 ? 'Scopri il tuo pattern' : 'Continua'}</button>
    </div>
  `;

  wrap.querySelectorAll('.qz-option').forEach(el => {
    el.addEventListener('click', () => {
      wrap.querySelectorAll('.qz-option').forEach(o => o.classList.remove('qz-selected'));
      el.classList.add('qz-selected');
      quizAnswers[quizQ] = el.dataset.pattern;
      const nextBtn = wrap.querySelector('#qz-btn-next');
      nextBtn.style.display = 'inline-block';
    });
  });

  wrap.querySelector('#qz-btn-back').addEventListener('click', () => {
    if (quizQ > 0) { quizQ--; renderQuizQuestion(wrap, pid); }
  });

  wrap.querySelector('#qz-btn-next').addEventListener('click', () => {
    if (quizAnswers[quizQ] === undefined) return;
    if (quizQ < total - 1) { quizQ++; renderQuizQuestion(wrap, pid); }
    else { finishQuizInline(wrap, pid); }
  });
}

function finishQuizInline(wrap, pid) {
  wrap.innerHTML = `<div class="qz-loading">Sto leggendo il pattern…</div>`;
  setTimeout(() => {
    const scores = { procrastinazione: 0, perfezionismo: 0, iperresponsabilita: 0, indecisione: 0, overthinking: 0 };
    quizAnswers.forEach(pat => { if (pat && pat !== '__neutral__' && scores[pat] !== undefined) scores[pat]++; });

    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const primaryKey = sorted[0][0];
    const primaryScore = sorted[0][1];
    const total = QUIZ_QUESTIONS.length;
    const pct = primaryScore / total;

    let intensity;
    if (pct >= 0.4) intensity = 'alta';
    else if (pct >= 0.2) intensity = 'media';
    else intensity = 'bassa';

    const intensityLabel = { alta: 'Molto presente', media: 'Moderatamente presente', bassa: 'Presente in forma lieve' }[intensity];
    const primary = QUIZ_PATTERNS[primaryKey];

    // Salva il risultato — persistente, come le altre risposte del prodotto
    saveField(quizResultKey(pid), primaryKey);

    wrap.innerHTML = `
      <div class="qz-result-label">La tua forma di autosabotaggio</div>
      <div class="qz-result-name">${primary.name}</div>
      <div class="qz-result-sub">${primary.subtitle}</div>
      <div class="qz-result-intensity">${intensityLabel}</div>
      <div class="qz-result-body">${primary.descriptions[intensity]}</div>
      <div class="qz-mantras">
        <div class="qz-mantra-title">Tre cose da notare</div>
        ${primary.mantras.map(m => `<div class="qz-mantra-item">${m}</div>`).join('')}
      </div>
      <button class="qz-restart" id="qz-btn-restart2">Rifai il test</button>
    `;
    wrap.querySelector('#qz-btn-restart2').addEventListener('click', () => startQuizInline(wrap, pid));
  }, 1200);
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

  // Il Meccanismo apre con il test "Quello che fai invece"
  if (pid === 'autosabotaggio') {
    list.appendChild(buildQuizBlock(pid));
  }

  if (p.intro) {
    const introCard = document.createElement('div');
    introCard.className = 'intro-card';
    const bqLines = p.intro.blockquote.split('\n').map(l => `<p>${l}</p>`).join('');
    const bodyParas = (p.intro.paragraphs || []).map(par => `<p class="intro-card-para">${par}</p>`).join('');
    introCard.innerHTML = `
      <div class="intro-card-eyebrow">Prima di iniziare</div>
      <div class="intro-card-title">${p.intro.title}</div>
      <div class="intro-card-divider"></div>
      <div class="intro-card-blockquote">${bqLines}</div>
      <div class="intro-card-body">${bodyParas}</div>
      <div class="intro-card-sig">${p.intro.signature}</div>
    `;
    list.appendChild(introCard);
  }

  if (p.instructions) {
    const instrCard = document.createElement('div');
    instrCard.className = 'instructions-card';
    const items = p.instructions.items.map(item => `
      <div class="instr-item">
        <p class="instr-item-label">${item.label}</p>
        <p class="instr-item-text">${item.text}</p>
      </div>
    `).join('');
    instrCard.innerHTML = `
      <div class="instr-eyebrow">Istruzioni</div>
      <div class="instr-title">${p.instructions.title}</div>
      <div class="instr-divider"></div>
      <div class="instr-grid">${items}</div>
    `;
    list.appendChild(instrCard);
  }

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
  const alreadyInSection = hist.length > 0 && hist[hist.length - 1] === 'view-section';
  if (alreadyInSection) {
    renderSection(pid, idx);
    window.scrollTo(0, 0);
  } else {
    renderSection(pid, idx);
    showView('view-section');
  }
}

function renderSection(pid, idx) {
  const p = getProd(pid); if (!p) return;
  const s = p.sections[idx]; if (!s) return;

  const bgClass = openerBgClass(s.openerBg);
  const header = g('section-header');
  header.className = 'section-opener ' + bgClass;
  header.innerHTML = `
    <div class="section-number-bg">${s.number}</div>
    <span class="section-opener-label">Sezione ${romanToWord(s.number)}</span>
    <h2 class="section-opener-title">${s.name}.</h2>
    <div class="section-opener-divider"></div>
    <p class="section-opener-intro">${s.openerIntro || ''}</p>
    ${s.intro ? `<p class="section-opener-body">${s.intro}</p>` : ''}
  `;

  const list = g('questions-list');
  list.innerHTML = '';

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

  if (s.quote) {
    const q = document.createElement('div');
    q.className = 'section-quote';
    q.textContent = s.quote;
    list.appendChild(q);
  }

  if (s.editorialBreak && idx < p.sections.length - 1) {
    const nextSec = p.sections[idx + 1];
    const eb = document.createElement('div');
    eb.className = 'editorial-break';
    eb.innerHTML = `
      <div class="editorial-break-inner">
        <div class="editorial-quote-mark">"</div>
        <p class="editorial-quote-text">${s.quote}</p>
        <div class="editorial-divider"></div>
        <p class="editorial-continue">Continua nella sezione ${idx + 2}</p>
      </div>
    `;
    list.appendChild(eb);
  }

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

  if (s.final) {
    const final = document.createElement('div');
    final.className = 'section-final';
    final.innerHTML = `
      <div class="final-label">Gilda Ossani</div>
      <div class="final-title">${s.final.title}</div>
      <div class="final-divider"></div>
      <div class="final-text">${s.final.text}</div>
      <div class="final-sig">${s.final.signature}</div>
    `;
    list.appendChild(final);
  }

  const btnPrev = g('btn-prev-section');
  const btnNext = g('btn-next-section');
  btnPrev.disabled = idx === 0;
  btnNext.disabled = idx === p.sections.length - 1;
  btnPrev.onclick = () => { if (secIdx > 0) { secIdx--; renderSection(pid, secIdx); window.scrollTo(0,0); } };
  btnNext.onclick = () => { if (secIdx < p.sections.length - 1) { secIdx++; renderSection(pid, secIdx); window.scrollTo(0,0); } };
}

function openerBgClass(bg) {
  const map = { terracotta: 'opener--terracotta', beige: 'opener--beige', dark: 'opener--dark', cipria: 'opener--cipria' };
  return map[bg] || 'opener--dark';
}

function romanToWord(r) {
  const map = { 'I': 'uno', 'II': 'due', 'III': 'tre', 'IV': 'quattro' };
  return map[r] || r;
}

/* ═══════════════════════════════════════════════
   EXPORT
═══════════════════════════════════════════════ */
g('btn-export').addEventListener('click', () => {
  const p = getProd(prodId); if (!p) return;

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

  const PAGE_W = 210;
  const PAGE_H = 297;
  const MARGIN = 18;
  const CONTENT_W = PAGE_W - MARGIN * 2;
  const COLOR_INK = [45, 45, 45];
  const COLOR_MUTED = [154, 142, 130];
  const COLOR_RULE = [232, 226, 216];
  const COLOR_GOLD = [180, 140, 80];

  let y = MARGIN;

  function checkPage(needed = 10) {
    if (y + needed > PAGE_H - MARGIN) {
      doc.addPage();
      y = MARGIN;
      drawPageFooter();
    }
  }

  function drawPageFooter() {
    const pageNum = doc.internal.getCurrentPageInfo().pageNumber;
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7);
    doc.setTextColor(...COLOR_MUTED);
    doc.text('— Gilda', MARGIN, PAGE_H - 10);
    doc.text(String(pageNum), PAGE_W - MARGIN, PAGE_H - 10, { align: 'right' });
  }

  function rule(color = COLOR_RULE) {
    doc.setDrawColor(...color);
    doc.setLineWidth(0.2);
    doc.line(MARGIN, y, PAGE_W - MARGIN, y);
    y += 4;
  }

  function addText(text, opts = {}) {
    const {
      size = 10, style = 'normal', color = COLOR_INK,
      indent = 0, lineH = 5, maxW = CONTENT_W
    } = opts;
    doc.setFont('helvetica', style);
    doc.setFontSize(size);
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(text, maxW - indent);
    lines.forEach(line => {
      checkPage(lineH + 1);
      doc.text(line, MARGIN + indent, y);
      y += lineH;
    });
  }

  // ── COPERTINA ──────────────────────────────────
  // Barra oro in cima
  doc.setFillColor(...COLOR_GOLD);
  doc.rect(0, 0, PAGE_W, 3, 'F');

  y = 40;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...COLOR_MUTED);
  doc.text('PERCORSO · GILDA OSSANI', MARGIN, y);
  y += 10;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(26);
  doc.setTextColor(...COLOR_INK);
  doc.text(p.title, MARGIN, y);
  y += 8;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(11);
  doc.setTextColor(...COLOR_MUTED);
  const descLines = doc.splitTextToSize(p.description, CONTENT_W);
  descLines.forEach(l => { doc.text(l, MARGIN, y); y += 5; });

  y += 6;
  doc.setDrawColor(...COLOR_GOLD);
  doc.setLineWidth(0.5);
  doc.line(MARGIN, y, MARGIN + 36, y);
  y += 10;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...COLOR_MUTED);
  doc.text(`Esportato il ${new Date().toLocaleDateString('it-IT')}`, MARGIN, y);

  drawPageFooter();

  // ── SEZIONI ────────────────────────────────────
  p.sections.forEach((s) => {
    doc.addPage();
    y = MARGIN;

    // Barra oro in cima ad ogni pagina sezione
    doc.setFillColor(...COLOR_GOLD);
    doc.rect(0, 0, PAGE_W, 2, 'F');
    y += 4;

    // Intestazione sezione
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(...COLOR_MUTED);
    doc.text(`SEZIONE ${s.number} — ${p.title.toUpperCase()}`, MARGIN, y);
    y += 7;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(...COLOR_INK);
    doc.text(s.name, MARGIN, y);
    y += 6;

    rule(COLOR_RULE);

    drawPageFooter();

    // Domande
    (s.questions || []).forEach(q => {
      const k = aKey(p.id, s.id, q.id);
      const risposta = (ans[k] || '').trim();

      checkPage(18);

      addText(q.label, { size: 7.5, style: 'normal', color: COLOR_MUTED, lineH: 4 });
      y += 1;

      if (risposta) {
        addText(risposta, { size: 10, style: 'normal', color: COLOR_INK, indent: 0, lineH: 5 });
      } else {
        addText('—', { size: 10, style: 'italic', color: [200, 190, 180], lineH: 5 });
      }

      y += 3;
      rule(COLOR_RULE);
    });

    // Sintesi
    if (s.synthesis) {
      checkPage(14);
      y += 2;
      addText(s.synthesis.title, { size: 8, style: 'bold', color: COLOR_MUTED, lineH: 4.5 });
      y += 2;

      s.synthesis.fields.forEach(f => {
        const k = aKey(p.id, s.id, f.id);
        const risposta = (ans[k] || '').trim();
        checkPage(14);
        addText(f.label, { size: 7.5, style: 'italic', color: COLOR_MUTED, lineH: 4 });
        y += 1;
        if (risposta) {
          addText(risposta, { size: 10, color: COLOR_INK, lineH: 5 });
        } else {
          addText('—', { size: 10, style: 'italic', color: [200, 190, 180], lineH: 5 });
        }
        y += 3;
        rule(COLOR_RULE);
      });
    }
  });

  // Aggiorna footer su tutte le pagine
  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7);
    doc.setTextColor(...COLOR_MUTED);
    doc.text('— Gilda', MARGIN, PAGE_H - 10);
    doc.text(`${i} / ${totalPages}`, PAGE_W - MARGIN, PAGE_H - 10, { align: 'right' });
  }

  doc.save(`gilda-${p.slug}-risposte.pdf`);
  toast('PDF esportato');
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
