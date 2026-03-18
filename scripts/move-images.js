const fs = require('fs');
const path = require('path');

// Define categories and their keys (extracted from guideData.js)
const categories = {
  medium: [
    'oil-painting', 'acrylic-painting', 'pencil-drawing', 'charcoal',
    'digital-photography', 'film-photography', 'polaroid', 'long-exposure',
    'collage', 'digital-collage', 'mixed-technique',
  ],
  camera: [
    // 샷 사이즈
    'extreme-closeup', 'closeup', 'medium-shot', 'cowboy-shot', 'full-shot', 'wide-shot', 'extreme-wide',
    // 카메라 앵글
    'eye-level', 'low-angle', 'high-angle', 'birds-eye', 'overhead', 'dutch-angle', 'worms-eye', 'ground-level',
    // 카메라 시점
    'side-view', 'back-view', 'three-quarter', 'rear-three-quarter',
    // 특수 샷
    'pov-shot', 'over-shoulder', 'two-shot', 'establishing', 'master-shot', 'insert-shot',
    // 구도
    'rule-of-thirds', 'center-comp', 'symmetrical', 'frame-in-frame', 'diagonal', 'layered', 'negative-space',
  ],
  lighting: [
    // 자연광
    'golden-hour', 'blue-hour', 'overcast', 'harsh-sunlight',
    // 스튜디오 조명
    'rembrandt', 'butterfly', 'split-lighting', 'rim-lighting',
    // 분위기 조명
    'neon-lights', 'candlelight', 'moonlight', 'firelight',
  ],
};

const baseDir = path.join(__dirname, '..', 'public', 'images', 'guide');
const sourceDir = path.join(baseDir, 'style');

let movedCount = 0;
let alreadyCount = 0;
let notFoundCount = 0;

for (const [category, keys] of Object.entries(categories)) {
  const targetDir = path.join(baseDir, category);

  // Ensure target directory exists
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log(`Created directory: ${category}/`);
  }

  for (const key of keys) {
    const filename = `${key}-1.jpg`;
    const sourcePath = path.join(sourceDir, filename);
    const targetPath = path.join(targetDir, filename);

    if (fs.existsSync(sourcePath)) {
      if (fs.existsSync(targetPath)) {
        // Target already has the file - check if same size
        const srcStat = fs.statSync(sourcePath);
        const tgtStat = fs.statSync(targetPath);
        if (srcStat.size === tgtStat.size) {
          console.log(`  [SKIP-DUP] ${filename} already exists in ${category}/ (same size ${srcStat.size}), removing from style/`);
          fs.unlinkSync(sourcePath);
          alreadyCount++;
        } else {
          console.log(`  [OVERWRITE] ${filename} -> ${category}/ (src: ${srcStat.size}, tgt: ${tgtStat.size})`);
          fs.renameSync(sourcePath, targetPath);
          movedCount++;
        }
      } else {
        fs.renameSync(sourcePath, targetPath);
        console.log(`  [MOVED] ${filename} -> ${category}/`);
        movedCount++;
      }
    } else {
      // Check if it's already in the target
      if (fs.existsSync(targetPath)) {
        console.log(`  [OK] ${filename} already in ${category}/`);
        alreadyCount++;
      } else {
        console.log(`  [NOT FOUND] ${filename} not in style/ or ${category}/`);
        notFoundCount++;
      }
    }
  }
}

console.log(`\n--- Summary ---`);
console.log(`Moved:      ${movedCount}`);
console.log(`Already OK: ${alreadyCount}`);
console.log(`Not found:  ${notFoundCount}`);
