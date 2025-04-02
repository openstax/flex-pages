import { EditorField, EditorFieldTypeContext } from './EditorFields';
import type { ConfigField } from '@openstax/flex-page-renderer';
import React from 'react';
import { BlockContext } from '@openstax/flex-page-renderer/ContentBlockRoot';
import * as UI from '@openstax/ui-components';

const DisplayBlockForm = () => {
  const { formSection: FormSection } = React.useContext(EditorFieldTypeContext);
  const formState = UI.Forms.Controlled.useFormHelpers();
  const data = formState.data;

  const config = React.useContext(BlockContext)[data.type]?.blockConfig;
  if (!config) return <pre>{JSON.stringify(data, null, 2)}</pre>;

  return <FormSection>
    {config.type}
    {config.field
      ? <EditorField {...config.field} name="value" />
      : <EditorField name="value" type="namespace" fields={config.fields || []} />
    }
  </FormSection>;
}

const AddBlock = ({categories}: {categories: string[]}) => {
  const listHelpers = UI.Forms.Controlled.useFormListHelpers();
  const blocks = Object.entries(React.useContext(BlockContext))
    .filter(([, definition]) => definition.blockConfig.categories.find(s => categories.includes(s)));

  return <div>add a:
    <ul>{blocks.map(([key]) =>
      <li key={key}><button role="button" onClick={
        () => listHelpers.addRecord({type: key})
      }>{key}</button></li>
    )}</ul>
  </div>;
};

export const blocks = ({name, categories}: {name: string; categories: string[]}) => {
  const { list: List, listItems: ListItems } = React.useContext(EditorFieldTypeContext);
  return <List name={name}>
    <ListItems>
      <DisplayBlockForm />
    </ListItems>
    <AddBlock categories={categories} />
  </List>;
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

  return <div>add config:
    <ul>{configs.filter(c => !addedConfigs.find((s: any) => s.type === c.name)).map(c =>
      <li key={c.name}><button role="button" onClick={
        () => listHelpers.addRecord({type: c.name})
      }>{c.name}</button></li>
    )}</ul>
  </div>;
};

export const configs = ({name, configs}: {name: string, configs: ConfigField[]}) => {
  const { list: List, listItems: ListItems } = React.useContext(EditorFieldTypeContext);
  return <List name={name}>
    <ListItems>
      <DisplayConfigForm configs={configs} />
    </ListItems>
    <AddConfig name={name} configs={configs} />
  </List>;
};

export const number = (props: any) => {
  const { text: Text } = React.useContext(EditorFieldTypeContext);
  return <Text type="number" {...props} />
};
