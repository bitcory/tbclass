// Test that cameraData.js imports and all categories resolve correctly
async function main() {
  const { cameraData } = await import('../app/data/cameraData.js');
  const { categories, getCategoryItems, getAllSlugs } = await import('../app/data/guideData.js');

  const allSlugs = getAllSlugs();
  console.log('Total slugs:', allSlugs.length);
  console.log('Total cameraData keys:', Object.keys(cameraData).length);

  // Check each category
  for (const cat of categories) {
    const items = getCategoryItems(cat.id);
    const missing = cat.items.filter(slug => !cameraData[slug]);
    console.log(`${cat.id}: ${items.length} items, ${missing.length} missing`);
    if (missing.length) console.log('  Missing:', missing);
  }

  // Check for any entry with broken image paths
  let brokenPaths = 0;
  for (const [slug, data] of Object.entries(cameraData)) {
    if (data.images) {
      for (const img of data.images) {
        if (!img.src || img.src === '' || img.src === 'undefined') {
          console.log(`  BROKEN: ${slug} image src = "${img.src}"`);
          brokenPaths++;
        }
      }
    }
  }
  console.log('Broken image paths:', brokenPaths);
}
main().catch(e => console.error('ERROR:', e));
