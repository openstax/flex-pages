import React from 'react';
import type { BlockComponent, ContentBlockConfig } from './ContentBlockContext';

type BlockMap = Record<string, BlockComponent>;

function isBlockArray(value: unknown, blocks: BlockMap): value is ContentBlockConfig[] {
  if (!Array.isArray(value) || value.length === 0) return false;
  const first = value[0];
  return first
    && typeof first === 'object'
    && 'type' in first
    && 'id' in first
    && typeof first.type === 'string'
    && first.type in blocks;
}

function resolveSlotProps(
  block: ContentBlockConfig,
  blocks: BlockMap,
  activeConditions?: string[]
): Record<string, unknown> {
  const slotProps: Record<string, unknown> = {};
  const value = block.value as Record<string, unknown>;

  for (const [key, val] of Object.entries(value)) {
    if (key === 'config') continue;

    if (isBlockArray(val, blocks)) {
      slotProps[key] = resolveContentBlocks(val, blocks, activeConditions);
      continue;
    }

    if (Array.isArray(val) && val.length > 0 && typeof val[0] === 'object' && val[0] !== null) {
      const firstItem = val[0] as Record<string, unknown>;
      const hasNestedBlocks = Object.entries(firstItem)
        .some(([k, v]) => k !== 'config' && isBlockArray(v, blocks));
      if (hasNestedBlocks) {
        slotProps[key] = val.map((item: Record<string, unknown>) => {
          const resolved = { ...item };
          for (const [itemKey, itemVal] of Object.entries(item)) {
            if (itemKey !== 'config' && isBlockArray(itemVal, blocks)) {
              resolved[itemKey] = resolveContentBlocks(itemVal as ContentBlockConfig[], blocks, activeConditions);
            }
          }
          return resolved;
        });
      }
    }
  }

  return slotProps;
}

function resolveContentBlock(
  block: ContentBlockConfig,
  blocks: BlockMap,
  activeConditions?: string[]
): React.ReactNode {
  const Block = blocks[block.type];
  if (!Block) return <pre key={block.id}>{JSON.stringify(block, null, 2)}</pre>;

  const slotProps = resolveSlotProps(block, blocks, activeConditions);
  const Comp: React.ComponentType<any> = Block;
  return <Comp key={block.id} data={block} activeConditions={activeConditions} {...slotProps} />;
}

export function resolveContentBlocks(
  data: ContentBlockConfig[],
  blocks: BlockMap,
  activeConditions?: string[]
): React.ReactNode {
  return <>{data.map((block) => resolveContentBlock(block, blocks, activeConditions))}</>;
}
