// Script to trim images arrays in cameraData.js to keep only the first element
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'data', 'cameraData.js');
let content = fs.readFileSync(filePath, 'utf8');

// Match images arrays and keep only the first element
// Pattern: images: [\n  { first item },\n  { second item },\n  ...]
// We need to find each `images: [` block and keep only the first object in the array

const lines = content.split('\n');
const result = [];
let insideImages = false;
let bracketDepth = 0;
let firstItemCollected = false;
let skipUntilClose = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();

  if (!insideImages) {
    // Detect start of images array
    if (trimmed.startsWith('images:') && trimmed.includes('[')) {
      insideImages = true;
      bracketDepth = 0;
      firstItemCollected = false;
      skipUntilClose = false;
      result.push(line);

      // Count brackets on this line
      for (const ch of trimmed) {
        if (ch === '[') bracketDepth++;
        if (ch === ']') bracketDepth--;
      }

      // If array is on one line (closed already)
      if (bracketDepth === 0) {
        insideImages = false;
      }
      continue;
    }
    result.push(line);
  } else {
    // Inside images array
    // Track if we're in the first object
    if (!firstItemCollected) {
      // We're collecting the first item
      result.push(line);

      for (const ch of trimmed) {
        if (ch === '{') bracketDepth++;
        if (ch === '}') bracketDepth--;
        if (ch === '[') bracketDepth++;
        if (ch === ']') bracketDepth--;
      }

      // First item ends when we see a }, followed by a comma or ] at depth 1
      // Actually, simpler: if line ends with `},` or `}` and we've seen at least one {
      if ((trimmed.endsWith('},') || trimmed === '}') && bracketDepth <= 1) {
        firstItemCollected = true;
        skipUntilClose = true;
        // If line ends with },  we need to remove the trailing comma if next is ]
        if (trimmed.endsWith('},')) {
          // Remove trailing comma - the closing ] will follow
          result[result.length - 1] = line.replace(/,\s*$/, '');
        }
      }

      // Check if the entire array is closing
      if (trimmed === '],') {
        insideImages = false;
      }
      if (trimmed === ']') {
        insideImages = false;
      }
    } else if (skipUntilClose) {
      // Skip lines until we find the closing ]
      if (trimmed === '],' || trimmed === ']') {
        result.push(line);
        insideImages = false;
        skipUntilClose = false;
      }
      // else skip this line (it's a 2nd, 3rd, 4th image entry)
    }
  }
}

const newContent = result.join('\n');
fs.writeFileSync(filePath, newContent, 'utf8');

// Count how many lines were removed
const removed = lines.length - result.length;
console.log(`Done. Removed ${removed} lines. File: ${lines.length} -> ${result.length} lines.`);
