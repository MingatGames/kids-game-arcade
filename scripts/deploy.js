/**
 * Automated Game Deployment Script for Kids Game Portal
 * 
 * Usage:
 *   node scripts/deploy.js                      # Re-deploys all games listed in games.json
 *   node scripts/deploy.js <path-to-game-dir>   # Deploys a new game from any folder
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicGamesDir = path.join(rootDir, 'public', 'games');
const gamesJsonPath = path.join(rootDir, 'games.json');

// Ensure destination games folder exists
if (!fs.existsSync(publicGamesDir)) {
  fs.mkdirSync(publicGamesDir, { recursive: true });
}

export function resolveGameSource(sourcePath) {
  if (!sourcePath) return null;

  // 1. Check relative to rootDir
  const resolvedFromRoot = path.resolve(rootDir, sourcePath);
  if (fs.existsSync(resolvedFromRoot)) {
    return resolvedFromRoot;
  }

  // 2. Check relative to process.cwd()
  const resolvedFromCwd = path.resolve(process.cwd(), sourcePath);
  if (fs.existsSync(resolvedFromCwd)) {
    return resolvedFromCwd;
  }

  // 3. Fallback for Windows-style paths (e.g. C:\Users\... or contains backslashes)
  const normalized = sourcePath.replace(/\\/g, '/');
  const baseName = path.basename(normalized);

  // Check sibling in parent directory: ../<baseName>
  const siblingInParent = path.resolve(rootDir, '..', baseName);
  if (fs.existsSync(siblingInParent)) {
    return siblingInParent;
  }

  // Also check if baseName has aliases (e.g. cozy-cafe-3d -> cozy-cafe)
  const trimmedName = baseName.replace(/-3d$/i, '');
  const siblingTrimmed = path.resolve(rootDir, '..', trimmedName);
  if (fs.existsSync(siblingTrimmed)) {
    return siblingTrimmed;
  }

  return null;
}

function loadGamesRegistry() {
  if (fs.existsSync(gamesJsonPath)) {
    try {
      return JSON.parse(fs.readFileSync(gamesJsonPath, 'utf8'));
    } catch (e) {
      console.warn("Warning: Could not parse games.json, starting fresh.");
    }
  }
  return [];
}

function saveGamesRegistry(registry) {
  fs.writeFileSync(gamesJsonPath, JSON.stringify(registry, null, 2), 'utf8');
}

export function deployGame(sourceDir, metadata = {}) {
  const resolvedSource = resolveGameSource(sourceDir);
  if (!resolvedSource) {
    throw new Error(`Source game directory does not exist: ${sourceDir}`);
  }

  // Determine game ID
  const gameId = metadata.id || path.basename(resolvedSource).toLowerCase().replace(/[^a-z0-9_-]/g, '-');
  const targetDir = path.join(publicGamesDir, gameId);

  console.log(`\n========================================`);
  console.log(`📦 Deploying: ${metadata.title || gameId}`);
  console.log(`   Source: ${resolvedSource}`);
  console.log(`   Target: ${targetDir}`);
  console.log(`========================================`);

  // Check if target game has a build step in package.json
  const gamePkgPath = path.join(resolvedSource, 'package.json');
  let buildOutDir = resolvedSource;

  if (fs.existsSync(gamePkgPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(gamePkgPath, 'utf8'));
      if (pkg.scripts && pkg.scripts.build) {
        // Ensure node_modules exists before building
        const nodeModulesDir = path.join(resolvedSource, 'node_modules');
        if (!fs.existsSync(nodeModulesDir)) {
          console.log(`📦 Installing dependencies in ${resolvedSource} ...`);
          execSync('npm install', { cwd: resolvedSource, stdio: 'inherit' });
        }

        console.log(`🔨 Running build step: npm run build in ${resolvedSource} ...`);
        execSync('npm run build', { cwd: resolvedSource, stdio: 'inherit' });

        const potentialDist = path.join(resolvedSource, 'dist');
        if (fs.existsSync(potentialDist)) {
          buildOutDir = potentialDist;
          console.log(`✨ Found built distribution in: ${buildOutDir}`);
        }
      }
    } catch (e) {
      console.error(`❌ Build failed in ${resolvedSource}: ${e.message}`);
      const potentialDist = path.join(resolvedSource, 'dist');
      if (fs.existsSync(potentialDist)) {
        console.log(`⚠️ Using existing pre-built dist: ${potentialDist}`);
        buildOutDir = potentialDist;
      } else {
        throw new Error(`Build failed for ${metadata.title || gameId} and no distribution directory exists.`);
      }
    }
  }

  // Clean target directory if exists
  if (fs.existsSync(targetDir)) {
    fs.rmSync(targetDir, { recursive: true, force: true });
  }
  fs.mkdirSync(targetDir, { recursive: true });

  // Copy files to public/games/<gameId>/
  console.log(`📂 Copying game assets to ${targetDir} ...`);
  fs.cpSync(buildOutDir, targetDir, {
    recursive: true,
    filter: (src) => {
      // Exclude development clutter
      const base = path.basename(src);
      return base !== 'node_modules' && base !== '.git' && base !== '.vscode';
    }
  });

  // Verify index.html exists in target
  const targetIndex = path.join(targetDir, 'index.html');
  if (!fs.existsSync(targetIndex)) {
    console.warn(`⚠️ Warning: No index.html found at ${targetIndex}!`);
  } else {
    // Ensure relative paths work if assets were built with leading slash
    let htmlContent = fs.readFileSync(targetIndex, 'utf8');
    // Replace "/assets/" with "assets/" or "./assets/" if needed
    let patched = false;
    if (htmlContent.includes('href="/assets/')) {
      htmlContent = htmlContent.replaceAll('href="/assets/', 'href="./assets/');
      patched = true;
    }
    if (htmlContent.includes('src="/assets/')) {
      htmlContent = htmlContent.replaceAll('src="/assets/', 'src="./assets/');
      patched = true;
    }
    if (htmlContent.includes('src="/src/')) {
      htmlContent = htmlContent.replaceAll('src="/src/', 'src="./src/');
      patched = true;
    }
    if (patched) {
      fs.writeFileSync(targetIndex, htmlContent, 'utf8');
      console.log(`🔧 Patched asset links in index.html to be relative.`);
    }
  }

  // Store portable relative path in games.json
  const relativePath = path.relative(rootDir, resolvedSource).replace(/\\/g, '/');
  const portableSourcePath = relativePath.startsWith('.') ? relativePath : `./${relativePath}`;

  // Update games.json registry
  const registry = loadGamesRegistry();
  const existingIdx = registry.findIndex(g => g.id === gameId);
  const entry = {
    id: gameId,
    title: metadata.title || (existingIdx >= 0 ? registry[existingIdx].title : gameId),
    subtitle: metadata.subtitle || (existingIdx >= 0 ? registry[existingIdx].subtitle : ''),
    icon: metadata.icon || (existingIdx >= 0 ? registry[existingIdx].icon : '🎮'),
    mascot: metadata.mascot || (existingIdx >= 0 ? registry[existingIdx].mascot : '🌟'),
    age: metadata.age || (existingIdx >= 0 ? registry[existingIdx].age : 'Age 6+'),
    category: metadata.category || (existingIdx >= 0 ? registry[existingIdx].category : 'arcade'),
    categoryLabel: metadata.categoryLabel || (existingIdx >= 0 ? registry[existingIdx].categoryLabel : '🎮 Fun Arcade'),
    themeColor: metadata.themeColor || (existingIdx >= 0 ? registry[existingIdx].themeColor : '#4cc9f0'),
    gradient: metadata.gradient || (existingIdx >= 0 ? registry[existingIdx].gradient : 'linear-gradient(135deg, #a0c4ff 0%, #cbf3f0 100%)'),
    description: metadata.description || (existingIdx >= 0 ? registry[existingIdx].description : 'A fun game for kids!'),
    path: `/games/${gameId}/`,
    sourcePath: portableSourcePath,
    controls: metadata.controls || (existingIdx >= 0 ? registry[existingIdx].controls : 'Touch / Mouse'),
    featured: metadata.featured ?? (existingIdx >= 0 ? registry[existingIdx].featured : true),
    lastDeployed: new Date().toISOString()
  };

  if (existingIdx >= 0) {
    registry[existingIdx] = { ...registry[existingIdx], ...entry };
  } else {
    registry.push(entry);
  }

  saveGamesRegistry(registry);
  console.log(`✅ Successfully deployed "${entry.title}" to ${entry.path}!`);
  return entry;
}

// CLI Execution
const args = process.argv.slice(2);
if (args.length > 0) {
  const sourceArg = args[0];
  deployGame(sourceArg);
} else {
  // Batch deploy all games in games.json
  const registry = loadGamesRegistry();
  console.log(`Found ${registry.length} registered games in games.json to deploy...`);
  for (const game of registry) {
    const resolved = resolveGameSource(game.sourcePath);
    if (resolved) {
      try {
        deployGame(resolved, game);
      } catch (err) {
        console.error(`Failed to deploy ${game.title}:`, err.message);
      }
    } else {
      console.warn(`Source path not found for ${game.title}: ${game.sourcePath}`);
    }
  }
  console.log(`\n🎉 All games deployed successfully!`);
}
