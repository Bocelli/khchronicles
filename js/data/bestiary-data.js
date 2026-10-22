/**
 * BESTIARIO COMPLETO DI KINGDOM HEARTS
 * Suddiviso per gioco: Heartless (Purosangue ed Emblema), Nessuno, Nesciens, Mangiasogni e Creature di Dati.
 * Include descrizioni, location esatte, drop con percentuali reali, debolezze elementali e consigli di farming.
 */

window.KH_BESTIARY_DATA = [
  // ==========================================
  // KINGDOM HEARTS FINAL MIX
  // ==========================================
  {
    id: "kh1-shadow",
    name: "Shadow (Ombra)",
    nameEn: "Shadow",
    gameId: "kh1-fm",
    gameTitle: "Kingdom Hearts Final Mix",
    category: "Heartless Purosangue",
    rank: "Minion Comune",
    iconType: "heartless-pure",
    iconColor: "#38bdf8",
    worlds: ["Isole del Destino", "Città di Mezzo", "Paese delle Meraviglie", "Tutti i Mondi"],
    locationDetail: "Città di Mezzo (Primo, Secondo e Terzo Distretto), Isole del Destino (Notte della Tempesta), Bosco dei 100 Acri.",
    description: "Il più comune e iconico Heartless dell'intero multiverso. Nato spontaneamente dalla naturale oscurità presente nei cuori. Quando si appiattisce a terra scivolando come una pozzanghera d'ombra, diventa totalmente invulnerabile a qualsiasi fendente o magia.",
    tactics: "Aspetta che emerga dalla superficie del pavimento prima di sferrare la combo. La magia Fire o Thunder ad area lo polverizza sul colpo.",
    elementalAffinities: { weak: "Fuoco, Sacro", resist: "Oscurità", immune: "Nessuna" },
    drops: [
      { item: "Scheggia Lucente (Lucid Shard)", rate: "6%", type: "Materiale Sintesi" },
      { item: "Pozione (Potion)", rate: "3%", type: "Consumabile" },
      { item: "Sfera MP Piccola", rate: "15%", type: "Recupero" }
    ],
    experience: 1,
    farmingTip: "All'inizio del gioco nel Secondo Distretto di Città di Mezzo o nella Sala della Bizzarria del Paese delle Meraviglie per accumulare rapidamente le prime Schegge Lucenti."
  },
  {
    id: "kh1-soldier",
    name: "Soldier (Soldato)",
    nameEn: "Soldier",
    gameId: "kh1-fm",
    gameTitle: "Kingdom Hearts Final Mix",
    category: "Heartless Emblema",
    rank: "Soldato d'Élite",
    iconType: "heartless-emblem",
    iconColor: "#f59e0b",
    worlds: ["Città di Mezzo", "Agrabah", "Monte Olimpo"],
    locationDetail: "Città di Mezzo (Vicolo e Terzo Distretto), Agrabah (Bazaar e Piazza Principale).",
    description: "Heartless agile dotato di elmo corazzato e artigli ricurvi. Esegue calci acrobatici rotanti e scatti in affondo capaci di interrompere le combo di Sora.",
    tactics: "Blocca i suoi scatti in corsa con la Guardia per stordirlo all'istante, poi attacca alle spalle. La magia Blizzard lo congela interrompendo i suoi calci.",
    elementalAffinities: { weak: "Ghiaccio", resist: "Nessuna", immune: "Nessuna" },
    drops: [
      { item: "Scheggia Spirituale (Spirit Shard)", rate: "8%", type: "Materiale Sintesi" },
      { item: "Granpozione (Hi-Potion)", rate: "4%", type: "Consumabile" }
    ],
    experience: 3,
    farmingTip: "Traverse Town (Vicolo dietro l'Albergo) e Bazaar di Agrabah sono i luoghi migliori per fare scorta di Schegge Spirituali."
  },
  {
    id: "kh1-large-body",
    name: "Large Body (Cicciotto)",
    nameEn: "Large Body",
    gameId: "kh1-fm",
    gameTitle: "Kingdom Hearts Final Mix",
    category: "Heartless Emblema",
    rank: "Golia Pesante",
    iconType: "heartless-emblem",
    iconColor: "#ea580c",
    worlds: ["Città di Mezzo", "Paese delle Meraviglie", "Monte Olimpo", "Agrabah"],
    locationDetail: "Agrabah (Porte del Palazzo e Sotterranei della Caverna delle Meraviglie), Colosseo dell'Olimpo (Coppa Fil e Pegaso).",
    description: "Un colosso obeso con un ventre corazzato a molla. Qualsiasi fendente frontale rimbalza via provocando contraccolpi a Sora. Quando entra in modalità furia arrossisce e carica a tutta velocità.",
    tactics: "Salta e plana alle sue spalle per colpire la schiena, unico punto debole. Quando carica in berserk, usa 'Iperguardia' (Sonic Blade) o salta sul suo capo.",
    elementalAffinities: { weak: "Nessuna", resist: "Fuoco, Ghiaccio", immune: "Attacchi frontali" },
    drops: [
      { item: "Scheggia Tenace (Hard Shard)", rate: "12%", type: "Materiale Sintesi" },
      { item: "Pietra Tenace (Hard Stone)", rate: "4%", type: "Materiale Sintesi" },
      { item: "Pozione Suprema", rate: "2%", type: "Consumabile" }
    ],
    experience: 15,
    farmingTip: "Caverna delle Meraviglie ad Agrabah (Stanza dell'Ingresso): ne compaiono a coppie, ottimi per farmare Pietre Tenaci."
  },
  {
    id: "kh1-red-nocturne",
    name: "Red Nocturne (Notturno Rosso)",
    nameEn: "Red Nocturne",
    gameId: "kh1-fm",
    gameTitle: "Kingdom Hearts Final Mix",
    category: "Heartless Emblema",
    rank: "Mago Elementale",
    iconType: "heartless-emblem",
    iconColor: "#ef4444",
    worlds: ["Città di Mezzo", "Paese delle Meraviglie", "Agrabah"],
    locationDetail: "Paese delle Meraviglie (Bosco di Loto, Giardino del Tè), Traverse Town (Secondo Distretto).",
    description: "Piccolo mago fluttuante a forma di cono rosso. Si solleva in aria e scaglia proiettili infuocati che inseguono il bersaglio.",
    tactics: "Assolutamente immune e curato dal Fuoco! Usa la magia Blizzard (Ghiaccio): un solo colpo di Blizzard lo distrugge istantaneamente.",
    elementalAffinities: { weak: "Ghiaccio (200% danno)", resist: "Tuono (50%)", immune: "Fuoco (Assorbe come cura)" },
    drops: [
      { item: "Scheggia Ardente (Blaze Shard)", rate: "10%", type: "Materiale Sintesi" },
      { item: "Etere (Ether)", rate: "3%", type: "Consumabile" }
    ],
    experience: 2,
    farmingTip: "Bosco di Loto nel Paese delle Meraviglie: saltano continuamente fuori dai cespegli d'acqua."
  },
  {
    id: "kh1-blue-rhapsody",
    name: "Blue Rhapsody (Rapsodia Blu)",
    nameEn: "Blue Rhapsody",
    gameId: "kh1-fm",
    gameTitle: "Kingdom Hearts Final Mix",
    category: "Heartless Emblema",
    rank: "Mago Elementale",
    iconType: "heartless-emblem",
    iconColor: "#3b82f6",
    worlds: ["Città di Mezzo", "Paese delle Meraviglie", "Monte Olimpo"],
    locationDetail: "Città di Mezzo (Vicolo e Terzo Distretto), Colosseo dell'Olimpo.",
    description: "Mago azzurro fluttuante che congela l'aria circostante generando proiettili di ghiaccio rotanti o scivolando sul terreno.",
    tactics: "Assorbe il ghiaccio! Abbattilo a distanza con Fire o colpiscilo in salto prima che inizi a piroettare.",
    elementalAffinities: { weak: "Fuoco (200% danno)", resist: "Tuono", immune: "Ghiaccio (Assorbe)" },
    drops: [
      { item: "Scheggia Gelante (Frost Shard)", rate: "10%", type: "Materiale Sintesi" },
      { item: "Etere (Ether)", rate: "3%", type: "Consumabile" }
    ],
    experience: 2,
    farmingTip: "Traverse Town (Terzo Distretto presso la casa del Mago Merlino)."
  },
  {
    id: "kh1-wizard",
    name: "Wizard (Mago)",
    nameEn: "Wizard",
    gameId: "kh1-fm",
    gameTitle: "Kingdom Hearts Final Mix",
    category: "Heartless Emblema",
    rank: "Mago Supremo",
    iconType: "heartless-emblem",
    iconColor: "#a855f7",
    worlds: ["Fortezza Oscura (Hollow Bastion)", "Città di Mezzo", "Confini del Mondo"],
    locationDetail: "Fortezza Oscura (Biblioteca, Sala Grande, Canali sotterranei), Traverse Town (Secondo Distretto nel tardo gioco).",
    description: "Incantatore potente in tunica viola. Si teletrasporta continuamente per l'arena, diventa invulnerabile durante i lanci magici e scatena tormente di fulmini, anelli di fuoco ed esplosioni di ghiaccio.",
    tactics: "Usa Stop per bloccarlo prima che si smaterializzi. Colpiscilo durante il breve recupero dopo aver scagliato la raffica di fulmini.",
    elementalAffinities: { weak: "Attacchi Fisici Puri", resist: "Nessuna", immune: "Fuoco, Ghiaccio, Fulmine (Assorbe o annulla)" },
    drops: [
      { item: "Pietra Folgorante (Thunder Stone)", rate: "8%", type: "Materiale Sintesi" },
      { item: "Pietra Ardente (Blaze Stone)", rate: "8%", type: "Materiale Sintesi" },
      { item: "Pietra Gelante (Frost Stone)", rate: "8%", type: "Materiale Sintesi" },
      { item: "Bacchetta del Mago (Wizard's Relic - Arma di Paperino)", rate: "0.2%", type: "Arma Esclusiva" }
    ],
    experience: 28,
    farmingTip: "Biblioteca di Hollow Bastion: entra ed esci continuamente dal corridoio superiore per far respawnare 4 Maghi per volta."
  },
  {
    id: "kh1-defender",
    name: "Defender (Difensore)",
    nameEn: "Defender",
    gameId: "kh1-fm",
    gameTitle: "Kingdom Hearts Final Mix",
    category: "Heartless Emblema",
    rank: "Golia Pesante",
    iconType: "heartless-emblem",
    iconColor: "#64748b",
    worlds: ["Fortezza Oscura (Hollow Bastion)", "Città di Mezzo", "Confini del Mondo"],
    locationDetail: "Hollow Bastion (Ingresso del Castello, Bastioni Superiori), Traverse Town (Terzo Distretto).",
    description: "Un cavaliere massiccio dotato di un leggendario scudo a forma di testa di cane parlante. Lo scudo morde, sputa fiammate a 360 gradi e blocca frontalmente qualsiasi assalto.",
    tactics: "Salta oltre la sua testa e colpiscilo con combo aeree alle spalle. La magia Gravità (Gravity) gli toglie percentuali enormi di HP massimi.",
    elementalAffinities: { weak: "Gravità", resist: "Fuoco, Ghiaccio", immune: "Attacchi frontali sullo scudo" },
    drops: [
      { item: "Pietra Chiara (Bright Stone)", rate: "6%", type: "Materiale Sintesi" },
      { item: "Pietra Lucente (Lucid Stone)", rate: "4%", type: "Materiale Sintesi" },
      { item: "Scudo del Difensore (Defender Shield - Arma di Pippo)", rate: "0.2%", type: "Arma Esclusiva" }
    ],
    experience: 34,
    farmingTip: "Traverse Town (Terzo Distretto ed Hotel): equipaggia tutte le abilità 'Premio Partita' (Lucky Strike) di Sora, Paperino e Pippo per alzare la percentuale dello Scudo."
  },
  {
    id: "kh1-invisible",
    name: "Invisible (Invisibile)",
    nameEn: "Invisible",
    gameId: "kh1-fm",
    gameTitle: "Kingdom Hearts Final Mix",
    category: "Heartless Purosangue",
    rank: "Soldato d'Élite Supremo",
    iconType: "heartless-pure",
    iconColor: "#475569",
    worlds: ["Confini del Mondo (End of the World)", "Fortezza Oscura"],
    locationDetail: "Confini del Mondo (Caverna del Buio, Crepaccio Finale), Hollow Bastion (Stanza della Serratura).",
    description: "Guerriero oscuro alato armato di uno spadone nero gargantuesco. Si dissolve a mezz'aria evocando un anello di spade fluttuanti che si stringe attorno a Sora in un'esecuzione mortale.",
    tactics: "Quando si disperde nell'anello di spade, plana continuamente (Glide) senza toccare terra finché le spade non si schiantano. Usa Aero per dimezzare i danni della sua sciabolata.",
    elementalAffinities: { weak: "Aero, Sancta", resist: "Fuoco, Oscurità", immune: "Nessuna" },
    drops: [
      { item: "Pietra della Forza (Power Stone)", rate: "8%", type: "Materiale Sintesi" },
      { item: "Goccia Ricordo (Remembrance Drop)", rate: "4%", type: "Materiale Sintesi" },
      { item: "Elisir (Elixir)", rate: "1%", type: "Consumabile Raro" }
    ],
    experience: 60,
    farmingTip: "Confini del Mondo (La camera che precede lo scontro finale col Chernabog): genera gruppi da 3-4 Invisibili a ondata."
  },
  {
    id: "kh1-white-mushroom",
    name: "White Mushroom (Fungo Bianco)",
    nameEn: "White Mushroom",
    gameId: "kh1-fm",
    gameTitle: "Kingdom Hearts Final Mix",
    category: "Heartless Speciale",
    rank: "Raro / Pacifico",
    iconType: "special",
    iconColor: "#f8fafc",
    worlds: ["Città di Mezzo", "Paese delle Meraviglie", "Giungla Profonda", "Agrabah", "Halloween Town", "Confini del Mondo"],
    locationDetail: "Traverse Town (Stanza Rossa dell'Hotel), Deep Jungle (Campamento), Agrabah (Sala del Tesoro).",
    description: "Un simpatico funghetto bianco con gli occhi gialli e il cappello a pois. Non attacca mai Sora: mima invece un bisogno elementale (trema dal freddo, si sventola per il caldo, si abbatte nel buio, ecc.).",
    tactics: `Lancia la magia corrispondente al suo mimo per 3 volte consecutive:
- Trema dal freddo: lancia Fuoco (Fire)
- Si sventola con la mano: lancia Ghiaccio (Blizzard)
- Lampadina accesa sulla testa: lancia Fulmine (Thunder)
- Si sdraia a terra immobile: lancia Cura (Cure)
- Fluttua a mezz'aria: lancia Gravità (Gravity)
- Si congela immobile: lancia Stop
- Gira su se stesso: lancia Aero.`,
    elementalAffinities: { weak: "Magie mimiche", resist: "Attacchi Fisici (fugge via)", immune: "Danni convenzionali" },
    drops: [
      { item: "Stele / Arte del Maestro (Master Arts)", rate: "10% (con 3 magie uguali)", type: "Oggetto Speciale" },
      { item: "Pietra Misteriosa (Mystery Stone)", rate: "100%", type: "Materiale Sintesi" },
      { item: "Elisir (Elixir)", rate: "30%", type: "Consumabile Raro" }
    ],
    experience: 10,
    farmingTip: "Traverse Town (Stanza Rossa dell'Albergo): entrata rapida per collezionare le Arti del Maestro e materiali per l'officina."
  },
  {
    id: "kh1-pink-agaricus",
    name: "Pink Agaricus (Fungo Rosa)",
    nameEn: "Pink Agaricus",
    gameId: "kh1-fm",
    gameTitle: "Kingdom Hearts Final Mix",
    category: "Heartless Speciale (Final Mix)",
    rank: "Boss Speciale di Sintesi",
    iconType: "special",
    iconColor: "#ec4899",
    worlds: ["Giungla Profonda (Deep Jungle)", "Atlantica"],
    locationDetail: "Deep Jungle (Casa sull'Albero nei rami alti).",
    description: "Un gigantesco fungo rosa introdotto nella versione Final Mix. Richiede di attivare la magia Stop su tre funghi bianchi nella casa sull'albero per farlo comparire, e poi colpirlo quante più volte possibile durante l'arresto temporale.",
    tactics: "Equipaggia 'Stopra/Stopga', attiva 'Aero' su Sora, usa 'Ragnarok' e bersaglialo a ripetizione! Superando i 40, 70 o 100 colpi sbloccherai le preziose 'Pietre della Serenità' necessarie per l'Ultima Weapon.",
    elementalAffinities: { weak: "Stopga + Ragnarok combo", resist: "Tutto", immune: "Danni normali fuori Stop" },
    drops: [
      { item: "Pietra della Serenità (Serenity Stone)", rate: "100% (con 70+ colpi)", type: "Materiale Ultima Weapon" },
      { item: "Cappello Supremo (Prime Cap)", rate: "100% (con 100 colpi esatti)", type: "Accessorio Unico" }
    ],
    experience: 100,
    farmingTip: "Deep Jungle: posizionati sulla sua testa con Aeroga attiva e usa la finitura del Tiro Mirato Ragnarok per superare agevolmente gli 85 colpi."
  },

  // ==========================================
  // KINGDOM HEARTS II FINAL MIX
  // ==========================================
  {
    id: "kh2-dusk",
    name: "Dusk (Sombre)",
    nameEn: "Dusk",
    gameId: "kh2-fm",
    gameTitle: "Kingdom Hearts II Final Mix",
    category: "Nessuno",
    rank: "Nessuno Minore",
    iconType: "nobody",
    iconColor: "#cbd5e1",
    worlds: ["Crepuscopoli (Twilight Town)", "Il Mondo che non Esiste", "Radiant Garden"],
    locationDetail: "Crepuscopoli (Vecchia Villa, Stazione dei Treni), Il Mondo che non Esiste (Vicolo dei Ricordi).",
    description: "Il Nessuno più comune, una figura umanoide bianca snodata e serpentina. Si flette in modo innaturale scivolando sul terreno per sorprendere il bersaglio alle spalle.",
    tactics: "Quando si accovaccia per saltarti addosso, premi triangolo per attivare il Comando di Reazione 'Scivolata' (Slide Turn), che ti porta alle sue spalle lasciandolo indifeso.",
    elementalAffinities: { weak: "Magia Reflex, Magnete", resist: "Nessuna", immune: "Nessuna" },
    drops: [
      { item: "Scheggia Crepuscolare (Twilight Shard)", rate: "12%", type: "Materiale Sintesi" },
      { item: "Pietra Crepuscolare (Twilight Stone)", rate: "4%", type: "Materiale Sintesi" }
    ],
    experience: 18,
    farmingTip: "Crepuscopoli (Sotterranei della Villa Abbandonata): spawnano continuamente in gran numero."
  },
  {
    id: "kh2-creeper",
    name: "Creeper (Rampa)",
    nameEn: "Creeper",
    gameId: "kh2-fm",
    gameTitle: "Kingdom Hearts II Final Mix",
    category: "Nessuno",
    rank: "Nessuno Minore",
    iconType: "nobody",
    iconColor: "#94a3b8",
    worlds: ["Crepuscopoli", "Il Mondo che non Esiste", "Forte di Yan"],
    locationDetail: "Crepuscopoli (Bosco e Villa), Castello dell'Organizzazione XIII.",
    description: "Piccolo Nessuno polimorfo che muta continuamente aspetto: da ragno strisciante ad ascia volante o scudo piatto.",
    tactics: "La magia Magnega (Magnet) li risucchia tutti in un unico punto, facendoli esplodere con una singola magia Thundaga.",
    elementalAffinities: { weak: "Magnete, Tuono", resist: "Nessuna", immune: "Nessuna" },
    drops: [
      { item: "Scheggia Crepuscolare (Twilight Shard)", rate: "8%", type: "Materiale Sintesi" },
      { item: "Scheggia Densa (Dense Shard)", rate: "6%", type: "Materiale Sintesi" }
    ],
    experience: 12,
    farmingTip: "Forte di Yan (Terra dei Dragoni) e Salone della Villa a Crepuscopoli."
  },
  {
    id: "kh2-dragoon",
    name: "Dragoon (Dragone)",
    nameEn: "Dragoon",
    gameId: "kh2-fm",
    gameTitle: "Kingdom Hearts II Final Mix",
    category: "Nessuno",
    rank: "Nessuno Superiore di Xaldin",
    iconType: "nobody",
    iconColor: "#0ea5e9",
    worlds: ["Castello della Bestia", "Il Mondo che non Esiste", "Radiant Garden"],
    locationDetail: "Castello della Bestia (Salone e Ponte), Mondo che non Esiste (Cresta del Fato).",
    description: "Nessuno nobile controllato dal Numero III Xaldin. Manovra lance volanti con la forza del vento e balza in alto nel cielo scomparendo dalla vista.",
    tactics: "Quando precipita dal cielo, para il colpo o premi triangolo sul Reaction Command 'Impara' (Learn) per accumulare il comando 'Salto' (Jump) e schiantarlo al suolo!",
    elementalAffinities: { weak: "Comando Salto (Reaction)", resist: "Vento", immune: "Nessuna" },
    drops: [
      { item: "Pietra Densa (Dense Stone)", rate: "8%", type: "Materiale Sintesi" },
      { item: "Cristallo Denso (Dense Crystal)", rate: "4%", type: "Materiale Sintesi" },
      { item: "Scheggia Crepuscolare", rate: "12%", type: "Materiale Sintesi" }
    ],
    experience: 55,
    farmingTip: "Castello della Bestia (Ponte all'aperto durante la seconda visita): ottimo per farmare Cristalli Densi."
  },
  {
    id: "kh2-sniper",
    name: "Sniper (Cecchino)",
    nameEn: "Sniper",
    gameId: "kh2-fm",
    gameTitle: "Kingdom Hearts II Final Mix",
    category: "Nessuno",
    rank: "Nessuno Superiore di Xigbar",
    iconType: "nobody",
    iconColor: "#f59e0b",
    worlds: ["Il Mondo che non Esiste", "Crepuscopoli", "Radiant Garden"],
    locationDetail: "Il Mondo che non Esiste (Passeggiata della Rimembranza), Crepuscopoli (Stazione).",
    description: "Nessuno tiratore controllato da Xigbar. Fluttua a distanza mirando con fucili a frecce laser rosa riflettenti che rimbalzano sui muri.",
    tactics: "Usa il comando di reazione 'Cecchino' (Sniper) per respingere i suoi proiettili laser alla velocità della luce, distruggendolo con le sue stesse armi!",
    elementalAffinities: { weak: "Riflesso Laser (Reaction Command)", resist: "Magie convenzionali a distanza", immune: "Nessuna" },
    drops: [
      { item: "Pietra Densa (Dense Stone)", rate: "10%", type: "Materiale Sintesi" },
      { item: "Cristallo Denso (Dense Crystal)", rate: "6%", type: "Materiale Sintesi" }
    ],
    experience: 60,
    farmingTip: "Passeggiata della Rimembranza (The World That Never Was): ne compaiono a decine in aria."
  },
  {
    id: "kh2-dancer",
    name: "Dancer (Ballerina)",
    nameEn: "Dancer",
    gameId: "kh2-fm",
    gameTitle: "Kingdom Hearts II Final Mix",
    category: "Nessuno",
    rank: "Nessuno Superiore di Demyx",
    iconType: "nobody",
    iconColor: "#ec4899",
    worlds: ["Fortezza Oscura (Hollow Bastion)", "Crepuscopoli", "Il Mondo che non Esiste"],
    locationDetail: "Caverna della Rimembranza (KH2FM), Castello dell'Organizzazione XIII.",
    description: "Uno dei Nessuno più temuti e letali. Danza agilmente sul campo e all'improvviso si illumina di rosso afferrando Sora per strangolarlo o scagliarlo a terra con danni colossali che ignorano la guardia.",
    tactics: "Quando arrossisce per la presa, scatta all'indietro (Quick Run) o salta immediatamente: la presa non può essere parata con la Guardia standard! Usa Magnega + Thundaga.",
    elementalAffinities: { weak: "Magnete, Ghiaccio", resist: "Attacchi fisici ravvicinati", immune: "Guardia standard durante la presa" },
    drops: [
      { item: "Pietra Crepuscolare (Twilight Stone)", rate: "8%", type: "Materiale Sintesi" },
      { item: "Cristallo Crepuscolare", rate: "4%", type: "Materiale Sintesi" }
    ],
    experience: 75,
    farmingTip: "Caverna della Rimembranza (Miniera dei Dati): compaiono in combo mortali con altri Nessuno."
  },
  {
    id: "kh2-berserker",
    name: "Berserker",
    nameEn: "Berserker",
    gameId: "kh2-fm",
    gameTitle: "Kingdom Hearts II Final Mix",
    category: "Nessuno",
    rank: "Nessuno Superiore di Saïx",
    iconType: "nobody",
    iconColor: "#6366f1",
    worlds: ["Il Mondo che non Esiste", "Radiant Garden", "Crepuscopoli"],
    locationDetail: "Il Mondo che non Esiste (Torre dell'Oblio, Sotterranei), Crepuscopoli.",
    description: "Nessuno colossale che impugna un gigantesco spadone pesante appartenente a Saïx. Si piega come gomma ed entra in una furia cieca roteando a terra.",
    tactics: "Quando lascia cadere lo spadone, premi triangolo per 'Rubare l'Arma' (Berserk)! Sora impugnerà lo spadone del Berserker diventando invulnerabile e scatenando attacchi a 360°!",
    elementalAffinities: { weak: "Rubare Arma (Reaction Command)", resist: "Stordimento fisico", immune: "Interruzione combo" },
    drops: [
      { item: "Cristallo Crepuscolare (Twilight Crystal)", rate: "8%", type: "Materiale Sintesi" },
      { item: "Pietra Densa (Dense Stone)", rate: "12%", type: "Materiale Sintesi" }
    ],
    experience: 85,
    farmingTip: "Torre dell'Organizzazione (Scala verso la Sala del Trono): essenziale per farmare Cristalli Crepuscolari per l'Ultima Weapon."
  },
  {
    id: "kh2-sorcerer",
    name: "Sorcerer (Stregone)",
    nameEn: "Sorcerer",
    gameId: "kh2-fm",
    gameTitle: "Kingdom Hearts II Final Mix",
    category: "Nessuno",
    rank: "Nessuno Superiore di Xemnas",
    iconType: "nobody",
    iconColor: "#dc2626",
    worlds: ["Il Mondo che non Esiste"],
    locationDetail: "Castello che non Esiste (Piani Alti, Altare della Disperazione).",
    description: "Il più potente di tutti i Nessuno regolari. Circondato da cubi di energia rossa invulnerabili che fungono da scudo e armi a distanza.",
    tactics: "Non attaccarlo mentre i cubi rossi ruotano attorno al suo busto. Usa la magia Reflex quando i cubi caricano, per riflettere il danno ed eliminare lo scudo.",
    elementalAffinities: { weak: "Reflex, Forma Finale (Final Form)", resist: "Tutte le magie elementali", immune: "Danno diretto quando protetto dai cubi" },
    drops: [
      { item: "Cristallo Crepuscolare (Twilight Crystal)", rate: "12%", type: "Materiale Sintesi" },
      { item: "Gran Elisir (Megalixir)", rate: "1%", type: "Consumabile Supremo" }
    ],
    experience: 120,
    farmingTip: "La via che conduce al cospetto di Xemnas prima del boss finale."
  },
  {
    id: "kh2-crimson-jazz",
    name: "Crimson Jazz (Jazz Cremisi)",
    nameEn: "Crimson Jazz",
    gameId: "kh2-fm",
    gameTitle: "Kingdom Hearts II Final Mix",
    category: "Heartless Emblema",
    rank: "Mago d'Élite",
    iconType: "heartless-emblem",
    iconColor: "#b91c1c",
    worlds: ["Agrabah", "Radiant Garden", "Il Castello della Bestia"],
    locationDetail: "Agrabah (Seconda Visita, Rovine Sepolte), Caverna della Rimembranza.",
    description: "Heartless mago obeso che fluttua nell'aria depositando mine di fuoco esplosive che rimbalzano e detonano al contatto.",
    tactics: "Usa la magia Blizzard (Blizzaga) per raffreddarlo e distruggerlo prima che riempia la stanza di mine.",
    elementalAffinities: { weak: "Ghiaccio (Blizzard)", resist: "Tuono", immune: "Fuoco (Assorbe)" },
    drops: [
      { item: "Pietra Ardente (Blaze Stone)", rate: "10%", type: "Materiale Sintesi" },
      { item: "Cristallo Ardente (Blaze Crystal)", rate: "4%", type: "Materiale Sintesi" }
    ],
    experience: 45,
    farmingTip: "Agrabah (Caverna delle Meraviglie - Stanza delle Pietre preziose)."
  },

  // ==========================================
  // KINGDOM HEARTS BIRTH BY SLEEP FINAL MIX
  // ==========================================
  {
    id: "bbs-flood",
    name: "Flood (Diluvio)",
    nameEn: "Flood",
    gameId: "kh-bbs",
    gameTitle: "Kingdom Hearts Birth by Sleep Final Mix",
    category: "Nescien (Unversed)",
    rank: "Minion Comune",
    iconType: "unversed",
    iconColor: "#06b6d4",
    worlds: ["Terra di Partenza", "Castello dei Sogni", "Radiant Garden", "Tutti i Mondi"],
    locationDetail: "Presente ovunque all'inizio del viaggio di Terra, Ventus e Aqua.",
    description: "Il più piccolo e comune dei Nesciens, generato dalle gocce dell'ansia e del dubbio di Vanitas. Si trasforma in pozzanghere liquide e salta mordendo con mascelle a cono.",
    tactics: "Usa Slancio Magnetico (Magnera/Magnega) per radunarli tutti in un vortice, poi schiantali a terra con un colpo di finitura.",
    elementalAffinities: { weak: "Magnete, Fulmine", resist: "Nessuna", immune: "Nessuna" },
    drops: [
      { item: "Cristallo Umido (Shimmering Crystal)", rate: "12%", type: "Materiale Sintesi Comandi" },
      { item: "Scheggia Ardente (Blaze Shard)", rate: "8%", type: "Materiale Sintesi" }
    ],
    experience: 4,
    farmingTip: "Terra di Partenza e Castello dei Sogni (Corte esterna)."
  },
  {
    id: "bbs-scrapper",
    name: "Scrapper (Rissoso)",
    nameEn: "Scrapper",
    gameId: "kh-bbs",
    gameTitle: "Kingdom Hearts Birth by Sleep Final Mix",
    category: "Nescien (Unversed)",
    rank: "Soldato d'Assalto",
    iconType: "unversed",
    iconColor: "#f97316",
    worlds: ["Dominio Incantato", "Castello dei Sogni", "Radiant Garden"],
    locationDetail: "Castello dei Sogni (Palazzo Reale), Bosco dei Nani (Miniera).",
    description: "Guerriero Nescien aggressivo con artigli metallici affilati. Si lancia in cariche a terra e serie di pugni ad alta velocità.",
    tactics: "Para con la Guardia al momento dello scatto per sbilanciarlo, poi contrattacca con 'Slancio Tuono' (Thunder Surge).",
    elementalAffinities: { weak: "Tuono, Stop", resist: "Nessuna", immune: "Nessuna" },
    drops: [
      { item: "Scheggia Vigorosa (Fleeting Shard)", rate: "10%", type: "Materiale Sintesi" },
      { item: "Pozione (Potion)", rate: "6%", type: "Consumabile" }
    ],
    experience: 8,
    farmingTip: "Dominio Incantato (Ponte del Castello)."
  },
  {
    id: "bbs-bruiser",
    name: "Bruiser (Picchiatore)",
    nameEn: "Bruiser",
    gameId: "kh-bbs",
    gameTitle: "Kingdom Hearts Birth by Sleep Final Mix",
    category: "Nescien (Unversed)",
    rank: "Golia Pesante",
    iconType: "unversed",
    iconColor: "#b45309",
    worlds: ["Castello dei Sogni", "Radiant Garden", "Cimitero dei Keyblade"],
    locationDetail: "Radiant Garden (Piazza della Fontana), Cimitero dei Keyblade.",
    description: "Un gigante tozzo con pugni ferrati. Salta e sbatte le braccia al suolo scatenando onde d'urto concentriche che spezzano la guardia frontale.",
    tactics: "Salta durante il suo schianto al suolo ed esegui il Tiro Mirato (Shotlock) a mezz'aria rimanendo invulnerabile.",
    elementalAffinities: { weak: "Ghiaccio (Blizzaga)", resist: "Fuoco", immune: "Atterramento frontale" },
    drops: [
      { item: "Scheggia Tenace (Wellspring Shard)", rate: "12%", type: "Materiale Sintesi" },
      { item: "Cristallo Tenace (Wellspring Crystal)", rate: "4%", type: "Materiale Raro" }
    ],
    experience: 22,
    farmingTip: "Radiant Garden (Piazza della Fontana): appaiono in coppie, ottimi per farmare Cristalli Tenaci."
  },
  {
    id: "bbs-chrono-twister",
    name: "Chrono Twister (Vortice Temporale)",
    nameEn: "Chrono Twister",
    gameId: "kh-bbs",
    gameTitle: "Kingdom Hearts Birth by Sleep Final Mix",
    category: "Nescien (Unversed)",
    rank: "Mago Manipolatore",
    iconType: "unversed",
    iconColor: "#eab308",
    worlds: ["Isola che non C'è", "Cimitero dei Keyblade"],
    locationDetail: "Isola che non C'è (Accampamento indiano), Cimitero dei Keyblade (Valle della Tempesta).",
    description: "Una clessidra vivente minacciosa. Inverte il flusso temporale congelando il giocatore o riavvolgendo la posizione dei compagni di squadra.",
    tactics: "Usa la magia Magnete per tirarlo giù dal cielo prima che capovolga la sabbia nella clessidra, poi finiscilo con Thunder Surge.",
    elementalAffinities: { weak: "Magnete, Tuono", resist: "Stop (Immune al congelamento temporale)", immune: "Stop" },
    drops: [
      { item: "Cristallo Puro (Abounding Crystal)", rate: "8%", type: "Materiale Comandi Rari" },
      { item: "Cristallo Caotico (Chaos Crystal)", rate: "6%", type: "Materiale Sintesi" }
    ],
    experience: 50,
    farmingTip: "Isola che non C'è: essenziale per ottenere i cristalli che conferiscono l'abilità 'Second Chance' e 'Once More' nella fusione comandi."
  },

  // ==========================================
  // KINGDOM HEARTS 3D: DREAM DROP DISTANCE
  // ==========================================
  {
    id: "ddd-meow-wow",
    name: "Meow Wow (Miao Miao)",
    nameEn: "Meow Wow",
    gameId: "kh-ddd",
    gameTitle: "Kingdom Hearts 3D: Dream Drop Distance",
    category: "Mangiasogni (Dream Eater)",
    rank: "Minion Onirico",
    iconType: "dreameater",
    iconColor: "#38bdf8",
    worlds: ["Città di Mezzo (Traverse Town)", "La Rete (The Grid)", "Tutti i Mondi Onirici"],
    locationDetail: "Città di Mezzo (Primo Distretto e Tetti), presente fin dall'inizio sia come Spirito che come Incubo.",
    description: "Una creatura paffuta a forma di gatto-cane rotondo. Quando è un Incubo diventa viola con corna minacciose e rimbalza cercando di schiacciare Sora o Riku col proprio peso.",
    tactics: "Il Flowmotion sul muro con attacco rotante lo spazza via prima che possa gonfiarsi. Usa 'Balloon' per farlo rimbalzare via.",
    elementalAffinities: { weak: "Ghiaccio, Sonno", resist: "Nessuna", immune: "Nessuna" },
    drops: [
      { item: "Illusione Dolce (Sweet Fantasy)", rate: "15%", type: "Frammento Sogno" },
      { item: "Spora Sognante (Dream Spora)", rate: "20%", type: "Materiale Creazione Spiriti" }
    ],
    experience: 8,
    farmingTip: "Traverse Town (Primo Distretto nei vicoli laterali): perfetto per creare la tua prima ricetta Spirito."
  },
  {
    id: "ddd-tama-sheep",
    name: "Tama Sheep (Pecora Tama)",
    nameEn: "Tama Sheep",
    gameId: "kh-ddd",
    gameTitle: "Kingdom Hearts 3D: Dream Drop Distance",
    category: "Mangiasogni (Dream Eater)",
    rank: "Disturbatore Onirico",
    iconType: "dreameater",
    iconColor: "#a855f7",
    worlds: ["Città delle Campane (La Cité des Cloches)", "Città di Mezzo"],
    locationDetail: "Città delle Campane (Piazza della Cattedrale, Mulino a vento).",
    description: "Una pecorella onirica morbida con grandi corna a spirale. Emette onde soporifere che addormentano all'istante chiunque si trovi nel suo raggio.",
    tactics: "Non avvicinarti frontalmente se vedi che le sue corna brillano di polvere di stelle. Colpiscila da lontano con Fire o un attacco Flowmotion dall'alto.",
    elementalAffinities: { weak: "Fuoco", resist: "Sonno (Immune)", immune: "Sonno" },
    drops: [
      { item: "Illusione Soffice (Fleeting Fantasy)", rate: "15%", type: "Frammento Sogno" },
      { item: "Sonno Profondo (Sleep Drop)", rate: "25%", type: "Consumabile" }
    ],
    experience: 14,
    farmingTip: "Città delle Campane (Piazza della Cattedrale di Notre Dame)."
  },
  {
    id: "ddd-aura-lion",
    name: "Aura Lion (Leone dell'Aura)",
    nameEn: "Aura Lion",
    gameId: "kh-ddd",
    gameTitle: "Kingdom Hearts 3D: Dream Drop Distance",
    category: "Mangiasogni (Dream Eater)",
    rank: "Predatore d'Élite",
    iconType: "dreameater",
    iconColor: "#facc15",
    worlds: ["Il Mondo che non Esiste", "Paese dei Balocchi (Prankster's Paradise)"],
    locationDetail: "Il Mondo che non Esiste (Vicolo Deserto e Grattacielo della Memoria).",
    description: "Un maestoso leone alato ammantato di luce sacra azzurra. Scaglia fasci laser luminosi dagli occhi e si teletrasporta in cariche soniche devastanti.",
    tactics: "Blocca la carica con la Barriera magica di Riku per stordirlo, poi scarica magie Balloonra o Dark Firaga.",
    elementalAffinities: { weak: "Oscurità (Darkness)", resist: "Sacro, Luce (Immune)", immune: "Luce" },
    drops: [
      { item: "Illusione Sacra (Noble Fantasy)", rate: "8%", type: "Frammento Raro" },
      { item: "Cristallo di Luce (Light Crystal)", rate: "10%", type: "Materiale Spirito" }
    ],
    experience: 85,
    farmingTip: "The World That Never Was (Piani inferiori): necessario per forgiare lo Spirito Aura Lion che dona abilità passive di massimo livello."
  },
  {
    id: "ddd-tyranto-rex",
    name: "Tyranto Rex (Tiranto Rex)",
    nameEn: "Tyranto Rex",
    gameId: "kh-ddd",
    gameTitle: "Kingdom Hearts 3D: Dream Drop Distance",
    category: "Mangiasogni (Dream Eater)",
    rank: "Predatore Apex / Mini-Boss",
    iconType: "dreameater",
    iconColor: "#b91c1c",
    worlds: ["Paese dei Balocchi (Prankster's Paradise)", "Sinfonia della Magia"],
    locationDetail: "Prankster's Paradise (Ventre della Balena Monstro), Portali Speciali.",
    description: "Un colossale tirannosauro ricoperto di magma e fiamme. Sputa meteore infuocate, calpesta il terreno con terremoti e carica a testa bassa.",
    tactics: "Usa costantemente il Flowmotion sulle pareti per rimanere sopraelevato. Quando ruggisce rilasciando lava, precipita con uno schianto e usa magie d'acqua o ghiaccio.",
    elementalAffinities: { weak: "Ghiaccio (Blizzaga)", resist: "Fuoco (Assorbe)", immune: "Fuoco" },
    drops: [
      { item: "Illusione Ferina (Wild Fantasy)", rate: "6%", type: "Frammento Raro" },
      { item: "Dente Selvaggio (Savage Tooth)", rate: "12%", type: "Materiale Creazione Apex" }
    ],
    experience: 140,
    farmingTip: "Portale Speciale 4 nel Paese dei Balocchi: batterlo conferisce materiali unici per creare il compagno Tyranto Rex."
  },

  // ==========================================
  // KINGDOM HEARTS 0.2 & KINGDOM HEARTS III
  // ==========================================
  {
    id: "kh3-demon-tower",
    name: "Demon Tower (Torre Demoniaca)",
    nameEn: "Demon Tower",
    gameId: "kh3",
    gameTitle: "Kingdom Hearts 0.2 & Kingdom Hearts III",
    category: "Heartless Purosangue (Collettivo)",
    rank: "Mini-Boss / Cataclisma",
    iconType: "heartless-pure",
    iconColor: "#dc2626",
    worlds: ["Regno dell'Oscurità (Dark World)", "Crepuscopoli", "Cimitero dei Keyblade"],
    locationDetail: "0.2 (Riva Buia), KH3 (Crepuscopoli fuori dalla Villa, Cimitero dei Keyblade).",
    description: "Una mostruosa colonna rotante composta da migliaia di Heartless Shadow fusi insieme in un'unica mente alveare. Si scaglia contro il bersaglio come un serpente o cade a picco come un martello.",
    tactics: "Quando i suoi occhi diventano rossi incandescenti, entra in berserk: schiva continuamente o para con la Guardia. Quando torna di colore blu scuro, scarica le magie Thundaga e i Cambi Forma del Keyblade.",
    elementalAffinities: { weak: "Luce, Magie Grandi", resist: "Oscurità", immune: "Effetti di stato" },
    drops: [
      { item: "Cristallo dell'Ombra (Shadow Crystal)", rate: "100%", type: "Materiale Sintesi" },
      { item: "Gran Elisir (Megalixir)", rate: "20%", type: "Consumabile Raro" }
    ],
    experience: 350,
    farmingTip: "Portale di Battaglia n. 1 a Crepuscopoli (Cortile della Villa Abbandonata)."
  },
  {
    id: "kh3-flame-core",
    name: "Flame Core (Nucleo di Fuoco)",
    nameEn: "Flame Core",
    gameId: "kh3",
    gameTitle: "Kingdom Hearts III",
    category: "Heartless Emblema",
    rank: "Minion Elementale",
    iconType: "heartless-emblem",
    iconColor: "#f97316",
    worlds: ["Monte Olimpo", "Crepuscopoli", "Regno di Corona"],
    locationDetail: "Monte Olimpo (Tebe e Dirupi rocciosi), Crepuscopoli.",
    description: "Una sfera magica infuocata circondata da fiamme vive. Si avventa su Sora come una meteora e quando subisce danni esplode in frammenti incandescenti.",
    tactics: "Una sola magia Water (o Blizzard) spegne all'istante le sue fiamme, lasciandolo stordito e indifeso sul terreno.",
    elementalAffinities: { weak: "Acqua (Water), Ghiaccio", resist: "Tuono", immune: "Fuoco (Assorbe)" },
    drops: [
      { item: "Scheggia Ardente (Blaze Shard)", rate: "15%", type: "Materiale Sintesi" },
      { item: "Pietra Ardente (Blaze Stone)", rate: "6%", type: "Materiale Sintesi" }
    ],
    experience: 16,
    farmingTip: "Monte Olimpo (I vicoli in fiamme di Tebe): respawn immediato e ideale per potenziare i primi Keyblade."
  },
  {
    id: "kh3-water-core",
    name: "Water Core (Nucleo d'Acqua)",
    nameEn: "Water Core",
    gameId: "kh3",
    gameTitle: "Kingdom Hearts III",
    category: "Heartless Emblema",
    rank: "Minion Elementale",
    iconType: "heartless-emblem",
    iconColor: "#0284c7",
    worlds: ["Monte Olimpo", "Regno di Corona", "Mostropoli"],
    locationDetail: "Monte Olimpo (Fiume e cascate), Regno di Corona (Foresta).",
    description: "Una goccia gigante d'acqua fluttuante che si avvolge in una barriera fluida a cupola, respingendo ogni colpo fisico con getti d'acqua ad alta pressione.",
    tactics: "La magia Fire (o Thunder) fa evaporare immediatamente la sua cupola acquatica. Attiva il tiro mirato per eliminarli in gruppo.",
    elementalAffinities: { weak: "Fuoco (Fire), Tuono", resist: "Ghiaccio", immune: "Acqua (Assorbe)" },
    drops: [
      { item: "Scheggia Gelante (Frost Shard)", rate: "15%", type: "Materiale Sintesi" },
      { item: "Pietra Acqua (Water Stone)", rate: "8%", type: "Materiale Sintesi" }
    ],
    experience: 18,
    farmingTip: "Monte Olimpo (Sentiero della Cascata verso la vetta)."
  },
  {
    id: "kh3-toy-soldier",
    name: "Toy Soldier (Soldatino Giocattolo)",
    nameEn: "Toy Soldier",
    gameId: "kh3",
    gameTitle: "Kingdom Hearts III",
    category: "Heartless Emblema",
    rank: "Soldato d'Élite Meccanico",
    iconType: "heartless-emblem",
    iconColor: "#10b981",
    worlds: ["Toy Box (Mondo dei Giocattoli)"],
    locationDetail: "Toy Box (Camera di Andy, Negozio Galaxy Toys piani 1 e 2).",
    description: "Heartless soldatino con fucile giocattolo a molla. Marcatamente disciplinato, forma plotoni di fuoco con raffiche sincronizzate e baionette.",
    tactics: "Salta a bordo di un robot 'Gigas' per schiacciarlo sotto i cingolati o usa il cambio forma martello del Keyblade per sbaragliarli ad area.",
    elementalAffinities: { weak: "Tuono (Thunder), Attacchi Gigas", resist: "Nessuna", immune: "Nessuna" },
    drops: [
      { item: "Scheggia Illusoria (Mythril Shard)", rate: "12%", type: "Materiale Sintesi" },
      { item: "Pietra del Vigore (Might Stone)", rate: "6%", type: "Materiale Sintesi" }
    ],
    experience: 24,
    farmingTip: "Galaxy Toys (Piano terra): usa il Gigas da combattimento per abbatterne decine in pochi secondi."
  },
  {
    id: "kh3-frost-serpent",
    name: "Frost Serpent (Serpente dei Ghiacci)",
    nameEn: "Frost Serpent",
    gameId: "kh3",
    gameTitle: "Kingdom Hearts III",
    category: "Heartless Emblema",
    rank: "Golia Elementale / Mini-Boss",
    iconType: "heartless-emblem",
    iconColor: "#06b6d4",
    worlds: ["Arendelle (Mondo di Frozen)"],
    locationDetail: "Arendelle (Montagna del Nord, Burrone Innevato, Labirinto di Ghiaccio).",
    description: "Un maestoso drago serpente alato di puro ghiaccio perenne. Dispiega le ali generando bufere che riducono la visibilità e congela il terreno.",
    tactics: "Usa la magia Firaga (Fuoco) per sciogliere le ali ghiacciate. Quando le ali cadono, il serpente crolla a terra stordito per oltre 8 secondi!",
    elementalAffinities: { weak: "Fuoco (300% danno sulle ali)", resist: "Vento", immune: "Ghiaccio (Assorbe totalmente)" },
    drops: [
      { item: "Cristallo Gelante (Frost Crystal)", rate: "8%", type: "Materiale Sintesi" },
      { item: "Zanna Glaciale (Glacial Fang)", rate: "12%", type: "Materiale Raro" }
    ],
    experience: 110,
    farmingTip: "Arendelle (Cresta della Montagna del Nord): essenziale per reperire Cristalli Gelanti per la sintesi avanzata."
  },
  {
    id: "kh3-rock-troll",
    name: "Rock Troll (Troll di Roccia)",
    nameEn: "Rock Troll",
    gameId: "kh3",
    gameTitle: "Kingdom Hearts III",
    category: "Heartless Emblema",
    rank: "Mini-Boss",
    iconType: "heartless-emblem",
    iconColor: "#78716c",
    worlds: ["Monte Olimpo", "Regno di Corona", "Crepuscopoli"],
    locationDetail: "Monte Olimpo (Piazza di Tebe), Regno di Corona (Torre di Raperonzolo).",
    description: "Un enorme troll di roccia con una clava d'osso e pietra. Si arrampica sui tetti degli edifici e si scaglia al suolo con onde sismiche devastanti.",
    tactics: "Attiva l'attacco 'Aero' per sollevarti in aria e colpirgli la testa. Quando salta per schiantarsi, esegui il Flowmotion su un lampione per contrattaccare.",
    elementalAffinities: { weak: "Vento (Aero), Attacchi Aerei", resist: "Attacchi a terra", immune: "Atterramento frontale" },
    drops: [
      { item: "Cristallo della Forza (Power Crystal)", rate: "15%", type: "Materiale Sintesi" },
      { item: "Gran Elisir (Megalixir)", rate: "5%", type: "Consumabile Raro" }
    ],
    experience: 180,
    farmingTip: "Portale di Battaglia n. 2 sul Monte Olimpo."
  },
  {
    id: "kh3-reaper",
    name: "Reaper (Mietitore)",
    nameEn: "Reaper",
    gameId: "kh3",
    gameTitle: "Kingdom Hearts III",
    category: "Nessuno",
    rank: "Nessuno Superiore di Marluxia",
    iconType: "nobody",
    iconColor: "#f43f5e",
    worlds: ["Regno di Corona", "Cimitero dei Keyblade"],
    locationDetail: "Regno di Corona (Foresta profonda), Cimitero dei Keyblade (Labirinto).",
    description: "Nessuno slanciato con maschera e una falce gargantuesca simile a quella di Marluxia. Si smaterializza in petali di ciliegio rosa e compare alle spalle per decapitare il bersaglio.",
    tactics: "Usa la Guardia con tempismo appena vedi i petali concentrarsi alle tue spalle. Rispondi subito con magia Firaga o cambio forma del Keyblade.",
    elementalAffinities: { weak: "Fuoco, Sacro", resist: "Vento", immune: "Nessuna" },
    drops: [
      { item: "Cristallo Crepuscolare (Twilight Crystal)", rate: "8%", type: "Materiale Sintesi" },
      { item: "Pietra Densa (Dense Stone)", rate: "10%", type: "Materiale Sintesi" }
    ],
    experience: 140,
    farmingTip: "Regno di Corona (Portale di Battaglia n. 7)."
  }
];
