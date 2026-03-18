#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'app', 'data', 'cameraData.js'), 'utf-8');

// All items from guideData categories
const allItems = [
  // toolb
  'instructor-intro', 'instructor-reviews', 'intro-videos',
  // style
  'digital-painting','concept-art','matte-painting',
  '3d-render','isometric','low-poly','claymation','voxel-art',
  'flat-illustration','line-art','vector-art','children-illustration','botanical-art',
  'watercolor','impressionism','expressionism','surrealism','art-nouveau','art-deco','baroque','renaissance','ukiyo-e',
  'pop-art','psychedelic','steampunk','cyberpunk','biopunk','solarpunk','retro-vintage','synthwave','minimalism','maximalism',
  'anime-style','manga','cartoon-style','comic-book','webtoon-style',
  'pixar-style','disney-style','ghibli-style','chibi-style','kawaii-style',
  'funko-pop','blind-box','gashapon','enamel-pin','knitted-doll','lego-style','toy-photography','crystal-ball',
  'photorealism','cinematic','film-noir','documentary',
  'glitch-art','double-exposure','pixel-art','papercraft','stained-glass',
  'hyperrealistic','photorealistic',
  // medium
  'oil-painting','acrylic-painting','pencil-drawing','charcoal',
  'digital-photography','film-photography','polaroid','long-exposure',
  'collage','digital-collage','mixed-technique',
  // camera
  'extreme-closeup','closeup','medium-shot','cowboy-shot','full-shot','wide-shot','extreme-wide',
  'eye-level','low-angle','high-angle','birds-eye','overhead','dutch-angle','worms-eye','ground-level',
  'side-view','back-view','three-quarter','rear-three-quarter',
  'pov-shot','over-shoulder','two-shot','establishing','master-shot','insert-shot',
  'rule-of-thirds','center-comp','symmetrical','frame-in-frame','diagonal','layered','negative-space',
  // lighting
  'golden-hour','blue-hour','overcast','harsh-sunlight',
  'rembrandt','butterfly','split-lighting','rim-lighting',
  'neon-lights','candlelight','moonlight','firelight',
  // video
  'pan','tilt','dolly','tracking','crane','handheld',
  'cut','fade','dissolve','wipe','match-cut',
  'slow-motion','time-lapse','freeze-frame','motion-blur',
  // practice
  'banana-magic','hairstyles','chimpanzee-video','hamster-video','crocodile-video','veo-prompts','team-assignments',
  // library
  'blog-post-1','blog-post-2','blog-post-3',
  // prompt-restaurant
  'prompt-recipe-1','prompt-recipe-2','prompt-recipe-3',
  // aifi
  'aifi-tool','aifi-image-generator','aifi-prompt-extractor','aifi-image-variator','aifi-video-prompt',
  'instructor-profile',
];

const noImages = [];

for (const key of allItems) {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp("'" + escaped + "'\\s*:\\s*\\{");
  const match = content.match(re);
  if (!match) {
    // entry not in data file at all — skip
    continue;
  }
  const start = content.indexOf(match[0]);
  // Find next entry
  const rest = content.substring(start + match[0].length);
  const nextEntry = rest.match(/\n    '[^']+'\s*:\s*\{/);
  const end = nextEntry ? start + match[0].length + nextEntry.index : start + 5000;
  const section = content.substring(start, end);

  const hasImagesArr = /images:\s*\[/.test(section);
  const emptyImagesArr = /images:\s*\[\s*\]/.test(section);

  if (!hasImagesArr || emptyImagesArr) {
    noImages.push(key);
  }
}

console.log(`Entries WITHOUT images (${noImages.length}):`);
noImages.forEach(k => console.log(' ', k));
