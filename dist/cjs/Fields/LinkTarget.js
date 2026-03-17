"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkTarget = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const FlexPageContextProvider_1 = require("@openstax/flex-page-renderer/FlexPageContextProvider");
const react_1 = __importDefault(require("react"));
const CollapsibleFieldset_1 = require("../CollapsibleFieldset");
const EditorFields_1 = require("../EditorFields");
const FormsContext_1 = require("../FormsContext");
const LinkTargetFields = () => {
    var _a, _b;
    const actions = react_1.default.useContext(FlexPageContextProvider_1.ActionContext);
    const routes = react_1.default.useContext(FlexPageContextProvider_1.RouteContext);
    const Forms = (0, FormsContext_1.useForms)();
    const formState = Forms.useFormHelpers();
    const value = formState.data;
    const type = value === null || value === void 0 ? void 0 : value.type;
    const actionsEntries = Object.entries(actions);
    const routesEntries = Object.entries(routes);
    const actionFields = (_a = actions[value === null || value === void 0 ? void 0 : value.value]) === null || _a === void 0 ? void 0 : _a.fields;
    const routeFields = (_b = routes[value === null || value === void 0 ? void 0 : value.value]) === null || _b === void 0 ? void 0 : _b.fields;
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(EditorFields_1.EditorField, { required: true, name: "type", label: "Link Type", type: "select", options: [
                    { label: 'External URL', value: 'external' },
                    { label: 'Internal URL', value: 'internal' },
                    { label: 'Anchor', value: 'anchor' },
                    ...(actionsEntries.length > 0 ? [{ label: 'Action', value: 'action' }] : []),
                    ...(routesEntries.length > 0 ? [{ label: 'Route', value: 'route' }] : []),
                ] }), type === 'external' ?
                (0, jsx_runtime_1.jsx)(EditorFields_1.EditorField, { required: true, name: "value", label: "Link Target", type: "url" })
                : null, type === 'internal' ?
                (0, jsx_runtime_1.jsx)(EditorFields_1.EditorField, { required: true, name: "value", label: "Link Target", type: "text" })
                : null, type === 'anchor' ?
                (0, jsx_runtime_1.jsx)(EditorFields_1.EditorField, { required: true, name: "value", label: "Link Target", type: "text", pattern: "#\\S+", help: "The target anchor. eg `#my-cool-element-id`" })
                : null, type === 'action' ?
                (0, jsx_runtime_1.jsx)(EditorFields_1.EditorField, { required: true, name: "value", label: "Action", type: "select", options: actionsEntries.map(([value, { label }]) => ({ value, label })) })
                : null, type === 'action' && actionFields ?
                (0, jsx_runtime_1.jsx)(Forms.NameSpace, { name: "params", children: (0, jsx_runtime_1.jsx)(EditorFields_1.EditorFields, { fields: actionFields }) })
                : null, type === 'route' ?
                (0, jsx_runtime_1.jsx)(EditorFields_1.EditorField, { required: true, name: "value", label: "Route", type: "select", options: routesEntries.map(([value, { label }]) => ({ value, label })) })
                : null, type === 'route' && routeFields ?
                (0, jsx_runtime_1.jsx)(Forms.NameSpace, { name: "params", children: (0, jsx_runtime_1.jsx)(EditorFields_1.EditorFields, { fields: routeFields }) })
                : null] });
};
const LinkTarget = ({ name, label }) => {
    const Forms = (0, FormsContext_1.useForms)();
    return (0, jsx_runtime_1.jsx)(Forms.NameSpace, { name: name, children: (0, jsx_runtime_1.jsx)(CollapsibleFieldset_1.CollapsibleFieldset, { legend: label, children: (0, jsx_runtime_1.jsx)(LinkTargetFields, {}) }) });
};
exports.LinkTarget = LinkTarget;
