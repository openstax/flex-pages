import type { BlockProcessingDefinition } from '../ContentBlockContext.js';
import type { ConfigField } from '../index.js';

/*
 * A block's `fields` config tells us exactly where its data lives — including
 * where nested blocks live: a field of type 'blocks' holds a block array, and a
 * 'list' field can hold items with 'blocks' sub-fields. Both the renderer
 * (resolveContentBlocks) and the validator (validateBlock) drive their tree
 * walk off this single helper so they can't drift on the data shape. `fields`
 * lives in a directive-free module and stays readable on the server.
 *
 * A block declares its fields one of two ways: a `fields` array (the value is an
 * object keyed by field name), or a single `field` (the value is that field's
 * value directly). This flattens both to a list; callers that care about the
 * scalar-value form check `def.fields.field` themselves.
 */
export function fieldDefs(def: BlockProcessingDefinition<string> | undefined): ConfigField[] {
  if (!def) return [];
  if (def.config.fields) return def.config.fields;
  if (def.config.field) return [def.config.field];
  return [];
}
