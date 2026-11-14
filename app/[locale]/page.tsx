import type { Metadata } from 'next';
import HomePage from '@/components/pages/HomePage';
import { homeMetadata } from '@/app/i18n/metadata';
import type { Locale } from '@/app/i18n/locales';

type Params = Promise<{ locale: Locale }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  return homeMetadata(locale);
}

export default async function Home({ params }: { params: Params }) {
  const { locale } = await params;
  return <HomePage locale={locale} />;
}
