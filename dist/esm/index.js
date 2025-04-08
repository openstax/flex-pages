import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import Toolbar from "quill/modules/toolbar";
import Snow from "quill/themes/snow";
import Bold from "quill/formats/bold";
import Italic from "quill/formats/italic";
import Header from "quill/formats/header";
Quill.register({
    "modules/toolbar": Toolbar,
    "themes/snow": Snow,
    "formats/bold": Bold,
    "formats/italic": Italic,
    "formats/header": Header,
});
// from https://quilljs.com/playground/react
const RichEditor = React.forwardRef(({ defaultValue, className, onChange, id }, ref) => {
    const containerRef = React.useRef(null);
    const quillRef = React.useRef();
    const defaultValueRef = React.useRef(defaultValue);
    React.useEffect(() => {
        const container = containerRef.current;
        if (!container)
            return;
        const editorContainer = container.appendChild(container.ownerDocument.createElement('div'));
        const quill = new Quill(editorContainer, {
            theme: 'snow',
        });
        quillRef.current = quill;
        if (defaultValueRef.current) {
            quill.setContents(quill.clipboard.convert({ html: defaultValueRef.current }));
        }
    }, []);
    React.useImperativeHandle(ref, () => {
        return quillRef.current;
    }, []);
    React.useEffect(() => {
        const quill = quillRef.current;
        if (!onChange || !quill)
            return;
        const handleChange = () => {
            onChange(quill.getSemanticHTML().replace(/&nbsp;/g, ' '));
        };
        quill.on('text-change', handleChange);
        return () => { quill.off('text-change', handleChange); };
    }, [onChange]);
    return _jsx("div", { id: id, className: className, ref: containerRef });
});
export const RichTextInput = (Forms) => ({ name, label, required, help }) => {
    const formState = Forms.useFormHelpers();
    const value = formState.data[name];
    const setValue = formState.setInput.field(name);
    const id = formState.namespace + '.' + name;
    return _jsxs(Forms.FormInputWrapper, { as: "div", children: [_jsx(Forms.FormInputWrapper, { htmlFor: id, children: _jsxs(Forms.FormLabelText, { children: [_jsx(Forms.RequiredIndicator, { show: required }), label, ":"] }) }), _jsx(RichEditor, { id: id, defaultValue: value, onChange: setValue }), _jsx(Forms.HelpText, { value: help })] });
};
export const quillExtensions = ({ Forms }) => ({
    'rich-text': RichTextInput(Forms),
});
