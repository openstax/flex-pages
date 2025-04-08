"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quillExtensions = exports.RichTextInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const quill_1 = __importDefault(require("quill"));
require("quill/dist/quill.snow.css");
const toolbar_1 = __importDefault(require("quill/modules/toolbar"));
const snow_1 = __importDefault(require("quill/themes/snow"));
const bold_1 = __importDefault(require("quill/formats/bold"));
const italic_1 = __importDefault(require("quill/formats/italic"));
const header_1 = __importDefault(require("quill/formats/header"));
quill_1.default.register({
    "modules/toolbar": toolbar_1.default,
    "themes/snow": snow_1.default,
    "formats/bold": bold_1.default,
    "formats/italic": italic_1.default,
    "formats/header": header_1.default,
});
// from https://quilljs.com/playground/react
const RichEditor = react_1.default.forwardRef(({ defaultValue, className, onChange, id }, ref) => {
    const containerRef = react_1.default.useRef(null);
    const quillRef = react_1.default.useRef();
    const defaultValueRef = react_1.default.useRef(defaultValue);
    react_1.default.useEffect(() => {
        const container = containerRef.current;
        if (!container)
            return;
        const editorContainer = container.appendChild(container.ownerDocument.createElement('div'));
        const quill = new quill_1.default(editorContainer, {
            theme: 'snow',
        });
        quillRef.current = quill;
        if (defaultValueRef.current) {
            quill.setContents(quill.clipboard.convert({ html: defaultValueRef.current }));
        }
    }, []);
    react_1.default.useImperativeHandle(ref, () => {
        return quillRef.current;
    }, []);
    react_1.default.useEffect(() => {
        const quill = quillRef.current;
        if (!onChange || !quill)
            return;
        const handleChange = () => {
            onChange(quill.getSemanticHTML().replace(/&nbsp;/g, ' '));
        };
        quill.on('text-change', handleChange);
        return () => { quill.off('text-change', handleChange); };
    }, [onChange]);
    return (0, jsx_runtime_1.jsx)("div", { id: id, className: className, ref: containerRef });
});
const RichTextInput = (Forms) => ({ name, label, required, help }) => {
    const formState = Forms.useFormHelpers();
    const value = formState.data[name];
    const setValue = formState.setInput.field(name);
    const id = formState.namespace + '.' + name;
    return (0, jsx_runtime_1.jsxs)(Forms.FormInputWrapper, { as: "div", children: [(0, jsx_runtime_1.jsx)(Forms.FormInputWrapper, { htmlFor: id, children: (0, jsx_runtime_1.jsxs)(Forms.FormLabelText, { children: [(0, jsx_runtime_1.jsx)(Forms.RequiredIndicator, { show: required }), label, ":"] }) }), (0, jsx_runtime_1.jsx)(RichEditor, { id: id, defaultValue: value, onChange: setValue }), (0, jsx_runtime_1.jsx)(Forms.HelpText, { value: help })] });
};
exports.RichTextInput = RichTextInput;
const quillExtensions = ({ Forms }) => ({
    'rich-text': (0, exports.RichTextInput)(Forms),
});
exports.quillExtensions = quillExtensions;
