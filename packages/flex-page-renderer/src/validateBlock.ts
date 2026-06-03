import type { BlockDefinition, ContentBlockConfig } from './ContentBlockContext';
import { fieldDefs } from './lib/blockFields';
import type { ConfigField } from '.';

type BlockMap = Record<string, BlockDefinition>;

export type ValidationCode =
  | 'unknown-block'
  | 'invalid-category'
  | 'required'
  | 'type-mismatch'
  | 'invalid-option'
  | 'pattern-mismatch'
  | 'invalid-image'
  | 'invalid-link-target'
  | 'unknown-config';

export type ValidationIssue = {
  /* human-readable breadcrumb to the offending value, e.g. "(flex_page) > content[2] (hero) > image" */
  path: string;
  code: ValidationCode;
  severity: 'error' | 'warning';
  message: string;
  /* id and type of the nearest enclosing block, for callers that want to locate it programmatically */
  blockId?: string;
  blockType?: string;
  /* the field (or config key) the issue is about, when applicable */
  field?: string;
};

export type ValidationResult =
  | { valid: true }
  | { valid: false; issues: ValidationIssue[] };

/*
 * `action`/`route` targets resolve against the host app's registries, which the
 * validator can't see, so we assert the target's shape (a known type + a value)
 * but not whether the value names a real action/route.
 */
const LINK_TARGET_TYPES = ['external', 'internal', 'anchor', 'action', 'route'];

type BlockLoc = { blockId?: string; blockType?: string };
type Ctx = { definitions: BlockMap; issues: ValidationIssue[] };

/*
 * A value is "empty" when it carries no author content. The serializer always
 * emits empty values rather than omitting keys (''/[] for text and block lists),
 * so emptiness — not key-presence — is what `required` checks against.
 */
function isEmpty(value: unknown): boolean {
  return value === undefined
    || value === null
    || value === ''
    || (Array.isArray(value) && value.length === 0);
}

/* number fields serialize inconsistently — both `7` and `'3'` appear in real data — so accept either */
function isNumeric(value: unknown): boolean {
  if (typeof value === 'number') return Number.isFinite(value);
  if (typeof value === 'string' && value.trim() !== '') return Number.isFinite(Number(value));
  return false;
}

/* anchor the whole value, mirroring the editor's HTML `pattern` attribute */
function matchesPattern(pattern: string, value: string): boolean {
  try {
    return new RegExp(`^(?:${pattern})$`).test(value);
  } catch {
    // a malformed pattern in a field definition is our bug, not the author's — don't fail their data
    return true;
  }
}

function asArray<T>(value: unknown): T[] {
  return Array.isArray(value) ? (value as T[]) : [];
}

/* assert a single non-empty leaf value against its field definition; empty values are skipped by callers */
function validateLeaf(field: ConfigField, value: unknown, path: string, ctx: Ctx, loc: BlockLoc): void {
  const issue = (code: ValidationCode, message: string) =>
    ctx.issues.push({ path, code, severity: 'error', message, field: field.name, ...loc });

  switch (field.type) {
    case 'number':
      if (!isNumeric(value)) issue('type-mismatch', `"${field.label}" must be a number`);
      return;

    case 'select': {
      const allowed = asArray<{ value: string }>(field.options).map((o) => o.value);
      if (!allowed.includes(value as string)) {
        issue('invalid-option', `"${field.label}" must be one of: ${allowed.join(', ')}`);
      }
      return;
    }

    case 'image':
      if (typeof value !== 'object' || !(value as { file?: string }).file) {
        issue('invalid-image', `"${field.label}" must reference an uploaded image`);
      }
      return;

    case 'link-target': {
      const target = value as { type?: string; value?: unknown };
      if (typeof target !== 'object' || !LINK_TARGET_TYPES.includes(target.type as string)) {
        issue('invalid-link-target', `"${field.label}" has an unknown link type`);
      } else if (isEmpty(target.value)) {
        issue('invalid-link-target', `"${field.label}" is missing a link target`);
      }
      return;
    }

    case 'text':
    case 'long-text':
    case 'rich-text':
    case 'url':
      if (typeof value !== 'string') {
        issue('type-mismatch', `"${field.label}" must be text`);
      } else if (typeof field.pattern === 'string' && !matchesPattern(field.pattern, value)) {
        issue('pattern-mismatch', `"${field.label}" does not match the required format`);
      }
      return;

    default:
      // container types (blocks/list/configs) are handled by validateField; any
      // other type is one we don't assert — accept it.
      return;
  }
}

