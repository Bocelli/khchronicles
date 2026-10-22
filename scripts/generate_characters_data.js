const fs = require('fs');
const path = require('path');

const CHARACTERS = [
  {
    id: "sora",
    name: "Sora",
    japaneseName: "ソラ (Sora)",
    title: "Il Portatore del Cuore & Prescelto della Luce",
    image: "images/characters/sora.png",
    category: "keyblade",
    categoryLabel: "Portatore del Keyblade",
    primaryGame: "Kingdom Hearts I",
    games: ["kh1", "com", "kh2", "recoded", "ddd", "kh3", "kh4"],
    origin: "Isole del Destino",
    weapon: "Catena del Regno (Kingdom Key) & Ultima Weapon",
    voiceActors: { en: "Haley Joel Osment", jp: "Miyu Irino" },
    quote: "«Il mio cuore potrà essere debole, ma non è solo. Ha stretto legami con tante persone... e la loro luce sarà la mia forza!»",
    bio: `Nato sulle tranquille Isole del Destino, Sora è il protagonista indiscusso della saga. Non era destinato a diventare un custode: il Keyblade scelse originariamente Riku, ma quando il cuore di Riku vacillò di fronte all'oscurità, l'infinita purezza, empatia e coraggio di Sora fecero manifestare l'arma nella sua mano.

Nel corso delle sue avventure attraverso i mondi Disney e le dimensioni cosmiche, Sora ha salvato l'universo da Ansem, Xemnas e infine da Master Xehanort nella Seconda Guerra dei Keyblade. Il suo tratto distintivo è la capacità di connettere il proprio cuore con chiunque incontri, ospitando al proprio interno persino i cuori feriti di Ventus, Roxas e Xion.

Dopo aver salvato Kairi abusando del Potere del Risveglio contro le leggi della natura, Sora svanisce dalla realtà ordinaria e si risveglia nella metropoli fotorealistica di Quadratum, aprendo le porte di Kingdom Hearts IV.`,
    keyBonds: [
      { name: "Riku", relation: "Migliore amico, rivale d'infanzia e compagno inossidabile della luce." },
      { name: "Kairi", relation: "Il suo legame eterno, suggellato dalla condivisione del frutto di Paopu." },
      { name: "Roxas", relation: "Il suo Nessuno generato a Hollow Bastion, a cui ha donato un'esistenza propria." },
      { name: "Paperino & Pippo", relation: "I compagni d'armi e fratelli d'avventura più fidati del reame." }
    ],
    trivia: "Nomura progettò originariamente Sora come un ragazzo-leone antropomorfo con una motosega, prima di trasformarlo nel solare guerriero con scarpe iconiche che conosciamo."
  },

  {
    id: "riku",
    name: "Riku",
    japaneseName: "リク (Riku)",
    title: "Il Maestro dell'Alba & Custode del Buio",
    image: "images/characters/riku.png",
    category: "keyblade",
    categoryLabel: "Maestro di Keyblade",
    primaryGame: "Kingdom Hearts I",
    games: ["kh1", "com", "kh2", "days", "ddd", "kh3", "kh4"],
    origin: "Isole del Destino",
    weapon: "Via per l'Alba (Way to the Dawn) & Braveheart",
    voiceActors: { en: "David Gallagher", jp: "Mamoru Miyano" },
    quote: "«Non temo più l'oscurità. Ho imparato che la strada verso la luce passa anche attraverso l'ombra.»",
    bio: `Ragazzo prodigio delle Isole del Destino, Riku ricevette la cerimonia di successione del Keyblade dal Maestro Terra da bambino. Desideroso di scoprire cosa ci fosse oltre l'orizzonte, cadde nell'inganno di Malefica e fu posseduto dall'Heartless Ansem in KH1.

Il suo percorso di redenzione è tra i più profondi e maturi della saga: dopo aver combattuto la propria ombra interiore nel Castello dell'Oblio, decide di camminare sulla 'Via dell'Alba' (Road to Dawn), né pura luce né pura oscurità, ma un perfetto equilibrio.

In Dream Drop Distance supera a pieni voti l'Esame dei Maestri diventando ufficialmente Maestro di Keyblade. In KH3 guida il salvataggio di Aqua e Terra, per poi partire da solo verso Quadratum alla disperata ricerca dello scomparso Sora.`,
    keyBonds: [
      { name: "Sora", relation: "Il fratello spirituale per cui è disposto a sacrificare qualsiasi cosa." },
      { name: "Kairi", relation: "Amica d'infanzia che ha giurato di proteggere fin da bambino." },
      { name: "Topolino", relation: "Mentore, confidente e inseparabile compagno di pattuglia interdimensionale." }
    ],
    trivia: "Il nome 'Riku' deriva dalla parola giapponese 'terra/continente', creando un perfetto trio elementale con Sora (cielo) e Kairi (oceano)."
  },

  {
    id: "kairi",
    name: "Kairi",
    japaneseName: "カイリ (Kairi)",
    title: "La Principessa del Cuore & Raggio di Speranza",
    image: "images/characters/kairi.png",
    category: "guardians",
    categoryLabel: "Guardiana della Luce",
    primaryGame: "Kingdom Hearts I",
    games: ["kh1", "com", "kh2", "kh3", "mom"],
    origin: "Radiant Garden / Isole del Destino",
    weapon: "Ghiande Eterne (Destiny's Embrace)",
    voiceActors: { en: "Hayden Panettiere / Alyson Stoner", jp: "Risa Uchida" },
    quote: "«Un giorno ti troverò, Sora. Non importa quanto lontano andrai, il mio cuore ti raggiungerà sempre.»",
    bio: `Originaria di Radiant Garden (nipote del sindaco o allieva di Ansem il Saggio), Kairi è una delle Sette Principesse del Cuore, esseri il cui cuore è composto da luce purissima e incontaminata dall'oscurità. Da bambina fu inviata alle Isole del Destino da Terranort per rintracciare il portatore del Keyblade.

Durante la tempesta di KH1, il suo cuore cercò rifugio in quello di Sora, rimanendovi finché Sora non liberò se stesso con il Keyblade del cuore della gente.

In KH3 Kairi si addestra nel Bosco Senza Tempo con Lea per padroneggiare il proprio Keyblade, partecipando alla guerra finale contro Xehanort. In Melody of Memory esplora i propri ricordi per localizzare la traccia di Sora verso Quadratum, mettendosi sotto la tutela di Aqua.`,
    keyBonds: [
      { name: "Sora", relation: "Il legame del suo cuore; condivide il frutto di Paopu con lui al tramonto." },
      { name: "Naminé", relation: "Il proprio Nessuno nato dal sacrificio di Sora, ora integrata nel suo cuore." },
      { name: "Lea", relation: "Compagno di addestramento con cui ha stretto un'inaspettata amicizia sincera." }
    ],
    trivia: "Kairi è l'unica Principessa del Cuore della storia ad essere diventata una guerriera di Keyblade sul campo di battaglia."
  },

  {
    id: "roxas",
    name: "Roxas",
    japaneseName: "ロクサス (Roxas)",
    title: "Il Tredicesimo Nessuno & Guerriero del Doppio Keyblade",
    image: "images/characters/roxas.png",
    category: "keyblade",
    categoryLabel: "Portatore del Keyblade",
    primaryGame: "Kingdom Hearts II",
    games: ["kh2", "days", "recoded", "ddd", "kh3"],
    origin: "Crepuscopoli / Il Mondo che non Esiste",
    weapon: "Lontano Ricordo & Portafortuna (Dual Wield)",
    voiceActors: { en: "Jesse McCartney", jp: "Koki Uchiyama" },
    quote: "«Sembra che le mie vacanze estive... siano finite.»",
    bio: `Roxas è il Nessuno nato quando Sora si trafisse con il Keyblade a Hollow Bastion per liberare il cuore di Kairi. A causa del cuore dormiente di Ventus presente in Sora, Roxas ha assunto le sembianze identiche di Ventus anziché quelle di Sora.

Reclutato nell'Organizzazione XIII come Numero XIII per la sua abilità unica di liberare cuori con il Keyblade, strinse un'amicizia indissolubile con Axel e Xion davanti a un gelato al sale marino in cima alla Torre dell'Orologio di Crepuscopoli.

Dopo la tragedia di Xion e la fuga dall'Organizzazione, fu catturato da Riku e inserito in una Crepuscopoli virtuale da DiZ per ricongiungersi a Sora. In KH3, grazie alle ricerche di Ienzo e al cuore che ha sviluppato da solo, si reincarna in una Replica perfetta tornando a vivere libero con Axel e Xion.`,
    keyBonds: [
      { name: "Axel", relation: "Il suo migliore amico, colui che ha sfidato le regole del mondo per proteggerlo." },
      { name: "Xion", relation: "L'amica perduta e ritrovata; per lei impara a impugnare due Keyblade." },
      { name: "Sora", relation: "Il suo 'Sé originale', con cui trova finalmente pace e mutuo rispetto." }
    ],
    trivia: "Il nome 'Roxas' è l'anagramma di 'SORA' con l'aggiunta della lettera 'X', il Marchio dell'Eretico (Recusant's Sigil) imposto da Xemnas."
  },

  {
    id: "axel",
    name: "Axel / Lea",
    japaneseName: "アクセル / リア (Axel / Lea)",
    title: "La Fiamma della Lealtà & Custode dei Ricordi",
    image: "images/characters/axel.png",
    category: "guardians",
    categoryLabel: "Guardiano della Luce",
    primaryGame: "Kingdom Hearts: Chain of Memories",
    games: ["com", "kh2", "days", "recoded", "ddd", "kh3"],
    origin: "Radiant Garden",
    weapon: "Chakram Eterni (Eternal Flames) & Keyblade Legame di Fiamme",
    voiceActors: { en: "Quinton Flynn", jp: "Keiji Fujiwara" },
    quote: "«Memorizzato? (Got it memorized?) Io voglio essere ricordato da chi amo. Questo è ciò che rende immortali.»",
    bio: `Originariamente un ragazzo energico di Radiant Garden di nome Lea, divenne un Nessuno (Numero VIII dell'Organizzazione XIII) con il controllo supremo sulle fiamme e doppi chakram dentati. Agente sotto copertura al Castello dell'Oblio, eliminò i traditori senza esitazione.

Tuttavia, l'incontro con Roxas e Xion risvegliò la sua umanità: benché l'Organizzazione predicasse che i Nessuno fossero gusci senza sentimenti, Axel sviluppò un affetto viscerale e sincero per i due ragazzi. In KH2 si sacrifica nell'Abisso tra i Mondi per salvare Sora in onore di Roxas.

Rinato umano come Lea in DDD, ottiene incredibilmente il proprio Keyblade e in KH3 combatte tra i Sette Guardiani della Luce, ricongiungendosi in lacrime sul tetto della Torre dell'Orologio con Roxas e Xion.`,
    keyBonds: [
      { name: "Roxas", relation: "Il fratello minore del cuore per cui ha tradito l'intera Organizzazione." },
      { name: "Xion", relation: "L'amica che cercò disperatamente di salvare dalla manipolazione di Xemnas." },
      { name: "Isa / Saïx", relation: "L'inseparabile compagno d'infanzia con cui cercava la misteriosa 'Ragazza X'." }
    ],
    trivia: "La frase 'Got it memorized?' era originariamente improvvisata dal doppiatore e divenne così popolare che Nomura la rese il motto ufficiale del personaggio."
  },

  {
    id: "xion",
    name: "Xion",
    japaneseName: "シオン (Xion)",
    title: "Il Quattordicesimo Membro & Il Cuore delle Memorie",
    image: "images/characters/xion.png",
    category: "guardians",
    categoryLabel: "Guardiana della Luce",
    primaryGame: "Kingdom Hearts 358/2 Days",
    games: ["days", "recoded", "ddd", "kh3"],
    origin: "Castello dell'Oblio",
    weapon: "Catena del Regno (Kingdom Key Replica)",
    voiceActors: { en: "Alyson Stoner", jp: "Megumi Toyoguchi" },
    quote: "«Roxas... non piangere. Ricordami. Finché ti ricorderai di me, io non scomparirò mai davvero.»",
    bio: `Creata dal genio scientifico di Vexen come 'Replica No. i', Xion fu inserita nell'Organizzazione XIII come quattordicesimo membro per assorbire i ricordi più preziosi di Sora (in particolare quelli legati a Kairi) qualora Roxas si fosse ribellato.

Inizialmente un guscio senza volto, sviluppò sentimenti e coscienza grazie ai gelati condivisi al tramonto con Roxas e Axel, assumendo le sembianze della ragazza impressa nei ricordi di Sora (Kairi con capelli neri).

Comprendendo che la sua continua esistenza impediva il risveglio di Sora, si scontrò volutamente con Roxas affinché quest'ultimo la distruggesse, sparendo dalla memoria di tutti. In KH3, il suo cuore nascosto dentro Sora riconosce Roxas al Cimitero dei Keyblade, facendola rinascere fisicamente.`,
    keyBonds: [
      { name: "Roxas", relation: "La sua metà complementare; il legame che le ha fatto nascere un'anima vera." },
      { name: "Axel", relation: "L'amico protettivo che ha lottato con la disperazione per non dimenticarla." },
      { name: "Riku", relation: "La guida compassionevole che le ha rivelato la verità sulla propria natura." }
    ],
    trivia: "Il nome 'Xion' unisce 'No. i' (numero immaginario in matematica) e la 'X' dell'Organizzazione, oltre a richiamare 'Shion', la parola giapponese per il fiore Aster tataricus (che significa 'non ti dimenticherò')."
  },

  {
    id: "terra",
    name: "Terra",
    japaneseName: "テラ (Terra)",
    title: "Il Guerriero della Terra & La Volontà Residua",
    image: "images/characters/terra.png",
    category: "keyblade",
    categoryLabel: "Maestro di Keyblade",
    primaryGame: "Kingdom Hearts Birth by Sleep",
    games: ["bbs", "kh02", "recoded", "ddd", "kh3"],
    origin: "Terra di Partenza",
    weapon: "Sguardo Perduto (Ends of the Earth)",
    voiceActors: { en: "Jason Dohring", jp: "Ryotaro Okiayu" },
    quote: "«Xehanort! Il mio corpo potrà anche appartenerti... ma la mia mente, la mia volontà, non le avrai MAI!»",
    bio: `Allievo prediletto del Maestro Eraqus insieme ad Aqua e Ventus, Terra è un custode dall'animo nobile, leale e protettivo, ma vulnerabile alle lusinghe dell'oscurità a causa della sua immensa forza combattiva e dell'ostinazione a proteggere chi ama.

Manipolato con machiavellica precisione da Master Xehanort, Terra cadde nella trappola del vecchio maestro al Cimitero dei Keyblade: Xehanort estrasse il proprio cuore e si impossessò del giovane corpo di Terra, dando vita a 'Terranort'.

Tuttavia, la rabbia e la determinazione di Terra animarono la sua armatura vuota, creando la leggendaria 'Volontà Residua' (Lingering Will), che batté sul posto Xehanort. Per oltre un decennio il suo spirito ha lottato all'interno del Guardiano Oscuro, finché in KH3 non si ribella salvando Aqua e Ventus.`,
    keyBonds: [
      { name: "Aqua", relation: "La compagna di una vita; il faro morale che non ha mai smesso di credere in lui." },
      { name: "Ventus", relation: "Il fratellino minore per cui farebbe da scudo contro qualsiasi pericolo." },
      { name: "Riku", relation: "Il bambino delle Isole a cui ha tramandato il diritto di impugnare il Keyblade." }
    ],
    trivia: "Il boss segreto 'Lingering Will' in KH2 Final Mix è canonico: è la vera armatura di Terra rimasta inginocchiata nel deserto per 11 anni in attesa del ritorno di Xehanort."
  },

  {
    id: "aqua",
    name: "Aqua",
    japaneseName: "アクア (Aqua)",
    title: "La Maestra della Luce & Guardiana dell'Abisso",
    image: "images/characters/aqua.png",
    category: "keyblade",
    categoryLabel: "Maestra di Keyblade",
    primaryGame: "Kingdom Hearts Birth by Sleep",
    games: ["bbs", "kh02", "recoded", "ddd", "kh3"],
    origin: "Terra di Partenza",
    weapon: "Tutore del Maestro (Master's Defender) & Tempesta Cristallina",
    voiceActors: { en: "Willa Holland", jp: "Megumi Toyoguchi" },
    quote: "«C'è sempre una via d'uscita. Finché la luce brillerà nel mio cuore, non mi arrenderò mai all'oscurità.»",
    bio: `L'unica del trio di Birth by Sleep a superare ufficialmente l'Esame dei Maestri all'inizio della storia, Aqua è una maga eccezionale, rigorosa, saggia e guidata da un senso del dovere incrollabile.

Quando la tragedia colpì i suoi compagni, nascose il corpo dormiente di Ventus trasformando la Terra di Partenza nel Castello dell'Oblio. Successivamente affrontò Terranort a Radiant Garden e, pur di salvare il corpo dell'amico Terra, si sacrificò precipitando nel Reame dell'Oscurità.

Ha vagato per oltre dieci anni nel buio più assoluto senza invecchiare, respingendo orde di Heartless e incontrando Ansem il Saggio. In KH3, dopo una breve corruzione come 'Anti-Aqua', viene salvata da Sora e Riku e guida la carica finale contro Xehanort.`,
    keyBonds: [
      { name: "Terra", relation: "L'amico per cui ha sacrificato dieci anni della propria vita nel regno dell'ombra." },
      { name: "Ventus", relation: "Il protetto che ha sigillato nella Stanza del Risveglio per proteggerne il sonno." },
      { name: "Kairi", relation: "La bimba a cui ha involontariamente conferito la benedizione del Keyblade a Radiant Garden." }
    ],
    trivia: "Aqua ha intrecciato i tre Portafortuna 'Wayfinder' con conchiglie di Thalassa, basandosi sull'antica leggenda marinara che promette che gli amici si rincontreranno sempre."
  },

  {
    id: "ventus",
    name: "Ventus",
    japaneseName: "ヴェントゥス (Ventus)",
    title: "Il Custode del Vento & Cuore Senza Macchia",
    image: "images/characters/ventus.png",
    category: "keyblade",
    categoryLabel: "Portatore del Keyblade",
    primaryGame: "Kingdom Hearts Birth by Sleep",
    games: ["bbs", "ux", "recoded", "ddd", "kh3"],
    origin: "Daybreak Town / Terra di Partenza",
    weapon: "Punto di Rottura (Wayward Wind - impugnatura inversa)",
    voiceActors: { en: "Jesse McCartney", jp: "Koki Uchiyama" },
    quote: "«I miei amici sono la mia forza... e io sono la loro! Insieme siamo invincibili!»",
    bio: `Ventus è uno dei personaggi più affascinanti e temporalmente complessi: visse originariamente secoli prima nell'Era delle Fiabe come uno dei cinque leader dei Dandelion in Union χ, ospitando inconsciamente un'Oscurità primordiale.

Spedito nel futuro tramite l'Arca, fu trovato da Master Xehanort che estrasse con violenza l'oscurità dal suo cuore creando Vanitas. Con il cuore spezzato, Ventus fu affidato a Eraqus e crebbe con Terra e Aqua. Impugna il Keyblade con una caratteristica impugnatura inversa.

Nel climax di Birth by Sleep distrugge la χ-blade sacrificando il proprio cuore pur di sconfiggere Vanitas. Il suo cuore vagante trovò rifugio nel piccolo Sora alle Isole del Destino. Dopo 11 anni di sonno nel Castello dell'Oblio, viene svegliato da Sora con il Potere del Risveglio.`,
    keyBonds: [
      { name: "Terra & Aqua", relation: "La sua famiglia adottiva, il faro luminoso della sua esistenza." },
      { name: "Sora", relation: "L'anima generosa che ha custodito il suo cuore nel proprio petto per un decennio." },
      { name: "Vanitas", relation: "La sua metà oscura incarnata, con cui doveva forzare la nascita della χ-blade." }
    ],
    trivia: "L'aspetto di Roxas è identico a Ventus proprio perché il cuore di Ventus risiedeva dentro Sora nel momento in cui Sora creò il proprio Nessuno a Hollow Bastion."
  },

  {
    id: "master-xehanort",
    name: "Master Xehanort",
    japaneseName: "マスター・ゼアノート",
    title: "L'Architetto del Destino & Maestro della Seconda Guerra",
    image: "images/characters/master-xehanort.png",
    category: "darkness",
    categoryLabel: "Maestro dell'Oscurità",
    primaryGame: "Kingdom Hearts Birth by Sleep",
    games: ["bbs", "recoded", "ddd", "kh3"],
    origin: "Isole del Destino / Scala ad Caelum",
    weapon: "No Name (Innominata) & la χ-blade primordiale",
    voiceActors: { en: "Leonard Nimoy / Rutger Hauer / Christopher Lloyd", jp: "Chikao Otsuka / Akio Otsuka" },
    quote: "«L'oscurità non è malvagia in sé. È la metà dimenticata del creato. E io resetterò il cosmo alla perfetta armonia primigenia.»",
    bio: `L'antagonista principale dell'intera saga 'Dark Seeker'. Nato alle Isole del Destino, fu addestrato come Maestro di Keyblade a Scala ad Caelum insieme a Eraqus. A differenza di quest'ultimo, sviluppò la convinzione ossessiva che la luce avesse reso i mondi compiacenti e che solo un perfetto bilanciamento con l'oscurità potesse rinnovare il cosmo.

Comprendendo che la sua vita biologica stava per terminare, orchestrò un piano calcolato su decenni: rubare il corpo di Terra, mandare il proprio cuore nel passato per reclutare 13 versioni di se stesso attraverso il tempo e forzare la collisione con i Sette Guardiani della Luce per forgiare la χ-blade.

Viene infine sconfitto a Scala ad Caelum da Sora, Donald e Goofy in KH3; riappacificatosi in punto di morte con lo spirito di Eraqus, cede la χ-blade a Sora e ascende nell'aldilà insieme al vecchio compagno.`,
    keyBonds: [
      { name: "Eraqus", relation: "Il compagno di giovinezza e scacchi con cui ha condiviso la via dei maestri." },
      { name: "Terra", relation: "Il giovane guerriero di cui ha usurpato corpo e futuro per un decennio." },
      { name: "Giovane Xehanort", relation: "La propria incarnazione passata, inviata a raccogliere i membri dell'Organizzazione." }
    ],
    trivia: "Xehanort è l'anagramma di 'NO HEART' o 'ANOTHER' con l'aggiunta della 'X' del Marchio dell'Eretico."
  },

  {
    id: "young-xehanort",
    name: "Giovane Xehanort",
    japaneseName: "青年ゼアノート",
    title: "Il Viaggiatore del Tempo & Il Burattinaio dei Ricordi",
    image: "images/characters/young-xehanort.png",
    category: "darkness",
    categoryLabel: "La Vera Organizzazione XIII",
    primaryGame: "Kingdom Hearts 3D: Dream Drop Distance",
    games: ["bbs", "ddd", "kh3", "ux"],
    origin: "Isole del Destino",
    weapon: "Doppie Lame del Tempo & No Name",
    voiceActors: { en: "David Gallagher / Ben Diskin", jp: "Takanori Takanashi" },
    quote: "«Il tempo si muove sempre verso il medesimo punto prestabilito. Non puoi sfuggire a ciò che è già stato scritto.»",
    bio: `La versione adolescente di Xehanort durante la sua gioventù alle Isole del Destino. Fu avvicinato dall'Heartless Ansem (la figura con il mantello marrone sulla spiaggia in KH1), che gli trasmise la facoltà di trascendere il flusso temporale.

Viaggiando in avanti nel tempo attraverso i decenni, raduna le varie incarnazioni di Xehanort (Ansem, Xemnas, Vanitas, Riku Oscuro) per formare la Vera Organizzazione XIII in Dream Drop Distance e guidare la trappola del sonno ai danni di Sora.

In KH3 combatte al Cimitero dei Keyblade insieme ad Ansem e Xemnas. Prima di essere sconfitto e rispedito nel suo tempo originale senza memoria cosciente, avverte crudelmente Sora che l'abuso del Potere del Risveglio gli costerà l'esistenza terrena.`,
    keyBonds: [
      { name: "Master Xehanort", relation: "Il proprio sé futuro, del quale esegue fedelmente ogni direttiva." },
      { name: "Eraqus (Giovane)", relation: "Il fidato compagno con cui giocava a scacchi sui destini del mondo a Scala ad Caelum." }
    ],
    trivia: "Le sue armi richiamano le lancette di un orologio e il suo combattimento in BBS Final Mix manipola letteralmente il tempo riavvolgendo lo scontro."
  },

  {
    id: "ansem-seeker",
    name: "Ansem Cercatore di Oscurità",
    japaneseName: "闇の探求者アンセム",
    title: "L'Heartless Supremo & L'Araldo dell'Ombra",
    image: "images/characters/ansem-seeker.png",
    category: "darkness",
    categoryLabel: "La Vera Organizzazione XIII",
    primaryGame: "Kingdom Hearts I",
    games: ["kh1", "com", "kh2", "recoded", "ddd", "kh3"],
    origin: "Radiant Garden",
    weapon: "Il Guardiano Oscuro (Dark Figure)",
    voiceActors: { en: "Billy Zane / Richard Epcar", jp: "Akio Otsuka" },
    quote: "«Tutti i mondi hanno inizio nell'oscurità, e nell'oscurità tutti finiscono. Il cuore non fa eccezione!»",
    bio: `L'Heartless nato quando Terranort sacrificò il proprio cuore con il Keyblade a Radiant Garden. Rifiutò la sua vera identità e usurpò il nome del suo benevolo maestro, Ansem il Saggio. Essendo un cuore puro senza corpo materiale, riuscì a trascendere le leggi del tempo.

Antagonista primario del primo Kingdom Hearts, manipolò Riku facendosi ospitare dal suo corpo e distrusse innumerevoli mondi Disney per far confluire i loro cuori nel 'Kingdom Hearts dei Mondi' alla Fine del Mondo.

Viene incenerito dalla luce purissima che scaturisce dall'apertura della Porta di Kingdom Hearts. Rinato come membro della Vera Organizzazione in KH3, viene infine sconfitto; in punto di dissoluzione, ammette con malinconica dignità che gli mancherà la sensazione di viaggiare attraverso il multiverso.`,
    keyBonds: [
      { name: "Riku", relation: "La vittima che ha posseduto in KH1 e l'avversario che ha guidato verso la redenzione." },
      { name: "Xemnas", relation: "Il proprio Nessuno complementare, co-creatore delle strategie di Xehanort." }
    ],
    trivia: "Il Guardiano alle sue spalle non era una semplice ombra evocata, ma lo spirito intrappolato di Terra che cercava disperatamente di ribellarsi."
  },

  {
    id: "xemnas",
    name: "Xemnas",
    japaneseName: "ゼムナス",
    title: "Il Superiore dei Nessuno & Signore del Vuoto",
    image: "images/characters/xemnas.png",
    category: "darkness",
    categoryLabel: "La Vera Organizzazione XIII",
    primaryGame: "Kingdom Hearts II",
    games: ["kh1", "com", "kh2", "days", "recoded", "ddd", "kh3"],
    origin: "Radiant Garden",
    weapon: "Lame Eteree (Interdiction) & Potere del Vuoto",
    voiceActors: { en: "Paul St. Peter", jp: "Norio Wakamoto" },
    quote: "«L'oscurità è la vera natura del cuore... ma noi non abbiamo neppure quello. Cos'è la disperazione senza un cuore da spezzare?»",
    bio: `Il Nessuno di Terranort e leader supremo dell'Organizzazione XIII originale, con il titolo di 'Superiore'. Fondò la roccaforte nel Mondo che non Esiste e manipolò i restanti dodici membri con la menzogna che i Nessuno fossero gusci incapaci di provare sentimenti.

Il suo scopo era raccogliere i cuori liberati da Roxas e Sora per forgiare il 'Kingdom Hearts dei Cuori Umani' a forma di luna gialla, affinché tutti i membri ricevessero corpi completi... nascondendo che in realtà intendeva impiantare un frammento del cuore di Xehanort in ciascuno di essi.

Sconfitto da Sora e Riku al termine di uno scontro epocale nel Reame del Vuoto in KH2, torna in KH3 nella Vera Organizzazione. Prima di svanire, prova per la prima volta un'autentica fitta di solitudine nel petto, realizzando con sgomento che avere un cuore richiede anche il peso della sofferenza.`,
    keyBonds: [
      { name: "Roxas", relation: "Lo strumento chiave per raccogliere cuori, che ha cercato di piegare senza successo." },
      { name: "Ansem il Saggio", relation: "Il maestro di cui ha cancellato il retaggio a Radiant Garden." }
    ],
    trivia: "Xemnas conserva molti tratti e ricordi fisici di Terra: parlava spesso con l'armatura di Aqua nella Stanza della Memoria chiamandola 'amica'."
  },

  {
    id: "vanitas",
    name: "Vanitas",
    japaneseName: "ヴァニタス",
    title: "L'Oscurità Estratta & Il Fratello Spezzato",
    image: "images/characters/vanitas.png",
    category: "darkness",
    categoryLabel: "La Vera Organizzazione XIII",
    primaryGame: "Kingdom Hearts Birth by Sleep",
    games: ["bbs", "ddd", "kh3"],
    origin: "Il Cuore di Ventus",
    weapon: "Inanis (Void Gear)",
    voiceActors: { en: "Haley Joel Osment", jp: "Miyu Irino" },
    quote: "«Cosa sono io? Io sono l'oscurità pura. Quella parte del tuo cuore che hai sempre cercato di rifiutare!»",
    bio: `Creatura crudele, sarcastica e tormentata, Vanitas è nato quando Master Xehanort ha estratto con la forza tutta l'oscurità primordiale dal cuore di Ventus. A causa della connessione tra il cuore ferito di Ventus e il piccolo Sora, il volto di Vanitas sotto il casco assume le sembianze identiche di Sora, ma con occhi dorati e capelli corvini.

È il creatore originale dei Nesciens (Unversed), mostri generati dai suoi stessi impulsi di rabbia, odio e dolore emotivo. Il suo scopo in Birth by Sleep era scontrarsi con Ventus affinché Luce pura e Buio puro forgiassero la χ-blade primordiale.

In KH3 torna nella Vera Organizzazione. Nonostante i tentativi di Sora e Ventus di convincerlo che può scegliere una strada diversa, Vanitas rifiuta orgogliosamente la redenzione: accetta di essere l'oscurità del creato, dissolvendosi a testa alta.`,
    keyBonds: [
      { name: "Ventus", relation: "La sua metà complementare di luce; il bersaglio della sua ossessione distruttiva." },
      { name: "Master Xehanort", relation: "Il maestro spietato che lo ha generato e usato come pedina." }
    ],
    trivia: "Il nome 'Vanitas' deriva dal latino e significa 'vanità' o 'vuoto', scelto da Nomura per creare un legame concettuale con Ventus (vento) e Sora (cielo)."
  },

  {
    id: "namine",
    name: "Naminé",
    japaneseName: "ナミネ",
    title: "La Strega dei Ricordi & La Pittrice dell'Oblio",
    image: "images/characters/namine.png",
    category: "guardians",
    categoryLabel: "Guardiana della Luce",
    primaryGame: "Kingdom Hearts: Chain of Memories",
    games: ["com", "kh2", "recoded", "ddd", "kh3"],
    origin: "Castello dell'Oblio",
    weapon: "Quaderno da Disegno & Ritratti della Memoria",
    voiceActors: { en: "Meaghan Jette Martin", jp: "Iku Nakahara" },
    quote: "«Anche se non ti ricorderai di me... io sarò sempre nel tuo cuore, come una catena di ricordi che non si spezzerà mai.»",
    bio: `Un Nessuno unico e atipico: nata quando Sora liberò il cuore di Kairi da dentro di sé con il Keyblade del cuore, Naminé non possiede il corpo di Kairi ma è scaturita dal legame tra il corpo di Sora e il cuore di Kairi.

Possiede il potere prodigioso e inquietante di manipolare, spezzare e ridisegnare la catena dei ricordi di Sora e di tutti coloro che sono collegati a lui. Fu costretta da Marluxia e Larxene nel Castello dell'Oblio a riscrivere i ricordi di Sora facendogli credere che lei fosse la sua amica d'infanzia più importante.

Pentita, confessa la verità a Sora e trascorre un anno intero all'interno di una capsula a Crepuscopoli per rimettere a posto ogni frammento del cuore del ragazzo. In KH3 rinasce in una Replica corporea grazie a Riku e ai Guardiani, riunendosi finalmente con Kairi e Roxas.`,
    keyBonds: [
      { name: "Sora", relation: "Il custode di cui ha custodito e riordinato i ricordi per un anno intero." },
      { name: "Kairi", relation: "Il proprio 'Sé originale', a cui ha restituito la luce." },
      { name: "Riku Replica", relation: "Il guardiano tragico che si è sacrificato per proteggerla nel Castello dell'Oblio." }
    ],
    trivia: "Il nome 'Naminé' deriva dalla parola giapponese 'nami', che significa 'onda', in perfetto parallelismo con Kairi (oceano)."
  },

  {
    id: "ansem-wise",
    name: "Ansem il Saggio (DiZ)",
    japaneseName: "賢者アンセム",
    title: "Il Sovrano di Radiant Garden & La Luce della Redenzione",
    image: "images/characters/ansem-wise.png",
    category: "guardians",
    categoryLabel: "I Saggi di Radiant Garden",
    primaryGame: "Kingdom Hearts: Chain of Memories",
    games: ["com", "kh2", "bbs", "ddd", "kh3"],
    origin: "Radiant Garden",
    weapon: "Codificatore Digitale & Dispositivo di Replicazione Cuori",
    voiceActors: { en: "Christopher Lee / Corey Burton", jp: "Genzō Wakayama" },
    quote: "«Il cuore umano non è un semplice programma da decodificare. È infinito, irrazionale... e meravigliosamente imprevedibile.»",
    bio: `Il benevolo e colto sovrano originario di Radiant Garden. Dedicò la sua vita allo studio del cuore e dell'oscurità a fin di bene, ma quando scoprì i pericolosi esperimenti sui cuori umani condotti dal suo allievo Xehanort, ordinò la chiusura immediata delle ricerche.

I suoi sei allievi lo tradirono, esiliandolo nel Reame dell'Oscurità e usurpando il suo nome. Consumato da un desiderio cieco di vendetta, assunse l'identità di 'DiZ' (Darkness in Zero), bendandosi il volto e manipolando freddamente Riku, Naminé e Roxas per favorire il risveglio di Sora.

In KH2 comprende la mostruosità dei propri metodi vendicativi e si redime tentando di distruggere il Kingdom Hearts artificiale di Xemnas con il suo encoder digitale, esplodendo con esso. Viene infine recuperato dal Reame Oscuro in KH3 da Ansem e Vexen per aiutare a ricostruire Roxas e Naminé.`,
    keyBonds: [
      { name: "Roxas", relation: "La vittima innocente della sua Crepuscopoli virtuale, a cui ha poi chiesto perdono." },
      { name: "Riku", relation: "Il fidato alleato a cui ha affidato il compimento del risveglio di Sora." },
      { name: "Ienzo", relation: "L'allievo prediletto a cui ha affidato i segreti del laboratorio di Radiant Garden." }
    ],
    trivia: "Il leggendario attore Sir Christopher Lee ha prestato la sua voce inconfondibile ad Ansem il Saggio in Kingdom Hearts II e 358/2 Days."
  },

  {
    id: "mickey",
    name: "Re Topolino (King Mickey)",
    japaneseName: "王様 (ミッキーマウス)",
    title: "Il Sovrano della Luce & Maestro del Reame Oscuro",
    image: "images/characters/mickey.png",
    category: "keyblade",
    categoryLabel: "Maestro di Keyblade",
    primaryGame: "Kingdom Hearts I",
    games: ["kh1", "com", "kh2", "bbs", "recoded", "ddd", "kh02", "kh3", "mom"],
    origin: "Castello Disney",
    weapon: "Catena del Regno D & Star Cluster",
    voiceActors: { en: "Wayne Allwine / Bret Iwan", jp: "Takashi Aoyagi / Takanori Hoshino" },
    quote: "«Non preoccuparti, Sora! La luce non svanisce mai del tutto finché c'è qualcuno pronto a difenderla!»",
    bio: `Sovrano amato del Castello Disney e allievo del grande Maestro Yen Sid. In Birth by Sleep intraprende il proprio cammino da apprendista correndo in soccorso di Terra, Aqua e Ventus.

In KH1 comprende prima di tutti la minaccia cosmica degli Heartless e abbandona il castello per scendere nel Reame dell'Oscurità alla ricerca del Keyblade dorato del Reame Buio (Kingdom Key D), permettendo a Sora di sigillare la Porta per Kingdom Hearts dall'altro lato.

In KH2, DDD e KH3 è il baluardo dei Sette Guardiani della Luce, guidando con saggezza Sora e Riku. Durante la battaglia finale al Cimitero dei Keyblade scatena la magia suprema Ultima contro i tredici guerrieri di Xehanort.`,
    keyBonds: [
      { name: "Riku", relation: "Il compagno d'armi più fidato; colui che ha salvato nel Castello dell'Oblio." },
      { name: "Sora", relation: "Il prescelto a cui ha affidato il destino del reame della luce." },
      { name: "Aqua", relation: "La Maestra che ha cercato per anni nel buio più profondo del reame oscuro." }
    ],
    trivia: "Nel primo Kingdom Hearts del 2002, per rigide restrizioni di licenza Disney, Topolino poté apparire in una sola singola inquadratura: il leggendario finale davanti alla porta dorata."
  },

  {
    id: "donald",
    name: "Paperino (Donald Duck)",
    japaneseName: "ドナルドダック",
    title: "Il Mago Reale di Corte & Il Custode di Zettaflare",
    image: "images/characters/donald.png",
    category: "disney",
    categoryLabel: "Reame Disney",
    primaryGame: "Kingdom Hearts I",
    games: ["kh1", "com", "kh2", "recoded", "ddd", "kh3", "mom"],
    origin: "Castello Disney",
    weapon: "Scettro del Mago & la magia suprema Zettaflare",
    voiceActors: { en: "Tony Anselmo", jp: "Kōichi Yamadera" },
    quote: "«L'ordine del Re dice di seguire la Chiave... e noi staremo con te fino alla fine, Sora!»",
    bio: `Mago di corte del Castello Disney dal temperamento focoso, burbero ma dal cuore immensamente generoso e fedele. Insieme a Pippo riceve dal Re la lettera con l'ordine tassativo di rintracciare la 'Chiave' e seguirla.

L'incontro con Sora a Città di Mezzo segna l'inizio del trio più celebre della storia dei videogiochi. Nonostante le frequenti liti e i rimproveri verso l'ingenuità di Sora, Paperino è pronto a rischiare la propria vita per i compagni in qualsiasi momento.

In KH3 compie l'impresa magica più potente mai vista nell'universo di Square Enix e Disney: per proteggere Sora e i compagni dal letale attacco di Terranort, infrange i limiti della magia scatenando 'Zettaflare', un incantesimo proibito talmente devastante da incenerire all'istante l'avversario a costo della propria energia vitale.`,
    keyBonds: [
      { name: "Sora", relation: "Il compagno di avventure per cui darebbe la vita senza esitazione." },
      { name: "Pippo", relation: "L'inseparabile spalla con cui bilancia l'impulsività con il buon senso." },
      { name: "Re Topolino", relation: "Il suo amato sovrano a cui è leale fino all'ultimo respiro." }
    ],
    trivia: "Zettaflare è l'incantesimo più potente dell'intera cosmologia di Final Fantasy/Kingdom Hearts, superiore persino al Megaflare di Bahamut e al Teraflare di Bahamut Prime."
  },

  {
    id: "goofy",
    name: "Pippo (Goofy)",
    japaneseName: "グーフィー",
    title: "Il Capitano dei Cavalieri & Lo Scudo Infrangibile",
    image: "images/characters/goofy.png",
    category: "disney",
    categoryLabel: "Reame Disney",
    primaryGame: "Kingdom Hearts I",
    games: ["kh1", "com", "kh2", "recoded", "ddd", "kh3", "mom"],
    origin: "Castello Disney",
    weapon: "Scudo del Cavaliere & Save the King",
    voiceActors: { en: "Bill Farmer", jp: "Yū Shimaka" },
    quote: "«Forse non sarò la persona più sveglia del mondo, Sora, ma so riconoscere quando un amico ha bisogno di una mano!»",
    bio: `Capitano dei Cavalieri Reali del Castello Disney, Pippo è un pacifista convinto che rifiuta l'uso di armi offensive e combatte esclusivamente con scudi difensivi per proteggere i propri cari e deviare gli attacchi nemici.

Sotto la sua apparenza goffa e svagata, Pippo si rivela costantemente la voce della saggezza e dell'intuito emotivo del gruppo: è spesso il primo a cogliere gli inganni dell'Organizzazione XIII, le ipocrisie dei nemici e le sofferenze nascoste negli altri.

In KH1 rifiuta di abbandonare Sora a Hollow Bastion quando Riku gli sottrae il Keyblade; in KH2 si prende una masso in testa per salvare il Re; e in KH3 protegge Paperino esausto dopo lo Zettaflare.`,
    keyBonds: [
      { name: "Sora", relation: "L'amico che incoraggia sempre con calore e profonda saggezza paterna." },
      { name: "Paperino", relation: "Il partner di mille battaglie che calma ogni volta che perde la pazienza." },
      { name: "Re Topolino", relation: "Il comandante e amico d'infanzia al servizio del quale pone il proprio scudo." }
    ],
    trivia: "In KH2, la scena in cui Pippo viene colpito da una roccia a Radiant Garden fu scritta con tale drammaticità che durante i primi test molti giocatori credettero davvero fosse morto."
  },

  {
    id: "yen-sid",
    name: "Maestro Yen Sid",
    japaneseName: "イェン・シッド",
    title: "L'Antico Maestro & Il Saggio della Torre",
    image: "images/characters/yen-sid.png",
    category: "guardians",
    categoryLabel: "I Maestri della Luce",
    primaryGame: "Kingdom Hearts II",
    games: ["kh2", "bbs", "recoded", "ddd", "kh3"],
    origin: "Torre Misteriosa",
    weapon: "Alta Magia Cosmica & Divinazione dei Mondi",
    voiceActors: { en: "Corey Burton", jp: "Takashi Inagaki" },
    quote: "«Il destino dei mondi è nelle vostre mani. Ricordate: anche nel più fitto buio, il vostro cuore sarà la chiave guida.»",
    bio: `Ex Maestro di Keyblade di veneranda saggezza, Yen Sid si è ritirato dall'uso delle armi per consacrarsi alla meditazione e alla supervisione dell'equilibrio cosmico dalla sua Torre Misteriosa.

È stato il mentore che ha addestrato Re Topolino e ha conferito a Sora i suoi abiti magici con le Drive Forms in KH2. In Dream Drop Distance convoca Sora e Riku per sottoporli al sacro Esame dei Maestri nel Reame del Sonno.

In KH3 coordina le forze della luce e, nel momento più buio al Cimitero dei Keyblade, scende personalmente sul campo di battaglia aprendo le acque del mare di Heartless con la propria magia per consentire ai Guardiani di avanzare.`,
    keyBonds: [
      { name: "Re Topolino", relation: "L'allievo prediletto a cui ha insegnato le leggi del Keyblade e della magia." },
      { name: "Eraqus & Xehanort", relation: "I contemporanei di cui conosceva il destino fin dall'inizio." }
    ],
    trivia: "Il nome 'Yen Sid' è la parola 'DISNEY' scritta rigorosamente al contrario, come omaggio al celebre stregone di Fantasia (1940)."
  },

  {
    id: "maleficent",
    name: "Malefica (Maleficent)",
    japaneseName: "マレフィセント",
    title: "L'Imperatrice delle Tenebre & La Cercatrice della Scatola Nera",
    image: "images/characters/maleficent.png",
    category: "darkness",
    categoryLabel: "I Cattivi Disney",
    primaryGame: "Kingdom Hearts I",
    games: ["kh1", "com", "kh2", "bbs", "recoded", "kh3", "ux"],
    origin: "Il Dominio Incantato",
    weapon: "Scettro Magico, Corvo & Trasformazione in Drago",
    voiceActors: { en: "Susanne Blakeslee", jp: "Toshiko Sawada" },
    quote: "«Il potere delle tenebre appartiene a me! Nulla può sfuggire alla volontà del male assoluto!»",
    bio: `L'iconica regina dei cattivi Disney. In KH1 guida la congrega dei malvagi Disney (Jafar, Ursula, Baubau, Capitan Uncino) per rapire le Sette Principesse del Cuore e sbloccare la serratura finale a Hollow Bastion.

Viene sconfitta da Sora e trafitta da Riku/Ansem con il Keyblade del cuore. Tuttavia, grazie al corvo Diablo e ai ricordi conservati dalle tre fatine buone, si rigenera magicamente in KH2.

In Kingdom Hearts Union χ viene rivelato che viaggiò nel tempo attraverso le Scialuppe di Salvataggio dopo essere stata guidata da Darkness. In KH3, assistita dal fedele Pietro, rinuncia al controllo banale degli Heartless per dedicarsi alla ricerca della misteriosa Scatola Nera lasciata dal Maestro dei Maestri.`,
    keyBonds: [
      { name: "Pietro", relation: "Il fedele scagnozzo con cui batte al setaccio ogni mondo." },
      { name: "Ansem Cercatore di Oscurità", relation: "L'ingannevole alleato che in realtà la stava sfruttando per aprire la serratura." }
    ],
    trivia: "Malefica è l'unica antagonista Disney ad essere presente e rilevante in ogni singolo snodo narrativo principale della saga dal 2002 a oggi."
  },

  {
    id: "pete",
    name: "Pietro Gambadilegno (Pete)",
    japaneseName: "ピート",
    title: "Il Luogotenente Goffo & Servitore delle Ombre",
    image: "images/characters/pete.png",
    category: "darkness",
    categoryLabel: "I Cattivi Disney",
    primaryGame: "Kingdom Hearts II",
    games: ["kh2", "bbs", "recoded", "kh3"],
    origin: "Castello Disney (Città Disney)",
    weapon: "Scudi dentati, Fuochi d'artificio & Cloni d'Ombra",
    voiceActors: { en: "Jim Cummings", jp: "Tōru Ōhira / Katsuhiro Kitagawa" },
    quote: "«Nessuno si fa beffe di Pietro! Malefica e io conquisteremo tutti i mondi, ve lo garantisco!»",
    bio: `Un tempo cittadino di Città Disney esiliato in un'altra dimensione dalla Regina Minni per la sua condotta scorretta durante il festival cittadino, fu liberato da Malefica a patto di servirla fedelmente.

In KH2 gira per tutti i mondi Disney cercando di reclutare nuovi cattivi (da Scar a Barbossa a Ade) per formare un esercito di Heartless al servizio della strega. Nonostante i suoi continui fallimenti e la sua comica goffaggine, dimostra un'inaspettata lealtà verso Malefica.

In KH3 accompagna Malefica nella caccia alla Scatola Nera con pala e piccone, assistendo infine da lontano al ritorno di Luxu al Cimitero dei Keyblade.`,
    keyBonds: [
      { name: "Malefica", relation: "La sua padrona e sovrana che serve con devozione timorosa." },
      { name: "Re Topolino", relation: "La sua storica nemesi fin dai tempi del battello a vapore." }
    ],
    trivia: "In Birth by Sleep appare nel mondo di 'Città Disney' con due identità da supercriminale comico: Capitan Giustizia e Capitan Oscurità."
  },

  {
    id: "saix",
    name: "Saïx / Isa",
    japaneseName: "サイクス / アイザ",
    title: "La Luna Furente & Il Secondo in Comando",
    image: "images/characters/saix.png",
    category: "darkness",
    categoryLabel: "La Vera Organizzazione XIII",
    primaryGame: "Kingdom Hearts II",
    games: ["kh2", "days", "bbs", "ddd", "kh3"],
    origin: "Radiant Garden",
    weapon: "Claymore Lunare & Modalità Berserk",
    voiceActors: { en: "Kirk Thornton", jp: "Ginpei Sato" },
    quote: "«Luce della luna... mostrami la tua furia! Luna, donami il tuo potere!»",
    bio: `Numero VII e braccio destro di Xemnas nell'Organizzazione originale. Da umano a Radiant Garden era Isa, il migliore amico di Lea con cui si intrufolava nel castello di Ansem il Saggio alla ricerca di una ragazza prigioniera ('Soggetto X').

Divenuto un Nessuno, la sua personalità divenne gelida, burocratica e implacabile, ma durante il combattimento assorbe l'energia della luna del Mondo che non Esiste trasformandosi in un mostruoso e incontrollabile 'Berserker'. Si allontanò da Axel quando quest'ultimo strinse amicizia con Roxas e Xion.

In KH3 si scopre che ha agito come infiltrato nella Vera Organizzazione XIII: è stato lui ad aiutare Vexen a creare le Repliche per salvare Roxas, Naminé e Xion. Sconfitto, si scusa con Lea e torna a vivere pacificamente a Crepuscopoli con gli amici.`,
    keyBonds: [
      { name: "Lea / Axel", relation: "Il suo inseparabile compagno di vita per cui ha architettato il piano di redenzione." },
      { name: "Xemnas", relation: "Il leader di cui eseguiva gli ordini per non destare sospetti." }
    ],
    trivia: "La cicatrice a forma di 'X' sul viso di Saïx gli fu inflitta durante la trasformazione in Nessuno come Marchio dell'Eretico."
  },

  {
    id: "demyx",
    name: "Demyx",
    japaneseName: "デミックス",
    title: "Il Melodico Notturno & Numero IX",
    image: "images/characters/demyx.png",
    category: "darkness",
    categoryLabel: "Organizzazione XIII",
    primaryGame: "Kingdom Hearts II",
    games: ["kh2", "days", "kh3"],
    origin: "Antico Mondo (Sconosciuto)",
    weapon: "Sitar Arpeggio & Forme d'Acqua Danzanti",
    voiceActors: { en: "Ryan O'Donohue", jp: "Kenichi Suzumura" },
    quote: "«Danza, acqua, danza! Suvvia, non potremmo semplicemente rilassarci e suonare qualcosa?»",
    bio: `Numero IX dell'Organizzazione XIII, Demyx è un ragazzo pigro, disinvolto, poco incline al combattimento e amante della musica. Manipola l'acqua evocando copie acquatiche danzanti attraverso le note del suo magico Sitar.

In KH2 affronta Sora a Hollow Bastion in uno dei combattimenti più memorabili della saga ('Dance, water, dance!'), dissolvendosi dopo essere stato battuto.

In KH3 viene richiamato come membro di riserva della Nuova Organizzazione. Tuttavia, viene convinto da Vexen a disertare e compie un atto eroico fondamentale: consegna personalmente a Ienzo la Replica vuota a Radiant Garden che permetterà la resurrezione di Roxas.`,
    keyBonds: [
      { name: "Vexen", relation: "Il collega con cui collabora segretamente per sabotare Xehanort in KH3." },
      { name: "Luxord", relation: "Il compagno di retroguardia con cui condivide l'origine dall'antico passato." }
    ],
    trivia: "Xemnas rivela in KH3 che Demyx, Luxord, Marluxia e Larxene furono scelti nell'Organizzazione proprio per la loro misteriosa eredità legata all'antica Era dei Keyblade."
  },

  {
    id: "luxord",
    name: "Luxord",
    japaneseName: "ルクソード",
    title: "Lo Scommettitore del Tempo & Numero X",
    image: "images/characters/luxord.png",
    category: "darkness",
    categoryLabel: "La Vera Organizzazione XIII",
    primaryGame: "Kingdom Hearts II",
    games: ["kh2", "days", "kh3"],
    origin: "Quadratum (Sconosciuto)",
    weapon: "Mazzo di Carte da Gioco & Orologi del Destino",
    voiceActors: { en: "Robin Atkin Downes", jp: "Jōji Nakata" },
    quote: "«Il gioco è fatto. Non c'è fortuna senza rischio, ragazzo. Rivediamoci quando le carte saranno di nuovo rimescolate.»",
    bio: `Numero X dell'Organizzazione XIII, Luxord è un gentiluomo britannico raffinato, affascinante e ossessionato dalle scommesse, dal calcolo delle probabilità e dalle regole del gioco d'azzardo. Combatte trasformando il campo in un tavolo da gioco con carte giganti e clessidre.

In KH2 trasforma Port Royal in una scommessa con l'oro azteco e affronta Sora nel Mondo che non Esiste in una sfida a tempo basata sul menù comandi.

In KH3 combatte nei Caraibi e al Cimitero dei Keyblade. Dopo essere stato sconfitto da Sora, riconosce il valore dell'avversario e gli consegna una misteriosa 'Wild Card' (Carta Jolly), dicendogli che potrebbe tornargli utile in futuro. Nel finale segreto di Re Mind, si rivela essere l'autista di Yozora a Quadratum!`,
    keyBonds: [
      { name: "Sora", relation: "L'avversario stimato a cui ha affidato la misteriosa Wild Card per il futuro." },
      { name: "Yozora", relation: "Il suo signore a Quadratum di cui sembra essere fedele servitore." }
    ],
    trivia: "La voce giapponese profonda di Luxord è doppiata dal celebre Jōji Nakata (Alucard in Hellsing, Kirei Kotomine in Fate)."
  },

  {
    id: "marluxia",
    name: "Marluxia / Lauriam",
    japaneseName: "マールーシャ / ラーリアム",
    title: "L'Assassino Sublime & Il Dandelion Perduto",
    image: "images/characters/marluxia.png",
    category: "darkness",
    categoryLabel: "La Vera Organizzazione XIII",
    primaryGame: "Kingdom Hearts: Chain of Memories",
    games: ["com", "days", "ux", "kh3"],
    origin: "Daybreak Town / Castello dell'Oblio",
    weapon: "Falce Grazia Recisa (Graceful Dahlia) & Petali di Ciliegio",
    voiceActors: { en: "Keith Ferguson", jp: "Shūichi Ikeda" },
    quote: "«Disperdi i tuoi ricordi nel vento come petali di un fiore appassito...»",
    bio: `Numero XI dell'Organizzazione XIII, custode del Castello dell'Oblio. Un guerriero letale e carismatico che manipola petali di rosa e combatte con una falce da mietitore rosa shocking. Tentò di rovesciare Xemnas manipolando Sora con i poteri di Naminé.

In Kingdom Hearts Union χ viene svelato il suo straordinario passato: era Lauriam, uno dei cinque leader dei Dandelion e fratello maggiore di Strelitzia. Indagò sull'omicidio della sorella e fuggì nel futuro con l'Arca perdendo la memoria.

In KH3 combatte nella Vera Organizzazione. Quando Sora lo sconfigge al Cimitero dei Keyblade, la sua memoria umana si risveglia in punto di morte, facendogli ricordare il suo vero nome (Lauriam) e ringraziando Sora per avergli restituito il cuore.`,
    keyBonds: [
      { name: "Strelitzia", relation: "La sorellina assassinata che ha cercato attraverso i secoli e lo spaziotempo." },
      { name: "Larxene / Elrena", relation: "La compagna inseparabile che lo ha seguito dall'Era delle Fiabe al presente." },
      { name: "Sora", relation: "Il custode con cui ha duellato al Castello dell'Oblio e che gli ha ridato la memoria." }
    ],
    trivia: "Marluxia doveva originariamente essere un personaggio femminile, ma Nomura cambiò idea per non creare un duo di sole donne traditrici con Larxene."
  },

  {
    id: "larxene",
    name: "Larxene / Elrena",
    japaneseName: "ラクシーヌ / エルレナ",
    title: "La Ninfa Selvatica & Il Fulmine Crudele",
    image: "images/characters/larxene.png",
    category: "darkness",
    categoryLabel: "La Vera Organizzazione XIII",
    primaryGame: "Kingdom Hearts: Chain of Memories",
    games: ["com", "days", "ux", "kh3"],
    origin: "Daybreak Town / Castello dell'Oblio",
    weapon: "Pugnali Elettrici Foudroyante & Fulmini",
    voiceActors: { en: "Shanelle Workman", jp: "Rie Kanda" },
    quote: "«Che c'è di male ad essere spietati? È così divertente vedere i vostri cuori andare in frantumi!»",
    bio: `Numero XII e unica donna dell'Organizzazione originale. Sadica, cinica, sarcastica e dotata di una velocità fulminea, manipola saette ed elettricità e combatte scagliando otto pugnali acuminati tra le dita.

Al Castello dell'Oblio si divertiva a torturare psicologicamente Sora e Naminé, venendo infine incenerita da Sora. In Union χ era Elrena, un'apprendista dei Dandelion amica di Strelitzia che aiutò Lauriam nelle indagini.

In KH3 torna nella Nuova Organizzazione e tenta Elsa ad Arendelle. Quando Sora la batte al Cimitero dei Keyblade e le chiede perché abbia accettato di farne parte, confessa con malizia che non le importava nulla di Xehanort o del Kingdom Hearts: voleva solo stare accanto a 'quella persona' (Lauriam/Marluxia).`,
    keyBonds: [
      { name: "Lauriam / Marluxia", relation: "La persona per cui ha attraversato i secoli e scelto di combattere." },
      { name: "Naminé", relation: "La ragazzina che tormentava con crudeltà al Castello dell'Oblio." }
    ],
    trivia: "Il suo Chirithy in Union χ aveva una personalità schiva e fedele identica al suo lato umano originale."
  },

  {
    id: "vexen",
    name: "Vexen / Even",
    japaneseName: "ヴィクセン / エヴェン",
    title: "Lo Scienziato Freddo & L'Architetto delle Repliche",
    image: "images/characters/vexen.png",
    category: "guardians",
    categoryLabel: "I Saggi di Radiant Garden",
    primaryGame: "Kingdom Hearts: Chain of Memories",
    games: ["com", "days", "bbs", "kh3"],
    origin: "Radiant Garden",
    weapon: "Scudo di Ghiaccio & Capsule di Replicazione",
    voiceActors: { en: "Derek Stephen Prince", jp: "Nachi Nozawa / Shigeru Chiba" },
    quote: "«L'intelletto è l'unica vera forza dell'universo. E io ho appena perfezionato il ricettacolo supremo per l'anima umana.»",
    bio: `Numero IV dell'Organizzazione, scienziato capo e ricercatore di Radiant Garden di nome Even. Freddo, calcolatore e altezzoso, è il padre del 'Programma Replica', attraverso il quale ha creato il Riku Replica e Xion.

Fu eliminato da Axel al Castello dell'Oblio per ordine di Saïx. Tornato umano a Radiant Garden in DDD, in KH3 decide deliberatamente di farsi ritrasformare in un Nessuno per infiltrarsi nella Vera Organizzazione XIII.

Collaborando in segreto con Saïx e Demyx, sabota i piani di Xehanort dall'interno e perfeziona le Repliche umane di nuova generazione, consentendo a Roxas, Naminé e Xion di riottenere corpi biologici completi.`,
    keyBonds: [
      { name: "Ansem il Saggio", relation: "Il mentore scientifico a cui ha infine restituito fedeltà e stima." },
      { name: "Riku Replica & Xion", relation: "Le sue creazioni scientifiche che hanno sviluppato un'anima propria." }
    ],
    trivia: "Il doppiatore originale Nachi Nozawa era leggendario in Giappone; dopo la sua scomparsa nel 2010, il ruolo fu affidato a Shigeru Chiba."
  },

  {
    id: "lexaeus",
    name: "Lexaeus / Aeleus",
    japaneseName: "レクセウス / エレウス",
    title: "L'Eroe Silenzioso & La Roccia Infrangibile",
    image: "images/characters/lexaeus.png",
    category: "guardians",
    categoryLabel: "I Saggi di Radiant Garden",
    primaryGame: "Kingdom Hearts: Chain of Memories",
    games: ["com", "days", "bbs", "kh3"],
    origin: "Radiant Garden",
    weapon: "Ascia-Spada Terrestre & Manipolazione delle Rocce",
    voiceActors: { en: "Dave Boat", jp: "Fumihiko Tachiki" },
    quote: "«Non spreco fiato con le parole quando la terra stessa parla per me.»",
    bio: `Numero V dell'Organizzazione XIII, guerriero colossale e taciturno. A Radiant Garden era Aeleus, capo delle guardie del palazzo reale insieme a Dilan. Possiede una forza fisica sovrumana e controlla l'elemento Terra scuotendo il terreno con una gigantesca ascia-spada.

Nel Castello dell'Oblio fu inviato nei sotterranei per contrastare i traditori con Vexen e Zexion; affrontò Riku per costringerlo a cedere al buio, venendo però spazzato via dall'oscurità di Ansem.

Rinato umano in DDD a Radiant Garden, torna a presidiare fedelmente il castello al fianco di Ienzo e Dilan, proteggendo il laboratorio informatico per sostenere i Guardiani della Luce.`,
    keyBonds: [
      { name: "Zexion / Ienzo", relation: "Il compagno più giovane di cui è sempre stato fedele guardia del corpo." },
      { name: "Dilan", relation: "Il collega di guardia con cui difendeva la pace a Radiant Garden." }
    ],
    trivia: "Lexaeus ha il minor numero di battute parlate di tutti i membri dell'Organizzazione XIII, preferendo far parlare la sua ascia."
  },

  {
    id: "zexion",
    name: "Zexion / Ienzo",
    japaneseName: "ゼクシオン / イエンツォ",
    title: "Il Prodigio dei Dati & Il Ricostruttore dei Cuori",
    image: "images/characters/zexion.png",
    category: "guardians",
    categoryLabel: "I Saggi di Radiant Garden",
    primaryGame: "Kingdom Hearts: Chain of Memories",
    games: ["com", "days", "bbs", "kh3"],
    origin: "Radiant Garden",
    weapon: "Lexicon Magico & Ricerca Digitale",
    voiceActors: { en: "Vince Corazza", jp: "Akira Ishida" },
    quote: "«Il cuore di Sora contiene troppe anime... se riusciremo a decifrarne i dati, potremo salvarli tutti.»",
    bio: `Numero VI dell'Organizzazione, conosciuto come il 'Burattinaio delle Illusioni'. Da bambino era un orfano brillante adottato da Ansem il Saggio a Radiant Garden. Come Nessuno combatteva intrappolando gli avversari all'interno di un tomo magico (Lexicon) e alterando la percezione dei loro sensi.

Fu tradito e assassinato al Castello dell'Oblio da Axel e dal Riku Replica. Rinato umano come Ienzo in DDD, si pente amaramente del passato e mette il suo genio intellettuale al servizio di Sora.

In KH3 è l'alleato scientifico fondamentale dei Guardiani: analizza il Diario di Jiminy decifrato e i dati del computer di Ansem, scoprendo che nel cuore di Sora dormono tre anime (Roxas, Ventus e Xion) e coordinando il loro ritorno in vita.`,
    keyBonds: [
      { name: "Ansem il Saggio", relation: "La figura paterna a cui ha chiesto perdono in lacrime in KH3." },
      { name: "Sora", relation: "L'eroe che ha guidato tramite comunicatore telefonico Gummifono." }
    ],
    trivia: "In Chain of Memories per Game Boy Advance, Zexion non impugnava alcuna arma; la sua arma (il Lexicon) fu creata da Nomura solo nel remake per PS2."
  },

  {
    id: "xaldin",
    name: "Xaldin / Dilan",
    japaneseName: "ザルディン / ディラン",
    title: "Il Lanciere del Vento & Guardia d'Onore",
    image: "images/characters/xaldin.png",
    category: "guardians",
    categoryLabel: "I Saggi di Radiant Garden",
    primaryGame: "Kingdom Hearts II",
    games: ["kh2", "days", "bbs", "kh3"],
    origin: "Radiant Garden",
    weapon: "Sei Lance Aerodinamiche (Lindworm)",
    voiceActors: { en: "David Dayan Fisher", jp: "Yōsuke Akimoto" },
    quote: "«L'amore è un'illusione puerile che conduce solo alla rovina e alla disperazione del cuore.»",
    bio: `Numero III dell'Organizzazione, originariamente la guardia reale Dilan a Radiant Garden. Cinico, crudele e sprezzante delle emozioni umane, combatte manovrando sei lance contemporaneamente grazie alla telecinesi e al dominio sui venti.

In KH2 si reca al Castello della Bestia per tormentare la Bestia e Belle, tentando di fargli cedere il cuore all'oscurità affinché generi un potentissimo Heartless e un docile Nessuno.

Viene sconfitto da Sora e dalla Bestia sul ponte del castello. Rinato umano in DDD, in KH3 ritrova la propria compostezza e onestà, riprendendo la lancia solo per proteggere i cittadini di Radiant Garden dagli invasori.`,
    keyBonds: [
      { name: "Aeleus", relation: "Il compagno di ronda con cui ha servito fedelmente Ansem il Saggio." },
      { name: "La Bestia", relation: "La sua nemesi in KH2, di cui voleva spezzare l'amore per Belle." }
    ],
    trivia: "Lo scontro contro Xaldin a difficoltà Proud/Critical in KH2 è storicamente considerato uno dei muri di difficoltà più tosti dell'intera saga principale."
  },

  {
    id: "master-of-masters",
    name: "Il Maestro dei Maestri (Master of Masters)",
    japaneseName: "マスター・オブ・マスター",
    title: "L'Artefice Supremo del Cosmo & L'Occhio nel Tempo",
    image: "images/characters/master-of-masters.png",
    category: "ancient",
    categoryLabel: "L'Antica Era delle Fiabe",
    primaryGame: "Kingdom Hearts χ Back Cover",
    games: ["ux", "kh3", "kh4"],
    origin: "Daybreak Town (Antica Era)",
    weapon: "No Name (Innominata), Occhio che Scruta & Libro delle Profezie",
    voiceActors: { en: "Ray Chase", jp: "Kenjiro Tsuda" },
    quote: "«Il futuro non si cambia a pugni, ragazzi miei! Si prepara il palcoscenico millenni prima... e si aspetta che gli attori recitino la loro parte!»",
    bio: `La figura più enigmatica, eccentrica e potente della cosmologia di Tetsuya Nomura. Celato costantemente sotto il Cappotto Nero dell'Organizzazione, parla con fare ironico, gioviale e privo di formalità, nascondendo in realtà una mente onnisciente e machiavellica.

Addestrò i sei allievi a Daybreak Town prima della Prima Guerra dei Keyblade. Incastonò il proprio occhio destro nel Keyblade 'No Name' affidandolo a Luxu, potendo così osservare tutti gli eventi dei millenni a venire e comporre il 'Libro delle Profezie'.

Consegnò la misteriosa Scatola Nera con la scritta 'Superbia' a Luxu con il divieto assoluto di aprirla. Nel finale segreto di KH3 e Re Mind lo si vede fare il gesto del cuore sulla luna a Shibuya (Quadratum), posizionandosi come il fulcro assoluto del futuro della serie in Kingdom Hearts IV.`,
    keyBonds: [
      { name: "Luxu", relation: "L'allievo prediletto a cui ha affidato la missione più pesante della storia umana." },
      { name: "I Cinque Veggenti", relation: "I discepoli che ha manovrato per innescare inevitabilmente la profezia della guerra." }
    ],
    trivia: "Nomura ha dichiarato che la personalità scanzonata del Maestro dei Maestri è ispirata a quella del celebre compositore e produttore Quentin Tarantino."
  },

  {
    id: "luxu-xigbar",
    name: "Luxu / Braig / Xigbar",
    japaneseName: "ルシュ / ブライグ / シグバール",
    title: "Il Tiratore Senza Fine & Il Custode dell'Innominata",
    image: "images/characters/luxu-xigbar.png",
    category: "ancient",
    categoryLabel: "L'Antica Era delle Fiabe",
    primaryGame: "Kingdom Hearts: Birth by Sleep",
    games: ["bbs", "days", "kh2", "recoded", "ddd", "kh3", "ux"],
    origin: "Daybreak Town / Radiant Garden",
    weapon: "Doppie Balestre Spaziali & No Name",
    voiceActors: { en: "James Patrick Stuart", jp: "Hōchū Ōtsuka" },
    quote: "«Me ne sono andato per un po', ma ora sono tornato. I maestri perduti sono finalmente qui. Bentornati a casa!»",
    bio: `Sesto allievo del Maestro dei Maestri nell'Era delle Fiabe, incaricato della missione più titanica: sopravvivere attraverso i secoli trasferendo il proprio cuore di corpo in corpo fino all'arrivo del momento prestabilito.

Assunse l'identità di Bragi in Dark Road e di Braig a Radiant Garden, orchestrando il piano di Xehanort e fingendosi un mercenario sarcastico con una benda sull'occhio. Divenne Xigbar, il Numero II della prima e della seconda Organizzazione XIII.

Nel clamoroso epilogo di Kingdom Hearts III, dopo la caduta di Xehanort, recupera il Keyblade No Name e la Scatola Nera al Cimitero dei Keyblade, evocando dal passato i quattro Veggenti (Ira, Invi, Aced, Gula) e rivelando la sua vera identità millenaria: «Io sono Luxu».`,
    keyBonds: [
      { name: "Maestro dei Maestri", relation: "Il suo creatore a cui ha giurato fedeltà eterna oltre il tempo." },
      { name: "Master Xehanort", relation: "Lo strumento che ha sorvegliato per compiere la seconda Guerra dei Keyblade." },
      { name: "I Veggenti", relation: "I fratelli dell'antica era che ha richiamato nel presente nel finale di KH3." }
    ],
    trivia: "Il modo in cui Xigbar schernisce Sora chiamandolo 'Asso' (Tiger / Asso) e il suo ghigno beffardo nascondevano fin dal 2005 il segreto più grande dell'intera cosmologia di Nomura."
  },

  {
    id: "ira",
    name: "Ira",
    japaneseName: "イラ",
    title: "Il Leader dei Veggenti & Guida di Unicornis",
    image: "images/characters/ira.png",
    category: "ancient",
    categoryLabel: "I Veggenti dell'Era delle Fiabe",
    primaryGame: "Kingdom Hearts χ Back Cover",
    games: ["ux", "kh3"],
    origin: "Daybreak Town",
    weapon: "Keyblade dell'Unicorno",
    voiceActors: { en: "Matthew Mercer", jp: "Yūichirō Umehara" },
    quote: "«Il Maestro mi ha lasciato la guida. Il mio dovere è preservare l'ordine a qualunque costo.»",
    bio: `Allievo del Maestro dei Maestri a cui fu assegnato il ruolo di leader dei Veggenti dopo la scomparsa del maestro. Guida l'Unione Unicornis con rigore, disciplina e una ferrea dedizione al protocollo.

Quando scoprì che nel Libro delle Profezie mancava una pagina che annunciava un traditore, convocò gli altri Veggenti innescando involontariamente una spirale di sospetti e paranoia con Aced e Invi.

Richiamato nel presente da Luxu al Cimitero dei Keyblade nel finale di KH3, guarda con sgomento la Scatola Nera chiedendo spiegazioni al compagno per il nuovo capitolo cosmico che sta per aprirsi.`,
    keyBonds: [
      { name: "Aced", relation: "Il compagno passionale con cui si scontrò violentemente prima della guerra." },
      { name: "Luxu", relation: "Il fratello che lo ha richiamato millenni dopo sul suolo del Cimitero." }
    ],
    trivia: "I nomi dei Veggenti derivano dai Sette Peccati Capitali in latino: Ira corrisponde all'Ira."
  },

  {
    id: "invi",
    name: "Invi",
    japaneseName: "インヴィ",
    title: "La Veggente della Virtù & Guida di Anguis",
    image: "images/characters/invi.png",
    category: "ancient",
    categoryLabel: "I Veggenti dell'Era delle Fiabe",
    primaryGame: "Kingdom Hearts χ Back Cover",
    games: ["ux", "kh3"],
    origin: "Daybreak Town",
    weapon: "Keyblade del Serpente",
    voiceActors: { en: "Karissa Lee Staples", jp: "Megumi Toyoguchi" },
    quote: "«Il mio compito è osservare senza interferire... ma quando l'equilibrio crolla, restare imparziali diventa impossibile.»",
    bio: `Guida dell'Unione Anguis (Serpente), Invi ricevette dal Maestro il compito di osservare le azioni degli altri fratelli con neutralità e riferire direttamente a Ira.

Cercò di mediare tra la rigidità di Ira e l'impazienza bellicosa di Aced, ma finì per essere percepita come una spia, accelerando il collasso delle relazioni tra le Unioni prima della Guerra dei Keyblade.

Riappare al Cimitero dei Keyblade nel presente insieme a Ira, Aced e Gula, pronta ad affrontare l'era dei Maestri Perduti in Kingdom Hearts IV.`,
    keyBonds: [
      { name: "Ira", relation: "Il leader a cui riferiva le manovre segrete dei fratelli." },
      { name: "Ava", relation: "La compagna con cui condivideva la speranza di salvare i giovani discepoli." }
    ],
    trivia: "Invi deriva dal latino 'Invidia'."
  },

  {
    id: "aced",
    name: "Aced",
    japaneseName: "アセッド",
    title: "Il Pugno del Valore & Guida di Ursus",
    image: "images/characters/aced.png",
    category: "ancient",
    categoryLabel: "I Veggenti dell'Era delle Fiabe",
    primaryGame: "Kingdom Hearts χ Back Cover",
    games: ["ux", "kh3"],
    origin: "Daybreak Town",
    weapon: "Keyblade dell'Orso",
    voiceActors: { en: "Travis Willingham", jp: "Subaru Kimura" },
    quote: "«Le parole non bastano più quando il buio avanza! Se Ira non agirà, sarò io a guidare i prescelti!»",
    bio: `Comandante dell'Unione Ursus (Orso), guerriero possente, istintivo e appassionato. Il Maestro gli aveva assegnato il compito di supportare Ira come braccio forte, ma la sua insofferenza verso l'attendismo del leader lo spinse a cercare alleanze autonome.

Convinto che l'oscurità andasse sradicata con l'attacco preventivo, si scontrò in duello con Invi e Gula, finendo per diventare uno dei catalizzatori più veementi della catastrofe della Prima Guerra dei Keyblade.

Nel finale di KH3 si materializza con la sua pesante tunica al Cimitero dei Keyblade, sorpreso ma pronto a impugnare nuovamente l'arma al fianco dei compagni.`,
    keyBonds: [
      { name: "Ira", relation: "Il rivale con cui ha conteso la guida morale dei Veggenti." },
      { name: "Gula", relation: "L'investigatore schivo che ha ferito gravemente in combattimento." }
    ],
    trivia: "Aced deriva dal latino 'Acedia' (Accidia / Sloth)."
  },

  {
    id: "gula",
    name: "Gula",
    japaneseName: "グラ",
    title: "L'Investigatore Solitario & Guida di Leopardos",
    image: "images/characters/gula.png",
    category: "ancient",
    categoryLabel: "I Veggenti dell'Era delle Fiabe",
    primaryGame: "Kingdom Hearts χ Back Cover",
    games: ["ux", "kh3"],
    origin: "Daybreak Town",
    weapon: "Keyblade del Leopardo",
    voiceActors: { en: "Kevin Quinn", jp: "Tasuku Hatanaka" },
    quote: "«C'è scritto qui. Nella pagina che il Maestro ha dato solo a me: tra noi c'è un traditore.»",
    bio: `Capo dell'Unione Leopardos, Gula è il più giovane, riservato e diffidente tra i Veggenti. Il Maestro dei Maestri gli affidò in segreto la celebre 'Pagina Mancante' (Lost Page), incaricandolo di scoprire l'identità del traditore.

Consumato dalla paranoia, iniziò a sospettare di tutti i compagni e tentò persino di forzare l'evocazione di Kingdom Hearts per costringere il Maestro a riapparire, innescando l'ira di Aced.

Trova rifugio presso Ava prima della battaglia finale. Riappare nel presente in KH3 al richiamo di Luxu, notando subito l'assenza della Maestra Ava.`,
    keyBonds: [
      { name: "Ava", relation: "L'unica compagna di cui si fidava veramente e che lo ha protetto dopo le ferite." },
      { name: "Luxu", relation: "L'interlocutore a cui chiese il significato della pagina mancante." }
    ],
    trivia: "Gula deriva dal latino 'Gula' (Gola / Gluttony)."
  },

  {
    id: "ava",
    name: "Ava",
    japaneseName: "アヴァ",
    title: "La Protettrice Compassionevole & Madre dei Dandelion",
    image: "images/characters/ava.png",
    category: "ancient",
    categoryLabel: "I Veggenti dell'Era delle Fiabe",
    primaryGame: "Kingdom Hearts χ Back Cover",
    games: ["ux"],
    origin: "Daybreak Town",
    weapon: "Keyblade della Volpe di Neve",
    voiceActors: { en: "Isabela Merced", jp: "Yume Miyamoto" },
    quote: "«Voi siete i Dandelion. Quando la tempesta si abbatterà su questo mondo, voi volerete via verso la luce.»",
    bio: `Guida dell'Unione Vulpes (Volpe), Ava è la più empatica, dolce e retta tra tutti i discepoli del Maestro. Ricevette la missione più nobile: selezionare in segreto i custodi con il cuore più puro e privo di odio per formare i 'Dandelion' e mandarli in un mondo sicuro affinché la luce sopravvivesse alla guerra.

Scelse i cinque nuovi leader (Ephemer, Skuld, Ventus, Brain, Strelitzia) consegnando a ciascuno le regole del futuro. Quando affrontò Luxu chiedendogli perché non impedisse la tragedia, scoprì la sconvolgente verità sul piano del Maestro.

È l'unica tra i Veggenti a non rispondere all'evocazione di Luxu nel finale di KH3: Luxu commenta sibillino: «Ava aveva la sua missione... sapevo che non sarebbe venuta».`,
    keyBonds: [
      { name: "Ephemer", relation: "Il giovane promettente a cui ha affidato il futuro dei Dandelion." },
      { name: "Luxu", relation: "Il compagno con cui ha incrociato le armi scoprendo la verità prima della guerra." }
    ],
    trivia: "Ava deriva dal latino 'Avaritia' (Avarizia / Greed)."
  },

  {
    id: "ephemer",
    name: "Ephemer",
    japaneseName: "エフェメラ",
    title: "Il Fondatore di Scala ad Caelum & Guida dei Dandelion",
    image: "images/characters/ephemer.png",
    category: "ancient",
    categoryLabel: "I Leader dei Dandelion",
    primaryGame: "Kingdom Hearts Union χ [Cross]",
    games: ["ux", "kh3"],
    origin: "Daybreak Town",
    weapon: "Keyblade di Scala & Vento dell'Alba",
    voiceActors: { en: "Michael Johnston", jp: "Yūto Uemura" },
    quote: "«Ci rivedremo, amico mio. Anche se mondi interi ci separeranno, il vento del nostro cuore ci guiderà.»",
    bio: `Un ragazzo cordiale, curioso, indipendente e dotato di un carisma naturale unico. Fu il primo discepolo scelto da Ava per guidare i Dandelion dopo la guerra.

Durante la crisi della simulazione digitale di Daybreak Town, combatte al fianco di Skuld e del Player contro le Tredici Oscurità. Sopravvissuto al crollo del mondo antico, fonda sopra le rovine la leggendaria città bianca dei maestri: **Scala ad Caelum**, divenendone il primo venerato Maestro.

In Kingdom Hearts III, in uno dei momenti più commoventi dell'intera saga, il suo spirito appare dal passato per rispondere alla richiesta d'aiuto di Sora nel Cimitero dei Keyblade: guida la tempesta di milioni di Keyblade (con i nomi reali dei giocatori di Union χ!) per spazzare via l'orda di Demon Tide.`,
    keyBonds: [
      { name: "Skuld", relation: "L'inseparabile compagna d'avventura e co-leader dei Dandelion." },
      { name: "Player", relation: "Il migliore amico con cui ha condiviso la promessa sotto la torre dell'orologio." },
      { name: "Sora", relation: "Il custode del futuro che ha soccorso attraverso i secoli nella guerra di KH3." }
    ],
    trivia: "La grande statua al centro della piazza principale di Scala ad Caelum raffigura proprio Ephemer nei suoi abiti da Primo Maestro."
  },

  {
    id: "skuld",
    name: "Skuld",
    japaneseName: "スクルド",
    title: "La Stella Guida & Leader dei Dandelion",
    image: "images/characters/skuld.png",
    category: "ancient",
    categoryLabel: "I Leader dei Dandelion",
    primaryGame: "Kingdom Hearts Union χ [Cross]",
    games: ["ux"],
    origin: "Daybreak Town",
    weapon: "Keyblade Stella Polare",
    voiceActors: { en: "N/A", jp: "N/A" },
    quote: "«Non lasceremo che la speranza finisca qui. Abbiamo una promessa da mantenere con tutti i nostri amici.»",
    bio: `Membro designato dei cinque leader dei Dandelion, Skuld è una ragazza razionale, determinata, affidabile e dal profondo senso di responsabilità. Si unì a Ephemer per scoprire la verità sul mondo dei dati e sulla scomparsa di Strelitzia.

Affrontò con immenso coraggio le incarnazioni delle Oscurità primordiali per permettere la fuga dei compagni attraverso le Scialuppe di Salvataggio.

Le teorie canoniche più accreditate e gli indizi dei rapporti segreti di KH3 indicano che sia lei il misterioso 'Soggetto X' (la ragazza senza ricordi che Lea e Isa cercavano a Radiant Garden) e l'antenata di Xehanort.`,
    keyBonds: [
      { name: "Ephemer", relation: "Il compagno di cui ha sempre supportato le decisioni con saggezza." },
      { name: "Brain", relation: "Lo stratega con cui ha analizzato i misteri del Libro delle Profezie." }
    ],
    trivia: "Il nome Skuld deriva dalla mitologia norrena: è una delle tre Norne, colei che presiede al Futuro."
  },

  {
    id: "brain",
    name: "Brain",
    japaneseName: "ブレイン",
    title: "Lo Stratega della Tuba & Il Sovvertitore del Destino",
    image: "images/characters/brain.png",
    category: "ancient",
    categoryLabel: "I Leader dei Dandelion",
    primaryGame: "Kingdom Hearts Union χ [Cross]",
    games: ["ux"],
    origin: "Daybreak Town / Scala ad Caelum",
    weapon: "Keyblade Master's Defender (Originale)",
    voiceActors: { en: "N/A", jp: "N/A" },
    quote: "«Il destino ha scritto una fine per noi? Ebbene, io riscriverò quel libro riga per riga.»",
    bio: `Stratega brillantissimo, ironico, affascinante e contraddistinto dalla sua inconfondibile tuba nera. Nominato leader dei Dandelion, scoprì per primo che il loro rifugio era una simulazione di dati destinata all'autodistruzione.

Scoprì la verità sull'omicidio di Strelitzia e sul virus dell'oscurità. Pur di salvare Ephemer e il futuro, cedette il proprio Keyblade e il Libro delle Profezie, facendosi inviare nel futuro da Luxu attraverso l'Arca.

Si risveglia secoli dopo nella Scala ad Caelum della giovinezza di Xehanort, accolto da Sigurd, pronto a tramandare i segreti della linea genealogica dei maestri verso Missing Link e KH4.`,
    keyBonds: [
      { name: "Ephemer", relation: "L'amico a cui ha affidato il compito di fondare il nuovo mondo." },
      { name: "Luxu", relation: "Il misterioso interlocutore con cui ha negoziato la salvezza dei cuori." }
    ],
    trivia: "Brain è l'antenato di Eraqus: il Keyblade 'Master's Defender' che Eraqus impugna in BBS è esattamente lo stesso che Brain portò con sé."
  },

  {
    id: "strelitzia",
    name: "Strelitzia",
    japaneseName: "ストレリチア",
    title: "Il Fiore Reciso & L'Abitante di Quadratum",
    image: "images/characters/strelitzia.png",
    category: "ancient",
    categoryLabel: "I Dandelion & Quadratum",
    primaryGame: "Kingdom Hearts Union χ [Cross]",
    games: ["ux", "kh4"],
    origin: "Daybreak Town / Quadratum",
    weapon: "Spirito Guida Chirithy & Poteri Onirici",
    voiceActors: { en: "N/A", jp: "N/A" },
    quote: "«Benvenuto a Quadratum, Sora. Per noi questo mondo è la realtà... mentre il tuo mondo laggiù è solo finzione.»",
    bio: `Una ragazza gentile, timida e riservata, sorella minore di Lauriam (Marluxia). Scelta dalla Maestra Ava per essere uno dei cinque leader dei Dandelion, fu tragicamente assassinata prima della guerra da un'Oscurità primordiale che rubò il suo tomo per infiltrarsi nel gruppo tramite Ventus.

Il suo spirito fu preservato all'interno di una figura vestita di bianco e proiettato al di fuori delle coordinate della realtà ordinaria.

Nel trailer di rivelazione di **Kingdom Hearts IV**, Strelitzia accoglie lo spaesato Sora all'interno del suo moderno appartamento metropolitano a Shibuya (Quadratum), spiegandogli che per gli abitanti di quella dimensione il suo mondo fiabesco è solo un 'mondo di fantasia'.`,
    keyBonds: [
      { name: "Lauriam / Marluxia", relation: "Il fratello adorato che ha sfidato il tempo per ritrovarla." },
      { name: "Sora", relation: "Il custode che accoglie al risveglio nella moderna città di Quadratum." }
    ],
    trivia: "La Strelitzia reginae (nota come Fiore Uccello del Paradiso) simboleggia l'immortalità, la libertà e il viaggio verso dimensioni sconosciute."
  },

  {
    id: "yozora",
    name: "Yozora",
    japaneseName: "ヨゾラ",
    title: "Il Guerriero di Verum Rex & Il Comandante Eterocromatico",
    image: "images/characters/yozora.png",
    category: "ancient",
    categoryLabel: "L'Altra Realtà (Quadratum)",
    primaryGame: "Kingdom Hearts III Re Mind",
    games: ["kh3", "kh4"],
    origin: "Quadratum (Universo di Verum Rex)",
    weapon: "Balestra Hi-Tech & Spada a Impulsi Magici",
    voiceActors: { en: "Dylan Sprouse", jp: "Tasuku Hatanaka" },
    quote: "«Non sono quello che vedi... questo non è il mio vero aspetto. Ma devo salvare lei. Devo vincere a ogni costo.»",
    bio: `Protagonista del videogioco fittizio 'Verum Rex' apparso nel mondo di Toy Story in KH3. In Kingdom Hearts III Re Mind si rivela essere una figura reale ed eccezionalmente potente dell'Altra Realtà (Unreality / Quadratum).

Caratterizzato da occhi eterocromatici (uno rosso e uno azzurro) e armi tecnologiche futuristiche, incontra Sora nel Mondo Finale e lo trasporta in cima all'edificio Shibuya 104 in una delle battaglie boss più impegnative e spettacolari della saga.

Afferma di essere stato incaricato di 'salvare Sora'. A seconda dell'esito dello scontro, uno dei due si cristallizza; nel finale, Yozora si risveglia sul sedile posteriore di un'automobile guidata da una controparte di Luxord, mormorando le stesse storiche parole iniziali di Sora: «Mi chiedo se tutto questo sia reale o solo un sogno...».`,
    keyBonds: [
      { name: "Sora", relation: "Il custode con cui si scontra in duello metafisico per 'salvarlo'." },
      { name: "Magia / Luxord", relation: "Il misterioso autista che lo accompagna per le strade di Tokyo." }
    ],
    trivia: "Il design e il concept di Yozora e Verum Rex sono l'omaggio diretto di Tetsuya Nomura al suo leggendario progetto cancellato 'Final Fantasy Versus XIII' (Noctis Lucis Caelum)."
  },

  {
    id: "chirithy",
    name: "Chirithy",
    japaneseName: "チリシィ",
    title: "Lo Spirito Custode Onirico & Fedele Compagno",
    image: "images/characters/chirithy.png",
    category: "ancient",
    categoryLabel: "L'Antica Era delle Fiabe",
    primaryGame: "Kingdom Hearts χ [chi]",
    games: ["ux", "kh3", "mom"],
    origin: "Daybreak Town / Mondo Finale",
    weapon: "Borsa Magica & Sacra Benedizione Onirica",
    voiceActors: { en: "Lara Jill Miller", jp: "Tomoko Kaneda" },
    quote: "«Il legame tra te e il tuo cuore non si spezza mai, nemmeno quando svanisci tra i frammenti dei mondi.»",
    bio: `Una creatura magica somigliante a un gattino parlante con un collare con campana e una borsa a tracolla, creata dal Maestro dei Maestri per fare da guida, mentore e guardiano spirituale a ciascun custode del Keyblade.

Se il cuore del suo padrone cade nell'oscurità, il Chirithy si trasforma in un minaccioso 'Nightmare Chirithy'.

In KH3, un fedele Chirithy attende da secoli nel Mondo Finale (The Final World), offrendo consigli a Sora mentre ricostruisce i frammenti della propria forma corporea. Al termine della battaglia finale, si ricongiunge felicemente con il suo amato custode originale: Ventus.`,
    keyBonds: [
      { name: "Ventus", relation: "Il custode con cui condivideva la vita nell'antica Era delle Fiabe." },
      { name: "Sora", relation: "L'eroe che ha guidato attraverso i confini del Mondo Finale." }
    ],
    trivia: "Chirithy è tecnicamente il primissimo 'Dream Eater' (Mangiasogni) mai creato nella cosmologia di Kingdom Hearts."
  }
];

const outputFile = path.join(__dirname, '..', 'js', 'data', 'characters-data.js');
const jsContent = `/**
 * GLOSSARIO COMPLETO DEI PERSONAGGI DI KINGDOM HEARTS
 * Dati esaustivi su tutti i protagonisti, maestri, veggenti, nemici e alleati suddivisi per gioco ed era.
 */

window.KH_CHARACTERS_DATA = ${JSON.stringify(CHARACTERS, null, 2)};
`;

fs.writeFileSync(outputFile, jsContent, 'utf8');
console.log('Successfully generated js/data/characters-data.js with ' + CHARACTERS.length + ' characters!');
