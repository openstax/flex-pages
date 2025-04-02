import React from 'react';
import { createRoute, makeScreen } from "../core/services";
import * as allBlocks from '@openstax/flex-page-renderer/blocks/index';
import { Editor } from '@openstax/flex-page-editor/Editor';

export const EditorScreen = () => {
  return <>
    <h1>Create Page</h1>
    <Editor data={[]} blocks={allBlocks} />
  </>;
};

const pathPrefix = process.env.NODE_ENV === 'development' ?
  '/' : process.env.PUBLIC_URL;

export const editorScreen = createRoute({name: 'EditorScreen',
  path: pathPrefix + 'edit',
  handler: makeScreen(EditorScreen)
});

