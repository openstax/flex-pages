import React from 'react';
import * as UI from '@openstax/ui-components';
import {
  FetchState, FetchStateType, stateHasData, stateHasError,
  fetchSuccess, fetchLoading, fetchError, fetchIdle
} from '@openstax/ts-utils/fetch';
import * as allBlocks from '@openstax/flex-page-renderer/blocks/index';
import { FlexBlockEditor } from '@openstax/flex-page-editor/Editor';
import { quillExtensions } from '@openstax/flex-page-editor-quill-extension';
import { selectExtensions } from '@openstax/flex-page-editor-select-extension';
import { TokenInput } from './TokenInput';
import { actions } from '../lib/actions';
import { getToken, fetchPage, savePage } from '../lib/github';

const fieldTypes = {
  ...quillExtensions({Forms: UI.Forms.Controlled}),
  ...selectExtensions({Forms: UI.Forms.Controlled}),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PageData = {page: any; sha: string};

const EditorPage = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const slug = new URLSearchParams(window.location.search).get('slug');

  const [token, setToken] = React.useState<string | null>(getToken);
  const [state, setState] = React.useState<FetchState<PageData, string>>(
    slug ? fetchIdle() : fetchSuccess({page: undefined, sha: ''})
  );

  React.useEffect(() => {
    if (!slug || !token) return;
    if (state.type !== FetchStateType.IDLE) return;

    setState(previous => fetchLoading(previous));
    fetchPage(slug, token)
      .then(({page, sha}) => setState(fetchSuccess({page, sha})))
      .catch((err: Error) => setState(previous => fetchError(err.message, previous)));
  }, [slug, token, state]);

  const onSubmit = React.useCallback((data: UI.Forms.Controlled.AbstractFormData) => {
    const page = JSON.stringify(data.page);
    window.open(`${basePath}/?page=${encodeURIComponent(page)}`);

    if (slug && token && stateHasData(state)) {
      setState(previous => fetchLoading(previous));
      savePage(slug, data.page, state.data.sha, token)
        .then(({sha}) => setState(fetchSuccess({page: data.page, sha})))
        .catch((err: Error) => setState(previous => fetchError(err.message, previous)));
    }
  }, [basePath, slug, token, state]);

  if (slug && !token) {
    return <>
      <h1>Edit: {slug}</h1>
      <p>A GitHub token with repo access is required to load and save pages.</p>
      <TokenInput onTokenChange={setToken} />
    </>;
  }

  if (slug && !stateHasData(state)) {
    return <>
      <h1>Edit: {slug}</h1>
      {stateHasError(state)
        ? <>
            <p style={{color: 'red'}}>Error: {state.error}</p>
            <TokenInput onTokenChange={(t) => { setToken(t); setState(fetchIdle()); }} />
            <button type="button" onClick={() => setState(fetchIdle())}>Retry</button>
          </>
        : <p>Loading page data...</p>
      }
    </>;
  }

  const initialFormState = stateHasData(state) && state.data.page
    ? fetchSuccess({page: state.data.page})
    : fetchSuccess({});

  return <>
    <h1>{slug ? `Edit: ${slug}` : 'Create Page'}</h1>
    {slug && <TokenInput onTokenChange={setToken} />}
    {state.type === FetchStateType.LOADING && <p>Saving to GitHub...</p>}
    {stateHasError(state) && <p style={{color: 'red'}}>Save error: {state.error}</p>}
    {/* @ts-expect-error ui-components Form types don't resolve correctly with TS5 */}
    <UI.Forms.Controlled.Form state={initialFormState} onSubmit={onSubmit}>
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
  </>;
};

export default EditorPage;
