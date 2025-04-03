import React from 'react';
import { scrollTo } from '../utils';
import { ActionContext } from '../ActionContext';

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
  {name: 'target', label: 'Link Target', type: 'link-target'},
];

type LinkProps = {
  link: LinkFields;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Link({link, ...props}: LinkProps) {
  const type = link.target.type
  const actions = React.useContext(ActionContext);

  const onClick = React.useCallback((e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (type === 'anchor') {
      e.preventDefault();
      const target = document.getElementById(link.target.value.substring(1));

      if (target) {
        scrollTo(target);
      }
    } else if (type === 'action') {
      actions[link.target.value]?.handler?.();
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

  return <a
    aria-label={link.ariaLabel || undefined}
    {...props}
    href={link.target.value}
    onClick={onClick}
  >{link.text}</a>;
}
