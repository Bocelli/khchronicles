/**
 * GUIDA AGLI ORDINI DI GIOCO DI KINGDOM HEARTS
 * Release Order, Chronological Order, Narrative Optimal Order, oltre alla guida alle collection console e PC.
 */

window.KH_ORDERS_DATA = {
  compilationGuide: {
    title: "Dove e Come Giocare Tutta la Saga Oggi",
    intro: "Grazie alle raccolte rimasterizzate in alta definizione, l'intera saga di Kingdom Hearts (oltre 100 ore di gioco) è oggi comodamente accessibile su quasi tutte le piattaforme moderne in 60fps gloriosi.",
    packages: [
      {
        name: "Kingdom Hearts HD 1.5 + 2.5 ReMIX",
        status: "Indispensabile (Il pacchetto base fondamentale)",
        contents: [
          "Kingdom Hearts Final Mix (Giocabile)",
          "Kingdom Hearts Re:Chain of Memories (Giocabile)",
          "Kingdom Hearts II Final Mix (Giocabile)",
          "Kingdom Hearts Birth by Sleep Final Mix (Giocabile)",
          "Kingdom Hearts 358/2 Days (Filmato cinematografico HD di 3 ore)",
          "Kingdom Hearts Re:coded (Filmato cinematografico HD di 3 ore)"
        ],
        platforms: "PlayStation 4 / 5, Xbox One / Series, PC (Steam & Epic Games Store), Nintendo Switch (Cloud)"
      },
      {
        name: "Kingdom Hearts HD 2.8 Final Chapter Prologue",
        status: "Ponte fondamentale verso Kingdom Hearts III",
        contents: [
          "Kingdom Hearts Dream Drop Distance HD (Giocabile)",
          "Kingdom Hearts 0.2 Birth by Sleep - A Fragmentary Passage (Giocabile in Unreal Engine)",
          "Kingdom Hearts χ Back Cover (Film d'animazione cinematografico in Unreal Engine)"
        ],
        platforms: "PlayStation 4 / 5, Xbox One / Series, PC (Steam & Epic Games Store), Nintendo Switch (Cloud)"
      },
      {
        name: "Kingdom Hearts III + DLC Re Mind",
        status: "Il Climax della Dark Seeker Saga",
        contents: [
          "Kingdom Hearts III (Gioco Completo)",
          "DLC Re Mind (Capitolo di trama aggiuntivo, 13 Boss Dati e il leggendario scontro con Yozora)"
        ],
        platforms: "PlayStation 4 / 5, Xbox One / Series, PC (Steam & Epic Games Store), Nintendo Switch (Cloud)"
      },
      {
        name: "Kingdom Hearts: Melody of Memory",
        status: "L'Epilogo Musicale e il Ponte verso KH4",
        contents: [
          "Rhythm Game con oltre 140 canzoni e le cutscene finali che introducono Quadratum e il viaggio di Riku"
        ],
        platforms: "PlayStation 4 / 5, Xbox One / Series, Nintendo Switch (Nativa, NON cloud!), PC"
      }
    ],
    switchCloudWarning: "ATTENZIONE SU NINTENDO SWITCH: I capitoli principali su Switch girano esclusivamente tramite versione CLOUD (streaming internet). Se la tua connessione non è stabilissima a bassissima latenza, potresti riscontrare cali di frame, input lag e disconnessioni nei combattimenti concitati. Consigliamo caldamente di giocare su PC (Steam), PlayStation o Xbox per avere i 60fps nativi fluidi."
  },

  orders: [
    {
      id: "release-order",
      title: "1. Ordine di Uscita (Release Order)",
      badge: "Raccomandato Assoluto per la Prima Volta",
      description: "È l'ordine in cui Tetsuya Nomura e Square Enix hanno pubblicato i giochi. Preserva OGNI singolo colpo di scena, evita spoiler catastrofici e permette di apprezzare l'incredibile evoluzione tecnologica del gameplay da PS2 a PS4.",
      pros: [
        "Nessun rischio di rovinarsi colpi di scena memorabili",
        "Evoluzione naturale dei comandi di gioco senza fare passi indietro nei controlli",
        "Vivi i misteri esattamente come sono stati svelati alla community nel corso di vent'anni"
      ],
      cons: [
        "I giochi saltano temporalmente avanti e indietro nel tempo lungo la timeline canonica"
      ],
      steps: [
        { num: 1, game: "Kingdom Hearts Final Mix", note: "L'inizio dell'avventura di Sora, Paperino e Pippo." },
        { num: 2, game: "Kingdom Hearts Re:Chain of Memories", note: "Il ponte diretto tra KH1 e KH2 al Castello dell'Oblio." },
        { num: 3, game: "Kingdom Hearts II Final Mix", note: "Il capolavoro assoluto della saga (giocalo PRIMA di 358/2 Days!)." },
        { num: 4, game: "Kingdom Hearts 358/2 Days", note: "Filmato HD. Da guardare SUBITO DOPO KH2 per comprendere a pieno Roxas e Axel senza spoilerarti l'identità di Roxas." },
        { num: 5, game: "Kingdom Hearts Birth by Sleep Final Mix", note: "Il prequel 10 anni prima: svela le origini di Xehanort e il destino di Terra, Aqua e Ventus." },
        { num: 6, game: "Kingdom Hearts Re:coded", note: "Filmato HD. Il diario digitalizzato che collega KH2 a Dream Drop Distance." },
        { num: 7, game: "Kingdom Hearts Dream Drop Distance HD", note: "L'esame dei Maestri nei sogni e la rivelazione dei viaggi nel tempo." },
        { num: 8, game: "Kingdom Hearts χ Back Cover", note: "Film HD che narra l'Era delle Fiabe dal punto di vista dei Veggenti." },
        { num: 9, game: "Kingdom Hearts 0.2 Birth by Sleep - A Fragmentary Passage", note: "Il capitolo di Aqua nel Regno dell'Oscurità che conduce direttamente all'inizio di KH3." },
        { num: 10, game: "Kingdom Hearts III + DLC Re Mind", note: "La conclusione titanica della Guerra dei Keyblade e il destino di Sora." },
        { num: 11, game: "Kingdom Hearts: Melody of Memory", note: "La ricerca musicale di Kairi e la scoperta di Quadratum." }
      ]
    },

    {
      id: "chronological-order",
      title: "2. Ordine Cronologico della Storia (In-Universe Order)",
      badge: "Per Veterani e Replay Storico",
      description: "Seguire la storia in ordine cronologico in-universe, dal passato remoto dell'Era delle Fiabe fino a Quadratum. Ideale per chi conosce già la saga o per chi vuole ripercorrere la narrazione come un unico immenso romanzo storico coerente di causa-effetto.",
      pros: [
        "Vedi nascere e svilupparsi ogni complotto fin dal suo concepimento",
        "Le motivazioni di Xehanort e il peso della tragedia di Birth by Sleep danno un impatto devastante a Kingdom Hearts 1",
        "Sensazione di una saga generazionale monumentale"
      ],
      cons: [
        "SCONSIGLIATO A CHI NON HA MAI GIOCATO: Birth by Sleep e Union Cross spoilerano identità segrete e colpi di scena di KH1 e KH2!",
        "Passare dal gameplay moderno di Birth by Sleep a quello più legnoso del primo capitolo per PS2 può risultare spiazzante."
      ],
      steps: [
        { num: 1, game: "Kingdom Hearts χ Back Cover & Union χ", note: "La nascita dei mondi, i Veggenti, la Prima Guerra dei Keyblade e i Dandelion." },
        { num: 2, game: "Kingdom Hearts Dark Road", note: "La giovinezza di Xehanort e Eraqus a Scala ad Caelum." },
        { num: 3, game: "Kingdom Hearts Birth by Sleep Final Mix", note: "La tragedia di Terra, Aqua e Ventus dieci anni prima di Sora." },
        { num: 4, game: "Kingdom Hearts 0.2 Birth by Sleep - A Fragmentary Passage", note: "Aqua nel Regno dell'Oscurità durante il decennio di solitudine." },
        { num: 5, game: "Kingdom Hearts Final Mix", note: "La caduta delle Isole del Destino e la prima missione di Sora." },
        { num: 6, game: "Kingdom Hearts 358/2 Days (Prima metà, giorni 1-25)", note: "Roxas entra nell'Organizzazione XIII mentre Sora è a Traverse Town." },
        { num: 7, game: "Kingdom Hearts Re:Chain of Memories", note: "Sora al Castello dell'Oblio e Riku nella Via per l'Alba." },
        { num: 8, game: "Kingdom Hearts 358/2 Days (Seconda metà, giorni 26-358)", note: "Xion scopre la verità, la ribellione di Roxas e il duello con Riku." },
        { num: 9, game: "Kingdom Hearts II Final Mix", note: "Il risveglio di Sora e la distruzione dell'Organizzazione XIII." },
        { num: 10, game: "Kingdom Hearts Re:coded", note: "La decifrazione del messaggio nel Grillario." },
        { num: 11, game: "Kingdom Hearts Dream Drop Distance HD", note: "L'esame nei mondi dormienti e la riunione della Vera Organizzazione." },
        { num: 12, game: "Kingdom Hearts III + DLC Re Mind", note: "La resa dei conti definitiva e la battaglia di Scala ad Caelum." },
        { num: 13, game: "Kingdom Hearts: Melody of Memory", note: "La ricerca di Sora e l'apertura del varco verso l'Altra Realtà." }
      ]
    },

    {
      id: "narrative-optimal",
      title: "3. Ordine Ottimizzato della Community (Il Miglior Compromesso)",
      badge: "Il Perfetto Equilibrio Emotivo",
      description: "Risolve il più grande dilemma dei fan: 'Devo giocare Kingdom Hearts II o guardare 358/2 Days prima?'. Nel menu della raccolta 1.5+2.5, 358/2 Days è posizionato prima di KH2, ma giocarlo prima distrugge completamente l'alone di mistero del prologo di Roxas a Crepuscopoli! Questo ordine perfeziona la scaletta per la massima catarsi emotiva.",
      pros: [
        "Massimizza l'impatto emotivo di ciascuna rivelazione",
        "Risolve il problema del prologo di Crepuscopoli",
        "Permette una fruizione fluida e appassionante senza punti morti"
      ],
      cons: [
        "Richiede di non seguire ciecamente l'ordine dall'alto in basso nel menu della collection 1.5+2.5"
      ],
      steps: [
        { num: 1, game: "Kingdom Hearts Final Mix", note: "Familiarizza con Sora, Kairi, Riku e le meccaniche di base." },
        { num: 2, game: "Kingdom Hearts Re:Chain of Memories", note: "Comprendi come Sora è finito addormentato nel bozzolo e chi sono Axel e l'Organizzazione." },
        { num: 3, game: "Kingdom Hearts II Final Mix", note: "Vivi il prologo di Roxas con sincera sorpresa e concludi la battaglia contro Xemnas." },
        { num: 4, game: "Kingdom Hearts 358/2 Days (Filmato HD)", note: "Ora che conosci la fine di Roxas, guarda Days: piangerai per ogni singolo gelato condiviso sul campanile!" },
        { num: 5, game: "Kingdom Hearts Birth by Sleep Final Mix", note: "Affronta il grande prequel per scoprire le radici di Xehanort e il legame tra Ventus e Roxas." },
        { num: 6, game: "Kingdom Hearts Re:coded (Filmato HD)", note: "Un rapido riepilogo che svela quali cuori debbano essere salvati." },
        { num: 7, game: "Kingdom Hearts Dream Drop Distance HD", note: "Impara il Flowmotion e preparati alle rivelazioni dei viaggi nel tempo." },
        { num: 8, game: "Kingdom Hearts χ Back Cover", note: "Guarda il filmato per scoprire la Scatola Nera prima di vederla in KH3." },
        { num: 9, game: "Kingdom Hearts 0.2 Birth by Sleep", note: "Il capitolo di Aqua che funge da introduzione tecnica e narrativa immediata a KH3." },
        { num: 10, game: "Kingdom Hearts III + Re Mind", note: "Il gran finale della Dark Seeker Saga." },
        { num: 11, game: "Kingdom Hearts: Melody of Memory", note: "Il nuovo punto di partenza verso il futuro." }
      ]
    }
  ]
};
