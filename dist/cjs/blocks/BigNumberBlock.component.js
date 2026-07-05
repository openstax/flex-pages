"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigNumberBlock = BigNumberBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./BigNumberBlock.css");
function BigNumberBlock({ data }) {
    const { number, caption, color } = data.value;
    return (0, jsx_runtime_1.jsxs)("div", { className: "content-block-big-number", children: [(0, jsx_runtime_1.jsx)("span", { className: color ? `number text-${color}` : 'number', children: number }), caption ? (0, jsx_runtime_1.jsx)("span", { className: "caption", children: caption }) : null] });
}
