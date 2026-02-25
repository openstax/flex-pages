import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Image, imageFieldsConfig } from '../components/Image';
import { findByType } from '../utils';
import { RichTextContent } from './RichTextBlock';
import './QuoteBlock.css';
QuoteBlock.blockConfig = {
    type: 'quote',
    categories: ['content'],
    label: 'Quote',
    fields: [
        { name: 'content', label: 'Quote Text', type: 'long-text', required: true },
        { name: 'title', label: 'Quotee\'s title', type: 'text' },
        { name: 'name', label: 'Quotee\'s name', type: 'text', required: true },
        { name: 'image', label: 'Image', type: 'namespace', fields: imageFieldsConfig },
        { name: 'config', label: 'Config', type: 'configs', configs: [
                { name: 'accent_color', label: 'Accent Color', type: 'text', pattern: '#[a-fA-F0-9]{6}', help: 'Hex color for the quote mark' },
            ] },
    ],
};
export function QuoteBlock({ data }) {
    var _a;
    const accentColor = (_a = findByType(data.value.config, 'accent_color')) === null || _a === void 0 ? void 0 : _a.value;
    const style = accentColor
        ? { '--quote-accent-color': accentColor }
        : undefined;
    return _jsxs("div", { className: "content-block-quote", style: style, children: [_jsx(Image, { alt: "", image: data.value.image }), _jsx(RichTextContent, { html: data.value.content }), _jsxs("div", { className: "quotee", children: [_jsx("span", { className: "name", children: data.value.name }), data.value.title ? _jsx("span", { className: "title", children: data.value.title }) : null] })] });
}
