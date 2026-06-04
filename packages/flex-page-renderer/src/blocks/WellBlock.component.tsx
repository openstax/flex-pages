import cn from 'classnames';
import React from 'react';
import type { ContentBlockConfig } from '../ContentBlockContext.js';
import { findByType, flexAlignClass, resolveBackground } from '../utils.js';
import './WellBlock.css';

export type WellConfigOptions = {
  type: 'background_color';
  value: string;
} | {
  type: 'gradient_color';
  value: string;
} | {
  type: 'gradient_direction';
  value: string;
} | {
  type: 'border_radius';
  value: string;
} | {
  type: 'padding';
  value: string;
} | {
  type: 'margin';
  value: string;
} | {
  type: 'width';
  value: string;
} | {
  type: 'text_alignment';
  value: 'left' | 'right' | 'center';
} | {
  type: 'analytics_label';
  value: string;
} | {
  type: 'id';
  value: string;
} | {
  type: 'border_color';
  value: string;
} | {
  type: 'border_size';
  value: string;
} | {
  type: 'pull_up';
  value: string;
};

export interface WellBlockConfig {
  id: string;
  type: 'well';
  value: {
    content: ContentBlockConfig[];
    config: WellConfigOptions[];
  };
}

export function WellBlock({data, content}: {data: WellBlockConfig; content?: React.ReactNode}) {
  const id = findByType(data.value.config, 'id')?.value;
  const backgroundColor = findByType(data.value.config, 'background_color')?.value;
  const gradientColor = findByType(data.value.config, 'gradient_color')?.value;
  const gradientDirection = findByType(data.value.config, 'gradient_direction')?.value;
  const borderRadius = findByType(data.value.config, 'border_radius')?.value ?? 8;
  const padding = findByType(data.value.config, 'padding')?.value ?? 2;
  const margin = findByType(data.value.config, 'margin')?.value ?? 0;
  const width = findByType(data.value.config, 'width')?.value;
  const textAlign = findByType(data.value.config, 'text_alignment')?.value;
  const pullUp = findByType(data.value.config, 'pull_up')?.value;
  const borderColor = findByType(data.value.config, 'border_color')?.value;
  const borderSize = findByType(data.value.config, 'border_size')?.value;
  const analytics = findByType(data.value.config, 'analytics_label')?.value;
  const bg = resolveBackground(backgroundColor, gradientColor, gradientDirection);
  const isLight = (backgroundColor || gradientColor) && !bg.isDark;

  return <div
    id={id}
    className={cn('content-block-well', {'dark-background': bg.isDark, 'light-background': isLight})}
    data-analytics-nav={analytics}
    style={{
      '--padding-multiplier': padding,
      '--margin-multiplier': margin,
      ...(pullUp ? {marginTop: `-${pullUp}rem`} : {})
    } as React.CSSProperties}
  >
    <div className={cn('well-content', 'flex-content-container', flexAlignClass(textAlign))} style={{
      background: bg.background,
      backgroundColor: bg.backgroundColor,
      borderRadius: `${borderRadius}px`,
      textAlign,
      maxWidth: width,
      ...(borderColor ? {border: `${borderSize ?? 1}px solid ${borderColor}`} : {})
    }}>
      {content}
    </div>
  </div>;
}
