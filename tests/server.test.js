/**
 * Kids Game Portal Server: Automated Integration & UI Test Suite
 */

import http from 'http';
import path from 'path';
import fs from 'fs';
import puppeteer from 'puppeteer';
import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const app = express();
app.use(cors());
app.use(express.json());

const gamesJsonPath = path.join(rootDir, 'games.json');
const publicDir = path.join(rootDir, 'public');
const gamesDir = path.join(publicDir, 'games');

app.get('/api/games', (req, res) => {
  const games = JSON.parse(fs.readFileSync(gamesJsonPath, 'utf8'));
  res.json({ success: true, total: games.length, games });
});

app.get('/api/info', (req, res) => {
  res.json({
    name: "Kids Game Portal Server",
    networkUrl: "http://192.168.1.100:8080"
  });
});

app.use('/games', express.static(gamesDir));
app.use(express.static(publicDir));

async function runTests() {
  console.log("Starting test server on port 8089...");
  const server = http.createServer(app);
  await new Promise(resolve => server.listen(8089, resolve));
  const baseUrl = 'http://localhost:8089';

  console.log(`Test server running at ${baseUrl}`);

  // Test 1: Verify API /api/games
  console.log("Testing GET /api/games ...");
  const gamesRes = await fetch(`${baseUrl}/api/games`);
  const gamesData = await gamesRes.json();
  if (!gamesData.success || gamesData.games.length < 2) {
    throw new Error(`Expected at least 2 games in /api/games, got ${gamesData.games?.length}`);
  }
  console.log(`✅ /api/games returned ${gamesData.games.length} games.`);

  // Test 2: Verify Sparkle Academy game files
  console.log("Testing GET /games/sparkle-academy/index.html ...");
  const sparkleRes = await fetch(`${baseUrl}/games/sparkle-academy/index.html`);
  const sparkleHtml = await sparkleRes.text();
  if (sparkleRes.status !== 200 || !sparkleHtml.includes('Sparkle Academy')) {
    throw new Error("Failed to load /games/sparkle-academy/index.html");
  }
  console.log("✅ Sparkle Academy deployed and serving cleanly!");

  // Test 3: Verify Cozy Cafe 3D game files
  console.log("Testing GET /games/cozy-cafe-3d/index.html ...");
  const cafeRes = await fetch(`${baseUrl}/games/cozy-cafe-3d/index.html`);
  const cafeHtml = await cafeRes.text();
  if (cafeRes.status !== 200 || !cafeHtml.includes('Cozy Cafe 3D')) {
    throw new Error("Failed to load /games/cozy-cafe-3d/index.html");
  }
  console.log("✅ Cozy Cafe 3D deployed and serving cleanly!");

  // Test 4: Headless Browser Verification with Puppeteer
  console.log("Launching headless browser to test Portal UI...");
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--enable-webgl', '--ignore-gpu-blocklist']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(`[CONSOLE ERROR]: ${msg.text()}`);
  });
  page.on('pageerror', err => errors.push(`[PAGE ERROR]: ${err.toString()}`));

  console.log(`Navigating to ${baseUrl} ...`);
  await page.goto(baseUrl, { waitUntil: 'networkidle2' });

  // Verify Portal Title
  await page.waitForSelector('.portal-title', { timeout: 4000 });
  const cards = await page.$$('.game-card');
  console.log(`Portal loaded with ${cards.length} game cards!`);
  if (cards.length < 2) {
    throw new Error(`Expected at least 2 game cards on portal, found ${cards.length}`);
  }

  // Capture Portal Overview Screenshot
  await page.screenshot({ path: path.join(rootDir, 'portal_overview_verified.png') });
  console.log("Saved screenshot: portal_overview_verified.png");

  // Test Category Filter
  console.log("Testing filter: Math & Phonics...");
  await page.click('.filter-pill[data-category="math"]');
  await new Promise(r => setTimeout(r, 400));
  const mathCards = await page.$$('.game-card');
  if (mathCards.length !== 1) {
    throw new Error(`Expected 1 math card after filter, got ${mathCards.length}`);
  }
  console.log("✅ Category filtering works!");

  // Reset to all
  await page.click('.filter-pill[data-category="all"]');
  await new Promise(r => setTimeout(r, 400));

  // Test In-Portal Game Player
  console.log("Testing Play Now launcher overlay...");
  const playBtn = await page.$('.btn-play-game[data-id="sparkle-academy"]');
  if (playBtn) {
    await playBtn.click();
    await page.waitForSelector('#game-player-modal.active', { timeout: 4000 });
    console.log("In-portal game frame opened successfully!");

    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(rootDir, 'portal_player_verified.png') });
    console.log("Saved screenshot: portal_player_verified.png");

    // Click back to arcade
    await page.click('#btn-close-player');
    await new Promise(r => setTimeout(r, 400));
    const isClosed = await page.$eval('#game-player-modal', el => !el.classList.contains('active'));
    if (!isClosed) {
      throw new Error("Player modal did not close properly");
    }
    console.log("✅ Back to arcade button works!");
  }

  if (errors.length > 0) {
    console.error("Browser errors encountered:", errors);
    throw new Error(`Test failed with ${errors.length} browser errors`);
  }

  console.log("\n>>> ALL PORTAL SERVER TESTS PASSED WITH 0 ERRORS! 🎮🌟 <<<");
  await browser.close();
  server.close();
  process.exit(0);
}

runTests().catch(err => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
