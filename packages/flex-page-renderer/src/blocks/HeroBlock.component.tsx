import cn from 'classnames';
import React from 'react';
import type { ContentBlockConfig } from '../ContentBlockContext';
import { Image, ImageFields } from '../components/Image';
import { findByType, flexAlignClass, resolveBackground } from '../utils';
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
            <div className={cn('hero-content', 'flex-content-container', flexAlignClass(textAlign))} style={{textAlign}}>
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
            <div className={cn('hero-content', 'flex-content-container', flexAlignClass(textAlign))} style={{textAlign}}>
                {content}
            </div>
          </>}
        </div>
    </section>;
}
