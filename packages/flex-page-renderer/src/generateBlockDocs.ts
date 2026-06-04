import type { BlockFieldDefinitions, ConfigMetadata } from './ContentBlockContext.js';

/*
 * Generates a markdown reference for a set of block definitions — the same
 * `definitions` map passed to resolveContentBlocks / validateBlock. Pure: it
 * takes blocks and returns a string, so consumers with custom blocks can
 * document their own block set the same way.
 */

export type { BlockFieldDefinition, BlockFieldDefinitions } from './ContentBlockContext.js';

export type BlockDocsOptions = {
  /* top-level heading; defaults to "Flex Page Block Reference" */
  title?: string;
  /* lines inserted under the heading (e.g. a "generated, do not edit" note) */
  intro?: string[];
};

/*
 * A structured view of a field definition for doc generation. The renderer's
 * ConfigField is intentionally loose ({name, label, type, [key]: unknown}); this
 * names the props the generator reads so the code below stays cast-free.
 */
type DocField = {
  name: string;
  label: string;
  type: string;
  help?: string;
  pattern?: string;
  required?: boolean;
  max?: number;
  options?: Array<{ label: string; value: string }>;
  categories?: string[];
  configs?: DocField[];
  fields?: DocField[];
};

type DocBlock = { key: string; meta: ConfigMetadata<string> };

const TYPE_LABELS: Record<string, string> = {
  text: 'text',
  'long-text': 'long text',
  'rich-text': 'rich text',
  url: 'URL',
  number: 'number',
  select: 'select',
  image: 'image',
  'link-target': 'link',
  blocks: 'child blocks',
  list: 'list',
};

function typeLabel(type: string): string {
  return TYPE_LABELS[type] ?? type;
}

/* Description of the allowed values / format for a field, for the option/config tables. */
function valuesColumn(field: DocField): string {
  if (field.type === 'select' && field.options) {
    return field.options.map((o) => o.label).join(', ');
  }
  if (field.pattern) return `must match \`${field.pattern}\``;
  if (field.type === 'number') return 'a number';
  return '';
}

/* escape pipe characters so help text doesn't break markdown tables */
function cell(text: string | undefined): string {
  return (text ?? '').replace(/\|/g, '\\|');
}

/* A block declares fields as a `fields` array or a single `field`; flatten to a list. */
function topFields(meta: ConfigMetadata<string>): DocField[] {
  if (meta.fields) return meta.fields as unknown as DocField[];
  if (meta.field) return [meta.field as unknown as DocField];
  return [];
}

/* Non-config, author-facing fields (content fields and child-block slots). */
function contentFields(fields: DocField[]): DocField[] {
  return fields.filter((f) => f.type !== 'configs');
}

/* The config options declared in a field set (the `configs`-type fields' entries). */
function configOptions(fields: DocField[]): DocField[] {
  return fields.filter((f) => f.type === 'configs').flatMap((f) => f.configs ?? []);
}

/* Every nested-block slot in a field tree (top level or inside list items), with allowed categories. */
function blockSlots(fields: DocField[]): Array<{ label: string; categories: string[] }> {
  const slots: Array<{ label: string; categories: string[] }> = [];
  for (const field of fields) {
    if (field.type === 'blocks') {
      slots.push({ label: field.label, categories: field.categories ?? [] });
    } else if (field.type === 'list' && field.fields) {
      slots.push(...blockSlots(field.fields));
    }
  }
  return slots;
}

/* Collect every field type used across a field tree (lists and configs included). */
function collectTypes(fields: DocField[], into: Set<string>): void {
  for (const field of fields) {
    into.add(field.type);
    if (field.fields) collectTypes(field.fields, into);
    if (field.configs) collectTypes(field.configs, into);
  }
}

function fieldsTable(heading: string, fields: DocField[], out: string[]): void {
  const content = contentFields(fields);
  if (content.length === 0) return;
  out.push(heading, '');
  out.push('| Field | Type | Required | Description |', '| --- | --- | --- | --- |');
  for (const field of content) {
    out.push(`| ${cell(field.label)} | ${typeLabel(field.type)} | ${field.required ? 'Yes' : ''} | ${cell(field.help)} |`);
  }
  out.push('');
}

function configTable(heading: string, configs: DocField[], out: string[]): void {
  if (configs.length === 0) return;
  out.push(heading, '');
  out.push('| Option | Type | Values / format | Description |', '| --- | --- | --- | --- |');
  for (const option of configs) {
    out.push(`| ${cell(option.label)} | ${typeLabel(option.type)} | ${cell(valuesColumn(option))} | ${cell(option.help)} |`);
  }
  out.push('');
}

/*
 * Document a list field's item shape: the fields each item carries, its per-item
 * config options, and any lists nested within items (e.g. a Card's Call To
 * Action list). `pathLabel` is a breadcrumb like "Cards › Call To Action".
 */
