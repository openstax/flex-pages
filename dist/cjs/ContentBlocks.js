"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentBlock = exports.ContentBlocks = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const ContentBlockContext_1 = require("./ContentBlockContext");
function ContentBlocks({ data }) {
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: data.map((block) => (0, jsx_runtime_1.jsx)(ContentBlock, { data: block }, block.id)) });
}
exports.ContentBlocks = ContentBlocks;
// eslint-disable-next-line complexity
function ContentBlock({ data }) {
    const Block = react_1.default.useContext(ContentBlockContext_1.BlockContext)[data.type];
    if (!Block)
        return (0, jsx_runtime_1.jsx)("pre", { children: JSON.stringify(data, null, 2) });
    return (0, jsx_runtime_1.jsx)(Block, { data: data });
}
exports.ContentBlock = ContentBlock;
