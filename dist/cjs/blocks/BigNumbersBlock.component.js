"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigNumbersBlock = BigNumbersBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./BigNumbersBlock.css");
// A container that lays out its Big Number children in a wrapping row (an
// impact-stats band). Children are resolved upstream and passed as `content`,
// matching how Well/Section render their nested blocks; the row layout lives
// in BigNumbersBlock.scss.
function BigNumbersBlock({ content }) {
    return (0, jsx_runtime_1.jsx)("div", { className: "content-block-big-numbers", children: content });
}
