import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Image, imageFieldsConfig } from '../components/Image';
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
    ],
};
export function QuoteBlock({ data }) {
    return _jsxs("div", { className: "content-block-quote", children: [_jsx(Image, { alt: "", image: data.value.image }), _jsx(RichTextContent, { html: data.value.content }), _jsxs("div", { className: "quotee", children: [_jsx("span", { className: "name", children: data.value.name }), data.value.title ? _jsx("span", { className: "title", children: data.value.title }) : null] })] });
}
