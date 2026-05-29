import React from 'react';
import { ActionContext } from '../ActionContext';
import { RouteContext } from '../RouteContext';
import { scrollTo } from '../utils';
import type { LinkProps } from './Link.fields';

// Re-exported for existing client-side consumers of this module. Server code
// must import these from './Link.fields' directly to avoid evaluating this
// (client) module.
export type { LinkFields, LinkProps } from './Link.fields';
export { linkFieldConfig } from './Link.fields';

export function Link({link, ...props}: LinkProps) {
  const type = link.target.type;
  const actions = React.useContext(ActionContext);
  const routes = React.useContext(RouteContext);
  const route = type === 'route' ? routes[link.target.value] : undefined;

  const onClick = React.useCallback((e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (type === 'anchor') {
      e.preventDefault();
      const target = document.getElementById(link.target.value.substring(1));

      if (target) {
        scrollTo(target);
      }
    } if (route) {
      if (isClickWithModifierKeys(e) || e.currentTarget.getAttribute('target') === '_blank') {
        return;
      }
      e.preventDefault();
      route.handler(link.target.params);
    } else if (type === 'action') {
      actions[link.target.value]?.handler?.(link.target.params);
    }
  }, [link]);

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

function isClickWithModifierKeys(e: React.MouseEvent | MouseEvent) {
  return Boolean(e.shiftKey || e.ctrlKey || e.metaKey || e.altKey);
}
