import { quillExtensions } from '@openstax/flex-page-editor-quill-extension';
import { selectExtensions } from '@openstax/flex-page-editor-select-extension';
import { FlexBlockEditor } from '@openstax/flex-page-editor/Editor';
import * as allBlocks from '@openstax/flex-page-renderer/blocks/index';
import {
  fetchError, fetchIdle, fetchLoading, FetchState,
  FetchStateType, fetchSuccess, stateHasData, stateHasError
} from '@openstax/ts-utils/fetch';
import * as UI from '@openstax/ui-components';
import { notFound, useSearchParams } from 'next/navigation';
import React from 'react';
import { actions } from '../lib/actions';
import { fetchPage, getToken, savePage } from '../lib/github';
import type { PageMetadata } from '../lib/pages';
import styles from './EditorPage.module.css';
import { TokenInput } from './TokenInput';

const fieldTypes = {
  ...quillExtensions({Forms: UI.Forms.Controlled}),
  ...selectExtensions({Forms: UI.Forms.Controlled}),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PageData = {page: any; metadata: PageMetadata; sha: string};

const EditorPage = () => {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');
  if (!slug) notFound(); 

  const [token, setToken] = React.useState<string | null>(getToken);
  const [state, setState] = React.useState<FetchState<PageData, string>>(fetchIdle());

  React.useEffect(() => {
    if (!slug || !token) return;
    if (state.type !== FetchStateType.IDLE) return;

    setState(previous => fetchLoading(previous));
    fetchPage(slug, token)
      .then(({page, metadata, sha}) => setState(fetchSuccess({page, metadata, sha})))
      .catch((err: Error) => setState(previous => fetchError(err.message, previous)));
  }, [slug, token, state]);

  const onSubmit = React.useCallback((data: UI.Forms.Controlled.AbstractFormData) => {
    if (slug && token && stateHasData(state)) {
      setState(previous => fetchLoading(previous));
      savePage(slug, data.page, data.metadata, state.data.sha, token)
        .then(({sha}) => setState(fetchSuccess({page: data.page, metadata: data.metadata, sha})))
        .catch((err: Error) => setState(previous => fetchError(err.message, previous)));
    }
  }, [slug, token, state]);

  return <>
    <h1>Edit: {slug}</h1>
    {!token
      ? <>
          <p>A GitHub token with repo access is required to load and save pages.</p>
          <TokenInput onTokenChange={setToken} />
        </>
      : <>
          <TokenInput onTokenChange={(t) => { setToken(t); setState(fetchIdle()); }} />
          {stateHasError(state) && <p className={styles.error}>Error: {state.error}</p>}
          {state.type === FetchStateType.LOADING && <p>Loading...</p>}
          {stateHasData(state) && <>
            <UI.Forms.Controlled.Form
              state={state.data.page ? fetchSuccess({page: state.data.page, metadata: state.data.metadata}) : fetchSuccess({})}
              onSubmit={onSubmit}
            >
              <fieldset className={styles.metadata}>
                <legend>Page Metadata</legend>
                <UI.Forms.Controlled.NameSpace name="metadata">
                  <UI.Forms.Controlled.TextInput name="title" label="Title" />
                  <UI.Forms.Controlled.TextArea name="description" label="Description" />
                </UI.Forms.Controlled.NameSpace>
              </fieldset>
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
          </>}
        </>
    }
  </>;
};

export default EditorPage;
