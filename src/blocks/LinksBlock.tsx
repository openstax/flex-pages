import cn from 'classnames';
import { Link, linkFieldConfig, LinkFields } from '../components/Link';
import { findByType } from '../utils';
import './LinksBlock.css';

type LinksConfig = {
  type: 'color';
  value: string;
} | {
  type: 'layout';
  value: string;
} | {
  type: 'size';
  value: string;
} | {
  type: 'analytics_label';
  value: string;
};

export interface LinksBlockConfig {
  id: string;
  type: 'links_group';
  value: {
    links: LinkFields[];
    config: LinksConfig[];
  };
}

LinksBlock.blockConfig = {
  type: 'cta_block',
  categories: ['content'],
  label: 'Links',
  fields: [
    {name: 'links', label: 'Links', type: 'list', fields: linkFieldConfig},
    {name: 'config', label: 'Config', type: 'configs', configs: [
      {name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this section will include this label', type: 'text'},
      {name: 'color', label: 'Color', type: 'select', options: [
        {value: 'white', label: 'White'},
        {value: 'blue', label: 'Blue'},
        {value: 'deep-green', label: 'Deep Green'},
      ]},
      {name: 'size', label: 'Size', type: 'select', options: [
        {value: 'small', label: 'Small'},
        {value: 'large', label: 'Large'},
      ]},
      {name: 'layout', label: 'Layout', type: 'select', options: [
        {value: 'grid', label: 'Grid'},
        {value: 'inline', label: 'Inline'},
      ]},
    ]},
  ],
};

export function LinksBlock({data}: {data: LinksBlockConfig}) {
  const analytics = findByType(data.value.config, 'analytics_label')?.value;
  const color = findByType(data.value.config, 'color')?.value ?? 'white';
  const size = findByType(data.value.config, 'size')?.value ?? 'large';
  const layout = findByType(data.value.config, 'layout')?.value ?? 'grid';

  return <div
    className={cn('content-block-links', `color-${color}`, `size-${size}`, `layout-${layout}`)}
    data-analytics-nav={analytics}
  >
    {data.value.links.map((action, i) => <Link key={i} link={action} />)}
  </div>;
}
