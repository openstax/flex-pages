import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import cn from 'classnames';
import Color from 'color';
import { ContentBlocks } from '../ContentBlocks';
import { Image, imageFieldsConfig } from '../components/Image';
import { findByType } from '../utils';
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
                { name: 'padding', label: 'Padding', help: 'Top and Bottom padding, in 10px increments', type: 'number' },
                { name: 'padding_top', label: 'Padding Top', help: 'Top padding, in 10px increments', type: 'number' },
                { name: 'padding_bottom', label: 'Padding Bottom', help: 'Bottom padding, in 10px increments', type: 'number' },
                { name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this section will include this label', type: 'text' },
                { name: 'id', label: 'ID', help: 'The HTML id of the section (can be referenced by anchor links).', type: 'text' },
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
export function HeroBlock({ data }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const id = (_a = findByType(data.value.config, 'id')) === null || _a === void 0 ? void 0 : _a.value;
    const textAlign = (_b = findByType(data.value.config, 'text_alignment')) === null || _b === void 0 ? void 0 : _b.value;
    const backgroundColor = (_c = findByType(data.value.config, 'background_color')) === null || _c === void 0 ? void 0 : _c.value;
    const padding = (_e = (_d = findByType(data.value.config, 'padding')) === null || _d === void 0 ? void 0 : _d.value) !== null && _e !== void 0 ? _e : 0;
    const paddingTop = (_f = findByType(data.value.config, 'padding_top')) === null || _f === void 0 ? void 0 : _f.value;
    const paddingBottom = (_g = findByType(data.value.config, 'padding_bottom')) === null || _g === void 0 ? void 0 : _g.value;
    const analytics = (_h = findByType(data.value.config, 'analytics_label')) === null || _h === void 0 ? void 0 : _h.value;
    const isDark = backgroundColor && Color(backgroundColor).isDark(); // eslint-disable-line new-cap
    const alignment = (_k = (_j = findByType(data.value.config, 'image_alignment')) === null || _j === void 0 ? void 0 : _j.value.toLowerCase()) !== null && _k !== void 0 ? _k : 'right';
    const imageRight = alignment.includes('right');
    const imageVerticalAlign = parseAlignment(alignment);
    return _jsx("section", { id: id, className: cn('content-block-hero', { 'dark-background': isDark }), "data-analytics-nav": analytics, style: { backgroundColor,
            '--padding-multiplier': padding,
            '--padding-top-multiplier': paddingTop,
            '--padding-bottom-multiplier': paddingBottom,
            '--image-vertical-align': imageVerticalAlign
        }, children: _jsx("div", { className: "hero-inner-wrapper", children: imageRight ? _jsxs(_Fragment, { children: [_jsx("div", { className: "hero-content", style: { textAlign }, children: _jsx(ContentBlocks, { data: data.value.content }) }), _jsx("div", { className: "hero-image-container", children: _jsx(Image, { className: "hero-image", image: data.value.image, alt: data.value.imageAlt }) })] }) : _jsxs(_Fragment, { children: [_jsx("div", { className: "hero-image-container", children: _jsx(Image, { className: "hero-image", image: data.value.image, alt: data.value.imageAlt }) }), _jsx("div", { className: "hero-content", style: { textAlign }, children: _jsx(ContentBlocks, { data: data.value.content }) })] }) }) });
}
