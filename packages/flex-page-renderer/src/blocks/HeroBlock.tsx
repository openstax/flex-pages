import cn from 'classnames';
import React from 'react';
import type { ContentBlockConfig } from '../ContentBlockContext';
import { Image, ImageFields, imageFieldsConfig } from '../components/Image';
import { findByType, resolveBackground } from '../utils';
import './HeroBlock.css';

export type HeroConfigOptions = {
    type: 'text_alignment';
    value: 'left' | 'right' | 'center';
} | {
    type: 'background_color';
    value: string;
} | {
    type: 'gradient_color';
    value: string;
} | {
    type: 'gradient_direction';
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
} | {
    type: 'image_border_radius';
    value: string;
} | {
    type: 'image_border_color';
    value: string;
} | {
    type: 'image_border_size';
    value: string;
} | {
    type: 'image_overhang';
    value: string;
} | {
    type: 'rendering_condition';
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
      {name: 'gradient_color', label: 'Gradient To Color', type: 'text', pattern: '#[a-fA-Z0-9]{6}',
        help: 'Second color for gradient effect. Background Color is the starting color.'},
      {name: 'gradient_direction', label: 'Gradient Direction', type: 'select', options: [
        {label: 'Top to Bottom', value: 'to bottom'},
        {label: 'Bottom to Top', value: 'to top'},
        {label: 'Left to Right', value: 'to right'},
        {label: 'Right to Left', value: 'to left'},
        {label: 'Top-Left to Bottom-Right', value: 'to bottom right'},
        {label: 'Top-Right to Bottom-Left', value: 'to bottom left'},
        {label: 'Bottom-Left to Top-Right', value: 'to top right'},
        {label: 'Bottom-Right to Top-Left', value: 'to top left'},
      ]},
      {name: 'padding', label: 'Padding', help: 'Top and Bottom padding, in 10px increments', type: 'number'},
      {name: 'padding_top', label: 'Padding Top', help: 'Top padding, in 10px increments', type: 'number'},
      {name: 'padding_bottom', label: 'Padding Bottom', help: 'Bottom padding, in 10px increments', type: 'number'},
      {name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this section will include this label', type: 'text'},
      {name: 'id', label: 'ID', help: 'The HTML id of the section (can be referenced by anchor links).', type: 'text'},
      {name: 'image_border_radius', label: 'Image Border Radius', type: 'number',
        help: 'Border radius for the hero image in pixels'},
      {name: 'image_border_color', label: 'Image Border Color', type: 'text', pattern: '#[a-fA-F0-9]{6}',
        help: 'Hex color for the hero image border'},
      {name: 'image_border_size', label: 'Image Border Size', type: 'number',
        help: 'Border width for the hero image in pixels'},
      {name: 'image_overhang', label: 'Image Overhang', type: 'text',
        help: 'Extends the image beyond the content area by this amount (e.g. 5rem, 10%)'},
      {name: 'rendering_condition', label: 'Rendering Condition', type: 'text',
        help: 'Comma-separated condition slugs. Block renders only when at least one is active.'},
    ]},
  ],
};

const parseAlignment = (alignment: string) => {
    if (alignment.includes('top')) {return 'flex-start';}
    if (alignment.includes('bottom')) {return 'flex-end';}
    return 'center';
};

// eslint-disable-next-line complexity
export function HeroBlock({data, content, activeConditions}: {data: HeroBlockConfig; content?: React.ReactNode; activeConditions?: string[]}) {
    const condition = findByType(data.value.config, 'rendering_condition')?.value;
    if (condition && !condition.split(',').some(c => activeConditions?.includes(c.trim()))) return null;

    const id = findByType(data.value.config, 'id')?.value;
    const textAlign = findByType(data.value.config, 'text_alignment')?.value;
    const backgroundColor = findByType(data.value.config, 'background_color')?.value;
    const gradientColor = findByType(data.value.config, 'gradient_color')?.value;
    const gradientDirection = findByType(data.value.config, 'gradient_direction')?.value;
    const padding = findByType(data.value.config, 'padding')?.value ?? 0;
    const paddingTop = findByType(data.value.config, 'padding_top')?.value;
    const paddingBottom = findByType(data.value.config, 'padding_bottom')?.value;
    const imageBorderRadius = findByType(data.value.config, 'image_border_radius')?.value;
    const imageBorderColor = findByType(data.value.config, 'image_border_color')?.value;
    const imageBorderSize = findByType(data.value.config, 'image_border_size')?.value;
    const imageOverhang = findByType(data.value.config, 'image_overhang')?.value;
    const analytics = findByType(data.value.config, 'analytics_label')?.value;
    const bg = resolveBackground(backgroundColor, gradientColor, gradientDirection);

    const alignment = findByType(data.value.config, 'image_alignment')?.value.toLowerCase() ?? 'right';
    const imageRight = alignment.includes('right');
    const imageVerticalAlign = parseAlignment(alignment);

    return <section
        id={id}
        className={cn('content-block-hero', {'dark-background': bg.isDark})}
        data-analytics-nav={analytics}
        style={{background: bg.background, backgroundColor: bg.backgroundColor,
            '--padding-multiplier': padding,
            '--padding-top-multiplier': paddingTop,
            '--padding-bottom-multiplier': paddingBottom,
            '--image-vertical-align': imageVerticalAlign,
            '--image-border-radius': imageBorderRadius ? `${imageBorderRadius}px` : undefined,
            '--image-border-color': imageBorderColor,
            '--image-border-size': imageBorderSize ? `${imageBorderSize}px` : undefined,
            '--image-overhang': imageOverhang || undefined
        } as React.CSSProperties}
    >
        <div className={cn('hero-inner-wrapper', {'image-left': !imageRight})}>
          {imageRight ? <>
            <div className="hero-content" style={{textAlign}}>
                {content}
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
                {content}
            </div>
          </>}
        </div>
    </section>;
}
