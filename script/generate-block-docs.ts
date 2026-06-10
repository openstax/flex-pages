/*
 * Writes docs/blocks.md for the built-in blocks. The markdown work lives in the
 * generateBlockDocs utility; the CSS-free `blockFieldDefinitions` map lets this
 * run under tsx without pulling block Components (and their CSS, which Node
 * can't load). Run:
 *
 *   npm run generate:docs --workspace @openstax/flex-page-renderer
 */
import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import * as blockFieldDefinitions from '../src/blocks.config.js';
import { generateBlockDocs } from '../src/generateBlockDocs.js';

const OUT_DIR = join(process.cwd(), 'docs');
const OUT_FILE = join(OUT_DIR, 'blocks.md');

const markdown = generateBlockDocs(blockFieldDefinitions, {
  intro: [
    '> Generated from the block field definitions by `script/generate-block-docs.ts`.',
    '> Do not edit by hand — run `npm run generate:docs --workspace @openstax/flex-page-renderer`.',
  ],
});

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, markdown);
console.log(`Wrote ${OUT_FILE} (${Object.keys(blockFieldDefinitions).length} blocks)`);
