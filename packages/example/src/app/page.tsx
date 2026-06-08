import { FlexPage } from '../components/FlexPage';
import { getHomePage, pageMetadata } from '../lib/pages';

const data = getHomePage();

export const metadata = data ? pageMetadata(data.metadata) : {};

export default function Page() {
  return <FlexPage data={data?.page} />;
}