/* dispatch a non-empty field value: recurse into container types, otherwise assert the leaf */
function validateField(field: ConfigField, value: unknown, path: string, ctx: Ctx, loc: BlockLoc): void {
  const fieldPath = `${path} > ${field.name}`;
  const wrongType = (expected: string) =>
    ctx.issues.push({
      path: fieldPath, code: 'type-mismatch', severity: 'error',
      message: `"${field.label}" must be ${expected}`, field: field.name, ...loc,
    });

  switch (field.type) {
    case 'blocks': {
      if (!Array.isArray(value)) { wrongType('a list of blocks'); return; }
      const categories = asArray<string>(field.categories);
      value.forEach((child, i) =>
        validateChildBlock(child as ContentBlockConfig, categories, `${fieldPath}[${i}]`, ctx));
      return;
    }

    case 'list': {
      if (!Array.isArray(value)) { wrongType('a list'); return; }
      const subFields = asArray<ConfigField>(field.fields);
      value.forEach((item, i) =>
        validateFieldSet(subFields, item as Record<string, unknown>, `${fieldPath}[${i}]`, ctx, loc));
      return;
    }

    case 'configs': {
      if (!Array.isArray(value)) { wrongType('a list of config entries'); return; }
      validateConfigs(asArray<ConfigField>(field.configs), value as Array<Record<string, unknown>>, fieldPath, ctx, loc);
      return;
    }

    default:
      validateLeaf(field, value, fieldPath, ctx, loc);
  }
}

/* walk a set of declared fields against a value object: required-check empties, assert the rest */
function validateFieldSet(
  fields: ConfigField[], values: Record<string, unknown>, path: string, ctx: Ctx, loc: BlockLoc
): void {
  for (const field of fields) {
    const value = values?.[field.name];

    if (isEmpty(value)) {
      if (field.required) {
        ctx.issues.push({
          path: `${path} > ${field.name}`, code: 'required', severity: 'error',
          message: `"${field.label}" is required`, field: field.name, ...loc,
        });
      }
      // empty + optional: nothing more to assert
      continue;
    }

    validateField(field, value, path, ctx, loc);
  }
}

/*
 * Config entries are stored à la carte as {type, value}. The key (`type`) must
 * name a declared config — an unknown key is an error. Its value is asserted
 * exactly like a top-level field value. Configs are never individually required,
 * so empty values are simply skipped. Unknown extra keys on the entry are ignored.
 */
function validateConfigs(
  configDefs: ConfigField[], entries: Array<Record<string, unknown>>, path: string, ctx: Ctx, loc: BlockLoc
): void {
  for (const entry of entries) {
    const key = entry?.type as string | undefined;
    const configPath = `${path}:${key ?? '?'}`;
    const def = configDefs.find((c) => c.name === key);

    if (!def) {
      ctx.issues.push({
        path: configPath, code: 'unknown-config', severity: 'error',
        message: `Unknown config "${key ?? ''}"`, field: key, ...loc,
      });
      continue;
    }

    if (isEmpty(entry.value)) continue;
    validateLeaf(def, entry.value, configPath, ctx, loc);
  }
}

/* validate a child block in a blocks slot: resolve its definition, check its category, then recurse */
function validateChildBlock(
  block: ContentBlockConfig, allowedCategories: string[], path: string, ctx: Ctx
): void {
  const blockType = block?.type;
  const label = `${path} (${blockType ?? '?'})`;
  const def = ctx.definitions[blockType];

  if (!def) {
    ctx.issues.push({
      path: label, code: 'unknown-block', severity: 'error',
      message: `Unknown block type "${blockType ?? ''}"`, blockId: block?.id, blockType,
    });
    return;
  }

  const blockCategories = def.fields.categories ?? [];
  if (allowedCategories.length > 0 && !blockCategories.some((c) => allowedCategories.includes(c))) {
    ctx.issues.push({
      path: label, code: 'invalid-category', severity: 'error',
      message: `"${def.fields.label}" is not allowed here (allowed: ${allowedCategories.join(', ')})`,
      blockId: block.id, blockType,
    });
  }

  validateBlockNode(block, def, label, ctx);
}

/* validate one block's own fields, handling both the object-value and scalar-value (single `field`) forms */
function validateBlockNode(block: ContentBlockConfig, def: BlockDefinition, path: string, ctx: Ctx): void {
  const loc: BlockLoc = { blockId: block.id, blockType: block.type };
  const field = def.fields.field;

  // single-field block: `value` is the field's value directly, not an object
  if (field) {
    const fieldPath = `${path} > ${field.name}`;
    if (isEmpty(block.value)) {
      if (field.required) {
        ctx.issues.push({
          path: fieldPath, code: 'required', severity: 'error',
          message: `"${field.label}" is required`, field: field.name, ...loc,
        });
      }
      return;
    }
    validateLeaf(field, block.value, fieldPath, ctx, loc);
    return;
  }

  validateFieldSet(fieldDefs(def), block.value as Record<string, unknown>, path, ctx, loc);
}

/*
 * Validate a content block tree against the same field definitions the renderer
 * uses. Walks the whole tree and collects every detectable problem (it never
 * fails fast and never throws on malformed data). The root block carries no
 * parent, so its own placement isn't category-checked; every descendant is.
 */
export function validateBlock(root: ContentBlockConfig, definitions: BlockMap): ValidationResult {
  const ctx: Ctx = { definitions, issues: [] };
  const def = definitions[root?.type];

  if (!def) {
    ctx.issues.push({
      path: `(${root?.type ?? '?'})`, code: 'unknown-block', severity: 'error',
      message: `Unknown block type "${root?.type ?? ''}"`, blockId: root?.id, blockType: root?.type,
    });
  } else {
    validateBlockNode(root, def, `(${root.type})`, ctx);
  }

  return ctx.issues.length === 0 ? { valid: true } : { valid: false, issues: ctx.issues };
}
