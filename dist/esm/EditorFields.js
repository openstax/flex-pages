import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import * as fieldTypes from './FieldTypes';
import { LinkTarget } from './Fields/LinkTarget';
import { CollapsibleFieldset } from './CollapsibleFieldset';
import { useForms } from './FormsContext';
const defaultFieldTypes = {
    ...fieldTypes,
    text: (props) => {
        const { TextInput } = useForms();
        return _jsx(TextInput, { ...props });
    },
    url: (props) => {
        const { TextInput } = useForms();
        return _jsx(TextInput, { ...props, type: "url" });
    },
    number: (props) => {
        const { TextInput } = useForms();
        return _jsx(TextInput, { ...props, type: "number" });
    },
    ['rich-text']: (props) => {
        const { TextArea } = useForms();
        return _jsx(TextArea, { ...props });
    },
    ['long-text']: (props) => {
        const { TextArea } = useForms();
        return _jsx(TextArea, { ...props });
    },
    ['select']: (props) => {
        const { Select } = useForms();
        return _jsx(Select, { ...props });
    },
    ['link-target']: LinkTarget,
    namespace: ({ name, label, fields, children }) => {
        const Forms = useForms();
        return _jsxs(CollapsibleFieldset, { legend: label, children: [_jsx(Forms.NameSpace, { name: name, children: _jsx(EditorFields, { fields: fields }) }), children] });
    },
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
