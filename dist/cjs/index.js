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
exports.selectExtensions = exports.FancySelect = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const UI = __importStar(require("@openstax/ui-components"));
const react_select_1 = __importDefault(require("react-select"));
const FancySelect = (props) => {
    const formState = UI.Forms.Controlled.useFormHelpers();
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
    return (0, jsx_runtime_1.jsx)(UncontrolledFancySelect, { isClearable: !props.required, ...props, value: selected, onChange: onChange });
};
exports.FancySelect = FancySelect;
const UncontrolledFancySelect = ({ label, help, ...props }) => {
    return (0, jsx_runtime_1.jsxs)(UI.Forms.Controlled.FormInputWrapper, { children: [(0, jsx_runtime_1.jsxs)(UI.Forms.Controlled.FormLabelText, { children: [(0, jsx_runtime_1.jsx)(UI.Forms.Controlled.RequiredIndicator, { show: props.required }), label, ":"] }), (0, jsx_runtime_1.jsx)(react_select_1.default, { ...props }), (0, jsx_runtime_1.jsx)(UI.Forms.Controlled.HelpText, { value: help })] });
};
exports.selectExtensions = {
    'select': exports.FancySelect,
};
