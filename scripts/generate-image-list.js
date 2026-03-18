#!/usr/bin/env node
/**
 * Generate IMAGE-LIST.md reference from cameraData.js
 * Parses the file directly with regex (no ES module import needed)
 * Run: node scripts/generate-image-list.js
 */

const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '..', 'app', 'data', 'cameraData.js');
const OUTPUT = path.join(__dirname, '..', 'public', 'images', 'guide', 'IMAGE-LIST.md');

const content = fs.readFileSync(DATA_FILE, 'utf-8');

// Category definitions (mirrors guideData.js)
const categories = [
  { id: 'toolb', name: 'TOOLB', items: ['instructor-intro', 'instructor-reviews', 'intro-videos'] },
  { id: 'camera', name: '카메라 (Camera)', items: [
    'extreme-closeup','closeup','medium-shot','cowboy-shot','full-shot','wide-shot','extreme-wide',
    'eye-level','low-angle','high-angle','birds-eye','overhead','dutch-angle','worms-eye','ground-level',
    'side-view','back-view','three-quarter','rear-three-quarter',
    'pov-shot','over-shoulder','two-shot','establishing','master-shot','insert-shot',
    'rule-of-thirds','center-comp','symmetrical','frame-in-frame','diagonal','layered','negative-space'
  ]},
  { id: 'lighting', name: '조명 (Lighting)', items: [
    'golden-hour','blue-hour','overcast','harsh-sunlight',
    'rembrandt','butterfly','split-lighting','rim-lighting',
    'neon-lights','candlelight','moonlight','firelight'
  ]},
  { id: 'style', name: '스타일 (Style)', items: [
    'digital-painting','concept-art','matte-painting',
    '3d-render','isometric','low-poly','claymation','voxel-art',
    'flat-illustration','line-art','vector-art','children-illustration','botanical-art',
    'watercolor','impressionism','expressionism','surrealism','art-nouveau','art-deco','baroque','renaissance','ukiyo-e',
    'pop-art','psychedelic','steampunk','cyberpunk','biopunk','solarpunk','retro-vintage','synthwave','minimalism','maximalism',
    'anime-style','manga','cartoon-style','comic-book','webtoon-style',
    'pixar-style','disney-style','ghibli-style','chibi-style','kawaii-style',
    'funko-pop','blind-box','gashapon','enamel-pin','knitted-doll','lego-style','toy-photography','crystal-ball',
    'photorealism','photorealistic','hyperrealistic','cinematic','film-noir','documentary',
    'glitch-art','double-exposure','pixel-art','papercraft','stained-glass'
  ]},
  { id: 'medium', name: '매체 (Medium)', items: [
    'oil-painting','acrylic-painting','pencil-drawing','charcoal',
    'digital-photography','film-photography','polaroid','long-exposure',
    'collage','digital-collage','mixed-technique'
  ]},
  { id: 'video', name: '영상 (Video)', items: [
    'pan','tilt','dolly','tracking','crane','handheld',
    'cut','fade','dissolve','wipe','match-cut',
    'slow-motion','time-lapse','freeze-frame','motion-blur'
  ]},
  { id: 'aifi', name: 'AIFI 도구', items: [
    'aifi-image-generator','aifi-prompt-extractor','aifi-image-variator','aifi-video-prompt',
    'instructor-profile'
  ]},
];

// Parse entries from the JS file
function parseEntry(key) {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`'${escaped}'\\s*:\\s*\\{`);
  const match = content.match(pattern);
  if (!match) return null;

  const start = content.indexOf(match[0]);
  // Find next top-level entry to limit search scope
  const nextEntryMatch = content.substring(start + match[0].length).match(/\n\s{4}'[^']+'\s*:\s*\{/);
  const endBound = nextEntryMatch ? start + match[0].length + nextEntryMatch.index : start + 5000;
  const section = content.substring(start, endBound);

  // Extract title
  const titleMatch = section.match(/title:\s*'([^']*)'/);
  const koreanTitleMatch = section.match(/koreanTitle:\s*'([^']*)'/);
  const title = koreanTitleMatch ? koreanTitleMatch[1] : (titleMatch ? titleMatch[1] : key);

  // Extract images
  const imagesIdx = section.indexOf('images:');
  if (imagesIdx === -1) return null;

  const imagesSection = section.substring(imagesIdx);
  const bracketEnd = findBracket(imagesSection, imagesSection.indexOf('['));
  if (bracketEnd === -1) return null;

  const imagesStr = imagesSection.substring(0, bracketEnd + 1);
  const imgRegex = /src:\s*'([^']+)'.*?caption:\s*'([^']*)'(?:.*?prompt:\s*'([^']*)')?/g;
  const images = [];
  let m;
  while ((m = imgRegex.exec(imagesStr)) !== null) {
    images.push({ src: m[1], caption: m[2], prompt: m[3] || '' });
  }

  return { key, title, images };
}

function findBracket(str, openPos) {
  let depth = 0;
  for (let i = openPos; i < str.length; i++) {
    if (str[i] === '[') depth++;
    if (str[i] === ']') { depth--; if (depth === 0) return i; }
  }
  return -1;
}

// Generate markdown
let md = `# AI TOOLBEE GUIDE — 이미지 & 프롬프트 레퍼런스

> 자동 생성 파일 — \`node scripts/generate-image-list.js\` 로 재생성
> 생성일: ${new Date().toISOString().split('T')[0]}

`;

let totalImages = 0;

for (const cat of categories) {
  const entries = cat.items.map(k => parseEntry(k)).filter(e => e && e.images.length > 0);
  if (entries.length === 0) continue;

  md += `## ${cat.name}\n\n`;

  for (const entry of entries) {
    md += `### ${entry.key} — ${entry.title}\n`;
    md += `| # | 파일명 | 프롬프트 |\n`;
    md += `|---|--------|--------|\n`;

    entry.images.forEach((img, idx) => {
      const filename = img.src.replace('/images/guide/', '').replace('/images/', '');
      const prompt = (img.prompt || img.caption).replace(/\|/g, '\\|');
      md += `| ${idx + 1} | ${filename} | ${prompt} |\n`;
      totalImages++;
    });
    md += `\n`;
  }
}

md += `---\n\n총 이미지 수: **${totalImages}**\n`;

const outputDir = path.dirname(OUTPUT);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(OUTPUT, md, 'utf-8');
console.log(`Generated: ${OUTPUT}`);
console.log(`Total images documented: ${totalImages}`);
