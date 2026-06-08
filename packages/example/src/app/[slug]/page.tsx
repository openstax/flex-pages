import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FlexPage } from '../../components/FlexPage';
import { getPageByUrl, getPageUrls, pageMetadata } from '../../lib/pages';

export function generateStaticParams() {
  return getPageUrls().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = getPageByUrl(slug);
  if (!data) return {};
  return pageMetadata(data.metadata);
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pageData = getPageByUrl(slug);
  if (!pageData) notFound();
  return <FlexPage data={pageData.page} />;
}
