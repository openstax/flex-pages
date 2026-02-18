import React from 'react';
import { Image, ImageFields, imageFieldsConfig } from '../components/Image';
import { findByType } from '../utils';
import { RichTextContent } from './RichTextBlock';
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

QuoteBlock.blockConfig = {
  type: 'quote',
  categories: ['content'],
  label: 'Quote',
  fields: [
    {name: 'content', label: 'Quote Text', type: 'long-text', required: true},
    {name: 'title', label: 'Quotee\'s title', type: 'text'},
    {name: 'name', label: 'Quotee\'s name', type: 'text', required: true},
    {name: 'image', label: 'Image', type: 'namespace', fields: imageFieldsConfig},
    {name: 'config', label: 'Config', type: 'configs', configs: [
      {name: 'accent_color', label: 'Accent Color', type: 'text', pattern: '#[a-fA-F0-9]{6}', help: 'Hex color for the quote mark'},
    ]},
  ],
};

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
