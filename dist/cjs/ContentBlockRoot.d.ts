import type { BlockData, BlockDefinitions } from './ContentBlockContext.js';
export * from './ContentBlockContext.js';
export declare function ContentBlockRoot<D extends BlockDefinitions<any>>({ data, blocks, activeConditions }: {
    data: BlockData<D>;
    blocks: D;
    activeConditions?: string[];
}): import("react/jsx-runtime").JSX.Element;
