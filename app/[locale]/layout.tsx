import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import RootDocument from '@/components/RootDocument';
import { DEFAULT_LOCALE, isLocale, prefixedLocales } from '@/app/i18n/locales';
import { baseMetadata } from '@/app/i18n/metadata';

export const dynamicParams = false;

export function generateStaticParams() {
  return prefixedLocales().map((locale) => ({ locale }));
}

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: '#855b3e',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === DEFAULT_LOCALE) notFound();
  return <RootDocument locale={locale}>{children}</RootDocument>;
}
