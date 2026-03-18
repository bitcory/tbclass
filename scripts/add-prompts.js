#!/usr/bin/env node
/**
 * Add detailed prompts to all image objects in cameraData.js
 * Run: node scripts/add-prompts.js
 */

const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'app', 'data', 'cameraData.js');

// ============================================================
// PROMPT MAPPINGS: { 'entry-key': ['prompt for img1', 'prompt for img2', ...] }
// Each prompt: 30-60 words, {technique} {scene}, {style}, {quality}
// ============================================================
const PROMPTS = {
  // ============= CAMERA — SHOT SIZE =============
  'extreme-closeup': [
    'extreme close-up of a human eye with vivid green iris, individual eyelashes visible, light reflections in the pupil, shallow depth of field, macro lens photography, photorealistic, sharp focus, 8K',
    'extreme close-up detail shot of aged hands holding a weathered pocket watch, every wrinkle and scratch visible, warm side lighting, professional photography, shallow depth of field, cinematic',
    'extreme close-up of dewdrops on a red rose petal, crystal-clear water droplets, morning light refraction, macro photography, vibrant colors, ultra sharp focus, 8K detail',
    'extreme close-up of a woman\'s lips with subtle smile, soft natural skin texture, warm golden hour light, beauty photography, shallow depth of field, photorealistic, detailed'
  ],
  'closeup': [
    'close-up portrait of a young woman with freckles, soft natural window lighting, shallow depth of field, 85mm lens, warm golden tones, photorealistic, professional photography, 8K',
    'close-up emotional portrait of an elderly man with deep expression, dramatic side lighting, silver beard details, character study, black and white tones, cinematic photography',
    'close-up portrait of a child with curious eyes looking up, natural outdoor light, soft bokeh background, candid expression, warm colors, professional photography, sharp focus',
    'close-up face portrait with direct eye contact, studio ring light, clean skin detail, fashion photography style, neutral background, sharp focus, high-end beauty shot'
  ],
  'medium-shot': [
    'medium shot of a business woman in modern office, waist-up framing, natural window light, confident posture, corporate portrait, professional photography, clean background, sharp focus',
    'medium shot of two people having coffee conversation, warm café interior, natural expressions, lifestyle photography, soft ambient lighting, candid moment, photorealistic',
    'medium shot of a chef preparing food in kitchen, waist-up view showing hand gestures, warm tungsten lighting, action moment, documentary style photography, detailed',
    'medium shot portrait of a musician holding guitar, natural relaxed pose, studio lighting, upper body framing, expressive character, professional photography, shallow depth of field'
  ],
  'cowboy-shot': [
    'cowboy shot of a confident woman in leather jacket, mid-thigh framing, urban street background, golden hour light, fashion photography, dynamic pose, professional, sharp focus',
    'cowboy shot of a samurai warrior in traditional armor, action-ready stance, misty bamboo forest background, dramatic lighting, cinematic composition, detailed textures, 8K',
    'cowboy shot of a young man in casual streetwear, mid-thigh crop, colorful graffiti wall background, confident stance, street photography style, vibrant colors, sharp focus',
    'cowboy shot of a dancer in flowing dress, powerful stance from thigh up, studio dramatic lighting, movement captured, elegant pose, fashion photography, high contrast'
  ],
  'full-shot': [
    'full shot of a ballet dancer in white tutu, head to toe framing, elegant arabesque pose, studio spotlight, dramatic shadows on wooden floor, fine art photography, 8K',
    'full shot of an astronaut in complete spacesuit, standing on lunar surface, Earth visible in background, full body visible, cinematic lighting, sci-fi photography, ultra detailed',
    'full shot of a fashion model in haute couture gown, full body head to toe, minimalist white studio, editorial lighting, high fashion photography, elegant pose, sharp focus',
    'full shot character reveal of a medieval knight in shining armor, full body standing pose, castle courtyard background, dramatic golden hour light, photorealistic, cinematic'
  ],
  'wide-shot': [
    'wide shot of a lone figure walking through vast wheat field, person small in frame, golden sunset sky, environmental context, landscape photography, atmospheric, cinematic composition',
    'wide shot of a surfer approaching ocean waves, beach environment visible, morning light, wide environmental framing, action sports photography, dynamic composition, detailed',
    'wide shot showing person and mountain landscape relationship, small figure against massive peaks, dramatic clouds, sense of scale, adventure photography, epic composition, 8K',
    'wide shot of a traditional Japanese temple in autumn, figure meditating in garden, red maple trees, peaceful scene setting, architectural photography, warm tones, detailed'
  ],
  'extreme-wide': [
    'extreme wide shot of vast desert landscape with tiny caravan, endless sand dunes under dramatic sky, epic scale, landscape photography, cinematic composition, golden light, 8K',
    'extreme wide shot of a lone hiker on mountain ridge, human figure appears tiny against massive peaks, dramatic clouds, epic wilderness scale, adventure photography, awe-inspiring',
    'extreme wide shot of northern lights over frozen tundra, vast open landscape, green aurora borealis, environmental dominance, night photography, long exposure, breathtaking scale',
    'extreme wide shot establishing ancient city ruins, grand architectural remains stretching to horizon, dramatic sunset, archaeological site, cinematic photography, epic composition, detailed'
  ],

  // ============= CAMERA — ANGLES =============
  'eye-level': [
    'eye level portrait of a woman at a café table, neutral camera height, natural eye contact, relaxed atmosphere, lifestyle photography, warm ambient light, comfortable perspective',
    'eye level shot of a golden retriever sitting on grass, camera at dog\'s eye height, natural outdoor light, friendly expression, pet photography, bokeh background, sharp focus',
    'eye level view of two friends walking down city street, equal perspective, casual conversation, urban environment, street photography, natural daylight, candid moment',
    'eye level standard angle portrait of a craftsman at workbench, neutral camera position, workshop environment, natural window light, documentary style, authentic character, detailed'
  ],
  'low-angle': [
    'low angle shot looking up at a powerful CEO standing in glass skyscraper lobby, imposing perspective, dramatic upward view, architectural lines, corporate power, cinematic lighting',
    'low angle heroic shot of a firefighter against smoky sky, looking up at brave figure, dramatic backlighting, powerful stance, documentary photography, high contrast, inspiring',
    'low angle view of ancient Gothic cathedral towers reaching skyward, dramatic upward perspective, stone architecture details, overcast sky, architectural photography, imposing grandeur',
    'low angle portrait looking up at a basketball player mid-jump, powerful athletic form, arena lighting, dynamic action, sports photography, dramatic perspective, sharp focus'
  ],
  'high-angle': [
    'high angle shot looking down at a person sitting alone in empty auditorium, vulnerability emphasized, overhead perspective, dramatic shadows, cinematic composition, lonely atmosphere',
    'high angle view of a busy market square from above, colorful stalls and people, bird\'s eye perspective, urban life, documentary photography, vibrant colors, detailed scene',
    'high angle overview of a chess game in progress, looking down at the board and player\'s hands, strategic moment, dramatic side lighting, still life perspective, detailed',
    'high angle superior view of a garden maze from above, geometric green hedges, person navigating paths, pattern photography, overhead perspective, natural daylight, aerial composition'
  ],
  'birds-eye': [
    'bird\'s eye view of a spiral staircase from directly above, geometric pattern, architectural photography, vertigo perspective, dramatic depth, minimalist composition, sharp lines, 8K',
    'bird\'s eye view looking straight down at a crowded crosswalk intersection, pedestrians forming patterns, urban geometry, top-down perspective, documentary photography, graphic composition',
    'bird\'s eye view of autumn forest canopy from above, colorful fall foliage pattern, nature photography, aerial perspective, warm reds and golds, textural landscape, stunning detail',
    'bird\'s eye view map-like angle of a traditional village, rooftops and narrow streets forming patterns, Mediterranean architecture, warm sunlight, aerial photography, scenic overview'
  ],
  'overhead': [
    'overhead flat lay of gourmet breakfast spread on marble table, food photography from directly above, styled arrangement, natural window light, appetizing colors, editorial composition',
    'overhead shot of an artist\'s workspace with paints and brushes, table top view from above, creative chaos, colorful palette, flat lay composition, warm studio light, detailed',
    'overhead flat lay style of open books and coffee on wooden desk, study arrangement, warm ambient lighting, cozy atmosphere, lifestyle photography, minimalist composition, inviting',
    'direct overhead shot of a swimming pool with single swimmer, geometric blue water patterns, top-down perspective, summer light, minimalist composition, graphic photography, clean'
  ],
  'dutch-angle': [
    'dutch angle tilted shot of a detective in dark alley, dramatic noir atmosphere, disorienting perspective, rain-slicked streets, moody shadows, cinematic photography, tension, 8K',
    'dutch angle dynamic perspective of a skateboarder mid-trick, tilted camera angle, urban skatepark, action photography, dramatic composition, motion energy, sharp focus, vibrant',
    'dutch angle unstable feeling shot of an abandoned hospital corridor, tilted perspective, flickering fluorescent lights, horror atmosphere, unsettling composition, dramatic shadows',
    'dutch angle dramatic tilt of city skyscrapers at night, neon lights, disorienting upward perspective, cyberpunk atmosphere, urban photography, dynamic composition, vivid colors'
  ],
  'worms-eye': [
    'worm\'s eye view looking up at massive redwood trees, extreme low ground perspective, towering trunks converging upward, forest canopy, nature photography, awe-inspiring scale, 8K',
    'worm\'s eye view from ground looking up through autumn leaves, extreme low angle, colorful canopy above, warm golden light filtering through, nature photography, artistic perspective',
    'worm\'s eye view extreme low angle of a superhero character standing tall, cape flowing, dramatic sky behind, powerful heroic composition, cinematic lighting, photorealistic',
    'worm\'s eye view looking up at modern glass building, reflective surfaces, clouds visible in glass, extreme perspective, architectural photography, geometric patterns, dramatic'
  ],
  'ground-level': [
    'ground level shot of a cat stalking through grass, camera on floor level, predator perspective, shallow depth of field, pet photography, eye-level with ground, natural light',
    'ground level perspective of rain puddle reflection showing city buildings, low camera position, mirror effect, urban photography, creative composition, atmospheric, detailed reflections',
    'ground level shot of fallen autumn leaves on path with boots walking, surface-level camera, warm colors, lifestyle photography, seasonal atmosphere, bokeh background, intimate view',
    'ground level surface shot of toy soldiers arranged in formation, miniature perspective, shallow depth of field, creative photography, dramatic lighting, childhood nostalgia, detailed'
  ],

  // ============= CAMERA — PERSPECTIVES =============
  'side-view': [
    'side profile view of an elegant woman with upswept hair, classic silhouette portrait, dramatic rim lighting, dark background, fine art photography, timeless composition, sharp detail',
    'side view silhouette of a runner at sunset, athletic form against golden sky, profile perspective, sports photography, dramatic backlighting, dynamic pose, inspirational',
    'lateral side view of a vintage car, classic automobile profile, studio lighting, automotive photography, chrome details, polished surface, showroom composition, professional',
    'side profile angle of a hawk perched on branch, detailed feathers visible, nature wildlife photography, clean background, sharp focus, majestic bird portrait, golden light'
  ],
  'back-view': [
    'back view of a woman in flowing white dress looking at ocean horizon, from behind perspective, windswept hair, golden sunset, romantic atmosphere, cinematic photography, ethereal',
    'rear view of a traveler with backpack looking at mountain vista, from behind hiking perspective, adventure scene, dramatic landscape, wanderlust photography, epic scale, inspiring',
    'back view of a businessman walking into bright light through doorway, silhouette from behind, metaphorical shot, dramatic contrast, cinematic composition, symbolic photography',
    'back view of a child walking away through flower field, small figure from behind, summer afternoon light, nostalgic atmosphere, emotional photography, gentle warm tones, poetic'
  ],
  'three-quarter': [
    'three-quarter view portrait of a woman with natural makeup, 45-degree angle face, soft studio lighting, classic portrait composition, professional headshot, shallow depth of field, 8K',
    'three-quarter angle portrait of a bearded man in workshop, 45-degree view, warm ambient light, authentic character study, environmental portrait, natural expression, detailed',
    'three-quarter view classic portrait angle of an actress, elegant pose, Rembrandt lighting, timeless composition, film still quality, cinematic portrait photography, beautiful',
    'three-quarter view natural pose of a grandmother smiling gently, 45-degree soft portrait, warm window light, character and wisdom, intimate family photography, tender moment'
  ],
  'rear-three-quarter': [
    'rear three-quarter angle of a woman looking back over shoulder, mysterious glance, dramatic lighting, cinematic composition, fashion photography, elegant pose, atmospheric, 8K',
    'rear three-quarter view of a motorcyclist on road, back diagonal angle, chrome details, open highway stretching ahead, travel photography, adventure mood, warm sunset light',
    'rear three-quarter behind angle of a warrior looking at battlefield, dramatic scene, over-shoulder perspective, epic landscape, fantasy photography, cinematic composition, detailed',
    'rear three-quarter departure angle of a couple walking into sunset, romantic silhouette from behind, golden light, emotional storytelling, cinematic photography, warm atmosphere'
  ],

  // ============= CAMERA — SPECIAL SHOTS =============
  'pov-shot': [
    'POV first person view of hands opening an ancient treasure chest, golden light illuminating from within, subjective camera angle, adventure scene, cinematic, dramatic revelation, detailed',
    'POV shot first person perspective of rock climbing, looking down at vast valley below, hands gripping stone, vertigo feeling, extreme sports photography, dramatic height, breathtaking',
    'POV subjective camera view of walking through a vibrant Tokyo neon street at night, first person perspective, colorful signs, immersive urban experience, street photography',
    'POV first person angle of receiving a bouquet of flowers from someone, hands reaching out, warm indoor light, emotional moment, lifestyle photography, intimate perspective, soft focus'
  ],
  'over-shoulder': [
    'over the shoulder shot of two people in heated discussion, OTS dialogue angle, one person\'s shoulder in foreground, depth composition, cinematic photography, dramatic tension, detailed',
    'over the shoulder frame of a photographer reviewing images on camera screen, shoulder in foreground, creative process, documentary photography, warm studio light, candid moment',
    'over the shoulder conversation angle of a job interview, professional office setting, business attire visible, formal atmosphere, corporate photography, shallow depth of field',
    'over the shoulder perspective of an artist painting at easel, canvas visible past shoulder, creative process, warm studio light, documentary style, intimate viewpoint, artistic'
  ],
  'two-shot': [
    'two shot of a romantic couple sharing intimate moment face to face, dual subject framing, soft bokeh background, golden hour light, relationship photography, warm emotional tones',
    'group shot of diverse team in modern office, multiple subjects in frame, collaborative atmosphere, natural expressions, corporate photography, dynamic group dynamics, professional',
    'three shot of friends laughing together at outdoor café table, group interaction, candid expressions, warm afternoon light, lifestyle photography, friendship moment, natural joy',
    'two shot of chess opponents facing each other across the board, dramatic side lighting, intense concentration, competitive atmosphere, portrait photography, psychological tension'
  ],
  'establishing': [
    'establishing shot of a grand European city skyline at dawn, wide view of iconic landmarks, atmospheric morning mist, travel photography, cinematic scope, golden early light, 8K',
    'establishing shot of a remote lighthouse on rocky coast, location setup, dramatic stormy sky, crashing waves, landscape photography, moody atmosphere, sense of isolation, epic',
    'establishing shot showing massive sci-fi space station orbiting Earth, environment introduction, cinematic wide angle, digital art photography, epic scale, detailed technology, 8K',
    'establishing shot scene setting of a cozy mountain cabin in winter, snow-covered pines, warm light from windows, peaceful isolation, landscape photography, inviting atmosphere'
  ],
  'master-shot': [
    'master shot of an entire theater stage during performance, full scene coverage from audience perspective, dramatic stage lighting, wide view of all actors, theatrical photography',
    'master shot wide coverage of a busy restaurant interior, complete scene visible, warm ambient lighting, people dining, architectural interior, documentary photography, atmospheric',
    'master shot of a martial arts dojo during training, complete action visible, multiple fighters, wooden floor, traditional Japanese interior, documentary photography, dynamic energy',
    'master shot stage view of a live concert from center position, full band visible, dramatic stage lighting, crowd energy, concert photography, epic atmosphere, professional'
  ],
  'insert-shot': [
    'insert shot detail of a hand turning an ornate golden key in an ancient lock, close detail, dramatic side lighting, mystery atmosphere, cinematic cutaway, texture detail, 8K',
    'insert shot close detail of a wristwatch showing midnight, precise time visible, reflection on glass face, dramatic moment, product photography detail, clean focus, cinematic',
    'insert shot of a letter being opened revealing important information, hands and paper detail, warm desk lamp light, narrative detail, cinematic cutaway, storytelling element',
    'insert shot cutaway detail of fingers pressing piano keys, musical instrument close-up, artistic hands, warm spotlight, performance photography detail, elegant composition, intimate'
  ],

  // ============= CAMERA — COMPOSITION =============
  'rule-of-thirds': [
    'rule of thirds composition of a lighthouse placed at left intersection point, dramatic seascape, crashing waves, overcast sky, landscape photography, balanced asymmetric framing, 8K',
    'rule of thirds portrait with eyes placed at upper intersection points, natural outdoor setting, soft background, portrait photography, balanced composition, professional, harmonious',
    'rule of thirds balanced composition of a lone tree at right third line, vast open meadow, dramatic cloud sky, landscape photography, golden hour, asymmetric beauty, serene',
    'rule of thirds grid placement of a bird on wire at upper intersection, minimal sky background, negative space, wildlife photography, clean composition, simple elegance, sharp'
  ],
  'center-comp': [
    'center composition portrait with subject placed directly in middle, symmetrical framing, grand hallway background, dramatic perspective lines leading to center, architectural portrait, powerful',
    'center composition of a perfect red rose in exact middle of frame, symmetric placement, dark background, spotlight lighting, botanical photography, dramatic focus, elegant simplicity',
    'centered subject composition of a meditating monk in temple center, symmetrical environment, peaceful atmosphere, golden Buddha in background, spiritual photography, balanced harmony',
    'direct center composition of a vintage clock tower, perfectly centered in frame, blue sky background, architectural photography, formal framing, geometric symmetry, classic'
  ],
  'symmetrical': [
    'perfectly symmetrical composition of the Taj Mahal reflected in water, mirror image, classical architecture, morning light, travel photography, balanced structure, breathtaking symmetry, 8K',
    'symmetrical mirror composition of a long library corridor, books on both sides, vanishing point center, warm ambient light, architectural photography, orderly perfection, scholarly atmosphere',
    'symmetrical balanced structure of a butterfly with spread wings, perfect bilateral symmetry, macro photography, colorful patterns, nature detail, studio lighting, scientific beauty',
    'symmetric design composition of an ornate cathedral ceiling viewed from below, geometric patterns, religious architecture, golden light, overhead perspective, awe-inspiring detail'
  ],
  'frame-in-frame': [
    'frame within a frame composition using a natural stone arch, distant landscape visible through opening, layers of depth, landscape photography, creative framing, dramatic, 8K',
    'frame within a frame through a rustic doorway revealing sunlit garden beyond, architectural framing element, depth layers, lifestyle photography, warm inviting light, compositional depth',
    'frame within a frame using ornate window frame, cityscape visible through glass, interior foreground, urban photography, layered composition, atmospheric, rain on glass detail',
    'nested frames composition of photographer reflected in multiple mirrors, recursive framing, creative self-portrait, studio setup, artistic photography, infinite regression, conceptual'
  ],
  'diagonal': [
    'diagonal composition of a winding mountain road cutting across frame, dynamic angle, aerial perspective, landscape photography, S-curve leading line, dramatic scenery, energy, 8K',
    'diagonal dynamic composition of a surfer riding a massive wave, tilted energy line, action sports photography, powerful diagonal movement, ocean spray, dramatic moment, sharp',
    'diagonal tilted composition of a grand staircase cutting diagonally across frame, architectural lines, dramatic perspective, black and white photography, geometric energy, dynamic',
    'diagonal energy lines composition of lightning bolt across stormy sky, dramatic diagonal force, nature photography, high contrast, powerful atmosphere, split-second capture, electrifying'
  ],
  'layered': [
    'layered composition with flowers in foreground, person in midground, mountains in background, three distinct depth layers, landscape portrait, rich dimensional depth, atmospheric haze, 8K',
    'layered depth composition of a forest scene, fern leaves foreground, deer in middle distance, misty trees background, nature photography, atmospheric perspective, morning light',
    'layered foreground-background composition of café scene, coffee cup sharp in front, blurred couple talking behind, bokeh depth layers, lifestyle photography, storytelling depth',
    'layered dimensional depth of a Japanese garden, stone lantern foreground, koi pond middle, pagoda background, multiple depth planes, zen garden photography, peaceful composition'
  ],
  'negative-space': [
    'negative space composition of single bird flying in vast empty sky, minimal subject against expansive void, minimalist photography, isolation effect, clean white space, serene, 8K',
    'negative space minimalist composition of a lone figure on vast white salt flat, tiny subject surrounded by emptiness, minimalist landscape, stark beauty, isolation, peaceful',
    'negative space isolation effect of a single red umbrella on empty grey beach, minimal elements, vast open space, color contrast, minimalist photography, contemplative mood',
    'negative space white space composition of a small bonsai tree against plain white wall, zen minimalism, vast empty surroundings, Japanese aesthetic, clean photography, tranquil'
  ],

  // ============= LIGHTING — NATURAL LIGHT =============
  'golden-hour': [
    'golden hour portrait of a woman in wheat field, warm amber sunlight, long shadows, backlit hair glow, romantic atmosphere, natural golden tones, professional photography, dreamy, 8K',
    'golden hour sunset landscape, warm orange and pink sky reflecting on calm lake, silhouetted trees, magical light, landscape photography, atmospheric, breathtaking color palette'
  ],
  'blue-hour': [
    'blue hour twilight cityscape, deep indigo sky with city lights emerging, cool blue tones, calm evening atmosphere, urban photography, long exposure, serene city glow, cinematic',
    'blue hour urban scene of neon signs reflecting on wet street, twilight blue sky, cool atmospheric tones, city photography, moody ambiance, rain-soaked pavement, dramatic',
    'blue hour mystical atmosphere of a castle on hilltop, deep blue twilight sky, first stars visible, fairy tale mood, landscape photography, ethereal glow, enchanting scene',
    'blue hour evening blues of a fishing village harbor, boats resting on calm water, deep blue sky gradient, peaceful twilight, maritime photography, serene atmosphere, reflective'
  ],
  'overcast': [
    'overcast soft diffused lighting portrait outdoors, even illumination without harsh shadows, cloudy sky creating natural softbox, flattering skin tones, portrait photography, gentle light',
    'overcast evenly lit forest path, soft diffused daylight filtering through clouds, green foliage, no harsh shadows, nature photography, peaceful atmosphere, moody woodland scene'
  ],
  'harsh-sunlight': [
    'harsh direct sunlight casting strong geometric shadows on white Mediterranean wall, high contrast, sharp shadow lines, architectural photography, graphic composition, bold light, dramatic',
    'harsh sunlight high contrast portrait, strong shadows on face, dramatic chiaroscuro effect, midday sun, bold character portrait, editorial photography, intense expression, striking',
    'harsh direct sunlight on desert sand dunes, sharp definition of ridges and valleys, extreme contrast, golden sand texture, landscape photography, dramatic shadows, scorching atmosphere',
    'harsh sunlight sharp shadow definition of palm trees on concrete, graphic shadow patterns, tropical noon light, minimalist composition, abstract photography, geometric shadows, bold'
  ],

  // ============= LIGHTING — STUDIO =============
  'rembrandt': [
    'Rembrandt lighting portrait, signature triangle of light on cheek, dramatic chiaroscuro, dark background, classical portrait technique, professional studio photography, painterly quality, 8K',
    'Rembrandt lighting classic portrait study, triangle light pattern under eye, warm skin tones, Renaissance-inspired atmosphere, fine art portrait photography, dramatic shadows, elegant'
  ],
  'butterfly': [
    'butterfly lighting glamour portrait, shadow beneath nose creating butterfly shape, beauty dish overhead, flawless skin, fashion photography, Hollywood glamour style, elegant, professional',
    'butterfly lighting beauty shot of a model, centered overhead light source, symmetrical facial illumination, high-end cosmetic campaign style, studio photography, radiant skin, stunning'
  ],
  'split-lighting': [
    'split lighting dramatic portrait, face divided into light and shadow halves, high contrast, noir atmosphere, moody studio photography, mysterious character, dramatic composition, cinematic',
    'split lighting film noir style portrait, half face illuminated half in darkness, dramatic mood, detective story atmosphere, black and white tones, cinematic photography, intense'
  ],
  'rim-lighting': [
    'rim lighting portrait with luminous edge glow around subject, dark background, backlit contour highlighting hair and shoulders, dramatic separation, studio photography, ethereal outline, 8K',
    'rim lighting backlit outline of a dancer in motion, glowing edge light, dark studio background, silhouette with detail, performance photography, dramatic backlighting, artistic'
  ],

  // ============= LIGHTING — MOOD =============
  'neon-lights': [
    'neon lights cyberpunk portrait, pink and blue neon reflections on face, urban night scene, colorful artificial glow, street photography, futuristic atmosphere, vibrant colors, cinematic',
    'neon lights urban night scene with vibrant signage, colorful reflections on wet pavement, city nightlife, street photography, electric atmosphere, saturated colors, dynamic'
  ],
  'candlelight': [
    'candlelight warm intimate portrait, soft orange flickering glow on face, dark background, romantic atmosphere, low-key photography, warm color temperature, gentle shadows, intimate mood',
    'candlelight romantic dinner setting, warm golden glow illuminating table and faces, soft shadows, intimate atmosphere, lifestyle photography, cozy warm tones, gentle ambiance'
  ],
  'moonlight': [
    'moonlight blue-toned night portrait, silvery lunar illumination, cool color temperature, mysterious atmosphere, night photography, ethereal glow, starlit sky background, dreamlike',
    'moonlight night atmosphere on misty lake, silvery reflection on water, cool blue tones, nocturnal landscape, long exposure photography, magical serenity, lunar glow, peaceful',
    'moonlight mystical forest scene, silver beams filtering through trees, fog rolling between trunks, enchanted atmosphere, night landscape photography, fairy tale mood, luminous',
    'moonlight lunar glow on snow-covered mountain peaks, silver and blue tones, clear night sky with stars, cold beauty, winter night landscape photography, pristine atmosphere'
  ],
  'firelight': [
    'firelight campfire scene, warm orange flickering glow on faces of friends gathered around, dancing shadows, outdoor night, camping photography, warm inviting atmosphere, cozy gathering',
    'firelight warm portrait with fire warmth on skin, orange and amber tones, dark background with flame reflections, intimate mood, low-key portrait photography, primal atmosphere',
    'firelight flickering warm glow from fireplace, casting dancing shadows on walls, cozy winter interior, warm amber tones, lifestyle photography, intimate home atmosphere, inviting',
    'firelight dramatic scene of a blacksmith at forge, intense orange flame glow, sparks flying, powerful atmosphere, documentary photography, industrial warmth, craft tradition, dramatic'
  ],

  // ============= STYLE — ART STYLES (with images) =============
  'photorealistic': [
    'photorealistic portrait of a young woman, every pore and hair strand visible, natural skin texture, soft studio lighting, ultra-high resolution, indistinguishable from photograph, 8K detail',
    'photorealistic render of a luxury sports car in showroom, perfect reflections, chrome details, studio lighting, automotive visualization, flawless materials, commercial quality',
    'photorealistic ultra detailed food photography, gourmet dish with visible texture, steam rising, appetizing colors, restaurant quality, sharp focus on every ingredient, commercial',
    'photorealistic lifelike quality render of a living room interior, natural sunlight through windows, realistic material textures, architectural visualization, warm inviting space, detailed'
  ],
  'hyperrealistic': [
    'hyperrealistic extreme detail portrait, individual skin pores visible, micro hair detail, photographic precision beyond reality, studio lighting, uncanny valley quality, 8K resolution',
    'hyperrealistic beyond reality still life of water glass, every light refraction captured, condensation drops, caustic light patterns, impossible level of detail, studio photography',
    'hyperrealistic micro detail of an insect on leaf, every compound eye facet visible, dewdrop on antenna, beyond macro photography, scientific precision, nature documentation, stunning',
    'hyperrealistic ultra precision mechanical watch interior, every gear and jewel bearing visible, reflective metal surfaces, engineering beauty, product visualization, obsessive detail'
  ],
  'digital-painting': [
    'digital painting of an enchanted forest with bioluminescent mushrooms, rich vibrant colors, soft luminous brushstrokes, fantasy atmosphere, detailed foliage, magical woodland, painterly',
    'digital painting portrait of a cyberpunk character with neon-lit visor, rich color palette, visible digital brushwork, sci-fi atmosphere, character design, detailed tech elements',
    'digital painting of a serene mountain lake at golden hour, atmospheric depth, rich warm colors, soft painterly brushstrokes, landscape art, peaceful mood, detailed reflections',
    'digital painting of a futuristic cityscape at night, neon lights reflecting on wet streets, cinematic composition, detailed architecture, cyberpunk mood, vibrant digital canvas'
  ],
  'concept-art': [
    'concept art of an ancient floating city above clouds, dramatic lighting, epic scale, detailed architecture, fantasy environment design, cinematic atmosphere, visual development, 8K',
    'concept art environment of a bioluminescent underground cavern, glowing crystal formations, dramatic scale, fantasy world design, atmospheric lighting, detailed geology, magical',
    'concept art of a biomechanical dragon creature, detailed anatomy, dark fantasy design, dramatic pose, creature concept, cinematic lighting, professional visual development',
    'concept art design of a steampunk airship hangar, industrial architecture, warm gas lamp lighting, brass and copper details, Victorian sci-fi atmosphere, detailed environment'
  ],
  'matte-painting': [
    'matte painting of an ancient kingdom on cliff edge overlooking vast ocean, waterfalls cascading into mist, dramatic sunset sky, photorealistic epic landscape, cinematic scale, 8K',
    'matte painting of a futuristic megacity skyline, atmospheric haze and volumetric light, towering skyscrapers, flying vehicles, sci-fi environment, cinematic set extension, ultra detailed',
    'matte painting of overgrown ancient temple ruins in dense jungle, volumetric god rays streaming through canopy, mystical atmosphere, photorealistic landscape, archaeological fantasy',
    'matte painting fantasy world set extension, massive waterfall city carved into mountain, rainbow mist, epic scale architecture, cinematic environment, detailed vegetation, breathtaking'
  ],
  '3d-render': [
    'octane render 3D model of a translucent crystal dragon figurine, subsurface scattering, caustic light effects, studio lighting, highly detailed, product visualization, photorealistic',
    'unreal engine 3D render of a futuristic product design, metallic and glass materials, studio lighting setup, reflective surfaces, commercial visualization, professional, clean',
    'octane render 3D visualization of luxury perfume bottle, glass refraction, studio environment, product photography style, photorealistic materials, elegant composition, commercial quality',
    '3D render architectural visualization of modern minimalist interior, warm natural lighting, realistic material textures, clean design, unreal engine quality, professional, inviting space'
  ],
  'anime-style': [
    'anime style warrior character in dynamic battle pose, glowing magical sword, cel shading, vibrant saturated colors, detailed eyes and hair, Japanese animation quality, action scene',
    'anime style high school girl at sunset rooftop, golden hour lighting, soft pastel sky, Makoto Shinkai inspired atmosphere, detailed background, emotional scene, beautiful',
    'anime style fantasy mage casting powerful spell, flowing robes and magical particles, detailed character design, vibrant energy effects, Japanese animation, epic moment, colorful',
    'anime style portrait with detailed expressive eyes, wind-blown hair, cherry blossom petals, soft cel shading, Japanese illustration style, emotional character, beautiful composition'
  ],
  'cartoon-style': [
    'cartoon style funny animal character with exaggerated big eyes, bold clean outlines, bright cheerful colors, Cartoon Network style, playful design, simple shapes, fun personality',
    'cartoon style colorful underwater adventure scene, friendly sea creatures, exaggerated proportions, bubbly atmosphere, children\'s animation quality, vibrant palette, playful composition',
    'cartoon style whimsical treehouse in magical forest, bold outlines, saturated fun colors, fantasy children\'s illustration, exaggerated proportions, storybook quality, imaginative',
    'cartoon style toon character in action pose, stretchy exaggerated movement, speed lines, bold primary colors, classic animation style, dynamic energy, humorous expression'
  ],
  'comic-book': [
    'comic book style superhero standing on rooftop at night, bold ink lines, halftone dot pattern, dramatic pose, vibrant primary colors, Marvel style illustration, action ready',
    'comic book style epic battle scene with dynamic action, speed lines and impact effects, bold coloring, dramatic perspective, halftone shading, graphic novel quality, intense',
    'comic book style pop art portrait, bold black outlines, Ben-Day dots pattern, vibrant contrasting colors, Roy Lichtenstein inspired, graphic design, striking visual impact',
    'comic book style action hero in mid-flight, cape flowing, dramatic upward angle, bold ink work, vintage halftone effects, classic superhero comic aesthetic, powerful dynamism'
  ],
  'impressionism': [
    'impressionism painting of water lilies on tranquil pond, visible loose brushstrokes, dappled sunlight on water, Monet inspired, plein air atmosphere, soft natural colors, serene beauty',
    'impressionism style painting of a Parisian café terrace, visible brushwork capturing light, warm afternoon glow, atmospheric scene, Renoir inspired, soft focus, romantic ambiance',
    'impressionism painting of a meadow in full bloom, vibrant wildflowers, loose brushstrokes capturing movement of wind, natural plein air light, color impressions, Monet palette',
    'impressionism landscape with visible brushstroke texture, golden wheat field at sunset, atmospheric light effects, painterly quality, Impressionist masters inspired, warm harmonious colors'
  ],
  'surrealism': [
    'surrealism dreamlike scene of melting clocks draped over barren landscape, impossible physics, Salvador Dali inspired, hyper-detailed, warm desert tones, subconscious imagery, dreamscape',
    'surrealism painting of floating islands connected by impossible staircases, Escher meets Magritte, dreamlike atmosphere, impossible architecture, hyper-detailed fantasy, mind-bending',
    'surrealism art of a room where the floor becomes ocean, fish swimming through floating furniture, photorealistic impossible scene, Magritte inspired, dreamlike atmosphere, poetic',
    'surrealism impossible reality of a giant clock growing from a tree, melting time, surreal landscape, Dali inspired imagination, hyper-detailed painting, dreamscape, subconscious beauty'
  ],
  'minimalism': [
    'minimalism art of a single tree on vast empty horizon, muted earth tones, extensive negative space, serene contemplative mood, simple composition, clean aesthetic, quiet beauty',
    'minimalism still life of single ceramic vase on white shelf, clean composition, soft single shadow, limited color palette, pure simple beauty, zen aesthetic, refined elegance',
    'minimalism landscape of ocean horizon line dividing blue tones, essential elements only, vast empty sky and sea, contemplative mood, negative space mastery, serene, meditative',
    'minimalism reduced aesthetic of geometric concrete architecture, clean lines, negative space, monochrome tones, Tadao Ando inspired, natural light, architectural purity, zen philosophy'
  ],
  'watercolor': [
    'watercolor painting of a misty mountain landscape, wet-on-wet technique creating soft bleeding edges, transparent pigment layers, atmospheric depth, delicate tonal gradations, serene',
    'watercolor painting of wildflowers in glass vase, loose spontaneous brushstrokes, transparent watercolor pigments, white paper showing through, delicate botanical illustration, fresh'
  ],

  // ============= MEDIUM =============
  'oil-painting': [
    'oil painting portrait in classical Renaissance style, visible impasto brushstrokes, rich warm color palette, glazing technique depth, canvas texture visible, fine art museum quality, 8K',
    'oil painting landscape of stormy seascape, thick textured brushstrokes, dramatic dark palette, Turner inspired atmosphere, visible paint layers, gallery worthy, emotional power'
  ],
  'acrylic-painting': [
    'acrylic painting vibrant abstract expressionist work, bold thick strokes, vivid saturated colors on canvas, textured surface, contemporary art style, energetic composition, gallery quality',
    'acrylic painting modern pop art portrait, flat bold color blocks, crisp edges, vibrant palette, contemporary illustration style, graphic quality, clean execution, striking design'
  ],
  'pencil-drawing': [
    'detailed pencil drawing portrait, precise graphite shading, realistic tonal values, visible pencil stroke texture, fine art drawing, classical technique, hyperrealistic skill, museum quality',
    'pencil drawing of hands in prayer, delicate graphite work, subtle tonal gradations, anatomical precision, fine art illustration, traditional drawing mastery, emotional depth, beautiful'
  ],
  'charcoal': [
    'charcoal drawing dramatic portrait, rich deep blacks and expressive marks, smudged atmospheric effects, raw emotional power, figure drawing, traditional medium, stark contrast, intense',
    'charcoal drawing expressive figure study, bold gestural marks on textured paper, dramatic chiaroscuro, visible charcoal texture, life drawing, artistic spontaneity, powerful composition'
  ],
  'digital-photography': [
    'high-end digital photography portrait, crisp resolution, accurate color reproduction, modern camera quality, studio controlled lighting, commercial photography standard, professional grade, detailed',
    'digital photography modern landscape capture, HDR dynamic range, vivid color accuracy, sharp focus throughout, contemporary technique, landscape photography, crystal clear quality, stunning'
  ],
  'film-photography': [
    'analog film photography portrait, natural film grain texture, Kodak Portra warm tones, slightly soft focus, nostalgic vintage feel, authentic photographic quality, organic imperfections',
    'film photography street scene on expired Fujifilm, visible grain structure, muted vintage color palette, light leaks at edges, analog aesthetic, nostalgic urban moment, authentic'
  ],
  'polaroid': [
    'Polaroid instant photo style portrait, white border frame, slightly washed-out vintage colors, soft focus quality, square format, retro aesthetic, nostalgic instant film look, casual',
    'Polaroid instant film photo of a beach sunset, characteristic color shift, white frame border, faded warm tones, vintage summer memory, lo-fi aesthetic, authentic instant quality'
  ],
  'long-exposure': [
    'long exposure photograph of car light trails on highway at night, smooth light streaks, urban night photography, tripod sharp buildings, flowing movement captured, dynamic city, stunning',
    'long exposure silky waterfall photography, smooth flowing water texture, sharp surrounding rocks, ND filter effect, nature photography, ethereal water movement, peaceful composition'
  ],
  'collage': [
    'mixed media paper collage artwork, torn magazine clippings layered with painted elements, textured handmade composition, vintage ephemera, artistic assemblage, creative visual storytelling',
    'analog collage of vintage photographs and botanical illustrations, layered paper textures, nostalgic found imagery, handcut edges, artistic composition, mixed media, surreal narrative'
  ],
  'digital-collage': [
    'digital collage composite artwork, seamlessly blended photographic elements, surreal digital manipulation, creative photo montage, contemporary digital art, conceptual visual design, striking',
    'digital collage surreal photo manipulation, impossible scene constructed from multiple photographs, seamless compositing, dreamlike digital art, creative visual narrative, conceptual'
  ],
  'mixed-technique': [
    'mixed media artwork combining watercolor paint with digital elements, layered textures, experimental technique fusion, contemporary art expression, innovative material combination, unique',
    'mixed technique experimental art piece, acrylic paint and photo transfer on canvas, collage elements, textural variety, contemporary mixed media, gallery-worthy artistic exploration'
  ],

  // ============= VIDEO =============
  'pan': [
    'cinematic horizontal camera pan revealing vast desert landscape, smooth lateral movement from left to right, panoramic vista unfolding, professional cinematography, film still quality, 8K',
    'camera pan across a bustling street market, horizontal tracking movement, colorful stalls and people, documentary cinematography style, immersive environmental reveal, dynamic'
  ],
  'tilt': [
    'camera tilt up shot revealing towering skyscraper from base to top, slow vertical movement, architectural grandeur, urban cinematography, dramatic upward reveal, professional',
    'cinematic tilt down from dramatic cloudy sky to reveal a solitary figure on beach, vertical camera movement, atmospheric reveal, storytelling cinematography, mood setting',
    'camera tilt up revealing ancient temple spire reaching into sky, gradual vertical pan, architectural wonder, travel cinematography, sacred atmosphere, awe-inspiring scale',
    'tilt down movement from forest canopy to reveal hidden waterfall pool, vertical camera movement, nature cinematography, magical discovery, pristine environment, stunning reveal'
  ],
  'dolly': [
    'dolly shot moving forward through dimly lit corridor toward bright doorway, smooth forward camera movement, building tension, cinematic approach, dramatic reveal, atmospheric, suspenseful',
    'backward dolly pull revealing the full scale of a grand ballroom, smooth retreating camera, architectural reveal, elegant interior, cinematic composition, expansive space, impressive',
    'smooth dolly movement through enchanted forest, forward camera glide, passing ancient trees, magical atmosphere, fantasy cinematography, immersive journey, dreamlike movement',
    'dolly zoom Vertigo effect on suburban street, simultaneous forward dolly and zoom out, disorienting visual effect, psychological tension, Hitchcock technique, cinematic mastery'
  ],
  'tracking': [
    'tracking shot following athlete running through city streets, lateral camera movement keeping pace, dynamic action, urban backdrop, sports cinematography, energetic, professional, kinetic',
    'smooth tracking shot following a dancer through ornate hallway, lateral camera movement matching subject, graceful motion, elegant architecture, performance cinematography, artistic',
    'tracking shot following cyclists through countryside road, steady lateral movement, racing action, green landscape, sports cinematography, dynamic energy, professional, exhilarating',
    'smooth tracking shot following character through crowded marketplace, steady camera movement, immersive perspective, cultural environment, documentary cinematography, vibrant atmosphere'
  ],
  'crane': [
    'crane shot ascending from street level to reveal sprawling cityscape, dramatic upward camera movement, expanding vista, aerial perspective reveal, cinematic grandeur, 8K',
    'crane shot epic reveal sweeping up from ground to dramatic mountain panorama, ascending camera movement, breathtaking landscape reveal, cinematic scope, awe-inspiring, professional'
  ],
  'handheld': [
    'handheld camera documentary style shot of protest march, natural camera shake, immersive raw footage, authentic movement, photojournalism cinematography, immediate and visceral, real',
    'handheld intimate camera following subject through apartment, natural shake and movement, personal perspective, indie film aesthetic, documentary feel, authentic and honest',
    'handheld raw handheld footage of street performance, organic camera movement, authentic energy, crowds and music, documentary cinematography, spontaneous capture, vivid atmosphere',
    'handheld intimate camera view of artist at work in studio, natural subtle movement, personal close perspective, creative process documentation, indie cinematography, authentic'
  ],
  'cut': [
    'film still before hard cut transition, scene A of character in bright sunlit room, instant scene change upcoming, sharp edit point, cinematic pacing, dramatic contrast, crisp',
    'film still after hard cut to dramatically different scene, contrasting location and mood, instant visual shift, editorial rhythm, cinematic storytelling through juxtaposition, striking',
    'quick cut montage sequence film still, rapid scene changes, dynamic editing rhythm, energetic pacing, action cinematography, multiple angles, visual storytelling, intense momentum',
    'smash cut film still showing abrupt scene transition, sudden contrast from calm to chaos, dramatic editorial effect, cinematic shock, instant mood shift, powerful storytelling'
  ],
  'fade': [
    'film still of scene fading to black, gradual darkness encroaching from edges, cinematic ending transition, emotional conclusion, soft visual dissolution, melancholic mood, atmospheric',
    'fade in film still emerging from darkness, image gradually materializing, new scene beginning, hopeful opening, cinematic dawn, gentle visual emergence, mysterious atmosphere',
    'gradual fade transition between two overlapping scenes, ghostly double exposure effect, time passage visualization, poetic cinematography, dreamlike blending, emotional storytelling',
    'film still of soft ending fade, warm scene gradually dissolving to white, peaceful conclusion, serene transition, gentle cinematography, emotional resolution, contemplative mood'
  ],
  'dissolve': [
    'cross dissolve film still showing two scenes blended together, overlapping transitional moment, dreamlike quality, time passage visualization, poetic cinematography, ghostly double image',
    'dissolve transition smooth blend between face and landscape, creative overlap, artistic cinematography, visual metaphor, identity and place connection, dreamlike blending, poetic',
    'dissolve overlapping images of past and present scene, temporal blend, nostalgic atmosphere, memory cinematography, soft transparent layering, time travel visualization, emotional',
    'dissolve soft transition between underwater and sky scenes, seamless visual blend, fluid connection between worlds, poetic cinematography, tranquil atmosphere, visual poetry'
  ],
  'wipe': [
    'wipe transition film still showing directional reveal, one scene sliding away to reveal another, clean geometric edge, retro editing style, dynamic scene change, graphic, bold',
    'screen wipe transition mid-point, half old scene half new scene visible, clean dividing line, cinematic editorial effect, visual storytelling technique, dynamic transition',
    'creative diagonal wipe transition, angular reveal of new scene beneath old, geometric edge pattern, stylistic editing choice, graphic design inspired, bold cinematography',
    'star wipe creative transition effect, expanding geometric shape revealing new scene, playful editing style, retro film technique, fun visual transition, nostalgic, dynamic'
  ],
  'match-cut': [
    'match cut visual pairing of spinning basketball transitioning to spinning globe, shape and motion match, creative editing, visual storytelling, seamless conceptual transition, clever',
    'match cut shape matching between moon and eye, circular form connecting two scenes, poetic visual rhyme, artistic cinematography, conceptual editing, symbolic connection, elegant',
    'match cut action match of door closing in one scene opening in another, movement continuity across scenes, seamless narrative flow, creative editing technique, smooth storytelling',
    'match cut creative link between waterfall and flowing hair, visual rhyme, organic shape matching, artistic cinematography, poetic transition, nature and human connection, beautiful'
  ],
  'slow-motion': [
    'slow motion dramatic shot of water droplet impact creating perfect crown splash, time stretched to reveal invisible detail, high speed camera, stunning fluid dynamics, mesmerizing',
    'slow motion detail of boxer\'s punch impact, rippling skin effect visible, extreme time stretch, combat sports cinematography, dramatic power visualization, intense action, raw force',
    'slow motion capture of dancer mid-leap, flowing fabric and hair frozen in elegant arc, time stretched grace, performance cinematography, balletic beauty, ethereal movement, stunning',
    'slow motion epic moment of eagle catching fish from water, splash frozen in time, wildlife cinematography, incredible detail revealed, nature documentary, majestic power, breathtaking'
  ],
  'time-lapse': [
    'time-lapse film still of day to night city transition, compressed hours showing changing light, urban transformation, accelerated time photography, city lights emerging, dynamic',
    'time-lapse of blooming flower opening petals over hours, compressed botanical growth, nature\'s clock accelerated, macro cinematography, delicate transformation, beautiful process',
    'time-lapse cloud movement over mountain peak, dramatic sky time compression, sweeping weather patterns, landscape cinematography, atmospheric drama, nature\'s majesty, epic',
    'time-lapse star trails circling around north star, long exposure night sky, celestial rotation captured, astrophotography, cosmic time compression, universal motion, awe-inspiring'
  ],
  'freeze-frame': [
    'freeze frame frozen moment of athlete mid-air during high jump, peak action captured, time completely stopped, sports photography, dramatic suspension, athletic grace, powerful, 8K',
    'freeze frame action pause of shattering glass in mid-explosion, fragments frozen in space, dramatic still moment, high-speed capture, destruction beauty, time frozen, spectacular',
    'freeze frame still capture of a hummingbird hovering at flower, wings frozen mid-beat, impossible moment preserved, wildlife photography, delicate precision, natural wonder, magical',
    'freeze frame dramatic time stop of ocean wave about to break, massive wall of water frozen, raw power captured, nature photography, awe-inspiring moment, marine grandeur'
  ],
  'motion-blur': [
    'motion blur speed effect of racing car on track, streaked background showing velocity, panning photography technique, automotive action, extreme speed visualization, dynamic energy, sharp car',
    'motion blur movement effect of spinning ballet dancer, circular blur trails, artistic movement capture, long exposure performance, ethereal dance photography, rotational energy, graceful',
    'motion blur dynamic effect of cyclist speeding through urban street, blurred background streaks, panning action shot, sports photography, speed and motion, kinetic energy, thrilling',
    'motion blur artistic action effect of fireworks explosion, light trails expanding outward, long exposure night, celebration photography, radiant energy, dynamic light painting, spectacular'
  ],

  // ============= TOOLB/AIFI SPECIAL =============
  'instructor-reviews': [
    'EBS 특별강의 현장, 전문 강사가 대형 스크린 앞에서 AI 기술 설명, 교육 환경, documentary photography',
    '기업특강 현장, 임직원 대상 AI 활용 교육, 회의실 환경, 전문적 분위기, corporate event photography',
    '팀 특강 현장, 소규모 그룹 인터랙티브 교육, 협업 분위기, hands-on workshop photography',
    '실습 강의 현장, 참가자들이 노트북으로 실습 중, 몰입된 분위기, educational workshop documentation',
    '워크샵 현장, 참가자 간 토론과 협업, 크리에이티브 환경, collaborative workshop photography',
    '세미나 현장, 대규모 청중 대상 발표, 전문적 무대 환경, seminar event photography',
    '특강 현장, AI와 창작의 만남을 주제로 한 강연, 열정적인 분위기, lecture event photography',
    '교육 현장 전체 모습, 참가자와 강사의 상호작용, 활기찬 학습 환경, educational event documentation'
  ],
  'aifi-image-generator': [
    'AI 이미지 생성 도구 인터페이스, 텍스트 프롬프트를 이미지로 변환, AI technology interface, modern UI design, creative tool',
    'AI 창작 도구 결과물 예시, 고품질 AI 생성 이미지, creative output demonstration, professional quality, technology showcase'
  ],
  'aifi-prompt-extractor': [
    '이미지 분석 AI 도구, 업로드된 이미지에서 프롬프트 추출, reverse engineering interface, technology tool, analytical',
    '프롬프트 추출 결과 화면, AI가 분석한 상세 프롬프트 텍스트, detailed analysis output, technical interface, informative'
  ],
  'aifi-image-variator': [
    '이미지 변형 AI 도구, 원본 이미지 기반 다양한 변형 생성, creative variation interface, artistic tool, innovative',
    '이미지 변형 결과물, AI가 생성한 창작적 편집본, multiple creative outputs, artistic variation, technology demonstration'
  ],
  'aifi-video-prompt': [
    '영상 프롬프트 생성 AI 도구, 텍스트 기반 영상 제작 인터페이스, video creation tool, modern technology UI, cinematic',
    'AI 영상 생성 결과물, 텍스트 프롬프트로 만든 영상 스틸, video output preview, creative technology, professional quality'
  ],

  // ============= REMAINING STYLE ENTRIES WITH IMAGES =============
  // These entries have images[] from the exploration data
  'isometric': [
    'isometric 3D illustration of a cozy room interior, 30-degree angle view, detailed miniature scene, clean geometric style, pastel color palette, game art quality, charming design',
    'isometric city block with tiny buildings and cars, miniature world view, clean vector-like style, colorful architecture, urban planning visualization, cute detailed design',
    'isometric fantasy dungeon room, treasure chests and torches, game art style, detailed tileset perspective, pixel-perfect geometry, RPG environment design, atmospheric',
    'isometric workspace desk with computer and plants, lifestyle miniature scene, clean flat colors, 3D geometric style, product illustration, cozy detailed setup'
  ],
  'low-poly': [
    'low-poly 3D render of a majestic deer in forest, geometric faceted surfaces, minimal polygon count, stylized nature scene, pastel lighting, modern game art aesthetic, clean',
    'low-poly landscape with geometric mountains and river, faceted terrain, limited polygon style, sunset gradient sky, minimalist 3D art, modern aesthetic, peaceful environment',
    'low-poly portrait bust, geometric facial planes, angular stylized features, modern digital sculpture, clean studio lighting, artistic abstraction, contemporary 3D art',
    'low-poly underwater coral reef scene, geometric fish and sea life, faceted ocean environment, colorful stylized nature, modern 3D illustration, tranquil atmosphere'
  ],
  'claymation': [
    'claymation style character with visible fingerprints in clay surface, stop-motion aesthetic, handmade charm, warm studio lighting, Wallace and Gromit inspired, tactile quality, whimsical',
    'claymation miniature set with clay buildings and trees, handcrafted world, visible texture imperfections, warm lighting, Aardman inspired, charming stop-motion aesthetic',
    'claymation animal character with exaggerated features, smooth clay surface, big eyes, colorful handmade figure, stop-motion quality, playful personality, endearing design',
    'claymation food scene with clay dishes on table, miniature handcrafted details, charming imperfections, warm lighting, stop-motion aesthetic, delightful craftsmanship'
  ],
  'voxel-art': [
    'voxel art 3D pixel cityscape, cubic building blocks, retro game aesthetic, colorful Minecraft-like world, isometric perspective, detailed block construction, charming lo-fi 3D',
    'voxel art character design, cubic pixel figure, retro 3D game style, clean blocky proportions, limited color palette, nostalgic gaming aesthetic, cute geometric design',
    'voxel art nature landscape, cubic trees and terrain, block-based world building, sunset gradient sky, retro 3D aesthetic, peaceful environment, gaming inspired, charming',
    'voxel art interior room scene, cubic furniture and objects, Minecraft-inspired style, warm lighting, cozy blocky space, retro 3D game aesthetic, detailed construction'
  ],
  'flat-illustration': [
    'flat illustration of a busy urban park scene, simplified geometric shapes, bold flat colors, no gradients or shadows, modern vector style, clean minimalist design, editorial',
    'flat illustration editorial style woman walking with umbrella, clean geometric shapes, limited flat color palette, modern design aesthetic, Scandinavian illustration style, elegant',
    'flat illustration of travel landmarks collage, iconic buildings simplified to basic shapes, bold color blocking, modern poster design, editorial illustration, graphic and clean',
    'flat illustration nature scene with deer in forest, simplified organic shapes, flat muted earth tones, modern illustration style, peaceful composition, children\'s book quality'
  ],
  'line-art': [
    'delicate line art botanical illustration of wildflowers, fine ink strokes, no color fill, detailed crosshatching for depth, scientific illustration quality, elegant drawing, classic',
    'line art portrait with flowing continuous lines, minimal elegant strokes, artistic abstraction, modern illustration, pen and ink quality, sophisticated simplicity, expressive',
    'line art architectural drawing of Gothic cathedral, precise technical illustration, detailed linework, cross-section view, engineering beauty, classical draftsmanship, informative',
    'line art fashion illustration, fluid elegant strokes, minimal figure drawing, haute couture design, editorial quality, sophisticated pen work, graceful movement captured'
  ],
  'vector-art': [
    'vector art geometric portrait, clean sharp edges, bold flat color shapes, scalable graphic design, modern illustration, abstract face construction, digital precision, striking',
    'vector art landscape with clean geometric horizon, flat color blocking, sharp edges, sunrise gradient, modern graphic design, minimalist nature illustration, crisp and clean',
    'vector art animal character design, clean curves and shapes, bold primary colors, mascot illustration quality, flat design aesthetic, professional graphic, playful personality',
    'vector art geometric floral pattern, precise mathematical curves, bold color palette, seamless repeating design, graphic design quality, modern decorative, visually striking'
  ],
  'children-illustration': [
    'children\'s book illustration of a teddy bear picnic in meadow, soft warm watercolor style, gentle friendly characters, whimsical scene, storybook quality, warm inviting colors',
    'children\'s illustration of a magical treehouse, friendly animals gathered around, soft crayon-like textures, warm happy colors, storybook adventure, imaginative world, gentle',
    'children\'s illustration bedtime story scene, cute animals reading together, soft pastel colors, cozy warm atmosphere, gentle brushwork, nurturing mood, sweet and tender',
    'children\'s book illustration of a friendly dragon and child, whimsical fantasy scene, soft watercolor washes, gentle character design, magical friendship, warm storytelling'
  ],
  'botanical-art': [
    'botanical art detailed illustration of a rose in full bloom, scientific accuracy with artistic beauty, fine detailed petals, classical botanical plate, white background, elegant',
    'botanical illustration of herbs and medicinal plants, precise scientific drawing, labeled specimens, vintage botanical atlas style, detailed ink and watercolor, educational art',
    'botanical art of exotic orchid varieties, delicate color rendering, precise petal structure, natural history illustration quality, white background, scientific beauty, refined',
    'botanical illustration of autumn leaves collection, detailed vein structure, warm color palette, scientific precision with artistic flair, natural history style, educational beauty'
  ],
  'expressionism': [
    'expressionism painting of anguished figure against swirling sky, distorted emotional forms, bold aggressive brushstrokes, intense color palette, Munch inspired, raw psychological power',
    'expressionism landscape with violent swirling colors, distorted perspective, emotional abstraction, bold thick paint application, inner turmoil reflected in nature, Kirchner palette',
    'expressionism portrait with exaggerated angular features, vivid unnatural colors, emotional distortion, bold brushwork, Die Brücke inspired, psychological intensity, raw and powerful',
    'expressionism urban scene with distorted buildings, jarring color combinations, anxious atmosphere, bold angular composition, German Expressionism style, emotional city, intense'
  ],
  'art-nouveau': [
    'art nouveau illustration with flowing organic curves, woman surrounded by floral motifs, Alphonse Mucha inspired, decorative border elements, elegant line work, golden tones, ornate',
    'art nouveau decorative panel with intertwining plant forms, sinuous organic lines, elegant typography, Mucha poster style, warm earth tones, ornamental beauty, gilded details',
    'art nouveau stained glass inspired design, flowing natural forms, rich jewel tones, organic curved leading lines, Tiffany style, luminous color, decorative art masterpiece',
    'art nouveau botanical ornament pattern, stylized lily and vine motifs, flowing symmetric design, elegant curves, Jugendstil aesthetic, decorative beauty, fin de siècle elegance'
  ],
  'art-deco': [
    'art deco geometric poster design, bold angular patterns, metallic gold and black palette, luxury aesthetic, 1920s glamour, Chrysler Building inspired, sharp symmetry, opulent',
    'art deco fashion illustration, streamlined elegant figure, geometric patterns, gold and black color scheme, Gatsby era glamour, architectural symmetry, sophisticated design',
    'art deco interior design visualization, geometric furniture and patterns, chrome and glass materials, luxury aesthetic, Hollywood Regency style, glamorous symmetry, sophisticated',
    'art deco typographic poster, bold geometric letterforms, stepped pyramid motifs, metallic and jewel tones, vintage luxury advertising, 1920s design excellence, striking composition'
  ],
  'baroque': [
    'baroque painting dramatic religious scene, chiaroscuro lighting, rich dark palette, theatrical composition, Caravaggio inspired, ornate detailed rendering, emotional intensity, masterful',
    'baroque still life painting, overflowing table with fruits and flowers, rich warm tones, dramatic side lighting, Dutch Golden Age quality, sumptuous detail, vanitas symbolism',
    'baroque ceiling fresco style, angels and clouds in dramatic perspective, trompe l\'oeil depth, warm golden palette, religious grandeur, masterful technique, heavenly vision',
    'baroque portrait of nobleman in ornate clothing, dramatic Rembrandt lighting, rich dark background, psychological depth, detailed fabric rendering, museum masterpiece quality'
  ],
  'renaissance': [
    'Renaissance painting of noble woman in classical pose, Leonardo da Vinci technique, sfumato atmospheric perspective, warm earth tones, humanist idealism, timeless beauty, masterful',
    'Renaissance religious altarpiece composition, balanced pyramidal arrangement, idealized figures, rich tempera and gold, Raphael inspired harmony, divine light, spiritual grandeur',
    'Renaissance botanical study drawing, detailed observation from nature, scientific accuracy, Leonardo\'s notebook style, sepia ink, precise rendering, intellectual curiosity, beautiful',
    'Renaissance architectural perspective painting, mathematical precision, classical columns and arches, vanishing point composition, Brunelleschi influence, ideal city vision, harmonious'
  ],
  'ukiyo-e': [
    'ukiyo-e woodblock print style of ocean wave, bold flat color areas, black outline contours, Hokusai Great Wave inspired, Japanese traditional art, dynamic water forms, iconic',
    'ukiyo-e style Mount Fuji landscape, layered flat color planes, traditional Japanese composition, cherry blossom foreground, Hiroshige inspired, serene contemplation, masterful simplicity',
    'ukiyo-e woodblock print portrait of kabuki actor, bold dramatic expression, flat color areas with line detail, traditional Japanese theater art, striking character design',
    'ukiyo-e style bridge over koi pond, refined Japanese woodblock technique, flat color areas, delicate botanical details, peaceful garden scene, traditional printmaking beauty'
  ],
  'pop-art': [
    'pop art bold portrait in Andy Warhol style, repeated face in different color variations, screen print aesthetic, vivid neon colors, celebrity culture commentary, iconic design',
    'pop art comic panel style illustration, Ben-Day dots, bold primary colors, thought bubble with text, Roy Lichtenstein inspired, graphic boldness, cultural commentary, striking',
    'pop art Campbell\'s soup style product reimagination, commercial object elevated to art, bold flat colors, consumer culture commentary, Warhol aesthetic, screen print quality',
    'pop art collage of everyday objects, bold outlines and flat vibrant colors, commercial culture celebration, playful composition, 1960s aesthetic, graphic design influence, fun'
  ],
  'psychedelic': [
    'psychedelic art with swirling fractal patterns, vivid neon rainbow colors, kaleidoscopic symmetry, 1960s counterculture aesthetic, mind-expanding visuals, op-art influence, trippy, vibrant',
    'psychedelic poster art with flowing organic typography, melting rainbow colors, mushroom motifs, concert poster aesthetic, Grateful Dead era design, mind-bending patterns, groovy',
    'psychedelic landscape with impossible colors and melting horizons, reality distortion, vibrant acid-trip palette, surreal mushroom forest, altered consciousness visualization, trippy',
    'psychedelic mandala pattern with infinite geometric complexity, neon fluorescent colors, sacred geometry, meditative symmetry, transcendent design, kaleidoscopic beauty, hypnotic'
  ],
  'steampunk': [
    'steampunk mechanical portrait, brass goggles and clockwork accessories, Victorian aesthetics with technology, warm copper tones, gear mechanisms, retro-futuristic design, industrial elegance',
    'steampunk airship flying over Victorian London, brass and copper construction, steam-powered propulsion visible, adventure atmosphere, retro-futuristic world, Jules Verne inspired, epic',
    'steampunk laboratory interior, brass instruments and glass tubes, steam pipes and pressure gauges, warm amber lighting, mad scientist aesthetic, detailed mechanism, industrial beauty',
    'steampunk clockwork automaton robot, intricate gear mechanisms visible, brass and copper materials, Victorian engineering marvel, retro-futuristic design, mechanical wonder, detailed'
  ],
  'cyberpunk': [
    'cyberpunk neon-lit street scene, rain-soaked pavement reflecting holographic advertisements, augmented citizens, Blade Runner atmosphere, futuristic dystopia, vivid neon colors, detailed',
    'cyberpunk character portrait with neural implants and LED eyes, neon-lit face, futuristic technology integrated with human, dark sci-fi aesthetic, high-tech low-life, striking',
    'cyberpunk megacity skyline, towering neon skyscrapers, flying vehicles, holographic billboards, perpetual night, rain and smog atmosphere, Blade Runner inspired, dystopian beauty',
    'cyberpunk underground hacker den, multiple glowing screens, cable mess, neon ambient light, tech noir atmosphere, high-tech low-life aesthetic, gritty futuristic, immersive'
  ],
  'biopunk': [
    'biopunk organic technology, living biological machinery, tentacle-like cables, bioluminescent interface panels, organic-tech fusion, Giger inspired aesthetic, unsettling beauty, detailed',
    'biopunk laboratory with growing biological experiments, living tissue cultures in glass, organic technology, mad scientist aesthetic, green bioluminescence, disturbing beauty, sci-fi',
    'biopunk character with biological enhancements, organic armor grown from living tissue, symbiotic technology, dark sci-fi aesthetic, body horror beauty, detailed organic textures',
    'biopunk cityscape where buildings are grown from living organisms, organic architecture, bioluminescent streets, alien yet familiar, bio-technology fusion, surreal environment'
  ],
  'solarpunk': [
    'solarpunk utopian city with buildings covered in lush greenery, solar panels and wind turbines integrated, sustainable technology, hopeful atmosphere, bright natural light, optimistic future',
    'solarpunk community garden on skyscraper rooftop, abundant vegetation, solar-powered tools, diverse people collaborating, bright optimistic atmosphere, eco-technology harmony, green future',
    'solarpunk transportation hub with living plant walls, clean energy vehicles, sustainable architecture, natural light flooding through glass, hopeful future design, green technology',
    'solarpunk artist studio with living walls and solar-powered equipment, plants growing everywhere, creative sustainable space, warm natural light, optimistic green technology aesthetic'
  ],
  'retro-vintage': [
    'retro vintage 1950s diner scene, chrome and neon, pastel colors, nostalgic Americana, jukebox and checkered floor, classic mid-century aesthetic, warm nostalgic tones, charming',
    'vintage style travel poster, bold simplified shapes, retro color palette, 1960s tourism advertising aesthetic, classic typography, romantic destination illustration, timeless design',
    'retro vintage pin-up style illustration, 1940s glamour aesthetic, warm tones, classic American illustration quality, nostalgic beauty, hand-painted quality, vintage charm',
    'vintage polaroid-style photo collection, faded warm tones, white borders, nostalgic snapshots from past decades, analog imperfections, memory collection, retro aesthetic'
  ],
  'synthwave': [
    'synthwave neon sunset landscape, chrome grid horizon, purple and pink gradient sky, retro-futuristic 1980s aesthetic, digital sun, nostalgic sci-fi, outrun visual style, glowing',
    'synthwave cityscape at night, neon purple and cyan lights, chrome architecture, 1980s retro-futuristic atmosphere, VHS aesthetic, digital sunset, Tron inspired, electronic mood',
    'synthwave sports car on neon grid highway, chrome reflections, purple sunset sky, 1980s retro-futurism, outrun aesthetic, electronic music visual, nostalgic future, vibrant',
    'synthwave portrait with neon lighting, retro sunglasses reflecting grid horizon, purple and pink palette, 1980s aesthetic, Miami Vice mood, digital art, electronic atmosphere'
  ],
  'maximalism': [
    'maximalism interior design explosion of patterns, colors and textures filling every surface, eclectic layered decoration, bold wallpaper with ornate furniture, sensory overload beauty',
    'maximalism fashion portrait, layered bold patterns clashing harmoniously, excessive accessories and textures, riot of color and design, more-is-more aesthetic, extravagant style',
    'maximalism digital art collage, overwhelming layered imagery, every corner filled with detail, baroque meets pop art, sensory overload composition, controlled chaos, vibrant',
    'maximalism botanical garden illustration, overflowing with flowers and creatures, dense detailed composition, rich jewel-tone colors, horror vacui aesthetic, lush and abundant'
  ],
  'manga': [
    'manga style action scene, dynamic speed lines, intense character expression, black and white with screentone shading, dramatic angle, Shonen Jump quality, powerful composition',
    'manga style emotional close-up panel, detailed expressive eyes with tears, delicate screentone shading, Japanese comic art, intimate character moment, shoujo manga style',
    'manga style full-page splash panel, epic battle scene, dynamic composition, detailed character designs, speed lines and impact effects, professional manga quality, dramatic',
    'manga style slice-of-life panel, detailed background, characters in casual school setting, natural expressions, clean linework, seinen manga quality, warm atmospheric'
  ],
  'webtoon-style': [
    'webtoon style vertical panel illustration, clean colorful digital art, soft cel shading, Korean digital comic aesthetic, attractive character design, modern web comic quality, fresh',
    'webtoon style romantic scene, soft pastel colors, clean digital linework, vertical scroll format, Korean manhwa aesthetic, emotional character interaction, beautiful and polished',
    'webtoon style fantasy scene with magical effects, vibrant digital coloring, clean Korean comic art style, dynamic composition, vertical panel layout, modern illustration quality',
    'webtoon style character portrait, smooth digital rendering, large expressive eyes, clean line art, soft color palette, Korean manhwa beauty standard, polished and appealing'
  ],
  'pixar-style': [
    'Pixar style 3D animated character with big expressive eyes, smooth subsurface skin rendering, charming design, warm studio lighting, animated movie quality, endearing personality',
    'Pixar style 3D animated scene, adorable animal characters in vibrant world, rich detailed environment, cinematic lighting, movie-quality rendering, heartwarming atmosphere, magical',
    'Pixar style 3D character close-up, exaggerated cute proportions, detailed hair simulation, expressive face, warm color palette, feature film quality CGI, lovable design',
    'Pixar style animated landscape, lush colorful environment, painterly lighting, cinematic depth of field, movie production quality, whimsical world design, inviting atmosphere'
  ],
  'disney-style': [
    'Disney style animated princess portrait, flowing hair with detailed strand simulation, large sparkling eyes, elegant design, magical atmosphere, feature film quality, enchanting beauty',
    'Disney animation style magical forest scene, enchanted creatures, vibrant colors, painterly background, movie-quality environment, whimsical atmosphere, fairy tale quality, dreamlike',
    'Disney style animal character with anthropomorphic expressions, warm endearing design, animated movie quality, expressive eyes, detailed fur rendering, lovable personality, magical',
    'Disney style villain character design, dramatic elegant pose, dark color palette with accent colors, theatrical character, animated feature quality, memorable design, charismatic'
  ],
  'ghibli-style': [
    'Studio Ghibli style pastoral countryside landscape, hand-painted watercolor sky, lush green rolling hills, small figure walking on path, Miyazaki inspired wonder, peaceful beauty',
    'Ghibli style cozy interior with detailed everyday objects, warm lived-in atmosphere, hand-painted textures, slice of life beauty, Totoro house warmth, nostalgic comfort, inviting',
    'Ghibli style magical creature in enchanted forest, whimsical spirit design, hand-painted foliage, Spirited Away atmosphere, magical naturalism, Miyazaki wonder, breathtaking',
    'Ghibli style flying scene above clouds, character on magical vehicle, vast sky panorama, hand-painted clouds, Castle in the Sky wonder, freedom and adventure, breathtaking'
  ],
  'chibi-style': [
    'chibi style cute character with oversized head, tiny body proportions, big sparkly eyes, kawaii Japanese super-deformed design, colorful and adorable, anime chibi quality, sweet',
    'chibi style character lineup, various cute deformed characters, exaggerated emotions, colorful designs, Japanese kawaii aesthetic, collectible figure quality, endearing personalities',
    'chibi style fantasy warrior character, tiny body with big sword, cute determined expression, anime super-deformed proportions, colorful chibi design, adorable action pose, charming',
    'chibi style animal mascot characters, round cute proportions, big heads tiny bodies, kawaii design, colorful and playful, collectible figure aesthetic, irresistibly cute'
  ],
  'kawaii-style': [
    'kawaii style illustration of cute food characters with faces, pastel pink and mint colors, round happy shapes, Japanese cute aesthetic, adorable design, sweet and cheerful mood',
    'kawaii style character in dreamy pastel world, soft rounded forms, sparkly eyes, gentle expression, Japanese cute design philosophy, cotton candy colors, heart-warming sweetness',
    'kawaii style sticker sheet design, various cute expressions and objects, pastel color palette, rounded shapes, Japanese cute aesthetic, collectible design, bubbly and joyful',
    'kawaii style room interior illustration, cute decorations everywhere, pastel colors, rounded furniture, plushies and sweets, Japanese cute lifestyle, cozy adorable space'
  ],
  'funko-pop': [
    'Funko Pop style vinyl figure, oversized square head, tiny body, solid black button eyes, simplified character design, collectible toy aesthetic, clean vinyl surface, display piece',
    'Funko Pop style character collection display, various vinyl figures on shelf, uniform square heads, collectible aesthetic, clean simple designs, vinyl toy photography, organized',
    'Funko Pop vinyl figure of fantasy wizard character, stylized big head small body, black dot eyes, simplified robes and staff, collectible design, clean mold lines, charming',
    'Funko Pop style figure in original box packaging, display window showing character, collectible product photography, clean branding, vinyl toy aesthetic, collector item, pristine'
  ],
  'blind-box': [
    'blind box collectible figure, adorable rounded design, smooth glossy surface, kawaii character with closed eyes, designer toy aesthetic, pastel color, Sonny Angel inspired, charming',
    'blind box toy collection display, various cute characters in uniform style, designer toy aesthetic, glossy surfaces, collectible figures, pastel palette, miniature art pieces',
    'blind box figure unboxing moment, cute surprise character revealed, glossy vinyl finish, designer toy quality, kawaii aesthetic, collectible anticipation, pastel colors, delightful',
    'blind box designer toy close-up, smooth rounded forms, pearl finish surface, minimalist kawaii face, artist collaboration aesthetic, limited edition quality, precious collectible'
  ],
  'gashapon': [
    'gashapon capsule toy machine close-up, colorful transparent capsules visible, Japanese vending aesthetic, retro mechanical design, coin slot detail, nostalgic toy culture, charming',
    'gashapon miniature figures collection, tiny detailed characters, Japanese capsule toy quality, variety of poses and expressions, collectible miniatures, colorful display, cute',
    'gashapon figure inside transparent capsule, anticipation of reveal, Japanese toy culture, detailed miniature inside, collectible moment, colorful capsule, childhood excitement',
    'gashapon rare figure unboxed, highly detailed miniature character, premium capsule toy quality, Japanese collectible design, tiny masterpiece, precious find, detailed craftsmanship'
  ],
  'enamel-pin': [
    'enamel pin design of a cute cat character, shiny metallic outlines, flat color fill areas, pin badge aesthetic, collectible accessory design, small wearable art, vibrant, charming',
    'enamel pin collection on denim jacket, various colorful pin designs, shiny metal borders, collectible badge aesthetic, fashion accessory display, personal expression, curated style',
    'enamel pin close-up showing metallic ridges between color sections, craftsmanship detail, hard enamel quality, smooth polished surface, collectible pin art, miniature masterpiece',
    'enamel pin design sheet with multiple character variations, flat color illustrations with metal outlines, pin production concept, collectible series design, cute unified aesthetic'
  ],
  'knitted-doll': [
    'knitted amigurumi doll of a cute bear, visible yarn texture and crochet stitches, handmade craftsmanship, soft pastel yarn colors, handcraft photography, warm cozy aesthetic, adorable',
    'knitted doll character with detailed crochet clothing, visible knit patterns, handmade textile art, warm wool texture, amigurumi quality, craft photography, charming imperfections',
    'amigurumi animal collection, various crocheted creatures, colorful yarn, visible stitch detail, handmade toy photography, cozy craft aesthetic, warm handmade charm, displayed together',
    'knitted doll close-up showing yarn texture detail, crochet stitch patterns visible, soft tactile surface, handcraft macro photography, fiber art quality, tender craftsmanship'
  ],
  'lego-style': [
    'LEGO style miniature city scene, plastic brick construction, iconic stud texture, colorful modular buildings, toy photography, detailed brick-built environment, playful creative design',
    'LEGO style minifigure character portrait, iconic cylindrical head shape, painted face detail, plastic toy aesthetic, clean studio lighting, collectible figure photography, charming',
    'LEGO style vehicle build, detailed brick construction, mechanical function visible, colorful plastic pieces, toy engineering, building instruction aesthetic, creative construction, fun',
    'LEGO style landscape diorama, brick-built terrain and vegetation, creative piece usage, toy photography, miniature world, detailed construction, playful imagination, charming scene'
  ],
  'toy-photography': [
    'toy photography of action figure in dramatic scene, miniature world, creative lighting, forced perspective making toy look life-size, macro photography, imaginative staging, cinematic',
    'toy photography miniature car on model street, tilt-shift blur effect, realistic scale illusion, detailed model, creative staging, miniature world photography, playful realism',
    'toy photography of collectible figures in dynamic battle scene, creative lighting and smoke effects, miniature action staging, forced perspective, dramatic composition, imaginative',
    'toy photography still life with vintage toys, warm nostalgic lighting, shallow depth of field, childhood memories, creative macro photography, sentimental staging, gentle and warm'
  ],
  'crystal-ball': [
    'crystal ball glass sphere containing miniature landscape scene, refracted world inside, magical glass photography, enchanting visual effect, mystical atmosphere, detailed miniature world',
    'crystal ball with inverted landscape refraction, glass sphere photography, nature visible through glass, optical effect, creative photography technique, magical distortion, beautiful',
    'crystal ball held up against sunset, entire horizon captured and inverted inside sphere, golden light refraction, creative photography, magical moment, nature through glass, stunning',
    'crystal ball on mossy ground in forest, fairy tale atmosphere, miniature enchanted world visible inside, magical artifact, fantasy photography, mystical woodland, ethereal glow'
  ],
  'film-noir': [
    'film noir style dark moody scene, detective in trenchcoat under streetlamp, hard shadows, high contrast black and white, rain-slicked pavement, 1940s mystery atmosphere, cinematic',
    'film noir femme fatale portrait, dramatic venetian blind shadow pattern on face, cigarette smoke, black and white, dangerous beauty, classic Hollywood mystery, seductive and dark',
    'film noir interrogation room scene, single overhead bulb casting harsh shadows, high contrast, claustrophobic atmosphere, black and white cinematography, tension and suspicion',
    'film noir rooftop chase scene, dramatic silhouettes against neon city, rain and shadows, high contrast black and white, classic thriller composition, urban danger, atmospheric'
  ],
  'documentary': [
    'documentary style candid photograph of street market vendor, natural ambient light, unposed authentic moment, photojournalism quality, real life captured, storytelling image, honest',
    'documentary photography of traditional craftsman at work, natural window light, environmental portrait, authentic working conditions, cultural documentation, genuine moment, respectful',
  ],
  'glitch-art': [
    'glitch art portrait with digital corruption effects, pixel displacement, color channel shifting, databending aesthetic, VHS tracking errors, corrupted digital beauty, cyberpunk, striking',
    'glitch art landscape with scan line distortion, color band separation, digital noise patterns, CRT monitor aesthetic, cyberpunk visual corruption, electronic malfunction beauty',
  ],
  'double-exposure': [
    'double exposure portrait blending face with forest landscape, overlapping transparent layers, artistic photographic technique, nature and human fusion, dreamy ethereal quality, poetic',
    'double exposure combining city skyline with close-up portrait, urban identity concept, layered transparency, creative photography technique, artistic visual metaphor, atmospheric'
  ],
  'pixel-art': [
    'pixel art retro game character sprite, 16-bit style, limited color palette, nostalgic gaming aesthetic, clean pixel grid, classic platformer design, charming low-resolution art',
    'pixel art landscape scene, 8-bit sunset over mountains, retro game background, limited colors, nostalgic gaming atmosphere, classic video game aesthetic, pixelated beauty'
  ],
  'papercraft': [
    'papercraft scene of miniature village, folded and cut paper buildings, layered paper depth, handmade craft aesthetic, soft shadows between layers, delicate construction, charming',
    'papercraft illustration with layered cut paper, depth through paper layers, soft shadows, handmade aesthetic, paper texture visible, creative craft photography, artistic dimension'
  ],
  'stained-glass': [
    'stained glass window design with intricate lead lines, rich jewel-tone colors, light streaming through, religious art quality, Gothic cathedral aesthetic, luminous beauty, sacred',
    'stained glass art nouveau design, flowing organic forms in glass, rich color palette, backlit luminous effect, decorative window art, Tiffany inspired craftsmanship, beautiful'
  ],

  // Additional style entries
  'photorealism': [],  // Has empty images array in data
  'cinematic': [],     // Has empty images array in data
};

