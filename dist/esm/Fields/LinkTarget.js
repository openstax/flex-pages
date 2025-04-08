import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { EditorField } from '../EditorFields';
import { CollapsibleFieldset } from '../CollapsibleFieldset';
import { ActionContext } from '@openstax/flex-page-renderer/ContentBlockRoot';
import { useForms } from '../FormsContext';
const LinkTargetFields = () => {
    const actions = Object.entries(React.useContext(ActionContext));
    const formState = useForms().useFormHelpers();
    const value = formState.data;
    const type = value === null || value === void 0 ? void 0 : value.type;
    return _jsxs(_Fragment, { children: [_jsx(EditorField, { required: true, name: "type", label: "Link Type", type: "select", options: [
                    { label: 'External', value: 'external' },
                    { label: 'Internal', value: 'internal' },
                    { label: 'Anchor', value: 'anchor' },
                    ...(actions.length > 0 ? [{ label: 'Action', value: 'action' }] : [])
                ] }), type === 'external' ?
                _jsx(EditorField, { required: true, name: "value", label: "Link Target", type: "url" })
                : null, type === 'internal' ?
                _jsx(EditorField, { required: true, name: "value", label: "Link Target", type: "text" })
                : null, type === 'anchor' ?
                _jsx(EditorField, { required: true, name: "value", label: "Link Target", type: "text", pattern: "#\\S+", help: "The target anchor. eg `#my-cool-element-id`" })
                : null, type === 'action' ?
                _jsx(EditorField, { required: true, name: "value", label: "Action", type: "select", options: actions.map(([value, { label }]) => ({ value, label })) })
                : null] });
};
export const LinkTarget = ({ name, label }) => {
    const Forms = useForms();
    return _jsx(Forms.NameSpace, { name: name, children: _jsx(CollapsibleFieldset, { legend: label, children: _jsx(LinkTargetFields, {}) }) });
};
