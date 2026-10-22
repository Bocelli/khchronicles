/**
 * TOMO DELLE ABILITÀ, MAGIE & CRESCITA
 * Guida esaustiva a tutte le skill di combattimento, sopravvivenza essenziali (Second Chance, Once More),
 * abilità di movimento e il sistema magico elementale.
 */

window.KH_SKILLS_DATA = {
  // 1. Abilità di Supporto e Sopravvivenza (I pilastri per non morire a Proud/Critical)
  survivalSkills: [
    {
      id: "second-chance",
      name: "Second Chance (Ultima Chance)",
      nameEn: "Second Chance",
      type: "Supporto Vitale",
      apCost: "4 - 5 AP",
      games: ["KH1", "KH2", "BBS", "DDD", "KH3"],
      effect: "Se Sora riceve un singolo colpo fatale mentre ha almeno 2 HP, sopravvive sempre rimanendo con 1 HP.",
      howToUnlock: "KH1: Livello 36 (se scegli lo Scudo), Lv.48 (se scegli la Spada), Lv.48 (Scettro).\nKH2: Livello 9 (Scudo), Lv.85 (Spada), Lv.65 (Scettro).\nKH3: Abilità nativa su equipaggiamenti o sbloccata a metà storia.",
      proTip: "Indispensabile contro i boss segreti. Impedisce l'one-shot da parte di attacchi che causano 9999 di danno."
    },
    {
      id: "once-more",
      name: "Once More (Di Nuovo)",
      nameEn: "Once More",
      type: "Supporto Vitale",
      apCost: "4 - 5 AP",
      games: ["KH2", "BBS", "DDD", "KH3"],
      effect: "Se Sora viene colpito da una combo continua di più fendenti aerei o raffiche magiche, non può morire a mezz'aria durante la sequenza e rimane con 1 HP fino al termine dell'assalto nemico.",
      howToUnlock: "KH2: Livello 4 (Scudo), Lv.28 (Spada), Lv.47 (Scettro).\nBBS: Creabile fondendo Comandi (es. Fira + Fira con Gemma Pozione).\nKH3: Appresa salendo di livello (attorno al Lv.30-35).",
      proTip: "In combinazione con Second Chance crea l'immortalità finché non si tocca terra: non premere Aerial Recovery finché la combo del boss non è finita!"
    },
    {
      id: "leaf-bracer",
      name: "Leaf Bracer (Proteggi Cura)",
      nameEn: "Leaf Bracer",
      type: "Magia Ininterrotta",
      apCost: "4 - 5 AP",
      games: ["KH1 FM", "KH2 FM", "BBS", "DDD", "KH3"],
      effect: "Sora diventa totalmente invincibile e inattaccabile per tutta la durata dell'animazione di lancio della magia Cura/Curaga.",
      howToUnlock: "KH1 FM: Livello 27 (Scudo), Lv.39 (Scettro), Lv.69 (Spada).\nKH2: Livello 20 circa o sbloccata battendo boss di trama.\nBBS: Fusione comandi magici con cristallo solido.",
      proTip: "La via maestra per salvarsi: anche con 1 HP rimasto, iniziare a lanciare Cura assorbe qualsiasi fendente nemico azzerando il danno."
    },
    {
      id: "mp-haste-hastega",
      name: "MP Haste & MP Hastega",
      nameEn: "MP Haste / Hastega",
      type: "Ricarica Arcana",
      apCost: "3 - 5 AP",
      games: ["KH1", "KH2", "KH3"],
      effect: "Riduce il tempo di ricarica della barra MP rosa del 25% (Haste) o del 50% (Hastega). Si accumula con le abilità dei Keyblade (es. Ultima Weapon).",
      howToUnlock: "KH2: Sblocca con la Forma Giudizio (Wisdom Form) e salendo di livello con la scelta del bastone magico.",
      proTip: "Fondamentale per i giocatori che usano spam di magia Reflect o Curaga frequente."
    },
    {
      id: "lucky-strike",
      name: "Lucky Strike (Premio Partita)",
      nameEn: "Lucky Strike",
      type: "Farming & Sintesi",
      apCost: "3 AP",
      games: ["KH1", "KH2", "KH3"],
      effect: "Aumenta la probabilità di rilascio degli oggetti rari e dei materiali di sintesi del 30%-50% per ogni membro del party che la equipaggia.",
      howToUnlock: "KH1: Livello 15 (Scudo), Paperino Lv.39, Pippo Lv.36.\nKH2: Equipaggiabile da Sora, Paperino e Pippo accumulando fino a x3 l'effetto.",
      proTip: "Obbligatorio per farmare le 7 unità di Oricalco+ e le gocce per l'Ultima Weapon senza impazzire!"
    }
  ],

  // 2. Abilità di Crescita (Movement / Mobility)
  growthAbilities: [
    {
      id: "high-jump",
      name: "Salto Alto (High Jump)",
      originForm: "Forma Valore (Valor Form - KH2)",
      maxLevel: "Livello MAX (Lv.4)",
      effect: "Aumenta esponenzialmente l'altezza del salto di Sora.",
      levels: [
        { lv: "Lv.1", requirement: "Forma Valore Lv.3", desc: "Salto base migliorato del 40%." },
        { lv: "Lv.2", requirement: "Forma Valore Lv.5", desc: "Salto alto con atterraggio ammortizzato." },
        { lv: "Lv.3", requirement: "Forma Valore Lv.7", desc: "Salto acrobatico elevatissimo, supera ostacoli di trama." },
        { lv: "MAX", requirement: "Forma Valore Lv.9 (FM)", desc: "Salto massimo continuo senza limiti di slancio." }
      ]
    },
    {
      id: "quick-run",
      name: "Scatto Rapido (Quick Run)",
      originForm: "Forma Giudizio (Wisdom Form - KH2)",
      maxLevel: "Livello MAX (Lv.4)",
      effect: "Scatto in avanti planando a pelo d'acqua con invulnerabilità ai frame centrali.",
      levels: [
        { lv: "Lv.1", requirement: "Forma Giudizio Lv.3", desc: "Breve dash orizzontale tenendo premuto Quadrato/X." },
        { lv: "Lv.2", requirement: "Forma Giudizio Lv.5", desc: "Dash più rapido e lungo." },
        { lv: "Lv.3", requirement: "Forma Giudizio Lv.7", desc: "Scatto ad alta velocità ideale per schivare raggi laser." },
        { lv: "MAX", requirement: "Forma Giudizio Lv.9 (FM)", desc: "Scatto prolungato che attraversa i proiettili nemici." }
      ]
    },
    {
      id: "dodge-roll",
      name: "Schivata Rotolante (Dodge Roll)",
      originForm: "Forma Limite (Limit Form - KH2 FM)",
      maxLevel: "Livello MAX (Lv.4)",
      effect: "La classica capriola d'invulnerabilità di KH1 con iframes istantanei all'inizio del movimento.",
      levels: [
        { lv: "Lv.1", requirement: "Forma Limite Lv.3", desc: "Capriola classica sul posto." },
        { lv: "Lv.2", requirement: "Forma Limite Lv.5", desc: "Capriola più rapida con più frame d'invincibilità." },
        { lv: "Lv.3", requirement: "Forma Limite Lv.7", desc: "Capriola a catena senza delay di recupero." },
        { lv: "MAX", requirement: "Forma Limite Lv.9 (FM)", desc: "Schivata infinita a terra impenetrabile." }
      ]
    },
    {
      id: "aerial-dodge",
      name: "Schivata Aerea (Aerial Dodge)",
      originForm: "Forma Maestria (Master Form - KH2)",
      maxLevel: "Livello MAX (Lv.4)",
      effect: "Doppio salto rotante a mezz'aria che deflette i proiettili e spinge Sora ancora più in alto.",
      levels: [
        { lv: "Lv.1", requirement: "Forma Maestria Lv.3", desc: "Doppio salto con parata frontale automatica." },
        { lv: "Lv.2", requirement: "Forma Maestria Lv.5", desc: "Raggio di deflessione ampliato." },
        { lv: "Lv.3", requirement: "Forma Maestria Lv.7", desc: "Spinta verticale massima." },
        { lv: "MAX", requirement: "Forma Maestria Lv.9 (FM)", desc: "Deflessione a 360 gradi a mezz'aria." }
      ]
    },
    {
      id: "glide",
      name: "Plana / Volo Libero (Glide)",
      originForm: "Forma Finale (Final Form - KH2)",
      maxLevel: "Livello MAX (Lv.4)",
      effect: "Permette a Sora di volare orizzontalmente ad altissima velocità su qualsiasi baratro.",
      levels: [
        { lv: "Lv.1", requirement: "Forma Finale Lv.3", desc: "Planata lenta verso il basso tenendo Quadrato." },
        { lv: "Lv.2", requirement: "Forma Finale Lv.5", desc: "Planata quasi orizzontale a media velocità." },
        { lv: "Lv.3", requirement: "Forma Finale Lv.7", desc: "Volo orizzontale rapido e stabile." },
        { lv: "MAX", requirement: "Forma Finale Lv.9 (FM)", desc: "Superglide a velocità supersonica per attraversare intere arene." }
      ]
    }
  ],

  // 3. Sistema Magico & Incantesimi Avanzati
  magicSpells: [
    {
      name: "Fire → Fira → Firaga",
      element: "Fuoco",
      style: "Offensivo Rapido",
      behavior: "In KH1 circonda Sora con un anello di fiamme ravvicinato. In KH2 scaglia un vortice di fuoco a spirale intorno al corpo. In KH3 spara globi infuocati teleguidati rapidissimi a lungo raggio.",
      bestUse: "Distruggere istantaneamente Heartless di tipo Ghiaccio (Blue Rhapsody) e sciami di Ombre."
    },
    {
      name: "Blizzard → Blizzara → Blizzaga",
      element: "Ghiaccio",
      style: "Proiettile a Cono",
      behavior: "Spara una raffica di schegge di ghiaccio che perforano i nemici in fila. In KH3 lascia una scia di rotaia di ghiaccio su cui scivolare in Flowmotion.",
      bestUse: "Congelare i nemici corazzati (Soldato, Large Body) spezzandone le combo."
    },
    {
      name: "Thunder → Thundara → Thundaga",
      element: "Fulmine",
      style: "Danno ad Area Verticale (AoE)",
      behavior: "Fa piovere colonne di fulmini dall'alto colpendo a 360 gradi tutti i bersagli nell'area.",
      bestUse: "Il migliore incantesimo per ripulire intere stanze in pochi secondi, specialmente in sinergia con Magia Magnete in KH2."
    },
    {
      name: "Cure → Cura → Curaga",
      element: "Luce e Risanamento",
      style: "Guarigione Vitale",
      behavior: "Ripristina HP a Sora e agli alleati. In KH1 consuma 1 sola tacca MP; da KH2 in poi consuma TUTTA la barra MP rimasta attivando la ricarica.",
      bestUse: "Usare sempre all'ultimo briciolo di MP prima che la barra scada, o con Leaf Bracer attivo per evitare colpi letali."
    },
    {
      name: "Reflect → Reflera → Reflega (KH2)",
      element: "Luce Riflettente",
      style: "Contrattacco Assoluto",
      behavior: "Crea una cupola di specchi intorno a Sora. Se un nemico tocca la cupola mentre attacca, l'incantesimo deflette l'impatto ed ESPLODE moltiplicando il danno contro il boss!",
      bestUse: "L'arma più potente e rotta di KH2: batte qualsiasi boss (incluso Roxas, Marluxia e Sephiroth) rimandando al mittente le loro mosse finali."
    },
    {
      name: "Magnet → Magnera → Magnega (KH2 / BBS)",
      element: "Gravità Attrattiva",
      style: "Controllo di Massa",
      behavior: "Genera un buco nero luminoso che risucchia tutti i nemici leggeri e medi a mezz'aria, tenendoli bloccati e indifesi.",
      bestUse: "Combinare Magnega + Thundaga distrugge qualsiasi orda del Colosseo e della Caverna delle Rimembranze in 2 secondi."
    },
    {
      name: "Balloon → Balloonra → Ballonga (KH 3D DDD)",
      element: "Sogni & Impatto",
      style: "Esplosivo Teleguidato",
      behavior: "Disperde sul terreno palloncini colorati che inseguono i nemici ed esplodono infliggendo colpi multipli continui e stordimento.",
      bestUse: "La magia più sbilanciata e famosa dell'intera serie: consente a Sora e Riku di sconfiggere Julius e i boss finali senza farsi mai toccare."
    }
  ]
};
