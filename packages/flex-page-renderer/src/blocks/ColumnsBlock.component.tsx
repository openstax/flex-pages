import cn from 'classnames';
import React from 'react';
import type { ContentBlockConfig } from '../ContentBlockContext';
import { findByType, resolveBackground } from '../utils';
import './ColumnsBlock.css';

export type SectionConfigOptions = {
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
} | {
  type: 'stack_at';
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

const STACK_AT_DEFAULT = '60em';
// cspell:ignore cqmin cqmax -- CSS container query length units
const STACK_AT_PATTERN = /^\d+(\.\d+)?(px|em|rem|%|vw|vh|cqw|cqi|cqmin|cqmax|ch|ex)$/;

// eslint-disable-next-line complexity
export function ColumnsBlock({data, leftContent, rightContent}: {data: ColumnsBlockConfig; leftContent?: React.ReactNode; rightContent?: React.ReactNode}) {
  const id = findByType(data.value.config, 'id')?.value;
  const gap = findByType(data.value.config, 'gap')?.value ?? 0;
  const flex = findByType(data.value.config, 'flex')?.value;
  const leftSize = findByType(data.value.config, 'left_size')?.value;
  const rightSize = leftSize ? undefined : findByType(data.value.config, 'right_size')?.value;
  const backgroundColor = findByType(data.value.config, 'background_color')?.value;
  const gradientColor = findByType(data.value.config, 'gradient_color')?.value;
  const gradientDirection = findByType(data.value.config, 'gradient_direction')?.value;
  const padding = findByType(data.value.config, 'padding')?.value ?? 0;
  const paddingTop = findByType(data.value.config, 'padding_top')?.value;
  const paddingBottom = findByType(data.value.config, 'padding_bottom')?.value;
  const analytics = findByType(data.value.config, 'analytics_label')?.value;
  const stackAtRaw = findByType(data.value.config, 'stack_at')?.value;
  const stackAt = stackAtRaw && STACK_AT_PATTERN.test(stackAtRaw.trim()) ? stackAtRaw.trim() : STACK_AT_DEFAULT;
  const bg = resolveBackground(backgroundColor, gradientColor, gradientDirection);
  const scope = React.useId();

  const leftDisplay = data.value.leftContent.some(d => findByType(d.value.config, 'flex'))
    ? 'flex' : 'block';
  const rightDisplay = data.value.rightContent.some(d => findByType(d.value.config, 'flex'))
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

  const sel = `.flex-structure-container > section.content-block-columns[data-cols="${scope}"]`;
  const stackCSS = `@container flex-structure (max-width: ${stackAt}) {
    ${sel} { flex-shrink: 0; display: block }
    ${sel}.content-block-flex > div.columns-content,
    ${sel}.content-block-flex-shrink > div.columns-content { overflow-y: auto; height: unset; max-height: unset }
    ${sel} > div.columns-content { display: block; overflow: auto }
    ${sel} > div.columns-content .content-block-columns-left { margin-right: unset }
    ${sel} > div.columns-content .content-block-columns-left,
    ${sel} > div.columns-content .content-block-columns-right { flex: unset; max-width: unset }
  }`;

  return <section
    id={id}
    data-cols={scope}
    className={cn('content-block-columns', {'dark-background': bg.isDark, [`content-block-${flex}`]: flex})}
    data-analytics-nav={analytics}
    style={{background: bg.background, backgroundColor: bg.backgroundColor,
      '--col-gap': gap,
      '--padding-multiplier': padding,
      '--padding-top-multiplier': paddingTop,
      '--padding-bottom-multiplier': paddingBottom
    } as React.CSSProperties}
  >
    {/* `<style>` is a raw-text element: React escapes `>`/`"` in text children
        on the server but the browser keeps them literal, breaking hydration.
        Inject as raw HTML so server and client text content match. */}
    <style dangerouslySetInnerHTML={{__html: stackCSS}} />
    <div className="columns-content">
      <div className="content-block-columns-left" style={leftStyle as React.CSSProperties}>
        {leftContent}
      </div>
      <div className="content-block-columns-right" style={rightStyle as React.CSSProperties}>
        {rightContent}
      </div>
    </div>
  </section>;
}
