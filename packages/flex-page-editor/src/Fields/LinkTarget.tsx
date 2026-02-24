import React from 'react';
import { EditorField, EditorFields } from '../EditorFields';
import type { ConfigField } from '@openstax/flex-page-renderer';
import { CollapsibleFieldset } from '../CollapsibleFieldset';
import { ActionContext, RouteContext } from '@openstax/flex-page-renderer/FlexPageContextProvider';
import { useForms } from '../FormsContext';

const LinkTargetFields = () => {
  const actions = React.useContext(ActionContext);
  const routes = React.useContext(RouteContext);
  const Forms = useForms();
  const formState = Forms.useFormHelpers();
  const value = formState.data;
  const type = value?.type;

  const actionsEntries = Object.entries(actions);
  const routesEntries = Object.entries(routes);

  const actionFields = actions[value?.value]?.fields;
  const routeFields = routes[value?.value]?.fields;

  return <>
    <EditorField required name="type" label="Link Type" type="select" options={[
      {label: 'External URL', value: 'external'},
      {label: 'Internal URL', value: 'internal'},
      {label: 'Anchor', value: 'anchor'},
      ...(actionsEntries.length > 0 ? [{label: 'Action', value: 'action'}] : []),
      ...(routesEntries.length > 0 ? [{label: 'Route', value: 'route'}] : []),
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
        actionsEntries.map(([value, {label}]) => ({value, label}))
      } />
    : null}
    {type === 'action' && actionFields ?
      <Forms.NameSpace name="params">
        <EditorFields fields={actionFields} />
      </Forms.NameSpace>
    : null}

    {type === 'route' ?
      <EditorField required name="value" label="Route" type="select" options={
        routesEntries.map(([value, {label}]) => ({value, label}))
      } />
    : null}
    {type === 'route' && routeFields ?
      <Forms.NameSpace name="params">
        <EditorFields fields={routeFields} />
      </Forms.NameSpace>
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
