import { jsx as _jsx } from "react/jsx-runtime";
import cn from 'classnames';
import { findByType, flexAlignClass, resolveBackground } from '../utils.js';
import './WellBlock.css';
export function WellBlock({ data, content }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    const id = (_a = findByType(data.value.config, 'id')) === null || _a === void 0 ? void 0 : _a.value;
    const backgroundColor = (_b = findByType(data.value.config, 'background_color')) === null || _b === void 0 ? void 0 : _b.value;
    const gradientColor = (_c = findByType(data.value.config, 'gradient_color')) === null || _c === void 0 ? void 0 : _c.value;
    const gradientDirection = (_d = findByType(data.value.config, 'gradient_direction')) === null || _d === void 0 ? void 0 : _d.value;
    const borderRadius = (_f = (_e = findByType(data.value.config, 'border_radius')) === null || _e === void 0 ? void 0 : _e.value) !== null && _f !== void 0 ? _f : 8;
    const padding = (_h = (_g = findByType(data.value.config, 'padding')) === null || _g === void 0 ? void 0 : _g.value) !== null && _h !== void 0 ? _h : 2;
    const margin = (_k = (_j = findByType(data.value.config, 'margin')) === null || _j === void 0 ? void 0 : _j.value) !== null && _k !== void 0 ? _k : 0;
    const width = (_l = findByType(data.value.config, 'width')) === null || _l === void 0 ? void 0 : _l.value;
    const textAlign = (_m = findByType(data.value.config, 'text_alignment')) === null || _m === void 0 ? void 0 : _m.value;
    const pullUp = (_o = findByType(data.value.config, 'pull_up')) === null || _o === void 0 ? void 0 : _o.value;
    const borderColor = (_p = findByType(data.value.config, 'border_color')) === null || _p === void 0 ? void 0 : _p.value;
    const borderSize = (_q = findByType(data.value.config, 'border_size')) === null || _q === void 0 ? void 0 : _q.value;
    const analytics = (_r = findByType(data.value.config, 'analytics_label')) === null || _r === void 0 ? void 0 : _r.value;
    const bg = resolveBackground(backgroundColor, gradientColor, gradientDirection);
    const isLight = (backgroundColor || gradientColor) && !bg.isDark;
    return _jsx("div", { id: id, className: cn('content-block-well', { 'dark-background': bg.isDark, 'light-background': isLight }), "data-analytics-nav": analytics, style: {
            '--padding-multiplier': padding,
            '--margin-multiplier': margin,
            ...(pullUp ? { marginTop: `-${pullUp}rem` } : {})
        }, children: _jsx("div", { className: cn('well-content', 'flex-content-container', flexAlignClass(textAlign)), style: {
                background: bg.background,
                backgroundColor: bg.backgroundColor,
                borderRadius: `${borderRadius}px`,
                textAlign,
                maxWidth: width,
                ...(borderColor ? { border: `${borderSize !== null && borderSize !== void 0 ? borderSize : 1}px solid ${borderColor}` } : {})
            }, children: content }) });
}
