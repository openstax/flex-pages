import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import cn from 'classnames';
import { Image } from '../components/Image.js';
import { findByType, flexAlignClass, resolveBackground } from '../utils.js';
import './HeroBlock.css';
const parseAlignment = (alignment) => {
    if (alignment.includes('top')) {
        return 'flex-start';
    }
    if (alignment.includes('bottom')) {
        return 'flex-end';
    }
    return 'center';
};
// eslint-disable-next-line complexity
export function HeroBlock({ data, content, activeConditions }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
    const condition = (_a = findByType(data.value.config, 'rendering_condition')) === null || _a === void 0 ? void 0 : _a.value;
    if (condition && !condition.split(',').some(c => activeConditions === null || activeConditions === void 0 ? void 0 : activeConditions.includes(c.trim())))
        return null;
    const id = (_b = findByType(data.value.config, 'id')) === null || _b === void 0 ? void 0 : _b.value;
    const textAlign = (_c = findByType(data.value.config, 'text_alignment')) === null || _c === void 0 ? void 0 : _c.value;
    const backgroundColor = (_d = findByType(data.value.config, 'background_color')) === null || _d === void 0 ? void 0 : _d.value;
    const gradientColor = (_e = findByType(data.value.config, 'gradient_color')) === null || _e === void 0 ? void 0 : _e.value;
    const gradientDirection = (_f = findByType(data.value.config, 'gradient_direction')) === null || _f === void 0 ? void 0 : _f.value;
    const padding = (_h = (_g = findByType(data.value.config, 'padding')) === null || _g === void 0 ? void 0 : _g.value) !== null && _h !== void 0 ? _h : 0;
    const paddingTop = (_j = findByType(data.value.config, 'padding_top')) === null || _j === void 0 ? void 0 : _j.value;
    const paddingBottom = (_k = findByType(data.value.config, 'padding_bottom')) === null || _k === void 0 ? void 0 : _k.value;
    const imageBorderRadius = (_l = findByType(data.value.config, 'image_border_radius')) === null || _l === void 0 ? void 0 : _l.value;
    const imageBorderColor = (_m = findByType(data.value.config, 'image_border_color')) === null || _m === void 0 ? void 0 : _m.value;
    const imageBorderSize = (_o = findByType(data.value.config, 'image_border_size')) === null || _o === void 0 ? void 0 : _o.value;
    const imageOverhang = (_p = findByType(data.value.config, 'image_overhang')) === null || _p === void 0 ? void 0 : _p.value;
    const analytics = (_q = findByType(data.value.config, 'analytics_label')) === null || _q === void 0 ? void 0 : _q.value;
    const bg = resolveBackground(backgroundColor, gradientColor, gradientDirection);
    const alignment = (_s = (_r = findByType(data.value.config, 'image_alignment')) === null || _r === void 0 ? void 0 : _r.value.toLowerCase()) !== null && _s !== void 0 ? _s : 'right';
    const imageRight = alignment.includes('right');
    const imageVerticalAlign = parseAlignment(alignment);
    return _jsx("section", { id: id, className: cn('content-block-hero', { 'dark-background': bg.isDark }), "data-analytics-nav": analytics, style: { background: bg.background, backgroundColor: bg.backgroundColor,
            '--padding-multiplier': padding,
            '--padding-top-multiplier': paddingTop,
            '--padding-bottom-multiplier': paddingBottom,
            '--image-vertical-align': imageVerticalAlign,
            '--image-border-radius': imageBorderRadius ? `${imageBorderRadius}px` : undefined,
            '--image-border-color': imageBorderColor,
            '--image-border-size': imageBorderSize ? `${imageBorderSize}px` : undefined,
            '--image-overhang': imageOverhang || undefined
        }, children: _jsx("div", { className: cn('hero-inner-wrapper', { 'image-left': !imageRight }), children: imageRight ? _jsxs(_Fragment, { children: [_jsx("div", { className: cn('hero-content', 'flex-content-container', flexAlignClass(textAlign)), style: { textAlign }, children: content }), _jsx("div", { className: "hero-image-container", children: _jsx(Image, { className: "hero-image", image: data.value.image, alt: data.value.imageAlt }) })] }) : _jsxs(_Fragment, { children: [_jsx("div", { className: "hero-image-container", children: _jsx(Image, { className: "hero-image", image: data.value.image, alt: data.value.imageAlt }) }), _jsx("div", { className: cn('hero-content', 'flex-content-container', flexAlignClass(textAlign)), style: { textAlign }, children: content })] }) }) });
}
