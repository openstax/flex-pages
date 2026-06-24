import { ContentBlockRoot } from '@openstax/flex-page-renderer/ContentBlockRoot';
import { mapPageNodes } from '@openstax/flex-page-renderer/lib/mapPageNodes';
import { JSDOM } from 'jsdom';
import * as blocks from '../blocks';
import { resolvePageLinks } from '../lib/pages';
import { FlexPageContextProvider } from './FlexPageContextProvider';

export const FlexPage = async ({ data }: { data: any }) => {
  // Collapse stored id-based cross-page links to slug routes at the data layer,
  // so they point straight at the slug page (the renderer still resolves them
  // through RouteContext for soft navigation).
  // This runs in a server component (no platform DOM), so the rich-text link
  // rewrite needs a jsdom-backed parser supplied explicitly.
  // `hydratePrefetch` runs each block's data loader (e.g. book tiles) server-side
  // and attaches the result to the node, so data-driven blocks render with their
  // data on first paint instead of fetching after hydration.
  const resolved = data
    ? await mapPageNodes(data, blocks, { linkMapper: resolvePageLinks, hydratePrefetch: true }, (html) => new JSDOM(html).window.document)
    : data;
  return (
    <FlexPageContextProvider>
      <ContentBlockRoot blocks={blocks} data={resolved} />
    </FlexPageContextProvider>
  );
};
