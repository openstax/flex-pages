import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import * as UI from '@openstax/ui-components';
import Select from 'react-select';
export const FancySelect = (props) => {
    const formState = UI.Forms.Controlled.useFormHelpers();
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
        if (newValue) {
            setValue(newValue.value);
        }
        else {
            setValue(undefined);
        }
    }, [formState, props.name, props.isMulti]);
    return _jsx(UncontrolledFancySelect, { isClearable: !props.required, ...props, value: selected, onChange: onChange });
};
const UncontrolledFancySelect = ({ label, help, ...props }) => {
    return _jsxs(UI.Forms.Controlled.FormInputWrapper, { children: [_jsxs(UI.Forms.Controlled.FormLabelText, { children: [_jsx(UI.Forms.Controlled.RequiredIndicator, { show: props.required }), label, ":"] }), _jsx(Select, { ...props }), _jsx(UI.Forms.Controlled.HelpText, { value: help })] });
};
export const selectExtensions = {
    'select': FancySelect,
};
