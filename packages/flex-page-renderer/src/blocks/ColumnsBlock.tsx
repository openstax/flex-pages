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

// eslint-disable-next-line complexity
export function ColumnsBlock({data}: {data: ColumnsBlockConfig}) {
  const id = findByType(data.value.config, 'id')?.value;
  const gap = findByType(data.value.config, 'gap')?.value;
  const leftSize = findByType(data.value.config, 'left_size')?.value;
  const rightSize = leftSize ? undefined : findByType(data.value.config, 'left_size')?.value;
  const backgroundColor = findByType(data.value.config, 'background_color')?.value;
  const padding = findByType(data.value.config, 'padding')?.value ?? 0;
  const paddingTop = findByType(data.value.config, 'padding_top')?.value;
  const paddingBottom = findByType(data.value.config, 'padding_bottom')?.value;
  const analytics = findByType(data.value.config, 'analytics_label')?.value;
  const isDark = backgroundColor && Color(backgroundColor).isDark(); // eslint-disable-line new-cap

  const leftStyle = leftSize ? {'--col-width': leftSize, marginRight: gap} : {flex: 1, marginRight: gap};
  const rightStyle = rightSize ? {'--col-width': rightSize} : {flex: 1};

  return <section
    id={id}
    className={cn('content-block-columns', {'dark-background': isDark})}
    data-analytics-nav={analytics}
    style={{backgroundColor,
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