// ============================================================
// SCRIPT: Read file and inject prompts
// ============================================================
let content = fs.readFileSync(FILE, 'utf-8');
let totalAdded = 0;
let entriesModified = 0;

for (const [entryKey, prompts] of Object.entries(PROMPTS)) {
  if (!prompts || prompts.length === 0) continue;

  // Find the entry section in the file
  // Pattern: 'entry-key': { ... images: [ { src: '...', caption: '...' }, ... ] }
  // We need to find images within this specific entry

  // Find the entry start position
  const entryPattern = new RegExp(`'${entryKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'\\s*:\\s*\\{`);
  const entryMatch = content.match(entryPattern);
  if (!entryMatch) {
    console.warn(`  WARN: Entry '${entryKey}' not found in file`);
    continue;
  }

  const entryStart = content.indexOf(entryMatch[0]);

  // Find the images array within this entry (search within a reasonable range)
  // We need to find the next entry boundary or end to limit our search
  const searchEnd = Math.min(entryStart + 5000, content.length);
  const entrySection = content.substring(entryStart, searchEnd);

  // Find images: [ ... ] within this section
  const imagesIdx = entrySection.indexOf('images:');
  if (imagesIdx === -1) {
    // Some entries like instructor-reviews have different structure
    // Still try to add prompts to image objects
    console.warn(`  WARN: No images array found in '${entryKey}'`);
    continue;
  }

  // Now find each image object { src: '...', caption: '...' } within the images array
  // and add prompt field
  let imgIndex = 0;
  let modified = false;

  // Search for image objects in this entry's section
  const imagesSection = entrySection.substring(imagesIdx);
  const closingBracket = findMatchingBracket(imagesSection, imagesSection.indexOf('['));
  if (closingBracket === -1) {
    console.warn(`  WARN: Could not find closing bracket for images in '${entryKey}'`);
    continue;
  }

  const imagesContent = imagesSection.substring(0, closingBracket + 1);
  const absoluteImagesStart = entryStart + imagesIdx;

  // Find each image object and add prompt
  const imgRegex = /\{\s*src:\s*'([^']+)',\s*caption:\s*'([^']*)'\s*\}/g;
  let match;
  const replacements = [];

  while ((match = imgRegex.exec(imagesContent)) !== null) {
    if (imgIndex < prompts.length) {
      const original = match[0];
      const src = match[1];
      const caption = match[2];
      const prompt = prompts[imgIndex].replace(/'/g, "\\'");
      const replacement = `{ src: '${src}', caption: '${caption}', prompt: '${prompt}' }`;
      replacements.push({ original, replacement });
      modified = true;
      totalAdded++;
    }
    imgIndex++;
  }

  // Apply replacements for this entry (in reverse order to preserve positions)
  for (const r of replacements.reverse()) {
    const pos = content.indexOf(r.original, absoluteImagesStart);
    if (pos !== -1) {
      content = content.substring(0, pos) + r.replacement + content.substring(pos + r.original.length);
    }
  }

  if (modified) {
    entriesModified++;
    console.log(`  ✓ ${entryKey}: ${Math.min(imgIndex, prompts.length)} prompts added`);
  }
}

// Helper: find matching bracket
function findMatchingBracket(str, openPos) {
  let depth = 0;
  for (let i = openPos; i < str.length; i++) {
    if (str[i] === '[') depth++;
    if (str[i] === ']') {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

// Write the modified file
fs.writeFileSync(FILE, content, 'utf-8');

console.log(`\nDone! Modified ${entriesModified} entries, added ${totalAdded} prompts total.`);
