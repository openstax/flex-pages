"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentBlockRoot = ContentBlockRoot;
const jsx_runtime_1 = require("react/jsx-runtime");
const resolveContentBlocks_1 = require("./resolveContentBlocks");
__exportStar(require("./ContentBlockContext"), exports);
function ContentBlockRoot({ data, blocks }) {
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, resolveContentBlocks_1.resolveContentBlocks)(data, blocks) });
}
