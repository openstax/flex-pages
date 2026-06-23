import React from 'react';
import type { BlockRenderingDefinition, ContentBlockConfig } from './ContentBlockContext.js';
import { fieldDefs } from './lib/blockFields.js';
import type { ConfigField } from './index.js';

// this is intentionally loose to avoid typing issues,
// the strongly typed entrypoint is ContentBlockRoot
type BlockMap = Record<string, BlockRenderingDefinition<string>>;

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
