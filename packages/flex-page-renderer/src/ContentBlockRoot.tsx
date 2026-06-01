import type { BlockData, BlockDefinitions } from './ContentBlockContext';
import { resolveContentBlocks } from './resolveContentBlocks';

export * from './ContentBlockContext';

export function ContentBlockRoot<D extends BlockDefinitions<any>>({data, blocks, activeConditions}: {
  data: BlockData<D>;
  blocks: D;
  activeConditions?: string[];
}) {
  return <>{resolveContentBlocks(data, blocks, activeConditions)}</>;
}
