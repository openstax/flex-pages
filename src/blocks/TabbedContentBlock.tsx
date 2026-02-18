import cn from 'classnames';
import React from 'react';
import { ContentBlockConfig, ContentBlocks } from '../ContentBlocks';
import { findByType, resolveBackground } from '../utils';
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

TabbedContentBlock.blockConfig = {
  type: 'tabbed_content',
  label: 'Tabbed Content',
  categories: ['structure'],
  fields: [
    {name: 'tabs', label: 'Tabs', type: 'list', fields: [
      {name: 'label', label: 'Tab Label', type: 'text', required: true},
      {name: 'content', label: 'Tab Content', type: 'blocks', categories: ['structure']},
    ]},
    {name: 'config', label: 'Config', type: 'configs', configs: [
      {name: 'tab_alignment', label: 'Tab Alignment', type: 'select', options: [
        {label: 'Left', value: 'left'},
        {label: 'Center', value: 'center'},
        {label: 'Right', value: 'right'},
      ]},
      {name: 'active_color', label: 'Active Tab Color', type: 'text', pattern: '#[a-fA-F0-9]{6}',
        help: 'Hex color for the active tab underline'},
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
      {name: 'default_tab', label: 'Default Tab', type: 'number',
        help: 'Zero-based index of the tab to show by default'},
      {name: 'analytics_label', label: 'Analytics Label',
        help: 'Analytics events from within this block will include this label', type: 'text'},
      {name: 'id', label: 'ID',
        help: 'The HTML id of the tabbed content block (can be referenced by anchor links).', type: 'text'},
    ]},
  ],
};

export function TabbedContentBlock({data}: {data: TabbedContentBlockConfig}) {
  const tabs = data.value.tabs;
  const id = findByType(data.value.config, 'id')?.value;
  const alignment = findByType(data.value.config, 'tab_alignment')?.value;
  const activeColor = findByType(data.value.config, 'active_color')?.value;
  const backgroundColor = findByType(data.value.config, 'background_color')?.value;
  const gradientColor = findByType(data.value.config, 'gradient_color')?.value;
  const gradientDirection = findByType(data.value.config, 'gradient_direction')?.value;
  const analytics = findByType(data.value.config, 'analytics_label')?.value;
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
    className={cn('content-block-tabbed-content', alignment && `tab-align-${alignment}`, {'dark-background': bg.isDark})}
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
        <ContentBlocks data={tab.content} />
      </div>)}
    </div>
  </div>;
}
