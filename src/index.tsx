import type * as UI from '@openstax/ui-components';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import Bold from 'quill/formats/bold';
import Header from 'quill/formats/header';
import Italic from 'quill/formats/italic';
import Toolbar from 'quill/modules/toolbar';
import Snow from 'quill/themes/snow';
import React from 'react';

Quill.register({
  'modules/toolbar': Toolbar,
  'themes/snow': Snow,
  'formats/bold': Bold,
  'formats/italic': Italic,
  'formats/header': Header,
});

// from https://quilljs.com/playground/react
const RichEditor = React.forwardRef<Quill, {
  defaultValue: string;
  className?: string;
  onChange?: (value: string) => void;
  id?: string;
}>(({defaultValue, className, onChange, id}, ref) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const quillRef = React.useRef<Quill>();
  const defaultValueRef = React.useRef(defaultValue);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const editorContainer = container.appendChild(
      container.ownerDocument.createElement('div'),
    );
    const quill = new Quill(editorContainer, {
      theme: 'snow',
    });

    quillRef.current = quill;

    if (defaultValueRef.current) {
      quill.setContents(quill.clipboard.convert({html: defaultValueRef.current}));
    }
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

  return <div id={id} className={className} ref={containerRef} />;
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
      <RichEditor id={id} defaultValue={value} onChange={setValue} />
      <Forms.HelpText value={help} />
    </Forms.FormInputWrapper>;
  };

export const quillExtensions = ({Forms}: {Forms: typeof UI.Forms.Controlled}) => ({
  'rich-text': RichTextInput(Forms),
});
