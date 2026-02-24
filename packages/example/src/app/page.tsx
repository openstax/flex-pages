import { FlexPage } from '../components/FlexPage';
import { getPageData } from '../lib/pages';

export default function Page() {
  const pageData = getPageData('home');
  return <FlexPage data={pageData} />;
}
