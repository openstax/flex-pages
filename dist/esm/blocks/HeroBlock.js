import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import cn from 'classnames';
import { Image, imageFieldsConfig } from '../components/Image';
import { findByType, resolveBackground } from '../utils';
import './HeroBlock.css';
HeroBlock.blockConfig = {
    type: 'hero',
    categories: ['structure'],
    label: 'Hero',
    fields: [
        { name: 'content', label: 'Content', type: 'blocks', categories: ['content'] },
        { name: 'imageAlt', label: 'Image Alt', type: 'text' },
        { name: 'image', label: 'Hero Image', type: 'namespace', fields: imageFieldsConfig },
        { name: 'config', label: 'Config', type: 'configs', configs: [
                { name: 'image_alignment', label: 'Image Alignment', type: 'select', options: [
                        { label: 'Left', value: 'left' },
                        { label: 'Top Left', value: 'top_left' },
                        { label: 'Bottom Left', value: 'bottom_left' },
                        { label: 'Right', value: 'right' },
                        { label: 'Top Right', value: 'top_right' },
                        { label: 'Bottom Right', value: 'bottom_right' },
                    ] },
                { name: 'text_alignment', label: 'Text Alignment', type: 'select', options: [
                        { label: 'Left', value: 'left' },
                        { label: 'Right', value: 'right' },
                        { label: 'Center', value: 'center' },
                    ] },
                { name: 'background_color', label: 'Background Color', type: 'text', pattern: '#[a-fA-Z0-9]{6}' },
                { name: 'gradient_color', label: 'Gradient To Color', type: 'text', pattern: '#[a-fA-Z0-9]{6}',
                    help: 'Second color for gradient effect. Background Color is the starting color.' },
                { name: 'gradient_direction', label: 'Gradient Direction', type: 'select', options: [
                        { label: 'Top to Bottom', value: 'to bottom' },
                        { label: 'Bottom to Top', value: 'to top' },
                        { label: 'Left to Right', value: 'to right' },
                        { label: 'Right to Left', value: 'to left' },
                        { label: 'Top-Left to Bottom-Right', value: 'to bottom right' },
                        { label: 'Top-Right to Bottom-Left', value: 'to bottom left' },
                        { label: 'Bottom-Left to Top-Right', value: 'to top right' },
                        { label: 'Bottom-Right to Top-Left', value: 'to top left' },
                    ] },
                { name: 'padding', label: 'Padding', help: 'Top and Bottom padding, in 10px increments', type: 'number' },
                { name: 'padding_top', label: 'Padding Top', help: 'Top padding, in 10px increments', type: 'number' },
                { name: 'padding_bottom', label: 'Padding Bottom', help: 'Bottom padding, in 10px increments', type: 'number' },
                { name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this section will include this label', type: 'text' },
                { name: 'id', label: 'ID', help: 'The HTML id of the section (can be referenced by anchor links).', type: 'text' },
                { name: 'image_border_radius', label: 'Image Border Radius', type: 'number',
                    help: 'Border radius for the hero image in pixels' },
                { name: 'image_border_color', label: 'Image Border Color', type: 'text', pattern: '#[a-fA-F0-9]{6}',
                    help: 'Hex color for the hero image border' },
                { name: 'image_border_size', label: 'Image Border Size', type: 'number',
                    help: 'Border width for the hero image in pixels' },
            ] },
    ],
};
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
export function HeroBlock({ data, content }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    const id = (_a = findByType(data.value.config, 'id')) === null || _a === void 0 ? void 0 : _a.value;
    const textAlign = (_b = findByType(data.value.config, 'text_alignment')) === null || _b === void 0 ? void 0 : _b.value;
    const backgroundColor = (_c = findByType(data.value.config, 'background_color')) === null || _c === void 0 ? void 0 : _c.value;
    const gradientColor = (_d = findByType(data.value.config, 'gradient_color')) === null || _d === void 0 ? void 0 : _d.value;
    const gradientDirection = (_e = findByType(data.value.config, 'gradient_direction')) === null || _e === void 0 ? void 0 : _e.value;
    const padding = (_g = (_f = findByType(data.value.config, 'padding')) === null || _f === void 0 ? void 0 : _f.value) !== null && _g !== void 0 ? _g : 0;
    const paddingTop = (_h = findByType(data.value.config, 'padding_top')) === null || _h === void 0 ? void 0 : _h.value;
    const paddingBottom = (_j = findByType(data.value.config, 'padding_bottom')) === null || _j === void 0 ? void 0 : _j.value;
    const imageBorderRadius = (_k = findByType(data.value.config, 'image_border_radius')) === null || _k === void 0 ? void 0 : _k.value;
    const imageBorderColor = (_l = findByType(data.value.config, 'image_border_color')) === null || _l === void 0 ? void 0 : _l.value;
    const imageBorderSize = (_m = findByType(data.value.config, 'image_border_size')) === null || _m === void 0 ? void 0 : _m.value;
    const analytics = (_o = findByType(data.value.config, 'analytics_label')) === null || _o === void 0 ? void 0 : _o.value;
    const bg = resolveBackground(backgroundColor, gradientColor, gradientDirection);
    const alignment = (_q = (_p = findByType(data.value.config, 'image_alignment')) === null || _p === void 0 ? void 0 : _p.value.toLowerCase()) !== null && _q !== void 0 ? _q : 'right';
    const imageRight = alignment.includes('right');
    const imageVerticalAlign = parseAlignment(alignment);
    return _jsx("section", { id: id, className: cn('content-block-hero', { 'dark-background': bg.isDark }), "data-analytics-nav": analytics, style: { background: bg.background, backgroundColor: bg.backgroundColor,
            '--padding-multiplier': padding,
            '--padding-top-multiplier': paddingTop,
            '--padding-bottom-multiplier': paddingBottom,
            '--image-vertical-align': imageVerticalAlign,
            '--image-border-radius': imageBorderRadius ? `${imageBorderRadius}px` : undefined,
            '--image-border-color': imageBorderColor,
            '--image-border-size': imageBorderSize ? `${imageBorderSize}px` : undefined
        }, children: _jsx("div", { className: "hero-inner-wrapper", children: imageRight ? _jsxs(_Fragment, { children: [_jsx("div", { className: "hero-content", style: { textAlign }, children: content }), _jsx("div", { className: "hero-image-container", children: _jsx(Image, { className: "hero-image", image: data.value.image, alt: data.value.imageAlt }) })] }) : _jsxs(_Fragment, { children: [_jsx("div", { className: "hero-image-container", children: _jsx(Image, { className: "hero-image", image: data.value.image, alt: data.value.imageAlt }) }), _jsx("div", { className: "hero-content", style: { textAlign }, children: content })] }) }) });
}
