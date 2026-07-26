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
        { label: 'Le cinque forme', text: 'Prima di tutto, una lettura: i cinque travestimenti più comuni dell\'autosabotaggio. Ti aiuteranno a riconoscere il tuo.' },
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
          { id: 'p1', title: 'Faccio cose utili per evitare quella che conta davvero', note: 'Rispondo alle email, metto ordine dove non serve. Tutto urgente, niente importante.' },
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
          { id: 'q-corpo', label: 'Cosa sentivi nel corpo', hint: 'Prima di deviare. Fisicamente.', placeholder: 'Tensione allo stomaco, respiro corto...' },
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
    slug: 'non-sentirsi-abbastanza', pdfUrl: 'https://gildaossani.github.io/gilda-app/quaderni/non-sentirsi-abbastanza-quaderno.pdf',
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
    slug: 'la-paura', pdfUrl: 'https://gildaossani.github.io/gilda-app/quaderni/la-paura-quaderno.pdf',
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
    slug: 'i-confini', pdfUrl: 'https://gildaossani.github.io/gilda-app/quaderni/i-confini-quaderno.pdf',
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
    slug: 'il-corpo-non-mente', pdfUrl: 'https://gildaossani.github.io/gilda-app/quaderni/il-corpo-non-mente-quaderno.pdf',
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
    slug: 'le-amicizie', pdfUrl: 'https://gildaossani.github.io/gilda-app/quaderni/le-amicizie-quaderno.pdf',
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
  {
    id: 'lavoro',
    slug: 'il-lavoro-e-il-denaro', pdfUrl: 'https://gildaossani.github.io/gilda-app/quaderni/il-lavoro-e-il-denaro-quaderno.pdf',
    kofiUrl: 'https://ko-fi.com/s/59a008ab39',
    tag: 'Percorso',
    title: 'Il lavoro e il denaro',
    description: 'Essere brava sul lavoro e avere abbastanza soldi non sono la stessa cosa di sentirti al posto giusto. Guardiamo cosa ti dicono davvero il lavoro che fai e i soldi che guadagni.',
    price: '€9',
    type: 'standard',
    intro: {
      title: 'Prima di iniziare.',
      blockquote: 'Questo non è un percorso per trovare il lavoro dei sogni.\nNé per convincerti che il denaro non conta.',
      paragraphs: [
        'È uno strumento per guardare la differenza tra il lavoro che fai bene e quello che senti tuo. Anche per capire se il denaro che guadagni ti sta comprando scelte o solo silenzio.',
        'Non cerchiamo il lavoro perfetto. Cerchiamo il momento preciso in cui hai smesso di chiederti se lo vuoi ancora e hai iniziato solo a farlo bene.',
        'Il denaro ha una sezione tutta sua, doppia rispetto al resto del percorso. Per molte è il posto dove il valore di sé si gioca più silenziosamente, più di quanto sembri guardando solo il lavoro.',
        'Puoi compilarlo in una seduta o tornare più volte. Funziona meglio se pensi al lavoro che fai adesso, non a quello che pensi di dover desiderare.'
      ],
      signature: '— Gilda'
    },
    sections: [
      {
        id: 's1', name: 'Brava non è lo stesso di presente', number: 'I', openerBg: 'dark',
        openerIntro: 'Sai fare il tuo lavoro a occhi chiusi. Il problema è che li tieni chiusi anche quando conterebbe aprirli.',
        intro: "C'è un tipo di competenza che diventa un nascondiglio. Fai bene, sei affidabile. Proprio perché funziona così bene, smetti di chiederti se è ancora quello che vuoi fare. In questa sezione guardiamo quanto del tuo lavoro va avanti da solo, senza più passare da te.",
        quote: 'Essere brava è diventato il modo più elegante per non scegliere più niente.',
        questions: [
          { id: 'q1', label: 'Un compito che fai a occhi chiusi, senza più pensarci', hint: 'Qualcosa che sai fare così bene da non doverci più stare dentro.', placeholder: 'Faccio senza pensarci...' },
          { id: 'q2', label: "L'ultima volta che ti sei chiesta se lo vuoi ancora fare", hint: 'Non se lo sai fare, se lo vuoi ancora.', placeholder: 'È stato...' },
          { id: 'q3', label: 'Cosa succederebbe se smettessi di essere così affidabile per una settimana', hint: '', placeholder: 'Succederebbe...' },
          { id: 'q4', label: 'Cosa ti frena dal farti quella domanda più spesso', hint: '', placeholder: 'Mi frena...' },
        ]
      },
      {
        id: 's2', name: 'Da quando lavori per tenere in piedi qualcosa', number: 'II', openerBg: 'beige',
        openerIntro: "C'è un lavoro che scegli e un lavoro che sostiene. Non sono sempre la stessa cosa, anche se li chiami con lo stesso nome.",
        intro: 'Il primo lavoro che hai avuto probabilmente serviva a sostenerti, non a esprimerti. Era normale essere lì per quello. Il problema è quando quella logica non si aggiorna più e continui a lavorare per tenere in piedi una sicurezza che magari hai già raggiunto. In questa sezione guardiamo se sei ancora lì per necessità o per abitudine.',
        quote: 'Superata la soglia della sopravvivenza, restare per abitudine è comunque una scelta.',
        questions: [
          { id: 'q1', label: 'Perché hai iniziato a fare questo lavoro', hint: 'La ragione vera, non quella che racconti alle feste.', placeholder: 'Ho iniziato perché...' },
          { id: 'q2', label: 'Quella ragione esiste ancora oggi', hint: '', placeholder: 'Oggi...' },
          { id: 'q3', label: 'Cosa cambieresti se la sicurezza economica non fosse più un problema', hint: 'Se il bisogno di base fosse già coperto.', placeholder: 'Se non dovessi più preoccuparmi della sicurezza...' },
          { id: 'q4', label: 'Stai lavorando per necessità o per abitudine', hint: 'Le due cose si assomigliano ma non sono uguali.', placeholder: 'In questo momento...' },
        ]
      },
      {
        id: 's3', name: 'Il prezzo di non lamentarti mai', number: 'III', openerBg: 'terracotta',
        openerIntro: "Nessuno si accorge di quanto costa la donna che non si lamenta mai. Nemmeno lei, per un po'.",
        intro: 'Essere quella su cui si può sempre contare ha un prezzo che non compare in busta paga. Non è il carico di lavoro in sé. È il fatto che nessuno pensa mai di doverti alleggerire, perché tu non lo fai notare. In questa sezione guardiamo cosa ti costa davvero reggere tutto senza mai segnalarlo.',
        quote: 'Il carico che non nomini resta comunque un carico. Solo che lo porti da sola e in silenzio.',
        questions: [
          { id: 'q1', label: 'Un compito che hai in carico e che nessuno sa quanto ti costa', hint: '', placeholder: 'Nessuno sa che...' },
          { id: 'q2', label: "L'ultima volta che hai chiesto aiuto sul lavoro", hint: '', placeholder: 'È stato...' },
          { id: 'q3', label: 'Cosa temi che succeda se dici che sei stanca', hint: '', placeholder: 'Temo che...' },
          { id: 'q4', label: 'Cosa hai smesso di fare per te perché nessuno te lo chiede più', hint: 'Qualcosa che facevi per te, non per il lavoro.', placeholder: 'Ho smesso di...' },
        ]
      },
      {
        id: 's4', name: 'Da dove viene il tuo rapporto con i soldi', number: 'IV', openerBg: 'cipria',
        openerIntro: "Nessuna nasce con un rapporto neutro con il denaro. Il tuo l'hai ereditato, prima di sceglierlo.",
        intro: 'Il modo in cui parli di soldi e quanto ti senti a tuo agio a chiederne di più non sono nati con te. Sono arrivati da qualche parte, di solito molto prima che tu potessi scegliere diversamente. In questa sezione cerchiamo l\'origine, non per giustificarla, per riconoscerla.',
        quote: 'Hai imparato a leggere il denaro come un voto prima ancora di guadagnarlo tu stessa.',
        questions: [
          { id: 'q1', label: 'Come si parlava di soldi in casa tua da bambina', hint: 'Con ansia o con orgoglio.', placeholder: 'In casa si parlava di soldi...' },
          { id: 'q2', label: 'Cosa hai imparato che significa avere soldi', hint: '', placeholder: 'Avere soldi significava...' },
          { id: 'q3', label: 'Cosa hai imparato che significa volerne di più', hint: 'Ambizione o avidità, cosa ti hanno fatto sentire?', placeholder: 'Volerne di più significava...' },
          { id: 'q4', label: 'Una frase sui soldi che hai sentito ripetere in famiglia', hint: '', placeholder: 'In famiglia si diceva...' },
        ]
      },
      {
        id: 's5', name: 'Cosa dicono i soldi di quanto vali', number: 'V', openerBg: 'dark',
        openerIntro: 'Il conto in banca non misura il tuo valore. Ma tu, in certi momenti, lo lasci fare.',
        intro: "C'è un momento preciso in cui il numero sul conto smette di essere informazione e diventa verdetto. Guadagni poco e ti senti poco. Guadagni molto e finalmente ti concedi di valere. Il cervello non sta facendo aritmetica: sta usando l'unica scorciatoia che trova per misurarsi. In questa sezione la smontiamo.",
        quote: 'Il denaro non ti dice chi sei. Ti dice solo quanto hanno pagato per quello che hai fatto in quel momento.',
        questions: [
          { id: 'q1', label: "L'ultima volta che un numero sul conto ha cambiato come ti sentivi con te stessa", hint: '', placeholder: 'È successo quando...' },
          { id: 'q2', label: 'Guadagnare poco ti ha mai fatto sentire meno', hint: 'Sii onesta, anche se ti sembra vanità ammetterlo.', placeholder: 'Mi sono sentita...' },
          { id: 'q3', label: 'Guadagnare di più risolverebbe davvero quella sensazione o la sposterebbe altrove', hint: '', placeholder: 'Penso che...' },
          { id: 'q4', label: 'Se il denaro non fosse un metro, con cosa misureresti il tuo valore', hint: '', placeholder: 'Mi misurerei con...' },
        ]
      },
      {
        id: 's6', name: 'Vincolo reale o abitudine mai verificata', number: 'VI', openerBg: 'beige',
        openerIntro: 'Il denaro non misura quanto vali. Misura quanto puoi scegliere, anche quando le opzioni sono poche.',
        intro: "Non tutte possono permettersi di lasciare un lavoro che non le rappresenta più. Questo percorso non fa finta che sia diverso. Ma c'è una differenza tra restare perché hai controllato le alternative e restare perché non hai mai guardato. La prima è una scelta, anche se dettata da vincoli reali. La seconda è un altro pilota automatico. In questa sezione cerchiamo cosa puoi effettivamente muovere, dentro i vincoli che hai adesso.",
        quote: "Restare per un vincolo reale è una scelta. Restare senza averlo mai verificato è un'abitudine.",
        questions: [
          { id: 'q1', label: 'Cosa ti tiene in questo lavoro adesso, in una frase onesta', hint: "Il vincolo economico o l'abitudine.", placeholder: 'Resto perché...' },
          { id: 'q2', label: "L'ultima volta che hai verificato se esistono alternative reali", hint: 'Non devi agire, solo sapere quando è stato.', placeholder: 'È stato...' },
          { id: 'q3', label: 'Una cosa che potresti scoprire questo mese senza rischiare niente', hint: "Un'ora di ricerca o una conversazione, niente che ti impegni.", placeholder: 'Potrei scoprire...' },
          { id: 'q4', label: 'Dentro il lavoro che hai adesso, cosa potresti ancora scegliere', hint: 'Un compito da rifiutare o un confine da mettere.', placeholder: 'Potrei ancora scegliere...' },
        ],
        synthesis: {
          title: 'Porta qualcosa fuori da questa pagina.',
          label: 'Quello che hai capito, in poche righe.',
          fields: [
            { id: 'q-sint-lavoro-1', label: 'La parte del mio lavoro che è andata in pilota automatico è...', placeholder: '...' },
            { id: 'q-sint-lavoro-2', label: 'Il rapporto con i soldi che ho ereditato e non ho mai scelto è...', placeholder: '...' },
            { id: 'q-sint-lavoro-3', label: 'La cosa che posso ancora scegliere, dentro quello che ho adesso, è...', placeholder: '...' },
          ]
        },
        closing: {
          title: 'Hai visto la differenza, non hai dovuto risolverla.',
          text: 'Funzionare bene sul lavoro e misurarti con il denaro sono due modi diversi per non chiederti se ti riconosci in quello che fai. Non tutte le risposte che hai trovato qui si possono agire domani. Va bene così: alcuni vincoli sono reali, non solo mentali. Sapere se stai scegliendo o solo resistendo cambia il modo in cui porti quel peso. Il numero sul conto, nel frattempo, smette di essere un verdetto su di te. Da qui parte quello che puoi effettivamente muovere, non quello che dovresti.',
          signature: '— Gilda'
        }
      },
    ],
  },
  {
    id: 'amore',
    slug: 'amore-dopo-le-delusioni', pdfUrl: 'https://gildaossani.github.io/gilda-app/quaderni/amore-dopo-le-delusioni-quaderno.pdf',
    kofiUrl: 'https://ko-fi.com/s/57001ba5de',
    tag: 'Percorso',
    title: "L'amore dopo le delusioni",
    description: "Non tutti i muri sono uguali. Guardiamo cosa protegge davvero il tuo, da dove viene la sfiducia e come si riapre senza tornare ingenue.",
    price: '€9',
    type: 'standard',
    intro: {
      title: 'Prima di iniziare.',
      blockquote: 'Questo non è un percorso per convincerti che sono tutti uguali.\nNé per convincerti che va bene fidarsi di chiunque.',
      paragraphs: [
        'È uno strumento per guardare il muro che hai costruito dopo essere stata delusa e per capire se ti protegge ancora o se ha iniziato a tenerti prigioniera.',
        "La sfiducia che ti serve ancora e quella diventata solo abitudine non sono la stessa cosa, anche se dall'interno sembrano identiche.",
        'Puoi compilarlo pensando a una persona specifica o al tuo modo di stare nelle relazioni in generale. Funziona meglio se sei onesta anche sulle cose scomode.'
      ],
      signature: '— Gilda'
    },
    sections: [
      {
        id: 's1', name: 'Il muro che hai costruito', number: 'I', openerBg: 'dark',
        openerIntro: "Non tutti i muri sono uguali. C'è chi protegge una stanza vuota e chi protegge ancora qualcosa di vivo.",
        intro: 'Dopo una delusione, alzare un muro è una risposta normale. Il problema arriva dopo, quando il muro resta in piedi anche davanti a chi non ha ancora fatto niente per meritarselo. In questa sezione guardiamo cosa protegge oggi il tuo muro e da cosa.',
        quote: "C'è differenza tra non fidarsi di chiunque e non fidarsi di te stessa nello scegliere.",
        questions: [
          { id: 'q1', label: 'Da cosa ti protegge il muro oggi', hint: 'Sii precisa, non generica.', placeholder: 'Mi protegge da...' },
          { id: 'q2', label: "L'ultima volta che hai tenuto qualcuno a distanza senza una vera ragione", hint: '', placeholder: 'È successo con...' },
          { id: 'q3', label: 'Cosa perdi tenendo tutti alla stessa distanza', hint: '', placeholder: 'Perdo...' },
          { id: 'q4', label: 'Il muro protegge te o la tua idea di te che non vuoi più deludere', hint: '', placeholder: 'Protegge...' },
        ]
      },
      {
        id: 's2', name: 'Da dove viene la sfiducia', number: 'II', openerBg: 'beige',
        openerIntro: 'La sfiducia doveva essere una fase. A un certo punto ha smesso di esserlo.',
        intro: "La sfiducia nasce per proteggerti da chi ti ha fatto male una volta. Il rischio è che resti attiva anche con chi non c'entra niente, finché smetti di distinguere tra chi ti ha delusa e chi non lo ha ancora fatto. In questa sezione guardiamo cosa hai imparato su te stessa da quella delusione, non sull'altro.",
        quote: 'Il problema non è diffidare. È non sapere più quando smettere.',
        questions: [
          { id: 'q1', label: 'La delusione che ha alzato per prima questo muro', hint: '', placeholder: 'È successo quando...' },
          { id: 'q2', label: "Cosa hai imparato su te stessa da quella delusione, non sull'altro", hint: 'Cosa cercavi, cosa hai ignorato.', placeholder: 'Ho imparato che...' },
          { id: 'q3', label: 'Come riconosci quando la sfiducia si attiva ancora prima di conoscere qualcuno', hint: '', placeholder: 'La riconosco quando...' },
          { id: 'q4', label: 'Chi ha già dimostrato di essere diverso, senza che tu ci creda ancora del tutto', hint: '', placeholder: 'Fatico a crederci con...' },
        ]
      },
      {
        id: 's3', name: 'Sapere cosa non vuoi', number: 'III', openerBg: 'terracotta',
        openerIntro: 'La lista di cosa non vuoi è scritta con le esperienze che ti hanno fatto male. È un documento prezioso, anche se è arrivato nel modo sbagliato.',
        intro: "Ogni delusione lascia un'informazione precisa su cosa non funziona per te. Il problema è quando quella lista diventa un muro invece che una bussola, quando la usi per escludere invece che per scegliere meglio. In questa sezione guardiamo cosa hai imparato e quanto ti è costato impararlo.",
        quote: 'Ogni no che hai imparato a dire nasce da qualcosa che hai già vissuto una volta di troppo.',
        questions: [
          { id: 'q1', label: 'Una cosa che ora sai di non volere in una relazione', hint: '', placeholder: 'So che non voglio...' },
          { id: 'q2', label: 'Quanto ti è costato scoprirlo', hint: '', placeholder: 'Mi è costato...' },
          { id: 'q3', label: 'Usi questa lista per scegliere meglio o per escludere tutti in partenza', hint: '', placeholder: 'La uso per...' },
          { id: 'q4', label: 'Cosa cambia se guardi quella lista come informazione invece che come difesa', hint: '', placeholder: 'Cambia che...' },
        ]
      },
      {
        id: 's4', name: 'Riaprirsi senza tornare ingenue', number: 'IV', openerBg: 'cipria',
        openerIntro: 'Fiducia è una scelta consapevole. Ingenuità è non usare quello che sai.',
        intro: 'Riaprirsi dopo le delusioni non significa dimenticare quello che hai imparato; piuttosto è scegliere lo stesso, con più informazioni di prima. In questa sezione costruiamo un passo verso quella riapertura, non un salto nel vuoto.',
        quote: 'Fidarsi di nuovo non cancella quello che sai. Lo porta con te nella scelta.',
        questions: [
          { id: 'q1', label: 'Ti innamoreresti ancora, con tutto quello che sai adesso', hint: 'Rispondi davvero, non con una scrollata di spalle.', placeholder: 'La risposta vera è...' },
          { id: 'q2', label: 'Cosa ti direbbe che questa volta è diverso, senza che tu debba solo sperarlo', hint: '', placeholder: 'Direbbe...' },
          { id: 'q3', label: 'Un segnale concreto a cui puoi affidarti invece che alla paura generica', hint: '', placeholder: 'Posso affidarmi a...' },
          { id: 'q4', label: 'Un passo piccolo verso la fiducia che puoi fare questa settimana', hint: '', placeholder: 'Potrei...' },
        ],
        synthesis: {
          title: 'Porta qualcosa fuori da questa pagina.',
          label: 'Quello che hai capito, in poche righe.',
          fields: [
            { id: 'q-sint-amore-1', label: 'Il muro che porto fuori da questa pagina protegge davvero...', placeholder: '...' },
            { id: 'q-sint-amore-2', label: 'La sfiducia che tengo e quella che posso lasciare andare sono...', placeholder: '...' },
            { id: 'q-sint-amore-3', label: 'Il passo concreto verso la fiducia che faccio da qui è...', placeholder: '...' },
          ]
        },
        closing: {
          title: 'Sei arrivata fino in fondo.',
          text: 'Guardare il muro che hai costruito, capire cosa protegge davvero, non è un esercizio comodo. Hai scelto la strada difficile, quella che porta a te invece che a chi ti ha delusa. Non devi abbattere tutto in una volta. Basta un segnale, un passo piccolo verso la fiducia che scegli ad occhi aperti.',
          signature: '— Gilda'
        }
      },
    ],
  },
  {
    id: 'soli',
    slug: 'stare-bene-da-soli', pdfUrl: 'https://gildaossani.github.io/gilda-app/quaderni/stare-bene-da-soli-quaderno.pdf',
    kofiUrl: 'https://ko-fi.com/s/676d29c358',
    tag: 'Percorso',
    title: 'Stare bene da soli',
    description: 'Stare bene da soli non è solitudine, è casa. Guardiamo se stai scegliendo o colmando. Cambia tutto, a partire da chi lasci entrare.',
    price: '€9',
    type: 'standard',
    intro: {
      title: 'Prima di iniziare.',
      blockquote: 'Questo non è un percorso per convincerti che va bene essere sola, ti aiuta invece a capire se lo stai scegliendo o solo sopportando.',
      paragraphs: [
        'È uno strumento per guardare la differenza tra stare bene da sola ed essere semplicemente sola, tra scegliere la tua compagnia e non avere alternative.',
        'La pienezza e il vuoto non dipendono da chi hai vicino, anche se sembra il contrario quando manca qualcuno.',
        'Puoi compilarlo indipendentemente dal fatto che tu sia sola o in coppia in questo momento. Funziona meglio se sei onesta su da dove parti quando cerchi compagnia.'
      ],
      signature: '— Gilda'
    },
    sections: [
      {
        id: 's1', name: 'Completa, non vuota', number: 'I', openerBg: 'dark',
        openerIntro: 'Chi cerca compagnia per riempire un vuoto trova sempre le persone sbagliate, chi lo fa partendo da una situazione di consapevolezza trova persone affini.',
        intro: "C'è una differenza enorme tra cercare qualcuno per completarti e cercare qualcuno da aggiungere a una vita che già funziona. La prima logica parte da un buco da tappare. La seconda parte da qualcosa che vuoi condividere. In questa sezione guardiamo quale delle due logiche usi più spesso.",
        quote: 'Non è la compagnia a mancare. È il motivo per cui la cerchi che fa la differenza.',
        questions: [
          { id: 'q1', label: 'Quando non sei in coppia, ti senti a metà o intera', hint: 'Sii onesta, anche se cambia a seconda del giorno.', placeholder: 'Mi sento...' },
          { id: 'q2', label: "L'ultima volta che hai cercato compagnia per riempire qualcosa", hint: '', placeholder: 'È successo quando...' },
          { id: 'q3', label: 'Cosa ti fa sentire appagata, indipendentemente da chi hai vicino', hint: '', placeholder: 'Mi fa sentire appagata...' },
          { id: 'q4', label: 'Da dove parti di solito quando cerchi qualcuno', hint: 'Da un vuoto o da qualcosa che già funziona.', placeholder: 'Parto da...' },
        ]
      },
      {
        id: 's2', name: "Da dove viene l'idea di essere a metà", number: 'II', openerBg: 'beige',
        openerIntro: "La narrazione che da soli si è incompleti è una bugia molto diffusa. Da qualche parte l'hai imparata anche tu.",
        intro: 'Nessuna nasce pensando che una vita senza coppia sia una vita a metà. Da qualche parte, tra film e commenti ripetuti in famiglia, hai assorbito l\'idea che completa significhi accompagnata. In questa sezione cerchiamo da dove viene quella misura, per poi decidere se vale ancora.',
        quote: "Nessuna nasce già convinta di essere a metà. Quella convinzione l'hai imparata, si può anche disimparare.",
        questions: [
          { id: 'q1', label: 'Chi o cosa ti ha insegnato che da sola sei a metà', hint: 'Film, famiglia, frasi ripetute.', placeholder: "L'ho imparato da..." },
          { id: 'q2', label: 'Un momento in cui ti sei sentita completa da sola, prima di doverlo dimostrare a qualcuno', hint: '', placeholder: 'È successo quando...' },
          { id: 'q3', label: 'Quella misura ha ancora senso oggi', hint: '', placeholder: 'Oggi...' },
          { id: 'q4', label: 'Cosa perderesti se smettessi di misurarti così', hint: '', placeholder: 'Perderei...' },
        ]
      },
      {
        id: 's3', name: 'Quello spazio non lo regali a chiunque', number: 'III', openerBg: 'terracotta',
        openerIntro: 'Se stai bene da sola, quello spazio alza la soglia. Non per escludere. Per scegliere.',
        intro: 'Quando riempi lo spazio per paura del vuoto, chi entra nella tua vita occupa solo un posto, non lo guadagna. Quando lo spazio è già abitato da te, chi entra deve aggiungere qualcosa. In questa sezione guardiamo quanto ti è costato regalare quello spazio a chi non lo meritava.',
        quote: 'Lo spazio che hai costruito da sola non è un posto libero per chiunque passi.',
        questions: [
          { id: 'q1', label: 'A chi hai regalato spazio che non lo meritava', hint: '', placeholder: "L'ho regalato a..." },
          { id: 'q2', label: 'Cosa ti ha convinta a tenerlo comunque vicino', hint: '', placeholder: 'Mi ha convinta...' },
          { id: 'q3', label: 'Cosa hai perso restando occupata da chi non aggiungeva niente', hint: '', placeholder: 'Ho perso...' },
          { id: 'q4', label: 'Cosa alzeresti come soglia minima da qui in avanti', hint: '', placeholder: 'Alzerei...' },
        ]
      },
      {
        id: 's4', name: 'Costruire la tua casa', number: 'IV', openerBg: 'cipria',
        openerIntro: 'Stare bene da soli non è il ripiego di chi non ha trovato nessuno. È il prerequisito per costruire relazioni vere.',
        intro: 'Prima viene la casa che costruisci dentro di te, quella che non dipende da chi ti sta vicino in un momento specifico. Poi viene tutto il resto, che funziona meglio quando parte da lì. In questa sezione mettiamo a fuoco cosa significa concretamente per te sentirti a casa da sola.',
        quote: "Volere qualcuno vicino è diverso dall'averne bisogno: il primo nasce dalla pienezza, il secondo dalla paura.",
        questions: [
          { id: 'q1', label: 'Cosa significa per te sentirti a casa, indipendentemente da chi hai vicino', hint: '', placeholder: 'Significa...' },
          { id: 'q2', label: 'Una domenica passata bene da sola, senza doverla giustificare a nessuno', hint: '', placeholder: 'È stata quella volta che...' },
          { id: 'q3', label: 'Cosa vuoi, non di cosa hai bisogno, nelle relazioni che costruisci da qui', hint: '', placeholder: 'Voglio...' },
          { id: 'q4', label: 'Un gesto piccolo che ti fa sentire a casa da sola, questa settimana', hint: '', placeholder: 'Potrei...' },
        ],
        synthesis: {
          title: 'Porta qualcosa fuori da questa pagina.',
          label: 'Quello che hai capito, in poche righe.',
          fields: [
            { id: 'q-sint-soli-1', label: 'La differenza tra pienezza e vuoto, per me, è...', placeholder: '...' },
            { id: 'q-sint-soli-2', label: 'La misura che smetto di usare per sentirmi completa è...', placeholder: '...' },
            { id: 'q-sint-soli-3', label: 'La casa che costruisco da sola comincia da...', placeholder: '...' },
          ]
        },
        closing: {
          title: 'Sei arrivata fino in fondo.',
          text: 'Guardare da dove parti quando cerchi compagnia, quanto spazio hai regalato a chi non lo meritava, non è un esercizio scontato. Hai scelto di costruire prima la casa, poi tutto il resto. Non serve una risposta definitiva oggi. Basta un gesto piccolo che ti ricordi che la pienezza parte da te.',
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

// Token da URL — salvato prima del login se serve
let pendingToken = null;
let pendingProduct = null;

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
   LE CINQUE FORME — lettura di apertura
   Prima parte del prodotto Il Meccanismo.
   Stile scoped sotto .ff-*, iniettato una sola volta.
═══════════════════════════════════════════════ */
const FORME = [
  {
    name: "Procrastinazione",
    subtitle: "Sono troppo occupata per fare la cosa che conta",
    paras: [
      "La procrastinazione vera non assomiglia all'ozio, anzi: assomiglia a una giornata talmente piena che la sera ti chiedi dove sia finita, tra email a cui rispondere e commissioni che sembravano non poter aspettare. Tutto urgente, niente importante. Intanto il tempo passa e la lista si svuota, mentre la cosa che contava davvero resta esattamente dove l'avevi lasciata, paziente come solo le cose rimandate sanno essere.",
      "Chiamarla pigrizia sarebbe un errore, oltre che un'ingiustizia, perché di lavoro ne fai fin troppo; funziona piuttosto come una strategia, discretamente efficace: finché sei occupata non devi misurarti con quello che succederebbe se ti fermassi a fare la cosa giusta, così il rischio si rimanda insieme al compito, in un pacchetto unico che sembra persino ragionevole.",
      "Il primo passo, se decidi di farlo, consiste nel notare il momento esatto in cui scegli l'urgente al posto dell'importante, per poi chiederti cosa stai evitando di scoprire su te stessa fermandoti proprio lì. Diventare più organizzata può aspettare; di corsi su quello ne trovi quanti ne vuoi."
    ],
    mantras: [
      "Quando trovi mille cose urgenti, chiediti cosa stai rimandando davvero.",
      "L'urgente quasi mai coincide con l'importante.",
      "Il compito che eviti di più è di solito quello che conta di più."
    ]
  },
  {
    name: "Perfezionismo",
    subtitle: "Non è ancora pronto",
    paras: [
      "Il perfezionismo passa per amore della qualità e per un bel po' riesce anche a farsi credere: si presenta come una scadenza che continua a spostarsi, come un dettaglio che ancora non torna, mentre la barra si alza ogni volta che stai per raggiungerla. Mai abbastanza pronto, mai abbastanza buono.",
      "Con la qualità, in realtà, c'entra poco; somiglia piuttosto a un sistema molto sofisticato per non dover mai mostrare qualcosa che possa essere giudicato, perché finché ci stai ancora lavorando nessuno può dire che non va bene: semplicemente, non hai finito. Geniale, se non fosse che intanto niente esce mai.",
      "Si comincia da un punto preciso, quello in cui la revisione smette di migliorare il lavoro; da lì in avanti sta solo rimandandone l'uscita, anche se continua a sembrarti cura. Gli standard possono restare dove sono, alti quanto vuoi: il problema non è mai stato lì."
    ],
    mantras: [
      "Non ancora pronto è una frase che puoi dire all'infinito.",
      "A un certo punto, finito conta più di perfetto.",
      "Mostrare qualcosa di imperfetto fa meno male di quanto pensi."
    ]
  },
  {
    name: "Iperresponsabilità",
    subtitle: "Mi occupo di tutti, tranne che di me",
    paras: [
      "L'iperresponsabilità riempie l'agenda, quasi mai con cose tue: rispondi prima alle richieste degli altri, ti rendi disponibile prima ancora che qualcuno chieda, come se il tuo tempo fosse un bene comune a cui tutti possono attingere tranne te. La chiami generosità, che in parte lo è pure; solo che risulta anche molto comoda: finché ti occupi degli altri non devi occuparti di te.",
      "Aiutare, in sé, resta una cosa bella; diventa un meccanismo quando ti serve a evitare in modo sistematico quello che ti riguarda da vicino, cioè una scelta che dipende soltanto da te, che quindi può andare storta soltanto per causa tua. Meglio, allora, avere sempre qualcun altro di cui occuparsi prima.",
      "Continuare ad aiutare va benissimo, nessuno ti chiede di smettere; la domanda da tenere aperta, semmai, riguarda cosa stai evitando ogni volta che ti metti in coda dopo tutti gli altri, con una puntualità che, a guardarla bene, comincia a sembrare sospetta."
    ],
    mantras: [
      "Occuparsi di tutti è un modo elegante per non occuparsi di te.",
      "La tua lista delle priorità inizia da te, non finisce con te.",
      "Aiutare resta una scelta, anche quando sembra un dovere."
    ]
  },
  {
    name: "Indecisione",
    subtitle: "Ancora un'informazione, poi scelgo",
    paras: [
      "L'indecisione parla la lingua della prudenza, la parla così bene che quasi le credi: un altro parere, un'altra opzione da valutare prima di chiudere, mentre tra te e la scelta resta sempre un'informazione in più che non arriva mai a bastare, per quanto tu continui a cercarla.",
      "Di criterio ne hai, il punto sta altrove: scegliere significa chiudere tutte le altre strade; finché non scegli restano tutte aperte, così l'indecisione protegge quella sensazione, dolcissima, di avere ancora tutto davanti.",
      "Raccogliere altri dati ti porterà esattamente dove sei adesso, con una cartella più piena e la stessa scelta intatta; prova invece a distinguere le informazioni che servono davvero da quelle che coprono soltanto il bisogno di non doverti esporre a una decisione tua."
    ],
    mantras: [
      "Più opzioni raccogli, meno urgente sembra scegliere.",
      "Nessuna informazione renderà la scelta priva di rischio.",
      "Decidere male è comunque meglio che non decidere mai."
    ]
  },
  {
    name: "Overthinking",
    subtitle: "Ho capito tutto, non ho fatto niente",
    paras: [
      "L'overthinking ha tutta l'aria del lavoro serio: un pensiero dopo l'altro, un'ipotesi che ne genera un'altra, come chi analizza per prepararsi meglio. Alla fine del giro, però, ti ritrovi al punto di partenza: hai pensato tutto senza avere fatto niente.",
      "Il pensiero in sé fa il suo mestiere; smette di farlo quando non porta più a una decisione, quando diventa il posto sicuro dove nessuna azione può andare storta per il semplice motivo che nessuna azione parte. Un rifugio elegante, dove non succede mai niente.",
      "Pensare meno sarebbe il consiglio sbagliato, oltre che inutile; il punto sta nel cogliere l'attimo in cui il pensiero smette di essere utile e comincia soltanto a girare su se stesso, come una lavatrice senza panni dentro."
    ],
    mantras: [
      "Pensare non equivale ad agire.",
      "Un pensiero in più non rende la decisione più sicura.",
      "A un certo punto il pensiero deve fermarsi, per lasciare spazio al fatto."
    ]
  }
];

function ensureFormeStyles() {
  if (document.getElementById('ff-styles')) return;
  const style = document.createElement('style');
  style.id = 'ff-styles';
  style.textContent = `
    .ff-wrap { background: #FDFBF7; border: 1px solid rgba(200,169,110,0.35); border-radius: 10px; padding: 32px 28px; margin-bottom: 28px; }
    .ff-eyebrow { font-family: 'DM Sans', sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: #C8A96E; margin-bottom: 14px; }
    .ff-title { font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: 26px; color: #1A1814; margin-bottom: 12px; line-height: 1.2; }
    .ff-title em { font-style: italic; color: #C8A96E; }
    .ff-intro { font-family: 'Cormorant Garamond', serif; font-size: 16px; line-height: 1.65; color: #1A1814; margin-bottom: 24px; }
    .ff-item { border-top: 1px solid rgba(200,169,110,0.25); }
    .ff-item:last-of-type { border-bottom: 1px solid rgba(200,169,110,0.25); }
    .ff-item summary { list-style: none; cursor: pointer; padding: 16px 4px; display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
    .ff-item summary::-webkit-details-marker { display: none; }
    .ff-name { font-family: 'Cormorant Garamond', serif; font-weight: 500; font-size: 20px; color: #1A1814; }
    .ff-sub { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 13.5px; color: #C8A96E; text-align: right; }
    .ff-body { padding: 4px 4px 20px; }
    .ff-body p { font-family: 'Cormorant Garamond', serif; font-size: 16px; line-height: 1.65; color: #1A1814; margin-bottom: 14px; }
    .ff-mantras { background: #fff; border-left: 2px solid #DFC898; padding: 16px 18px 16px 22px; margin-top: 16px; }
    .ff-mantra-title { font-family: 'DM Sans', sans-serif; font-size: 9.5px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #C8A96E; margin-bottom: 12px; }
    .ff-mantra { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 15px; line-height: 1.5; color: #5A534C; margin-bottom: 8px; padding-left: 16px; position: relative; }
    .ff-mantra::before { content: '\u2014'; position: absolute; left: 0; color: #DFC898; font-style: normal; }
    .ff-closing { font-family: 'Cormorant Garamond', serif; font-size: 16px; line-height: 1.65; color: #1A1814; margin-top: 24px; }
  `;
  document.head.appendChild(style);
}

function buildFormeBlock() {
  ensureFormeStyles();
  const wrap = document.createElement('div');
  wrap.className = 'ff-wrap';

  const intro = "L'autosabotaggio non si presenta mai col suo nome. Si traveste, con una certa eleganza pure, e ogni donna ha il suo travestimento preferito, quello che indossa così spesso da non riconoscerlo più come un abito di scena. Qui trovi i cinque più comuni. Leggili senza fretta, senza cercare subito il tuo: nessuno ti darà un responso alla fine, perché il riconoscimento, quello vero, funziona meglio di qualsiasi diagnosi. Se ti ritrovi in uno, o magari in più di uno a seconda del giorno, tienilo a mente. Ti servirà tra poco, quando dovrai descrivere il Meccanismo con parole tue.";

  const closing = "Ti sei riconosciuta in una sola, o magari in tutte, a seconda del giorno? Va bene così: le forme si mescolano e si danno il cambio con una certa disinvoltura. Adesso però lascia perdere l'etichetta, perché quello che conta è l'episodio: nella prossima sezione prendi il tuo modo specifico di deviare e lo guardi da vicino, pezzo per pezzo, finché non lo riconosci al volo.";

  wrap.innerHTML = `
    <div class="ff-eyebrow">Prima di iniziare</div>
    <div class="ff-title">Le cinque <em>forme</em></div>
    <p class="ff-intro">${intro}</p>
    ${FORME.map(f => `
      <details class="ff-item">
        <summary>
          <span class="ff-name">${f.name}</span>
          <span class="ff-sub">${f.subtitle}</span>
        </summary>
        <div class="ff-body">
          ${f.paras.map(p => `<p>${p}</p>`).join('')}
          <div class="ff-mantras">
            <div class="ff-mantra-title">Tre cose da notare</div>
            ${f.mantras.map(m => `<div class="ff-mantra">${m}</div>`).join('')}
          </div>
        </div>
      </details>
    `).join('')}
    <p class="ff-closing">${closing}</p>
  `;
  return wrap;
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

  // Il Meccanismo apre con la lettura "Le cinque forme"
  if (pid === 'autosabotaggio') {
    list.appendChild(buildFormeBlock());
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

  if (p.pdfUrl) {
    const pdfCard = document.createElement('div');
    pdfCard.className = 'intro-card';
    pdfCard.innerHTML = `
      <div class="intro-card-eyebrow">Preferisci scrivere a mano?</div>
      <div class="intro-card-title" style="font-size: 22px;">Scarica il quaderno</div>
      <p class="intro-card-para">Stessa struttura di questo percorso, spazio per scrivere con la penna. Si stampa e si scrive quando vuoi.</p>
      <a href="${p.pdfUrl}" target="_blank" rel="noopener" class="btn-unlock" style="display:inline-block; text-decoration:none; text-align:center;">Scarica il PDF</a>
    `;
    list.appendChild(pdfCard);
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
  const map = { 'I': 'uno', 'II': 'due', 'III': 'tre', 'IV': 'quattro', 'V': 'cinque', 'VI': 'sei' };
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
