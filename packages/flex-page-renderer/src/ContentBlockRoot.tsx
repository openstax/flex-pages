import React from 'react';
import { ActionConfig, ActionContext } from './ActionContext';
import { BlockComponents, BlockContext, BlockData } from './ContentBlockContext';
import { ContentBlocks } from './ContentBlocks';
import { RouteConfig, RouteContext } from './RouteContext';

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
  </BlockContext.Provider>;
};

export const ContentBlockRoot = ContentBlockRootHoc(ContentBlocks);
