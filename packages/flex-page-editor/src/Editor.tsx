import React from 'react';
import { BlockContext, BlockComponents } from '@openstax/flex-page-renderer/ContentBlockRoot';
import { EditorFieldTypeContext } from './EditorFields';

export const EditorFormFields = ({name, blocks}: {name: string; blocks: BlockComponents<any>}) => {
  const { blocks: Blocks } = React.useContext(EditorFieldTypeContext);

  return <BlockContext.Provider value={blocks}>
    <Blocks name={name} categories={['structure']} />
  </BlockContext.Provider>
};
