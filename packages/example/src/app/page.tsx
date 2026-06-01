import { FlexPage } from '../components/FlexPage';
import { getHomePage } from '../lib/pages';

const data = getHomePage();

export const metadata = data
  ? { title: data.metadata.title, description: data.metadata.description }
  : {};

export default function Page() {
  return <FlexPage data={data?.page} />;
}
