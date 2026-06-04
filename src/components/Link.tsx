'use client';
import React from 'react';
import { ActionContext } from '../ActionContext.js';
import { RouteContext } from '../RouteContext.js';
import { handleLinkClick } from '../lib/linkBehavior.js';
import type { LinkProps } from './Link.fields.js';

// Re-exported for existing client-side consumers of this module. Server code
// must import these from './Link.fields.js' directly to avoid evaluating this
// (client) module.
export type { LinkFields, LinkProps } from './Link.fields.js';
export { linkFieldConfig } from './Link.fields.js';

export function Link({link, ...props}: LinkProps) {
  const type = link.target.type;
  const actions = React.useContext(ActionContext);
  const routes = React.useContext(RouteContext);
  const route = type === 'route' ? routes[link.target.value] : undefined;

  const onClick = React.useCallback((e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    handleLinkClick(e, e.currentTarget, link.target, { routes, actions });
  }, [link, routes, actions]);

  if (type === 'action') {
    return <button
      aria-label={link.ariaLabel || undefined}
      disabled={actions[link.target.value]?.handler === undefined}
      {...props}
      onClick={onClick}
    >{link.text}</button>;
  }
  if (type === 'route') {
    if (!route) return null;

    return <a
      aria-label={link.ariaLabel || undefined}
      {...props}
      href={route.render(link.target.params)}
      onClick={onClick}
    >{link.text}</a>;
  }
  return <a
    aria-label={link.ariaLabel || undefined}
    {...props}
    href={link.target.value}
    onClick={onClick}
  >{link.text}</a>;
}
