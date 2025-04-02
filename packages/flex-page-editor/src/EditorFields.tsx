import React from 'react';

export function EditorFields({fields}: {fields: ConfigField[]}) {
  return <>
      {fields.map(field => <EditorField key={field.name} field={field} />)}
  </>;
}

export function EditorField({field}: {field: ConfigField}) {
  const Field = React.useContext(EditorFieldContext)[field.type];
  if (!Field) return <pre>{JSON.stringify(field, null, 2)}</pre>;
  return <Field {...field} />;
}
