import DOMPurify from 'isomorphic-dompurify';
import React from 'react';
import { stripEmptyParagraphs } from './richTextDom.js';

export const Html = (props: React.PropsWithChildren<{
  block?: boolean;
  className?: string;
  id?: string;
  hidden?: boolean;
  sanitize?: boolean;
  html: string;
}>) => {
  let html: string;
  if (props.sanitize === false) {
    html = props.html;
  } else {
    // Sanitize to a DOM so we can drop empty paragraphs before rendering.
    const dom = DOMPurify.sanitize(props.html, {ADD_ATTR: ['target'], RETURN_DOM: true}) as unknown as HTMLElement;
    stripEmptyParagraphs(dom);
    html = dom.innerHTML;
  }
  const Tag = props.block ? 'div' : 'span';
  return <Tag
    dangerouslySetInnerHTML={{__html: html}}
    className={props.className}
    id={props.id}
    hidden={props.hidden}
  />;
};
