import type { MetadataRoute } from 'next';
import { GUIDES } from './guides/content';
import { LOCALES, languageAlternates, localeUrl } from './i18n/locales';
import { SITE_UPDATED } from './site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '', lastModified: SITE_UPDATED },
    { path: 'guides/', lastModified: SITE_UPDATED },
    ...GUIDES.map((g) => ({ path: `guides/${g.slug}/`, lastModified: g.dateModified })),
  ];
  return pages.flatMap((p) =>
    LOCALES.map((locale) => ({
      url: localeUrl(locale, p.path),
      lastModified: p.lastModified,
      alternates: { languages: languageAlternates(p.path) },
    })),
  );
}
