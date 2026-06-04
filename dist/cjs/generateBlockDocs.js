"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBlockDocs = generateBlockDocs;
const blockFields_js_1 = require("./lib/blockFields.js");
const TYPE_LABELS = {
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
function typeLabel(type) {
    var _a;
    return (_a = TYPE_LABELS[type]) !== null && _a !== void 0 ? _a : type;
}
/* The allowed values / format for a field. Select options get their own
 * Value/Label table (see selectOptionsTables), so this only covers scalar formats. */
function valuesColumn(field) {
    if (field.type === 'select')
        return 'see options below';
    if (field.pattern)
        return `must match \`${field.pattern}\``;
    if (field.type === 'number')
        return 'a number';
    return '';
}
/* The stored value of a select is the option's `value` slug, not its label, so
 * the two are listed as separate columns. Emitted for every select in a field set. */
function selectOptionsTables(fields, out) {
    for (const field of fields) {
        if (field.type !== 'select' || !field.options)
            continue;
        out.push(`_${cell(field.label)} (\`${field.name}\`) options:_`, '');
        out.push('| Value | Label |', '| --- | --- |');
        for (const option of field.options) {
            out.push(`| \`${option.value}\` | ${cell(option.label)} |`);
        }
        out.push('');
    }
}
/* escape pipe characters so help text doesn't break markdown tables */
function cell(text) {
    return (text !== null && text !== void 0 ? text : '').replace(/\|/g, '\\|');
}
/* Non-config, author-facing fields (content fields and child-block slots). */
function contentFields(fields) {
    return fields.filter((f) => f.type !== 'configs');
}
/* The config options declared in a field set (the `configs`-type fields' entries). */
function configOptions(fields) {
    return fields.filter((f) => f.type === 'configs').flatMap((f) => { var _a; return (_a = f.configs) !== null && _a !== void 0 ? _a : []; });
}
/* Every nested-block slot in a field tree (top level or inside list items), with its key and allowed categories. */
function blockSlots(fields) {
    var _a;
    const slots = [];
    for (const field of fields) {
        if (field.type === 'blocks') {
            slots.push({ label: field.label, name: field.name, categories: (_a = field.categories) !== null && _a !== void 0 ? _a : [] });
        }
        else if (field.type === 'list' && field.fields) {
            slots.push(...blockSlots(field.fields));
        }
    }
    return slots;
}
/* Collect every field type used across a field tree (lists and configs included). */
function collectTypes(fields, into) {
    for (const field of fields) {
        into.add(field.type);
        if (field.fields)
            collectTypes(field.fields, into);
        if (field.configs)
            collectTypes(field.configs, into);
    }
}
function fieldsTable(heading, fields, out) {
    const content = contentFields(fields);
    if (content.length === 0)
        return;
    out.push(heading, '');
    out.push('| Field | Key | Type | Required | Description |', '| --- | --- | --- | --- | --- |');
    for (const field of content) {
        out.push(`| ${cell(field.label)} | \`${field.name}\` | ${typeLabel(field.type)} | ${field.required ? 'Yes' : ''} | ${cell(field.help)} |`);
    }
    out.push('');
    selectOptionsTables(content, out);
}
function configTable(heading, configs, out) {
    if (configs.length === 0)
        return;
    out.push(heading, '');
    out.push('| Option | Key | Type | Values / format | Description |', '| --- | --- | --- | --- | --- |');
    for (const option of configs) {
        out.push(`| ${cell(option.label)} | \`${option.name}\` | ${typeLabel(option.type)} | ${cell(valuesColumn(option))} | ${cell(option.help)} |`);
    }
    out.push('');
    selectOptionsTables(configs, out);
}
/*
 * Document a list field's item shape. Each item is itself a data node, so it
 * gets the same Fields / `config` pair as a block, recursing into any lists
 * nested within items. `pathLabel` is a breadcrumb like "Cards › Call To Action".
 */
function renderListItems(pathLabel, listField, out) {
    var _a;
    const itemFields = (_a = listField.fields) !== null && _a !== void 0 ? _a : [];
    const max = typeof listField.max === 'number' ? ` (max ${listField.max})` : '';
    fieldsTable(`**${pathLabel}** — an array of data nodes${max}; each item's **Fields**:`, itemFields, out);
    configTable(`_${pathLabel} item — entries of its \`config\` array:_`, configOptions(itemFields), out);
    for (const sub of itemFields) {
        if (sub.type === 'list')
            renderListItems(`${pathLabel} › ${sub.label}`, sub, out);
    }
}
/*
 * Value-type shapes that the field definitions don't describe on their own:
 * `image` is defined in components/Image.config.ts, `link-target` in the
 * editor's LinkTarget component, and `rich-text` is a plain string. Hardcoded
 * here, emitted only when a block actually uses the type.
 */
const VALUE_TYPES = [
    {
        type: 'rich-text',
        lines: [
            '### Rich text (`rich-text`)',
            '',
            'An HTML string.',
        ],
    },
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
            'A link target: a `type` that selects the kind of link, plus a `value` whose meaning depends on that type. `action` and `route` links may also carry a `params` object corresponding to the expected payloads for the actions and routes provided by the host application.',
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
function generateBlockDocs(definitions, options = {}) {
    var _a;
    const blocks = Object.entries(definitions).map(([key, definition]) => ({ key, definition }));
    const out = [];
    // Reverse map: which block labels qualify for a slot allowing these categories.
    const childrenFor = (categories) => blocks
        .filter((b) => b.definition.config.categories.some((c) => categories.includes(c)))
        .map((b) => `${b.definition.config.label} (\`${b.key}\`)`)
        .sort();
    out.push(`# ${(_a = options.title) !== null && _a !== void 0 ? _a : 'Flex Page Block Reference'}`, '');
    if (options.intro && options.intro.length > 0)
        out.push(...options.intro, '');
    // Node shape: establish the one recurring data-node shape (fields + config)
    // up front, so every per-block "Fields" / "Config" table reads against it.
    out.push('## Node shape', '');
    out.push('The content is an array of block nodes. Each block node is:', '');
    out.push('```json', '{ "type": "<block key>", "id": "<unique string>", "value": <data node> }', '```', '');
    out.push('`type` is the block key from the headings below. A **data node** is the shape almost everything uses — an object holding the **Fields** (each keyed by its **Key**) and a **`config`** array:', '');
    out.push('```json', '{', '  "<fieldKey>": <field value>,', '  // ...one entry per field...', '  "config": [ { "type": "<config key>", "value": <config value> } ]', '}', '```', '');
    out.push('Each `config` entry\'s `type` is a **Key** from the block\'s **Config** table and `value` is its value.', '');
    out.push('Two field types hold arrays, and their element shapes differ:', '', '- A **child blocks** field (a content slot) holds an array of full **block nodes** — each its own `{ type, id, value }` — so any block the slot allows can be nested. See the block\'s **Child content** table for what\'s allowed.', '- A **list** field holds an array of **data nodes** — **Fields** plus `config` only, with no `type` or `id`.', '');
    out.push('Most blocks have a data-node `value`, but some hold a single scalar `value` instead, with no **Fields** and no `config`. Each per-block schema below says which.', '');
    // Category summary
    const categories = [...new Set(blocks.flatMap((b) => b.definition.config.categories))].sort();
    out.push('## Block categories', '');
    out.push('A block may be placed in a slot when the slot\'s allowed categories include one of the block\'s categories.', '');
    for (const category of categories) {
        const members = blocks
            .filter((b) => b.definition.config.categories.includes(category))
            .map((b) => `${b.definition.config.label} (\`${b.key}\`)`)
            .sort();
        out.push(`- **${category}**: ${members.join(', ')}`);
    }
    out.push('');
    // Value types: structured (non-string) value types, emitted only when used.
    const usedTypes = new Set();
    for (const block of blocks)
        collectTypes((0, blockFields_js_1.fieldDefs)(block.definition), usedTypes);
    const valueTypes = VALUE_TYPES.filter((v) => usedTypes.has(v.type));
    if (valueTypes.length > 0) {
        out.push('## Value types', '');
        out.push('Some fields hold a value with a specific shape:', '');
        for (const valueType of valueTypes)
            out.push(...valueType.lines, '');
    }
    // Per-block reference, alphabetical by label
    out.push('## Blocks', '');
    const ordered = [...blocks].sort((a, b) => a.definition.config.label.localeCompare(b.definition.config.label));
    for (const { key, definition } of ordered) {
        const fields = (0, blockFields_js_1.fieldDefs)(definition);
        out.push(`### ${definition.config.label} — \`${key}\``, '');
        out.push(`*Categories: ${definition.config.categories.join(', ')}*`, '');
        // Make the value shape explicit: a single-`field` block stores its value
        // directly, while a `fields` block stores an object keyed by field name.
        const singleField = definition.config.field;
        out.push(singleField
            ? `\`value\` is the ${typeLabel(singleField.type)} value directly (a bare \`${singleField.type}\`, not a data node).`
            : '`value` is a data node — the **Fields** below, plus a `config` array of the **Config** entries below.', '');
        const slots = blockSlots(fields);
        if (slots.length > 0) {
            out.push('**Child content**', '');
            out.push('| Slot | Key | Allowed blocks |', '| --- | --- | --- |');
            for (const slot of slots) {
                const allowed = childrenFor(slot.categories);
                out.push(`| ${cell(slot.label)} | \`${slot.name}\` | ${allowed.length ? allowed.join(', ') : '_none_'} |`);
            }
            out.push('');
        }
        fieldsTable('**Fields**', fields, out);
        configTable('**Config** — entries of the data node\'s `config` array:', configOptions(fields), out);
        // List fields hold repeating items; document each item's shape, recursing
        // into per-item config options and any lists nested within items.
        for (const field of fields) {
            if (field.type === 'list')
                renderListItems(field.label, field, out);
        }
    }
    return out.join('\n');
}
