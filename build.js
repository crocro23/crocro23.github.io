#!/usr/bin/env node

import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

console.log('🏗️  Building microfolio...');

try {
  // Import vite programmatically and run the build using its JS API.
  // This avoids spawning package manager binaries (pnpm/npm/npx) and is more robust on Windows/CI.
  const { build } = await import('vite');

  // Call build() with no args so Vite loads vite.config.* from the project root.
  await build();

  console.log('✅ Build completed successfully!');
  console.log('💡 Tip: Run `pnpm run optimize-images` before build to generate optimized thumbnails');
  process.exit(0);
} catch (err) {
  console.error('❌ Build failed:');
  // show a useful error message
  if (err && err.stack) {
    console.error(err.stack);
  } else {
    console.error(err);
  }

  // Helpful hints
  console.error('\nPossible fixes:');
  console.error('- Ensure dependencies are installed: run `pnpm install` (do NOT run npm install after pnpm).');
  console.error('- Ensure vite is present in devDependencies in package.json.');
  console.error('- If you intentionally removed build.js, set "build": "vite build" in package.json and run `pnpm run build`.');
  process.exit(1);
}