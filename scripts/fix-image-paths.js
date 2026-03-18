#!/usr/bin/env node
/**
 * Fix mismatched image src paths in cameraData.js
 * Each entry's images should use paths like: /images/guide/{folder}/{entry-key}-{n}.jpg
 * Run: node scripts/fix-image-paths.js
 */
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '..', 'app', 'data', 'cameraData.js');
const PUBLIC = path.join(__dirname, '..', 'public');
const SAMPLE = '/Users/toolb/develop/atb.library/images/MM97S6HZ0XSAJ.info/스파이더맨 뒷면.png';

// Build entry → folder mapping from guideData categories
const categoryFolderMap = {
  toolb: ['instructor-intro', 'instructor-reviews', 'intro-videos', 'aifi-tool', 'instructor-profile',
          'aifi-image-generator', 'aifi-prompt-extractor', 'aifi-image-variator', 'aifi-video-prompt'],
  style: [
    'digital-painting', 'concept-art', 'matte-painting',
    '3d-render', 'isometric', 'low-poly', 'claymation', 'voxel-art',
    'flat-illustration', 'line-art', 'vector-art', 'children-illustration', 'botanical-art',
    'watercolor', 'impressionism', 'expressionism', 'surrealism', 'art-nouveau', 'art-deco',
    'baroque', 'renaissance', 'ukiyo-e',
    'pop-art', 'psychedelic', 'steampunk', 'cyberpunk', 'biopunk', 'solarpunk',
    'retro-vintage', 'synthwave', 'minimalism', 'maximalism',
    'anime-style', 'manga', 'cartoon-style', 'comic-book', 'webtoon-style',
    'pixar-style', 'disney-style', 'ghibli-style', 'chibi-style', 'kawaii-style',
    'funko-pop', 'blind-box', 'gashapon', 'enamel-pin', 'knitted-doll', 'lego-style',
    'toy-photography', 'crystal-ball',
    'photorealism', 'cinematic', 'film-noir', 'documentary',
    'glitch-art', 'double-exposure', 'pixel-art', 'papercraft', 'stained-glass',
    'hyperrealistic', 'photorealistic',
  ],
  medium: [
    'oil-painting', 'acrylic-painting', 'pencil-drawing', 'charcoal',
    'digital-photography', 'film-photography', 'polaroid', 'long-exposure',
    'collage', 'digital-collage', 'mixed-technique',
  ],
  camera: [
    'extreme-closeup', 'closeup', 'medium-shot', 'cowboy-shot', 'full-shot', 'wide-shot', 'extreme-wide',
    'eye-level', 'low-angle', 'high-angle', 'birds-eye', 'overhead', 'dutch-angle', 'worms-eye', 'ground-level',
    'side-view', 'back-view', 'three-quarter', 'rear-three-quarter',
    'pov-shot', 'over-shoulder', 'two-shot', 'establishing', 'master-shot', 'insert-shot',
    'rule-of-thirds', 'center-comp', 'symmetrical', 'frame-in-frame', 'diagonal', 'layered', 'negative-space',
  ],
  lighting: [
    'golden-hour', 'blue-hour', 'overcast', 'harsh-sunlight',
    'rembrandt', 'butterfly', 'split-lighting', 'rim-lighting',
    'neon-lights', 'candlelight', 'moonlight', 'firelight',
  ],
  video: [
    'pan', 'tilt', 'dolly', 'tracking', 'crane', 'handheld',
    'cut', 'fade', 'dissolve', 'wipe', 'match-cut',
    'slow-motion', 'time-lapse', 'freeze-frame', 'motion-blur',
  ],
  practice: [
    'banana-magic', 'hairstyles', 'chimpanzee-video', 'hamster-video',
    'crocodile-video', 'veo-prompts', 'team-assignments',
  ],
  blog: ['blog-post-1', 'blog-post-2', 'blog-post-3'],
  restaurant: ['prompt-recipe-1', 'prompt-recipe-2', 'prompt-recipe-3'],
};

// Reverse map: entry key → folder
const entryToFolder = {};
for (const [folder, entries] of Object.entries(categoryFolderMap)) {
  for (const key of entries) {
    entryToFolder[key] = folder;
  }
}

// Custom entries that should NOT be touched (non-standard filenames)
const skipEntries = new Set([
  'instructor-reviews', // Uses gang1.jpg, gang2.jpg, etc.
]);

let content = fs.readFileSync(DATA_FILE, 'utf-8');
let fixCount = 0;
let filesCopied = 0;

// Find all entries with images arrays
const entryRegex = /^\s{4}'([^']+)'\s*:\s*\{/gm;
let entryMatch;

while ((entryMatch = entryRegex.exec(content)) !== null) {
  const key = entryMatch[1];
  if (skipEntries.has(key)) continue;

  const folder = entryToFolder[key];
  if (!folder) continue; // Unknown entry, skip

  const entryStart = entryMatch.index;

  // Find entry boundary
  const afterEntry = content.substring(entryStart + entryMatch[0].length);
  const nextEntryMatch = afterEntry.match(/\n    '[^']+'\s*:\s*\{/);
  const entryEnd = nextEntryMatch
    ? entryStart + entryMatch[0].length + nextEntryMatch.index
    : entryStart + 10000;
  const section = content.substring(entryStart, entryEnd);

  // Check if has images array
  if (!/images:\s*\[/.test(section)) continue;

  // Find all src paths in this entry's images
  const srcRegex = /src:\s*'([^']+)'/g;
  let srcMatch;
  let imageIndex = 0;

  while ((srcMatch = srcRegex.exec(section)) !== null) {
    imageIndex++;
    const currentSrc = srcMatch[1];
    const expectedSrc = `/images/guide/${folder}/${key}-${imageIndex}.jpg`;

    if (currentSrc !== expectedSrc) {
      // Replace in content
      const fullMatch = `src: '${currentSrc}'`;
      const replacement = `src: '${expectedSrc}'`;
      const pos = content.indexOf(fullMatch, entryStart);
      if (pos !== -1 && pos < entryEnd) {
        content = content.substring(0, pos) + replacement + content.substring(pos + fullMatch.length);
        // Adjust entryEnd if lengths differ
        fixCount++;
        console.log(`  FIX ${key}[${imageIndex}]: ${currentSrc} → ${expectedSrc}`);

        // Ensure the file exists
        const fullPath = path.join(PUBLIC, expectedSrc);
        const dir = path.dirname(fullPath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        if (!fs.existsSync(fullPath)) {
          try {
            const sampleBuf = fs.readFileSync(SAMPLE);
            fs.writeFileSync(fullPath, sampleBuf);
            filesCopied++;
          } catch (e) {
            console.log(`    WARN: Could not copy sample to ${expectedSrc}`);
          }
        }
      }
    }
  }
}

fs.writeFileSync(DATA_FILE, content, 'utf-8');
console.log(`\nDone! Fixed ${fixCount} image paths, copied ${filesCopied} sample files.`);
