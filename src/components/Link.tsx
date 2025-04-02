import React from 'react';
import { scrollTo } from '../utils';

export interface LinkFields {
  text: string;
  ariaLabel?: string;
  target: {
    type: string;
    value: string;
  };
}

export const linkFieldConfig = [
  {name: 'text', label: 'Link Text', type: 'text', required: true},
  {name: 'ariaLabel', label: 'Aria Label', type: 'text'},
  {name: 'target', label: 'Link Target', type: 'namespace', fields: [
    {name: 'type', label: 'Link Type', type: 'select', options: [
      {label: 'External', value: 'external'},
      {label: 'Internal', value: 'internal'},
      {label: 'Anchor', value: 'anchor'},
    ]},
    {name: 'value', label: 'Target Value', type: 'text'},
  ]},
];

type LinkProps = {
  link: LinkFields;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Link({link, ...props}: LinkProps) {
  const onClick = React.useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (link.target.type === 'anchor') {
      e.preventDefault();
      const target = document.getElementById(link.target.value.substring(1));

      if (target) {
        scrollTo(target);
      }
    }
  }, [link]);

  return <a
    aria-label={link.ariaLabel || undefined}
    {...props}
    href={link.target.value}
    onClick={onClick}
  >{link.text}</a>;
}
