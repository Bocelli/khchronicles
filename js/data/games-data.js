/**
 * GUIDA COMPLETA A TUTTI I GIOCHI DI KINGDOM HEARTS
 * Include sistemi di combattimento, versioni migliori, consigli d'oro, sblocco filmati segreti e sintesi.
 */

window.KH_GAMES_DATA = [
  {
    id: "kh1-fm",
    title: "Kingdom Hearts Final Mix",
    originalYear: 2002,
    chronologicalOrder: 5,
    releaseOrder: 1,
    coverBadge: "L'Inizio di Tutto",
    platforms: "PS2 (originale), PS3 (1.5), PS4, Xbox One, PC Steam / Epic, Switch 1 & 2 (Nativo)",
    recommendedVersion: "PC Steam o PS4/PS5 (Kingdom Hearts HD 1.5 + 2.5 ReMIX)",
    duration: "25-30 ore (Storia) | 55-65 ore (100% Final Mix)",
    combatStyle: "Action RPG Puro con telecamera manuale, magie a menu classico e abilità combo da equipaggiare con AP.",
    difficultyGuide: {
      recommended: "Final Mix (Normale) per i neofiti, Proud per chi cerca una sfida avvincente.",
      beginner: "Danni ridotti, Sora parte con EXP extra e potenziamenti immediati.",
      standard: "Equilibrato, ideale per godersi la favola Disney e la crescita organica dei personaggi.",
      proud: "I nemici infliggono il doppio dei danni; l'inizio (fino a Città di Mezzo 2) richiede schivate impeccabili."
    },
    goldenTips: [
      "All'inizio sul risveglio scegli lo Scudo per ottenere abilità difensive chiave (come 'Second Chance' e 'Once More') a livelli molto più bassi (Lv.36 invece che Lv.99!). Rinuncia alla Spada o alla Bacchetta.",
      "Imposta le scorciatoie (L1) per Cura, Thunder e Fire o Aero. Aero è vitale nei boss avanzati poiché dimezza tutti i danni subiti.",
      "Usa costantemente 'Tutti per Uno' e assegna l'abilità 'Grillo' per riempire la barra MP di Paperino.",
      "I Trio (Trinity Marks) sono fondamentali per trovare i 99 Cuccioli dalmata e sbloccare materiali di sintesi rari."
    ],
    secretEndingUnlock: {
      title: "Another Side, Another Story & Deep Dive",
      beginner: "Non disponibile in modalità Principiante (Beginner).",
      standard: "Completa il Grillario al 100% (tutti i 99 dalmata, tutte le coppe del Monte Olimpo, tutte le serrature e tutte le ricette d'officina).",
      proud: "Basta chiudere tutte le serrature di tutti i mondi (incluso il Bosco dei 100 Acri) e vincere la Coppa Ade all'Olimpo."
    },
    secretsAndSynthesis: {
      ultimaWeapon: "Richiede di sintetizzare tutte le 30 ricette dell'officina Moguri a Traverse Town. Richiede materiali unici dai 'Pink Agaricus', 'Sniperwild' e 'Chimera' introdotti nella Final Mix.",
      secretBosses: ["Sephiroth (Colosseo)", "Uomo Misterioso / Unknown / Xemnas (Fortezza Oscura)", "Kurt Zisa (Agrabah)", "Titano di Ghiaccio (Olimpo)", "Fantasma della Torre dell'Orologio (Isola che non C'è)"]
    }
  },

  {
    id: "kh-recom",
    title: "Kingdom Hearts Re:Chain of Memories",
    originalYear: 2004,
    chronologicalOrder: 6,
    releaseOrder: 2,
    coverBadge: "Strategia con le Carte",
    platforms: "GBA (versione 2D originale), PS2, PS3, PS4, Xbox One, PC Steam / Epic",
    recommendedVersion: "PC Steam / PS4 (HD 1.5 + 2.5 ReMIX)",
    duration: "20-25 ore (Sora) + 10 ore (Riku) | 50 ore (100%)",
    combatStyle: "Deck Building Real-Time con carte numerate da 0 a 9. I valori più alti spezzano quelli più bassi (Card Break); le carte 0 spezzano qualunque attacco se giocate dopo.",
    difficultyGuide: {
      recommended: "Standard per comprendere a fondo le sinergie del mazzo senza frustrazioni.",
      beginner: "I boss usano meno carte di valore alto.",
      standard: "Perfetto per chi ama combinare 'Trucchi' (Sleights) e carte nemico.",
      proud: "Richiede una costruzione meticolosa del mazzo con azzeratori (0) sempre a portata di mano."
    },
    goldenTips: [
      "Impara il potere dello '0': metti sempre 2 o 3 carte di valore 0 all'inizio o alla fine del mazzo (usando la scorciatoia). Quando un boss carica un trucco devastante, lancia lo zero per cancellarglielo all'istante!",
      "Il trucco 'Sonic Blade' (Iperguardia), 'Lethal Frame' (Fermatempo mortale) e 'Mega Flare' (Mushu + 2 Fire) distruggono letteralmente ogni nemico e boss del gioco.",
      "Negli aumenti di livello dai priorità a CP (Punti Capacità) e Nuovi Trucchi; gli HP possono rimanere bassi se il mazzo è costruito a dovere.",
      "Nella modalità Riku (Reverse/Rebirth) il mazzo è fisso: sfrutta la 'Modalità Oscura' e il contrattacco duello."
    ],
    secretEndingUnlock: {
      title: "Rapporti Segreti e Carte Speciali",
      beginner: "Completa entrambe le storie (Sora + Riku).",
      standard: "Completa la storia di Sora e la modalità Reverse/Rebirth di Riku.",
      proud: "Completa entrambe le storie. Su console moderne sblocca anche i temi e i trofei."
    },
    secretsAndSynthesis: {
      ultimaWeapon: "La carta Ultima Weapon si ottiene aprendo le 'Stanze della Ricompensa' dopo aver completato entrambe le storie.",
      secretBosses: ["Marluxia Terza Forma (Battaglia a bordo del mecha angelico nel Re:CoM 3D)."]
    }
  },

  {
    id: "kh2-fm",
    title: "Kingdom Hearts II Final Mix",
    originalYear: 2005,
    chronologicalOrder: 8,
    releaseOrder: 3,
    coverBadge: "Il Capolavoro del Combat System",
    platforms: "PS2, PS3, PS4, Xbox One, PC Steam / Epic, Switch 1 & 2 (Nativo)",
    recommendedVersion: "PC Steam o PS4 (HD 1.5 + 2.5 ReMIX a 60fps)",
    duration: "30-35 ore (Storia) | 70-90 ore (100% Final Mix)",
    combatStyle: "Il pinnacolo dell'Action RPG: comandi di reazione (Reaction Commands), Forme di Fusione con abilità di movimento permanenti (High Jump, Quick Run, Glide), magie dinamiche e Guardie frame-perfect.",
    difficultyGuide: {
      recommended: "Critical Mode (Modalità Critica) se sei già pratico di action RPG: è universalmente considerata la migliore esperienza di Kingdom Hearts mai creata!",
      beginner: "Molto facile, per chi vuole godersi la storia senza preoccuparsi dei comandi di reazione.",
      standard: "Godibile, ma non sfrutta a fondo la ricchezza del combat system.",
      proud: "Nemici più aggressivi.",
      critical: "Hai il 50% di HP massimi, ma infliggi il 25% di danni in più ed inizi con 50 AP e abilità extra straordinarie fin dall'inizio!"
    },
    goldenTips: [
      "Allena SEMPRE le Forme di Fusione! Salire di livello con la Valor Form ti dona Salto Alto (High Jump); la Wisdom ti dà Scatto Rapido (Quick Run); la Limit Form dona Schivata Rotolante (Dodge Roll); la Master Form dona Doppio Salto (Aerial Dodge); la Final Form ti dona la Planata (Glide)!",
      "La magia 'Reflect' (Reflex) è la mossa più devastante dell'intero gioco: genera una barriera che non solo annulla qualsiasi danno fisico o magico a 360°, ma esplode rispedendo il danno centuplicato al nemico!",
      "I Limiti (come Trinity Limit o Comet di Paperino) donano invincibilità totale durante l'animazione, perfetti per salvarsi nei momenti disperati.",
      "Usa la 'Limit Form' (introdotta nella Final Mix): ti permette di eseguire i comandi classici di KH1 (Sonic Blade, Strike Raid, Ars Arcanum) curandoti mentre colpisci."
    ],
    secretEndingUnlock: {
      title: "The Gathering & Birth by Sleep (Teaser esteso)",
      beginner: "Non sbloccabile in Beginner.",
      standard: "Completa il Grillario al 100%, vinci tutte le coppe del Paradosso e sconfiggi tutti i 13 boss dell'Organizzazione Dati e la Volontà Residua.",
      proud: "Completa al 100% il Grillario (inclusi minigiochi e collezionabili).",
      critical: "Basta ottenere le tre prove (Tre Corone): battere la Volontà Residua, battere l'Organizzazione Dati e battere i Funghi XIII!"
    },
    secretsAndSynthesis: {
      ultimaWeapon: "Richiede 13 Oricalco+ (7 sparsi nei forzieri e ricompense di minigiochi) e 1 Cristallo Densità per dimezzare i materiali Moguri con l'Energicristallo.",
      secretBosses: ["Volontà Residua / Lingering Will (Cimitero dei Keyblade)", "I 13 Membri dell'Organizzazione Dati (Caverna della Rimembranza)", "Sephiroth (Fortezza Oscura)", "I 13 Funghi dell'Organizzazione"]
    }
  },

  {
    id: "kh-days",
    title: "Kingdom Hearts 358/2 Days",
    originalYear: 2009,
    chronologicalOrder: 7,
    releaseOrder: 4,
    coverBadge: "L'Anima di Crepuscopoli",
    platforms: "Nintendo DS (Gioco originale giocabile); Filmato HD in 1.5 ReMIX",
    recommendedVersion: "Film cinematografico HD in 1.5 ReMIX per la storia; emulatore o cartuccia DS originale per provare il gameplay.",
    duration: "3 ore (Film cinematografico HD) | 30 ore (Gioco originale DS)",
    combatStyle: "Sistema a Pannelli: abilità, magie, equipaggiamenti, pozioni e persino i livelli devono essere incastrati a mosaico come un puzzle in una griglia limitata.",
    difficultyGuide: {
      recommended: "Standard sul DS per un'esperienza bilanciata.",
      beginner: "Adatto a chi fatica con i comandi del Nintendo DS.",
      standard: "La norma.",
      proud: "Mette a dura prova la gestione dei pannelli di cura."
    },
    goldenTips: [
      "Incastra i pannelli 'Link' per moltiplicare gli effetti delle magie e delle abilità equipaggiate.",
      "La modalità 'Limite' quando i tuoi HP sono in rosso attiva attacchi furiosi esclusivi: per Roxas è 'Fiammata' / 'Raggio di Luce'.",
      "Nel filmato HD delle collection ricordati di scorrere tutti i diari di Roxas e i dossier segreti per sbloccare il trofeo e le carte esclusive in Re:CoM."
    ],
    secretEndingUnlock: {
      title: "Filmato Segreto 'Connessione'",
      beginner: "Guarda tutti i capitoli del filmato HD e leggi tutte le annotazioni del diario.",
      standard: "Idem.",
      proud: "Idem."
    },
    secretsAndSynthesis: {
      ultimaWeapon: "Nel gioco per DS si sintetizza comprando il pannello 'Zero Gear' e inserendo 4 'Sight Units'.",
      secretBosses: ["Dustflier (Grande Heartless volante a Crepuscopoli)", "Kurt Zisa nei mondi virtuali"]
    }
  },

  {
    id: "kh-bbs",
    title: "Kingdom Hearts Birth by Sleep Final Mix",
    originalYear: 2010,
    chronologicalOrder: 3,
    releaseOrder: 5,
    coverBadge: "L'Inizio dell'Oscurità",
    platforms: "PSP (originale), PS3 (2.5), PS4, Xbox One, PC Steam / Epic",
    recommendedVersion: "PC Steam o PS4 (HD 1.5 + 2.5 ReMIX)",
    duration: "10 ore per personaggio (30 ore totali) | 70 ore (100% Final Mix)",
    combatStyle: "Command Deck (Piattaforma Comandi): selezioni le tecniche premendo triangolo con tempo di ricarica (cooldown). Stili di Comando (Command Styles), Unioni D (D-Link), e Tiro Mirato (Shotlock) con invincibilità.",
    difficultyGuide: {
      recommended: "Proud o Critical per sbloccare l'Episodio Finale e l'Episodio Segreto senza dover completare il diario al 100%!",
      beginner: "Sconsigliato: richiede un grinding mostruoso per i segreti.",
      standard: "Richiede di completare tutti i rapporti di Xehanort e i minigiochi.",
      proud: "Basta raccogliere tutti i 12 Rapporti di Xehanort e le figurine.",
      critical: "Basta raccogliere i 12 Rapporti di Xehanort per accedere subito all'Episodio Finale e Segreto!"
    },
    goldenTips: [
      "Fondi i comandi il prima possibile nei menu! Unendo magie e attacchi fisici crei tecniche devastanti e impari abilità passive permanenti (come Once More, Second Chance e Leaf Bracer).",
      "I comandi più potenti del gioco sono 'Thunder Surge' (Slancio Tuono) e 'Curaga'. Thunder Surge offre frame di invincibilità e danni altissimi contro qualunque boss segreto!",
      "Il 'Tiro Mirato' (Shotlock) come Ragnarok o Bio Barrage ti rende COMPLETAMENTE immune ai danni per tutta la durata del puntamento e della raffica: usalo per sopravvivere alle mosse definitive dei boss.",
      "L'ordine consigliato per giocare i personaggi è: 1. TERRA -> 2. VENTUS -> 3. AQUA. Questo preserva ogni sorpresa narrativa!"
    ],
    secretEndingUnlock: {
      title: "Blank Points & Episodio Segreto: A Fragmentary Passage",
      beginner: "Non disponibile.",
      standard: "Completa il Diario del Grillo al 100% con tutti e tre i personaggi (trofei, minigiochi, gelati, comandi).",
      proud: "Raccogli tutti i Rapporti di Xehanort e completa l'album delle figurine con 140 punti per personaggio.",
      critical: "Basta completare la storia dei 3 personaggi raccogliendo i 12 Rapporti di Xehanort!"
    },
    secretsAndDetails: {
      ultimaWeapon: "Si ottiene sbloccando e completando l'evento 'I Custodi dell'Arena' al livello 30 dell'Arena del Miraggio.",
      secretBosses: ["Figura Misteriosa / Giovane Xehanort (La Terra di Partenza)", "Resti di Vanitas (Cimitero dei Keyblade)", "Armatura di Eraqus (Arena)", "Senza Cuore / No Heart (Arena)"]
    }
  },

  {
    id: "kh-recoded",
    title: "Kingdom Hearts Re:coded",
    originalYear: 2010,
    chronologicalOrder: 9,
    releaseOrder: 6,
    coverBadge: "L'Avventura nel Cyber-Mondo",
    platforms: "Nintendo DS (originale); Filmato Cinematografico HD nelle collection",
    recommendedVersion: "Film HD in Kingdom Hearts 1.5 + 2.5 ReMIX",
    duration: "3 ore (Film cinematografico HD) | 20 ore (Gioco originale DS)",
    combatStyle: "Evoluzione eccellente del Command Deck di BbS unito al 'Matrix Status' per potenziare CPU, frequenze e chip statistici.",
    difficultyGuide: {
      recommended: "Standard o Proud.",
      beginner: "Ideale per i più piccoli.",
      standard: "Ottimo bilanciamento.",
      proud: "Boss secondari impegnativi."
    },
    goldenTips: [
      "Regola il 'Cheat Slider' (gli interruttori del sistema) per modificare la difficoltà, il drop rate dei chip e la percentuale di HP a proprio piacimento.",
      "Completa i Settori di Sistema sbloccando i premi con i punti SP accumulati nei piani virtuali."
    ],
    secretEndingUnlock: {
      title: "Segno del Destino (Ritorno di Xehanort)",
      beginner: "Guarda tutti i capitoli del filmato HD e leggi i profili dei personaggi.",
      standard: "Idem.",
      proud: "Idem."
    },
    secretsAndSynthesis: {
      ultimaWeapon: "Ottenibile completando la sfida dei 100 piani del Settore di Sistema a Hollow Bastion.",
      secretBosses: ["Eliminator (Il temuto Heartless rosso corazzato nei corridoi di bug)"]
    }
  },

  {
    id: "kh-ddd",
    title: "Kingdom Hearts 3D: Dream Drop Distance",
    originalYear: 2012,
    chronologicalOrder: 10,
    releaseOrder: 7,
    coverBadge: "Acrobazie tra i Sogni",
    platforms: "Nintendo 3DS (originale), PS4 (2.8 Final Chapter Prologue), Xbox One, PC Steam / Epic",
    recommendedVersion: "PC Steam o PS4 (HD 2.8 a 60fps fluidissimi)",
    duration: "25-30 ore (Storia) | 55 ore (100%)",
    combatStyle: "Flowmotion: scivola sui corrimano, rimbalza sulle pareti e scatena attacchi d'urto devastanti. Sistema di 'Drop' che scambia forzatamente Sora e Riku allo scadere del timer.",
    difficultyGuide: {
      recommended: "Standard per chi non ama essere interrotto dal timer di Drop; Proud per una sfida seria.",
      beginner: "Molto accessibile.",
      standard: "Bilanciato, i boss richiedono Flowmotion frequente.",
      proud: "Alcuni boss (come il boss finale di Sora) infliggono punizioni durissime.",
      critical: "Sbloccabile dopo aver finito il gioco: severo, richiede Spiriti ben allenati."
    },
    goldenTips: [
      "Acquista sempre le gocce 'Drop-Me-Not' (Non-mi-svegliare) dai negozi Moguri e usale quando l'indicatore di Drop si avvicina allo zero per evitare di essere rispedito all'altro personaggio nel bel mezzo di un boss!",
      "Il Flowmotion (Scatto contro il muro -> Attacco rotante o Schianto a terra) è gratis e non consuma MP o ricarica: abusane per ripulire le stanze all'istante.",
      "Accarezza e nutri i tuoi 'Spiriti' (Dream Eaters) nella schermata dedicata: sbloccare i nodi della loro griglia affinità è l'UNICO modo per imparare abilità passive permanenti come Second Chance e Once More!",
      "I palloncini sono l'arma più forte del gioco: la magia 'Balloon' e 'Balloonra' fa esplodere qualunque boss in pochi secondi."
    ],
    secretEndingUnlock: {
      title: "Un Altro Guardiano della Luce",
      beginner: "Non sbloccabile in Beginner.",
      standard: "Accumula almeno 7 messaggi segreti durante i crediti finali e rispondi correttamente alle 3 domande spirituali di Riku (1: 'Perdere qualcosa di importante', 2: 'I miei amici', 3: 'Per trovare la cosa importante').",
      proud: "Basta rispondere correttamente alle 3 domande spirituali e ottenere 5 messaggi segreti.",
      critical: "Basta rispondere correttamente alle 3 domande spirituali alla fine del gioco!"
    },
    secretsAndSynthesis: {
      ultimaWeapon: "Ottenibile completando tutte le 12 Sfide Portali Speciali (Special Portals) nei mondi.",
      secretBosses: ["Julius (La fognatura della Città di Mezzo - ispirato a Runaway Brain di Topolino)"]
    }
  },

  {
    id: "kh-02",
    title: "Kingdom Hearts 0.2 Birth by Sleep - A Fragmentary Passage",
    originalYear: 2017,
    chronologicalOrder: 4,
    releaseOrder: 8,
    coverBadge: "L'Antipasto di Kingdom Hearts III",
    platforms: "PS4 (2.8 Final Chapter Prologue), Xbox One, PC Steam / Epic",
    recommendedVersion: "PC Steam o PS4",
    duration: "3-4 ore (Storia) | 8-10 ore (Obiettivi e Boss Segreto)",
    combatStyle: "Il motore grafico Unreal Engine 4 incontra lo stile magico di Aqua: Comandi Situazionali, Stile Spaccafavole (Spellweaver) e magie d'impatto visivo sbalorditivo.",
    difficultyGuide: {
      recommended: "Proud Mode per assaporare la tensione del Reame Oscuro.",
      beginner: "Passeggiata di salute.",
      standard: "Fluido e spettacolare.",
      proud: "Richiede l'uso tempestivo della barriera a 360° di Aqua.",
      critical: "Sbloccabile dopo averlo finito: una sfida di precisione assoluta."
    },
    goldenTips: [
      "La barriera magica di Aqua riflette gli attacchi a 360 gradi: usala invece di schivare all'indietro.",
      "Usa la magia 'Thundaga' per attivare lo stile speciale di finitura rapidamente.",
      "Completa le sfide opzionali (i 'Wardrobe Objectives') per personalizzare Aqua con orecchie, ali e costumi unici."
    ],
    secretEndingUnlock: {
      title: "Prologo verso KH3",
      beginner: "Completa la storia.",
      standard: "Completa la storia.",
      proud: "Completa la storia."
    },
    secretsAndSynthesis: {
      ultimaWeapon: "Aqua brandisce il Keyblade 'Master's Defender' di Eraqus.",
      secretBosses: ["Spirito Oscuro / Phantom Aqua (Livello massimo delle sfide dello specchio)"]
    }
  },

  {
    id: "kh3-remaind",
    title: "Kingdom Hearts III + DLC Re Mind",
    originalYear: 2019,
    chronologicalOrder: 11,
    releaseOrder: 9,
    coverBadge: "L'Apoteosi Finale",
    platforms: "PS4, Xbox One, PC Steam / Epic, Switch 2 (Nativo), Switch 1 (Cloud)",
    recommendedVersion: "PC Steam, PS4/PS5 o Switch 2 (include il DLC Re Mind a 60fps)",
    duration: "35-40 ore (Storia) + 15 ore (Re Mind) | 85-110 ore (100% + Data Boss + Yozora)",
    combatStyle: "Cambio Forme del Keyblade (Formchanges con trasformazioni in scudi, pistole, lance), Attrazioni dei parchi Disney (disattivabili con l'abilità Critical), Magie di livello Grande e Link con spiriti.",
    difficultyGuide: {
      recommended: "Critical Mode (introdotta con patch gratuita) o Proud con abilità 'Critical Converter' per godersi un combat system tecnico e profondo.",
      beginner: "Adatto a chi vuole solo guardare il film d'animazione interattivo.",
      standard: "Molto accessibile e permissivo.",
      proud: "Buono ma le Attrazioni Disney rendono il gioco troppo facile.",
      critical: "Eccezionale: disattiva le attrazioni Disney e garantisce Comandi di Trasformazione immediati a ogni combo perfetta!"
    },
    goldenTips: [
      "Nel menu Abilità attiva 'Critical Converter': questo rimuove completamente le giostre Disney (che interrompevano il ritmo) e garantisce invece che a ogni barra combo piena si attivi SUBITO il cambio forma del tuo Keyblade!",
      "I 'Portafortuna' (Lucky Emblems con la sagoma di Topolino) fotografati con il Gummifono sono indispensabili per sbloccare il filmato segreto e materiali rari.",
      "Puoi equipaggiare fino a 3 Keyblade contemporaneamente e scambiarli al volo con i tasti direzionali anche durante le combo!",
      "Cucina i piatti nel bistrot di Crepuscopoli con Remy: i pasti 'Chef Eccellente' donano potenziamenti enormi a forza, magia e abilità automatiche."
    ],
    secretEndingUnlock: {
      title: "Yozora & Quadratum (L'Alba di KH4)",
      beginner: "Fotografa tutti i 90 Portafortuna con il Gummifono.",
      standard: "Fotografa almeno 60 Portafortuna.",
      proud: "Fotografa almeno 30 Portafortuna.",
      critical: "Basta fotografare SOLO 20 Portafortuna!"
    },
    secretsAndSynthesis: {
      ultimaWeapon: "L'Ultima Weapon in KH3 ha la trasformazione 'Ultimate Form' (Spade volanti di telecinesi, teletrasporto e finitura 'Infinity Circle'): la forma più devastante della storia di KH! Richiede 7 Oricalco+ (da minigiochi di budini, cassa delle Isole dei Caraibi, 80 portafortuna, corsa su slittino di Frozen, posta moguri e mondo finale).",
      secretBosses: ["Inferno Oscuro / Dark Inferno (Battaglia del Portale 14)", "I 13 Membri dell'Organizzazione Dati (DLC Re Mind)", "Yozora (Il boss definitivo a Shibuya)"]
    }
  },

  {
    id: "kh-mom",
    title: "Kingdom Hearts: Melody of Memory",
    originalYear: 2020,
    chronologicalOrder: 12,
    releaseOrder: 10,
    coverBadge: "La Sinfonia dei Ricordi",
    platforms: "PS4, Xbox One, Nintendo Switch 1 & 2 (Nativo), PC Steam / Epic",
    recommendedVersion: "Qualsiasi piattaforma (performance perfette ovunque)",
    duration: "10-12 ore (World Tour) | 30 ore (Tutti i brani al grado Master)",
    combatStyle: "Rhythm Game d'Azione: abbatti gli Heartless a tempo di musica con oltre 140 brani leggendari composti da Yoko Shimomura.",
    difficultyGuide: {
      recommended: "Standard per iniziare, Proud per i cultori dei giochi ritmici.",
      beginner: "Tracce con pochi tasti, perfetta per chi vuole solo ascoltare e godersi il viaggio.",
      standard: "Ritmo soddisfacente.",
      proud: "Complessità ritmica elevata con terzine e note triple."
    },
    goldenTips: [
      "Usa la pozione o l'Autocura per non fallire i brani più complessi.",
      "Personalizza i tasti se preferisci usare i dorsali L1/R1 al posto dei pulsanti frontali.",
      "I filmati finali contengono scene inedite fondamentali per capire dove si trova Sora e impostare il viaggio di Riku."
    ],
    secretEndingUnlock: {
      title: "La Conclusione della Ricerca di Kairi",
      beginner: "Completa il Tour dei Mondi e sblocca l'accesso alla Stazione Finale.",
      standard: "Idem.",
      proud: "Idem."
    },
    secretsAndSynthesis: {
      ultimaWeapon: "Sblocca le tracce musicali speciali sintetizzando i materiali moguri collezionati nei brani.",
      secretBosses: ["Armored Xehanort Illusion (Battaglia ritmica finale)"]
    }
  }
];