function renderListItems(pathLabel: string, listField: DocField, out: string[]): void {
  const itemFields = listField.fields ?? [];
  const max = typeof listField.max === 'number' ? ` (max ${listField.max})` : '';
  fieldsTable(`**${pathLabel}** — list${max}; each item has:`, itemFields, out);
  configTable(`_${pathLabel} — per-item options:_`, configOptions(itemFields), out);
  for (const sub of itemFields) {
    if (sub.type === 'list') renderListItems(`${pathLabel} › ${sub.label}`, sub, out);
  }
}

/*
 * Structured value types whose shape is defined OUTSIDE the block field
 * definitions (so it can't be introspected): `image` lives in
 * components/Image.fields.ts, and `link-target` in the editor's LinkTarget
 * component. Hardcoded here, emitted only when a block actually uses the type.
 */
const VALUE_TYPES: Array<{ type: string; lines: string[] }> = [
  {
    type: 'image',
    lines: [
      '### Image (`image`)',
      '',
      'An uploaded image reference.',
      '',
      '| Property | Type | Required | Description |',
      '| --- | --- | --- | --- |',
      '| file | string | Yes | URL or path of the image |',
      '| width | number | Yes | Intrinsic width in pixels |',
      '| height | number | Yes | Intrinsic height in pixels |',
      '| id | string |  | Optional image identifier |',
    ],
  },
  {
    type: 'link-target',
    lines: [
      '### Link (`link-target`)',
      '',
      'A link target: a `type` that selects the kind of link, plus a `value` whose meaning depends on that type. `action` and `route` links may also carry a `params` object resolved by the host app.',
      '',
      '| type | value | Description |',
      '| --- | --- | --- |',
      '| external | URL | A full external URL |',
      '| internal | URL or path | An internal URL |',
      '| anchor | `#element-id` | An anchor on the current page |',
      '| action | action name | A host-registered action |',
      '| route | route name | A host-registered route |',
    ],
  },
];

export function generateBlockDocs(
  definitions: BlockFieldDefinitions,
  options: BlockDocsOptions = {}
): string {
  const blocks: DocBlock[] = Object.entries(definitions).map(([key, def]) => ({ key, meta: def.fields }));
  const out: string[] = [];

  // Reverse map: which block labels qualify for a slot allowing these categories.
  const childrenFor = (categories: string[]): string[] =>
    blocks
      .filter((b) => b.meta.categories.some((c) => categories.includes(c)))
      .map((b) => `${b.meta.label} (\`${b.key}\`)`)
      .sort();

  out.push(`# ${options.title ?? 'Flex Page Block Reference'}`, '');
  if (options.intro && options.intro.length > 0) out.push(...options.intro, '');

  // Category summary
  const categories = [...new Set(blocks.flatMap((b) => b.meta.categories))].sort();
  out.push('## Block categories', '');
  out.push('A block may be placed in a slot when the slot\'s allowed categories include one of the block\'s categories.', '');
  for (const category of categories) {
    const members = blocks
      .filter((b) => b.meta.categories.includes(category))
      .map((b) => `${b.meta.label} (\`${b.key}\`)`)
      .sort();
    out.push(`- **${category}**: ${members.join(', ')}`);
  }
  out.push('');

  // Value types: structured (non-string) value types, emitted only when used.
  const usedTypes = new Set<string>();
  for (const block of blocks) collectTypes(topFields(block.meta), usedTypes);
  const valueTypes = VALUE_TYPES.filter((v) => usedTypes.has(v.type));
  if (valueTypes.length > 0) {
    out.push('## Value types', '');
    out.push('Some fields hold a structured value rather than a plain string. Their shapes:', '');
    for (const valueType of valueTypes) out.push(...valueType.lines, '');
  }

  // Per-block reference, alphabetical by label
  out.push('## Blocks', '');
  const ordered = [...blocks].sort((a, b) => a.meta.label.localeCompare(b.meta.label));
  for (const { key, meta } of ordered) {
    const fields = topFields(meta);
    out.push(`### ${meta.label} — \`${key}\``, '');
    out.push(`*Categories: ${meta.categories.join(', ')}*`, '');

    const slots = blockSlots(fields);
    if (slots.length > 0) {
      out.push('**Child content**', '');
      out.push('| Slot | Allowed blocks |', '| --- | --- |');
      for (const slot of slots) {
        const allowed = childrenFor(slot.categories);
        out.push(`| ${cell(slot.label)} | ${allowed.length ? allowed.join(', ') : '_none_'} |`);
      }
      out.push('');
    }

    fieldsTable('**Fields**', fields, out);
    configTable('**Configuration options**', configOptions(fields), out);

    // List fields hold repeating items; document each item's shape, recursing
    // into per-item config options and any lists nested within items.
    for (const field of fields) {
      if (field.type === 'list') renderListItems(field.label, field, out);
    }
  }

  return out.join('\n');
}
