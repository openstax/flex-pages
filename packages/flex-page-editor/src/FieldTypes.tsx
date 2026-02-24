import { EditorField, EditorFields } from './EditorFields';
import type { ConfigField } from '@openstax/flex-page-renderer';
import React from 'react';
import { CollapsibleFieldset } from './CollapsibleFieldset';
import { BlockContext } from './BlockContext';
import { useForms } from './FormsContext';

const DisplayBlockForm = ({children, label}: React.PropsWithChildren<{label?: string}>) => {
  const formState = useForms().useFormHelpers();
  const data = formState.data;

  const config = React.useContext(BlockContext)[data.type]?.blockConfig;
  if (!config) return <pre>{JSON.stringify(data, null, 2)}</pre>;

  return config.field
    ? <><EditorField {...config.field} label={label ?? config.label} name="value" />{children}</>
    : <EditorField label={label ?? config.label} children={children} name="value" type="namespace" fields={config.fields || []} />
  ;
}

const AddBlock = ({categories}: {categories: string[]}) => {
  const listHelpers = useForms().useFormListHelpers();
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

// copied from ui-components/src/components/forms/controlled/hooks.ts
const randomId = () => window.crypto.getRandomValues(new Uint32Array(1))[0].toString(16)

export const block = ({name, label, types, categories}: {name: string; label: string; types?: string[]; categories?: string[]}) => {
  const Forms = useForms();
  const formState = Forms.useFormHelpers();
  const value = formState.data[name];
  const setValue = formState.setInput.field(name);
  const blocks = Object.entries(React.useContext(BlockContext)).filter(
    ([, definition]) => (!categories || definition.blockConfig.categories.find(s => categories.includes(s)))
      && (!types || types.includes(definition.blockConfig.type))
  );

  if (value) {
    return <Forms.NameSpace name={name}>
      <DisplayBlockForm label={label} />
    </Forms.NameSpace>;
  }

  if (blocks.length === 1) {
    return <button type="button" onClick={
      () => setValue({type: blocks[0][1].blockConfig.type, id: randomId()})
    }>Add {blocks[0][1].blockConfig.label}</button>;
  }

  return <div>add a:
    <ul>{blocks.map(([key, {blockConfig}]) =>
      <li key={key}><button type="button" onClick={
        () => setValue({type: key, id: randomId()})
      }>{blockConfig.label}</button></li>
    )}</ul>
  </div>;
};

const ListItemControls = () => {
  const Forms = useForms();
  const formState = Forms.useFormHelpers();
  const listHelpers = Forms.useFormListHelpers();
  const index = listHelpers.data.indexOf(formState.data as any);

  const moveUp = React.useCallback(() => {
    const newList = [...listHelpers.data];
    newList.splice(index - 1, 0, newList.splice(index, 1)[0]);
    listHelpers.setData(newList);
  }, [index, listHelpers.data, listHelpers.setData]);

  const moveDown = React.useCallback(() => {
    const newList = [...listHelpers.data];
    newList.splice(index + 1, 0, newList.splice(index, 1)[0]);
    listHelpers.setData(newList);
  }, [index, listHelpers.data, listHelpers.setData]);

  return <div>
    <button
      onClick={moveUp}
      disabled={index < 1}
      type="button"
    >
      move up
    </button>
    <button
      onClick={moveDown}
      disabled={index >= listHelpers.data.length - 1}
      type="button"
    >
      move down
    </button>
  </div>;
};

export const blocks = ({name, label, categories}: {name: string; label?: string; categories: string[]}) => {
  const Forms = useForms();
  const inner = <Forms.List name={name}>
    <Forms.ListItems>
      <DisplayBlockForm>
        <Forms.ListRecordRemoveButton>
          remove block
        </Forms.ListRecordRemoveButton>
        <ListItemControls />
      </DisplayBlockForm>
    </Forms.ListItems>
    <AddBlock categories={categories} />
  </Forms.List>;

  return label ? <CollapsibleFieldset legend={label}>{inner}</CollapsibleFieldset> : inner;
};

const DisplayConfigForm = ({configs}: {configs: ConfigField[]}) => {
  const formState = useForms().useFormHelpers();
  const data = formState.data;
  const config = configs.find(c => c.name === data.type)
  if (!config) return <pre>{JSON.stringify(data, null, 2)}</pre>;

  return <EditorField {...config} name="value" />;
};

const AddConfig = ({name, configs}: {name: string, configs: ConfigField[]}) => {
  const Forms = useForms();
  const formState = Forms.useFormHelpers();
  const listHelpers = Forms.useFormListHelpers();
  const addedConfigs = formState.data[name] || [];
  const availableConfigs = configs.filter(c => !addedConfigs.find((s: any) => s.type === c.name));

  if (availableConfigs.length < 1) return null;

  return <ul>{availableConfigs.map(c =>
    <li key={c.name}><button type="button" onClick={
      () => listHelpers.addRecord({type: c.name})
    }>{c.label}</button></li>
  )}</ul>;
};

export const configs = ({name, label, configs}: ConfigField & {configs: ConfigField[]}) => {
  const Forms = useForms();
  return <CollapsibleFieldset legend={label}>
    <Forms.List name={name}>
      <Forms.ListItems>
        <DisplayConfigForm configs={configs} />
        <Forms.ListRecordRemoveButton>
          remove config
        </Forms.ListRecordRemoveButton>
      </Forms.ListItems>
      <AddConfig name={name} configs={configs} />
    </Forms.List>
  </CollapsibleFieldset>;
};

const AddListItem = ({name, max}: {name: string, max?: number}) => {
  const Forms = useForms();
  const formState = Forms.useFormHelpers();
  const listHelpers = Forms.useFormListHelpers();
  const items = formState.data[name] || [];

  if (max && items.length > max) return null;

  return <button type="button" onClick={
    () => listHelpers.addRecord()
  }>add item</button>;
};
export const list = ({name, label, max, fields}: ConfigField & {max?: number, fields: ConfigField[]}) => {
  const Forms = useForms();
  return <CollapsibleFieldset legend={label}>
    <Forms.List name={name}>
      <Forms.ListItems>
        <EditorFields fields={fields} />
        <Forms.ListRecordRemoveButton>
          remove item
        </Forms.ListRecordRemoveButton>
      </Forms.ListItems>
      <AddListItem name={name} max={max} />
    </Forms.List>
  </CollapsibleFieldset>;
};
