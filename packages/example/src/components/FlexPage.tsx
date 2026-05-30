import { ContentBlockRoot } from '@openstax/flex-page-renderer/ContentBlockRoot';
import * as blocks from '../blocks';
import { FlexPageContextProvider } from './FlexPageContextProvider';

export const FlexPage = ({ data }: { data: any }) => (
  <FlexPageContextProvider>
    <ContentBlockRoot blocks={blocks} data={data} />
  </FlexPageContextProvider>
);
