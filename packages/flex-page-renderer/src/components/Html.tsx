import DOMPurify from 'isomorphic-dompurify';
import React from 'react';

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
    : DOMPurify.sanitize(props.html, {ADD_ATTR: ['target']})
  ;
  const Tag = props.block ? 'div' : 'span';
  return <Tag
    dangerouslySetInnerHTML={{__html: html}}
    className={props.className}
    id={props.id}
    hidden={props.hidden}
  />;
};
