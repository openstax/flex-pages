import React from 'react';
import "./FlexPage.css";
import { findByType } from '../utils';
import cn from 'classnames';
import { ContentBlockConfig, ContentBlocks } from '../ContentBlocks';

export type FlexPageConfigOptions = {
  type: 'height';
  value: string;
} | {
  type: 'width';
  value: string;
};

export interface FlexPageConfig {
  id: string;
  type: 'flex_page';
  value: {
    content: ContentBlockConfig[];
    config: FlexPageConfigOptions[];
  };
};

FlexPage.blockConfig = {
  type: 'flex_page',
  categories: ['page'],
  label: 'Page',
  fields: [
    {name: 'content', label: 'Page Content', type: 'blocks', categories: ['structure']},
    {name: 'config', label: 'Config', type: 'configs', configs: [
      {name: 'width', label: 'Width', type: 'select', options: [
        {label: 'Fixed', value: 'fixed'},
        {label: 'Full Width', value: 'full'},
      ]},
      {name: 'height', label: 'Height', type: 'select', options: [
        /*
         * may want to add additional options here that allow to reserve space on screen for following content
         */
        {label: 'Expand to fill screen (short content expands to screen, longer content scrolls page normally)', value: 'fill-to-screen'},
        {label: 'Shrink to contain to screen (short content appears normally, longer content shrinks to fit page)', value: 'contain-to-screen'},
        {label: 'Expand & Shrink (bottom of content always aligns to screen edge)', value: 'fit-to-screen'},
      ]},
    ]},
  ],
};

export function FlexPage({data}: {data: FlexPageConfig}) {
  const height = findByType(data.value.config, 'height')?.value;
  const width = findByType(data.value.config, 'width')?.value ?? 'fixed';
  const ref = React.useRef<HTMLDivElement>(null);

  /*
   * the parent styles need to be different for flex-shrink
   * and flex-grow to both work correctly, and we don't want
   * to be modifying those, so we do the resize in JS. this
   * has the advantage of being able to have a site footer
   * that gets pushed down by the page content (like rex)
   */
  React.useLayoutEffect(() => {
    const doResize = () => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const availableHeight = (document.documentElement.clientHeight - top) + 'px';

      if (height === 'fill-to-screen') { element.style.minHeight = availableHeight; }
      if (height === 'contain-to-screen') { element.style.maxHeight = availableHeight; }
      if (height === 'fit-to-screen') { element.style.height = availableHeight; }
    }

    doResize();

    window.addEventListener('resize', doResize);
    return () => window.removeEventListener('resize', doResize);
  }, [height]);

  return <div ref={ref} className={cn('flex-page', 'page', `width-${width}`)}>
    <ContentBlocks data={data.value.content} />
  </div>
};
