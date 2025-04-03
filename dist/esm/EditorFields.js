import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import * as UI from '@openstax/ui-components';
import * as fieldTypes from './FieldTypes';
import { LinkTarget } from './Fields/LinkTarget';
import { CollapsibleFieldset } from './CollapsibleFieldset';
const defaultFieldTypes = {
    ...fieldTypes,
    text: UI.Forms.Controlled.TextInput,
    url: (props) => _jsx(UI.Forms.Controlled.TextInput, { ...props, type: "url" }),
    number: (props) => _jsx(UI.Forms.Controlled.TextInput, { ...props, type: "number" }),
    ['link-target']: LinkTarget,
    ['rich-text']: UI.Forms.Controlled.TextArea,
    ['long-text']: UI.Forms.Controlled.TextArea,
    select: UI.Forms.Controlled.Select,
    namespace: ({ name, label, fields, children }) => _jsxs(CollapsibleFieldset, { legend: label, children: [_jsx(UI.Forms.Controlled.NameSpace, { name: name, children: _jsx(EditorFields, { fields: fields }) }), children] }),
};
export const EditorFieldTypeContext = React.createContext(defaultFieldTypes);
export function ExtendEditorTypes({ fields, children }) {
    const existing = React.useContext(EditorFieldTypeContext);
    return _jsx(EditorFieldTypeContext.Provider, { value: { ...existing, ...fields }, children: children });
}
export function EditorFields({ fields }) {
    return _jsx(_Fragment, { children: fields.map(field => _jsx(EditorField, { ...field }, field.name)) });
}
export function EditorField({ type, ...field }) {
    const Field = React.useContext(EditorFieldTypeContext)[type];
    if (!Field)
        return _jsx("pre", { children: JSON.stringify({ type, field }, null, 2) });
    return _jsx(Field, { ...field });
}
