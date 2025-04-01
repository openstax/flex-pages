import React from 'react';

export type ContentBlockConfig = {type: string; id: string;};
type BlockData<D> = D extends ContentBlockConfig ? D : never;
type BlockComponents<D> = D extends ContentBlockConfig ? {
  [K in D['type']]: React.ComponentType<{ data: Extract<D, { type: K }> }>;
} : never;
type BlockComponent = React.ComponentType<{data: ContentBlockConfig}>
type BlockComponentMap = Record<string, BlockComponent>;
export const BlockContext = React.createContext<BlockComponentMap>({});

export function ContentBlockRoot<D>({data, blocks}: {
  data: BlockData<D>[];
  blocks: BlockComponents<D>;
}) {
  return <BlockContext.Provider value={blocks as any}>
    <ContentBlocks data={data} />
  </BlockContext.Provider>
};

export function ContentBlocks({data}: {data: ContentBlockConfig[]}) {
  return <>
      {data.map((block) => <ContentBlock key={block.id} data={block} />)}
  </>;
}

// eslint-disable-next-line complexity
export function ContentBlock({data}: {data: ContentBlockConfig}) {
  const Block = React.useContext(BlockContext)[data.type];
  if (!Block) return <pre>{JSON.stringify(data, null, 2)}</pre>;
  return <Block data={data} />;
}
