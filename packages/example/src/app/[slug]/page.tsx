import { notFound } from 'next/navigation';
import { FlexPage } from '../../components/FlexPage';
import { getPageData, getPageSlugs } from '../../lib/pages';

export function generateStaticParams() {
  return getPageSlugs().map(slug => ({ slug }));
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pageData = getPageData(slug);
  if (!pageData) notFound();
  return <FlexPage data={pageData} />;
}
