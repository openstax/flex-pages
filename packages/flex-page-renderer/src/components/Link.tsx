'use client';
import React from 'react';
import { ActionContext } from '../ActionContext.js';
import { RouteContext } from '../RouteContext.js';
import { handleLinkClick } from '../lib/linkBehavior.js';
import type { LinkTarget } from '../lib/linkBehavior.js';
import type { LinkProps } from './Link.config.js';

// Re-exported for existing client-side consumers of this module. Server code
// must import these from './Link.config.js' directly to avoid evaluating this
// (client) module.
export type { LinkFields, LinkProps } from './Link.config.js';
export { linkFieldConfig } from './Link.config.js';

export type LinkComponentProps = {
  linkTarget: LinkTarget;
  ariaLabel?: string;
  children?: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> & React.ButtonHTMLAttributes<HTMLButtonElement>;

// Renders a dynamic link from a concrete target, using `children` as the link
// content. The field-driven `Link` below wraps this with a LinkFields config;
// callers that need richer content (e.g. an image + text inside one anchor)
// use this component directly. The descriptor prop is `linkTarget` so it does
// not collide with the DOM anchor `target` attribute (still passable as a prop).
export function LinkComponent({linkTarget, ariaLabel, children, ...props}: LinkComponentProps) {
  const type = linkTarget.type;
  const actions = React.useContext(ActionContext);
  const routes = React.useContext(RouteContext);
  const route = type === 'route' ? routes[linkTarget.value] : undefined;

  const onClick = React.useCallback((e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    handleLinkClick(e, e.currentTarget, linkTarget, { routes, actions });
  }, [linkTarget, routes, actions]);

  if (type === 'action') {
    return <button
      aria-label={ariaLabel || undefined}
      disabled={actions[linkTarget.value]?.handler === undefined}
      {...props}
      onClick={onClick}
    >{children}</button>;
  }
  if (type === 'route') {
    if (!route) return null;

    return <a
      aria-label={ariaLabel || undefined}
      {...props}
      href={route.render(linkTarget.params)}
      onClick={onClick}
    >{children}</a>;
  }
  return <a
    aria-label={ariaLabel || undefined}
    {...props}
    href={linkTarget.value}
    onClick={onClick}
  >{children}</a>;
}

export function Link({link, ...props}: LinkProps) {
  return <LinkComponent linkTarget={link.target} ariaLabel={link.aria_label} {...props}>{link.text}</LinkComponent>;
}
