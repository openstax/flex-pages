import React from 'react';
import { ContentBlocks } from './ContentBlocks';
import { BlockContext, BlockComponents, BlockData } from './ContentBlockContext';

export * from './ContentBlockContext';

export const ContentBlockRootHoc = <D extends BlockComponents<any>>(
  ContentComponent: React.ComponentType<{data: BlockData<D>}>
) => ({data, blocks}: {
  data: BlockData<D>;
  blocks: D;
}) => {
  return <BlockContext.Provider value={blocks}>
    <ContentComponent data={data} />
  </BlockContext.Provider>
};

export const ContentBlockRoot = ContentBlockRootHoc(ContentBlocks);
