const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'data', 'cameraData.js');
let content = fs.readFileSync(filePath, 'utf8');

// Fix specific broken lines where old prompt got concatenated with new
// birds-eye: has duplicate prompt text
content = content.replace(
  /prompt: 'bird's eye view of a spiral staircase from directly above, mesmerizing geometric pattern, black and white architectural photography, vertigo-inducing depth, minimalist abstract composition, sharp symmetrical lines, 8K's eye view of a spiral staircase from directly above, geometric pattern, architectural photography, vertigo perspective, dramatic depth, minimalist composition, sharp lines, 8K'/,
  "prompt: 'birds eye view of a spiral staircase from directly above, mesmerizing geometric pattern, black and white architectural photography, vertigo-inducing depth, minimalist abstract composition, sharp symmetrical lines, 8K'"
);

// worms-eye: has duplicate prompt text
content = content.replace(
  /prompt: 'worm's eye view looking up at a child blowing dandelion seeds against bright blue sky, extreme low ground perspective, seeds floating upward, magical childhood moment, backlit sun flare, dreamy atmosphere's eye view looking up at massive redwood trees, extreme low ground perspective, towering trunks converging upward, forest canopy, nature photography, awe-inspiring scale, 8K'/,
  "prompt: 'worms eye view looking up at a child blowing dandelion seeds against bright blue sky, extreme low ground perspective, seeds floating upward, magical childhood moment, backlit sun flare, dreamy atmosphere'"
);

// over-shoulder: has duplicate prompt text
content = content.replace(
  /prompt: 'over the shoulder shot of a photographer reviewing images on camera screen, foreground shoulder silhouette, bokeh city lights background, depth composition, creative process moment, warm evening tones's shoulder in foreground, depth composition, cinematic photography, dramatic tension, detailed'/,
  "prompt: 'over the shoulder shot of a photographer reviewing images on camera screen, foreground shoulder silhouette, bokeh city lights background, depth composition, creative process moment, warm evening tones'"
);

// Now fix all remaining apostrophes inside prompt strings
// Find all prompt: '...' values and replace internal ' with escaped or removed
const lines = content.split('\n');
const fixedLines = lines.map(line => {
  // Match lines with prompt: '...'
  const promptMatch = line.match(/^(\s*.*prompt:\s*')(.+)('\s*(?:,?\s*}.*|})?\s*)$/);
  if (promptMatch) {
    let [, prefix, promptText, suffix] = promptMatch;
    // Replace apostrophes within the prompt text (like woman's, artist's, etc.)
    // These are cases where ' appears inside the prompt value
    // Replace with unicode right single quotation mark or just remove
    promptText = promptText.replace(/(\w)'(\w)/g, '$1\u2019$2');
    return prefix + promptText + suffix;
  }
  return line;
});

content = fixedLines.join('\n');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed apostrophe issues in prompts.');

// Verify by checking for syntax errors
try {
  require(filePath);
  console.log('Syntax check PASSED.');
} catch (e) {
  console.log('Syntax check FAILED:', e.message);
}
