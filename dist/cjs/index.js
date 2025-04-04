"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectExtensions = exports.FancySelect = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_select_1 = __importDefault(require("react-select"));
const FancySelect = (Forms) => ({ label, help, ...props }) => {
    const formState = Forms.useFormHelpers();
    const value = formState.data[props.name] || undefined;
    const setValue = formState.setInput.field(props.name);
    const getSelected = react_1.default.useCallback(() => {
        return props.options.find(o => o.value === value) || null;
    }, [value, props.options]);
    const [selected, setSelected] = react_1.default.useState(getSelected());
    react_1.default.useEffect(() => {
        const found = getSelected();
        if (found !== selected) {
            setSelected(found);
        }
    }, [getSelected, selected]);
    const onChange = react_1.default.useCallback((newValue) => {
        if (newValue) {
            setValue(newValue.value);
        }
        else {
            setValue(undefined);
        }
    }, [formState, props.name, props.isMulti]);
    return (0, jsx_runtime_1.jsxs)(Forms.FormInputWrapper, { children: [(0, jsx_runtime_1.jsxs)(Forms.FormLabelText, { children: [(0, jsx_runtime_1.jsx)(Forms.RequiredIndicator, { show: props.required }), label, ":"] }), (0, jsx_runtime_1.jsx)(react_select_1.default, { ...props, value: selected, onChange: onChange }), (0, jsx_runtime_1.jsx)(Forms.HelpText, { value: help })] });
};
exports.FancySelect = FancySelect;
const selectExtensions = ({ Forms }) => ({
    'select': (0, exports.FancySelect)(Forms),
});
exports.selectExtensions = selectExtensions;
