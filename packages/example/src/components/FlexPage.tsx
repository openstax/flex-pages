import { ContentBlockRoot } from '@openstax/flex-page-renderer/ContentBlockRoot';
import * as clientBlocks from '../blocks.client';
import * as serverBlocks from '../blocks.server';
import { FlexPageContextProvider } from './FlexPageContextProvider';

const allBlocks = { ...serverBlocks, ...clientBlocks };

export const FlexPage = ({ data }: { data: any }) => (
  <FlexPageContextProvider>
    <ContentBlockRoot blocks={allBlocks} data={data} />
  </FlexPageContextProvider>
);
