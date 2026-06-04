import type { BlockData, BlockRenderingDefinitions } from './ContentBlockContext.js';
export * from './ContentBlockContext.js';
export declare function ContentBlockRoot<D extends BlockRenderingDefinitions<any>>({ data, blocks, activeConditions }: {
    data: BlockData<D>;
    blocks: D;
    activeConditions?: string[];
}): import("react/jsx-runtime").JSX.Element;
