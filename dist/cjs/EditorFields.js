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
exports.EditorField = exports.EditorFields = exports.ExtendEditorTypes = exports.EditorFieldTypeContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const UI = __importStar(require("@openstax/ui-components"));
const fieldTypes = __importStar(require("./FieldTypes"));
const LinkTarget_1 = require("./Fields/LinkTarget");
const CollapsibleFieldset_1 = require("./CollapsibleFieldset");
const defaultFieldTypes = {
    ...fieldTypes,
    text: UI.Forms.Controlled.TextInput,
    url: (props) => (0, jsx_runtime_1.jsx)(UI.Forms.Controlled.TextInput, { ...props, type: "url" }),
    number: (props) => (0, jsx_runtime_1.jsx)(UI.Forms.Controlled.TextInput, { ...props, type: "number" }),
    ['link-target']: LinkTarget_1.LinkTarget,
    ['rich-text']: UI.Forms.Controlled.TextArea,
    ['long-text']: UI.Forms.Controlled.TextArea,
    select: UI.Forms.Controlled.Select,
    namespace: ({ name, label, fields, children }) => (0, jsx_runtime_1.jsxs)(CollapsibleFieldset_1.CollapsibleFieldset, { legend: label, children: [(0, jsx_runtime_1.jsx)(UI.Forms.Controlled.NameSpace, { name: name, children: (0, jsx_runtime_1.jsx)(EditorFields, { fields: fields }) }), children] }),
};
exports.EditorFieldTypeContext = react_1.default.createContext(defaultFieldTypes);
function ExtendEditorTypes({ fields, children }) {
    const existing = react_1.default.useContext(exports.EditorFieldTypeContext);
    return (0, jsx_runtime_1.jsx)(exports.EditorFieldTypeContext.Provider, { value: { ...existing, ...fields }, children: children });
}
exports.ExtendEditorTypes = ExtendEditorTypes;
function EditorFields({ fields }) {
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: fields.map(field => (0, jsx_runtime_1.jsx)(EditorField, { ...field }, field.name)) });
}
exports.EditorFields = EditorFields;
function EditorField({ type, ...field }) {
    const Field = react_1.default.useContext(exports.EditorFieldTypeContext)[type];
    if (!Field)
        return (0, jsx_runtime_1.jsx)("pre", { children: JSON.stringify({ type, field }, null, 2) });
    return (0, jsx_runtime_1.jsx)(Field, { ...field });
}
exports.EditorField = EditorField;
