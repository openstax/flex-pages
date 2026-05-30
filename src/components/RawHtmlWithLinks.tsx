'use client';
import DOMPurify from 'isomorphic-dompurify';
import React from 'react';
import { ActionContext } from '../ActionContext';
import { RouteContext } from '../RouteContext';
import { handleLinkClick, readLinkTarget } from '../lib/linkBehavior';

/*
 * Client renderer for rich text that contains dynamic links
 * (`<a data-flex-link ...>`). Plain rich text never reaches here — RichTextContent
 * only escalates to this component when the markup contains a flex-link, so
 * link-free prose stays a zero-JS server render via Html.
 *
 * Route hrefs are resolved from context at render time (so they are present in
 * the SSR markup), and a single delegated click handler on the wrapper runs the
 * shared link behavior — no per-link React components.
 */

type RawHtmlWithLinksProps = {
  html: string;
  className?: string;
  block?: boolean;
};

export function RawHtmlWithLinks({ html, className, block }: RawHtmlWithLinksProps) {
  const routes = React.useContext(RouteContext);
  const actions = React.useContext(ActionContext);

  const resolvedHtml = React.useMemo(() => {
    // RETURN_DOM yields the sanitized content wrapped in a <body>; the types
    // surface it as Node, so narrow to HTMLElement for querySelectorAll/innerHTML.
    const dom = DOMPurify.sanitize(html, {
      ADD_ATTR: ['target'],
      RETURN_DOM: true,
    }) as unknown as HTMLElement;

    dom.querySelectorAll('a[data-flex-link]').forEach((a) => {
      const target = readLinkTarget(a);
      if (!target) return;

      if (target.type === 'route') {
        const route = routes[target.value];
        if (route) a.setAttribute('href', route.render(target.params));
      } else if (target.type === 'action') {
        // actions have no URL; expose them as buttons for assistive tech
        a.setAttribute('role', 'button');
      } else if (!a.getAttribute('href')) {
        // anchor / external / internal: fall back to the stored value
        a.setAttribute('href', target.value);
      }
    });

    return dom.innerHTML;
  }, [html, routes]);

  const onClick = React.useCallback((e: React.MouseEvent<HTMLElement>) => {
    const anchor = (e.target as HTMLElement).closest<HTMLElement>('a[data-flex-link]');
    if (!anchor) return;
    const target = readLinkTarget(anchor);
    if (target) handleLinkClick(e, anchor, target, { routes, actions });
  }, [routes, actions]);

  const Tag = block ? 'div' : 'span';
  return (
    <Tag
      className={className}
      onClick={onClick}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: resolvedHtml }}
    />
  );
}
