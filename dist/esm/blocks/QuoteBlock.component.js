import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cn from 'classnames';
import { Image } from '../components/Image.js';
import { findByType } from '../utils.js';
import { RichTextContent } from './RichTextBlock.component.js';
import './QuoteBlock.css';
export function QuoteBlock({ data }) {
    var _a, _b, _c;
    const accentColor = (_a = findByType(data.value.config, 'accent_color')) === null || _a === void 0 ? void 0 : _a.value;
    const layout = (_c = (_b = findByType(data.value.config, 'layout')) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : 'image-left';
    const image = data.value.image;
    const hasImage = Boolean(image === null || image === void 0 ? void 0 : image.file);
    const style = accentColor
        ? { '--quote-accent-color': accentColor }
        : undefined;
    return _jsxs("div", { className: cn('content-block-quote', `quote-layout-${layout}`, { 'no-image': !hasImage }), style: style, children: [hasImage ? _jsx(Image, { alt: "", image: image }) : null, _jsxs("div", { className: "quote-body", children: [_jsx(RichTextContent, { html: data.value.content }), _jsxs("div", { className: "quotee", children: [_jsx("span", { className: "name", children: data.value.name }), data.value.title ? _jsx("span", { className: "title", children: data.value.title }) : null] })] })] });
}
