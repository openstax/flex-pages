"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Html = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const sanitizeHtml_js_1 = require("../lib/sanitizeHtml.js");
const Html = (props) => {
    const html = props.sanitize === false
        ? props.html
        : (0, sanitizeHtml_js_1.sanitizeHTML)(props.html);
    const Tag = props.block ? 'div' : 'span';
    return (0, jsx_runtime_1.jsx)(Tag, { dangerouslySetInnerHTML: { __html: html }, className: props.className, id: props.id, hidden: props.hidden });
};
exports.Html = Html;
