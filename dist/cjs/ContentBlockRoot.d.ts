import React from 'react';
import { ActionConfig } from './ActionContext';
import { BlockComponents, BlockData } from './ContentBlockContext';
export * from './ContentBlockContext';
export * from './ActionContext';
export * from './RouteContext';
export declare const ContentBlockRootHoc: <D extends BlockComponents<any>>(ContentComponent: React.ComponentType<{
    data: BlockData<D>;
}>) => ({ data, actions, blocks }: {
    data: BlockData<D>;
    actions?: ActionConfig | undefined;
    blocks: D;
}) => JSX.Element;
export declare const ContentBlockRoot: ({ data, actions, blocks }: {
    data: BlockData<BlockComponents<any>>;
    actions?: ActionConfig | undefined;
    blocks: BlockComponents<any>;
}) => JSX.Element;
