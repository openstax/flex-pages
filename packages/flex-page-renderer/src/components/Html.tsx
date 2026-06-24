import React from 'react';
import { sanitizeHTML } from '../lib/sanitizeHtml.js';

export const Html = (props: React.PropsWithChildren<{
  block?: boolean;
  className?: string;
  id?: string;
  hidden?: boolean;
  sanitize?: boolean;
  html: string;
}>) => {
  const html = props.sanitize === false
    ? props.html
    : sanitizeHTML(props.html)
  ;
  const Tag = props.block ? 'div' : 'span';
  return <Tag
    dangerouslySetInnerHTML={{__html: html}}
    className={props.className}
    id={props.id}
    hidden={props.hidden}
  />;
};
