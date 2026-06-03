/*
 * Writes docs/blocks.md by feeding the block field definitions to the
 * generateBlockDocs utility (src/generateBlockDocs.ts). The utility does the
 * markdown work; this script just loads the blocks and writes the file.
 *
 *   yarn workspace @openstax/flex-page-renderer generate:docs
 *
 * The block registry is keyed by the export names in src/blocks/index.ts (what
 * `block.type` holds in saved data), NOT by each block's `fields.type` — those
 * can disagree (e.g. LinksBlock historically). So we parse index.ts for the real
 * keys and import each block's pure `.fields` module (no Components, no CSS,
 * which tsx couldn't load anyway).
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { generateBlockDocs } from '../src/generateBlockDocs';

const PKG = process.cwd();
const BLOCKS_DIR = join(PKG, 'src', 'blocks');
const OUT_DIR = join(PKG, 'docs');
const OUT_FILE = join(OUT_DIR, 'blocks.md');

/* Parse src/blocks/index.ts for `export * as <key> from './<File>'` -> registry key + module file. */
function registry(): Array<{ key: string; file: string }> {
  const src = readFileSync(join(BLOCKS_DIR, 'index.ts'), 'utf8');
  const entries: Array<{ key: string; file: string }> = [];
  const re = /export \* as (\w+) from '\.\/(\w+)'/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) entries.push({ key: m[1], file: m[2] });
  return entries;
}

const definitions: Record<string, { fields: unknown }> = {};
for (const { key, file } of registry()) {
  const mod = await import(join(BLOCKS_DIR, `${file}.fields`));
  definitions[key] = { fields: mod.fields };
}

// fields-only map: generateBlockDocs reads only `.fields`, so the absent
// Component (which we can't import here) is fine.
const markdown = generateBlockDocs(definitions as unknown as Parameters<typeof generateBlockDocs>[0], {
  intro: [
    '> Generated from the block field definitions by `script/generate-block-docs.mts`.',
    '> Do not edit by hand — run `yarn workspace @openstax/flex-page-renderer generate:docs`.',
  ],
});

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, markdown);
console.log(`Wrote ${OUT_FILE} (${Object.keys(definitions).length} blocks)`);
