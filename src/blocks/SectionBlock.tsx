import cn from 'classnames';
import Color from 'color';
import React from 'react';
import { findByType } from '../utils';
import { ContentBlockConfig, ContentBlocks } from '../ContentBlocks';
import './SectionBlock.css';

export type SectionConfigOptions = {
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
};

export interface SectionBlockConfig {
  id: string;
  type: 'section';
  value: {
    content: ContentBlockConfig[];
    config: SectionConfigOptions[];
  };
};

SectionBlock.blockConfig = {
  type: 'section',
  categories: ['structure'],
  fields: [
    {name: 'content', type: 'blocks', categories: ['content']},
    {name: 'config', type: 'configs', configs: [
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

// eslint-disable-next-line complexity
export function SectionBlock({data}: {data: SectionBlockConfig}) {
  const id = findByType(data.value.config, 'id')?.value;
  const textAlign = findByType(data.value.config, 'text_alignment')?.value;
  const backgroundColor = findByType(data.value.config, 'background_color')?.value;
  const padding = findByType(data.value.config, 'padding')?.value ?? 0;
  const paddingTop = findByType(data.value.config, 'padding_top')?.value;
  const paddingBottom = findByType(data.value.config, 'padding_bottom')?.value;
  const analytics = findByType(data.value.config, 'analytics_label')?.value;
  const isDark = backgroundColor && Color(backgroundColor).isDark(); // eslint-disable-line new-cap

  return <section
    id={id}
    className={cn('content-block-section', {'dark-background': isDark})}
    data-analytics-nav={analytics}
    style={{backgroundColor,
      '--padding-multiplier': padding,
      '--padding-top-multiplier': paddingTop,
      '--padding-bottom-multiplier': paddingBottom
    } as React.CSSProperties}
  >
    <div className="section-content" style={{textAlign}}>
      <ContentBlocks data={data.value.content} />
    </div>
  </section>;
}
