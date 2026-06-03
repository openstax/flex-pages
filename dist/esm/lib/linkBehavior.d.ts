import type React from 'react';
import type { ActionConfig } from '../ActionContext';
import type { RouteConfig } from '../RouteContext';
import type { LinkFields } from '../components/Link.fields';
export type LinkTarget = LinkFields['target'];
export type LinkBehaviorContext = {
    routes: RouteConfig;
    actions: ActionConfig;
};
export declare function isClickWithModifierKeys(e: React.MouseEvent | MouseEvent): boolean;
export declare function readLinkTarget(el: Element): LinkTarget | null;
export declare function writeLinkTarget(el: Element, target: LinkTarget, href?: string): void;
export declare function handleLinkClick(e: React.MouseEvent | MouseEvent, anchorEl: HTMLElement | null, target: LinkTarget, { routes, actions }: LinkBehaviorContext): void;
