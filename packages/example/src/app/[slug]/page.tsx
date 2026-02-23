import { getPageSlugs, getPageData } from '../../lib/pages';
import { FlexPage } from '../../components/FlexPage';

export function generateStaticParams() {
  return getPageSlugs().map(slug => ({ slug }));
}

export default function DocPage({ params }: { params: { slug: string } }) {
  const pageData = getPageData(params.slug);
  return <FlexPage data={pageData} />;
}
