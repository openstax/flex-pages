import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { RouteContext } from '@openstax/flex-page-renderer/RouteContext';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import Bold from 'quill/formats/bold';
import Header from 'quill/formats/header';
import Italic from 'quill/formats/italic';
import List from 'quill/formats/list';
import Underline from 'quill/formats/underline';
import Toolbar from 'quill/modules/toolbar';
import Snow from 'quill/themes/snow';
import React from 'react';
import { LinkModal } from './LinkModal';
import { FlexLink } from './flexLink';
import { anchorLinkEdit, applyLink, attachLinkClick, removeLink, selectionLinkEdit, } from './linkEditing';
Quill.register({
    'modules/toolbar': Toolbar,
    'themes/snow': Snow,
    'formats/bold': Bold,
    'formats/italic': Italic,
    'formats/underline': Underline,
    'formats/header': Header,
    'formats/list': List,
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
const FORMATS = ['header', 'bold', 'italic', 'underline', 'list', FlexLink.blotName];
// from https://quilljs.com/playground/react
const RichEditor = React.forwardRef(({ defaultValue, className, onChange, id, Forms }, ref) => {
    const containerRef = React.useRef(null);
    const quillRef = React.useRef();
    const defaultValueRef = React.useRef(defaultValue);
    const [linkEdit, setLinkEdit] = React.useState(null);
    // Resolve a link target to a concrete href using the routes the editor was
    // given (same RouteContext the renderer uses). Url-typed targets resolve from
    // their value in writeLinkTarget, so only routes need resolving here.
    const routes = React.useContext(RouteContext);
    const resolveHref = React.useCallback((target) => { var _a; return target.type === 'route' ? (_a = routes[target.value]) === null || _a === void 0 ? void 0 : _a.render(target.params) : undefined; }, [routes]);
    React.useEffect(() => {
        const container = containerRef.current;
        if (!container)
            return;
        const editorContainer = container.appendChild(container.ownerDocument.createElement('div'));
        const quill = new Quill(editorContainer, {
            theme: 'snow',
            formats: FORMATS,
            modules: {
                toolbar: {
                    container: TOOLBAR,
                    handlers: {
                        link() {
                            const edit = selectionLinkEdit(quill);
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
        const detach = attachLinkClick(quill, (anchor) => setLinkEdit(anchorLinkEdit(quill, anchor)));
        return () => {
            detach();
            quillRef.current = undefined;
            container.innerHTML = '';
        };
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
    return _jsxs(_Fragment, { children: [_jsx("div", { id: id, className: className, ref: containerRef }), linkEdit ?
                _jsx(LinkModal, { Forms: Forms, initialText: linkEdit.text, initial: linkEdit.initial, onConfirm: (result) => {
                        if (quillRef.current)
                            applyLink(quillRef.current, linkEdit, result, resolveHref(result.target));
                        setLinkEdit(null);
                    }, onRemove: () => {
                        if (quillRef.current)
                            removeLink(quillRef.current, linkEdit);
                        setLinkEdit(null);
                    }, onCancel: () => setLinkEdit(null) })
                : null] });
});
export const RichTextInput = (Forms) => ({ name, label, required, help }) => {
    const formState = Forms.useFormHelpers();
    const value = formState.data[name];
    const setValue = formState.setInput.field(name);
    const id = formState.namespace + '.' + name;
    return _jsxs(Forms.FormInputWrapper, { as: "div", children: [_jsx(Forms.FormInputWrapper, { htmlFor: id, children: _jsxs(Forms.FormLabelText, { children: [_jsx(Forms.RequiredIndicator, { show: required }), label, ":"] }) }), _jsx(RichEditor, { id: id, defaultValue: value, onChange: setValue, Forms: Forms }), _jsx(Forms.HelpText, { value: help })] });
};
export const quillExtensions = ({ Forms }) => ({
    'rich-text': RichTextInput(Forms),
});
