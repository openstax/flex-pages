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
exports.LinkTarget = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const EditorFields_1 = require("../EditorFields");
const CollapsibleFieldset_1 = require("../CollapsibleFieldset");
const UI = __importStar(require("@openstax/ui-components"));
const ContentBlockRoot_1 = require("@openstax/flex-page-renderer/ContentBlockRoot");
const LinkTargetFields = () => {
    const actions = Object.entries(react_1.default.useContext(ContentBlockRoot_1.ActionContext));
    const formState = UI.Forms.Controlled.useFormHelpers();
    const value = formState.data;
    const type = value === null || value === void 0 ? void 0 : value.type;
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(EditorFields_1.EditorField, { required: true, name: "type", label: "Link Type", type: "select", options: [
                    { label: 'External', value: 'external' },
                    { label: 'Internal', value: 'internal' },
                    { label: 'Anchor', value: 'anchor' },
                    ...(actions.length > 0 ? [{ label: 'Action', value: 'action' }] : [])
                ] }), type === 'external' ?
                (0, jsx_runtime_1.jsx)(EditorFields_1.EditorField, { required: true, name: "value", label: "Link Target", type: "url" })
                : null, type === 'internal' ?
                (0, jsx_runtime_1.jsx)(EditorFields_1.EditorField, { required: true, name: "value", label: "Link Target", type: "text" })
                : null, type === 'anchor' ?
                (0, jsx_runtime_1.jsx)(EditorFields_1.EditorField, { required: true, name: "value", label: "Link Target", type: "text", pattern: "#\\S+", help: "The target anchor. eg `#my-cool-element-id`" })
                : null, type === 'action' ?
                (0, jsx_runtime_1.jsx)(EditorFields_1.EditorField, { required: true, name: "value", label: "Action", type: "select", options: actions.map(([value, { label }]) => ({ value, label })) })
                : null] });
};
const LinkTarget = ({ name, label }) => {
    return (0, jsx_runtime_1.jsx)(UI.Forms.Controlled.NameSpace, { name: name, children: (0, jsx_runtime_1.jsx)(CollapsibleFieldset_1.CollapsibleFieldset, { legend: label, children: (0, jsx_runtime_1.jsx)(LinkTargetFields, {}) }) });
};
exports.LinkTarget = LinkTarget;
