import { jsx as _jsx } from "react/jsx-runtime";
import cn from 'classnames';
import Color from 'color';
import { Link } from '../components/Link.js';
import { findByType } from '../utils.js';
import './LinksBlock.css';
export function LinksBlock({ data }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const analytics = (_a = findByType(data.value.config, 'analytics_label')) === null || _a === void 0 ? void 0 : _a.value;
    const linkStyle = (_c = (_b = findByType(data.value.config, 'style')) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : 'button';
    const color = (_e = (_d = findByType(data.value.config, 'color')) === null || _d === void 0 ? void 0 : _d.value) !== null && _e !== void 0 ? _e : 'white';
    const customColor = (_f = findByType(data.value.config, 'custom_color')) === null || _f === void 0 ? void 0 : _f.value;
    const size = (_h = (_g = findByType(data.value.config, 'size')) === null || _g === void 0 ? void 0 : _g.value) !== null && _h !== void 0 ? _h : 'large';
    const layout = (_k = (_j = findByType(data.value.config, 'layout')) === null || _j === void 0 ? void 0 : _j.value) !== null && _k !== void 0 ? _k : 'grid';
    const useCustom = Boolean(customColor);
    const customColorClass = useCustom
        ? Color(customColor).isDark() ? 'custom-color-dark' : 'custom-color-light'
        : undefined;
    const style = useCustom
        ? { '--link-bg-color': customColor }
        : undefined;
    return _jsx("div", { className: cn('content-block-links', `links-style-${linkStyle}`, !useCustom && `color-${color}`, customColorClass, `size-${size}`, `layout-${layout}`), style: style, "data-analytics-nav": analytics, children: data.value.links.map((action, i) => _jsx(Link, { link: action }, i)) });
}
