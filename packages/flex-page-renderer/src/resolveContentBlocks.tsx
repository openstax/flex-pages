import React from 'react';
import type { BlockDefinition, ContentBlockConfig } from './ContentBlockContext';
import type { ConfigField } from '.';

type BlockMap = Record<string, BlockDefinition>;

/*
 * A block's `fields` config tells us exactly where nested blocks live: a field
 * of type 'blocks' holds a block array, and a 'list' field can hold items with
 * 'blocks' sub-fields (e.g. tabbed content tabs). We drive child resolution off
 * that config rather than sniffing the data shape — it's exact, and it works for
 * every block including client ones, because `fields` lives in a directive-free
 * module and stays readable on the server.
 */
function fieldDefs(def: BlockDefinition | undefined): ConfigField[] {
  if (!def) return [];
  if (def.fields.fields) return def.fields.fields;
  if (def.fields.field) return [def.fields.field];
  return [];
}

function resolveSlotProps(
  block: ContentBlockConfig,
  blocks: BlockMap,
  activeConditions?: string[]
): Record<string, unknown> {
  const slotProps: Record<string, unknown> = {};
  const value = block.value as Record<string, unknown>;

  for (const field of fieldDefs(blocks[block.type])) {
    const fieldValue = value[field.name];

    // a 'blocks' field is a nested block array -> resolve to React nodes
    if (field.type === 'blocks' && Array.isArray(fieldValue)) {
      slotProps[field.name] = resolveContentBlocks(fieldValue as ContentBlockConfig[], blocks, activeConditions);
      continue;
    }

    // a 'list' field whose items carry 'blocks' sub-fields (e.g. tabbed content)
    if (field.type === 'list' && Array.isArray(field.fields) && Array.isArray(fieldValue)) {
      const blockSubFields = (field.fields as ConfigField[]).filter((sub) => sub.type === 'blocks');
      if (blockSubFields.length === 0) continue;

      slotProps[field.name] = (fieldValue as Array<Record<string, unknown>>).map((item) => {
        const resolved = { ...item };
        for (const sub of blockSubFields) {
          if (Array.isArray(item[sub.name])) {
            resolved[sub.name] = resolveContentBlocks(item[sub.name] as ContentBlockConfig[], blocks, activeConditions);
          }
        }
        return resolved;
      });
    }
  }

  return slotProps;
}

function resolveContentBlock(
  block: ContentBlockConfig,
  blocks: BlockMap,
  activeConditions?: string[]
): React.ReactNode {
  const def = blocks[block.type];
  if (!def) return <pre key={block.id}>{JSON.stringify(block, null, 2)}</pre>;

  const slotProps = resolveSlotProps(block, blocks, activeConditions);
  const Comp: React.ComponentType<any> = def.Component;
  return <Comp key={block.id} data={block} activeConditions={activeConditions} {...slotProps} />;
}

export function resolveContentBlocks(
  data: ContentBlockConfig[],
  blocks: BlockMap,
  activeConditions?: string[]
): React.ReactNode {
  return <>{data.map((block) => resolveContentBlock(block, blocks, activeConditions))}</>;
}
