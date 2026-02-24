import type { BlockComponents, BlockData } from './ContentBlockContext';
import { resolveContentBlocks } from './resolveContentBlocks';

export * from './ContentBlockContext';

export function ContentBlockRoot<D extends BlockComponents<any>>({data, blocks}: {
  data: BlockData<D>;
  blocks: D;
}) {
  return <>{resolveContentBlocks(data, blocks)}</>;
}
