"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLBlock = HTMLBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const Html_js_1 = require("../components/Html.js");
function HTMLBlock({ data }) {
    return (0, jsx_runtime_1.jsx)(Html_js_1.Html, { sanitize: false, block: true, html: data.value });
}
