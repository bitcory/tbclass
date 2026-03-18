import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join, basename } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataDir = join(__dirname, '..', 'app', 'data');

// Read cameraData.js as text, strip export, eval it
const cameraDataText = readFileSync(join(dataDir, 'cameraData.js'), 'utf-8');
const modifiedText = cameraDataText.replace('export const cameraData =', 'var cameraData =');
// Use Function constructor to eval safely
const fn = new Function(modifiedText + '\nreturn cameraData;');
const cameraData = fn();

// Define category structure matching guideData.js
const categories = [
  {
    id: 'toolb',
    name: 'TOOLB',
    items: ['instructor-intro', 'instructor-reviews', 'intro-videos'],
  },
  {
    id: 'tutorial',
    name: '튜토리얼',
    items: [
      'tutorial-block1', 'tutorial-block2', 'tutorial-block3', 'tutorial-block4',
      'tutorial-block5', 'tutorial-block6', 'tutorial-block7',
    ],
  },
  {
    id: 'expert',
    name: '전문가 과정',
    items: [
      'expert-ch1', 'expert-ch2', 'expert-ch3', 'expert-ch4', 'expert-ch5',
      'expert-ch6', 'expert-ch7', 'expert-ch8', 'expert-ch9', 'expert-ch10',
      'expert-ch11', 'expert-ch12', 'expert-ch13',
    ],
  },
  {
    id: 'style',
    name: '스타일(STYLE)',
    items: [
      'digital-painting', 'concept-art', 'matte-painting',
      '3d-render', 'isometric', 'low-poly', 'claymation', 'voxel-art',
      'flat-illustration', 'line-art', 'vector-art', 'children-illustration', 'botanical-art',
      'watercolor', 'impressionism', 'expressionism', 'surrealism', 'art-nouveau', 'art-deco', 'baroque', 'renaissance', 'ukiyo-e',
      'pop-art', 'psychedelic', 'steampunk', 'cyberpunk', 'biopunk', 'solarpunk', 'retro-vintage', 'synthwave', 'minimalism', 'maximalism',
      'anime-style', 'manga', 'cartoon-style', 'comic-book', 'webtoon-style',
      'pixar-style', 'disney-style', 'ghibli-style', 'chibi-style', 'kawaii-style', 'funko-pop', 'blind-box', 'gashapon', 'enamel-pin', 'knitted-doll', 'lego-style', 'toy-photography', 'crystal-ball',
      'photorealism', 'cinematic', 'film-noir', 'documentary',
      'glitch-art', 'double-exposure', 'pixel-art', 'papercraft', 'stained-glass',
    ],
  },
  {
    id: 'medium',
    name: '매체(MEDIUM)',
    items: [
      'oil-painting', 'acrylic-painting', 'pencil-drawing', 'charcoal',
      'digital-photography', 'film-photography', 'polaroid', 'long-exposure',
      'collage', 'digital-collage', 'mixed-technique',
    ],
  },
  {
    id: 'camera',
    name: '카메라(CAMERA)',
    items: [
      'extreme-closeup', 'closeup', 'medium-shot', 'cowboy-shot', 'full-shot', 'wide-shot', 'extreme-wide',
      'eye-level', 'low-angle', 'high-angle', 'birds-eye', 'overhead', 'dutch-angle', 'worms-eye', 'ground-level',
      'side-view', 'back-view', 'three-quarter', 'rear-three-quarter',
      'pov-shot', 'over-shoulder', 'two-shot', 'establishing', 'master-shot', 'insert-shot',
      'rule-of-thirds', 'center-comp', 'symmetrical', 'frame-in-frame', 'diagonal', 'layered', 'negative-space',
    ],
  },
  {
    id: 'lighting',
    name: '조명(LIGHTING)',
    items: [
      'golden-hour', 'blue-hour', 'overcast', 'harsh-sunlight',
      'rembrandt', 'butterfly', 'split-lighting', 'rim-lighting',
      'neon-lights', 'candlelight', 'moonlight', 'firelight',
    ],
  },
  {
    id: 'video',
    name: '영상(VIDEO)',
    items: [
      'pan', 'tilt', 'dolly', 'tracking', 'crane', 'handheld',
      'cut', 'fade', 'dissolve', 'wipe', 'match-cut',
      'slow-motion', 'time-lapse', 'freeze-frame', 'motion-blur',
    ],
  },
  {
    id: 'practice',
    name: '실습과제',
    items: [
      'banana-magic', 'hairstyles', 'chimpanzee-video', 'hamster-video',
      'crocodile-video', 'veo-prompts', 'team-assignments',
    ],
  },
  {
    id: 'library',
    name: '자료실',
    items: ['blog-post-1', 'blog-post-2', 'blog-post-3'],
  },
  {
    id: 'prompt-restaurant',
    name: '프롬프트맛집',
    items: ['prompt-recipe-1', 'prompt-recipe-2', 'prompt-recipe-3'],
  },
];

// Extract and print
for (const cat of categories) {
  const entries = [];
  for (const key of cat.items) {
    const entry = cameraData[key];
    if (entry && entry.images && entry.images.length > 0 && entry.images[0].src) {
      const src = entry.images[0].src;
      const filename = basename(src);
      const prompt = entry.images[0].prompt;
      entries.push({ key, filename, prompt });
    }
  }
  if (entries.length > 0) {
    console.log(`=== ${cat.name} (${cat.id}) ===`);
    for (const e of entries) {
      console.log(e.filename);
      console.log(`${e.prompt} 16:9`);
      console.log('');
    }
  }
}
