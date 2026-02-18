import cn from 'classnames';
import Color from 'color';
import React from 'react';
import { Link, linkFieldConfig, LinkFields } from '../components/Link';
import { findByType } from '../utils';
import './CTABlock.css';

type CTALinkConfig = {
  type: 'style';
  value: 'string';
} | {
  type: 'custom_color';
  value: string;
};

export interface CTALinkFields extends LinkFields {
    config: CTALinkConfig[];
}

export const ctaLinkFieldConfig = [
  ...linkFieldConfig,
  {name: 'config', label: 'Config', type: 'configs', configs: [
    {name: 'style', label: 'Style', type: 'select', options: [
      {label: 'Orange', value: 'orange'},
      {label: 'White', value: 'white'},
      {label: 'Blue Outline', value: 'blue_outline'},
      {label: 'Deep Green Outline', value: 'deep_green_outline'},
    ]},
    {name: 'custom_color', label: 'Custom Color', type: 'text', pattern: '#[a-fA-F0-9]{6}', help: 'Hex color override. Overrides Style preset.'},
  ]},
];

export function CTALink({link}: {link: CTALinkFields}) {
    const stylePreset = findByType(link.config, 'style')?.value;
    const customColor = findByType(link.config, 'custom_color')?.value;

    const useCustom = Boolean(customColor);
    const customColorClass = useCustom
        ? Color(customColor).isDark() ? 'style-custom-dark' : 'style-custom-light' // eslint-disable-line new-cap
        : undefined;
    const styleClass = !useCustom && stylePreset ? `style-${stylePreset}` : undefined;
    const style = useCustom
        ? {'--cta-custom-color': customColor} as React.CSSProperties
        : undefined;

    return <Link
        link={link}
        className={cn('cta-link', styleClass, customColorClass, (styleClass || customColorClass) ? 'styled-button' : undefined)}
        style={style}
    />;
}

type CTAConfig = {
  type: 'analytics_label';
  value: string;
};

export interface CTABlockConfig {
    id: string;
    type: 'cta_block';
    value: {
        actions: CTALinkFields[];
        config: CTAConfig[];
    };
}

CTABlock.blockConfig = {
  type: 'cta_block',
  categories: ['content'],
  label: 'Call to Action',
  fields: [
    {name: 'actions', label: 'Actions', type: 'list', fields: ctaLinkFieldConfig},
    {name: 'config', label: 'Config', type: 'configs', configs: [
      {name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this section will include this label', type: 'text'},
    ]},
  ],
};

export function CTABlock({data}: {data: CTABlockConfig}) {
    const analytics = findByType(data.value.config, 'analytics_label')?.value;

    return <div className="content-block-cta-block" data-analytics-nav={analytics}>
        {data.value.actions.map((action, i) => <CTALink key={i} link={action} />)}
    </div>;
}
