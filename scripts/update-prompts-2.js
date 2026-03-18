const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'data', 'cameraData.js');
let content = fs.readFileSync(filePath, 'utf8');

const newPrompts = {
  // ============ MEDIUM ============
  'oil-painting': "oil painting portrait of a young woman in a pearl earring, Vermeer inspired, visible impasto brushstrokes, rich warm glazing layers, canvas texture, classical chiaroscuro lighting, museum masterpiece quality, 8K",
  'acrylic-painting': "acrylic painting of a street musician playing saxophone under city lights, bold vivid brushstrokes, thick textured layers, contemporary urban scene, energetic composition, saturated neon reflections on wet pavement",
  'pencil-drawing': "detailed pencil drawing of an old man's hands holding a pocket watch, precise graphite shading, hyperrealistic wrinkles and veins, fine crosshatching technique, emotional still life, classical drawing skill, 8K",
  'charcoal': "charcoal drawing of a flamenco dancer mid-spin, dramatic flowing dress movement, expressive smudged strokes, raw emotional energy, deep blacks and bold highlights, figure drawing mastery, passionate performance captured",
  'digital-photography': "high-end digital photography of a model in haute couture fashion, crisp 8K resolution, studio ring light, commercial beauty shot, flawless skin detail, modern mirrorless camera quality, magazine cover grade",
  'film-photography': "35mm film photography of a couple walking through autumn park, natural Kodak Portra 400 warm tones, gentle film grain, slightly soft focus, nostalgic romantic atmosphere, analog color rendition, genuine vintage feel",
  'polaroid': "Polaroid instant photo of friends laughing at a summer beach party, white border frame, slightly sun-bleached vintage colors, casual snapshot aesthetic, square format, carefree retro nostalgia, spontaneous joy captured",
  'long-exposure': "long exposure photograph of a waterfall cascading over mossy rocks, silky smooth water flow, tripod-sharp surrounding stones, misty ethereal atmosphere, nature photography, 30 second exposure, dreamy motion effect",
  'collage': "mixed media paper collage portrait of a woman, torn vintage magazine clippings layered with hand-painted watercolor elements, textured composition, retro ephemera, artistic assemblage, creative visual storytelling",
  'digital-collage': "digital collage surreal artwork of a woman's portrait merged with tropical flowers and butterflies, seamlessly blended photographic elements, dreamlike digital manipulation, vibrant contemporary art, striking composition",
  'mixed-technique': "mixed media artwork combining ink drawing of a city skyline with watercolor washes and gold leaf accents, layered textures, experimental fusion technique, contemporary art expression, innovative material combination",

  // ============ CAMERA - Shot Sizes ============
  'extreme-closeup': "extreme close-up of a woman's eye with vivid amber iris, individual eyelashes in sharp detail, light reflections in the pupil, shallow depth of field, macro photography, water droplet on lower lash, 8K",
  'closeup': "close-up portrait of a young woman with soft freckles, natural window light creating catchlights in her eyes, shallow depth of field, 85mm lens, warm skin tones, intimate emotional connection, photorealistic, 8K",
  'medium-shot': "medium shot of a barista crafting latte art in a cozy cafe, waist-up framing, warm ambient light, steam rising from cup, professional lifestyle photography, shallow background blur, inviting atmosphere",
  'cowboy-shot': "cowboy shot of a confident woman in tailored blazer, mid-thigh framing, urban rooftop background, golden hour backlight, fashion editorial photography, powerful stance, wind in hair, sharp focus",
  'full-shot': "full shot of a ballet dancer in white tutu performing arabesque, head to toe framing, studio spotlight casting elegant shadow on wooden floor, graceful form, fine art dance photography, 8K",
  'wide-shot': "wide shot of a lone surfer walking toward ocean waves at sunrise, small figure against vast beach landscape, golden morning light, environmental storytelling, cinematic atmosphere, contemplative mood",
  'extreme-wide': "extreme wide shot of a tiny mountaineer on vast snowy peak ridge, epic Himalayan landscape, dramatic cloud formations, sense of human scale against nature, landscape photography, breathtaking grandeur, 8K",

  // Camera Angles
  'eye-level': "eye level portrait of a chef plating a dish in restaurant kitchen, natural height perspective, direct eye contact with camera, warm kitchen lighting, authentic working moment, lifestyle documentary style",
  'low-angle': "low angle shot looking up at a confident businesswoman in glass skyscraper lobby, powerful imposing perspective, geometric ceiling lines converging, corporate authority, dramatic upward composition, cinematic lighting",
  'high-angle': "high angle shot looking down at a little girl playing with paper boats in rain puddle, gentle vulnerability emphasized, colorful raincoat and yellow boots, urban street, tender childhood moment, storytelling perspective",
  'birds-eye': "bird's eye view of a spiral staircase from directly above, mesmerizing geometric pattern, black and white architectural photography, vertigo-inducing depth, minimalist abstract composition, sharp symmetrical lines, 8K",
  'overhead': "overhead flat lay of an artist's workspace with paint palette, brushes, and half-finished watercolor painting, creative mess arrangement, natural window light, lifestyle photography, colorful artistic tools",
  'dutch-angle': "dutch angle tilted shot of a jazz musician playing trumpet in smoky club, dramatic disorienting perspective, warm amber spotlight, noir atmosphere, dynamic diagonal composition, cinematic tension, 8K",
  'worms-eye': "worm's eye view looking up at a child blowing dandelion seeds against bright blue sky, extreme low ground perspective, seeds floating upward, magical childhood moment, backlit sun flare, dreamy atmosphere",
  'ground-level': "ground level shot of a golden retriever running toward camera through autumn leaves, camera on floor level, joyful energy, shallow depth of field, falling leaves in motion, warm sunlight, pet photography",

  // Camera Perspectives
  'side-view': "side profile view of an elegant ballerina in perfect pose, classical silhouette against soft backlight, graceful neck line, hair in bun, dramatic rim lighting, fine art photography, timeless composition",
  'back-view': "back view of a woman in flowing red dress standing at the edge of a cliff overlooking dramatic coastline, windswept hair, golden sunset, romantic cinematic photography, wanderlust atmosphere, ethereal",
  'three-quarter': "three-quarter view portrait of a young man with warm smile, 45-degree angle face catching soft golden hour light, natural outdoor background bokeh, classic portrait composition, authentic expression, 8K",
  'rear-three-quarter': "rear three-quarter angle of a woman in vintage dress looking back over shoulder with mysterious smile, autumn garden setting, dramatic warm lighting, cinematic composition, fashion editorial, atmospheric",

  // Special Shots
  'pov-shot': "POV first person view of hands opening an old leather journal revealing pressed flowers and handwritten letters, subjective camera perspective, warm desk lamp light, intimate discovery moment, nostalgic detail",
  'over-shoulder': "over the shoulder shot of a photographer reviewing images on camera screen, foreground shoulder silhouette, bokeh city lights background, depth composition, creative process moment, warm evening tones",
  'two-shot': "two shot of grandmother teaching young granddaughter to cook, dual subject framing at kitchen counter, warm home lighting, generational bond, flour-dusted hands, genuine smiles, family documentary photography",
  'establishing': "establishing shot of a grand Venetian canal with gondolas at sunrise, wide view of historic architecture, morning mist on water, travel photography, golden early light reflecting on facades, cinematic scope, 8K",
  'master-shot': "master shot of an entire orchestra on grand concert hall stage during performance, full scene coverage from balcony perspective, dramatic stage lighting, wide view of all musicians, symphonic grandeur",
  'insert-shot': "insert shot detail of weathered hands pouring tea from a ceramic pot into a delicate cup, close detail of golden liquid, steam rising, warm side lighting, Japanese tea ceremony, mindful moment, 8K",

  // Compositions
  'rule-of-thirds': "rule of thirds composition of a lone fisherman casting line at lake, placed at right intersection point, misty morning landscape, mountains in background, balanced asymmetric framing, serene atmosphere, 8K",
  'center-comp': "center composition of a monk in orange robes meditating in a grand temple corridor, perfectly centered subject, symmetrical architecture receding, vanishing point perspective, spiritual calm, powerful symmetry",
  'symmetrical': "perfectly symmetrical composition of the Taj Mahal reflected in still water pool, mirror image architecture, morning golden light, classical balanced framing, breathtaking architectural photography, serene precision, 8K",
  'frame-in-frame': "frame within a frame composition of a woman reading in a window seat, window frame creating natural border, warm interior vs cool exterior, layers of depth, intimate storytelling, creative framing technique",
  'diagonal': "diagonal composition of a skateboarder grinding down a handrail, dynamic diagonal line cutting across frame, urban background, frozen action, energetic movement, street photography, bold angular composition, 8K",
  'layered': "layered composition with cherry blossoms in foreground, bride in traditional kimono in midground, ancient temple in background, three distinct depth layers, Japanese spring scene, atmospheric perspective, 8K",
  'negative-space': "negative space composition of single red umbrella on vast snowy white landscape, minimal subject against expansive emptiness, minimalist photography, isolation emphasis, striking color contrast, contemplative, 8K",

  // ============ LIGHTING ============
  'golden-hour': "golden hour portrait of a young couple on a hilltop, warm amber backlight creating hair glow and lens flare, long gentle shadows, romantic atmosphere, soft golden skin tones, dreamy sunset photography, 8K",
  'blue-hour': "blue hour portrait of a violinist playing on a rooftop terrace, deep indigo twilight sky, city lights twinkling below, cool blue tones wrapping the scene, serene evening mood, long exposure city glow, magical",
  'overcast': "overcast day portrait of a woman in a flower garden, soft diffused lighting without harsh shadows, cloudy sky acting as natural softbox, even skin illumination, flattering gentle light, editorial fashion photography",
  'harsh-sunlight': "harsh midday sunlight portrait with strong geometric shadows from venetian blinds falling across a woman's face, high contrast light stripes, dramatic shadow pattern, graphic composition, bold artistic portrait",
  'rembrandt': "Rembrandt lighting portrait of a bearded man, signature triangle of light on shadowed cheek, dramatic chiaroscuro against dark background, one key light at 45 degrees, classical painting quality, studio mastery, 8K",
  'butterfly': "butterfly lighting glamour portrait of a model, symmetrical shadow beneath nose forming butterfly shape, beauty dish directly overhead, flawless luminous skin, high-fashion beauty shot, Hollywood golden age elegance",
  'split-lighting': "split lighting dramatic portrait of a pianist, face divided perfectly into light and deep shadow halves, single side light source, high contrast noir mood, mysterious artistic character study, cinematic intensity",
  'rim-lighting': "rim lighting portrait of a dancer with luminous edge glow outlining entire silhouette, dark studio background, backlit contour highlighting hair and shoulders, ethereal glowing outline, dramatic separation, 8K",
  'neon-lights': "neon lights portrait of a young woman in rain-soaked Tokyo alley, vivid pink and blue neon reflections on wet skin, colorful sign glow, cyberpunk night atmosphere, futuristic urban portrait, vibrant cinematic colors",
  'candlelight': "candlelight intimate portrait of a woman reading an old book, soft warm orange flickering glow on face, single candle source, dark cozy room, romantic chiaroscuro, Renaissance painting atmosphere, gentle warm shadows",
  'moonlight': "moonlight portrait of a couple slow dancing on a terrace, silvery blue lunar illumination, cool ethereal color temperature, stars visible, romantic mysterious atmosphere, night photography, dreamlike gentle glow",
  'firelight': "firelight portrait of a storyteller by campfire, warm dancing orange glow illuminating animated expression, flickering shadows on surrounding faces of listeners, outdoor night gathering, cozy warmth, folk tale atmosphere",
};

let replacedCount = 0;

for (const [key, newPrompt] of Object.entries(newPrompts)) {
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
