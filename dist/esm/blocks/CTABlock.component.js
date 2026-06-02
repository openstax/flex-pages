import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cn from 'classnames';
import Color from 'color';
import { Link } from '../components/Link';
import { findByType } from '../utils';
import { RichTextContent } from './RichTextBlock.component';
import './CTABlock.css';
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
export function CTABlock({ data, activeConditions }) {
    var _a, _b, _c;
    const condition = (_a = findByType(data.value.config, 'rendering_condition')) === null || _a === void 0 ? void 0 : _a.value;
    if (condition && !condition.split(',').some(c => activeConditions === null || activeConditions === void 0 ? void 0 : activeConditions.includes(c.trim())))
        return null;
    const analytics = (_b = findByType(data.value.config, 'analytics_label')) === null || _b === void 0 ? void 0 : _b.value;
    const layout = (_c = findByType(data.value.config, 'layout')) === null || _c === void 0 ? void 0 : _c.value;
    return _jsxs("div", { className: cn('content-block-cta-block', layout === 'inline' ? 'layout-inline' : undefined), "data-analytics-nav": analytics, children: [data.value.description ? _jsx("div", { className: "cta-description", children: _jsx(RichTextContent, { html: data.value.description }) }) : null, _jsx("div", { className: "cta-actions", children: data.value.actions.map((action, i) => _jsx(CTALink, { link: action }, i)) })] });
}
