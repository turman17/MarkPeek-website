import type { Guide } from '@/app/guides/content';
import { GUIDES } from '@/app/guides/content';
import { GUIDES_DE } from '@/app/guides/content.de';
import { GUIDES_ES } from '@/app/guides/content.es';
import { GUIDES_FR } from '@/app/guides/content.fr';
import { GUIDES_JA } from '@/app/guides/content.ja';
import type { Locale } from './locales';
import { SITE_DE } from './site.de';
import { SITE_EN } from './site.en';
import { SITE_ES } from './site.es';
import { SITE_FR } from './site.fr';
import { SITE_JA } from './site.ja';
import type { SiteCopy } from './types';

const SITE: Record<Locale, SiteCopy> = { en: SITE_EN, de: SITE_DE, fr: SITE_FR, es: SITE_ES, ja: SITE_JA };
const GUIDES_BY_LOCALE: Record<Locale, Guide[]> = { en: GUIDES, de: GUIDES_DE, fr: GUIDES_FR, es: GUIDES_ES, ja: GUIDES_JA };

export function getSiteCopy(locale: Locale): SiteCopy {
  return SITE[locale];
}

export function getGuides(locale: Locale): Guide[] {
  return GUIDES_BY_LOCALE[locale];
}

export function getGuide(locale: Locale, slug: string): Guide | undefined {
  return GUIDES_BY_LOCALE[locale].find((g) => g.slug === slug);
}
