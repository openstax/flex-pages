'use client';
import * as allBlocks from '@openstax/flex-page-renderer/blocks/index';
import { ContentBlockRoot } from '@openstax/flex-page-renderer/ContentBlockRoot';
import { actions } from '../lib/actions';

export const FlexPage = ({ data }: { data: any }) => (
  <ContentBlockRoot actions={actions} blocks={allBlocks} data={data} />
);
