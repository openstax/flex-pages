import { getPageData } from '../lib/pages';
import { HomePage } from '../components/HomePage';

export default function Page() {
  const pageData = getPageData('home');
  return <HomePage pageData={pageData} />;
}
