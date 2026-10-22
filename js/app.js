/**
 * KINGDOM HEARTS CHRONICLES - CONTROLLER PRINCIPALE
 * Gestisce navigazione, rendering dinamico, filtri, ricerca, modali, audio e tracker.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Stato Globale dell'App (Default su Home per proteggere dagli spoiler)
  const state = {
    currentTab: "home", // 'home', 'timeline', 'characters', 'games', 'keyblades', 'skills', 'unions', 'bestiary', 'bosses', 'orders', 'epilogues', 'lore', 'tracker'
    timelineFilter: "all",
    searchQuery: "",
    characterGame: "all",
    characterCategory: "all",
    characterSearch: "",
    bestiaryGame: "all",
    bestiaryCategory: "all",
    bestiarySearch: "",
    keybladeFilter: "all",
    keybladeSearch: "",
    skillTab: "survival",
    unionTab: "drive",
    selectedEra: null,
    selectedBoss: null,
    selectedCharacter: null,
    audioPlaying: false,
    quizStep: 0,
    quizAnswers: {}
  };

  // Mappa Metadati per Feedback Visivo e Badge
  const tabMeta = {
    home: { label: "Home Salotto", icon: "fa-house" },
    timeline: { label: "Cronologia (14 Ere)", icon: "fa-timeline" },
    characters: { label: "Glossario Personaggi", icon: "fa-users" },
    games: { label: "Guida ai Giochi", icon: "fa-gamepad" },
    keyblades: { label: "Forgia Keyblade", icon: "fa-key" },
    skills: { label: "Abilità & Magie", icon: "fa-wand-magic-sparkles" },
    unions: { label: "Fusioni & Unioni", icon: "fa-shield-halved" },
    bestiary: { label: "Bestiario Mondi", icon: "fa-dragon" },
    bosses: { label: "Boss Segreti", icon: "fa-skull" },
    orders: { label: "Ordini di Gioco", icon: "fa-compass" },
    epilogues: { label: "Epiloghi & Segreti", icon: "fa-film" },
    lore: { label: "Enciclopedia Lore", icon: "fa-book-journal-whills" },
    tracker: { label: "Salotto & Tracker", icon: "fa-star" }
  };

  let toastTimer = null;
  let isFirstLoad = true;

  function showPageToast(tabKey) {
    const toast = document.getElementById("kh-page-toast");
    const toastIcon = document.getElementById("kh-page-toast-icon");
    const toastText = document.getElementById("kh-page-toast-text");
    const badge = document.getElementById("current-section-badge");

    const meta = tabMeta[tabKey] || { label: tabKey, icon: "fa-sparkles" };
    if (badge) badge.innerText = meta.label;

    if (!toast) return;
    if (toastIcon) toastIcon.className = `fa-solid ${meta.icon} text-amber-400`;
    if (toastText) toastText.innerText = meta.label;

    toast.classList.add("toast-show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("toast-show");
    }, 1500);
  }

  // Inizializzazione Elementi Chiave
  initNavigation();
  initAudioControls();
  initSearch();
  initPaopuGenerator();
  initQuiz();
  renderCurrentTab();
  updateTrackerDashboard();

  // 1. Gestione Navigazione a Schede
  function updateNavButtons() {
    const navButtons = document.querySelectorAll("#left-dock-nav .dock-item[data-nav-tab]");
    navButtons.forEach(b => {
      const tab = b.getAttribute("data-nav-tab");
      if (tab === state.currentTab) {
        b.classList.add("active");
        b.classList.add("text-amber-400", "border-amber-400/30", "bg-amber-400/10");
        b.classList.remove("text-slate-300", "border-transparent");
      } else {
        b.classList.remove("active");
        b.classList.remove("text-amber-400", "border-amber-400/30", "bg-amber-400/10");
        b.classList.add("text-slate-300", "border-transparent");
      }
    });

    const mobileSelect = document.getElementById("mobile-nav-select");
    if (mobileSelect && mobileSelect.value !== state.currentTab) {
      mobileSelect.value = state.currentTab;
    }
  }

  function initNavigation() {
    const navButtons = document.querySelectorAll("#left-dock-nav .dock-item[data-nav-tab]");
    const headerLogoBtn = document.getElementById("header-logo-btn");
    const mobileSelect = document.getElementById("mobile-nav-select");
    const dockNav = document.getElementById("left-dock-nav") || document.getElementById("right-dock-nav");
    const dockToggleBtn = document.getElementById("dock-toggle-btn");
    const dockPancakeIcon = document.getElementById("dock-pancake-icon");
    const mobilePancakeBtn = document.getElementById("mobile-pancake-btn");
    const dockBackdrop = document.getElementById("dock-backdrop");

    function isMenuOpen() {
      if (!dockNav) return false;
      return dockNav.classList.contains("expanded") || dockNav.classList.contains("mobile-open");
    }

    function closeMenu() {
      if (dockNav) {
        dockNav.classList.remove("mobile-open", "expanded");
      }
      if (dockPancakeIcon) {
        dockPancakeIcon.className = "fa-solid fa-bars text-xs";
      }
      if (dockBackdrop) {
        dockBackdrop.classList.add("hidden");
      }
    }

    function openMenu() {
      if (!dockNav) return;
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        dockNav.classList.add("mobile-open");
      } else {
        dockNav.classList.add("expanded");
      }
      if (dockPancakeIcon) {
        dockPancakeIcon.className = "fa-solid fa-xmark text-xs";
      }
      if (dockBackdrop) {
        dockBackdrop.classList.remove("hidden");
      }
    }

    function toggleMenu() {
      if (isMenuOpen()) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    // Toggle Espansione / Chiusura Dock da Pulsante Interno (il Tasto X / Bars)
    if (dockToggleBtn) {
      dockToggleBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
        window.khAudio.playUiSound("click");
      });
    }

    // Toggle Mobile Drawer dal pulsante pancake in alto a sinistra
    if (mobilePancakeBtn) {
      mobilePancakeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
        window.khAudio.playUiSound("click");
      });
    }

    // Click sul Backdrop per chiudere il menu
    if (dockBackdrop) {
      dockBackdrop.addEventListener("click", (e) => {
        e.preventDefault();
        closeMenu();
      });
    }

    // Tasto ESC per chiudere il menu da tastiera
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isMenuOpen()) {
        closeMenu();
      }
    });

    // Click sul Logo Header: torna alla Home pulita senza bordi o sfondi attivi
    if (headerLogoBtn) {
      headerLogoBtn.addEventListener("click", (e) => {
        e.preventDefault();
        state.currentTab = "home";
        closeMenu();
        window.khAudio.playUiSound("click");
        renderCurrentTab();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    navButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetTab = btn.getAttribute("data-nav-tab");
        state.currentTab = targetTab;
        closeMenu();
        window.khAudio.playUiSound("click");
        renderCurrentTab();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });

    // Mobile nav select
    if (mobileSelect) {
      mobileSelect.addEventListener("change", (e) => {
        state.currentTab = e.target.value;
        closeMenu();
        window.khAudio.playUiSound("click");
        renderCurrentTab();
      });
    }

    updateNavButtons();

    // Navigazione Rapida con Card Portale (Home & Guide)
    document.querySelectorAll("[data-jump-tab]").forEach(el => {
      el.addEventListener("click", () => {
        const target = el.getAttribute("data-jump-tab");
        if (target) {
          state.currentTab = target;
          renderCurrentTab();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    });

    // Refresh Frase del Salotto su Home
    const quoteRefreshBtn = document.getElementById("home-quote-refresh-btn");
    if (quoteRefreshBtn) {
      quoteRefreshBtn.addEventListener("click", () => {
        if (window.khAudio) window.khAudio.playUiSound("star");
        renderHome();
      });
    }

    // Sub-Tabs Orizzontali Gioco Personaggi
    document.querySelectorAll("[data-char-game]").forEach(btn => {
      btn.addEventListener("click", () => {
        const gameId = btn.getAttribute("data-char-game");
        state.characterGame = gameId;

        document.querySelectorAll("[data-char-game]").forEach(b => {
          b.classList.remove("active", "border-amber-500/30", "bg-amber-500/10", "text-amber-300");
          b.classList.add("border-slate-700/80", "bg-slate-900/60", "text-slate-300");
        });
        btn.classList.add("active", "border-amber-500/30", "bg-amber-500/10", "text-amber-300");
        btn.classList.remove("border-slate-700/80", "bg-slate-900/60", "text-slate-300");

        window.khAudio.playUiSound("click");
        renderCharacters();
      });
    });

    // Filtri Categoria Personaggi (Pills)
    document.querySelectorAll("[data-char-cat]").forEach(btn => {
      btn.addEventListener("click", () => {
        const cat = btn.getAttribute("data-char-cat");
        state.characterCategory = cat;

        document.querySelectorAll("[data-char-cat]").forEach(b => {
          b.classList.remove("bg-amber-500/20", "text-amber-300", "border-amber-500/40");
          b.classList.add("bg-slate-900", "border-slate-700", "text-slate-300");
        });
        btn.classList.add("bg-amber-500/20", "text-amber-300", "border-amber-500/40");
        btn.classList.remove("bg-slate-900", "border-slate-700", "text-slate-300");

        window.khAudio.playUiSound("click");
        renderCharacters();
      });
    });

    // Input di Ricerca Personaggi
    const charSearch = document.getElementById("char-search-input");
    if (charSearch) {
      charSearch.addEventListener("input", (e) => {
        state.characterSearch = e.target.value;
        renderCharacters();
      });
    }

    // Chiusura Modale Personaggio
    const charModal = document.getElementById("character-detail-modal");
    const closeCharBtn = document.getElementById("close-character-modal");
    if (closeCharBtn && charModal) {
      closeCharBtn.addEventListener("click", () => {
        charModal.classList.add("hidden");
      });
      charModal.addEventListener("click", (e) => {
        if (e.target === charModal) charModal.classList.add("hidden");
      });
    }

    // Sub-Tabs Orizzontali Gioco Bestiario
    document.querySelectorAll("[data-bestiary-game]").forEach(btn => {
      btn.addEventListener("click", () => {
        const gameId = btn.getAttribute("data-bestiary-game");
        state.bestiaryGame = gameId;

        document.querySelectorAll("[data-bestiary-game]").forEach(b => {
          b.classList.remove("active", "border-amber-500/30", "bg-amber-500/10", "text-amber-300");
          b.classList.add("border-slate-700/80", "bg-slate-900/60", "text-slate-300");
        });
        btn.classList.add("active", "border-amber-500/30", "bg-amber-500/10", "text-amber-300");
        btn.classList.remove("border-slate-700/80", "bg-slate-900/60", "text-slate-300");

        window.khAudio.playUiSound("click");
        renderBestiary();
      });
    });

    // Filtri Categoria Bestiario (Pills)
    document.querySelectorAll("[data-bestiary-cat]").forEach(btn => {
      btn.addEventListener("click", () => {
        const cat = btn.getAttribute("data-bestiary-cat");
        state.bestiaryCategory = cat;

        document.querySelectorAll("[data-bestiary-cat]").forEach(b => {
          b.classList.remove("bg-amber-500/20", "text-amber-300", "border-amber-500/40");
          b.classList.add("bg-slate-900", "border-slate-700", "text-slate-300");
        });
        btn.classList.add("bg-amber-500/20", "text-amber-300", "border-amber-500/40");
        btn.classList.remove("bg-slate-900", "border-slate-700", "text-slate-300");

        window.khAudio.playUiSound("click");
        renderBestiary();
      });
    });

    // Input di Ricerca Bestiario
    const bSearch = document.getElementById("bestiary-search-input");
    if (bSearch) {
      bSearch.addEventListener("input", (e) => {
        state.bestiarySearch = e.target.value;
        renderBestiary();
      });
    }

    // Filtri Gioco Keyblade
    document.querySelectorAll("[data-keyblade-filter]").forEach(btn => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-keyblade-filter");
        state.keybladeFilter = filter;

        document.querySelectorAll("[data-keyblade-filter]").forEach(b => {
          b.classList.remove("active", "bg-amber-500/20", "text-amber-300", "border-amber-500/40");
          b.classList.add("bg-slate-900", "border-slate-700", "text-slate-300");
        });
        btn.classList.add("active", "bg-amber-500/20", "text-amber-300", "border-amber-500/40");
        btn.classList.remove("bg-slate-900", "border-slate-700", "text-slate-300");

        window.khAudio.playUiSound("click");
        renderKeyblades();
      });
    });

    // Input di Ricerca Keyblade
    const kbSearch = document.getElementById("keyblade-search-input");
    if (kbSearch) {
      kbSearch.addEventListener("input", (e) => {
        state.keybladeSearch = e.target.value;
        renderKeyblades();
      });
    }

    // Sub-Tabs Abilità
    document.querySelectorAll("[data-skill-tab]").forEach(btn => {
      btn.addEventListener("click", () => {
        const tab = btn.getAttribute("data-skill-tab");
        state.skillTab = tab;

        document.querySelectorAll("[data-skill-tab]").forEach(b => {
          b.classList.remove("active", "border-amber-500/30", "bg-amber-500/10", "text-amber-300");
          b.classList.add("border-slate-700/80", "bg-slate-900/60", "text-slate-300");
        });
        btn.classList.add("active", "border-amber-500/30", "bg-amber-500/10", "text-amber-300");
        btn.classList.remove("border-slate-700/80", "bg-slate-900/60", "text-slate-300");

        window.khAudio.playUiSound("click");
        renderSkills();
      });
    });

    // Sub-Tabs Unioni & Fusioni
    document.querySelectorAll("[data-union-tab]").forEach(btn => {
      btn.addEventListener("click", () => {
        const tab = btn.getAttribute("data-union-tab");
        state.unionTab = tab;

        document.querySelectorAll("[data-union-tab]").forEach(b => {
          b.classList.remove("active", "border-amber-500/30", "bg-amber-500/10", "text-amber-300");
          b.classList.add("border-slate-700/80", "bg-slate-900/60", "text-slate-300");
        });
        btn.classList.add("active", "border-amber-500/30", "bg-amber-500/10", "text-amber-300");
        btn.classList.remove("border-slate-700/80", "bg-slate-900/60", "text-slate-300");

        window.khAudio.playUiSound("click");
        renderUnions();
      });
    });
  }

  // 2. Rendering delle Schede
  function renderCurrentTab() {
    updateNavButtons();

    // Nascondi tutte le sezioni
    const tabs = ["home", "timeline", "characters", "games", "keyblades", "skills", "unions", "bestiary", "bosses", "orders", "epilogues", "lore", "tracker"];
    tabs.forEach(t => {
      const el = document.getElementById(`tab-${t}`);
      if (el) {
        el.classList.add("hidden");
        el.classList.remove("tab-pane-active");
      }
    });

    // Mostra la sezione corrente
    const activeEl = document.getElementById(`tab-${state.currentTab}`);
    if (activeEl) {
      activeEl.classList.remove("hidden");
      void activeEl.offsetWidth; // trigger reflow per animazione CSS
      activeEl.classList.add("tab-pane-active");
    }

    // Feedback visivo (toast) e sonoro (chime melodico) al cambio pagina
    showPageToast(state.currentTab);
    if (!isFirstLoad) {
      if (window.khAudio) window.khAudio.playUiSound("page");
    }
    isFirstLoad = false;

    // Esegui render specifico
    if (state.currentTab === "home") {
      renderHome();
    } else if (state.currentTab === "timeline") {
      renderTimeline();
    } else if (state.currentTab === "characters") {
      renderCharacters();
    } else if (state.currentTab === "games") {
      renderGames();
    } else if (state.currentTab === "keyblades") {
      renderKeyblades();
    } else if (state.currentTab === "skills") {
      renderSkills();
    } else if (state.currentTab === "unions") {
      renderUnions();
    } else if (state.currentTab === "bestiary") {
      renderBestiary();
    } else if (state.currentTab === "bosses") {
      renderBosses();
    } else if (state.currentTab === "orders") {
      renderOrders();
    } else if (state.currentTab === "epilogues") {
      renderEpilogues();
    } else if (state.currentTab === "lore") {
      renderLore();
    } else if (state.currentTab === "tracker") {
      renderTracker();
    }
  }

  // 2.1 Render Home Salotto (Citazioni dinamiche e status)
  function renderHome() {
    const quotes = window.KH_QUOTES_DATA || [];
    const qEl = document.getElementById("home-quote-text");
    const aEl = document.getElementById("home-quote-author");
    if (qEl && aEl && quotes.length > 0) {
      const rand = quotes[Math.floor(Math.random() * quotes.length)];
      qEl.innerText = `"${rand.quote || rand.text}"`;
      aEl.innerText = `— ${rand.speaker || rand.author}`;
    }
  }

  // 3. Render Cronologia (14 Ere)
  function renderTimeline() {
    const container = document.getElementById("timeline-container");
    if (!container) return;

    let eras = window.KH_TIMELINE_DATA || [];

    // Filtra per ricerca se presente
    if (state.searchQuery.trim() !== "") {
      const q = state.searchQuery.toLowerCase();
      eras = eras.filter(era => 
        era.title.toLowerCase().includes(q) ||
        era.summary.toLowerCase().includes(q) ||
        era.tagline.toLowerCase().includes(q) ||
        era.originalGames.some(g => g.toLowerCase().includes(q)) ||
        era.characters.some(c => c.name.toLowerCase().includes(q))
      );
    }

    if (eras.length === 0) {
      container.innerHTML = `
        <div class="text-center py-16 bg-slate-900/40 rounded-2xl border border-amber-500/20 p-8">
          <p class="text-amber-200 font-cinzel text-xl mb-2">Nessun capitolo trovato per "${state.searchQuery}"</p>
          <p class="text-slate-400 text-sm">Prova a cercare termini come "Xehanort", "Roxas", "Terra", "Keyblade" o "Kingdom Hearts".</p>
          <button id="clear-search-btn" class="mt-4 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 rounded-lg text-sm border border-amber-500/40 transition">Reimposta Ricerca</button>
        </div>
      `;
      const clr = document.getElementById("clear-search-btn");
      if (clr) clr.addEventListener("click", () => {
        state.searchQuery = "";
        const searchInput = document.getElementById("global-search-input");
        if (searchInput) searchInput.value = "";
        renderTimeline();
      });
      return;
    }

    container.innerHTML = eras.map((era, index) => {
      const isRead = window.khTracker.isEraRead(era.id);
      return `
        <div class="relative pl-8 md:pl-12 pb-12 group" id="era-card-${era.id}">
          <!-- Icona Snodo Cronologia -->
          <div class="absolute -left-[14px] top-1.5 w-7 h-7 rounded-full bg-slate-900 border-2 ${isRead ? 'border-amber-400 text-amber-400' : 'border-amber-500/60 text-amber-500/70'} flex items-center justify-center text-xs font-bold transition group-hover:scale-110 group-hover:border-amber-300 shadow-md">
            ${index + 1}
          </div>

          <div class="kh-card rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <!-- Badge Superiore -->
            <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div class="flex items-center gap-2">
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  ${era.number}
                </span>
                <span class="text-xs text-slate-400">
                  <i class="fa-regular fa-clock mr-1"></i> ${era.timeframe}
                </span>
              </div>
              <div class="flex items-center gap-2">
                <button data-mark-read="${era.id}" class="text-xs px-2.5 py-1 rounded-md border ${isRead ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' : 'border-slate-700 bg-slate-800 text-slate-400 hover:text-amber-300'} transition flex items-center gap-1">
                  <i class="fa-solid ${isRead ? 'fa-check' : 'fa-circle-check'}"></i>
                  ${isRead ? 'Letto' : 'Segna come letto'}
                </button>
              </div>
            </div>

            <!-- Artwork Ufficiale dell'Era (Atmosfera Calda & Non Invasiva) -->
            ${era.image ? `
              <div class="relative w-full h-44 sm:h-52 md:h-56 rounded-xl overflow-hidden mb-5 border border-amber-500/25 group/art shadow-lg bg-slate-950">
                <img 
                  src="${era.image}" 
                  alt="${era.title}" 
                  class="w-full h-full object-cover object-center group-hover/art:scale-105 transition-transform duration-500 filter brightness-90 group-hover/art:brightness-100"
                  loading="lazy"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                <div class="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-amber-200/90">
                  <span class="px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-md border border-amber-500/30 font-cinzel font-semibold">
                    <i class="fa-solid fa-paintbrush mr-1 text-amber-400"></i> Artwork Ufficiale di Tetsuya Nomura
                  </span>
                  <span class="text-slate-400 bg-slate-950/70 backdrop-blur-md px-2 py-0.5 rounded border border-slate-800 hidden sm:inline-block">
                    ${era.originalGames[0]}
                  </span>
                </div>
              </div>
            ` : ''}

            <!-- Titolo Era -->
            <h3 class="text-2xl md:text-3xl font-bold font-cinzel text-amber-100 mb-2 group-hover:text-amber-300 transition">
              ${era.title}
            </h3>

            <!-- Citazione Tagline -->
            <p class="text-sm italic text-amber-200/80 mb-4 border-l-2 border-amber-500/40 pl-3 py-0.5">
              ${era.tagline}
            </p>

            <!-- Sintesi -->
            <p class="text-slate-300 text-sm md:text-base leading-relaxed mb-5">
              ${era.summary}
            </p>

            <!-- Giochi Trattati -->
            <div class="mb-5 flex flex-wrap items-center gap-2">
              <span class="text-xs text-slate-400 font-medium">Giochi di riferimento:</span>
              ${era.originalGames.map(g => `
                <span class="text-xs px-2.5 py-0.5 rounded bg-slate-800/80 text-amber-300/90 border border-slate-700">
                  ${g}
                </span>
              `).join("")}
            </div>

            <!-- Protagonisti Chiave (Pillole) -->
            <div class="mb-6">
              <div class="text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">Protagonisti Chiave:</div>
              <div class="flex flex-wrap gap-2">
                ${era.characters.map(c => `
                  <span class="text-xs px-2.5 py-1 rounded-lg bg-slate-900/60 border border-amber-500/15 text-slate-200 flex items-center gap-1.5" title="${c.role}">
                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <strong class="font-medium text-amber-100">${c.name}</strong>
                    <span class="text-slate-400 text-[11px] hidden sm:inline">(${c.role.split(',')[0]})</span>
                  </span>
                `).join("")}
              </div>
            </div>

            <!-- Pulsante Dettaglio Approfondito -->
            <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span class="text-xs text-slate-400">
                <i class="fa-solid fa-book-open mr-1 text-amber-400"></i> ${era.acts.length} Atti narrativi approfonditi
              </span>
              <button data-open-era="${era.id}" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition flex items-center gap-2">
                <span>Leggi Tutta la Storia</span>
                <i class="fa-solid fa-arrow-right text-xs"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");

    // Event listener per "Segna come letto"
    container.querySelectorAll("[data-mark-read]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const eraId = btn.getAttribute("data-mark-read");
        window.khTracker.markEraRead(eraId);
        window.khAudio.playUiSound("star");
        renderTimeline();
        updateTrackerDashboard();
      });
    });

    // Event listener per modale dettagli era
    container.querySelectorAll("[data-open-era]").forEach(btn => {
      btn.addEventListener("click", () => {
        const eraId = btn.getAttribute("data-open-era");
        openEraModal(eraId);
      });
    });
  }

  // 4. Modale di Approfondimento Capitolo / Era
  function openEraModal(eraId) {
    const era = (window.KH_TIMELINE_DATA || []).find(e => e.id === eraId);
    if (!era) return;

    window.khTracker.markEraRead(era.id);
    updateTrackerDashboard();
    window.khAudio.playUiSound("click");

    const modal = document.getElementById("era-detail-modal");
    const content = document.getElementById("era-modal-content");
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="space-y-6">
        <!-- Header Modale con Banner Artwork -->
        ${era.image ? `
          <div class="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl mb-4 bg-slate-950">
            <img src="${era.image}" alt="${era.title}" class="w-full h-full object-cover object-center filter brightness-90">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-amber-200">
              <span class="bg-slate-950/85 px-2.5 py-1 rounded-md border border-amber-500/30 font-cinzel font-semibold">
                ${era.number} — ${era.timeframe}
              </span>
              <span class="bg-slate-950/85 px-2.5 py-1 rounded-md border border-slate-700 text-slate-300">
                <i class="fa-solid fa-paintbrush mr-1 text-amber-400"></i> Artwork Ufficiale
              </span>
            </div>
          </div>
        ` : ''}

        <!-- Intestazione Testo -->
        <div class="border-b border-amber-500/20 pb-5">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 font-cinzel">
              ${era.number}
            </span>
            <span class="text-xs text-slate-400">
              <i class="fa-regular fa-clock mr-1"></i> ${era.timeframe}
            </span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold font-cinzel text-amber-100">
            ${era.title}
          </h2>
          <p class="text-sm italic text-amber-300/90 mt-2 pl-3 border-l-2 border-amber-400">
            ${era.tagline}
          </p>
        </div>

        <!-- Ambientazione e Atmosfera -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
          <div>
            <div class="text-xs uppercase text-amber-400 font-bold mb-1">Ambientazione Principale</div>
            <div class="text-sm text-slate-200">${era.setting}</div>
          </div>
          <div>
            <div class="text-xs uppercase text-amber-400 font-bold mb-1">Tono e Atmosfera</div>
            <div class="text-sm text-slate-200">${era.atmosphere}</div>
          </div>
        </div>

        <!-- Atti della Narrazione -->
        <div class="space-y-6 pt-2">
          <h3 class="text-xl font-bold font-cinzel text-amber-300 flex items-center gap-2">
            <i class="fa-solid fa-scroll text-amber-400"></i>
            La Cronaca Dettagliata degli Eventi
          </h3>

          ${era.acts.map((act, i) => `
            <div class="bg-slate-900/50 rounded-xl p-5 border border-amber-500/15 space-y-3">
              <h4 class="text-lg font-bold text-amber-100 flex items-center gap-2 font-cinzel">
                <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center text-xs font-bold border border-amber-500/30">
                  ${i + 1}
                </span>
                ${act.title}
              </h4>
              <div class="text-slate-300 text-sm md:text-base leading-relaxed whitespace-pre-line space-y-2">
                ${act.text}
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Focus di Lore e Curiosità -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
          <div class="bg-amber-950/20 border border-amber-500/30 rounded-xl p-4">
            <div class="text-xs uppercase font-bold text-amber-300 mb-1 flex items-center gap-1.5">
              <i class="fa-solid fa-eye text-amber-400"></i> Regola di Lore Fondamentale
            </div>
            <p class="text-xs md:text-sm text-amber-100/90 leading-relaxed">${era.loreFocus}</p>
          </div>
          <div class="bg-sky-950/20 border border-sky-500/30 rounded-xl p-4">
            <div class="text-xs uppercase font-bold text-sky-300 mb-1 flex items-center gap-1.5">
              <i class="fa-solid fa-sparkles text-sky-400"></i> Segreto e Connessione Futura
            </div>
            <p class="text-xs md:text-sm text-sky-100/90 leading-relaxed">${era.secretsAndDetails}</p>
          </div>
        </div>

        <!-- Personaggi Coinvolti -->
        <div class="pt-4 border-t border-slate-800">
          <h4 class="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Dossier Personaggi dell'Era</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${era.characters.map(c => `
              <div class="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex flex-col">
                <span class="font-bold text-amber-200 text-sm">${c.name}</span>
                <span class="text-xs text-slate-400 mt-1">${c.role}</span>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  // Chiusura Modale
  const closeModalBtn = document.getElementById("close-era-modal");
  const modalOverlay = document.getElementById("era-detail-modal");
  if (closeModalBtn && modalOverlay) {
    const closeModal = () => {
      modalOverlay.classList.add("hidden");
      document.body.style.overflow = "auto";
      window.khAudio.playUiSound("click");
    };
    closeModalBtn.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modalOverlay.classList.contains("hidden")) {
        closeModal();
      }
    });
  }

  // Chiusura Modale Personaggio
  const closeCharModalBtn = document.getElementById("close-character-modal");
  const charModalOverlay = document.getElementById("character-detail-modal");
  if (closeCharModalBtn && charModalOverlay) {
    const closeCharModal = () => {
      charModalOverlay.classList.add("hidden");
      document.body.style.overflow = "auto";
      window.khAudio.playUiSound("click");
    };
    closeCharModalBtn.addEventListener("click", closeCharModal);
    charModalOverlay.addEventListener("click", (e) => {
      if (e.target === charModalOverlay) closeCharModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !charModalOverlay.classList.contains("hidden")) {
        closeCharModal();
      }
    });
  }

  // 4b. Render Glossario Personaggi
  function renderCharacters() {
    const container = document.getElementById("characters-container");
    if (!container) return;

    let chars = window.KH_CHARACTERS_DATA || [];

    // Filtra per gioco
    if (state.characterGame !== "all") {
      chars = chars.filter(c => c.games && c.games.includes(state.characterGame));
    }

    // Filtra per categoria/ruolo
    if (state.characterCategory !== "all") {
      chars = chars.filter(c => c.category === state.characterCategory);
    }

    // Filtra per ricerca
    if (state.characterSearch.trim() !== "") {
      const q = state.characterSearch.toLowerCase();
      chars = chars.filter(c => 
        c.name.toLowerCase().includes(q) ||
        c.title.toLowerCase().includes(q) ||
        c.origin.toLowerCase().includes(q) ||
        c.weapon.toLowerCase().includes(q) ||
        c.bio.toLowerCase().includes(q) ||
        c.quote.toLowerCase().includes(q) ||
        (c.voiceActors && (c.voiceActors.en.toLowerCase().includes(q) || c.voiceActors.jp.toLowerCase().includes(q)))
      );
    }

    if (chars.length === 0) {
      container.innerHTML = `
        <div class="col-span-full text-center py-16 bg-slate-900/40 rounded-2xl border border-amber-500/20 p-8">
          <p class="text-amber-200 font-cinzel text-xl mb-2">Nessun personaggio trovato per "${state.characterSearch}"</p>
          <p class="text-slate-400 text-sm">Prova a cambiare filtro di gioco, fazione o cerca un altro eroe/antagonista.</p>
          <button id="clear-char-search" class="mt-4 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 rounded-lg text-sm border border-amber-500/40 transition">Reimposta Filtri</button>
        </div>
      `;
      const clr = document.getElementById("clear-char-search");
      if (clr) {
        clr.addEventListener("click", () => {
          state.characterSearch = "";
          state.characterGame = "all";
          state.characterCategory = "all";
          const input = document.getElementById("char-search-input");
          if (input) input.value = "";
          document.querySelectorAll("[data-char-game]").forEach(b => {
            if (b.getAttribute("data-char-game") === "all") {
              b.classList.add("active", "border-amber-500/30", "bg-amber-500/10", "text-amber-300");
              b.classList.remove("border-slate-700/80", "bg-slate-900/60", "text-slate-300");
            } else {
              b.classList.remove("active", "border-amber-500/30", "bg-amber-500/10", "text-amber-300");
              b.classList.add("border-slate-700/80", "bg-slate-900/60", "text-slate-300");
            }
          });
          document.querySelectorAll("[data-char-cat]").forEach(b => {
            if (b.getAttribute("data-char-cat") === "all") {
              b.classList.add("bg-amber-500/20", "text-amber-300", "border-amber-500/40");
              b.classList.remove("bg-slate-900", "border-slate-700", "text-slate-300");
            } else {
              b.classList.remove("bg-amber-500/20", "text-amber-300", "border-amber-500/40");
              b.classList.add("bg-slate-900", "border-slate-700", "text-slate-300");
            }
          });
          renderCharacters();
        });
      }
      return;
    }

    container.innerHTML = chars.map(c => `
      <div class="char-card kh-card rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:border-amber-500/50 transition-all duration-300 group">
        <div>
          <!-- Vetrina Artwork Render Ufficiale -->
          <div class="char-art-frame h-56 w-full mb-4">
            <img 
              src="${c.image}" 
              alt="${c.name}" 
              class="max-h-52 w-auto object-contain pointer-events-none"
              loading="lazy"
            >
            <div class="absolute top-2.5 left-2.5">
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30">
                ${c.categoryLabel}
              </span>
            </div>
            <div class="absolute bottom-2.5 right-2.5">
              <span class="px-2 py-0.5 rounded text-[10px] bg-slate-900/90 text-slate-300 border border-slate-700/80">
                ${c.primaryGame}
              </span>
            </div>
          </div>

          <!-- Nomi & Titolo -->
          <div>
            <div class="flex items-center justify-between">
              <h3 class="text-xl md:text-2xl font-bold font-cinzel text-amber-100 group-hover:text-amber-300 transition">
                ${c.name}
              </h3>
              <span class="text-xs text-slate-400 font-sans">${c.japaneseName.split(' ')[0]}</span>
            </div>
            <p class="text-xs text-amber-300/80 font-medium mt-0.5">${c.title}</p>
          </div>

          <!-- Arma & Mondo d'Origine -->
          <div class="mt-3 space-y-1.5 text-xs text-slate-300 border-t border-slate-800/80 pt-3">
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-earth-americas text-sky-400 w-4 text-center"></i>
              <span class="text-slate-400">Origine:</span>
              <strong class="text-slate-200">${c.origin}</strong>
            </div>
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-key text-amber-400 w-4 text-center"></i>
              <span class="text-slate-400">Arma:</span>
              <strong class="text-amber-200/90 truncate">${c.weapon}</strong>
            </div>
          </div>

          <!-- Citazione Iconica -->
          <p class="text-xs italic text-slate-400 border-l-2 border-amber-500/40 pl-2.5 my-3 line-clamp-2">
            ${c.quote}
          </p>

          <!-- Bio breve -->
          <p class="text-xs text-slate-300 leading-relaxed line-clamp-3">
            ${c.bio.split('\n\n')[0]}
          </p>
        </div>

        <!-- Pulsante Dettaglio -->
        <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between">
          <div class="text-[11px] text-slate-400 flex items-center gap-1">
            <i class="fa-solid fa-link text-amber-400"></i> ${c.keyBonds.length} Legami del Cuore
          </div>
          <button data-open-char="${c.id}" class="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500/20 to-amber-600/20 hover:from-amber-500 hover:to-amber-600 text-amber-300 hover:text-slate-950 font-semibold text-xs border border-amber-500/40 hover:border-transparent transition flex items-center gap-1.5 shadow">
            <span>Scheda Completa</span>
            <i class="fa-solid fa-chevron-right text-[10px]"></i>
          </button>
        </div>
      </div>
    `).join("");

    // Event listener per aprire la modale
    container.querySelectorAll("[data-open-char]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-open-char");
        openCharacterModal(id);
      });
    });
  }

  // Modale Dettaglio Personaggio
  function openCharacterModal(charId) {
    const c = (window.KH_CHARACTERS_DATA || []).find(item => item.id === charId);
    if (!c) return;

    window.khAudio.playUiSound("click");

    const modal = document.getElementById("character-detail-modal");
    const content = document.getElementById("character-modal-content");
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="space-y-6">
        
        <!-- Header con Render & Dati Essenziali -->
        <div class="flex flex-col md:flex-row items-center md:items-start gap-6 border-b border-amber-500/20 pb-6">
          <div class="char-art-frame w-48 h-64 shrink-0 bg-slate-950 border border-amber-500/30">
            <img src="${c.image}" alt="${c.name}" class="max-h-56 w-auto object-contain">
          </div>

          <div class="flex-1 space-y-3 text-center md:text-left">
            <div class="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40 font-cinzel">
                ${c.categoryLabel}
              </span>
              <span class="px-2.5 py-1 rounded-md text-xs bg-slate-900 border border-slate-700 text-slate-300">
                Debutto: ${c.primaryGame}
              </span>
            </div>

            <div>
              <h2 class="text-3xl md:text-4xl font-bold font-cinzel text-amber-100">${c.name}</h2>
              <span class="text-xs text-amber-300/80 font-sans block mt-0.5">${c.japaneseName} — ${c.title}</span>
            </div>

            <p class="text-sm italic text-amber-200/90 border-l-2 border-amber-400 pl-3 py-1 text-left">
              ${c.quote}
            </p>

            <!-- Specifiche Tecniche & Doppiatori -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 text-left pt-2">
              <div class="bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                <span class="text-slate-400 block text-[10px] uppercase">Mondo d'Origine:</span>
                <strong class="text-amber-200">${c.origin}</strong>
              </div>
              <div class="bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                <span class="text-slate-400 block text-[10px] uppercase">Arma / Keyblade:</span>
                <strong class="text-amber-200 truncate block">${c.weapon}</strong>
              </div>
              <div class="bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                <span class="text-slate-400 block text-[10px] uppercase">Doppiatore Inglese:</span>
                <strong class="text-slate-200">${c.voiceActors ? c.voiceActors.en : 'N/A'}</strong>
              </div>
              <div class="bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                <span class="text-slate-400 block text-[10px] uppercase">Doppiatore Giapponese:</span>
                <strong class="text-slate-200">${c.voiceActors ? c.voiceActors.jp : 'N/A'}</strong>
              </div>
            </div>
          </div>
        </div>

        <!-- Biografia Approfondita -->
        <div>
          <h4 class="text-sm uppercase tracking-wider text-amber-400 font-bold mb-3 flex items-center gap-2">
            <i class="fa-solid fa-book-open"></i> Biografia Completa & Ruolo nella Saga
          </h4>
          <div class="text-slate-300 text-sm md:text-base leading-relaxed space-y-3 bg-slate-900/40 p-4 md:p-6 rounded-2xl border border-slate-800">
            ${c.bio.split('\n\n').map(p => `<p class="whitespace-pre-line">${p}</p>`).join("")}
          </div>
        </div>

        <!-- Legami del Cuore (Connessioni Personaggi) -->
        <div>
          <h4 class="text-sm uppercase tracking-wider text-rose-400 font-bold mb-3 flex items-center gap-2">
            <i class="fa-solid fa-heart"></i> Legami del Cuore & Relazioni Chiave
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${c.keyBonds.map(b => `
              <div class="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-rose-400"></span>
                  <strong class="text-amber-200 text-sm">${b.name}</strong>
                </div>
                <p class="text-xs text-slate-300">${b.relation}</p>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Curiosità & Retroscena di Tetsuya Nomura -->
        ${c.trivia ? `
          <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 text-xs md:text-sm text-amber-200 flex items-start gap-2.5">
            <i class="fa-solid fa-lightbulb text-amber-400 text-sm mt-0.5 shrink-0"></i>
            <div><strong class="font-bold text-amber-300">Curiosità di Nomura:</strong> ${c.trivia}</div>
          </div>
        ` : ''}

      </div>
    `;

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  // 5. Render Guida ai Giochi
  function renderGames() {
    const container = document.getElementById("games-container");
    if (!container) return;

    const games = window.KH_GAMES_DATA || [];
    container.innerHTML = games.map(game => {
      const isCompleted = window.khTracker.isGameCompleted(game.id);
      return `
        <div class="kh-card rounded-2xl p-6 md:p-8 space-y-5">
          <!-- Top Bar con Badge e Checkbox -->
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                ${game.coverBadge}
              </span>
              <span class="text-xs text-slate-400">Anno d'uscita: ${game.originalYear}</span>
            </div>
            <div>
              <button data-toggle-game="${game.id}" class="px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition ${isCompleted ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-amber-300'}">
                <i class="fa-solid ${isCompleted ? 'fa-square-check' : 'fa-square'}"></i>
                ${isCompleted ? 'Completato!' : 'Segna come giocato'}
              </button>
            </div>
          </div>

          <!-- Titolo del Gioco -->
          <div>
            <h3 class="text-2xl font-bold font-cinzel text-amber-100">
              ${game.title}
            </h3>
            <p class="text-xs text-amber-400/90 mt-1">
              <i class="fa-solid fa-gamepad mr-1"></i> Versione migliore: <span class="text-slate-200">${game.recommendedVersion}</span>
            </p>
          </div>

          <!-- Specifiche Rapide (Griglia) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <div>
              <span class="text-slate-400 uppercase font-semibold block mb-0.5">Durata Media</span>
              <span class="text-slate-200">${game.duration}</span>
            </div>
            <div>
              <span class="text-slate-400 uppercase font-semibold block mb-0.5">Combat System</span>
              <span class="text-slate-200">${game.combatStyle}</span>
            </div>
          </div>

          <!-- Consigli d'Oro per non Bloccarsi -->
          <div class="space-y-2">
            <h4 class="text-xs uppercase font-bold text-amber-300 flex items-center gap-1.5 tracking-wider">
              <i class="fa-solid fa-lightbulb text-amber-400"></i> I Consigli d'Oro del Veterano
            </h4>
            <ul class="space-y-2 text-xs md:text-sm text-slate-300">
              ${game.goldenTips.map(tip => `
                <li class="flex items-start gap-2 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/80">
                  <i class="fa-solid fa-star text-amber-400 text-[10px] mt-1 shrink-0"></i>
                  <span>${tip}</span>
                </li>
              `).join("")}
            </ul>
          </div>

          <!-- Come Sbloccare il Filmato Segreto -->
          <div class="bg-amber-950/20 border border-amber-500/25 rounded-xl p-4 space-y-2">
            <h4 class="text-xs uppercase font-bold text-amber-300 flex items-center gap-1.5">
              <i class="fa-solid fa-film text-amber-400"></i> Come Sbloccare il Filmato Segreto: "${game.secretEndingUnlock.title}"
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-1">
              <div class="bg-slate-900/80 p-2.5 rounded border border-slate-800">
                <span class="font-bold text-amber-200 block mb-1">Standard Mode:</span>
                <span class="text-slate-300">${game.secretEndingUnlock.standard}</span>
              </div>
              <div class="bg-slate-900/80 p-2.5 rounded border border-slate-800">
                <span class="font-bold text-amber-300 block mb-1">Proud Mode:</span>
                <span class="text-slate-300">${game.secretEndingUnlock.proud}</span>
              </div>
              <div class="bg-slate-900/80 p-2.5 rounded border border-slate-800">
                <span class="font-bold text-rose-300 block mb-1">Critical Mode:</span>
                <span class="text-slate-300">${game.secretEndingUnlock.critical || 'Non presente o uguale a Proud'}</span>
              </div>
            </div>
          </div>

          <!-- Armi Supreme e Segreti -->
          ${game.secretsAndSynthesis ? `
            <div class="text-xs text-slate-300 bg-slate-900/40 p-3 rounded-lg border border-slate-800 flex flex-col gap-1.5">
              <div><strong class="text-amber-200">Ultima Weapon:</strong> ${game.secretsAndSynthesis.ultimaWeapon}</div>
              <div><strong class="text-amber-200">Boss Segreti:</strong> ${game.secretsAndSynthesis.secretBosses.join(", ")}</div>
            </div>
          ` : ''}
        </div>
      `;
    }).join("");

    // Listener toggle completamento
    container.querySelectorAll("[data-toggle-game]").forEach(btn => {
      btn.addEventListener("click", () => {
        const gameId = btn.getAttribute("data-toggle-game");
        window.khTracker.toggleGame(gameId);
        window.khAudio.playUiSound("star");
        renderGames();
        updateTrackerDashboard();
      });
    });
  }

  // 6. Render Ordini di Gioco & Compilation
  function renderOrders() {
    const container = document.getElementById("orders-container");
    if (!container) return;

    const data = window.KH_ORDERS_DATA;
    if (!data) return;

    container.innerHTML = `
      <!-- Guida alle Raccolte HD -->
      <div class="kh-card rounded-2xl p-6 md:p-8 mb-10 border border-amber-500/30">
        <h3 class="text-2xl md:text-3xl font-bold font-cinzel text-amber-100 mb-2">
          ${data.compilationGuide.title}
        </h3>
        <p class="text-slate-300 text-sm md:text-base mb-6">
          ${data.compilationGuide.intro}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          ${data.compilationGuide.packages.map(pkg => `
            <div class="bg-slate-900/70 p-5 rounded-xl border border-slate-800 space-y-2">
              <div class="flex items-center justify-between">
                <h4 class="font-bold text-amber-200 text-base font-cinzel">${pkg.name}</h4>
                <span class="text-[11px] px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 font-semibold border border-amber-500/30">
                  ${pkg.status.split('(')[0]}
                </span>
              </div>
              <ul class="text-xs text-slate-300 space-y-1 list-disc list-inside">
                ${pkg.contents.map(c => `<li>${c}</li>`).join("")}
              </ul>
              <div class="text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                Piattaforme: ${pkg.platforms}
              </div>
            </div>
          `).join("")}
        </div>

        <div class="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 text-rose-200 text-xs md:text-sm flex items-start gap-3">
          <i class="fa-solid fa-triangle-exclamation text-rose-400 text-base mt-0.5 shrink-0"></i>
          <div>${data.compilationGuide.switchCloudWarning}</div>
        </div>
      </div>

      <!-- I 3 Ordini di Gioco -->
      <div class="space-y-8">
        <h3 class="text-2xl md:text-3xl font-bold font-cinzel text-amber-100 text-center mb-6">
          Scegli la Tua Bussola per Vivere la Saga
        </h3>

        ${data.orders.map(order => `
          <div class="kh-card rounded-2xl p-6 md:p-8 space-y-6">
            <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <span class="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  ${order.badge}
                </span>
                <h4 class="text-2xl font-bold font-cinzel text-amber-100 mt-2">${order.title}</h4>
              </div>
            </div>

            <p class="text-slate-300 text-sm md:text-base leading-relaxed">
              ${order.description}
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div class="bg-emerald-950/20 p-3 rounded-lg border border-emerald-500/30 space-y-1">
                <span class="font-bold text-emerald-300 block mb-1">Perché sceglierlo (Pro):</span>
                ${order.pros.map(p => `<div>✓ ${p}</div>`).join("")}
              </div>
              <div class="bg-amber-950/20 p-3 rounded-lg border border-amber-500/30 space-y-1">
                <span class="font-bold text-amber-300 block mb-1">Cosa considerare (Contro):</span>
                ${order.cons.map(c => `<div>⚠ ${c}</div>`).join("")}
              </div>
            </div>

            <!-- Passi dell'Ordine -->
            <div>
              <div class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">La Scaletta di Gioco:</div>
              <div class="space-y-2">
                ${order.steps.map(s => `
                  <div class="flex items-start gap-3 bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-xs md:text-sm">
                    <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 font-bold flex items-center justify-center shrink-0 border border-amber-500/30 text-xs">
                      ${s.num}
                    </span>
                    <div>
                      <strong class="text-amber-100 font-semibold block">${s.game}</strong>
                      <span class="text-slate-400 text-xs">${s.note}</span>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  // 7. Render Boss Segreti
  function renderBosses() {
    const container = document.getElementById("bosses-container");
    if (!container) return;

    const bosses = window.KH_BOSSES_DATA || [];
    container.innerHTML = bosses.map(boss => {
      const isDefeated = window.khTracker.isBossDefeated(boss.id);
      return `
        <div class="kh-card rounded-2xl p-6 md:p-8 space-y-5" id="boss-card-${boss.id}">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/40">
                Difficoltà: ${boss.difficulty}
              </span>
              <span class="text-xs text-slate-400">${boss.game}</span>
            </div>
            <button data-toggle-boss="${boss.id}" class="px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition ${isDefeated ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-amber-300'}">
              <i class="fa-solid ${isDefeated ? 'fa-crown text-amber-400' : 'fa-skull'}"></i>
              ${isDefeated ? 'Boss Sconfitto!' : 'Segna come battuto'}
            </button>
          </div>

          <div>
            <h3 class="text-2xl md:text-3xl font-bold font-cinzel text-amber-100">
              ${boss.name}
            </h3>
            <p class="text-xs text-amber-400 mt-1">
              <i class="fa-solid fa-location-dot mr-1"></i> Luogo: <span class="text-slate-200">${boss.location}</span>
            </p>
          </div>

          <p class="text-xs md:text-sm italic text-slate-300 bg-slate-900/40 p-3 rounded-lg border border-slate-800/80">
            ${boss.loreSnippet}
          </p>

          <!-- Livello ed Equipaggiamento Consigliato -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <div>
              <span class="text-amber-400 font-bold block mb-1 uppercase">Livello Raccomandato</span>
              <span class="text-slate-200">${boss.recommendedLevel}</span>
            </div>
            <div>
              <span class="text-amber-400 font-bold block mb-1 uppercase">Equipaggiamento Ideale</span>
              <span class="text-slate-200">${boss.recommendedGear}</span>
            </div>
          </div>

          <!-- Attacchi Letali -->
          <div class="space-y-2">
            <h4 class="text-xs uppercase font-bold text-rose-300 flex items-center gap-1.5 tracking-wider">
              <i class="fa-solid fa-skull-crossbones text-rose-400"></i> Le Mosse Più Letali
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              ${boss.deadlyAttacks.map(atk => `
                <div class="p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                  <strong class="text-rose-200 block mb-1">${atk.name}</strong>
                  <span class="text-slate-300 text-[11px] leading-tight block">${atk.description}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Strategia Onesta vs Trucco Loop -->
          <div class="space-y-3 pt-2">
            <div class="bg-amber-950/20 border border-amber-500/30 rounded-xl p-4">
              <h4 class="text-xs uppercase font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-shield-halved text-amber-400"></i> Strategia Onesta e Pattern di Guardia
              </h4>
              <p class="text-xs md:text-sm text-slate-200 leading-relaxed">${boss.strategyLegit}</p>
            </div>

            <div class="bg-sky-950/20 border border-sky-500/30 rounded-xl p-4">
              <h4 class="text-xs uppercase font-bold text-sky-300 mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-wand-magic-sparkles text-sky-400"></i> Metodo di Sfruttamento / Cheese Loop
              </h4>
              <p class="text-xs md:text-sm text-slate-200 leading-relaxed">${boss.strategyCheese}</p>
            </div>
          </div>
        </div>
      `;
    }).join("");

    container.querySelectorAll("[data-toggle-boss]").forEach(btn => {
      btn.addEventListener("click", () => {
        const bossId = btn.getAttribute("data-toggle-boss");
        window.khTracker.toggleBoss(bossId);
        window.khAudio.playUiSound("star");
        renderBosses();
        updateTrackerDashboard();
      });
    });
  }

  // 7b. Helper Icona SVG Animata per Creature del Bestiario
  function getCreatureBadgeSVG(type, color) {
    if (type === "heartless-pure") {
      return `
        <svg class="w-11 h-11 shrink-0 filter drop-shadow-md" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" fill="#090d16" stroke="${color}" stroke-width="2.5"/>
          <path d="M38 28 Q30 12 25 16 Q32 24 40 32" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M62 28 Q70 12 75 16 Q68 24 60 32" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
          <circle cx="50" cy="52" r="26" fill="#0f172a" stroke="${color}" stroke-width="2"/>
          <ellipse cx="41" cy="52" rx="4.5" ry="7.5" fill="#facc15" transform="rotate(-10 41 52)"/>
          <ellipse cx="59" cy="52" rx="4.5" ry="7.5" fill="#facc15" transform="rotate(10 59 52)"/>
        </svg>
      `;
    } else if (type === "heartless-emblem") {
      return `
        <svg class="w-11 h-11 shrink-0 filter drop-shadow-md" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" fill="#18090e" stroke="${color}" stroke-width="2.5"/>
          <path d="M50 24 C50 24 30 15 24 35 C18 52 50 78 50 78 C50 78 82 52 76 35 C70 15 50 24 50 24 Z" fill="#b91c1c" stroke="#f87171" stroke-width="2"/>
          <path d="M36 45 L64 45 M50 32 L50 64" stroke="#fef08a" stroke-width="3.5" stroke-linecap="round"/>
        </svg>
      `;
    } else if (type === "nobody") {
      return `
        <svg class="w-11 h-11 shrink-0 filter drop-shadow-md" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" fill="#0f172a" stroke="${color}" stroke-width="2.5"/>
          <path d="M50 16 L56 36 L76 36 L60 48 L66 68 L50 56 L34 68 L40 48 L24 36 L44 36 Z" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
          <circle cx="50" cy="46" r="5" fill="#6366f1"/>
        </svg>
      `;
    } else if (type === "unversed") {
      return `
        <svg class="w-11 h-11 shrink-0 filter drop-shadow-md" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" fill="#042f2e" stroke="${color}" stroke-width="2.5"/>
          <path d="M50 18 C50 18 26 50 26 64 C26 78 37 84 50 84 C63 84 74 78 74 64 C74 50 50 18 50 18 Z" fill="#0f766e" stroke="#2dd4bf" stroke-width="2"/>
          <circle cx="43" cy="62" r="3.5" fill="#ef4444"/>
          <circle cx="57" cy="62" r="3.5" fill="#ef4444"/>
          <circle cx="50" cy="71" r="3.5" fill="#ef4444"/>
        </svg>
      `;
    } else if (type === "dreameater") {
      return `
        <svg class="w-11 h-11 shrink-0 filter drop-shadow-md" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" fill="#1e1b4b" stroke="${color}" stroke-width="2.5"/>
          <circle cx="50" cy="52" r="22" fill="#ec4899" stroke="#38bdf8" stroke-width="2.5"/>
          <path d="M28 44 Q14 36 20 22 Q32 30 32 40" fill="#38bdf8"/>
          <path d="M72 44 Q86 36 80 22 Q68 30 68 40" fill="#38bdf8"/>
          <circle cx="42" cy="50" r="3.5" fill="#fef08a"/>
          <circle cx="58" cy="50" r="3.5" fill="#fef08a"/>
        </svg>
      `;
    } else {
      return `
        <svg class="w-11 h-11 shrink-0 filter drop-shadow-md" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" fill="#1c1917" stroke="${color}" stroke-width="2.5"/>
          <path d="M22 50 C22 30 78 30 78 50 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
          <rect x="42" y="50" width="16" height="24" rx="4" fill="#fed7aa"/>
          <circle cx="36" cy="40" r="3" fill="#ef4444"/>
          <circle cx="50" cy="36" r="3.5" fill="#ef4444"/>
          <circle cx="64" cy="40" r="3" fill="#ef4444"/>
          <circle cx="46" cy="58" r="2" fill="#f59e0b"/>
          <circle cx="54" cy="58" r="2" fill="#f59e0b"/>
        </svg>
      `;
    }
  }

  // 7c. Render Bestiario dei Mondi
  function renderBestiary() {
    const container = document.getElementById("bestiary-container");
    const countBadge = document.getElementById("bestiary-count-badge");
    if (!container) return;

    let list = window.KH_BESTIARY_DATA || [];

    // Filtro per Gioco
    if (state.bestiaryGame !== "all") {
      list = list.filter(m => m.gameId === state.bestiaryGame);
    }

    // Filtro per Categoria
    if (state.bestiaryCategory !== "all") {
      list = list.filter(m => m.category.toLowerCase().includes(state.bestiaryCategory.toLowerCase()));
    }

    // Ricerca Specifica Bestiario
    if (state.bestiarySearch.trim() !== "") {
      const q = state.bestiarySearch.toLowerCase();
      list = list.filter(m => 
        m.name.toLowerCase().includes(q) ||
        m.nameEn.toLowerCase().includes(q) ||
        m.worlds.some(w => w.toLowerCase().includes(q)) ||
        m.locationDetail.toLowerCase().includes(q) ||
        m.drops.some(d => d.item.toLowerCase().includes(q)) ||
        m.description.toLowerCase().includes(q)
      );
    }

    if (countBadge) {
      countBadge.innerText = list.length;
    }

    if (list.length === 0) {
      container.innerHTML = `
        <div class="col-span-full text-center py-16 bg-slate-900/40 rounded-2xl border border-amber-500/20 p-8 space-y-3">
          <div class="w-16 h-16 mx-auto rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center text-2xl border border-amber-500/30">
            <i class="fa-solid fa-ghost"></i>
          </div>
          <h3 class="text-xl font-bold font-cinzel text-amber-200">Nessuna creatura trovata</h3>
          <p class="text-sm text-slate-400 max-w-md mx-auto">
            Nessun mostro corrisponde ai filtri selezionati. Prova a reimpostare i parametri di ricerca.
          </p>
          <button id="reset-bestiary-filters" class="mt-2 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 rounded-lg text-xs font-semibold border border-amber-500/40 transition">
            Mostra Tutte le Creature
          </button>
        </div>
      `;
      const resetBtn = document.getElementById("reset-bestiary-filters");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          state.bestiaryGame = "all";
          state.bestiaryCategory = "all";
          state.bestiarySearch = "";
          const gEl = document.getElementById("bestiary-game-filter");
          const cEl = document.getElementById("bestiary-cat-filter");
          const sEl = document.getElementById("bestiary-search-input");
          if (gEl) gEl.value = "all";
          if (cEl) cEl.value = "all";
          if (sEl) sEl.value = "";
          renderBestiary();
        });
      }
      return;
    }

    container.innerHTML = list.map(m => {
      return `
        <article class="kh-card rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:border-amber-400/50 transition relative group shadow-lg" data-monster-card="${m.id}">
          <div class="space-y-3">
            <!-- 1. CORNICE VETRINA CON IMMAGINE UFFICIALE DEL MOSTRO -->
            <div class="monster-art-frame relative w-full h-48 sm:h-52 flex items-center justify-center p-4 rounded-xl cursor-pointer group" data-inspect-monster="${m.id}" title="Clicca per visualizzare la scheda dettagliata">
              <!-- Etichetta Gioco -->
              <div class="absolute top-2.5 left-2.5 z-10">
                <span class="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur text-amber-300 border border-amber-500/30">
                  ${m.gameTitle.split('(')[0].trim()}
                </span>
              </div>
              <!-- Etichetta EXP -->
              <div class="absolute top-2.5 right-2.5 z-10">
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur text-sky-300 border border-sky-500/30 font-mono">
                  +${m.experience} EXP
                </span>
              </div>
              
              <!-- Immagine Ufficiale del Mostro -->
              <img src="images/bestiary/${m.id}.png" 
                   alt="${m.name}" 
                   class="max-h-full max-w-full object-contain filter drop-shadow-[0_12px_22px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-300 z-10"
                   loading="lazy"
                   onerror="this.onerror=null; this.src='images/bestiary/red_nocturne.png';">

              <!-- Badge Rango in basso a sinistra -->
              <div class="absolute bottom-2.5 left-2.5 z-10">
                <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-900/90 text-amber-200 border border-slate-700/80">
                  ${m.rank}
                </span>
              </div>

              <!-- Suggerimento Scheda HD in basso a destra -->
              <div class="absolute bottom-2.5 right-2.5 z-10 text-[10px] text-amber-300/80 group-hover:text-amber-200 bg-slate-950/80 px-2 py-0.5 rounded border border-amber-500/30 flex items-center gap-1 transition">
                <i class="fa-solid fa-magnifying-glass-plus text-[9px]"></i> Scheda HD
              </div>
            </div>

            <!-- 2. INTESTAZIONE: NOME & SPECIE -->
            <div>
              <div class="flex items-start justify-between gap-2">
                <h3 class="text-lg font-bold font-cinzel text-amber-100 leading-snug group-hover:text-amber-300 transition">
                  ${m.name}
                </h3>
                <span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30 font-semibold shrink-0">
                  ${m.category}
                </span>
              </div>
              <div class="text-[11px] text-slate-400 mt-0.5">
                Nome En: <span class="text-slate-300">${m.nameEn}</span>
              </div>
            </div>

            <!-- 3. NAVIGAZIONE INTERNA A SCHEDE DEL MOSTRO -->
            <div class="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-[11px] font-medium monster-card-nav" data-card-id="${m.id}">
              <button type="button" class="monster-tab-btn active flex-1 py-1 px-2 rounded-lg text-center transition font-semibold" data-target="info">
                <i class="fa-solid fa-scroll text-[10px] mr-1"></i> Info & Mappa
              </button>
              <button type="button" class="monster-tab-btn flex-1 py-1 px-2 rounded-lg text-center transition text-slate-400 hover:text-slate-200" data-target="drops">
                <i class="fa-solid fa-gem text-[10px] mr-1"></i> Drop & %
              </button>
              <button type="button" class="monster-tab-btn flex-1 py-1 px-2 rounded-lg text-center transition text-slate-400 hover:text-slate-200" data-target="tactics">
                <i class="fa-solid fa-shield-halved text-[10px] mr-1"></i> Tattica
              </button>
            </div>

            <!-- 4. CONTENUTO DELLE SCHEDE INTERNE -->
            <div class="min-h-[145px] text-xs">
              <!-- SCHEDA 1: INFO, LORE & MAPPA -->
              <div class="monster-tab-pane space-y-2.5" data-pane="info">
                <p class="text-xs text-slate-300 leading-relaxed line-clamp-3" title="${m.description}">
                  ${m.description}
                </p>
                <div class="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 text-[11px] space-y-1">
                  <div class="text-amber-200 font-medium flex items-center gap-1.5">
                    <i class="fa-solid fa-earth-americas text-amber-400 text-[10px]"></i>
                    <span>Mondi: <strong class="text-slate-100">${m.worlds.join(", ")}</strong></span>
                  </div>
                  <div class="text-slate-400 text-[10px] leading-tight">
                    <i class="fa-solid fa-map-pin text-rose-400 mr-1"></i> ${m.locationDetail}
                  </div>
                </div>
              </div>

              <!-- SCHEDA 2: DROP E PERCENTUALI DI RILASCIO -->
              <div class="monster-tab-pane hidden space-y-2" data-pane="drops">
                <div class="text-[10px] font-bold uppercase tracking-wider text-amber-400 flex items-center justify-between">
                  <span>Materiale / Drop</span>
                  <span>Tasso di Rilascio</span>
                </div>
                <div class="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                  ${m.drops.map(d => {
                    const rateVal = parseFloat(d.rate) || 5;
                    const isRare = rateVal <= 5;
                    return `
                      <div class="bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-slate-800 flex items-center justify-between gap-2 text-xs">
                        <div class="flex items-center gap-1.5 truncate">
                          <span class="w-1.5 h-1.5 rounded-full ${isRare ? 'bg-rose-400 ring-2 ring-rose-500/20' : 'bg-emerald-400'} shrink-0"></span>
                          <span class="text-slate-200 truncate font-medium text-[11px]">${d.item}</span>
                          <span class="text-[9px] text-slate-400 hidden sm:inline">(${d.type})</span>
                        </div>
                        <span class="font-bold text-xs shrink-0 ${isRare ? 'text-rose-300 font-mono' : 'text-emerald-300 font-mono'}">
                          ${d.rate}
                        </span>
                      </div>
                    `;
                  }).join("")}
                </div>
              </div>

              <!-- SCHEDA 3: TATTICA, DEBOLEZZE & FARMING -->
              <div class="monster-tab-pane hidden space-y-2" data-pane="tactics">
                <div class="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 text-[11px] space-y-1 text-slate-300">
                  <div><strong class="text-amber-300">Tattica:</strong> ${m.tactics}</div>
                  <div class="pt-1.5 border-t border-slate-800 flex flex-wrap gap-x-3 text-[10px]">
                    <span class="text-emerald-300"><i class="fa-solid fa-bolt mr-0.5"></i> Debole: <strong>${m.elementalAffinities.weak}</strong></span>
                    <span class="text-amber-300"><i class="fa-solid fa-shield mr-0.5"></i> Resiste: <strong>${m.elementalAffinities.resist}</strong></span>
                  </div>
                </div>
                <div class="bg-amber-950/20 border border-amber-500/25 rounded-lg p-2 text-[10px] text-amber-200/90 leading-tight flex items-start gap-1.5">
                  <i class="fa-solid fa-lightbulb text-amber-400 mt-0.5 shrink-0"></i>
                  <div><strong class="text-amber-300">Farming:</strong> ${m.farmingTip}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 5. FOOTER CARD: PULSANTE SCHEDA COMPLETA HD -->
          <div class="pt-3 border-t border-slate-800/80">
            <button type="button" class="w-full py-2 px-3 rounded-xl bg-slate-900/90 hover:bg-amber-500/20 text-slate-300 hover:text-amber-200 border border-slate-800 hover:border-amber-500/40 font-semibold transition flex items-center justify-center gap-1.5 text-xs" data-inspect-monster="${m.id}">
              <i class="fa-solid fa-book-open text-amber-400"></i>
              <span>Apri Dossier Completo HD</span>
            </button>
          </div>
        </article>
      `;
    }).join("");

    // Listener per switch schede interne di ogni card
    container.querySelectorAll(".monster-card-nav").forEach(nav => {
      const card = nav.closest("article");
      if (!card) return;

      nav.querySelectorAll(".monster-tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const target = btn.getAttribute("data-target");
          
          // Switch tab attiva
          nav.querySelectorAll(".monster-tab-btn").forEach(b => {
            b.classList.remove("active");
            b.classList.add("text-slate-400");
          });
          btn.classList.add("active");
          btn.classList.remove("text-slate-400");

          // Mostra pane corrispondente
          card.querySelectorAll(".monster-tab-pane").forEach(pane => {
            if (pane.getAttribute("data-pane") === target) {
              pane.classList.remove("hidden");
            } else {
              pane.classList.add("hidden");
            }
          });

          window.khAudio.playUiSound("click");
        });
      });
    });

    // Listener per apertura modale scheda completa
    container.querySelectorAll("[data-inspect-monster]").forEach(trigger => {
      trigger.addEventListener("click", () => {
        const monsterId = trigger.getAttribute("data-inspect-monster");
        openMonsterModal(monsterId);
      });
    });
  }

  // 7d. Modale Scheda Completa Mostro (Dossier Illustrato del Grillo Parlante)
  function openMonsterModal(monsterId) {
    const m = (window.KH_BESTIARY_DATA || []).find(item => item.id === monsterId);
    if (!m) return;

    window.khAudio.playUiSound("star");

    const modal = document.getElementById("monster-detail-modal");
    const content = document.getElementById("monster-modal-content");
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="space-y-6">
        <!-- Top Section: Immagine Grande in Vetrina + Info Chiave -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div class="monster-art-frame h-64 sm:h-72 flex items-center justify-center p-6 rounded-2xl relative">
            <img src="images/bestiary/${m.id}.png" 
                 alt="${m.name}" 
                 class="max-h-full max-w-full object-contain filter drop-shadow-[0_16px_30px_rgba(0,0,0,0.9)]"
                 onerror="this.onerror=null; this.src='images/bestiary/red_nocturne.png';">
            <span class="absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-950/80 text-amber-300 border border-amber-500/30">
              ${m.rank}
            </span>
          </div>

          <div class="space-y-3">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 font-cinzel">
                ${m.gameTitle}
              </span>
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/15 text-rose-300 border border-rose-500/30">
                ${m.category}
              </span>
            </div>

            <h2 class="text-2xl md:text-3xl font-bold font-cinzel text-amber-100">
              ${m.name}
            </h2>
            <div class="text-xs text-slate-400">
              Nome Internazionale: <strong class="text-slate-200">${m.nameEn}</strong> • EXP Rilasciata: <strong class="text-sky-300">+${m.experience}</strong>
            </div>

            <p class="text-xs md:text-sm text-slate-300 leading-relaxed pt-2">
              ${m.description}
            </p>
          </div>
        </div>

        <!-- Mappa & Location Dettagliata -->
        <div class="bg-slate-900/70 p-4 rounded-xl border border-slate-800 space-y-2">
          <h4 class="text-xs uppercase font-bold text-amber-300 flex items-center gap-2 tracking-wider">
            <i class="fa-solid fa-map-location-dot text-amber-400"></i> Locazione Esatta sulla Mappa & Mondi
          </h4>
          <div class="text-xs text-slate-300">
            <strong class="text-amber-200">Mondi:</strong> ${m.worlds.join(", ")}
          </div>
          <div class="text-xs text-slate-400 leading-relaxed">
            <i class="fa-solid fa-location-crosshairs text-rose-400 mr-1"></i> ${m.locationDetail}
          </div>
        </div>

        <!-- Drop Completi & Percentuali -->
        <div class="space-y-2">
          <h4 class="text-xs uppercase font-bold text-amber-300 flex items-center gap-2 tracking-wider">
            <i class="fa-solid fa-gem text-amber-400"></i> Tabella Drop & Tassi Percentuali di Rilascio
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            ${m.drops.map(d => {
              const rateVal = parseFloat(d.rate) || 5;
              const isRare = rateVal <= 5;
              return `
                <div class="bg-slate-900/90 p-3 rounded-xl border border-slate-800 flex items-center justify-between gap-3">
                  <div class="truncate">
                    <div class="font-bold text-slate-100 truncate">${d.item}</div>
                    <div class="text-[10px] text-slate-400">${d.type}</div>
                  </div>
                  <span class="px-2.5 py-1 rounded font-bold text-xs font-mono shrink-0 ${isRare ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30' : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'}">
                    ${d.rate}
                  </span>
                </div>
              `;
            }).join("")}
          </div>
        </div>

        <!-- Tattica & Consigli di Farming -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-slate-900/70 p-4 rounded-xl border border-slate-800 space-y-2">
            <h4 class="text-xs uppercase font-bold text-amber-300 flex items-center gap-2">
              <i class="fa-solid fa-shield-halved text-amber-400"></i> Strategia di Combattimento
            </h4>
            <p class="text-xs text-slate-300 leading-relaxed">${m.tactics}</p>
            <div class="pt-2 border-t border-slate-800 text-xs space-y-1">
              <div><strong class="text-emerald-400">Debolezze:</strong> ${m.elementalAffinities.weak}</div>
              <div><strong class="text-amber-400">Resistenze:</strong> ${m.elementalAffinities.resist}</div>
              <div><strong class="text-slate-400">Immunità:</strong> ${m.elementalAffinities.immune}</div>
            </div>
          </div>

          <div class="bg-amber-950/20 border border-amber-500/30 p-4 rounded-xl space-y-2 flex flex-col justify-between">
            <div>
              <h4 class="text-xs uppercase font-bold text-amber-300 flex items-center gap-2 mb-2">
                <i class="fa-solid fa-lightbulb text-amber-400"></i> Il Segreto del Farming Efficace
              </h4>
              <p class="text-xs text-amber-100/90 leading-relaxed">${m.farmingTip}</p>
            </div>
            <div class="text-[11px] text-amber-300/80 pt-2 border-t border-amber-500/20">
              Suggerimento: equipaggia abilità come <em>Premio Partita (Lucky Strike)</em> per aumentare drasticamente il drop rate!
            </div>
          </div>
        </div>
      </div>
    `;

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  // Chiusura Modale Mostro
  const closeMonsterBtn = document.getElementById("close-monster-modal");
  const monsterModalOverlay = document.getElementById("monster-detail-modal");
  if (closeMonsterBtn && monsterModalOverlay) {
    const closeMonsterModal = () => {
      monsterModalOverlay.classList.add("hidden");
      document.body.style.overflow = "auto";
      window.khAudio.playUiSound("click");
    };
    closeMonsterBtn.addEventListener("click", closeMonsterModal);
    monsterModalOverlay.addEventListener("click", (e) => {
      if (e.target === monsterModalOverlay) {
        closeMonsterModal();
      }
    });
  }

  // 7e. Render Forgia dei Keyblade
  function renderKeyblades() {
    const container = document.getElementById("keyblades-container");
    const countBadge = document.getElementById("keyblades-count-badge");
    if (!container) return;

    let list = window.KH_KEYBLADES_DATA || [];

    if (state.keybladeFilter !== "all") {
      list = list.filter(k => k.gameCategory === state.keybladeFilter);
    }

    if (state.keybladeSearch.trim() !== "") {
      const q = state.keybladeSearch.toLowerCase();
      list = list.filter(k => 
        k.name.toLowerCase().includes(q) ||
        k.nameEn.toLowerCase().includes(q) ||
        k.wielder.toLowerCase().includes(q) ||
        k.innateAbility.toLowerCase().includes(q) ||
        k.howToGet.toLowerCase().includes(q)
      );
    }

    if (countBadge) countBadge.innerText = list.length;

    if (list.length === 0) {
      container.innerHTML = `
        <div class="col-span-full text-center py-12 bg-slate-900/40 rounded-2xl border border-amber-500/20 p-8 space-y-3">
          <i class="fa-solid fa-key text-3xl text-amber-400"></i>
          <h3 class="text-xl font-bold font-cinzel text-amber-200">Nessun Keyblade trovato</h3>
          <p class="text-sm text-slate-400">Prova a modificare i filtri o il termine di ricerca.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(kb => `
      <article class="kh-card rounded-2xl p-5 md:p-6 flex flex-col justify-between space-y-4 hover:border-amber-400/50 transition relative group shadow-lg">
        <div class="space-y-3">
          <!-- 1. VETRINA ILLUSTRATA DEL KEYBLADE (RENDER UFFICIALE) -->
          <div class="keyblade-art-frame relative w-full h-48 sm:h-52 p-4 rounded-xl group/art">
            <div class="absolute top-2.5 left-2.5 z-10">
              <span class="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur text-amber-300 border border-amber-500/30">
                ${kb.games[0]}
              </span>
            </div>
            <div class="absolute top-2.5 right-2.5 z-10">
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur text-rose-300 border border-rose-500/30 font-mono">
                ${kb.attack.split(':')[0] || 'ATK'}: ${kb.attack.split(':')[1]?.trim() || kb.attack}
              </span>
            </div>
            <img src="images/keyblades/${kb.id}.png" 
                 alt="${kb.name}" 
                 class="max-h-full max-w-full object-contain filter drop-shadow-[0_12px_22px_rgba(0,0,0,0.85)] group-hover/art:scale-110 group-hover/art:-rotate-3 transition-transform duration-300 z-10"
                 loading="lazy"
                 onerror="this.onerror=null; this.src='images/keyblades/kingdom-key.png';">
            <div class="absolute bottom-2.5 left-2.5 z-10">
              <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-900/90 text-slate-200 border border-slate-700/80">
                ${kb.wielder.split(',')[0]}
              </span>
            </div>
            <div class="absolute bottom-2.5 right-2.5 z-10 text-[10px] text-amber-300/80 bg-slate-950/80 px-2 py-0.5 rounded border border-amber-500/30 font-mono">
              ${kb.critRate}
            </div>
          </div>

          <!-- Header: Nome & Nome En -->
          <div>
            <h3 class="text-xl font-bold font-cinzel text-amber-100 group-hover:text-amber-300 transition">
              ${kb.name}
            </h3>
            <span class="text-[11px] text-slate-400">Nome En: ${kb.nameEn}</span>
          </div>

          <!-- Portatori Chiave -->
          <div class="text-[11px] text-slate-300 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
            <strong class="text-amber-200">Portatori:</strong> ${kb.wielder}
          </div>

          <!-- Statistiche Griglia -->
          <div class="grid grid-cols-2 gap-2 text-xs">
            <div class="bg-slate-900/80 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
              <span class="text-slate-400 text-[10px]"><i class="fa-solid fa-hand-fist mr-1 text-rose-400"></i> Potenza</span>
              <span class="font-bold text-amber-200 font-mono text-[11px]">${kb.attack.split(':')[1] || kb.attack}</span>
            </div>
            <div class="bg-slate-900/80 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
              <span class="text-slate-400 text-[10px]"><i class="fa-solid fa-wand-sparkles mr-1 text-sky-400"></i> Magia</span>
              <span class="font-bold text-sky-200 font-mono text-[11px]">${kb.magic.split(':')[1] || kb.magic}</span>
            </div>
            <div class="bg-slate-900/80 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
              <span class="text-slate-400 text-[10px]"><i class="fa-solid fa-ruler-horizontal mr-1 text-amber-400"></i> Raggio</span>
              <span class="font-bold text-slate-200 text-[11px]">${kb.reach}</span>
            </div>
            <div class="bg-slate-900/80 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
              <span class="text-slate-400 text-[10px]"><i class="fa-solid fa-burst mr-1 text-emerald-400"></i> Critico</span>
              <span class="font-bold text-emerald-300 font-mono text-[11px]">${kb.critRate}</span>
            </div>
          </div>

          <!-- Abilità Innata -->
          <div class="bg-amber-950/20 border border-amber-500/25 rounded-xl p-3 text-xs space-y-1">
            <div class="text-amber-300 font-bold uppercase tracking-wider text-[10px] flex items-center gap-1.5">
              <i class="fa-solid fa-gem text-amber-400"></i> Abilità Innata / Effetto Passivo:
            </div>
            <div class="text-amber-100/90 text-xs leading-relaxed">${kb.innateAbility}</div>
          </div>

          <!-- Guida Come Ottenerlo -->
          <div class="bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-xs space-y-1">
            <div class="text-slate-300 font-bold uppercase tracking-wider text-[10px] flex items-center gap-1.5">
              <i class="fa-solid fa-map-location-dot text-rose-400"></i> Come Sbloccarlo nel Gioco:
            </div>
            <div class="text-slate-300 text-xs leading-relaxed whitespace-pre-line">${kb.howToGet}</div>
          </div>

          <!-- Formchange o Trasformazione -->
          ${kb.formchange ? `
            <div class="bg-sky-950/20 border border-sky-500/25 rounded-xl p-2.5 text-xs text-sky-200/90 leading-relaxed">
              <strong class="text-sky-300 font-bold">Trasformazione Formchange:</strong> ${kb.formchange}
            </div>
          ` : ''}

          <!-- Lore Narrativa -->
          <p class="text-xs text-slate-400 italic pt-1 border-t border-slate-800/80 leading-relaxed">
            «${kb.lore}»
          </p>
        </div>
      </article>
    `).join("");
  }

  // 7f. Render Tomo Abilità & Magie
  function renderSkills() {
    const container = document.getElementById("skills-container");
    if (!container) return;

    const data = window.KH_SKILLS_DATA;
    if (!data) return;

    if (state.skillTab === "survival") {
      container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${data.survivalSkills.map(sk => `
            <div class="kh-card rounded-2xl p-6 space-y-3 border border-amber-500/25">
              <div class="flex items-start justify-between gap-3">
                <div>
                  <span class="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30">
                    ${sk.type}
                  </span>
                  <h3 class="text-xl font-bold font-cinzel text-amber-100 mt-1">${sk.name}</h3>
                  <span class="text-xs text-slate-400">Costo: <strong class="text-amber-300 font-mono">${sk.apCost}</strong> • Giochi: ${sk.games.join(", ")}</span>
                </div>
                <div class="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-rose-500/30 text-rose-400 text-lg shrink-0">
                  <i class="fa-solid fa-shield-heart"></i>
                </div>
              </div>

              <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200 leading-relaxed">
                <strong class="text-amber-200 block mb-1">Effetto in Combattimento:</strong>
                ${sk.effect}
              </div>

              <div class="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-1">
                <strong class="text-sky-300 block text-[11px] uppercase tracking-wider">Come Sbloccarla:</strong>
                <div class="whitespace-pre-line text-slate-300 leading-relaxed">${sk.howToUnlock}</div>
              </div>

              <div class="p-2.5 rounded-xl bg-amber-950/20 border border-amber-500/30 text-[11px] text-amber-200 flex items-start gap-2">
                <i class="fa-solid fa-lightbulb text-amber-400 mt-0.5 shrink-0"></i>
                <div><strong class="text-amber-300">Consiglio del Veterano:</strong> ${sk.proTip}</div>
              </div>
            </div>
          `).join("")}
        </div>
      `;
    } else if (state.skillTab === "growth") {
      container.innerHTML = `
        <div class="space-y-6">
          <div class="bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
            <i class="fa-solid fa-circle-info text-sky-400 mr-1.5"></i>
            Le <strong>Abilità di Crescita</strong> governano la mobilità universale di Sora. In Kingdom Hearts II si potenziano livellando le rispettive Forme di Fusione fino al livello 7 (o Livello 9 in Final Mix), rendendo Sora capace di volare, super-saltare e scattare attraverso qualsiasi ostacolo.
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${data.growthAbilities.map(g => `
              <div class="kh-card rounded-2xl p-6 space-y-4 border border-sky-500/25">
                <div class="flex items-start justify-between gap-3">
                  <div>
                    <span class="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-sky-500/15 text-sky-300 border border-sky-500/30">
                      ${g.originForm}
                    </span>
                    <h3 class="text-xl font-bold font-cinzel text-amber-100 mt-1">${g.name}</h3>
                    <span class="text-xs text-slate-400">${g.effect}</span>
                  </div>
                  <div class="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-sky-500/30 text-sky-400 text-lg shrink-0">
                    <i class="fa-solid fa-person-running"></i>
                  </div>
                </div>

                <div class="space-y-2">
                  ${g.levels.map(lv => `
                    <div class="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 flex items-start justify-between gap-3 text-xs">
                      <div>
                        <span class="font-bold text-amber-300 font-mono text-[11px] block">${lv.lv} — ${lv.requirement}</span>
                        <span class="text-slate-300 text-[11px]">${lv.desc}</span>
                      </div>
                      <i class="fa-solid fa-check text-emerald-400 text-xs mt-1 shrink-0"></i>
                    </div>
                  `).join("")}
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    } else if (state.skillTab === "magic") {
      container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${data.magicSpells.map(m => `
            <div class="kh-card rounded-2xl p-6 space-y-3 border border-amber-500/25 flex flex-col justify-between">
              <div class="space-y-2">
                <div class="flex items-center justify-between gap-2">
                  <span class="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 font-mono">
                    Elemento: ${m.element}
                  </span>
                  <span class="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    ${m.style}
                  </span>
                </div>
                <h3 class="text-lg font-bold font-cinzel text-amber-100">${m.name}</h3>
                <p class="text-xs text-slate-300 leading-relaxed">${m.behavior}</p>
              </div>

              <div class="bg-amber-950/20 p-2.5 rounded-xl border border-amber-500/25 text-[11px] text-amber-200 mt-2">
                <strong class="text-amber-300 block mb-0.5">Uso Strategico Ideale:</strong>
                ${m.bestUse}
              </div>
            </div>
          `).join("")}
        </div>
      `;
    }
  }

  // 7g. Render Fusioni, D-Link & Unioni
  function renderUnions() {
    const container = document.getElementById("unions-container");
    if (!container) return;

    const data = window.KH_UNIONS_DATA;
    if (!data) return;

    if (state.unionTab === "drive") {
      container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${data.driveForms.map(f => {
            const isAnti = f.id === "anti-form";
            return `
              <div class="kh-card rounded-2xl p-6 space-y-4 border ${isAnti ? 'border-purple-500/50 anti-form-glow' : 'border-amber-500/25'}">
                <!-- 1. VETRINA ILLUSTRATA FORMA DI FUSIONE (RENDER UFFICIALE) -->
                <div class="form-art-frame relative w-full h-56 sm:h-64 p-4 rounded-xl group/art ${isAnti ? 'anti-form-glow' : ''}">
                  <div class="absolute top-2.5 left-2.5 z-10">
                    <span class="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${isAnti ? 'bg-purple-950 text-purple-300 border border-purple-500/40' : 'bg-slate-950/80 backdrop-blur text-amber-300 border border-amber-500/30'}">
                      ${f.cost}
                    </span>
                  </div>
                  <div class="absolute top-2.5 right-2.5 z-10">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur text-sky-300 border border-sky-500/30 font-mono">
                      ${f.growthAbility}
                    </span>
                  </div>
                  <img src="images/forms/${f.id}.png" 
                       alt="${f.name}" 
                       class="max-h-full max-w-full object-contain filter drop-shadow-[0_14px_25px_rgba(0,0,0,0.9)] group-hover/art:scale-105 transition-transform duration-300 z-10"
                       loading="lazy"
                       onerror="this.onerror=null; this.src='images/forms/valor-form.png';">
                  <div class="absolute bottom-2.5 left-2.5 z-10">
                    <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-900/90 text-amber-200 border border-slate-700/80">
                      ${f.partnerRequired}
                    </span>
                  </div>
                  <div class="absolute bottom-2.5 right-2.5 z-10">
                    <span class="text-[10px] px-2 py-0.5 rounded bg-slate-900/90 text-slate-300 border border-slate-700/80">
                      ${f.colorSuit}
                    </span>
                  </div>
                </div>

                <div class="flex items-start justify-between gap-3">
                  <div>
                    <h3 class="text-2xl font-bold font-cinzel ${isAnti ? 'text-purple-200' : 'text-amber-100'} mt-1">${f.name}</h3>
                    <span class="text-xs text-slate-400">Nome En: ${f.nameEn}</span>
                  </div>
                  <span class="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-900 text-amber-300 border border-slate-800">
                    ${f.cost}
                  </span>
                </div>

                <div class="grid grid-cols-2 gap-2 text-xs">
                  <div class="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                    <span class="text-slate-400 text-[10px] block">Compagno Richiesto:</span>
                    <strong class="text-amber-200 text-xs">${f.partnerRequired}</strong>
                  </div>
                  <div class="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                    <span class="text-slate-400 text-[10px] block">Armi Impugnate:</span>
                    <strong class="text-slate-200 text-xs">${f.keybladesUsed}</strong>
                  </div>
                  <div class="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                    <span class="text-slate-400 text-[10px] block">Colore Costume:</span>
                    <strong class="text-amber-300 text-xs">${f.colorSuit}</strong>
                  </div>
                  <div class="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                    <span class="text-slate-400 text-[10px] block">Abilità di Crescita:</span>
                    <strong class="text-sky-300 text-xs">${f.growthAbility}</strong>
                  </div>
                </div>

                <p class="text-xs text-slate-300 leading-relaxed">${f.description}</p>

                <!-- Condizione EXP Farming -->
                <div class="bg-slate-900/70 p-3 rounded-xl border border-slate-800 text-xs space-y-1">
                  <strong class="text-amber-300 flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                    <i class="fa-solid fa-arrow-up-right-dots"></i> Come Livellare la Forma:
                  </strong>
                  <div class="text-slate-200">${f.expCondition}</div>
                  <div class="text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                    <i class="fa-solid fa-map-pin text-rose-400 mr-1"></i> <strong>Spot Consigliato:</strong> ${f.bestExpSpot}
                  </div>
                </div>

                <!-- Tratti Speciali -->
                <ul class="text-xs text-slate-300 space-y-1 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/80 list-disc list-inside">
                  ${f.specialTraits.map(t => `<li>${t}</li>`).join("")}
                </ul>
              </div>
            `;
          }).join("")}
        </div>
      `;
    } else if (state.unionTab === "bbs") {
      container.innerHTML = `
        <div class="space-y-6">
          <div class="bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
            <i class="fa-solid fa-circle-info text-cyan-400 mr-1.5"></i>
            In <strong>Birth by Sleep</strong>, Terra, Ventus e Aqua caricano la barra di comando usando magie o attacchi dello stesso elemento fino a mutare il proprio stile di combattimento in <strong>Stili di Comando</strong>. Tramite il <strong>D-Link</strong> (Connessione Dimensionale) possono inoltre connettere il proprio cuore a quello dei loro compagni e amici Disney ricevendo i loro set di abilità esclusive.
          </div>

          <h3 class="text-xl font-bold font-cinzel text-amber-200 flex items-center gap-2">
            <i class="fa-solid fa-bolt text-amber-400"></i> Gli Stili di Comando Sovrumani
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            ${data.bbsCombatSystem.commandStyles.map(cs => `
              <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2">
                <div class="flex items-center justify-between">
                  <h4 class="font-bold text-amber-100 font-cinzel text-base">${cs.name}</h4>
                  <span class="text-[10px] px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">${cs.user}</span>
                </div>
                <p class="text-xs text-slate-300 leading-relaxed">${cs.desc}</p>
              </div>
            `).join("")}
          </div>

          <h3 class="text-xl font-bold font-cinzel text-amber-200 flex items-center gap-2 pt-4">
            <i class="fa-solid fa-heart-pulse text-rose-400"></i> Le Connessioni Dimensionali dei Cuori (D-Link)
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            ${data.bbsCombatSystem.dLinks.map(dl => `
              <div class="bg-slate-900/70 p-3.5 rounded-xl border border-slate-800 space-y-1 text-xs">
                <span class="font-bold text-amber-300 block">${dl.name}</span>
                <span class="text-slate-300 leading-relaxed">${dl.effect}</span>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    } else if (state.unionTab === "team") {
      container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${data.teamUnions.map(u => `
            <div class="kh-card rounded-2xl p-6 space-y-3 border border-pink-500/25">
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-bold font-cinzel text-amber-100">${u.name}</h3>
                <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-pink-500/15 text-pink-300 border border-pink-500/30 font-semibold">${u.game}</span>
              </div>
              <p class="text-xs md:text-sm text-slate-300 leading-relaxed">${u.desc}</p>
            </div>
          `).join("")}
        </div>
      `;
    }
  }

  // 7h. Render Archivio degli Epiloghi & Filmati Segreti
  function renderEpilogues() {
    const container = document.getElementById("epilogues-container");
    if (!container) return;

    const list = window.KH_EPILOGUES_DATA || [];

    container.innerHTML = list.map((ep, idx) => `
      <article class="kh-card rounded-2xl p-6 md:p-8 space-y-6 border border-amber-500/30 relative overflow-hidden">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                ${ep.badge}
              </span>
              <span class="text-[11px] text-slate-400 font-sans">Epilogo #${idx + 1} • ${ep.game}</span>
            </div>
            <h3 class="text-2xl md:text-3xl font-bold font-cinzel text-amber-100">${ep.title}</h3>
          </div>
          <span class="text-xs font-semibold px-3 py-1 rounded-xl bg-slate-900 border border-slate-700 text-amber-300 font-cinzel">
            ${ep.era}
          </span>
        </div>

        <!-- Citazione iconica -->
        <p class="text-base md:text-lg italic text-amber-200/90 font-cinzel border-l-2 border-amber-400 pl-4 py-1">
          ${ep.quote}
        </p>

        <!-- Sintesi del Filmato -->
        <p class="text-slate-300 text-sm md:text-base leading-relaxed">
          ${ep.summary}
        </p>

        <!-- Rivelazioni Chiave -->
        <div class="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2">
          <h4 class="text-xs uppercase font-bold text-amber-300 flex items-center gap-2 tracking-wider">
            <i class="fa-solid fa-key text-amber-400"></i> Rivelazioni Chiave del Filmato:
          </h4>
          <ul class="space-y-1.5 text-xs text-slate-300 list-disc list-inside leading-relaxed">
            ${ep.keyRevelations.map(r => `<li>${r}</li>`).join("")}
          </ul>
        </div>

        <!-- Curiosità & Visione di Nomura -->
        <div class="bg-amber-950/20 border border-amber-500/25 rounded-xl p-3.5 text-xs md:text-sm text-amber-200 flex items-start gap-2.5">
          <i class="fa-solid fa-film text-amber-400 text-base mt-0.5 shrink-0"></i>
          <div><strong class="text-amber-300">Retrospettiva di Tetsuya Nomura:</strong> ${ep.nomuraInsight}</div>
        </div>
      </article>
    `).join("");
  }

  // 8. Render Enciclopedia Lore
  function renderLore() {
    const container = document.getElementById("lore-container");
    if (!container) return;

    const loreArticles = window.KH_LORE_DATA || [];
    const iconConfig = {
      heart: { icon: "fa-solid fa-heart-pulse", color: "text-rose-400", bg: "bg-rose-500/15", border: "border-rose-500/35", glow: "shadow-[0_0_15px_rgba(244,63,94,0.2)]" },
      monsters: { icon: "fa-solid fa-ghost", color: "text-purple-400", bg: "bg-purple-500/15", border: "border-purple-500/35", glow: "shadow-[0_0_15px_rgba(168,85,247,0.2)]" },
      clock: { icon: "fa-solid fa-hourglass-half", color: "text-amber-400", bg: "bg-amber-500/15", border: "border-amber-500/35", glow: "shadow-[0_0_15px_rgba(245,158,11,0.2)]" },
      keyblade: { icon: "fa-solid fa-key", color: "text-amber-300", bg: "bg-amber-500/15", border: "border-amber-500/35", glow: "shadow-[0_0_15px_rgba(251,191,36,0.2)]" },
      eye: { icon: "fa-solid fa-box-archive", color: "text-emerald-400", bg: "bg-emerald-500/15", border: "border-emerald-500/35", glow: "shadow-[0_0_15px_rgba(16,185,129,0.2)]" },
      city: { icon: "fa-solid fa-city", color: "text-cyan-400", bg: "bg-cyan-500/15", border: "border-cyan-500/35", glow: "shadow-[0_0_15px_rgba(6,182,212,0.2)]" }
    };

    container.innerHTML = loreArticles.map((art, idx) => {
      const cfg = iconConfig[art.icon] || { icon: "fa-solid fa-book-journal-whills", color: "text-cyan-400", bg: "bg-cyan-500/15", border: "border-cyan-500/35", glow: "" };

      return `
      <div class="kh-card rounded-2xl p-6 md:p-8 space-y-4 hover:border-amber-500/40 transition">
        <div class="flex items-center justify-between flex-wrap gap-2">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl ${cfg.bg} border ${cfg.border} flex items-center justify-center shrink-0 ${cfg.color} ${cfg.glow}">
              <i class="${cfg.icon} text-lg"></i>
            </div>
            <div>
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                ${art.category}
              </span>
            </div>
          </div>
          <span class="text-xs text-slate-400 font-mono tracking-wider">REGISTRO ARCHIVIO #${String(idx + 1).padStart(2, '0')}</span>
        </div>

        <h3 class="text-2xl md:text-3xl font-bold font-cinzel text-amber-100 flex items-center gap-2">
          ${art.title}
        </h3>

        <p class="text-amber-200/90 text-sm italic pl-3 border-l-2 border-amber-400">
          ${art.summary}
        </p>

        <div class="text-slate-300 text-sm md:text-base leading-relaxed space-y-3 pt-2">
          ${art.deepDive.split('\n\n').map(par => `<p class="whitespace-pre-line">${par}</p>`).join("")}
        </div>

        <div class="mt-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 text-xs md:text-sm text-amber-200 flex items-start gap-2.5">
          <i class="fa-solid fa-circle-info text-amber-400 text-sm mt-0.5 shrink-0"></i>
          <div><strong class="font-bold text-amber-300">Curiosità di Nomura:</strong> ${art.curiosity}</div>
        </div>
      </div>
    `;
    }).join("");
  }

  // 9. Render Tracker del Giocatore
  function renderTracker() {
    updateTrackerDashboard();
  }

  function updateTrackerDashboard() {
    const stats = window.khTracker.getStats(
      (window.KH_GAMES_DATA || []).length,
      (window.KH_BOSSES_DATA || []).length,
      (window.KH_TIMELINE_DATA || []).length
    );

    const progressFill = document.getElementById("tracker-progress-fill");
    const progressPercent = document.getElementById("tracker-progress-percent");
    const rankTitle = document.getElementById("tracker-rank-title");
    const rankBadge = document.getElementById("tracker-rank-badge");

    if (progressFill) progressFill.style.width = `${stats.percentage}%`;
    if (progressPercent) progressPercent.innerText = `${stats.percentage}%`;
    if (rankTitle) rankTitle.innerText = stats.rankTitle;
    if (rankBadge) rankBadge.innerText = stats.rankBadge;

    const gamesCount = document.getElementById("stat-games-count");
    const bossesCount = document.getElementById("stat-bosses-count");
    const erasCount = document.getElementById("stat-eras-count");

    if (gamesCount) gamesCount.innerText = `${stats.gamesDone} / ${stats.totalGames}`;
    if (bossesCount) bossesCount.innerText = `${stats.bossesDone} / ${stats.totalBosses}`;
    if (erasCount) erasCount.innerText = `${stats.erasDone} / ${stats.totalEras}`;
  }

  // 10. Gestione della Ricerca Globale
  function initSearch() {
    const searchInput = document.getElementById("global-search-input");
    if (!searchInput) return;

    searchInput.addEventListener("input", (e) => {
      const q = e.target.value;
      state.searchQuery = q;
      if (state.currentTab === "characters") {
        state.characterSearch = q;
        const cSearch = document.getElementById("char-search-input");
        if (cSearch) cSearch.value = q;
        renderCharacters();
      } else if (state.currentTab === "bestiary") {
        state.bestiarySearch = q;
        const bSearch = document.getElementById("bestiary-search-input");
        if (bSearch) bSearch.value = q;
        renderBestiary();
      } else if (state.currentTab === "keyblades") {
        state.keybladeSearch = q;
        const kbSearch = document.getElementById("keyblade-search-input");
        if (kbSearch) kbSearch.value = q;
        renderKeyblades();
      } else if (state.currentTab !== "timeline") {
        state.currentTab = "timeline";
        // Aggiorna bottoni navigazione
        document.querySelectorAll("[data-nav-tab]").forEach(b => {
          if (b.getAttribute("data-nav-tab") === "timeline") {
            b.classList.add("text-amber-400", "border-amber-400", "bg-amber-400/10");
            b.classList.remove("text-slate-300", "border-transparent");
          } else {
            b.classList.remove("text-amber-400", "border-amber-400", "bg-amber-400/10");
            b.classList.add("text-slate-300", "border-transparent");
          }
        });
        renderCurrentTab();
      } else {
        renderTimeline();
      }
    });
  }

  // 11. Controlli Audio Ambientale (Dearly Beloved in Loop & Slide Volume)
  function initAudioControls() {
    const playBtn = document.getElementById("audio-toggle-btn");
    const volumeSlider = document.getElementById("audio-volume-slider");
    const muteBtn = document.getElementById("audio-mute-btn");

    // Sincronizza stato iniziale e avvia autoplay
    if (window.khAudio) {
      window.khAudio.updateUI();
      // Autoplay automatico all'apertura del sito
      window.khAudio.initAutoplay();
    }

    if (playBtn) {
      playBtn.addEventListener("click", () => {
        window.khAudio.togglePlay();
      });
    }

    if (volumeSlider) {
      volumeSlider.addEventListener("input", (e) => {
        const vol = parseFloat(e.target.value);
        window.khAudio.setVolume(vol);
      });
    }

    if (muteBtn) {
      muteBtn.addEventListener("click", () => {
        window.khAudio.toggleMute();
      });
    }
  }

  // 12. Generatore di Frutti Paopu & Citazioni Calde
  function initPaopuGenerator() {
    const btn = document.getElementById("paopu-wish-btn");
    const quoteDisplay = document.getElementById("paopu-quote-text");
    const speakerDisplay = document.getElementById("paopu-speaker-text");
    const blessingDisplay = document.getElementById("paopu-blessing-text");

    if (!btn || !quoteDisplay) return;

    btn.addEventListener("click", () => {
      window.khAudio.playUiSound("wish");

      const quotes = window.KH_QUOTES_DATA || [];
      const wishes = window.KH_PAOPU_WISHES || [];

      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      const randomWish = wishes[Math.floor(Math.random() * wishes.length)];

      quoteDisplay.innerText = `«${randomQuote.quote}»`;
      speakerDisplay.innerText = `— ${randomQuote.speaker} (${randomQuote.game})`;
      if (blessingDisplay) blessingDisplay.innerText = randomWish;

      // Animazione rimbalzo stella
      btn.classList.add("scale-110", "rotate-12");
      setTimeout(() => {
        btn.classList.remove("scale-110", "rotate-12");
      }, 400);
    });
  }

  // 13. Quiz "Da quale gioco dovrei iniziare?"
  function initQuiz() {
    const questions = [
      {
        q: "1. Come preferisci vivere una grande saga fantasy?",
        answers: [
          { text: "Dall'inizio assoluto del gameplay classico (voglio vedere crescere grafica e comandi)", target: "kh1" },
          { text: "Con il prologo drammatico più maturo e cupo (10 anni prima con armature e maestri)", target: "bbs" },
          { text: "Con la quintessenza del combattimento fluido e frenetico di massimo livello", target: "kh2" }
        ]
      },
      {
        q: "2. Che tipo di ambientazione ti fa sentire più a casa?",
        answers: [
          { text: "Un'isola calda al tramonto, zattere di legno e il mistero dell'orizzonte", target: "kh1" },
          { text: "Una città celestiale con castelli fluttuanti e duelli di Keyblade all'accademia", target: "bbs" },
          { text: "Un campanile al tramonto dorato dove mangiare un gelato al sale marino tra amici", target: "kh2" }
        ]
      }
    ];

    const quizBox = document.getElementById("kh-starter-quiz");
    if (!quizBox) return;

    let currentQ = 0;
    let scores = { kh1: 0, bbs: 0, kh2: 0 };

    const renderQuizQuestion = () => {
      if (currentQ >= questions.length) {
        // Calcola vincitore
        let winner = "kh1";
        if (scores.bbs > scores.kh1 && scores.bbs >= scores.kh2) winner = "bbs";
        if (scores.kh2 > scores.kh1 && scores.kh2 > scores.bbs) winner = "kh2";

        let title = "Kingdom Hearts Final Mix (1.5 ReMIX)";
        let desc = "Sei un purista dell'avventura! Iniziare dal primo Kingdom Hearts ti farà innamorare della zattera di Sora, Kairi e Riku, preservando ogni singolo colpo di scena della saga.";
        if (winner === "bbs") {
          title = "Kingdom Hearts Birth by Sleep Final Mix";
          desc = "Ami i drammi cavallereschi e le storie con conseguenze pesanti. La tragedia di Terra, Aqua e Ventus ti conquisterà con un combat system a Deck formidabile!";
        } else if (winner === "kh2") {
          title = "Kingdom Hearts II Final Mix";
          desc = "Cercavi la perfezione del gameplay e la malinconia di Crepuscopoli. Tuttavia, gioca prima KH1 e Chain of Memories per goderti al 100% l'inizio di Roxas!";
        }

        quizBox.innerHTML = `
          <div class="text-center space-y-4 p-4">
            <div class="w-16 h-16 mx-auto rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center text-2xl border border-amber-500/40">
              <i class="fa-solid fa-crown"></i>
            </div>
            <h4 class="text-xl font-bold font-cinzel text-amber-200">Il Tuo Gioco Ideale: ${title}</h4>
            <p class="text-sm text-slate-300 leading-relaxed">${desc}</p>
            <button id="restart-quiz-btn" class="mt-4 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg text-xs transition">
              Rifai il Quiz
            </button>
          </div>
        `;

        document.getElementById("restart-quiz-btn").addEventListener("click", () => {
          currentQ = 0;
          scores = { kh1: 0, bbs: 0, kh2: 0 };
          renderQuizQuestion();
        });
        return;
      }

      const q = questions[currentQ];
      quizBox.innerHTML = `
        <div class="space-y-4">
          <h4 class="font-bold text-amber-200 font-cinzel text-sm md:text-base">${q.q}</h4>
          <div class="space-y-2">
            ${q.answers.map(ans => `
              <button data-quiz-target="${ans.target}" class="w-full text-left p-3 rounded-xl bg-slate-900/60 hover:bg-amber-500/15 border border-slate-800 hover:border-amber-500/40 text-xs md:text-sm text-slate-200 transition flex items-center justify-between group">
                <span>${ans.text}</span>
                <i class="fa-solid fa-chevron-right text-xs text-slate-500 group-hover:text-amber-400 transition"></i>
              </button>
            `).join("")}
          </div>
        </div>
      `;

      quizBox.querySelectorAll("[data-quiz-target]").forEach(btn => {
        btn.addEventListener("click", () => {
          const t = btn.getAttribute("data-quiz-target");
          scores[t]++;
          currentQ++;
          window.khAudio.playUiSound("click");
          renderQuizQuestion();
        });
      });
    };

    renderQuizQuestion();
  }
});
