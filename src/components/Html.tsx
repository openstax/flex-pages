import DOMPurify from 'isomorphic-dompurify';
import React from 'react';

export const Html = (props: React.PropsWithChildren<{
  block?: boolean;
  className?: string;
  sanitize?: boolean;
  html: string;
}>) => {
  const html = props.sanitize === false
    ? props.html
    : DOMPurify.sanitize(props.html, {ADD_ATTR: ['target']})
  ;
  return props.block
    ? <div dangerouslySetInnerHTML={{__html: html}} className={props.className} />
    : <span dangerouslySetInnerHTML={{__html: html}} className={props.className} />
  ;
};
