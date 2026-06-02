'use client';
import { CollapsibleFieldset } from '@openstax/flex-page-editor/CollapsibleFieldset';
import { EditorField, EditorFields } from '@openstax/flex-page-editor/EditorFields';
import { useForms } from '@openstax/flex-page-editor/FormsContext';
import type { ConfigField } from '@openstax/flex-page-renderer';
import { ActionContext } from '@openstax/flex-page-renderer/FlexPageContextProvider';
import React from 'react';
import type { PageListItem } from '../lib/github';
import { PAGE_ID_ROUTE } from '../lib/routes';

/*
 * App-specific override of the editor's `link-target` field (merged into the
 * editor's field-type map the same way the select extension overrides `select`).
 * It hides the generic route machinery: instead of a "Route" type + a route
 * select + a raw id field, it offers a "Page" type backed by a page picker.
 *
 * "Page" is the page-id route under the hood — type stays `route` and `value`
 * is fixed to PAGE_ID_ROUTE, so it writes the same shape the renderer/mapper
 * expect: { type: 'route', value: 'page-id', params: { id } }.
 *
 * The live page list arrives via PagesContext (filled by EditorPage from
 * GitHub). The picker itself reuses the `select` field type, so it renders with
 * the same fancy select as everything else.
 */
export const PagesContext = React.createContext<PageListItem[]>([]);

const PageLinkTargetFields = () => {
  const actions = React.useContext(ActionContext);
  const pages = React.useContext(PagesContext);
  const Forms = useForms();
  const formState = Forms.useFormHelpers();
  const value = formState.data;
  const type = value?.type;
  const setValue = formState.setInput.field('value');

  const actionsEntries = Object.entries(actions);
  const actionFields = actions[value?.value]?.fields;
  const pageOptions = pages.map(p => ({value: p.id, label: p.title || p.url || p.id}));

  // "Page" is the page-id route; there is only one, so pin the route value as
  // soon as the type is chosen and let the picker handle params.id.
  React.useEffect(() => {
    if (type === 'route' && value?.value !== PAGE_ID_ROUTE) setValue(PAGE_ID_ROUTE);
  }, [type, value?.value, setValue]);

  return <>
    <EditorField required name="type" label="Link Type" type="select" options={[
      {label: 'External URL', value: 'external'},
      {label: 'Internal URL', value: 'internal'},
      {label: 'Anchor', value: 'anchor'},
      ...(actionsEntries.length > 0 ? [{label: 'Action', value: 'action'}] : []),
      {label: 'Page', value: 'route'},
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
        actionsEntries.map(([actionValue, {label}]) => ({value: actionValue, label}))
      } />
    : null}
    {type === 'action' && actionFields ?
      <Forms.NameSpace name="params">
        <EditorFields fields={actionFields} />
      </Forms.NameSpace>
    : null}
    {type === 'route' ?
      <Forms.NameSpace name="params">
        <EditorField required name="id" label="Page" type="select" options={pageOptions}
          help={pages.length ? undefined : 'Loading pages…'} />
      </Forms.NameSpace>
    : null}
  </>;
};

export const PageLinkTarget = ({name, label}: ConfigField) => {
  const Forms = useForms();
  return <Forms.NameSpace name={name}>
    <CollapsibleFieldset legend={label}>
      <PageLinkTargetFields />
    </CollapsibleFieldset>
  </Forms.NameSpace>;
};

// Merge into the editor's field-types map to override the default link-target.
export const pageLinkExtension = {'link-target': PageLinkTarget};
