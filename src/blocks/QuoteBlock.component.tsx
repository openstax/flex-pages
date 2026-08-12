import cn from 'classnames';
import React from 'react';
import { Image, ImageFields } from '../components/Image.js';
import { findByType } from '../utils.js';
import { RichTextContent } from './RichTextBlock.component.js';
import './QuoteBlock.css';

type QuoteConfig = {
  type: 'accent_color';
  value: string;
} | {
  type: 'layout';
  value: string;
};

export interface QuoteBlockConfig {
  id: string;
  type: 'quote';
  value: {
    image?: ImageFields;
    content: string;
    name: string;
    title?: string;
    config: QuoteConfig[];
  };
}

export function QuoteBlock({data}: {data: QuoteBlockConfig}) {
  const accentColor = findByType(data.value.config, 'accent_color')?.value;
  const layout = findByType(data.value.config, 'layout')?.value ?? 'image-left';
  const image = data.value.image;
  const hasImage = Boolean(image?.file);
  const style = accentColor
    ? {'--quote-accent-color': accentColor} as React.CSSProperties
    : undefined;

  return <div className={cn('content-block-quote', `quote-layout-${layout}`, {'no-image': !hasImage})} style={style}>
    {hasImage ? <Image alt="" image={image!} /> : null}
    <div className="quote-body">
      <RichTextContent html={data.value.content} />
      <div className="quotee">
        <span className="name">{data.value.name}</span>
        {data.value.title ? <span className="title">{data.value.title}</span> : null}
      </div>
    </div>
  </div>;
}
