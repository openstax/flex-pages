"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLBlock = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Html_1 = require("../components/Html");
HTMLBlock.blockConfig = {
    type: 'html',
    categories: ['structure'],
    label: 'HTML',
    field: { name: 'html', label: 'HTML', help: 'Raw html to be embedded in the page', type: 'long-text' },
};
function HTMLBlock({ data }) {
    return (0, jsx_runtime_1.jsx)(Html_1.Html, { sanitize: false, block: true, html: data.value });
}
exports.HTMLBlock = HTMLBlock;
