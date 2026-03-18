#!/usr/bin/env node
/**
 * Copy a sample image to all image paths referenced in cameraData.js
 * Run: node scripts/copy-sample-images.js
 */
const fs = require('fs');
const path = require('path');

const SAMPLE = '/Users/toolb/develop/atb.library/images/MM97S6HZ0XSAJ.info/스파이더맨 뒷면.png';
const PUBLIC = path.join(__dirname, '..', 'public');
const DATA_FILE = path.join(__dirname, '..', 'app', 'data', 'cameraData.js');

const content = fs.readFileSync(DATA_FILE, 'utf-8');
const srcRegex = /src:\s*'([^']+\.(jpg|png|jpeg|webp))'/g;
const paths = new Set();
let m;
while ((m = srcRegex.exec(content)) !== null) {
  paths.add(m[1]);
}

const sampleBuf = fs.readFileSync(SAMPLE);
let created = 0;
let existed = 0;

const sorted = [...paths].sort();
console.log(`Found ${sorted.length} unique image paths`);

for (const imgPath of sorted) {
  const fullPath = path.join(PUBLIC, imgPath);
  const dir = path.dirname(fullPath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (fs.existsSync(fullPath)) {
    existed++;
  } else {
    fs.copyFileSync(SAMPLE, fullPath);
    created++;
  }
}

console.log(`Created: ${created} files`);
console.log(`Already existed: ${existed} files`);
console.log(`Total: ${sorted.length}`);
