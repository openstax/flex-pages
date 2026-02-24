import { getPageData } from '../lib/pages';
import { FlexPage } from '../components/FlexPage';

export default function Page() {
  const pageData = getPageData('home');
  return <FlexPage data={pageData} />;
}
