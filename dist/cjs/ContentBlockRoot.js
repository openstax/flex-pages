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
exports.ContentBlockRoot = exports.ContentBlockRootHoc = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ContentBlocks_1 = require("./ContentBlocks");
const ActionContext_1 = require("./ActionContext");
const ContentBlockContext_1 = require("./ContentBlockContext");
__exportStar(require("./ContentBlockContext"), exports);
__exportStar(require("./ActionContext"), exports);
__exportStar(require("./RouteContext"), exports);
const ContentBlockRootHoc = (ContentComponent) => ({ data, actions, blocks }) => {
    return (0, jsx_runtime_1.jsx)(ContentBlockContext_1.BlockContext.Provider, { value: blocks, children: (0, jsx_runtime_1.jsx)(ActionContext_1.ActionContext.Provider, { value: actions !== null && actions !== void 0 ? actions : {}, children: (0, jsx_runtime_1.jsx)(ContentComponent, { data: data }) }) });
};
exports.ContentBlockRootHoc = ContentBlockRootHoc;
exports.ContentBlockRoot = (0, exports.ContentBlockRootHoc)(ContentBlocks_1.ContentBlocks);
