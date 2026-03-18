
    import { cameraData } from '../app/data/cameraData.js';
    import { categories } from '../app/data/guideData.js';
    import fs from 'fs';

    const output = { cameraData, categories: categories.map(c => ({ id: c.id, name: c.name, items: c.items })) };
    fs.writeFileSync('/Users/toolb/develop/tool/tb-class/scripts/_tmp_data.json', JSON.stringify(output, null, 0));
  