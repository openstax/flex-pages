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
exports.quillExtensions = exports.RichTextInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const UI = __importStar(require("@openstax/ui-components"));
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
const RichEditor = react_1.default.forwardRef(({ defaultValue, className, onChange }, ref) => {
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
            onChange(quill.getSemanticHTML());
        };
        quill.on('text-change', handleChange);
        return () => { quill.off('text-change', handleChange); };
    }, [onChange]);
    return (0, jsx_runtime_1.jsx)("div", { className: className, ref: containerRef });
});
const RichTextInput = ({ name, label, required, help }) => {
    const formState = UI.Forms.Controlled.useFormHelpers();
    const value = formState.data[name];
    const setValue = formState.setInput.field(name);
    return (0, jsx_runtime_1.jsxs)(UI.Forms.Controlled.FormInputWrapper, { style: { userSelect: 'auto' }, children: [(0, jsx_runtime_1.jsxs)(UI.Forms.Controlled.FormLabelText, { children: [(0, jsx_runtime_1.jsx)(UI.Forms.Controlled.RequiredIndicator, { show: required }), label, ":"] }), (0, jsx_runtime_1.jsx)(RichEditor, { defaultValue: value, onChange: setValue }), (0, jsx_runtime_1.jsx)(UI.Forms.Controlled.HelpText, { value: help })] });
};
exports.RichTextInput = RichTextInput;
exports.quillExtensions = {
    'rich-text': exports.RichTextInput,
};
