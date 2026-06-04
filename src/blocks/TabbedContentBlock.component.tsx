'use client';
import cn from 'classnames';
import React from 'react';
import type { ContentBlockConfig } from '../ContentBlockContext.js';
import { findByType, resolveBackground } from '../utils.js';
import './TabbedContentBlock.css';

type TabbedContentConfigOptions = {
  type: 'tab_alignment';
  value: 'left' | 'center' | 'right';
} | {
  type: 'active_color';
  value: string;
} | {
  type: 'background_color';
  value: string;
} | {
  type: 'gradient_color';
  value: string;
} | {
  type: 'gradient_direction';
  value: string;
} | {
  type: 'analytics_label';
  value: string;
} | {
  type: 'id';
  value: string;
} | {
  type: 'default_tab';
  value: string;
} | {
  type: 'border_width';
  value: 'content' | 'full';
};

type TabItemConfig = {
  label: string;
  content: ContentBlockConfig[];
};

export interface TabbedContentBlockConfig {
  id: string;
  type: 'tabbed_content';
  value: {
    tabs: TabItemConfig[];
    config: TabbedContentConfigOptions[];
  };
}

export function TabbedContentBlock({data, tabs: resolvedTabs}: {data: TabbedContentBlockConfig; tabs?: Array<{label: string; content: React.ReactNode}>}) {
  const tabs = resolvedTabs ?? data.value.tabs as unknown as Array<{label: string; content: React.ReactNode}>;
  const id = findByType(data.value.config, 'id')?.value;
  const alignment = findByType(data.value.config, 'tab_alignment')?.value;
  const activeColor = findByType(data.value.config, 'active_color')?.value;
  const backgroundColor = findByType(data.value.config, 'background_color')?.value;
  const gradientColor = findByType(data.value.config, 'gradient_color')?.value;
  const gradientDirection = findByType(data.value.config, 'gradient_direction')?.value;
  const analytics = findByType(data.value.config, 'analytics_label')?.value;
  const borderWidth = findByType(data.value.config, 'border_width')?.value;
  const bg = resolveBackground(backgroundColor, gradientColor, gradientDirection);
  const defaultTabRaw = findByType(data.value.config, 'default_tab')?.value;
  const defaultTab = defaultTabRaw
    ? Math.max(0, Math.min(Number(defaultTabRaw), tabs.length - 1))
    : 0;

  const [activeIndex, setActiveIndex] = React.useState(defaultTab);
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = `tabbed-${data.id}`;

  if (!tabs.length) return null;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    let nextIndex: number | undefined;

    switch (e.key) {
      case 'ArrowRight':
        nextIndex = (activeIndex + 1) % tabs.length;
        break;
      case 'ArrowLeft':
        nextIndex = (activeIndex - 1 + tabs.length) % tabs.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    e.preventDefault();
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return <div
    id={id}
    className={cn('content-block-tabbed-content', alignment && `tab-align-${alignment}`, borderWidth === 'full' && 'border-full-width', {'dark-background': bg.isDark})}
    data-analytics-nav={analytics}
    style={{
      background: bg.background, backgroundColor: bg.backgroundColor,
      ...(activeColor ? {'--tab-active-color': activeColor} : {}),
    } as React.CSSProperties}
  >
    <div className="tab-list-container">
      <div className="tab-list" role="tablist" onKeyDown={handleKeyDown}>
        {tabs.map((tab, i) => <button
          key={i}
          ref={(el) => { tabRefs.current[i] = el; }}
          role="tab"
          id={`${baseId}-tab-${i}`}
          aria-selected={i === activeIndex}
          aria-controls={`${baseId}-panel-${i}`}
          tabIndex={i === activeIndex ? 0 : -1}
          className={cn('tab-button', {active: i === activeIndex})}
          data-label={tab.label}
          onClick={() => setActiveIndex(i)}
        >
          {tab.label}
        </button>)}
      </div>
    </div>
    <div className="tab-panels">
      {tabs.map((tab, i) => <div
        key={i}
        role="tabpanel"
        id={`${baseId}-panel-${i}`}
        aria-labelledby={`${baseId}-tab-${i}`}
        aria-hidden={i !== activeIndex}
        tabIndex={i === activeIndex ? 0 : -1}
        className={cn('tab-panel', 'flex-structure-container', {active: i === activeIndex})}
      >
        {tab.content}
      </div>)}
    </div>
  </div>;
}
