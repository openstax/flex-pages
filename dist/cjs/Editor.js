"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexBlockEditor = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const FlexPageContextProvider_1 = require("@openstax/flex-page-renderer/FlexPageContextProvider");
const react_1 = __importDefault(require("react"));
const BlockContext_1 = require("./BlockContext");
const EditorFields_1 = require("./EditorFields");
const FormsContext_1 = require("./FormsContext");
/*
 * there is some kind of bug (in webpack?) where ui-components is being bundled
 * multiple times, and if that happens it becomes necessary to pass the Forms library
 * through here or the Context variables will not be shared
 *
 * possibly related to:
 * - https://github.com/webpack/webpack/issues/8886
 * - https://github.com/webpack/webpack/issues/985
 *
 * if the issue is related to symlinks, its possible that it would work correctly
 * sometimes, but i haven't seen it work yet after trying several configurations.
 */
const FlexBlockEditor = ({ name, label, blocks, actions, routes, fields, type, Forms }) => {
    const editorType = type !== null && type !== void 0 ? type : 'flex_page';
    const { block: Block } = react_1.default.useContext(EditorFields_1.EditorFieldTypeContext);
    const inner = (0, jsx_runtime_1.jsx)(BlockContext_1.BlockContext.Provider, { value: blocks, children: (0, jsx_runtime_1.jsx)(FlexPageContextProvider_1.ActionContext.Provider, { value: actions !== null && actions !== void 0 ? actions : {}, children: (0, jsx_runtime_1.jsx)(FlexPageContextProvider_1.RouteContext.Provider, { value: routes !== null && routes !== void 0 ? routes : {}, children: (0, jsx_runtime_1.jsx)(EditorFields_1.ExtendEditorTypes, { fields: fields !== null && fields !== void 0 ? fields : {}, children: (0, jsx_runtime_1.jsx)(Block, { label: label, name: name, types: [editorType] }) }) }) }) });
    if (Forms) {
        return (0, jsx_runtime_1.jsx)(FormsContext_1.FormsContext.Provider, { value: Forms, children: inner });
    }
    return inner;
};
exports.FlexBlockEditor = FlexBlockEditor;
