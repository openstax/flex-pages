import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import * as UI from '@openstax/ui-components';
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
const RichEditor = React.forwardRef(({ defaultValue, className, onChange }, ref) => {
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
            onChange(quill.getSemanticHTML());
        };
        quill.on('text-change', handleChange);
        return () => { quill.off('text-change', handleChange); };
    }, [onChange]);
    return _jsx("div", { className: className, ref: containerRef });
});
export const RichTextInput = ({ name, label, required, help }) => {
    const formState = UI.Forms.Controlled.useFormHelpers();
    const value = formState.data[name];
    const setValue = formState.setInput.field(name);
    return _jsxs(UI.Forms.Controlled.FormInputWrapper, { style: { userSelect: 'auto' }, children: [_jsxs(UI.Forms.Controlled.FormLabelText, { children: [_jsx(UI.Forms.Controlled.RequiredIndicator, { show: required }), label, ":"] }), _jsx(RichEditor, { defaultValue: value, onChange: setValue }), _jsx(UI.Forms.Controlled.HelpText, { value: help })] });
};
export const quillExtensions = {
    'rich-text': RichTextInput,
};
