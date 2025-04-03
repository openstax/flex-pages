import React from 'react';
import * as UI from '@openstax/ui-components';
import type { ConfigField } from '@openstax/flex-page-renderer';
import * as fieldTypes from './FieldTypes';
import { LinkTarget } from './Fields/LinkTarget';
import { CollapsibleFieldset } from './CollapsibleFieldset';

const defaultFieldTypes = {
  ...fieldTypes,
  text: UI.Forms.Controlled.TextInput,
  url: (props: React.ComponentProps<typeof UI.Forms.Controlled.TextInput>) =>
    <UI.Forms.Controlled.TextInput {...props} type="url" />,
  number: (props: React.ComponentProps<typeof UI.Forms.Controlled.TextInput>) =>
    <UI.Forms.Controlled.TextInput {...props} type="number" />,
  ['link-target']: LinkTarget,
  ['rich-text']: UI.Forms.Controlled.TextArea,
  ['long-text']: UI.Forms.Controlled.TextArea,
  select: UI.Forms.Controlled.Select,
  namespace: ({name, label, fields, children}: React.PropsWithChildren<ConfigField & {fields: ConfigField[]}>) =>
    <CollapsibleFieldset legend={label}>
      <UI.Forms.Controlled.NameSpace name={name}>
        <EditorFields fields={fields} />
      </UI.Forms.Controlled.NameSpace>
      {children}
    </CollapsibleFieldset>
  ,
}

export const EditorFieldTypeContext = React.createContext<Record<string, React.ComponentType<any>>>(
  defaultFieldTypes
);

export function ExtendEditorTypes({fields, children}: React.PropsWithChildren<{
  fields: Record<string, React.ComponentType<any>>
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
