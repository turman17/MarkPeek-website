import type { Metadata } from 'next';
import { BASE_PATH, SITE_URL } from '@/app/site';
import { getGuide, getSiteCopy } from './index';
import { LOCALES, OG_LOCALES, languageAlternates, localeUrl, type Locale } from './locales';

/** 1200x630 card rendered by scripts/generate-og.mjs, e.g. ogCard('de', 'home') */
function ogCard(locale: Locale, name: string, alt: string) {
  return { url: `${SITE_URL}assets/og/${locale}/${name}.jpg`, width: 1200, height: 630, alt };
}

/** Icons, manifest and referrer policy shared by every page. */
export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  referrer: 'strict-origin-when-cross-origin',
  robots: { index: true, follow: true },
  // Site paths, not absolute URLs, so icons also load on localhost and preview builds
  icons: {
    icon: [
      { url: `${BASE_PATH}/favicon.ico`, sizes: '48x48 32x32 16x16', type: 'image/x-icon' },
      { url: `${BASE_PATH}/assets/favicon-16.png`, sizes: '16x16', type: 'image/png' },
      { url: `${BASE_PATH}/assets/favicon-32.png`, sizes: '32x32', type: 'image/png' },
      { url: `${BASE_PATH}/assets/icon-192.png`, sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: `${BASE_PATH}/assets/apple-touch-icon.png`, sizes: '180x180', type: 'image/png' }],
  },
  manifest: `${BASE_PATH}/site.webmanifest`,
};

function alternateLocales(locale: Locale): string[] {
  return LOCALES.filter((l) => l !== locale).map((l) => OG_LOCALES[l]);
}

type PageMeta = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  ogDescription: string;
  image: { url: string; width: number; height: number; alt: string };
  article?: { publishedTime: string; modifiedTime: string };
};

function pageMetadata(m: PageMeta): Metadata {
  const url = localeUrl(m.locale, m.path);
  const others = alternateLocales(m.locale);
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: url, languages: languageAlternates(m.path) },
    openGraph: {
      title: m.title,
      description: m.ogDescription,
      url,
      siteName: 'MarkPeek',
      locale: OG_LOCALES[m.locale],
      ...(others.length ? { alternateLocale: others } : {}),
      images: [m.image],
      ...(m.article ? { type: 'article', ...m.article } : { type: 'website' }),
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title,
      description: m.ogDescription,
      images: [m.image.url],
    },
  };
}

export function homeMetadata(locale: Locale): Metadata {
  const c = getSiteCopy(locale).home;
  return pageMetadata({
    locale,
    path: '',
    title: c.metaTitle,
    description: c.metaDescription,
    ogDescription: c.ogDescription,
    image: ogCard(locale, 'home', c.ogImageAlt),
  });
}

export function guidesIndexMetadata(locale: Locale): Metadata {
  const c = getSiteCopy(locale).guidesIndex;
  return pageMetadata({
    locale,
    path: 'guides/',
    title: c.metaTitle,
    description: c.metaDescription,
    ogDescription: c.ogDescription,
    image: ogCard(locale, 'guides', c.ogImageAlt),
  });
}

export function guideMetadata(locale: Locale, slug: string): Metadata {
  const guide = getGuide(locale, slug);
  if (!guide) return {};
  return pageMetadata({
    locale,
    path: `guides/${guide.slug}/`,
    title: guide.metaTitle,
    description: guide.description,
    ogDescription: guide.description,
    image: ogCard(locale, guide.slug, guide.title),
    article: { publishedTime: guide.datePublished, modifiedTime: guide.dateModified },
  });
}
