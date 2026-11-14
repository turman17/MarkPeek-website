import type { Metadata } from 'next';
import GuidePage from '@/components/pages/GuidePage';
import { getGuides } from '@/app/i18n';
import { guideMetadata } from '@/app/i18n/metadata';

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getGuides('en').map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  return guideMetadata('en', slug);
}

export default async function Guide({ params }: { params: Params }) {
  const { slug } = await params;
  return <GuidePage locale="en" slug={slug} />;
}
