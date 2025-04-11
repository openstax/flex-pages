import React from 'react';
import { ContentBlocks } from './ContentBlocks';
import { ActionConfig, ActionContext } from './ActionContext';
import { RouteConfig, RouteContext } from './RouteContext';
import { BlockContext, BlockComponents, BlockData } from './ContentBlockContext';

export * from './ContentBlockContext';
export * from './ActionContext';
export * from './RouteContext';

export const ContentBlockRootHoc = <D extends BlockComponents<any>>(
  ContentComponent: React.ComponentType<{data: BlockData<D>}>
) => ({data, actions, routes, blocks}: {
  data: BlockData<D>;
  actions?: ActionConfig;
  routes?: RouteConfig;
  blocks: D;
}) => {
  return <BlockContext.Provider value={blocks}>
    <ActionContext.Provider value={actions ?? {}}>
      <RouteContext.Provider value={routes ?? {}}>
        <ContentComponent data={data} />
      </RouteContext.Provider>
    </ActionContext.Provider>
  </BlockContext.Provider>
};

export const ContentBlockRoot = ContentBlockRootHoc(ContentBlocks);
