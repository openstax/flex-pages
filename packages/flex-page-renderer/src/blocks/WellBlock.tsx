import cn from 'classnames';
import React from 'react';
import type { ContentBlockConfig } from '../ContentBlockContext';
import { findByType, resolveBackground } from '../utils';
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

WellBlock.blockConfig = {
  type: 'well',
  categories: ['content'],
  label: 'Well',
  fields: [
    {name: 'content', label: 'Well Content', type: 'blocks', categories: ['content']},
    {name: 'config', label: 'Config', type: 'configs', configs: [
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
      {name: 'border_radius', label: 'Border Radius', help: 'Border radius in pixels', type: 'number'},
      {name: 'border_color', label: 'Border Color', type: 'text', pattern: '#[a-fA-F0-9]{6}', help: 'Hex border color'},
      {name: 'border_size', label: 'Border Size', type: 'number', help: 'Border width in pixels. Only applies when border color is set.'},
      {name: 'padding', label: 'Padding', help: 'Inner padding, in 10px increments', type: 'number'},
      {name: 'margin', label: 'Margin', help: 'Outer margin, in 10px increments', type: 'number'},
      {name: 'pull_up', label: 'Pull Up', type: 'number', help: 'Pulls the well upward by this amount in rem units. Use with extra padding on the section above to create an overlap effect.'},
      {name: 'width', label: 'Width', help: 'Maximum width of the well content (e.g., 600px, 50%, auto)', type: 'text'},
      {name: 'text_alignment', label: 'Text Alignment', type: 'select', options: [
        {label: 'Left', value: 'left'},
        {label: 'Right', value: 'right'},
        {label: 'Center', value: 'center'},
      ]},
      {name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this well will include this label', type: 'text'},
      {name: 'id', label: 'ID', help: 'The HTML id of the well (can be referenced by anchor links).', type: 'text'},
    ]},
  ],
};

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
    <div className="well-content" style={{
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
