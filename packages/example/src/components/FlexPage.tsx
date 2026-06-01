import { ContentBlockRoot } from '@openstax/flex-page-renderer/ContentBlockRoot';
import { mapPageNodes } from '@openstax/flex-page-renderer/lib/mapPageNodes';
import * as blocks from '../blocks';
import { resolvePageLinks } from '../lib/pages';
import { FlexPageContextProvider } from './FlexPageContextProvider';

export const FlexPage = async ({ data }: { data: any }) => {
  // Collapse stored id-based cross-page links to slug routes at the data layer,
  // so they point straight at the slug page (the renderer still resolves them
  // through RouteContext for soft navigation).
  const resolved = data ? await mapPageNodes(data, blocks, { linkMapper: resolvePageLinks }) : data;
  return (
    <FlexPageContextProvider>
      <ContentBlockRoot blocks={blocks} data={resolved} />
    </FlexPageContextProvider>
  );
};
