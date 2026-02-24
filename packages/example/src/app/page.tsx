import { FlexPage } from '../components/FlexPage';
import { getPageData } from '../lib/pages';

const data = getPageData('home');

export const metadata = data?.metadata ?? {};

export default function Page() {
  return <FlexPage data={data?.page} />;
}
