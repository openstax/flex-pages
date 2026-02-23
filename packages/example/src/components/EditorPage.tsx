import React from 'react';
import * as UI from '@openstax/ui-components';
import { fetchSuccess } from '@openstax/ts-utils/fetch';
import * as allBlocks from '@openstax/flex-page-renderer/blocks/index';
import { FlexBlockEditor } from '@openstax/flex-page-editor/Editor';
import { quillExtensions } from '@openstax/flex-page-editor-quill-extension';
import { selectExtensions } from '@openstax/flex-page-editor-select-extension';
import { Layout } from './Layout';
import { actions } from '../lib/actions';

const fieldTypes = {
  ...quillExtensions({Forms: UI.Forms.Controlled}),
  ...selectExtensions({Forms: UI.Forms.Controlled}),
};

const EditorPage = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const onSubmit = React.useCallback((data: UI.Forms.Controlled.AbstractFormData) => {
    const page = JSON.stringify(data.page);
    window.open(`${basePath}/?page=${encodeURIComponent(page)}`);
  }, [basePath]);

  return <Layout>
    <UI.NavBar logo />
    <h1>Create Page</h1>
    {/* @ts-expect-error ui-components Form types don't resolve correctly with TS5 */}
    <UI.Forms.Controlled.Form state={fetchSuccess({})} onSubmit={onSubmit}>
      <FlexBlockEditor
        blocks={allBlocks}
        actions={actions}
        fields={fieldTypes}
        type="flex_page"
        name="page"
        Forms={UI.Forms.Controlled}
      />
      <UI.Forms.Controlled.Buttons />
    </UI.Forms.Controlled.Form>
  </Layout>;
};

export default EditorPage;
