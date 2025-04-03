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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexBlockEditor = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const UI = __importStar(require("@openstax/ui-components"));
const ContentBlockRoot_1 = require("@openstax/flex-page-renderer/ContentBlockRoot");
const EditorFields_1 = require("./EditorFields");
/*
 * there is some kind of bug (in webpack?) where ui-components is being bundled
 * multiple times, and if that happens it becomes necessary to pass the FormContext
 * through here or the FormStateContext variable will not be shared
 *
 * possibly related to:
 * - https://github.com/webpack/webpack/issues/8886
 * - https://github.com/webpack/webpack/issues/985
 *
 * if the issue is related to symlinks, its possible that it would work correctly
 * sometimes, but i haven't seen it work yet after trying several configurations.
 */
const FlexBlockEditor = ({ name, label, blocks, actions, fields, type, FormContext }) => {
    const editorType = type !== null && type !== void 0 ? type : 'flex_page';
    const { block: Block } = react_1.default.useContext(EditorFields_1.EditorFieldTypeContext);
    const inner = (0, jsx_runtime_1.jsx)(ContentBlockRoot_1.BlockContext.Provider, { value: blocks, children: (0, jsx_runtime_1.jsx)(ContentBlockRoot_1.ActionContext.Provider, { value: actions !== null && actions !== void 0 ? actions : {}, children: (0, jsx_runtime_1.jsx)(EditorFields_1.ExtendEditorTypes, { fields: fields !== null && fields !== void 0 ? fields : {}, children: (0, jsx_runtime_1.jsx)(Block, { label: label, name: name, types: [editorType] }) }) }) });
    if (FormContext && FormContext !== UI.Forms.Controlled.FormStateContext) {
        return (0, jsx_runtime_1.jsx)(FormContext.Consumer, { children: value => (0, jsx_runtime_1.jsx)(UI.Forms.Controlled.FormStateContext.Provider, { value: value, children: inner }) });
    }
    return inner;
};
exports.FlexBlockEditor = FlexBlockEditor;
