import cn from 'classnames';
import { Link, LinkFields, linkFieldConfig } from '../components/Link';
import { findByType } from '../utils';
import './LinksBlock.css';

type LinksConfig = {
  type: 'color';
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
  fields: [
    {name: 'links', type: 'list', fields: linkFieldConfig},
    {name: 'config', type: 'configs', configs: [
      {name: 'analytics_label', type: 'text'},
      {name: 'color', type: 'select', options: [
        {value: 'white', label: 'White'},
        {value: 'blue', label: 'Blue'},
        {value: 'deep-green', label: 'Deep Green'},
      ]},
    ]},
  ],
}

export function LinksBlock({data}: {data: LinksBlockConfig}) {
    const analytics = findByType(data.value.config, 'analytics_label')?.value;
    const color = findByType(data.value.config, 'color')?.value ?? 'white';
    const colorClass = `color-${color}`;

    return <div
        className={cn('content-block-links', colorClass)}
        data-analytics-nav={analytics}
    >
        {data.value.links.map((action, i) => <Link key={i} link={action} />)}
    </div>;
}
