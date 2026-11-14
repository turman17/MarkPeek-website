import { BASE_PATH, SITE_URL } from '../site';

/**
 * Every locale the site is built for. Pages, sitemap and hreflang are all driven by this array.
 * To add a language: append it here, add its entries to the three records below, then add
 * site.<locale>.ts and guides/content.<locale>.ts and register them in app/i18n/index.ts.
 */
export const LOCALES = ['en', 'de', 'fr', 'es', 'ja'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  ja: '日本語',
};

export const LOCALE_TAGS: Record<Locale, string> = {
  en: 'en-US',
  de: 'de-DE',
  fr: 'fr-FR',
  es: 'es-ES',
  ja: 'ja-JP',
};

export const OG_LOCALES: Record<Locale, string> = {
  en: 'en_US',
  de: 'de_DE',
  fr: 'fr_FR',
  es: 'es_ES',
  ja: 'ja_JP',
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Site-relative href for a page, e.g. localeHref('de', '/guides/') gives '/MarkPeek-website/de/guides/'. */
export function localeHref(locale: Locale, path: string): string {
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return `${BASE_PATH}${prefix}${path}`;
}

/** Absolute URL for a page. `path` is relative to the site root without a leading slash, e.g. 'guides/'. */
export function localeUrl(locale: Locale, path: string): string {
  const prefix = locale === DEFAULT_LOCALE ? '' : `${locale}/`;
  return `${SITE_URL}${prefix}${path}`;
}

/** hreflang map for one page across every locale, with x-default pointing at English. */
export function languageAlternates(path: string): Record<string, string> {
  const map: Record<string, string> = {};
  for (const locale of LOCALES) map[locale] = localeUrl(locale, path);
  map['x-default'] = localeUrl(DEFAULT_LOCALE, path);
  return map;
}

export function formatDate(iso: string, locale: Locale): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(LOCALE_TAGS[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

/** A label followed by a value: adds a space unless the label already ends with a full-width colon (CJK). */
export function label(text: string): string {
  return text.endsWith('：') ? text : `${text} `;
}

/** Locales that get a /<locale>/ route. English lives at the root, so this is every other locale. */
export function prefixedLocales(): Locale[] {
  return LOCALES.filter((l) => l !== DEFAULT_LOCALE);
}
