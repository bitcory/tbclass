#!/usr/bin/env node
/**
 * Add images arrays to entries that don't have them, then copy sample image.
 * Run: node scripts/add-missing-images.js
 */
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '..', 'app', 'data', 'cameraData.js');
const SAMPLE = '/Users/toolb/develop/atb.library/images/MM97S6HZ0XSAJ.info/스파이더맨 뒷면.png';
const PUBLIC = path.join(__dirname, '..', 'public');

let content = fs.readFileSync(DATA_FILE, 'utf-8');
const sampleBuf = fs.readFileSync(SAMPLE);

// Category folder mapping
const folderMap = {
  // style
  'isometric': 'style', 'low-poly': 'style', 'claymation': 'style', 'voxel-art': 'style',
  'flat-illustration': 'style', 'line-art': 'style', 'vector-art': 'style',
  'children-illustration': 'style', 'botanical-art': 'style',
  'expressionism': 'style', 'art-nouveau': 'style', 'art-deco': 'style',
  'baroque': 'style', 'renaissance': 'style', 'ukiyo-e': 'style',
  'pop-art': 'style', 'psychedelic': 'style', 'steampunk': 'style',
  'cyberpunk': 'style', 'biopunk': 'style', 'solarpunk': 'style',
  'retro-vintage': 'style', 'synthwave': 'style', 'maximalism': 'style',
  'manga': 'style', 'webtoon-style': 'style',
  'pixar-style': 'style', 'disney-style': 'style', 'ghibli-style': 'style',
  'chibi-style': 'style', 'kawaii-style': 'style',
  'funko-pop': 'style', 'blind-box': 'style', 'gashapon': 'style',
  'enamel-pin': 'style', 'knitted-doll': 'style', 'lego-style': 'style',
  'toy-photography': 'style', 'crystal-ball': 'style',
  'photorealism': 'style', 'cinematic': 'style', 'film-noir': 'style',
  'documentary': 'style', 'glitch-art': 'style', 'double-exposure': 'style',
  'pixel-art': 'style', 'papercraft': 'style', 'stained-glass': 'style',
  // practice/other
  'banana-magic': 'practice', 'hairstyles': 'practice',
  'chimpanzee-video': 'practice', 'hamster-video': 'practice',
  'crocodile-video': 'practice', 'veo-prompts': 'practice', 'team-assignments': 'practice',
  // library
  'blog-post-1': 'blog', 'blog-post-2': 'blog', 'blog-post-3': 'blog',
  // prompt-restaurant
  'prompt-recipe-1': 'restaurant', 'prompt-recipe-2': 'restaurant', 'prompt-recipe-3': 'restaurant',
  // toolb/aifi
  'aifi-tool': 'toolb', 'instructor-intro': 'toolb', 'intro-videos': 'toolb',
};

// Prompt templates per category
const promptTemplates = {
  style: (key, n) => {
    const name = key.replace(/-/g, ' ');
    const scenes = [
      `${name} artwork of a mystical forest scene, rich detailed composition, vibrant colors, professional illustration, highly detailed, masterpiece`,
      `${name} portrait of a young woman, artistic interpretation, creative composition, detailed rendering, beautiful atmosphere, gallery quality`,
      `${name} landscape of a coastal sunset, dramatic sky, artistic technique, rich color palette, detailed environment, stunning composition`,
      `${name} still life with flowers and vintage objects, artistic rendering, detailed textures, beautiful lighting, creative arrangement, fine art`,
    ];
    return scenes[n] || scenes[0];
  },
  practice: (key, n) => {
    const name = key.replace(/-/g, ' ');
    return `${name} practice exercise example ${n+1}, creative project demonstration, step-by-step visual guide, educational content, clear composition`;
  },
  blog: (key, n) => `blog post illustration ${n+1}, informative visual content, modern design, clean composition, editorial style, professional`,
  restaurant: (key, n) => `prompt recipe visual example ${n+1}, AI generated artwork demonstration, creative prompt result, high quality output, detailed`,
  toolb: (key, n) => `AI TOOLBEE feature demonstration ${n+1}, tool interface showcase, modern UI design, professional quality, informative visual`,
};

const entries = Object.keys(folderMap);
let added = 0;
let filesCreated = 0;

for (const key of entries) {
  const folder = folderMap[key];
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Find the entry in content
  const entryRe = new RegExp("'" + escaped + "'\\s*:\\s*\\{");
  const match = content.match(entryRe);
  if (!match) {
    console.log(`  SKIP: '${key}' not found`);
    continue;
  }

  const entryStart = content.indexOf(match[0]);
  // Check if already has images
  const rest = content.substring(entryStart + match[0].length);
  const nextEntryMatch = rest.match(/\n    '[^']+'\s*:\s*\{/);
  const entryEnd = nextEntryMatch ? entryStart + match[0].length + nextEntryMatch.index : entryStart + 5000;
  const section = content.substring(entryStart, entryEnd);

  if (/images:\s*\[/.test(section) && !/images:\s*\[\s*\]/.test(section)) {
    continue; // already has non-empty images
  }

  // Build 4 images
  const imgCount = 4;
  const imgs = [];
  for (let i = 0; i < imgCount; i++) {
    const src = `/images/guide/${folder}/${key}-${i+1}.jpg`;
    const caption = `${key.replace(/-/g, ' ')} example ${i+1}`;
    const getPrompt = promptTemplates[folder] || promptTemplates.style;
    const prompt = getPrompt(key, i).replace(/'/g, "\\'");
    imgs.push(`            { src: '${src}', caption: '${caption}', prompt: '${prompt}' }`);

    // Copy sample file
    const fullPath = path.join(PUBLIC, src);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    if (!fs.existsSync(fullPath)) {
      fs.copyFileSync(SAMPLE, fullPath);
      filesCreated++;
    }
  }

  const imagesBlock = `\n        images: [\n${imgs.join(',\n')}\n        ],`;

  // Insert images array - find a good insertion point
  // Strategy: insert before the closing } of the entry, or after description/usage/etc.
  if (/images:\s*\[\s*\]/.test(section)) {
    // Replace empty images array
    const emptyImagesStr = section.match(/images:\s*\[\s*\]/)[0];
    const pos = content.indexOf(emptyImagesStr, entryStart);
    content = content.substring(0, pos) + `images: [\n${imgs.join(',\n')}\n        ]` + content.substring(pos + emptyImagesStr.length);
  } else {
    // Find last property before entry end - insert before the closing brace
    // Find the closing `},` or `}` of this entry
    // Look for the pattern: newline + 4 spaces + '}' (entry closing brace)
    const closingMatch = section.match(/\n    \}/);
    if (closingMatch) {
      const insertPos = entryStart + closingMatch.index;
      // Add comma if needed
      const before = content.substring(insertPos - 1, insertPos);
      const comma = before === ',' || before === '[' || before === '{' ? '' : ',';
      content = content.substring(0, insertPos) + comma + imagesBlock + content.substring(insertPos);
    } else {
      console.log(`  WARN: Could not find closing brace for '${key}'`);
      continue;
    }
  }

  added++;
  console.log(`  ✓ ${key}: 4 images added (${folder}/)`);
}

fs.writeFileSync(DATA_FILE, content, 'utf-8');
console.log(`\nDone! Added images to ${added} entries, created ${filesCreated} files.`);
