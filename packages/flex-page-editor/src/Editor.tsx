import React from 'react';
import { fetchSuccess } from '@openstax/ts-utils/fetch';
import { ContentBlockRootHoc, BlockData } from '@openstax/flex-page-renderer/ContentBlockRoot';
import { EditorFieldTypeContext } from './EditorFields';

export const EditorDisplay = ({data}: {data: BlockData<any>}) => {
  const { form: Form, blocks: Blocks } = React.useContext(EditorFieldTypeContext);

  return <Form state={fetchSuccess(data)}>
    <Blocks name="blocks" categories={['structure']} />
  </Form>;
};

export const Editor = ContentBlockRootHoc(EditorDisplay);
