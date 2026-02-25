import type { BlockComponents, BlockData } from './ContentBlockContext';
export * from './ContentBlockContext';
export declare function ContentBlockRoot<D extends BlockComponents<any>>({ data, blocks }: {
    data: BlockData<D>;
    blocks: D;
}): import("react/jsx-runtime").JSX.Element;
