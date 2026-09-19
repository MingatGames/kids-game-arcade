# AGENTS.md — Developer & Coding Agent Guide for Kids Game Arcade 🎮

This document instructs AI coding agents on how to maintain, test, and run **Kids Game Arcade**.

---

## 1. Project Overview

- **Title**: Kids Game Arcade & Central Server
- **Role**: Central LAN server & kid-safe arcade portal for local devices (PC, iPad, tablets)
- **Tech Stack**: Express.js, Vanilla HTML5/CSS3, Web Audio API
- **Parent Organization**: [Mingat Games](https://github.com/MingatGames)

---

## 2. Development & Test Commands

```bash
# Install dependencies
npm install

# Start local arcade server (port 8080)
npm start

# Run automated tests
npm test

# Deploy a sibling game to the local arcade
npm run deploy -- <path-to-game>
```

---

## 3. Synchronization with MingatGames Showcase

- The static live builds are published at `https://mingatgames.github.io`.
- When updating games, also update `games.json` in this arcade if hosting them locally on home Wi-Fi.
