import React from 'react';
import { BlockContext } from './ContentBlockRoot';

export type ContentBlockConfig = {type: string; id: string;};

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
