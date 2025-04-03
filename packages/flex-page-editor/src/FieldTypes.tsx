import { EditorField, EditorFields, EditorFieldTypeContext } from './EditorFields';
import type { ConfigField } from '@openstax/flex-page-renderer';
import React from 'react';
import { CollapsibleFieldset } from './CollapsibleFieldset';
import { BlockContext } from '@openstax/flex-page-renderer/ContentBlockRoot';
import * as UI from '@openstax/ui-components';

const DisplayBlockForm = ({children, label}: React.PropsWithChildren<{label?: string}>) => {
  const formState = UI.Forms.Controlled.useFormHelpers();
  const data = formState.data;

  const config = React.useContext(BlockContext)[data.type]?.blockConfig;
  if (!config) return <pre>{JSON.stringify(data, null, 2)}</pre>;

  return config.field
    ? <><EditorField {...config.field} label={label ?? config.label} name="value" />{children}</>
    : <EditorField label={label ?? config.label} children={children} name="value" type="namespace" fields={config.fields || []} />
  ;
}

const AddBlock = ({categories}: {categories: string[]}) => {
  const listHelpers = UI.Forms.Controlled.useFormListHelpers();
  const blocks = Object.entries(React.useContext(BlockContext))
    .filter(([, definition]) => definition.blockConfig.categories.find(s => categories.includes(s)));

  return <div>add a:
    <ul>{blocks.map(([key, {blockConfig}]) =>
      <li key={key}><button type="button" onClick={
        () => listHelpers.addRecord({type: key})
      }>{blockConfig.label}</button></li>
    )}</ul>
  </div>;
};

export const block = ({name, label, types, categories}: {name: string; label: string; types?: string[]; categories?: string[]}) => {
  const formState = UI.Forms.Controlled.useFormHelpers();
  const value = formState.data[name];
  const setValue = formState.setInput.field(name);
  const blocks = Object.entries(React.useContext(BlockContext)).filter(
    ([, definition]) => (!categories || definition.blockConfig.categories.find(s => categories.includes(s)))
      && (!types || types.includes(definition.blockConfig.type))
  );

  if (value) {
    return <UI.Forms.Controlled.NameSpace name={name}>
      <DisplayBlockForm label={label} />
    </UI.Forms.Controlled.NameSpace>;
  }

  if (blocks.length === 1) {
    return <button type="button" onClick={
      () => setValue({type: blocks[0][1].blockConfig.type})
    }>Add {blocks[0][1].blockConfig.label}</button>;
  }

  return <div>add a:
    <ul>{blocks.map(([key, {blockConfig}]) =>
      <li key={key}><button type="button" onClick={
        () => setValue({type: key})
      }>{blockConfig.label}</button></li>
    )}</ul>
  </div>;
};

export const blocks = ({name, label, categories}: {name: string; label?: string; categories: string[]}) => {
  const inner = <UI.Forms.Controlled.List name={name}>
    <UI.Forms.Controlled.ListItems>
      <DisplayBlockForm>
        <UI.Forms.Controlled.ListRecordRemoveButton>
          remove block
        </UI.Forms.Controlled.ListRecordRemoveButton>
      </DisplayBlockForm>
    </UI.Forms.Controlled.ListItems>
    <AddBlock categories={categories} />
  </UI.Forms.Controlled.List>;

  return label ? <CollapsibleFieldset legend={label}>{inner}</CollapsibleFieldset> : inner;
};

const DisplayConfigForm = ({configs}: {configs: ConfigField[]}) => {
  const formState = UI.Forms.Controlled.useFormHelpers();
  const data = formState.data;
  const config = configs.find(c => c.name === data.type)
  if (!config) return <pre>{JSON.stringify(data, null, 2)}</pre>;

  return <EditorField {...config} name="value" />;
};
const AddConfig = ({name, configs}: {name: string, configs: ConfigField[]}) => {
  const formState = UI.Forms.Controlled.useFormHelpers();
  const addedConfigs = formState.data[name] || [];
  const listHelpers = UI.Forms.Controlled.useFormListHelpers();
  const availableConfigs = configs.filter(c => !addedConfigs.find((s: any) => s.type === c.name));

  if (availableConfigs.length < 1) return null;

  return <ul>{availableConfigs.map(c =>
    <li key={c.name}><button type="button" onClick={
      () => listHelpers.addRecord({type: c.name})
    }>{c.label}</button></li>
  )}</ul>;
};

export const configs = ({name, label, configs}: ConfigField & {configs: ConfigField[]}) => {
  return <CollapsibleFieldset legend={label}>
    <UI.Forms.Controlled.List name={name}>
      <UI.Forms.Controlled.ListItems>
        <DisplayConfigForm configs={configs} />
        <UI.Forms.Controlled.ListRecordRemoveButton>
          remove config
        </UI.Forms.Controlled.ListRecordRemoveButton>
      </UI.Forms.Controlled.ListItems>
      <AddConfig name={name} configs={configs} />
    </UI.Forms.Controlled.List>
  </CollapsibleFieldset>;
};

const AddListItem = ({name, max}: {name: string, max?: number}) => {
  const formState = UI.Forms.Controlled.useFormHelpers();
  const items = formState.data[name] || [];
  const listHelpers = UI.Forms.Controlled.useFormListHelpers();

  if (max && items.length > max) return null;

  return <button type="button" onClick={
    () => listHelpers.addRecord()
  }>add item</button>;
};
export const list = ({name, label, max, fields}: ConfigField & {max?: number, fields: ConfigField[]}) => {
  return <CollapsibleFieldset legend={label}>
    <UI.Forms.Controlled.List name={name}>
      <UI.Forms.Controlled.ListItems>
        <EditorFields fields={fields} />
        <UI.Forms.Controlled.ListRecordRemoveButton>
          remove item
        </UI.Forms.Controlled.ListRecordRemoveButton>
      </UI.Forms.Controlled.ListItems>
      <AddListItem name={name} max={max} />
    </UI.Forms.Controlled.List>
  </CollapsibleFieldset>;
};

export const number = (props: any) => {
  const { text: Text } = React.useContext(EditorFieldTypeContext);
  return <Text type="number" {...props} />
};
