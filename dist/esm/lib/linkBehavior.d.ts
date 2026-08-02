import type React from 'react';
import type { ActionConfig } from '../ActionContext.js';
import type { RouteConfig } from '../RouteContext.js';
import type { LinkFields } from '../components/Link.config.js';
export type LinkTarget = LinkFields['target'];
export type LinkBehaviorContext = {
    routes: RouteConfig;
    actions: ActionConfig;
};
export declare function isClickWithModifierKeys(e: React.MouseEvent | MouseEvent): boolean;
export declare function readLinkTarget(el: Element): LinkTarget | null;
export declare function writeLinkTarget(el: Element, target: LinkTarget, href?: string): void;
export declare function handleLinkClick(e: React.MouseEvent | MouseEvent, anchorEl: HTMLElement | null, target: LinkTarget, { routes, actions }: LinkBehaviorContext): void;
