/**
 * FORME DI FUSIONE, UNIONI DEI CUORI & LINK DI COMBATTIMENTO
 * Dettagli approfonditi su tutte le Forme di KH2 (Valore, Giudizio, Limite, Maestria, Finale, Anti-Form),
 * Stili di Comando & D-Link di Birth by Sleep, e le Grandi Unioni di KH3.
 */

window.KH_UNIONS_DATA = {
  // 1. Le Forme di Fusione di Kingdom Hearts II (Drive Forms)
  driveForms: [
    {
      id: "valor-form",
      name: "Forma Valore",
      nameEn: "Valor Form",
      cost: "3 Barre Drive",
      partnerRequired: "Pippo (Goofy)",
      colorSuit: "Rosso Rubino Fiamma",
      keybladesUsed: "2 Keyblade (Uno per mano, specialista corpo a corpo)",
      growthAbility: "Salto Alto (High Jump)",
      expCondition: "1 EXP per ogni singolo colpo andato a segno su un nemico.",
      bestExpSpot: "Mondo di Agrabah o Terre del Branco (colpendo nemici con molti HP come i Ciccioni/Large Body o i boss).",
      description: "Sora assorbe la forza e la tenacia di Pippo trasformando il suo abito in un rosso acceso. Scatena combo fisiche rapidissime a terra e in aria con due Keyblade, ma non può lanciare alcuna magia.",
      specialTraits: [
        "Impossibile usare magie (il menù Magia è rimpiazzato da Auto-Ricarica).",
        "Velocità di corsa aumentata e animazioni di salto prolungate.",
        "Mossa finale a terra che scaglia un'onda d'urto circolare devastante."
      ]
    },
    {
      id: "wisdom-form",
      name: "Forma Giudizio",
      nameEn: "Wisdom Form",
      cost: "3 Barre Drive",
      partnerRequired: "Paperino (Donald)",
      colorSuit: "Blu Cobalto Elettrico",
      keybladesUsed: "1 Keyblade (Impugnato a una mano con fluttuazione magica)",
      growthAbility: "Scatto Rapido (Quick Run)",
      expCondition: "1 EXP per ogni Heartless eliminato mentre la forma è attiva.",
      bestExpSpot: "Il Fiume Senza Tempo (Timeless River): entra nelle 4 finestre e pulisci le orde di Heartless deboli con Magia Thundaga.",
      description: "Sora si fonde con la saggezza magica di Paperino, scivolando sul terreno a pelo d'aria come se pattinasse sul ghiaccio. Il comando Attacco spara proiettili magici azzurri a lungo raggio.",
      specialTraits: [
        "Attacco base convertito in proiettili magici a ricerca (Mobile Shot).",
        "Tempo di ricarica MP dimezzato e potenza magica aumentata.",
        "Movimento continuo durante il lancio degli incantesimi."
      ]
    },
    {
      id: "limit-form",
      name: "Forma Limite (Esclusiva Final Mix)",
      nameEn: "Limit Form",
      cost: "4 Barre Drive",
      partnerRequired: "Nessun compagno! (Usabile anche da solo con Sora)",
      colorSuit: "Rosso e Nero Ispirato al Costume Originale di KH1",
      keybladesUsed: "1 Keyblade (Con aurea dorata e mosse leggendarie di KH1)",
      growthAbility: "Schivata Rotolante (Dodge Roll)",
      expCondition: "1 EXP per ogni colpo finale di un Comando Limite completato con successo.",
      bestExpSpot: "Agrabah (Bazaar) o Caverna delle Rimembranze: usa Sonic Blade contro gli sciami per accumulare EXP velocemente.",
      description: "La forma più nostalgica e versatile. Ricorda il Sora tredicenne del primo capitolo, ripristinando le celebri abilità speciali come Colpo Sonico, Aerocolpo, Incrocio e Ultimo Limite.",
      specialTraits: [
        "Ogni colpo dei Comandi Limite ripristina istantaneamente gli HP di Sora!",
        "Non richiede Paperino né Pippo: perfetta per le battaglie in solitaria contro Roxas o Sephiroth.",
        "Sblocca la Schivata Rotolante (Dodge Roll) per Sora normale."
      ]
    },
    {
      id: "master-form",
      name: "Forma Maestria",
      nameEn: "Master Form",
      cost: "4 Barre Drive",
      partnerRequired: "Paperino + Pippo (Entrambi i compagni)",
      colorSuit: "Oro Brillante & Giallo Sole",
      keybladesUsed: "2 Keyblade (Uno impugnato a mano e uno manovrato telecineticamente con la magia)",
      growthAbility: "Schivata Aerea (Aerial Dodge)",
      expCondition: "1 EXP per ogni Sfera Drive Piccola raccolta; 3 EXP per ogni Sfera Drive Grande.",
      bestExpSpot: "Il Castello della Bestia (Salone d'Ingresso) o Crepuscopoli rompendo le sfere o distruggendo le armature animate.",
      description: "L'equilibrio perfetto tra il fendente fisico e la maestria arcana. Sora fluttua a mezz'aria tempestando i nemici con combinazioni aeree che uniscono colpi di lama e scariche magiche.",
      specialTraits: [
        "I suoi attacchi aerei risucchiano i nemici circostanti in un turbine rotante.",
        "La magia Fire crea una cupola ardente a raggio esteso intorno a Sora.",
        "Consente a Sora di eseguire il doppio salto rotante (Aerial Dodge)."
      ]
    },
    {
      id: "final-form",
      name: "Forma Finale",
      nameEn: "Final Form",
      cost: "5 Barre Drive",
      partnerRequired: "Paperino + Pippo (Entrambi i compagni)",
      colorSuit: "Bianco Puro & Argento Lucente con Simboli Sacri",
      keybladesUsed: "2 Keyblade d'Argento (Completamente fluttuanti e comandati dal pensiero)",
      growthAbility: "Plana / Volo Libero (Glide)",
      expCondition: "1 EXP per ogni creatura Nessuno (Nobody) sconfitta.",
      bestExpSpot: "Il Mondo che non Esiste (Grattacielo della Memoria o Rovine dell'Oblio) eliminando Creeper, Samurai e Ballerine.",
      description: "La quintessenza del potere dei custodi. Sora fluttua nel vuoto mentre i suoi due Keyblade danzano a mezz'aria alle sue spalle. Anche semplicemente saltando o planando, i Keyblade ruotano da soli parando e sminuzzando qualsiasi attacco nemico.",
      specialTraits: [
        "Auto-parata: semplicemente camminando o planando, i Keyblade riflettono tutti gli attacchi frontali.",
        "La forma con il DPS (danno al secondo) più mostruoso dell'intera trilogia.",
        "Sblocca il volo a velocità supersonica (Glide Lv.MAX) per Sora."
      ]
    },
    {
      id: "anti-form",
      name: "Anti-Fusione (La Bestia Oscura)",
      nameEn: "Anti Form",
      cost: "Tutte le Barre Drive caricate (Innesco Casuale)",
      partnerRequired: "Scatta per errore quando si tenta una normale Fusione",
      colorSuit: "Nero Pece Inchiostro con Occhi Gialli Fiammeggianti da Heartless",
      keybladesUsed: "0 Keyblade! (Combatte a mani nude con artigli laceranti d'ombra)",
      growthAbility: "Nessuna abilità di crescita",
      expCondition: "Non può salire di livello (è una punizione/forma di rischio).",
      bestExpSpot: "Da evitare nei boss! Ma eccezionale per svuotare stanze a tempo di record.",
      description: "La manifestazione dell'oscurità ancora presente nel cuore di Sora fin da quando si trasformò in Heartless a Hollow Bastion. Il gioco tiene traccia di un contatore nascosto chiamato 'Punti Anti' (Anti-Points): ogni volta che usi Valore, Giudizio o Maestria, accumuli punti che aumentano il rischio che Sora si trasformi in una fiera selvaggia.",
      specialTraits: [
        "Impossibile usare magie, oggetti o parare.",
        "Impossibile tornare normale volontariamente: dura fino all'esaurimento della barra Drive.",
        "Velocità e scatti quadruplicati, attacca come un felino allungando ombre a terra.",
        "Se usi la Forma Finale o Due Diventano Uno, i punti anti si azzerano!"
      ]
    }
  ],

  // 2. Stili di Comando & Connessioni D-Link (Birth by Sleep)
  bbsCombatSystem: {
    commandStyles: [
      { name: "Fatal Mode", user: "Terra / Ventus", desc: "Attacchi fisici potenziati che scagliano rocce e fendenti pesanti." },
      { name: "Spell Weaver", user: "Aqua", desc: "Aqua si libra su un vortice di luce magica e conclude con un raggio prismatico a 360°." },
      { name: "Fireblazer", user: "Tutti", desc: "I comandi si infondono di fuoco, lasciando scie fiammeggianti e meteore." },
      { name: "Ghost Drive", user: "Aqua", desc: "Aqua si teletrasporta lasciando immagini residue spettrali veloci come il lampo." },
      { name: "Wingblade", user: "Ventus", desc: "Ventus genera 6 ali di spade laser dorate che trafiggono i bersagli contemporaneamente." },
      { name: "Rhythm Mixer", user: "Tutti (FM)", desc: "Stile ritmico che fa vibrare le casse acustiche a tempo di musica con onde d'urto." }
    ],
    dLinks: [
      { name: "D-Link Ventus", effect: "Dona lo scatto Haste e l'attacco aereo acrobatico." },
      { name: "D-Link Aqua", effect: "Ripristina MP e sblocca la parata circolare e magie avanzate." },
      { name: "D-Link Terra", effect: "Dona iper-armatura che impedisce al personaggio di vacillare." },
      { name: "D-Link Topolino (Mickey)", effect: "Sblocca Luce Sacra, raddoppia i munny e impedisce il game over." },
      { name: "D-Link Stitch", effect: "Suona l'ukulele stordendo tutti i nemici a schermo e rigenera costantemente i comandi." }
    ]
  },

  // 3. Unioni & Attacchi Combinati dei Custodi (Team Attacks & Link)
  teamUnions: [
    {
      name: "Sessione (Session - Sora & Riku)",
      game: "Kingdom Hearts II",
      desc: "L'attacco combinato più spettacolare tra i due amici d'infanzia al Mondo che non Esiste. Riku lancia Sora in aria, che esegue affondi incrociati mentre Riku scaglia frecce d'oscurità Dark Aura, terminando con una cupola di luce purificatrice."
    },
    {
      name: "Trinità Suprema (Trinity Limit)",
      game: "KH1 & KH2",
      desc: "Sora, Paperino e Pippo uniscono le loro armi al centro evocando il simbolo coronato di Kingdom Hearts. Sfere di luce esplodono sradicando qualsiasi nemico nell'arena."
    },
    {
      name: "Unioni dei Mangiasogni (Dream Eater Dual Link)",
      game: "Dream Drop Distance",
      desc: "Sora cavalca i suoi spiriti alleati trasformandosi in un ariete arcobaleno (Whirling Horn), mentre Riku assorbe gli spiriti all'interno della sua lama per sferrare attacchi scuri implacabili (Decussation)."
    },
    {
      name: "Legame Re Ralph (Wreck-It Ralph Link)",
      game: "Kingdom Hearts III",
      desc: "Sora piazza blocchi di pixel a terra creando trappole luminose che Ralph demolisce con pugni giganteschi in una deflagrazione a 8-bit."
    },
    {
      name: "Legame Ariel (Sirena dei Mari)",
      game: "Kingdom Hearts III",
      desc: "Sora si tuffa in un vortice d'acqua musicale con Ariel, saltando fuori da fontane zampillanti per poi concludere con un'onda anomala che travolge l'arena."
    }
  ]
};
