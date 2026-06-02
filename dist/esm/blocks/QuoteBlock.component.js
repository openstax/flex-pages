import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Image } from '../components/Image';
import { findByType } from '../utils';
import { RichTextContent } from './RichTextBlock.component';
import './QuoteBlock.css';
export function QuoteBlock({ data }) {
    var _a;
    const accentColor = (_a = findByType(data.value.config, 'accent_color')) === null || _a === void 0 ? void 0 : _a.value;
    const style = accentColor
        ? { '--quote-accent-color': accentColor }
        : undefined;
    return _jsxs("div", { className: "content-block-quote", style: style, children: [_jsx(Image, { alt: "", image: data.value.image }), _jsx(RichTextContent, { html: data.value.content }), _jsxs("div", { className: "quotee", children: [_jsx("span", { className: "name", children: data.value.name }), data.value.title ? _jsx("span", { className: "title", children: data.value.title }) : null] })] });
}
