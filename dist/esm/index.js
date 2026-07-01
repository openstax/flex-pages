import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import Select from 'react-select';
export const FancySelect = (Forms) => ({ label, help, ...props }) => {
    const formState = Forms.useFormHelpers();
    const value = formState.data[props.name] || undefined;
    const setValue = formState.setInput.field(props.name);
    const getSelected = React.useCallback(() => {
        return props.options.find(o => o.value === value) || null;
    }, [value, props.options]);
    const [selected, setSelected] = React.useState(getSelected());
    React.useEffect(() => {
        const found = getSelected();
        if (found !== selected) {
            setSelected(found);
        }
    }, [getSelected, selected]);
    const onChange = React.useCallback((newValue) => {
        const option = newValue;
        if (option) {
            setValue(option.value);
        }
        else {
            setValue(undefined);
        }
    }, [formState, props.name, props.isMulti]);
    return _jsxs(Forms.FormInputWrapper, { children: [_jsxs(Forms.FormLabelText, { children: [_jsx(Forms.RequiredIndicator, { show: props.required }), label, ":"] }), _jsx(Select, { ...props, value: selected, onChange: onChange, 
                // Position the menu `fixed` so it escapes an `overflow: hidden` ancestor
                // (e.g. the link-editor modal) WITHOUT a body portal — a portal renders
                // outside react-aria's modal overlay, which blocks pointer events to the
                // menu. Keeping it inline leaves it inside the modal's interaction scope.
                menuPosition: "fixed", styles: { menu: base => ({ ...base, zIndex: 9999 }) } }), _jsx(Forms.HelpText, { value: help })] });
};
export const selectExtensions = ({ Forms }) => ({
    select: FancySelect(Forms),
});
