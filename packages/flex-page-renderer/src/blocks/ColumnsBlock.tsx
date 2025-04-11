import cn from 'classnames';
import Color from 'color';
import React from 'react';
import { findByType } from '../utils';
import { ContentBlockConfig, ContentBlocks } from '../ContentBlocks';
import './ColumnsBlock.css';

export type SectionConfigOptions = {
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
  type: 'left_size';
  value: string;
} | {
  type: 'right_size';
  value: string;
} | {
  type: 'gap';
  value: string;
} | {
  type: 'flex';
  value: 'flex' | 'flex-grow' | 'flex-shrink';
};

export interface ColumnsBlockConfig {
  id: string;
  type: 'columns';
  value: {
    leftContent: ContentBlockConfig[];
    rightContent: ContentBlockConfig[];
    config: SectionConfigOptions[];
  };
}

ColumnsBlock.blockConfig = {
  type: 'columns',
  label: 'Columns',
  categories: ['structure'],
  fields: [
    {name: 'leftContent', label: 'Left Column Content', type: 'blocks', categories: ['content']},
    {name: 'rightContent', label: 'Right Column Content', type: 'blocks', categories: ['content']},
    {name: 'config', label: 'Config', type: 'configs', configs: [
      {name: 'background_color', label: 'Background Color', type: 'text', pattern: '#[a-fA-Z0-9]{6}'},
      {name: 'padding', label: 'Padding', help: 'Top and Bottom padding, in 10px increments', type: 'number'},
      {name: 'padding_top', label: 'Padding Top', help: 'Top padding, in 10px increments', type: 'number'},
      {name: 'padding_bottom', label: 'Padding Bottom', help: 'Bottom padding, in 10px increments', type: 'number'},
      {name: 'flex', label: 'Height', type: 'select', options: [
        {label: 'Grow to fill available page space', value: 'flex-grow'},
        {label: 'Shrink to fit available page space', value: 'flex-shrink'},
        {label: 'Fit to available page space', value: 'flex'},
      ]},
      {name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this section will include this label', type: 'text'},
      {name: 'id', label: 'ID', help: 'The HTML id of the section (can be referenced by anchor links).', type: 'text'},
      {name: 'gap', label: 'Column Gap', help: 'The space between the columns, in 10px increments', type: 'number'},
      {name: 'right_size', label: 'Right Column Size', help: 'CSS text for the right column eg (20rem, 30%)', type: 'text',
        disabledWhen: (data: any) => !!data?.config?.find((c: any) => c.name === 'left_size')
      },
      {name: 'left_size', label: 'Left Column Size', help: 'CSS text for the left column eg (20rem, 30%)', type: 'text',
        disabledWhen: (data: any) => !!data?.config?.find((c: any) => c.name === 'right_size')
      },
    ]},
  ],
};

// eslint-disable-next-line complexity
export function ColumnsBlock({data}: {data: ColumnsBlockConfig}) {
  const id = findByType(data.value.config, 'id')?.value;
  const gap = findByType(data.value.config, 'gap')?.value ?? 0;
  const flex = findByType(data.value.config, 'flex')?.value;
  const leftSize = findByType(data.value.config, 'left_size')?.value;
  const rightSize = leftSize ? undefined : findByType(data.value.config, 'right_size')?.value;
  const backgroundColor = findByType(data.value.config, 'background_color')?.value;
  const padding = findByType(data.value.config, 'padding')?.value ?? 0;
  const paddingTop = findByType(data.value.config, 'padding_top')?.value;
  const paddingBottom = findByType(data.value.config, 'padding_bottom')?.value;
  const analytics = findByType(data.value.config, 'analytics_label')?.value;
  const isDark = backgroundColor && Color(backgroundColor).isDark(); // eslint-disable-line new-cap

  const leftDisplay = data.value.leftContent.some(d => d.value.config?.some(c => c.name === 'flex'))
    ? 'flex' : 'block';
  const rightDisplay = data.value.rightContent.some(d => d.value.config?.some(c => c.name === 'flex'))
    ? 'flex' : 'block';

  const leftStyle = {
    display: leftDisplay,
    flexDirection: 'column',
    ...(leftSize ? {'--col-width': leftSize} : {'--col-flex': 1}),
  };
  const rightStyle = {
    display: rightDisplay,
    flexDirection: 'column',
    ...(rightSize ? {'--col-width': rightSize} : {'--col-flex': 1}),
  };

  return <section
    id={id}
    className={cn('content-block-columns', {'dark-background': isDark, [`content-block-${flex}`]: flex})}
    data-analytics-nav={analytics}
    style={{backgroundColor,
      '--col-gap': gap,
      '--padding-multiplier': padding,
      '--padding-top-multiplier': paddingTop,
      '--padding-bottom-multiplier': paddingBottom
    } as React.CSSProperties}
  >
    <div className="columns-content">
      <div className="content-block-columns-left" style={leftStyle as React.CSSProperties}>
        <ContentBlocks data={data.value.leftContent} />
      </div>
      <div className="content-block-columns-right" style={rightStyle as React.CSSProperties}>
        <ContentBlocks data={data.value.rightContent} />
      </div>
    </div>
  </section>;
}
