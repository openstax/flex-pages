import type React from 'react';

/*
 * Serializable Link config and types, kept separate from Link.tsx so that
 * server components can import them without evaluating Link.tsx — which pulls
 * in ActionContext/RouteContext and their top-level `createContext` calls
 * (illegal in a server component). The Link *component* stays in Link.tsx.
 */

export interface LinkFields {
  text: string;
  ariaLabel?: string;
  target: {
    type: string;
    value: string;
    params?: Record<string, string>;
  };
}

export const linkFieldConfig = [
  {name: 'text', label: 'Link Text', type: 'text', required: true},
  {name: 'ariaLabel', label: 'Aria Label', type: 'text'},
  {name: 'target', label: 'Link Target', type: 'link-target', required: true},
];

export type LinkProps = {
  link: LinkFields;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> & React.ButtonHTMLAttributes<HTMLButtonElement>;
