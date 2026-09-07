/**
 * Kids Game Portal Frontend Controller
 */

class SoundEffects {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playPop() {
    if (!this.enabled) return;
    this.ensureContext();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.09);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.1);
  }

  playLaunch() {
    if (!this.enabled) return;
    this.ensureContext();
    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const t = now + (idx * 0.07);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.3, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.4);
    });
  }
}

const sfx = new SoundEffects();

class PortalApp {
  constructor() {
    this.games = [];
    this.activeCategory = 'all';
    this.activeGame = null;

    // DOM Elements
    this.grid = document.getElementById('games-grid');
    this.ipDisplay = document.getElementById('network-ip-display');
    this.filterPills = document.querySelectorAll('.filter-pill');
    this.playerModal = document.getElementById('game-player-modal');
    this.gameIframe = document.getElementById('game-iframe');
    this.playerTitle = document.getElementById('player-active-title');
    this.btnClosePlayer = document.getElementById('btn-close-player');
    this.btnFullscreen = document.getElementById('btn-fullscreen-player');
    this.btnNewTab = document.getElementById('btn-newtab-player');
    this.soundToggle = document.getElementById('portal-sound-toggle');
    this.soundIcon = document.getElementById('portal-sound-icon');
  }

  async init() {
    this.bindEvents();
    await this.fetchServerInfo();
    await this.fetchGames();
  }

  bindEvents() {
    // Unlock Audio Context on first click
    window.addEventListener('pointerdown', () => sfx.ensureContext(), { once: true });

    // Sound toggle
    if (this.soundToggle) {
      this.soundToggle.addEventListener('click', () => {
        sfx.enabled = !sfx.enabled;
        this.soundIcon.textContent = sfx.enabled ? '🔊' : '🔇';
      });
    }

    // Category filtering
    this.filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        sfx.playPop();
        this.filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.activeCategory = pill.dataset.category;
        this.renderGames();
      });
    });

    // In-portal game player close
    if (this.btnClosePlayer) {
      this.btnClosePlayer.addEventListener('click', () => {
        sfx.playPop();
        this.closeGamePlayer();
      });
    }

    // Fullscreen toggle
    if (this.btnFullscreen) {
      this.btnFullscreen.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          this.playerModal.requestFullscreen().catch(err => console.warn(err));
        } else {
          document.exitFullscreen();
        }
      });
    }

    // Open current game in new tab
    if (this.btnNewTab) {
      this.btnNewTab.addEventListener('click', () => {
        if (this.activeGame) {
          window.open(this.activeGame.path, '_blank');
        }
      });
    }

    // Escape key closes player
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.playerModal.classList.contains('active')) {
        this.closeGamePlayer();
      }
    });
  }

  async fetchServerInfo() {
    try {
      const res = await fetch('/api/info');
      const data = await res.json();
      if (data.networkUrl && this.ipDisplay) {
        this.ipDisplay.textContent = `Wi-Fi: ${data.networkUrl.replace('http://', '')}`;
      }
    } catch (e) {
      console.warn("Could not fetch server info:", e);
      if (this.ipDisplay) this.ipDisplay.textContent = 'Local Portal';
    }
  }

  async fetchGames() {
    try {
      const res = await fetch('/api/games');
      const data = await res.json();
      if (data.success && Array.isArray(data.games)) {
        this.games = data.games;
        this.renderGames();
      }
    } catch (e) {
      console.error("Error fetching games:", e);
      this.grid.innerHTML = `<div class="loading-spinner">Oops! Could not load games. Please refresh.</div>`;
    }
  }

  renderGames() {
    const filtered = this.activeCategory === 'all' 
      ? this.games 
      : this.games.filter(g => g.category === this.activeCategory);

    if (filtered.length === 0) {
      this.grid.innerHTML = `<div class="loading-spinner">No games found in this category! 🎈</div>`;
      return;
    }

    this.grid.innerHTML = filtered.map(game => `
      <article class="game-card" style="border-color: ${game.themeColor}40;">
        <div class="card-banner" style="background: ${game.gradient};">
          <div class="card-badges-row">
            <span class="age-badge">${game.age}</span>
            <span class="category-tag">${game.categoryLabel}</span>
          </div>
          <div class="banner-mascot">${game.mascot || game.icon}</div>
        </div>

        <div class="card-content">
          <h2 class="game-card-title">${game.title}</h2>
          <div class="game-card-subtitle">${game.subtitle || ''}</div>
          <p class="game-card-desc">${game.description}</p>

          <div class="card-footer">
            <button class="btn-play-game" data-id="${game.id}">
              <span>▶</span> PLAY NOW!
            </button>
            <button class="btn-tab-launch" data-id="${game.id}" title="Open in New Tab">
              ↗
            </button>
          </div>
        </div>
      </article>
    `).join('');

    // Attach play event listeners
    this.grid.querySelectorAll('.btn-play-game').forEach(btn => {
      btn.addEventListener('click', () => {
        const game = this.games.find(g => g.id === btn.dataset.id);
        if (game) this.launchGamePlayer(game);
      });
    });

    this.grid.querySelectorAll('.btn-tab-launch').forEach(btn => {
      btn.addEventListener('click', () => {
        const game = this.games.find(g => g.id === btn.dataset.id);
        if (game) window.open(game.path, '_blank');
      });
    });
  }

  launchGamePlayer(game) {
    sfx.playLaunch();
    this.activeGame = game;
    this.playerTitle.textContent = `${game.icon || '🎮'} ${game.title}`;
    this.gameIframe.src = game.path;
    this.playerModal.classList.add('active');
  }

  closeGamePlayer() {
    this.playerModal.classList.remove('active');
    this.gameIframe.src = 'about:blank';
    this.activeGame = null;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(err => console.warn(err));
    }
  }
}

// Start
window.addEventListener('DOMContentLoaded', () => {
  const app = new PortalApp();
  app.init();
});
