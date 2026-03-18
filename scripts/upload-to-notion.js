#!/usr/bin/env node
/**
 * Upload IMAGE-LIST.md content to Notion as a page
 * Run: NOTION_TOKEN=ntn_xxx node scripts/upload-to-notion.js
 */
const fs = require('fs');
const path = require('path');

const TOKEN = process.env.NOTION_TOKEN;
const PARENT_PAGE_ID = '3234fccc-9a33-8047-af4d-d7e5cec58a95'; // 영상제작
const MD_FILE = path.join(__dirname, '..', 'public', 'images', 'guide', 'IMAGE-LIST.md');

async function notionRequest(endpoint, method, body) {
  const res = await fetch(`https://api.notion.com/v1${endpoint}`, {
    method,
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json();
  if (!res.ok) {
    console.error('API Error:', JSON.stringify(data, null, 2));
    throw new Error(`Notion API error: ${res.status}`);
  }
  return data;
}

function parseMarkdownToBlocks(md) {
  const lines = md.split('\n');
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Skip empty lines
    if (!line.trim()) { i++; continue; }

    // Blockquote
    if (line.startsWith('>')) {
      blocks.push({
        object: 'block',
        type: 'callout',
        callout: {
          icon: { type: 'emoji', emoji: '📋' },
          rich_text: [{ type: 'text', text: { content: line.replace(/^>\s*/, '') } }],
        }
      });
      i++;
      continue;
    }

    // H1
    if (line.startsWith('# ')) {
      // Skip H1 - it becomes the page title
      i++;
      continue;
    }

    // H2
    if (line.startsWith('## ')) {
      blocks.push({
        object: 'block',
        type: 'heading_2',
        heading_2: {
          rich_text: [{ type: 'text', text: { content: line.replace(/^## /, '') } }],
        }
      });
      i++;
      continue;
    }

    // H3
    if (line.startsWith('### ')) {
      blocks.push({
        object: 'block',
        type: 'heading_3',
        heading_3: {
          rich_text: [{ type: 'text', text: { content: line.replace(/^### /, '') } }],
        }
      });
      i++;
      continue;
    }

    // Table detection: | # | 파일명 | 프롬프트 |
    if (line.startsWith('|') && line.includes('파일명')) {
      // This is a table header row
      const headerCells = line.split('|').filter(c => c.trim()).map(c => c.trim());
      const colCount = headerCells.length;

      // Skip separator line (|---|---|---|)
      i++;
      if (i < lines.length && lines[i].startsWith('|---')) i++;

      // Collect data rows
      const rows = [headerCells];
      while (i < lines.length && lines[i].startsWith('|')) {
        const cells = lines[i].split('|').filter(c => c.trim()).map(c => c.trim());
        if (cells.length >= colCount) {
          rows.push(cells.slice(0, colCount));
        }
        i++;
      }

      // Create table block
      const tableBlock = {
        object: 'block',
        type: 'table',
        table: {
          table_width: colCount,
          has_column_header: true,
          has_row_header: false,
          children: rows.map(row => ({
            object: 'block',
            type: 'table_row',
            table_row: {
              cells: row.map(cell => [{ type: 'text', text: { content: cell.substring(0, 2000) } }])
            }
          }))
        }
      };

      blocks.push(tableBlock);
      continue;
    }

    // Regular paragraph
    if (line.trim()) {
      blocks.push({
        object: 'block',
        type: 'paragraph',
        paragraph: {
          rich_text: [{ type: 'text', text: { content: line } }],
        }
      });
    }
    i++;
  }

  return blocks;
}

async function main() {
  console.log('Reading IMAGE-LIST.md...');
  const md = fs.readFileSync(MD_FILE, 'utf-8');

  console.log('Parsing markdown to Notion blocks...');
  const allBlocks = parseMarkdownToBlocks(md);
  console.log(`Parsed ${allBlocks.length} blocks`);

  // Create the page
  console.log('Creating Notion page...');
  const page = await notionRequest('/pages', 'POST', {
    parent: { page_id: PARENT_PAGE_ID },
    icon: { type: 'emoji', emoji: '🖼️' },
    properties: {
      title: {
        title: [{ text: { content: 'AI TOOLBEE GUIDE — 이미지 & 프롬프트 레퍼런스' } }]
      }
    }
  });

  const pageId = page.id;
  console.log(`Page created: ${pageId}`);

  // Notion API allows max 100 blocks per request
  const BATCH_SIZE = 100;
  for (let start = 0; start < allBlocks.length; start += BATCH_SIZE) {
    const batch = allBlocks.slice(start, start + BATCH_SIZE);
    console.log(`Appending blocks ${start + 1}-${start + batch.length} of ${allBlocks.length}...`);

    await notionRequest(`/blocks/${pageId}/children`, 'PATCH', {
      children: batch
    });

    // Small delay to avoid rate limiting
    if (start + BATCH_SIZE < allBlocks.length) {
      await new Promise(r => setTimeout(r, 500));
    }
  }

  console.log(`\nDone! Page URL: https://notion.so/${pageId.replace(/-/g, '')}`);
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
