import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { ActionContext, RouteContext } from '@openstax/flex-page-renderer/FlexPageContextProvider';
import React from 'react';
import { CollapsibleFieldset } from '../CollapsibleFieldset';
import { EditorField, EditorFields } from '../EditorFields';
import { useForms } from '../FormsContext';
const LinkTargetFields = () => {
    var _a, _b;
    const actions = React.useContext(ActionContext);
    const routes = React.useContext(RouteContext);
    const Forms = useForms();
    const formState = Forms.useFormHelpers();
    const value = formState.data;
    const type = value === null || value === void 0 ? void 0 : value.type;
    const actionsEntries = Object.entries(actions);
    const routesEntries = Object.entries(routes);
    const actionFields = (_a = actions[value === null || value === void 0 ? void 0 : value.value]) === null || _a === void 0 ? void 0 : _a.fields;
    const routeFields = (_b = routes[value === null || value === void 0 ? void 0 : value.value]) === null || _b === void 0 ? void 0 : _b.fields;
    return _jsxs(_Fragment, { children: [_jsx(EditorField, { required: true, name: "type", label: "Link Type", type: "select", options: [
                    { label: 'External URL', value: 'external' },
                    { label: 'Internal URL', value: 'internal' },
                    { label: 'Anchor', value: 'anchor' },
                    ...(actionsEntries.length > 0 ? [{ label: 'Action', value: 'action' }] : []),
                    ...(routesEntries.length > 0 ? [{ label: 'Route', value: 'route' }] : []),
                ] }), type === 'external' ?
                _jsx(EditorField, { required: true, name: "value", label: "Link Target", type: "url" })
                : null, type === 'internal' ?
                _jsx(EditorField, { required: true, name: "value", label: "Link Target", type: "text" })
                : null, type === 'anchor' ?
                _jsx(EditorField, { required: true, name: "value", label: "Link Target", type: "text", pattern: "#\\S+", help: "The target anchor. eg `#my-cool-element-id`" })
                : null, type === 'action' ?
                _jsx(EditorField, { required: true, name: "value", label: "Action", type: "select", options: actionsEntries.map(([value, { label }]) => ({ value, label })) })
                : null, type === 'action' && actionFields ?
                _jsx(Forms.NameSpace, { name: "params", children: _jsx(EditorFields, { fields: actionFields }) })
                : null, type === 'route' ?
                _jsx(EditorField, { required: true, name: "value", label: "Route", type: "select", options: routesEntries.map(([value, { label }]) => ({ value, label })) })
                : null, type === 'route' && routeFields ?
                _jsx(Forms.NameSpace, { name: "params", children: _jsx(EditorFields, { fields: routeFields }) })
                : null] });
};
export const LinkTarget = ({ name, label }) => {
    const Forms = useForms();
    return _jsx(Forms.NameSpace, { name: name, children: _jsx(CollapsibleFieldset, { legend: label, children: _jsx(LinkTargetFields, {}) }) });
};
