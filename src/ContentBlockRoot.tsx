import type { BlockData, BlockRenderingDefinitions } from './ContentBlockContext.js';
import { resolveContentBlocks } from './resolveContentBlocks.js';

export * from './ContentBlockContext.js';

export function ContentBlockRoot<D extends BlockRenderingDefinitions<any>>({data, blocks, activeConditions}: {
  data: BlockData<D>;
  blocks: D;
  activeConditions?: string[];
}) {
  return <>{resolveContentBlocks(data, blocks, activeConditions)}</>;
}
