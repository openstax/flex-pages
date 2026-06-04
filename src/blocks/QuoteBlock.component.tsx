import React from 'react';
import { Image, ImageFields } from '../components/Image.js';
import { findByType } from '../utils.js';
import { RichTextContent } from './RichTextBlock.component.js';
import './QuoteBlock.css';

type QuoteConfig = {
  type: 'accent_color';
  value: string;
};

export interface QuoteBlockConfig {
  id: string;
  type: 'quote';
  value: {
    image: ImageFields;
    content: string;
    name: string;
    title?: string;
    config: QuoteConfig[];
  };
}

export function QuoteBlock({data}: {data: QuoteBlockConfig}) {
  const accentColor = findByType(data.value.config, 'accent_color')?.value;
  const style = accentColor
    ? {'--quote-accent-color': accentColor} as React.CSSProperties
    : undefined;

  return <div className="content-block-quote" style={style}>
    <Image alt="" image={data.value.image} />
    <RichTextContent html={data.value.content} />
    <div className="quotee">
      <span className="name">{data.value.name}</span>
      {data.value.title ? <span className="title">{data.value.title}</span> : null}
    </div>
  </div>;
}
