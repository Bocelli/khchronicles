/**
 * KINGDOM HEARTS CHRONICLES - AMBIENT AUDIO ENGINE
 * Integra la versione autentica estesa di "Dearly Beloved" da Kingdom Hearts II
 * (composta da Yoko Shimomura) e feedback sonori sintetizzati via Web Audio API.
 */

class KHAudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.volume = 0.5;
    this.previousVolume = 0.5;
    this.isPlaying = false;
    this.userExplicitlyPaused = false;
    this.autoplayAttempted = false;
    this.unlockListenerAttached = false;
    this.audioElement = null;

    // Traccia unica autentica da Kingdom Hearts II
    this.track = {
      title: "Dearly Beloved (KH2 Extended)",
      artist: "Yoko Shimomura — Kingdom Hearts II Original Soundtrack",
      file: "audio/dearly-beloved-kh2.m4a"
    };

    // Ripristina volume salvato
    try {
      const savedVol = localStorage.getItem("kh_audio_volume");
      if (savedVol !== null) this.volume = parseFloat(savedVol);
    } catch (e) {}
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  initAutoplay() {
    if (this.autoplayAttempted) return;
    this.autoplayAttempted = true;
    this.play();
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    try {
      localStorage.setItem("kh_audio_volume", this.volume);
    } catch (e) {}

    if (this.audioElement) {
      this.audioElement.volume = this.volume;
    }
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
    this.updateVolumeUI();
  }

  toggleMute() {
    if (this.volume > 0) {
      this.previousVolume = this.volume;
      this.setVolume(0);
    } else {
      this.setVolume(this.previousVolume > 0 ? this.previousVolume : 0.5);
    }
  }

  updateVolumeUI() {
    const slider = document.getElementById("audio-volume-slider");
    const valText = document.getElementById("audio-volume-value");
    const volIcon = document.getElementById("audio-volume-icon");

    if (slider && Math.abs(parseFloat(slider.value) - this.volume) > 0.01) {
      slider.value = this.volume;
    }
    if (valText) {
      valText.innerText = `${Math.round(this.volume * 100)}%`;
    }
    if (volIcon) {
      if (this.volume === 0) {
        volIcon.className = "fa-solid fa-volume-xmark text-[11px] text-rose-400";
      } else if (this.volume < 0.35) {
        volIcon.className = "fa-solid fa-volume-low text-[11px] text-amber-400";
      } else {
        volIcon.className = "fa-solid fa-volume-high text-[11px] text-amber-400";
      }
    }
  }

  togglePlay() {
    if (this.isPlaying) {
      this.userExplicitlyPaused = true;
      this.stop();
    } else {
      this.userExplicitlyPaused = false;
      this.play();
    }
    return this.isPlaying;
  }

  play() {
    this.initContext();

    if (!this.audioElement) {
      this.audioElement = new Audio();
      this.audioElement.loop = true;
      this.audioElement.src = this.track.file;
    }

    this.audioElement.volume = this.volume;

    const playPromise = this.audioElement.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        this.isPlaying = true;
        this.updateUI();
      }).catch(err => {
        console.warn("Autoplay in attesa di interazione utente:", err);
        this.isPlaying = false;
        this.updateUI();

        // Se bloccato dalle policy del browser, avvia automaticamente al primo click, scroll o tasto ovunque
        if (!this.unlockListenerAttached) {
          this.unlockListenerAttached = true;
          const unlockAudio = () => {
            if (!this.isPlaying && !this.userExplicitlyPaused) {
              this.initContext();
              if (this.audioElement) {
                this.audioElement.play().then(() => {
                  this.isPlaying = true;
                  this.updateUI();
                }).catch(() => {});
              }
            }
            window.removeEventListener("pointerdown", unlockAudio);
            window.removeEventListener("keydown", unlockAudio);
            window.removeEventListener("scroll", unlockAudio);
            this.unlockListenerAttached = false;
          };
          window.addEventListener("pointerdown", unlockAudio, { once: true });
          window.addEventListener("keydown", unlockAudio, { once: true });
          window.addEventListener("scroll", unlockAudio, { once: true });
        }
      });
    }
  }

  stop() {
    this.isPlaying = false;
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.updateUI();
  }

  updateUI() {
    const icon = document.getElementById("audio-icon");
    const playBtn = document.getElementById("audio-toggle-btn");
    const waveAnim = document.getElementById("audio-wave-anim");
    const titleEl = document.getElementById("current-track-title");
    const subEl = document.getElementById("current-track-subtitle");

    if (titleEl) titleEl.innerText = this.track.title;
    if (subEl) subEl.innerText = this.track.artist;

    this.updateVolumeUI();

    if (this.isPlaying) {
      if (icon) {
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
      }
      if (waveAnim) {
        waveAnim.classList.remove("hidden");
        waveAnim.classList.add("inline-flex");
      }
      if (playBtn) {
        playBtn.classList.add("border-amber-400", "bg-amber-500/25", "text-amber-200", "shadow-[0_0_12px_rgba(245,158,11,0.35)]");
        playBtn.classList.remove("border-amber-500/30", "bg-amber-500/15");
      }
    } else {
      if (icon) {
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
      }
      if (waveAnim) {
        waveAnim.classList.add("hidden");
        waveAnim.classList.remove("inline-flex");
      }
      if (playBtn) {
        playBtn.classList.remove("border-amber-400", "bg-amber-500/25", "text-amber-200", "shadow-[0_0_12px_rgba(245,158,11,0.35)]");
        playBtn.classList.add("border-amber-500/30", "bg-amber-500/15");
      }
    }
  }

  playChimeNote(frequency, duration = 1.5, type = "sine", gainAmount = 0.15, hasOvertones = false) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, now);

    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(gainAmount, now + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gainNode);
    gainNode.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + duration + 0.1);

    if (hasOvertones) {
      const harm = this.ctx.createOscillator();
      const harmGain = this.ctx.createGain();
      harm.type = "sine";
      harm.frequency.setValueAtTime(frequency * 2.01, now);
      harmGain.gain.setValueAtTime(0, now);
      harmGain.gain.linearRampToValueAtTime(gainAmount * 0.35, now + 0.03);
      harmGain.gain.exponentialRampToValueAtTime(0.0001, now + (duration * 0.7));

      harm.connect(harmGain);
      harmGain.connect(this.masterGain);
      harm.start(now);
      harm.stop(now + duration);
    }
  }

  playUiSound(type = "click") {
    this.initContext();
    if (!this.ctx) return;

    if (type === "page" || type === "tab") {
      // Chime melodico autentico KH menu sweep (D5 -> F#5 -> A5 -> D6)
      const notes = [587.33, 739.99, 880.00, 1174.66];
      notes.forEach((freq, i) => {
        setTimeout(() => {
          this.playChimeNote(freq, 0.45, "sine", 0.07, true);
        }, i * 40);
      });
    } else if (type === "star") {
      [880, 1108.73, 1318.51, 1760].forEach((freq, i) => {
        setTimeout(() => {
          this.playChimeNote(freq, 0.9, "sine", 0.09);
        }, i * 85);
      });
    } else if (type === "wish") {
      [523.25, 659.25, 783.99, 1046.50].forEach((freq) => {
        this.playChimeNote(freq, 2.0, "triangle", 0.07);
      });
    } else {
      this.playChimeNote(440, 0.25, "sine", 0.05);
    }
  }
}

window.khAudio = new KHAudioEngine();
