import type { ConfigField } from '@openstax/flex-page-renderer';
import type * as UI from '@openstax/ui-components';
import React from 'react';
import { CollapsibleFieldset } from './CollapsibleFieldset';
import * as fieldTypes from './FieldTypes';
import { LinkTarget } from './Fields/LinkTarget';
import { useForms } from './FormsContext';

const defaultFieldTypes = {
  ...fieldTypes,
  text: (props: React.ComponentProps<typeof UI.Forms.Controlled.TextInput>) => {
    const {TextInput} = useForms();
    return <TextInput {...props} />;
  },
  url: (props: React.ComponentProps<typeof UI.Forms.Controlled.TextInput>) => {
    const {TextInput} = useForms();
    return <TextInput {...props} type="url" />;
  },
  number: (props: React.ComponentProps<typeof UI.Forms.Controlled.TextInput>) => {
    const {TextInput} = useForms();
    return <TextInput {...props} type="number" />;
  },
  ['rich-text']: (props: React.ComponentProps<typeof UI.Forms.Controlled.TextArea>) => {
    const {TextArea} = useForms();
    return <TextArea {...props} />;
  },
  ['long-text']: (props: React.ComponentProps<typeof UI.Forms.Controlled.TextArea>) => {
    const {TextArea} = useForms();
    return <TextArea {...props} />;
  },
  ['select']: (props: React.ComponentProps<typeof UI.Forms.Controlled.Select>) => {
    const {Select} = useForms();
    return <Select {...props} />;
  },
  ['link-target']: LinkTarget,
  namespace: ({name, label, fields, children}: React.PropsWithChildren<ConfigField & {fields: ConfigField[]}>) => {
    const Forms = useForms();
    return <CollapsibleFieldset legend={label}>
      <Forms.NameSpace name={name}>
        <EditorFields fields={fields} />
      </Forms.NameSpace>
      {children}
    </CollapsibleFieldset>;
  },
};

export const EditorFieldTypeContext = React.createContext<Record<string, React.ComponentType<any>>>(
  defaultFieldTypes
);

export function ExtendEditorTypes({fields, children}: React.PropsWithChildren<{
  fields: Record<string, React.ComponentType<any>>;
}>) {
  const existing = React.useContext(EditorFieldTypeContext);

  return <EditorFieldTypeContext.Provider value={{...existing, ...fields}}>
    {children}
  </EditorFieldTypeContext.Provider>;
}

export function EditorFields({fields}: {fields: ConfigField[]}) {
  return <>
    {fields.map(field => <EditorField key={field.name} {...field} />)}
  </>;
}

export function EditorField({type, ...field}: React.PropsWithChildren<ConfigField>) {
  const Field = React.useContext(EditorFieldTypeContext)[type];
  if (!Field) return <pre>{JSON.stringify({type, field}, null, 2)}</pre>;
  return <Field {...field} />;
}
