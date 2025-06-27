import React from 'react';
import { ActionConfig } from './ActionContext';
import { BlockComponents, BlockData } from './ContentBlockContext';
import { RouteConfig } from './RouteContext';
export * from './ContentBlockContext';
export * from './ActionContext';
export * from './RouteContext';
export declare const ContentBlockRootHoc: <D extends BlockComponents<any>>(ContentComponent: React.ComponentType<{
    data: BlockData<D>;
}>) => ({ data, actions, routes, blocks }: {
    data: BlockData<D>;
    actions?: ActionConfig | undefined;
    routes?: RouteConfig | undefined;
    blocks: D;
}) => JSX.Element;
export declare const ContentBlockRoot: ({ data, actions, routes, blocks }: {
    data: BlockData<BlockComponents<any>>;
    actions?: ActionConfig | undefined;
    routes?: RouteConfig | undefined;
    blocks: BlockComponents<any>;
}) => JSX.Element;
