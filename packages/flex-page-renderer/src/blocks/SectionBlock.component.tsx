import cn from 'classnames';
import React from 'react';
import type { ContentBlockConfig } from '../ContentBlockContext';
import { findByType, resolveBackground } from '../utils';
import './SectionBlock.css';

export type SectionConfigOptions = {
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
  type: 'flex';
  value: 'flex' | 'flex-grow' | 'flex-shrink';
} | {
  type: 'rendering_condition';
  value: string;
};

export interface SectionBlockConfig {
  id: string;
  type: 'section';
  value: {
    content: ContentBlockConfig[];
    config: SectionConfigOptions[];
  };
}

// eslint-disable-next-line complexity
export function SectionBlock({data, content, activeConditions}: {data: SectionBlockConfig; content?: React.ReactNode; activeConditions?: string[]}) {
  const condition = findByType(data.value.config, 'rendering_condition')?.value;
  if (condition && !condition.split(',').some(c => activeConditions?.includes(c.trim()))) return null;

  const id = findByType(data.value.config, 'id')?.value;
  const textAlign = findByType(data.value.config, 'text_alignment')?.value;
  const flex = findByType(data.value.config, 'flex')?.value;
  const backgroundColor = findByType(data.value.config, 'background_color')?.value;
  const gradientColor = findByType(data.value.config, 'gradient_color')?.value;
  const gradientDirection = findByType(data.value.config, 'gradient_direction')?.value;
  const padding = findByType(data.value.config, 'padding')?.value ?? 0;
  const paddingTop = findByType(data.value.config, 'padding_top')?.value;
  const paddingBottom = findByType(data.value.config, 'padding_bottom')?.value;
  const analytics = findByType(data.value.config, 'analytics_label')?.value;
  const bg = resolveBackground(backgroundColor, gradientColor, gradientDirection);

  const display = data.value.content.some(d => findByType(d.value.config, 'flex'))
    ? 'flex' : 'block';

  return <section
    id={id}
    className={cn('content-block-section', {'dark-background': bg.isDark, [`content-block-${flex}`]: flex})}
    data-analytics-nav={analytics}
    style={{background: bg.background, backgroundColor: bg.backgroundColor,
      '--padding-multiplier': padding,
      '--padding-top-multiplier': paddingTop,
      '--padding-bottom-multiplier': paddingBottom
    } as React.CSSProperties}
  >
    <div className="section-content" style={{textAlign, display, flexDirection: 'column'}}>
      {content}
    </div>
  </section>;
}
