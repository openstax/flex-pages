import { jsx as _jsx } from "react/jsx-runtime";
import { Html } from '../components/Html';
HTMLBlock.blockConfig = {
    type: 'html',
    categories: ['structure', 'content'],
    label: 'HTML',
    field: { name: 'html', label: 'HTML', help: 'Raw html to be embedded in the page', type: 'long-text' },
};
export function HTMLBlock({ data }) {
    return _jsx(Html, { sanitize: false, block: true, html: data.value });
}
