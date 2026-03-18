#!/usr/bin/env node
/**
 * Fix video src paths in cameraData.js videos arrays.
 * Videos should use format: /images/guide/video/{key}-v{n}.mp4
 * Run: node scripts/fix-video-paths.js
 */
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '..', 'app', 'data', 'cameraData.js');

const videoEntries = [
  'pan', 'tilt', 'dolly', 'tracking', 'crane', 'handheld',
  'cut', 'fade', 'dissolve', 'wipe', 'match-cut',
  'slow-motion', 'time-lapse', 'freeze-frame', 'motion-blur',
];

let content = fs.readFileSync(DATA_FILE, 'utf-8');
let fixCount = 0;

for (const key of videoEntries) {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Find this entry
  const entryRe = new RegExp("'" + escaped + "'\\s*:\\s*\\{");
  const match = content.match(entryRe);
  if (!match) continue;

  const entryStart = content.indexOf(match[0]);
  const afterEntry = content.substring(entryStart + match[0].length);
  const nextEntryMatch = afterEntry.match(/\n    '[^']+'\s*:\s*\{/);
  const entryEnd = nextEntryMatch
    ? entryStart + match[0].length + nextEntryMatch.index
    : entryStart + 10000;

  const section = content.substring(entryStart, entryEnd);

  // Find the videos array section
  const videosMatch = section.match(/videos:\s*\[/);
  if (!videosMatch) continue;

  const videosStart = entryStart + videosMatch.index;
  // Find closing bracket of videos array
  const videosRest = content.substring(videosStart);
  const closeBracket = videosRest.indexOf(']');
  if (closeBracket === -1) continue;

  const videosSection = content.substring(videosStart, videosStart + closeBracket + 1);

  // Find all src paths in videos section
  const srcRegex = /src:\s*'([^']+)'/g;
  let srcMatch;
  let videoIndex = 0;
  let newVideosSection = videosSection;

  while ((srcMatch = srcRegex.exec(videosSection)) !== null) {
    videoIndex++;
    const currentSrc = srcMatch[1];
    const expectedSrc = `/images/guide/video/${key}-v${videoIndex}.mp4`;

    if (currentSrc !== expectedSrc) {
      newVideosSection = newVideosSection.replace(
        `src: '${currentSrc}'`,
        `src: '${expectedSrc}'`
      );
      fixCount++;
      console.log(`  FIX ${key} video[${videoIndex}]: ${currentSrc} → ${expectedSrc}`);
    }
  }

  if (newVideosSection !== videosSection) {
    content = content.substring(0, videosStart) + newVideosSection + content.substring(videosStart + closeBracket + 1);
  }
}

fs.writeFileSync(DATA_FILE, content, 'utf-8');
console.log(`\nDone! Fixed ${fixCount} video paths.`);
