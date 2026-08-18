import { jsx as _jsx } from "react/jsx-runtime";
import cn from 'classnames';
import { findByType, flexAlignClass, resolveBackground } from '../utils.js';
import './SectionBlock.css';
export function SectionBlock({ data, content, activeConditions }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    const condition = (_a = findByType(data.value.config, 'rendering_condition')) === null || _a === void 0 ? void 0 : _a.value;
    if (condition && !condition.split(',').some(c => activeConditions === null || activeConditions === void 0 ? void 0 : activeConditions.includes(c.trim())))
        return null;
    const id = (_b = findByType(data.value.config, 'id')) === null || _b === void 0 ? void 0 : _b.value;
    const textAlign = (_c = findByType(data.value.config, 'text_alignment')) === null || _c === void 0 ? void 0 : _c.value;
    const flex = (_d = findByType(data.value.config, 'flex')) === null || _d === void 0 ? void 0 : _d.value;
    const backgroundColor = (_e = findByType(data.value.config, 'background_color')) === null || _e === void 0 ? void 0 : _e.value;
    const gradientColor = (_f = findByType(data.value.config, 'gradient_color')) === null || _f === void 0 ? void 0 : _f.value;
    const gradientDirection = (_g = findByType(data.value.config, 'gradient_direction')) === null || _g === void 0 ? void 0 : _g.value;
    const padding = (_j = (_h = findByType(data.value.config, 'padding')) === null || _h === void 0 ? void 0 : _h.value) !== null && _j !== void 0 ? _j : 0;
    const paddingTop = (_k = findByType(data.value.config, 'padding_top')) === null || _k === void 0 ? void 0 : _k.value;
    const paddingBottom = (_l = findByType(data.value.config, 'padding_bottom')) === null || _l === void 0 ? void 0 : _l.value;
    const topBorderSize = (_m = findByType(data.value.config, 'top_border_size')) === null || _m === void 0 ? void 0 : _m.value;
    const topBorderColor = (_o = findByType(data.value.config, 'top_border_color')) === null || _o === void 0 ? void 0 : _o.value;
    const bottomBorderSize = (_p = findByType(data.value.config, 'bottom_border_size')) === null || _p === void 0 ? void 0 : _p.value;
    const bottomBorderColor = (_q = findByType(data.value.config, 'bottom_border_color')) === null || _q === void 0 ? void 0 : _q.value;
    const analytics = (_r = findByType(data.value.config, 'analytics_label')) === null || _r === void 0 ? void 0 : _r.value;
    const bg = resolveBackground(backgroundColor, gradientColor, gradientDirection);
    const display = data.value.content.some(d => findByType(d.value.config, 'flex'))
        ? 'flex' : 'block';
    return _jsx("section", { id: id, className: cn('content-block-section', { 'dark-background': bg.isDark, [`content-block-${flex}`]: flex }), "data-analytics-nav": analytics, style: { background: bg.background, backgroundColor: bg.backgroundColor,
            '--padding-multiplier': padding,
            '--padding-top-multiplier': paddingTop,
            '--padding-bottom-multiplier': paddingBottom,
            '--top-border-size': topBorderSize ? `${topBorderSize}px` : undefined,
            '--top-border-color': topBorderColor,
            '--bottom-border-size': bottomBorderSize ? `${bottomBorderSize}px` : undefined,
            '--bottom-border-color': bottomBorderColor
        }, children: _jsx("div", { className: cn('section-content', 'flex-content-container', flexAlignClass(textAlign)), style: { textAlign, display, flexDirection: 'column' }, children: content }) });
}
