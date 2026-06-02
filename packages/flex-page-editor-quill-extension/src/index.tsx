import { RouteContext } from '@openstax/flex-page-renderer/RouteContext';
import type { LinkTarget } from '@openstax/flex-page-renderer/lib/linkBehavior';
import type * as UI from '@openstax/ui-components';
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
import {
  anchorLinkEdit, applyLink, attachLinkClick, LinkEdit, removeLink, selectionLinkEdit,
} from './linkEditing';

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
  [{header: [1, 2, 3, false]}],
  ['bold', 'italic', 'underline'],
  ['link'],
  [{list: 'ordered'}, {list: 'bullet'}],
  ['clean'],
];
const FORMATS = ['header', 'bold', 'italic', 'underline', 'list', FlexLink.blotName];

// from https://quilljs.com/playground/react
const RichEditor = React.forwardRef<Quill, {
  defaultValue: string;
  className?: string;
  onChange?: (value: string) => void;
  id?: string;
  Forms: typeof UI.Forms.Controlled;
}>(({defaultValue, className, onChange, id, Forms}, ref) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const quillRef = React.useRef<Quill>();
  const defaultValueRef = React.useRef(defaultValue);
  const [linkEdit, setLinkEdit] = React.useState<LinkEdit | null>(null);

  // Resolve a link target to a concrete href using the routes the editor was
  // given (same RouteContext the renderer uses). Url-typed targets resolve from
  // their value in writeLinkTarget, so only routes need resolving here.
  const routes = React.useContext(RouteContext);
  const resolveHref = React.useCallback((target: LinkTarget): string | undefined =>
    target.type === 'route' ? routes[target.value]?.render(target.params) : undefined,
  [routes]);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const editorContainer = container.appendChild(
      container.ownerDocument.createElement('div'),
    );
    const quill = new Quill(editorContainer, {
      theme: 'snow',
      formats: FORMATS,
      modules: {
        toolbar: {
          container: TOOLBAR,
          handlers: {
            link() {
              const edit = selectionLinkEdit(quill);
              if (edit) setLinkEdit(edit);
            },
          },
        },
      },
    });

    quillRef.current = quill;

    if (defaultValueRef.current) {
      quill.setContents(quill.clipboard.convert({html: defaultValueRef.current}));
    }

    const detach = attachLinkClick(quill, (anchor) => setLinkEdit(anchorLinkEdit(quill, anchor)));

    return () => {
      detach();
      quillRef.current = undefined;
      container.innerHTML = '';
    };
  }, []);

  React.useImperativeHandle(ref, () => {
    return quillRef.current!;
  }, []);

  React.useEffect(() => {
    const quill = quillRef.current;
    if (!onChange || !quill) return;

    const handleChange = () => {
      onChange(quill.getSemanticHTML().replace(/&nbsp;/g, ' '));
    };

    quill.on('text-change', handleChange);

    return () => { quill.off('text-change', handleChange); };
  }, [onChange]);

  return <>
    <div id={id} className={className} ref={containerRef} />
    {linkEdit ?
      <LinkModal
        Forms={Forms}
        initialText={linkEdit.text}
        initial={linkEdit.initial}
        onConfirm={(result) => {
          if (quillRef.current) applyLink(quillRef.current, linkEdit, result, resolveHref(result.target));
          setLinkEdit(null);
        }}
        onRemove={() => {
          if (quillRef.current) removeLink(quillRef.current, linkEdit);
          setLinkEdit(null);
        }}
        onCancel={() => setLinkEdit(null)}
      />
    : null}
  </>;
});

export const RichTextInput = (Forms: typeof UI.Forms.Controlled) =>
  ({name, label, required, help}: {name: string; label: string; required?: boolean; help?: string}) => {
    const formState = Forms.useFormHelpers();
    const value = formState.data[name];
    const setValue = formState.setInput.field(name);
    const id = formState.namespace + '.' + name;

    return <Forms.FormInputWrapper as="div">
      <Forms.FormInputWrapper htmlFor={id}>
        <Forms.FormLabelText><Forms.RequiredIndicator show={required} />{label}:</Forms.FormLabelText>
      </Forms.FormInputWrapper>
      <RichEditor id={id} defaultValue={value} onChange={setValue} Forms={Forms} />
      <Forms.HelpText value={help} />
    </Forms.FormInputWrapper>;
  };

export const quillExtensions = ({Forms}: {Forms: typeof UI.Forms.Controlled}) => ({
  'rich-text': RichTextInput(Forms),
});
