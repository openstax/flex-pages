import React from 'react';
import { ContentBlocks } from './ContentBlocks';
import { ActionConfig, ActionContext } from './ActionContext';
import { BlockContext, BlockComponents, BlockData } from './ContentBlockContext';

export * from './ContentBlockContext';
export * from './ActionContext';

export const ContentBlockRootHoc = <D extends BlockComponents<any>>(
  ContentComponent: React.ComponentType<{data: BlockData<D>}>
) => ({data, actions, blocks}: {
  data: BlockData<D>;
  actions?: ActionConfig;
  blocks: D;
}) => {
  return <BlockContext.Provider value={blocks}>
    <ActionContext.Provider value={actions ?? {}}>
      <ContentComponent data={data} />
    </ActionContext.Provider>
  </BlockContext.Provider>
};

export const ContentBlockRoot = ContentBlockRootHoc(ContentBlocks);
