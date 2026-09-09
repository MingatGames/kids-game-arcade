/**
 * Kids Game Portal & Multi-Game Express Server
 */

import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import os from 'os';
import { fileURLToPath } from 'url';
import { deployGame } from './scripts/deploy.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;
const gamesJsonPath = path.join(__dirname, 'games.json');
const publicDir = path.join(__dirname, 'public');
const gamesDir = path.join(publicDir, 'games');

// Middleware
app.use(cors());
app.use(express.json());

// Helper: Get local network IPv4 address for iPad/Tablet connectivity
function getLocalNetworkIp() {
  const interfaces = os.networkInterfaces();
  const preferred = [];
  const fallback = [];

  for (const name of Object.keys(interfaces)) {
    const isVirtual = /^(docker|br-|veth|virbr|tun|tap|wg|lo)/i.test(name);
    for (const net of interfaces[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        if (!isVirtual) {
          preferred.push(net.address);
        } else {
          fallback.push(net.address);
        }
      }
    }
  }
  return preferred[0] || fallback[0] || 'localhost';
}

// Read games registry
function getGames() {
  if (fs.existsSync(gamesJsonPath)) {
    try {
      return JSON.parse(fs.readFileSync(gamesJsonPath, 'utf8'));
    } catch (e) {
      console.error("Error reading games.json:", e);
    }
  }
  return [];
}

// API: List all available games
app.get('/api/games', (req, res) => {
  const games = getGames();
  res.json({
    success: true,
    total: games.length,
    games
  });
});

// API: Server info & connectivity
app.get('/api/info', (req, res) => {
  const ip = getLocalNetworkIp();
  const games = getGames();
  res.json({
    name: "Kids Game Portal Server",
    version: "1.0.0",
    port: PORT,
    localUrl: `http://localhost:${PORT}`,
    networkUrl: `http://${ip}:${PORT}`,
    gamesCount: games.length
  });
});

// API: Deploy new game dynamically
app.post('/api/deploy', (req, res) => {
  const { sourcePath, metadata } = req.body;
  if (!sourcePath) {
    return res.status(400).json({ success: false, error: 'sourcePath is required' });
  }

  try {
    const deployed = deployGame(sourcePath, metadata || {});
    res.json({
      success: true,
      message: `Deployed ${deployed.title}`,
      game: deployed
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Serve deployed games statically
app.use('/games', express.static(gamesDir));

// Serve portal frontend
app.use(express.static(publicDir));

// Fallback to portal index.html for client-side routing
app.get('*', (req, res) => {
  if (req.path.startsWith('/games/')) {
    // If a game route was not found in static files
    return res.status(404).send('Game not found or not yet deployed.');
  }
  res.sendFile(path.join(publicDir, 'index.html'));
});

// Start Server
app.listen(PORT, '0.0.0.0', () => {
  const localIp = getLocalNetworkIp();
  const games = getGames();

  console.log(`\n`);
  console.log(`╔════════════════════════════════════════════════════════════════╗`);
  console.log(`║          🌟 KIDS GAME PORTAL & SERVER IS LIVE! 🌟              ║`);
  console.log(`╚════════════════════════════════════════════════════════════════╝`);
  console.log(`  💻 PC / Local:    http://localhost:${PORT}`);
  console.log(`  📱 iPad / Wi-Fi:  http://${localIp}:${PORT}`);
  console.log(`  🎮 Total Games:   ${games.length} Ready to Play`);
  console.log(`──────────────────────────────────────────────────────────────────\n`);
});
