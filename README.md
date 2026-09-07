# 🎮 Kids Game Arcade & Central Server

Welcome to the **Kids Game Arcade**! A unified web portal and local server designed to host and launch joyful, educational web games for children from a single place.

---

## 🚀 Quick Start

### 1. Start the Server
Open a terminal in this folder:
```bash
cd C:\Users\Dalai\dev\games\game-server
npm start
```

You'll see:
```text
╔════════════════════════════════════════════════════════════════╗
║          🌟 KIDS GAME PORTAL & SERVER IS LIVE! 🌟              ║
╚════════════════════════════════════════════════════════════════╝
  💻 PC / Local:    http://localhost:8080
  📱 iPad / Wi-Fi:  http://192.168.1.xxx:8080
  🎮 Total Games:   2 Ready to Play
```

### 2. Play on PC or iPad / Tablet
- **On this PC**: Open `http://localhost:8080` in Chrome, Edge, or Safari.
- **On iPads / Tablets / Phones**: Connect to the same home Wi-Fi and open `http://<your-ip>:8080`.

---

## 🌟 Included Games

| Game | Category | Target Age | Description |
| :--- | :--- | :--- | :--- |
| **Sparkle Academy** | 🍎 Math & Phonics | Age 5 - 7 | Fruit counting, early addition, gem memory matching, rainbow pattern bridges, phonics balloons, and pet dressing room! |
| **Cozy Cafe 3D** | ☕ 3D Worlds & Sim | Age 6+ | 3D cafe exploration as Latte the Latte! Grind espresso, steam milk, pet Mocha the cat, and play jukebox tunes! |

---

## 📦 How to Deploy a New Game

Whenever you create a new game, you can deploy it to the portal with a single command:

```bash
npm run deploy -- <path-to-your-game>
```

### Example:
```bash
npm run deploy -- C:\Users\Dalai\dev\games\my-new-game
```

### What `npm run deploy` does automatically:
1. Detects if your game has a build step (`npm run build` in Vite/Webpack) and compiles the production bundle.
2. Copies the game bundle to `public/games/<game-id>/`.
3. Ensures all asset paths are relative so the game works under `/games/<game-id>/` and inside iframes.
4. Registers or updates the game in `games.json`.
5. Makes it instantly playable in the Kids Arcade!

---

## 📁 Project Structure

```text
game-server/
├── server.js               # Express server with API and static routing
├── games.json              # Central game registry & metadata
├── package.json            # Server scripts and dependencies
├── scripts/
│   └── deploy.js           # Automated game build and deployment pipeline
├── public/                 # Kids Arcade Portal frontend
│   ├── index.html          # Arcade launcher shell
│   ├── portal.css          # Pastel arcade UI & responsive styling
│   ├── portal.js           # Game filter, Web Audio SFX, in-portal player
│   └── games/              # Deployed game distributions
│       ├── sparkle-academy/
│       └── cozy-cafe-3d/
└── tests/
    └── server.test.js      # Automated integration & Puppeteer UI test suite
```

---

## 🧪 Running Automated Tests

To test the server, API endpoints, and browser rendering:
```bash
npm test
```
