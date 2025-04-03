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
  label: 'Hero',
  fields: [
    {name: 'content', label: 'Content', type: 'blocks', categories: ['content']},
    {name: 'imageAlt', label: 'Image Alt', type: 'text'},
    {name: 'image', label: 'Hero Image', type: 'namespace', fields: imageFieldsConfig},
    {name: 'config', label: 'Config', type: 'configs', configs: [
      {name: 'image_alignment', label: 'Image Alignment', type: 'select', options: [
        {label: 'Left', value: 'left'},
        {label: 'Top Left', value: 'top_left'},
        {label: 'Bottom Left', value: 'bottom_left'},
        {label: 'Right', value: 'right'},
        {label: 'Top Right', value: 'top_right'},
        {label: 'Bottom Right', value: 'bottom_right'},
      ]},
      {name: 'text_alignment', label: 'Text Alignment', type: 'select', options: [
        {label: 'Left', value: 'left'},
        {label: 'Right', value: 'right'},
        {label: 'Center', value: 'center'},
      ]},
      {name: 'background_color', label: 'Background Color', type: 'text', pattern: '#[a-fA-Z0-9]{6}'},
      {name: 'padding', label: 'Padding', help: 'Top and Bottom padding, in 10px increments', type: 'number'},
      {name: 'padding_top', label: 'Padding Top', help: 'Top padding, in 10px increments', type: 'number'},
      {name: 'padding_bottom', label: 'Padding Bottom', help: 'Bottom padding, in 10px increments', type: 'number'},
      {name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this section will include this label', type: 'text'},
      {name: 'id', label: 'ID', help: 'The HTML id of the section (can be referenced by anchor links).', type: 'text'},
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
