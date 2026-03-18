const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'data', 'cameraData.js');
let content = fs.readFileSync(filePath, 'utf8');

// Map: key -> new prompt for first image
const newPrompts = {
  // ============ STYLE ============

  // 3D/CG
  'isometric': "isometric view of a cozy coffee shop interior, tiny detailed furniture, warm lighting through windows, miniature people sitting at tables, diorama style, pastel color palette, cute architectural cutaway, highly detailed, 8K",
  'low-poly': "low poly 3D render of a majestic wolf standing on a rocky cliff, geometric faceted surfaces, dramatic sunset gradient background, minimal polygon aesthetic, stylized nature scene, vibrant angular shapes, modern digital art",
  'claymation': "claymation style cheerful baker character holding a fresh baguette in a tiny bakery, soft clay texture, handmade stop-motion aesthetic, warm cozy atmosphere, Aardman Studios quality, charming imperfections, detailed miniature set",
  'voxel-art': "voxel art bustling Japanese street market at night, glowing lanterns and neon signs, tiny cube-built characters shopping, colorful food stalls, Minecraft-meets-Tokyo aesthetic, detailed blocky architecture, warm atmospheric lighting",

  // Illustration
  'flat-illustration': "flat illustration of a young woman riding a bicycle through a colorful city street, bold geometric shapes, limited color palette, modern graphic design style, clean lines, editorial illustration quality, contemporary minimalist art",
  'line-art': "fine line art portrait of an elegant woman with flowing hair intertwined with flowers, intricate detailed linework, black ink on white background, botanical elements, delicate crosshatching, pen and ink style, haute couture fashion illustration",
  'vector-art': "vector art of a stylish astronaut floating in space surrounded by colorful planets, clean sharp edges, flat bold colors, Adobe Illustrator style, graphic design poster, scalable crisp artwork, modern space exploration theme",
  'children-illustration': "children's book illustration of a little girl and her fox friend exploring a magical garden with oversized flowers, soft watercolor textures, whimsical storytelling, warm gentle colors, storybook charm, Beatrix Potter inspired",
  'botanical-art': "botanical art scientific illustration of a blooming peony flower, precise anatomical detail, vintage naturalist style, labeled cross-section, muted parchment background, hand-painted watercolor accuracy, museum specimen quality",

  // Traditional art movements
  'expressionism': "expressionism portrait of a tormented musician playing violin, distorted features conveying raw emotion, bold aggressive brushstrokes, intense contrasting colors, Edvard Munch inspired, psychological intensity, powerful inner turmoil",
  'art-nouveau': "art nouveau portrait of an elegant woman with flowing auburn hair adorned with lilies, sinuous organic lines, decorative floral border, Alphonse Mucha inspired, ornamental patterns, gold accents, ethereal beauty, poster design",
  'art-deco': "art deco glamorous ballroom scene with elegant couple dancing, geometric patterns, gold and black color scheme, 1920s luxury, Gatsby era opulence, symmetrical ornamental design, chrome and crystal details, sophisticated nightlife",
  'baroque': "baroque dramatic scene of an angel descending from stormy clouds with golden light rays, rich chiaroscuro, ornate flowing fabric, Caravaggio inspired intensity, theatrical divine illumination, museum masterpiece quality, oil painting texture",
  'renaissance': "renaissance portrait of a noble woman in a Florentine garden, sfumato technique, classical composition, Leonardo da Vinci inspired, rich velvet dress, serene expression, architectural columns, golden ratio proportions, tempera on panel",
  'ukiyo-e': "ukiyo-e Japanese woodblock print of a geisha crossing a bridge during cherry blossom season, Hokusai wave patterns in background, traditional flat perspective, bold outlines, limited color palette, Edo period aesthetic, washi paper texture",

  // Pop culture / Modern
  'pop-art': "pop art bold portrait of a glamorous woman with bright red lips, Warhol style screen print, Ben-Day dots pattern, vibrant primary colors, comic book aesthetics, bold black outlines, repeated image variation, consumer culture icon",
  'psychedelic': "psychedelic portrait of a woman with kaleidoscopic flowing hair, swirling vibrant rainbow patterns, optical illusion fractals, 1960s counterculture aesthetic, trippy liquid colors, acid art style, mind-expanding visual experience",
  'steampunk': "steampunk Victorian inventor woman in her workshop, brass goggles on forehead, surrounded by clockwork mechanisms and copper pipes, steam-powered gadgets, leather and metal aesthetic, gaslight ambiance, industrial revolution fantasy",
  'cyberpunk': "cyberpunk street samurai woman with neon-lit cybernetic arm, rain-soaked Tokyo alley, holographic advertisements, purple and cyan neon reflections, Blade Runner atmosphere, futuristic dystopia, augmented reality overlays, cinematic night",
  'biopunk': "biopunk scientist in organic laboratory, bioluminescent plant-technology hybrid organisms growing from walls, living circuits, DNA helix structures, green-tinted biological aesthetic, genetic engineering lab, ethereal bio-luminescence",
  'solarpunk': "solarpunk woman tending a rooftop garden in a green utopian city, solar panel buildings covered in lush vegetation, clean energy windmills, optimistic bright sunshine, sustainable architecture, harmonious nature-technology fusion, hopeful future",
  'retro-vintage': "retro vintage 1950s diner scene, waitress in classic uniform serving milkshakes, chrome barstools, checkered floor, warm nostalgic color grading, Kodachrome film aesthetic, classic Americana, neon open sign, jukebox in corner",
  'synthwave': "synthwave retrowave scene of a DeLorean driving on neon grid highway toward sunset, chrome reflections, pink and purple gradient sky, palm tree silhouettes, 1980s aesthetic, VHS retro-futurism, outrun style, electronic music atmosphere",
  'maximalism': "maximalism ornate Victorian parlor overflowing with eclectic treasures, layered Persian rugs, botanical wallpaper, crystal chandeliers, exotic artifacts, velvet furniture, every surface decorated, rich saturated colors, opulent visual feast",

  // Animation / Comics
  'manga': "manga style intense close-up of a young hero with determined eyes, speed lines radiating outward, dramatic shading, screentone texture, Japanese comic panel composition, expressive hair movement, Shonen Jump quality, black and white ink",
  'webtoon-style': "webtoon style romantic scene of a couple sharing an umbrella in soft rain, Korean manhwa aesthetic, clean digital coloring, soft pastel tones, vertical scroll composition, emotional character expressions, sweet atmosphere, modern love story",

  // Character / Figure / Toy
  'pixar-style': "Pixar style adorable robot character with big expressive eyes discovering a butterfly, subsurface scattering skin, detailed fabric textures, warm cinematic lighting, heartwarming moment, 3D animation quality, emotional storytelling, render",
  'disney-style': "Disney animation style brave princess with flowing magical hair standing on a cliff overlooking an enchanted kingdom, sparkle effects, warm sunset colors, musical moment, classic Disney magic, animated feature film quality",
  'ghibli-style': "Studio Ghibli style young girl sitting on a grassy hillside watching clouds, peaceful countryside with wildflowers, gentle warm breeze, Hayao Miyazaki inspired, hand-painted watercolor background, nostalgic summer day, serene contemplation",
  'chibi-style': "chibi style cute warrior character with oversized head and tiny body, adorable determined expression, miniature sword and shield, sparkle effects, pastel background, super deformed anime proportions, kawaii battle pose, sticker design",
  'kawaii-style': "kawaii style adorable cat character wearing a tiny chef hat baking cupcakes, sparkly eyes, pastel pink kitchen, heart-shaped decorations, Japanese cute aesthetic, round soft shapes, happy expression, sweet candy colors, plushie quality",
  'funko-pop': "Funko Pop vinyl figure of a detective in trench coat, oversized square head, tiny body, glossy black eyes, stylized proportions, collectible toy design, product photography on white background, boxed figure aesthetic, vinyl texture",
  'blind-box': "blind box collectible designer toy of a dreamy astronaut character sitting on a crescent moon, soft matte finish, pastel space colors, Pop Mart style, contemporary art toy design, collectible vinyl figure, cute minimal expression",
  'gashapon': "gashapon capsule toy miniature of a sushi chef cat character, small detailed figurine, Japanese vending machine toy quality, cute animal character, translucent capsule display, collectible charm, detailed paint application, tiny accessories",
  'enamel-pin': "enamel pin design of a magical cat sitting on a stack of books under starry sky, gold metal outline, vibrant fill colors, lapel pin aesthetic, flat graphic style, hard enamel smooth surface, cute collectible accessory, pin mockup",
  'knitted-doll': "knitted amigurumi doll of a cozy fox wearing a scarf, handmade crochet texture, yarn material visible, button eyes, stuffed plush toy, warm autumn colors, handcraft aesthetic, soft cuddly character, macro photography, cotton yarn detail",
  'lego-style': "LEGO minifigure scene of a pirate captain on a brick-built ship deck, yellow skin, claw hand, detailed LEGO brick construction, toy photography, plastic texture, colorful bricks, official LEGO set aesthetic, playful adventure scene",
  'toy-photography': "toy photography of action figures in miniature cityscape, forced perspective making toys look life-sized, dramatic studio lighting, tilt-shift bokeh, creative diorama, detailed miniature world, cinematic toy scene, macro lens quality",
  'crystal-ball': "crystal ball glass sphere containing a miniature winter village with glowing lights, snow globe effect, magical refraction and distortion, bokeh lights background, enchanting miniature world, glass optical effects, holiday magic, detailed",

  // Photo / Film
  'photorealism': "photorealistic portrait of a weathered fisherman with deep wrinkles and kind eyes, salt-and-pepper beard, morning harbor light, every skin pore visible, 8K ultra-detailed, medium format camera quality, National Geographic portrait",
  'cinematic': "cinematic wide frame of a lone cowboy riding through Monument Valley at golden hour, anamorphic lens flare, 2.39:1 aspect ratio, warm desaturated color grade, dust particles in light, Roger Deakins cinematography style, epic Western",
  'film-noir': "film noir detective standing under a streetlamp in fog-filled alley, venetian blind shadows across face, femme fatale silhouette in doorway, high contrast black and white, 1940s mystery atmosphere, cigarette smoke, hard-boiled drama",
  'documentary': "documentary style candid portrait of an elderly artisan crafting pottery by hand, natural available light, authentic moment captured, photojournalism quality, worn hands shaping clay, cultural preservation, raw unposed truth, editorial",

  // Special effects
  'glitch-art': "glitch art portrait of a woman with digital corruption effects, RGB color channel splitting, data moshing artifacts, pixel sorting distortion, cybernetic aesthetic, broken digital signal, vaporwave color palette, corrupted beauty",
  'double-exposure': "double exposure portrait of a woman's profile merged with a forest landscape, trees growing within her silhouette, ethereal blend of human and nature, artistic photography technique, dreamlike overlay, poetic visual metaphor",
  'pixel-art': "pixel art scene of a hero character standing at castle entrance, 16-bit retro game aesthetic, limited color palette, nostalgic SNES era quality, detailed sprite work, fantasy RPG scene, torchlit stone walls, adventure game atmosphere",
  'papercraft': "papercraft layered paper cut art of a underwater ocean scene, multiple depth layers, intricate cut paper fish and coral, shadow box effect, handmade craft aesthetic, colorful construction paper, dimensional paper sculpture, detailed edges",
  'stained-glass': "stained glass window depicting a majestic peacock with spread tail feathers, vibrant jewel-toned glass pieces, lead came outlines, cathedral light streaming through, Gothic arch frame, rich blues greens and golds, radiant backlighting",
};

let replacedCount = 0;

for (const [key, newPrompt] of Object.entries(newPrompts)) {
  // Find the entry by key and replace its first image prompt
  // Pattern: 'key': { ... images: [ { src: '...', caption: '...', prompt: 'OLD_PROMPT' }
  const entryPattern = new RegExp(
    `('${key}':\\s*\\{[\\s\\S]*?images:\\s*\\[\\s*\\{[^}]*?prompt:\\s*')([^']+)(')`
  );

  const match = content.match(entryPattern);
  if (match) {
    content = content.replace(entryPattern, `$1${newPrompt}$3`);
    replacedCount++;
  } else {
    console.log(`WARNING: Could not find entry for key '${key}'`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`Done. Replaced ${replacedCount}/${Object.keys(newPrompts).length} prompts.`);
