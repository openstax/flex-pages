import { ContentBlockRoot } from '@openstax/flex-page-renderer/ContentBlockRoot';
import { mapPageNodes } from '@openstax/flex-page-renderer/lib/mapPageNodes';
import * as blocks from '../blocks';
import { FlexPageContextProvider } from './FlexPageContextProvider';

export const FlexPage = async ({ data }: { data: any }) => {
  // No mappers yet — this just verifies the async page-transform wiring.
  // Apps opt into dynamic routing by passing a linkMapper here.
  const resolved = data ? await mapPageNodes(data, blocks, {}) : data;
  return (
    <FlexPageContextProvider>
      <ContentBlockRoot blocks={blocks} data={resolved} />
    </FlexPageContextProvider>
  );
};
