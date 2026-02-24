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
import styles from './EditorPage.module.css';
import { TokenInput } from './TokenInput';

const fieldTypes = {
  ...quillExtensions({Forms: UI.Forms.Controlled}),
  ...selectExtensions({Forms: UI.Forms.Controlled}),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PageData = {page: any; sha: string};

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
      .then(({page, sha}) => setState(fetchSuccess({page, sha})))
      .catch((err: Error) => setState(previous => fetchError(err.message, previous)));
  }, [slug, token, state]);

  const onSubmit = React.useCallback((data: UI.Forms.Controlled.AbstractFormData) => {
    if (slug && token && stateHasData(state)) {
      setState(previous => fetchLoading(previous));
      savePage(slug, data.page, state.data.sha, token)
        .then(({sha}) => setState(fetchSuccess({page: data.page, sha})))
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
            {/* @ts-expect-error ui-components Form types don't resolve correctly with TS5 */}
            <UI.Forms.Controlled.Form
              state={state.data.page ? fetchSuccess({page: state.data.page}) : fetchSuccess({})}
              onSubmit={onSubmit}
            >
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
