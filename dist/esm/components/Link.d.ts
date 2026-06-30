import React from 'react';
import type { LinkTarget } from '../lib/linkBehavior.js';
import type { LinkProps } from './Link.config.js';
export type { LinkFields, LinkProps } from './Link.config.js';
export { linkFieldConfig } from './Link.config.js';
export type LinkComponentProps = {
    linkTarget: LinkTarget;
    ariaLabel?: string;
    children?: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> & React.ButtonHTMLAttributes<HTMLButtonElement>;
export declare function LinkComponent({ linkTarget, ariaLabel, children, ...props }: LinkComponentProps): React.JSX.Element | null;
export declare function Link({ link, ...props }: LinkProps): React.JSX.Element;
