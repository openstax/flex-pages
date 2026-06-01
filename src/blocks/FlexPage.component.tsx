'use client';
import cn from 'classnames';
import React from 'react';
import './FlexPage.css';
import type { ContentBlockConfig } from '../ContentBlockContext';
import { findByType } from '../utils';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

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
}

export function FlexPage({data, content}: {data: FlexPageConfig; content?: React.ReactNode}) {
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
  useIsomorphicLayoutEffect(() => {
    const doResize = () => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const availableHeight = (document.documentElement.clientHeight - top) + 'px';

      if (height === 'fill-to-screen') { element.style.minHeight = availableHeight; }
      if (height === 'contain-to-screen') { element.style.maxHeight = availableHeight; }
      if (height === 'fit-to-screen') { element.style.height = availableHeight; }
    };

    doResize();

    window.addEventListener('resize', doResize);
    return () => window.removeEventListener('resize', doResize);
  }, [height]);

  return <div ref={ref} className={cn('flex-page', 'page', 'flex-structure-container', `width-${width}`)}>
    {content}
  </div>;
}
