/**
 * TRACKER DEL COMPLETISTA DI KINGDOM HEARTS (Local Storage)
 * Memorizza lo stato di completamento dei giochi, dei boss segreti battuti e delle armi supreme forgiate.
 */

class KHTracker {
  constructor() {
    this.storageKey = "kh_chronicles_progress_v1";
    this.data = this.load();
  }

  load() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.warn("Impossibile caricare dal localStorage", e);
    }
    return {
      completedGames: {},
      defeatedBosses: {},
      forgedWeapons: {},
      visitedEras: {},
      notes: ""
    };
  }

  save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    } catch (e) {
      console.warn("Impossibile salvare nel localStorage", e);
    }
  }

  toggleGame(gameId) {
    this.data.completedGames[gameId] = !this.data.completedGames[gameId];
    this.save();
    return this.data.completedGames[gameId];
  }

  isGameCompleted(gameId) {
    return !!this.data.completedGames[gameId];
  }

  toggleBoss(bossId) {
    this.data.defeatedBosses[bossId] = !this.data.defeatedBosses[bossId];
    this.save();
    return this.data.defeatedBosses[bossId];
  }

  isBossDefeated(bossId) {
    return !!this.data.defeatedBosses[bossId];
  }

  toggleWeapon(weaponId) {
    this.data.forgedWeapons[weaponId] = !this.data.forgedWeapons[weaponId];
    this.save();
    return this.data.forgedWeapons[weaponId];
  }

  isWeaponForged(weaponId) {
    return !!this.data.forgedWeapons[weaponId];
  }

  markEraRead(eraId) {
    this.data.visitedEras[eraId] = true;
    this.save();
  }

  isEraRead(eraId) {
    return !!this.data.visitedEras[eraId];
  }

  getStats(totalGames = 10, totalBosses = 7, totalEras = 14) {
    const gamesDone = Object.values(this.data.completedGames).filter(Boolean).length;
    const bossesDone = Object.values(this.data.defeatedBosses).filter(Boolean).length;
    const erasDone = Object.values(this.data.visitedEras).filter(Boolean).length;

    const totalWeight = totalGames + totalBosses + totalEras;
    const completedWeight = gamesDone + bossesDone + erasDone;
    const percentage = totalWeight > 0 ? Math.round((completedWeight / totalWeight) * 100) : 0;

    let rankTitle = "Sognatore delle Isole";
    let rankBadge = "Apprendista";
    if (percentage >= 90) {
      rankTitle = "Maestro Supremo del Vero Kingdom Hearts";
      rankBadge = "Leggenda";
    } else if (percentage >= 60) {
      rankTitle = "Maestro di Keyblade di Luce & Crepuscolo";
      rankBadge = "Maestro";
    } else if (percentage >= 35) {
      rankTitle = "Custode del Keyblade dei Mondi";
      rankBadge = "Custode";
    } else if (percentage >= 15) {
      rankTitle = "Viaggiatore di Crepuscopoli";
      rankBadge = "Esploratore";
    }

    return {
      gamesDone,
      totalGames,
      bossesDone,
      totalBosses,
      erasDone,
      totalEras,
      percentage,
      rankTitle,
      rankBadge
    };
  }

  resetAll() {
    this.data = {
      completedGames: {},
      defeatedBosses: {},
      forgedWeapons: {},
      visitedEras: {},
      notes: ""
    };
    this.save();
  }
}

window.khTracker = new KHTracker();
