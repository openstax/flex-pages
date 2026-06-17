import React from 'react';
import { sanitizeRichText } from './richTextSanitize.js';

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
    : sanitizeRichText(props.html)
  ;
  const Tag = props.block ? 'div' : 'span';
  return <Tag
    dangerouslySetInnerHTML={{__html: html}}
    className={props.className}
    id={props.id}
    hidden={props.hidden}
  />;
};
