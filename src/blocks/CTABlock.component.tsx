import cn from 'classnames';
import Color from 'color';
import React from 'react';
import { Link } from '../components/Link.js';
import { findByType } from '../utils.js';
import type { CTABlockConfig, CTALinkFields } from './CTABlock.config.js';
import { RichTextContent } from './RichTextBlock.component.js';
import './CTABlock.css';

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

export function CTABlock({data, activeConditions}: {data: CTABlockConfig; activeConditions?: string[]}) {
    const condition = findByType(data.value.config, 'rendering_condition')?.value;
    if (condition && !condition.split(',').some(c => activeConditions?.includes(c.trim()))) return null;

    const analytics = findByType(data.value.config, 'analytics_label')?.value;
    const layout = findByType(data.value.config, 'layout')?.value;

    return <div className={cn('content-block-cta-block', layout === 'inline' ? 'layout-inline' : undefined)} data-analytics-nav={analytics}>
        {data.value.description ? <div className="cta-description"><RichTextContent html={data.value.description} /></div> : null}
        <div className="cta-actions">
            {data.value.actions.map((action, i) => <CTALink key={i} link={action} />)}
        </div>
    </div>;
}
