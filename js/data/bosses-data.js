/**
 * ARCHIVIO DEI BOSS SEGRETI DI KINGDOM HEARTS
 * Schede strategiche complete, mosse letali, requisiti, equipaggiamento consigliato e tattiche di vittoria.
 */

window.KH_BOSSES_DATA = [
  {
    id: "lingering-will",
    name: "Volontà Residua (Lingering Will)",
    game: "Kingdom Hearts II Final Mix",
    location: "Cimitero dei Keyblade (Porto del Destino)",
    difficulty: "Estrema (S+)",
    recommendedLevel: "Livello 99 con tutte le Forme di Fusione al massimo",
    recommendedGear: "Keyblade Decisivo (Decisive Pumpkin) o Ultima Weapon; 4 Fasce Cosmiche o Nastri (Ribbons); Elisir a volontà nei collegamenti rapidi.",
    loreSnippet: "L'armatura vuota di Terra, animata unicamente dalla rabbia incontenibile e dalla promessa di salvare Ventus e Aqua. Ha vegliato immobile nel deserto per 10 anni in attesa del ritorno di Xehanort, scambiando Sora per un'altra delle sue incarnazioni.",
    deadlyAttacks: [
      {
        name: "Sigillo della Maledizione (Curse Seal)",
        description: "Scaglia una sfera arancione o blu. Se vieni colpito da quella arancione, ti blocca i comandi di Attacco Fisico; se blu, blocca Magia e Oggetti! Devi colpirlo per rompere il sigillo prima di morire."
      },
      {
        name: "Aliante Trasformabile (Glider Cannon / Drill)",
        description: "Trasforma il Keyblade in una motocicletta/cannone ad alta velocità e spara laser continui mentre ti carica a terra."
      },
      {
        name: "Ars Solum & Disperazione",
        description: "Una furiosa sequenza di colpi ravvicinati che supera i 10 fendenti consecutivi. Se non pari il primo colpo, Once More è l'unica cosa che ti salva."
      },
      {
        name: "Raggio Orbitale Satellite (Ultima Cannon)",
        description: "Genera una sfera di energia gigantesca che scende dall'alto e spara laser orbitali ad inseguimento."
      }
    ],
    strategyLegit: "La chiave della vittoria lecita risiede nel comando Guardia (Guard) e nella magia Reflex. Quando carica il cannone, fai scatti rotolanti (Quick Run) o plana (Glide) attorno all'arena. Quando esegue l'assalto con le fruste, para al ritmo preciso dei colpi. Quando rimane scoperto per 2 secondi al termine delle combo, scagliati su di lui con una combo completa equipaggiando 'Combo Plus' e il Keyblade Decisivo (che amplifica esponenzialmente i danni del colpo di grazia). Usa la Limit Form per curarti e renderti invulnerabile durante le sue fasi di berserk.",
    strategyCheese: "Metodo del Loop di Fenrir (Fenrir Loop): equipaggia il Keyblade 'Fenrir' e l'abilità 'Negative Combo' (disattivando tutti i Combo Plus). In questo modo ogni singolo attacco di Sora sarà direttamente un colpo di grazia aereo! Salta e premi attacco: Sora colpirà la Volontà Residua stordendola; tocca terra, risalta e colpisci di nuovo. Se mantieni un ritmo costante senza pause, il boss rimarrà perennemente stordito senza poter compiere una singola mossa fino alla morte!"
  },

  {
    id: "yozora",
    name: "Yozora",
    game: "Kingdom Hearts III Re Mind",
    location: "Shibuya (Tetto del Grattacielo 104)",
    difficulty: "Divina (SS+ - Il boss più tecnico della storia di Square Enix)",
    recommendedLevel: "Livello 99 in Modalità Critica, Statistiche forza/difesa oltre 80",
    recommendedGear: "Keyblade Ultima Weapon (per la Ultimate Form) e Oathkeeper / Oblivion; Elisir completi; Equipaggia abilità 'Withstand Combo' e 'Second Chance'.",
    loreSnippet: "Il misterioso protagonista di Verum Rex. Nel Mondo Finale incontra l'essenza di Sora affermando di aver ricevuto l'ordine esplicito di 'salvarlo', anche se il suo vero aspetto esteriore potrebbe non essere quello originale.",
    deadlyAttacks: [
      {
        name: "Furto del Keyblade (Keyblade Steal)",
        description: "Yozora ti attira con un raggio traente cremisi. Se ti cattura, ti strappa letteralmente il Keyblade dalle mani! Usando la tua arma contro di te, può scatenare le TUE stesse trasformazioni e magie mentre tu puoi solo scappare a mani nude!"
      },
      {
        name: "Sfere di Gravità e Raggi Laser",
        description: "Scaglia droni laser che creano una gabbia di fuoco sincronizzata mentre ti assale con la balestra energetica e la spada laser."
      },
      {
        name: "La Piramide Nera (DM - Disperazione Totale)",
        description: "Intorno al 50% di HP, Yozora oscura il cielo di Shibuya ed evoca una piramide di specchi che ti trascina al centro mentre un gigantesco robot Gigas ti spara missili e cloni spettrali ti tagliano a pezzi."
      },
      {
        name: "Furto del Kupo Coin",
        description: "Se muori e possiedi la moneta del Kupo (che ti farebbe resuscitare), Yozora la intercetta a mezz'aria, la consuma lui stesso e recupera un'intera barra di vita!"
      }
    ],
    strategyLegit: "Ogni singola animazione di Yozora ha una finestra di punizione (punish window) millimetrica. 1. Durante i suoi laser blu, fai guardia 3 volte e poi scatta in avanti per colpirlo; 2. Quando lancia il raggio rosso per rubarti la chiave, plana in cerchio a mezz'aria senza toccare terra finché il raggio non si estingue; 3. Durante la fase della Piramide Nera, plana sul perimetro esterno schivando le copie; 4. Usa la magia 'Ariel' (Link Sirena) durante i momenti caotici per diventare immune ai danni ed infliggere ingenti danni d'area. Se perdi contro di lui si attiva persino un filmato di game over speciale alternativo!",
    strategyCheese: "Non esiste una vera strategia di exploit totale come in KH2: la vittoria contro Yozora richiede lo studio meticoloso delle sue finestre di apertura, tempi di guardia impeccabili e gestione chirurgica degli intervalli di ricarica MP."
  },

  {
    id: "sephiroth-kh1",
    name: "Sephiroth (L'Angelo con un'Ala Sola)",
    game: "Kingdom Hearts Final Mix",
    location: "Colosseo del Monte Olimpo (Scontro di Platino)",
    difficulty: "Molto Alta (S)",
    recommendedLevel: "Livello 70+",
    recommendedGear: "Keyblade 'Ultima Weapon' o 'Cuor di Leone'; Abilità Second Chance, MP Rage, Superglide.",
    loreSnippet: "Il leggendario spadaccino di Final Fantasy VII che incarna l'oscurità latente nel cuore di Cloud Strife. Giunto nel mondo Disney per mettere alla prova la luce del prescelto con la sua colossale spada Masamune.",
    deadlyAttacks: [
      {
        name: "Sin Harvest (Cuore di un Angelo)",
        description: "Sephiroth si teletrasporta dall'altra parte dell'arena ed esclama 'Descend, Heartless Angel!'. Se la mossa non viene interrotta prima che finisca l'incantesimo, riduce istantaneamente i tuoi HP a 1 e prosciuga TUTTI i tuoi MP a ZERO!"
      },
      {
        name: "Pilastri di Fuoco Infernale",
        description: "Genera quattro colonne di fuoco rotanti che ti intrappolano al centro provocando danni continui."
      },
      {
        name: "Meteora Finale",
        description: "Fa cadere meteoriti incandescenti e crea una tempesta di energia cosmica attorno al campo di battaglia."
      }
    ],
    strategyLegit: "La regola d'oro assoluta contro Sephiroth in KH1 è INTERROMPERE a tutti i costi 'Sin Harvest': appena vedi che si teletrasporta lontano e vedi apparire un cerchio di buio sopra la tua testa, attiva subito Superglide, vola dritto verso di lui e colpiscilo con un fendente prima che completi la frase! Attiva costantemente l'incantesimo Aero per ridurre del 50% tutti i danni subiti dalla Masamune. Tieni Elisir sempre pronti.",
    strategyCheese: "Usa la 'Tassa di Colpo' con Strike Raid (Incrocio di Chiavi): durante l'animazione di lancio del Keyblade, Sora gode di frame di invincibilità completi che annullano tutti i colpi di Sephiroth."
  },

  {
    id: "sephiroth-kh2",
    name: "Sephiroth",
    game: "Kingdom Hearts II Final Mix",
    location: "Fortezza Oscura (Il Dirupo)",
    difficulty: "Alta (A+)",
    recommendedLevel: "Livello 70-80+",
    recommendedGear: "Keyblade Decisivo o Ultima Weapon; Abilità Berserk Charge disattivata, Glide e High Jump al massimo.",
    loreSnippet: "Riappare a Radiant Garden sfidando Cloud a un duello finale per il dominio della memoria. Sora si frappone per salvare l'amico dai suoi demoni interiori.",
    deadlyAttacks: [
      {
        name: "Heartless Angel",
        description: "Si solleva in cielo fluttuando ed evoca il raggio che porta i tuoi HP a 1 e gli MP a zero."
      },
      {
        name: "Fendente Rapido (Flash Cut)",
        description: "Comando di reazione istantaneo: compare la scritta 'Blocca' per una frazione di secondo. Se fallisci, ti scaglia in aria con una raffica letale."
      },
      {
        name: "Sfera d'Ombra e Sfere Oscure",
        description: "Materializza sfere oscure galleggianti che si scagliano contro di te a intervalli costanti."
      }
    ],
    strategyLegit: "Molto più gestibile rispetto alla versione di KH1 grazie alla magia 'Reflex' e alla mobilità di KH2. Quando si alza in volo per 'Heartless Angel', salta usando Doppio Salto (Aerial Dodge) e colpiscilo a mezz'aria prima che finisca la recitazione. Quando lancia le sfere oscure, attiva Reflex per farle esplodere istantaneamente contro di lui. Quando parte il duello di spade, premi triangolo col giusto tempismo per disorientarlo.",
    strategyCheese: "Equipaggia la Limit Form: ogni volta che esegui 'Sonic Rave' o 'Ars Arcanum', rigeneri salute ad ogni colpo e Sephiroth rimane stordito nel raggio d'azione."
  },

  {
    id: "mysterious-figure",
    name: "Figura Misteriosa (Giovane Xehanort)",
    game: "Kingdom Hearts Birth by Sleep Final Mix",
    location: "La Terra di Partenza (Rovine)",
    difficulty: "Estrema / Sadica (S+)",
    recommendedLevel: "Livello 55+ con Terra, Ventus o Aqua",
    recommendedGear: "Mazzo comandi composto SOLO da: 4 o 5 'Thunder Surge' (Slancio Tuono) e 3 o 4 'Curaga'. Rimuovi ogni altra abilità!",
    loreSnippet: "Il Giovane Xehanort proveniente dal passato, vestito con il mantello nero e armato di due lame eteree di pura luce blu. Viaggia attraverso il tempo guidato dalla volontà del suo sé futuro.",
    deadlyAttacks: [
      {
        name: "Cloni Multipli Illusori",
        description: "Crea quattro copie identiche di se stesso che ti caricano simultaneamente con spade laser e magie."
      },
      {
        name: "Riavvolgimento Temporale",
        description: "Se la sua barra vitale scende a zero mentre non sei abbastanza rapido, riavvolge il tempo recuperando 3 barre di salute!"
      },
      {
        name: "Meteore e Tornado Disarmante",
        description: "Genera un tornado gigante che se ti tocca ti disperde tutti i comandi nell'arena costringendoti a raccoglierli a mano."
      },
      {
        name: "Invisibilità Totale",
        description: "Diventa trasparente ed invisibile continuando ad attaccarti senza che tu possa agganciarlo col mirino."
      }
    ],
    strategyLegit: "Questo boss è tristemente famoso per essere punitivo oltre misura, specialmente con Terra (che non possiede i frame di invincibilità infiniti di Aqua e Ventus sulla schivata). La strategia definitiva conclamata dalla community mondiale: 1. Spamma la schivata rotolante (Dodge Roll / Cartwheel) senza sosta: le schivate di Aqua e Ventus sono invincibili per l'intera durata dell'animazione; 2. Attacca ESCLUSIVAMENTE con 'Thunder Surge' (Slancio Tuono), perché durante il balzo sei immune ai colpi e infliggi danni elettrici pesanti; 3. Non equipaggiare MAI comandi complessi o abilità come 'EXP Zero' o 'Leaf Bracer' che aumentano la sua aggressività da intelligenza artificiale.",
    strategyCheese: "Il metodo 'Thunder Surge Only' sopra descritto è già di fatto la tattica fondamentale per abbatterlo, trasformando uno scontro quasi impossibile in una danza ritmica calcolata."
  },

  {
    id: "data-org-xiii",
    name: "L'Organizzazione XIII Dati (Data Battles)",
    game: "Kingdom Hearts II Final Mix & KH3 Re Mind",
    location: "Caverna della Rimembranza (KH2FM) / Portale Giardino di Radiant Garden (KH3 Re Mind)",
    difficulty: "Master Class (Da A a S+)",
    recommendedLevel: "Livello 99",
    recommendedGear: "Equipaggiamenti specifici a seconda dell'elemento del boss (es. protezioni fuoco contro Axel, fulmine contro Larxene, ghiaccio contro Vexen).",
    loreSnippet: "Repliche digitali ad altissima fedeltà dei tredici membri originali e rinnovati dell'Organizzazione, dotate di routine di intelligenza artificiale aggressive e prive di pietà.",
    deadlyAttacks: [
      {
        name: "Roxas Dati (KH2FM)",
        description: "Duello ravvicinato a velocità supersonica con proiettili di luce e ruba-chiavi."
      },
      {
        name: "Marluxia Dati (KH2FM)",
        description: "Ti impone un contatore numerico sulla testa pari al tuo livello: ogni fendente subito riduce il contatore; quando tocca zero, muori istantaneamente!"
      },
      {
        name: "Xemnas Dati (KH3 Re Mind)",
        description: "Laser continui, gabbie di energia rossa e attacchi aerei combinati impossibili da bloccare senza guardia tripla."
      }
    ],
    strategyLegit: "Ogni membro richiede un approccio a puzzle: Roxas richiede di parare i colpi e vincere il Reaction Command 'Fine' per sottrargli i Keyblade; Marluxia si batte usando la magia 'Reflex' per distruggere i suoi vortici floreali e ripristinare il contatore col comando di reazione 'Restore'; Demyx richiede 'Wisdom Form' e magia Firaga per eliminare le 99 copie d'acqua entro 30 secondi; Axel richiede l'uso della magia 'Blizzaga' sul pavimento di lava infuocata per spegnere le fiamme.",
    strategyCheese: "Stitch e Peter Pan come invocazioni in KH2FM: Stitch ti ricarica infinitamente gli MP e devia i proiettili; Peter Pan rianima Sora e stordisce continuamente i boss a terra."
  },

  {
    id: "julius",
    name: "Julius",
    game: "Kingdom Hearts 3D: Dream Drop Distance",
    location: "Città di Mezzo (Quartiere delle Fogne)",
    difficulty: "Molto Alta (A+)",
    recommendedLevel: "Livello 50+",
    recommendedGear: "Mazzo comandi con 3x Balloonra, 2x Curaga; Spiriti con Second Chance, Once More e Combo Master attivi.",
    loreSnippet: "Il gigantesco mostro da laboratorio creato dal Dr. Frankenollie nel corto Disney del 1995 'Runaway Brain', apparso come abominio nelle viscere della Città di Mezzo onirica.",
    deadlyAttacks: [
      {
        name: "Scarica Elettrica Fulminante",
        description: "Si carica di elettricità statica e balza sul soffitto, piombando addosso a Sora con onde d'urto letali."
      },
      {
        name: "Morso e Schiacciata",
        description: "Prende Sora tra le fauci scuotendolo selvaggiamente e infliggendo lo status Veleno o Cecità."
      }
    ],
    strategyLegit: "Usa costantemente il Flowmotion sulle pareti per rimanere in volo quando Julius carica i suoi pugni elettrici. Appena atterra, lancia 'Balloonra': i palloncini rimangono a mezz'aria e quando il mostro si muove verso di te, esplodono a contatto causandogli danni devastanti e interrompendo le sue combo. Mantieni sempre attiva la barriera magica con Riku o la rotolata rapida con Sora.",
    strategyCheese: "Spam assoluto di Balloonra e Curaga: Julius è talmente grande che le hitbox delle bolle magiche si attivano tutte simultaneamente, svuotandogli barre intere di vita."
  }
];
