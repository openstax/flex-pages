import type { BlockComponentRegistry, BlockComponents, BlockData } from './ContentBlockContext';
import { resolveContentBlocks } from './resolveContentBlocks';

export * from './ContentBlockContext';

export function ContentBlockRoot<D extends BlockComponents<any>>({data, blocks, components, activeConditions}: {
  data: BlockData<D>;
  blocks: D;
  components: BlockComponentRegistry;
  activeConditions?: string[];
}) {
  return <>{resolveContentBlocks(data, blocks, components, activeConditions)}</>;
}
