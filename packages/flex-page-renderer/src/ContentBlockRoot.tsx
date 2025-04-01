import React from 'react';
import { ContentBlockConfig, ContentBlocks } from './ContentBlocks';

/*
 * these types are annoying, and do not work perfectly. i'm sort of 
 * ok with that because we're anticipating that the data is being
 * retrieved from a db anyway
 */
type BlockData<D> = Array<ContentBlockConfig & {type: keyof D} & Record<string, unknown>>;
type BlockComponents<D> = {
  [key in keyof D]: React.ComponentType<{data: {type: key} & ContentBlockConfig & any}>;
};

type BlockComponent = React.ComponentType<{data: ContentBlockConfig}>
type BlockComponentMap = Record<string, BlockComponent>;
export const BlockContext = React.createContext<BlockComponentMap>({});

export function ContentBlockRoot<D extends BlockComponents<any>>({data, blocks}: {
  data: BlockData<D>;
  blocks: D;
}) {
  return <BlockContext.Provider value={blocks}>
    <ContentBlocks data={data} />
  </BlockContext.Provider>
};
