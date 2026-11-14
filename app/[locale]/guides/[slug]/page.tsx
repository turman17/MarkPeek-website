import type { Metadata } from 'next';
import GuidePage from '@/components/pages/GuidePage';
import { getGuides } from '@/app/i18n';
import { guideMetadata } from '@/app/i18n/metadata';
import { prefixedLocales, type Locale } from '@/app/i18n/locales';

type Params = Promise<{ locale: Locale; slug: string }>;

export function generateStaticParams() {
  return prefixedLocales().flatMap((locale) => getGuides(locale).map((g) => ({ locale, slug: g.slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  return guideMetadata(locale, slug);
}

export default async function Guide({ params }: { params: Params }) {
  const { locale, slug } = await params;
  return <GuidePage locale={locale} slug={slug} />;
}
