import React from 'react';
import * as UI from '@openstax/ui-components';
import type { ConfigField } from '@openstax/flex-page-renderer';
import * as fieldTypes from './FieldTypes';

const defaultFieldTypes = {
  ...fieldTypes,
  form: UI.Forms.Controlled.Form,
  formSection: UI.Forms.Controlled.FormSection,
  list: UI.Forms.Controlled.List,
  listItems: UI.Forms.Controlled.ListItems,
  text: UI.Forms.Controlled.TextInput,
  namespace: ({name, fields}: {name: string; fields: ConfigField[]}) =>
    <UI.Forms.Controlled.NameSpace name={name}>
      <EditorFields fields={fields} />
    </UI.Forms.Controlled.NameSpace>,
}

export const EditorFieldTypeContext = React.createContext<Record<string, React.ComponentType<any>>>(
  defaultFieldTypes
);

export function EditorFields({fields}: {fields: ConfigField[]}) {
  return <>
      {fields.map(field => <EditorField key={field.name} {...field} />)}
  </>;
}

export function EditorField({type, ...field}: ConfigField) {
  const Field = React.useContext(EditorFieldTypeContext)[type];
  if (!Field) return <pre>{JSON.stringify(field, null, 2)}</pre>;
  return <Field {...field} />;
}
