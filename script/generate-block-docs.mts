/*
 * Writes docs/blocks.md for the built-in blocks. The markdown work lives in the
 * generateBlockDocs utility; the CSS-free `blockFieldDefinitions` map lets this
 * run under tsx without pulling block Components (and their CSS, which Node
 * can't load). Run:
 *
 *   yarn workspace @openstax/flex-page-renderer generate:docs
 */
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { blockFieldDefinitions } from '../src/blocks.fields';
import { generateBlockDocs } from '../src';

const OUT_DIR = join(process.cwd(), 'docs');
const OUT_FILE = join(OUT_DIR, 'blocks.md');

const markdown = generateBlockDocs(blockFieldDefinitions, {
  intro: [
    '> Generated from the block field definitions by `script/generate-block-docs.mts`.',
    '> Do not edit by hand — run `yarn workspace @openstax/flex-page-renderer generate:docs`.',
  ],
});

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, markdown);
console.log(`Wrote ${OUT_FILE} (${Object.keys(blockFieldDefinitions).length} blocks)`);
