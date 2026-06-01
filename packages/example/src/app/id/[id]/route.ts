import { redirect } from 'next/navigation';
import { getPageIds, hrefForId } from '../../../lib/pages';

// Required by `output: 'export'` for this dynamic segment. (The redirect itself
// still needs a server runtime — see note below.)
export function generateStaticParams() {
  return getPageIds().map(id => ({ id }));
}

/*
 * Permalink endpoint: `/flex-pages/id/<id>` redirects to the page's current
 * named slug. Cross-page links are stored by opaque id, so this id url is the
 * stable permalink — the slug can change without breaking it.
 *
 * NOTE: a server redirect can't be statically exported, so this endpoint only
 * works under a server runtime (`next dev` / a Node deploy), not the static
 * `output: 'export'` build used for GitHub Pages. There, mapPageNodes resolves
 * links to slugs at build time so the permalink hop is never needed.
 */
export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const href = hrefForId(id);
  if (href === null) {
    return new Response(`No page found for id "${id}"`, { status: 404 });
  }
  redirect(href);
}
