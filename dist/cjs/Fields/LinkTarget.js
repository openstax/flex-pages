"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkTarget = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const EditorFields_1 = require("../EditorFields");
const CollapsibleFieldset_1 = require("../CollapsibleFieldset");
const ContentBlockRoot_1 = require("@openstax/flex-page-renderer/ContentBlockRoot");
const FormsContext_1 = require("../FormsContext");
const LinkTargetFields = () => {
    const actions = Object.entries(react_1.default.useContext(ContentBlockRoot_1.ActionContext));
    const formState = (0, FormsContext_1.useForms)().useFormHelpers();
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
    const Forms = (0, FormsContext_1.useForms)();
    return (0, jsx_runtime_1.jsx)(Forms.NameSpace, { name: name, children: (0, jsx_runtime_1.jsx)(CollapsibleFieldset_1.CollapsibleFieldset, { legend: label, children: (0, jsx_runtime_1.jsx)(LinkTargetFields, {}) }) });
};
exports.LinkTarget = LinkTarget;
