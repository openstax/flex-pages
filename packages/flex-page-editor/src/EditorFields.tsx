import React from 'react';
import * as UI from '@openstax/ui-components';
import type { ConfigField } from '@openstax/flex-page-renderer';
import * as fieldTypes from './FieldTypes';
import { CollapsibleFieldset } from './CollapsibleFieldset';

const defaultFieldTypes = {
  ...fieldTypes,
  text: UI.Forms.Controlled.TextInput,
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
