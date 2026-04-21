import { jsx as _jsx } from "react/jsx-runtime";
import { Html } from '../components/Html';
import './RichTextBlock.css';
RichTextBlock.blockConfig = {
    type: 'text',
    categories: ['content'],
    label: 'Text',
    field: { name: 'text', label: 'Text', type: 'rich-text' },
};
export function RichTextContent({ html }) {
    return _jsx(Html, { block: true, className: 'content-block-rich-text', html: html });
}
export function RichTextBlock({ data }) {
    return _jsx(RichTextContent, { html: data.value });
}
