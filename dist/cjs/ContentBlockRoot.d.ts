import type { BlockComponents, BlockData } from './ContentBlockContext';
export * from './ContentBlockContext';
export declare function ContentBlockRoot<D extends BlockComponents<any>>({ data, blocks, activeConditions }: {
    data: BlockData<D>;
    blocks: D;
    activeConditions?: string[];
}): import("react/jsx-runtime").JSX.Element;
