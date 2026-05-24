/* ═══════════════════════════════════════════════
   GILDA PWA — app.js v6.0
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
    price: '€9 + IVA',
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
    price: '€9 + IVA',
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
    price: '€9 + IVA',
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
   BOOT
═══════════════════════════════════════════════ */
async function boot() {
  showLoading();
  try {
    supa = window.supabase.createClient(SUPA_URL, SUPA_KEY);
  } catch(e) { showAuth(); return; }

  // Intercetta reset password — deve essere registrato subito dopo createClient
  supa.auth.onAuthStateChange((event, session) => {
    if (event === 'PASSWORD_RECOVERY') {
      showReset();
      return;
    }
    if (event === 'SIGNED_IN' && session) {
      // Solo se non siamo già nell'app
      if (g('screen-app').classList.contains('hidden') && 
          g('screen-reset').classList.contains('hidden')) {
        enterApp(session.user);
      }
    }
  });

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
    const isWelcome = code.startsWith('GILDA-WELCOME');
    if (!isWelcome && row.used_by && row.used_by !== me.id) { showUM('Codice già usato.', 'error'); return; }
    if (isOpen(row.product_id)) { showUM('Prodotto già in libreria.', 'error'); return; }
    if (!isWelcome) await supa.from('unlock_codes').update({ used_by: me.id, used_at: new Date().toISOString() }).eq('code', code);
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

  // Click su "Ho già un codice" → scroll all'input unlock
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

  // Header dark con titolo
  g('product-header').innerHTML = `
    <div class="product-header-tag">${p.tag}</div>
    <div class="product-header-title">${p.title}</div>
    <div class="product-header-desc">${p.description}</div>
  `;
  g('progress-fill').style.width = pc + '%';
  g('progress-label').textContent = pc + '%';

  const list = g('sections-list');
  list.innerHTML = '';

  // Intro card — struttura HTML: titolo + divider + blockquote + paragrafi
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

  // Istruzioni — pagina scura con 4 box bordo ocra
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

  // Section cards
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

  // Header sezione con numero romano grande in trasparenza
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

  // Checklist (solo s1 meccanismo)
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

  // Domande
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

  // Sintesi
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

  // Quote — bordo sinistro terracotta
  if (s.quote) {
    const q = document.createElement('div');
    q.className = 'section-quote';
    q.textContent = s.quote;
    list.appendChild(q);
  }

  // Pausa editoriale tra sezioni
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

  // Closing
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

  // Final page
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

  // Nav prev/next
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
  toast('File esportato');
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

/* ═══════════════════════════════════════════════
   RESET PASSWORD
═══════════════════════════════════════════════ */
function showReset() {
  g('loading').classList.add('hidden');
  g('screen-auth').classList.add('hidden');
  g('screen-app').classList.add('hidden');
  g('screen-reset').classList.remove('hidden');
  window.scrollTo(0, 0);
}

g('btn-reset-confirm').addEventListener('click', async () => {
  const pwd = g('reset-password').value;
  const confirm = g('reset-password-confirm').value;
  const msg = g('reset-message');
  msg.className = 'auth-message hidden';

  if (!pwd || pwd.length < 6) {
    msg.textContent = 'La password deve avere almeno 6 caratteri.';
    msg.className = 'auth-message error';
    return;
  }
  if (pwd !== confirm) {
    msg.textContent = 'Le password non coincidono.';
    msg.className = 'auth-message error';
    return;
  }

  g('btn-reset-confirm').disabled = true;
  g('btn-reset-confirm').textContent = '…';

  try {
    const { error } = await supa.auth.updateUser({ password: pwd });
    if (error) throw error;
    msg.textContent = 'Password aggiornata. Accedi con la nuova password.';
    msg.className = 'auth-message success';
    setTimeout(() => {
      g('screen-reset').classList.add('hidden');
      showAuth();
    }, 2000);
  } catch (err) {
    msg.textContent = err.message || 'Errore. Riprova.';
    msg.className = 'auth-message error';
  } finally {
    g('btn-reset-confirm').disabled = false;
    g('btn-reset-confirm').textContent = 'Salva nuova password';
  }
});

// onAuthStateChange per reset viene gestito nel boot

document.addEventListener('DOMContentLoaded', boot);
