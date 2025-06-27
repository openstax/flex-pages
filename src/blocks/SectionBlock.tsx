import cn from 'classnames';
import Color from 'color';
import React from 'react';
import { ContentBlockConfig, ContentBlocks } from '../ContentBlocks';
import { findByType } from '../utils';
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
} | {
  type: 'flex';
  value: 'flex' | 'flex-grow' | 'flex-shrink';
};

export interface SectionBlockConfig {
  id: string;
  type: 'section';
  value: {
    content: ContentBlockConfig[];
    config: SectionConfigOptions[];
  };
}

SectionBlock.blockConfig = {
  type: 'section',
  categories: ['structure'],
  label: 'Section',
  fields: [
    {name: 'content', label: 'Section Content', type: 'blocks', categories: ['content']},
    {name: 'config', label: 'Config', type: 'configs', configs: [
      {name: 'text_alignment', label: 'Text Alignment', type: 'select', options: [
        {label: 'Left', value: 'left'},
        {label: 'Right', value: 'right'},
        {label: 'Center', value: 'center'},
      ]},
      {name: 'flex', label: 'Height', type: 'select', options: [
        {label: 'Grow to fill available page space', value: 'flex-grow'},
        {label: 'Shrink to fit available page space', value: 'flex-shrink'},
        {label: 'Fit to available page space', value: 'flex'},
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

// eslint-disable-next-line complexity
export function SectionBlock({data}: {data: SectionBlockConfig}) {
  const id = findByType(data.value.config, 'id')?.value;
  const textAlign = findByType(data.value.config, 'text_alignment')?.value;
  const flex = findByType(data.value.config, 'flex')?.value;
  const backgroundColor = findByType(data.value.config, 'background_color')?.value;
  const padding = findByType(data.value.config, 'padding')?.value ?? 0;
  const paddingTop = findByType(data.value.config, 'padding_top')?.value;
  const paddingBottom = findByType(data.value.config, 'padding_bottom')?.value;
  const analytics = findByType(data.value.config, 'analytics_label')?.value;
  const isDark = backgroundColor && Color(backgroundColor).isDark(); // eslint-disable-line new-cap

  const display = data.value.content.some(d => findByType(d.value.config, 'flex'))
    ? 'flex' : 'block';

  return <section
    id={id}
    className={cn('content-block-section', {'dark-background': isDark, [`content-block-${flex}`]: flex})}
    data-analytics-nav={analytics}
    style={{backgroundColor,
      '--padding-multiplier': padding,
      '--padding-top-multiplier': paddingTop,
      '--padding-bottom-multiplier': paddingBottom
    } as React.CSSProperties}
  >
    <div className="section-content" style={{textAlign, display, flexDirection: 'column'}}>
      <ContentBlocks data={data.value.content} />
    </div>
  </section>;
}
