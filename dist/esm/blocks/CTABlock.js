import { jsx as _jsx } from "react/jsx-runtime";
import cn from 'classnames';
import { Link, linkFieldConfig } from '../components/Link';
import { findByType } from '../utils';
import './CTABlock.css';
export const ctaLinkFieldConfig = [
    ...linkFieldConfig,
    { name: 'config', label: 'Config', type: 'configs', configs: [
            { name: 'style', label: 'Style', type: 'select', options: [
                    { label: 'Orange', value: 'orange' },
                    { label: 'White', value: 'white' },
                    { label: 'Blue Outline', value: 'blue_outline' },
                    { label: 'Deep Green Outline', value: 'deep_green_outline' },
                ] },
        ] },
];
export function CTALink({ link }) {
    var _a;
    const style = (_a = findByType(link.config, 'style')) === null || _a === void 0 ? void 0 : _a.value;
    const styleClass = style ? `style-${style}` : style;
    return _jsx(Link, { link: link, className: cn('cta-link', styleClass, styleClass ? 'styled-button' : undefined) });
}
CTABlock.blockConfig = {
    type: 'cta_block',
    categories: ['content'],
    label: 'Call to Action',
    fields: [
        { name: 'actions', label: 'Actions', type: 'list', fields: ctaLinkFieldConfig },
        { name: 'config', label: 'Config', type: 'configs', configs: [
                { name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this section will include this label', type: 'text' },
            ] },
    ],
};
export function CTABlock({ data }) {
    var _a;
    const analytics = (_a = findByType(data.value.config, 'analytics_label')) === null || _a === void 0 ? void 0 : _a.value;
    return _jsx("div", { className: "content-block-cta-block", "data-analytics-nav": analytics, children: data.value.actions.map((action, i) => _jsx(CTALink, { link: action }, i)) });
}
