import { ContentBlockRoot } from '@openstax/flex-page-renderer/ContentBlockRoot';
import * as clientBlocks from '../blocks.client';
import * as serverBlocks from '../blocks.server';
import { Link } from '../components.client';
import { FlexPageContextProvider } from './FlexPageContextProvider';

const allBlocks = { ...serverBlocks, ...clientBlocks };
// Built here on the server: a plain object holding the Link *client reference*.
// (A 'use client' module can only expose components as references, not value
// objects, so the hash is assembled on the server side.)
const components = { Link };

export const FlexPage = ({ data }: { data: any }) => (
  <FlexPageContextProvider>
    <ContentBlockRoot blocks={allBlocks} data={data} components={components} />
  </FlexPageContextProvider>
);
