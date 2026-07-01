"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quillExtensions = exports.RichTextInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const RouteContext_1 = require("@openstax/flex-page-renderer/RouteContext");
const quill_1 = __importDefault(require("quill"));
require("quill/dist/quill.snow.css");
const bold_1 = __importDefault(require("quill/formats/bold"));
const header_1 = __importDefault(require("quill/formats/header"));
const italic_1 = __importDefault(require("quill/formats/italic"));
const list_1 = __importDefault(require("quill/formats/list"));
const underline_1 = __importDefault(require("quill/formats/underline"));
const toolbar_1 = __importDefault(require("quill/modules/toolbar"));
const snow_1 = __importDefault(require("quill/themes/snow"));
const react_1 = __importDefault(require("react"));
const LinkModal_1 = require("./LinkModal");
const flexLink_1 = require("./flexLink");
const linkEditing_1 = require("./linkEditing");
quill_1.default.register({
    'modules/toolbar': toolbar_1.default,
    'themes/snow': snow_1.default,
    'formats/bold': bold_1.default,
    'formats/italic': italic_1.default,
    'formats/underline': underline_1.default,
    'formats/header': header_1.default,
    'formats/list': list_1.default,
});
// `formats` whitelist deliberately omits Quill's built-in `link` — that format
// (and its "Visit URL / Edit / Remove" tooltip) is fully disabled. Links are
// our `flexLink` format instead; FlexLink registers itself on import.
const TOOLBAR = [
    [{ header: [1, 2, 3, false] }],
    ['bold', 'italic', 'underline'],
    ['link'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['clean'],
];
const FORMATS = ['header', 'bold', 'italic', 'underline', 'list', flexLink_1.FlexLink.blotName];
// from https://quilljs.com/playground/react
const RichEditor = react_1.default.forwardRef(({ defaultValue, className, onChange, id, Forms }, ref) => {
    const containerRef = react_1.default.useRef(null);
    const quillRef = react_1.default.useRef();
    const defaultValueRef = react_1.default.useRef(defaultValue);
    const [linkEdit, setLinkEdit] = react_1.default.useState(null);
    // Resolve a link target to a concrete href using the routes the editor was
    // given (same RouteContext the renderer uses). Url-typed targets resolve from
    // their value in writeLinkTarget, so only routes need resolving here.
    const routes = react_1.default.useContext(RouteContext_1.RouteContext);
    const resolveHref = react_1.default.useCallback((target) => { var _a; return target.type === 'route' ? (_a = routes[target.value]) === null || _a === void 0 ? void 0 : _a.render(target.params) : undefined; }, [routes]);
    react_1.default.useEffect(() => {
        const container = containerRef.current;
        if (!container)
            return;
        const editorContainer = container.appendChild(container.ownerDocument.createElement('div'));
        const quill = new quill_1.default(editorContainer, {
            theme: 'snow',
            formats: FORMATS,
            modules: {
                toolbar: {
                    container: TOOLBAR,
                    handlers: {
                        link() {
                            const edit = (0, linkEditing_1.selectionLinkEdit)(quill);
                            if (edit)
                                setLinkEdit(edit);
                        },
                    },
                },
            },
        });
        quillRef.current = quill;
        if (defaultValueRef.current) {
            quill.setContents(quill.clipboard.convert({ html: defaultValueRef.current }));
        }
        const detach = (0, linkEditing_1.attachLinkClick)(quill, (anchor) => setLinkEdit((0, linkEditing_1.anchorLinkEdit)(quill, anchor)));
        return () => {
            detach();
            quillRef.current = undefined;
            container.innerHTML = '';
        };
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
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { id: id, className: className, ref: containerRef }), linkEdit ?
                (0, jsx_runtime_1.jsx)(LinkModal_1.LinkModal, { Forms: Forms, initialText: linkEdit.text, initial: linkEdit.initial, onConfirm: (result) => {
                        if (quillRef.current)
                            (0, linkEditing_1.applyLink)(quillRef.current, linkEdit, result, resolveHref(result.target));
                        setLinkEdit(null);
                    }, onRemove: () => {
                        if (quillRef.current)
                            (0, linkEditing_1.removeLink)(quillRef.current, linkEdit);
                        setLinkEdit(null);
                    }, onCancel: () => setLinkEdit(null) })
                : null] });
});
const RichTextInput = (Forms) => ({ name, label, required, help }) => {
    const formState = Forms.useFormHelpers();
    const value = formState.data[name];
    const setValue = formState.setInput.field(name);
    const id = formState.namespace + '.' + name;
    return (0, jsx_runtime_1.jsxs)(Forms.FormInputWrapper, { as: "div", children: [(0, jsx_runtime_1.jsx)(Forms.FormInputWrapper, { htmlFor: id, children: (0, jsx_runtime_1.jsxs)(Forms.FormLabelText, { children: [(0, jsx_runtime_1.jsx)(Forms.RequiredIndicator, { show: required }), label, ":"] }) }), (0, jsx_runtime_1.jsx)(RichEditor, { id: id, defaultValue: value, onChange: setValue, Forms: Forms }), (0, jsx_runtime_1.jsx)(Forms.HelpText, { value: help })] });
};
exports.RichTextInput = RichTextInput;
const quillExtensions = ({ Forms }) => ({
    'rich-text': (0, exports.RichTextInput)(Forms),
});
exports.quillExtensions = quillExtensions;
