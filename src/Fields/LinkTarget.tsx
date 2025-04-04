import React from 'react';
import { EditorField } from '../EditorFields';
import type { ConfigField } from '@openstax/flex-page-renderer';
import { CollapsibleFieldset } from '../CollapsibleFieldset';
import { ActionContext } from '@openstax/flex-page-renderer/ContentBlockRoot';
import { useForms } from '../FormsContext';

const LinkTargetFields = () => {
  const actions = Object.entries(React.useContext(ActionContext));
  const formState = useForms().useFormHelpers();
  const value = formState.data;
  const type = value?.type;

  return <>
    <EditorField required name="type" label="Link Type" type="select" options={[
      {label: 'External', value: 'external'},
      {label: 'Internal', value: 'internal'},
      {label: 'Anchor', value: 'anchor'},
      ...(actions.length > 0 ? [{label: 'Action', value: 'action'}] : [])
    ]} />
    {type === 'external' ?
      <EditorField required name="value" label="Link Target" type="url" />
    : null}
    {type === 'internal' ?
      <EditorField required name="value" label="Link Target" type="text" />
    : null}
    {type === 'anchor' ?
      <EditorField required name="value" label="Link Target" type="text" pattern="#\S+" help="The target anchor. eg `#my-cool-element-id`" />
    : null}
    {type === 'action' ?
      <EditorField required name="value" label="Action" type="select" options={
        actions.map(([value, {label}]) => ({value, label}))
      } />
    : null}
  </>
};

export const LinkTarget = ({name, label}: ConfigField) => {
  const Forms = useForms();
  return <Forms.NameSpace name={name}>
    <CollapsibleFieldset legend={label}>
      <LinkTargetFields />
    </CollapsibleFieldset>
  </Forms.NameSpace>
};
