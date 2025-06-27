import cn from 'classnames';
import Color from 'color';
import React from 'react';
import { ContentBlockConfig, ContentBlocks } from '../ContentBlocks';
import { findByType } from '../utils';
import './WellBlock.css';

export type WellConfigOptions = {
  type: 'background_color';
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
      {name: 'border_radius', label: 'Border Radius', help: 'Border radius in pixels', type: 'number'},
      {name: 'padding', label: 'Padding', help: 'Inner padding, in 10px increments', type: 'number'},
      {name: 'margin', label: 'Margin', help: 'Outer margin, in 10px increments', type: 'number'},
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

export function WellBlock({data}: {data: WellBlockConfig}) {
  const id = findByType(data.value.config, 'id')?.value;
  const backgroundColor = findByType(data.value.config, 'background_color')?.value;
  const borderRadius = findByType(data.value.config, 'border_radius')?.value ?? 8;
  const padding = findByType(data.value.config, 'padding')?.value ?? 2;
  const margin = findByType(data.value.config, 'margin')?.value ?? 0;
  const width = findByType(data.value.config, 'width')?.value;
  const textAlign = findByType(data.value.config, 'text_alignment')?.value;
  const analytics = findByType(data.value.config, 'analytics_label')?.value;
  const isDark = backgroundColor && Color(backgroundColor).isDark(); // eslint-disable-line new-cap
  const isLight = backgroundColor && !isDark;

  return <div
    id={id}
    className={cn('content-block-well', {'dark-background': isDark, 'light-background': isLight})}
    data-analytics-nav={analytics}
    style={{
      '--padding-multiplier': padding,
      '--margin-multiplier': margin
    } as React.CSSProperties}
  >
    <div className="well-content" style={{
      backgroundColor,
      borderRadius: `${borderRadius}px`,
      textAlign,
      maxWidth: width
    }}>
      <ContentBlocks data={data.value.content} />
    </div>
  </div>;
}
