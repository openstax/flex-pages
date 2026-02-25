import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cn from 'classnames';
import Color from 'color';
import { Link, linkFieldConfig } from '../components/Link';
import { findByType } from '../utils';
import { RichTextContent } from './RichTextBlock';
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
            { name: 'custom_color', label: 'Custom Color', type: 'text', pattern: '#[a-fA-F0-9]{6}', help: 'Hex color override. Overrides Style preset.' },
        ] },
];
export function CTALink({ link }) {
    var _a, _b;
    const stylePreset = (_a = findByType(link.config, 'style')) === null || _a === void 0 ? void 0 : _a.value;
    const customColor = (_b = findByType(link.config, 'custom_color')) === null || _b === void 0 ? void 0 : _b.value;
    const useCustom = Boolean(customColor);
    const customColorClass = useCustom
        ? Color(customColor).isDark() ? 'style-custom-dark' : 'style-custom-light' // eslint-disable-line new-cap
        : undefined;
    const styleClass = !useCustom && stylePreset ? `style-${stylePreset}` : undefined;
    const style = useCustom
        ? { '--cta-custom-color': customColor }
        : undefined;
    return _jsx(Link, { link: link, className: cn('cta-link', styleClass, customColorClass, (styleClass || customColorClass) ? 'styled-button' : undefined), style: style });
}
CTABlock.blockConfig = {
    type: 'cta_block',
    categories: ['content'],
    label: 'Call to Action',
    fields: [
        { name: 'description', label: 'Description', type: 'rich-text' },
        { name: 'actions', label: 'Actions', type: 'list', fields: ctaLinkFieldConfig },
        { name: 'config', label: 'Config', type: 'configs', configs: [
                { name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this section will include this label', type: 'text' },
                { name: 'layout', label: 'Layout', type: 'select', options: [
                        { label: 'Inline', value: 'inline' },
                    ] },
            ] },
    ],
};
export function CTABlock({ data }) {
    var _a, _b;
    const analytics = (_a = findByType(data.value.config, 'analytics_label')) === null || _a === void 0 ? void 0 : _a.value;
    const layout = (_b = findByType(data.value.config, 'layout')) === null || _b === void 0 ? void 0 : _b.value;
    return _jsxs("div", { className: cn('content-block-cta-block', layout === 'inline' ? 'layout-inline' : undefined), "data-analytics-nav": analytics, children: [data.value.description ? _jsx("div", { className: "cta-description", children: _jsx(RichTextContent, { html: data.value.description }) }) : null, _jsx("div", { className: "cta-actions", children: data.value.actions.map((action, i) => _jsx(CTALink, { link: action }, i)) })] });
}
