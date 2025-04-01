import cn from 'classnames';
import Color from 'color';
import React from 'react';
import { Image, ImageFields, imageFieldsConfig } from '../components/Image';
import { findByType } from '../utils';
import { ContentBlockConfig, ContentBlocks } from '../ContentBlocks';
import './HeroBlock.css';

export type HeroConfigOptions = {
    type: 'text_alignment';
    value: 'left' | 'right' | 'center';
} | {
    type: 'background_color';
    value: string;
} | {
    type: 'padding';
    value: string;
} | {
    type: 'padding_top';
    value: string;
} | {
    type: 'padding_bottom';
    value: string;
} | {
    type: 'analytics_label';
    value: string;
} | {
    type: 'id';
    value: string;
} | {
    type: 'image_alignment';
    value: string;
};

export interface HeroBlockConfig {
    id: string;
    type: 'hero';
    value: {
      content: ContentBlockConfig[];
      image: ImageFields;
      imageAlt: string;
      config: HeroConfigOptions[];
    };
}

HeroBlock.blockConfig = {
  type: 'hero',
  categories: ['structure'],
  fields: [
    {name: 'content', type: 'blocks', categories: ['content']},
    {name: 'imageAlt', type: 'text'},
    {name: 'image', type: 'namespace', fields: imageFieldsConfig},
    {name: 'config', type: 'configs', configs: [
      {name: 'image_alignment', type: 'select', options: [
        {label: 'Left', value: 'left'},
        {label: 'Top Left', value: 'top_left'},
        {label: 'Bottom Left', value: 'bottom_left'},
        {label: 'Right', value: 'right'},
        {label: 'Top Right', value: 'top_right'},
        {label: 'Bottom Right', value: 'bottom_right'},
      ]},
      {name: 'text_alignment', type: 'select', options: [
        {label: 'Left', value: 'left'},
        {label: 'Right', value: 'right'},
        {label: 'Center', value: 'center'},
      ]},
      {name: 'background_color', type: 'text', pattern: '#[a-f0-9]{6}'},
      {name: 'padding', type: 'number'},
      {name: 'padding_top', type: 'number'},
      {name: 'padding_bottom', type: 'number'},
      {name: 'analytics_label', type: 'text'},
      {name: 'id', type: 'text'},
    ]},
  ],
};

const parseAlignment = (alignment: string) => {
    if (alignment.includes('top')) {return 'flex-start';}
    if (alignment.includes('bottom')) {return 'flex-end';}
    return 'center';
};

// eslint-disable-next-line complexity
export function HeroBlock({data}: {data: HeroBlockConfig}) {
    const id = findByType(data.value.config, 'id')?.value;
    const textAlign = findByType(data.value.config, 'text_alignment')?.value;
    const backgroundColor = findByType(data.value.config, 'background_color')?.value;
    const padding = findByType(data.value.config, 'padding')?.value ?? 0;
    const paddingTop = findByType(data.value.config, 'padding_top')?.value;
    const paddingBottom = findByType(data.value.config, 'padding_bottom')?.value;
    const analytics = findByType(data.value.config, 'analytics_label')?.value;
    const isDark = backgroundColor && Color(backgroundColor).isDark(); // eslint-disable-line new-cap

    const alignment = findByType(data.value.config, 'image_alignment')?.value.toLowerCase() ?? 'right';
    const imageRight = alignment.includes('right');
    const imageVerticalAlign = parseAlignment(alignment);

    return <section
        id={id}
        className={cn('content-block-hero', {'dark-background': isDark})}
        data-analytics-nav={analytics}
        style={{backgroundColor,
            '--padding-multiplier': padding,
            '--padding-top-multiplier': paddingTop,
            '--padding-bottom-multiplier': paddingBottom,
            '--image-vertical-align': imageVerticalAlign
        } as React.CSSProperties}
    >
        <div className="hero-inner-wrapper">
          {imageRight ? <>
            <div className="hero-content" style={{textAlign}}>
                <ContentBlocks data={data.value.content} />
            </div>
            <div className="hero-image-container">
                <Image
                    className="hero-image"
                    image={data.value.image}
                    alt={data.value.imageAlt}
                />
            </div>
          </> : <>
            <div className="hero-image-container">
                <Image
                    className="hero-image"
                    image={data.value.image}
                    alt={data.value.imageAlt}
                />
            </div>
            <div className="hero-content" style={{textAlign}}>
                <ContentBlocks data={data.value.content} />
            </div>
          </>}
        </div>
    </section>;
}
