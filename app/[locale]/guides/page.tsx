import type { Metadata } from 'next';
import GuidesIndexPage from '@/components/pages/GuidesIndexPage';
import { guidesIndexMetadata } from '@/app/i18n/metadata';
import type { Locale } from '@/app/i18n/locales';

type Params = Promise<{ locale: Locale }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  return guidesIndexMetadata(locale);
}

export default async function GuidesIndex({ params }: { params: Params }) {
  const { locale } = await params;
  return <GuidesIndexPage locale={locale} />;
}
