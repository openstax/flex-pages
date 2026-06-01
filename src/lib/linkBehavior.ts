import type React from 'react';
import type { ActionConfig } from '../ActionContext';
import type { RouteConfig } from '../RouteContext';
import type { LinkFields } from '../components/Link.fields';
import { scrollTo } from '../utils';

/*
 * Shared dynamic-link behavior, used by both the Link component and the
 * rich-text delegated click handler so there is a single implementation.
 * Imports only types from the context modules (no `createContext` at load),
 * so this module is safe to pull into either graph.
 */

export type LinkTarget = LinkFields['target'];

export type LinkBehaviorContext = {
  routes: RouteConfig;
  actions: ActionConfig;
};

export function isClickWithModifierKeys(e: React.MouseEvent | MouseEvent) {
  return Boolean(e.shiftKey || e.ctrlKey || e.metaKey || e.altKey);
}

/*
 * Reads a dynamic-link descriptor from an anchor's data attributes, as written
 * by the editor into rich-text HTML:
 *   <a data-flex-link data-link-type=".." data-link-value=".." data-link-params="{..}">
 */
export function readLinkTarget(el: Element): LinkTarget | null {
  const type = el.getAttribute('data-link-type');
  const value = el.getAttribute('data-link-value');
  if (!type || value === null) return null;

  const paramsRaw = el.getAttribute('data-link-params');
  let params: Record<string, string> | undefined;
  if (paramsRaw) {
    try {
      params = JSON.parse(paramsRaw);
    } catch {
      params = undefined;
    }
  }
  return { type, value, params };
}

/*
 * Inverse of readLinkTarget: writes a (possibly resolved) target back onto an
 * anchor's data attributes. Used by mapPageNodes when transforming rich-text
 * links in the app data layer.
 */
export function writeLinkTarget(el: Element, target: LinkTarget): void {
  el.setAttribute('data-link-type', target.type);
  el.setAttribute('data-link-value', target.value);
  if (target.params && Object.keys(target.params).length > 0) {
    el.setAttribute('data-link-params', JSON.stringify(target.params));
  } else {
    el.removeAttribute('data-link-params');
  }
}

/*
 * `anchorEl` is the actual link element — for the standalone Link it is
 * e.currentTarget; for the delegated rich-text handler it is the matched
 * ancestor (e.currentTarget would be the wrapper, not the link).
 */
export function handleLinkClick(
  e: React.MouseEvent | MouseEvent,
  anchorEl: HTMLElement | null,
  target: LinkTarget,
  { routes, actions }: LinkBehaviorContext,
) {
  const { type, value, params } = target;

  if (type === 'anchor') {
    e.preventDefault();
    const el = document.getElementById(value.substring(1));
    if (el) scrollTo(el);
    return;
  }

  if (type === 'route') {
    const route = routes[value];
    if (!route) return;
    if (isClickWithModifierKeys(e) || anchorEl?.getAttribute('target') === '_blank') return;
    e.preventDefault();
    route.handler(params);
    return;
  }

  if (type === 'action') {
    actions[value]?.handler?.(params);
  }
}
