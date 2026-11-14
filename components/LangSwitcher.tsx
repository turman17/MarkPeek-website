import { getSiteCopy } from '@/app/i18n';
import { LOCALES, LOCALE_NAMES, localeHref, type Locale } from '@/app/i18n/locales';

/** Header language menu. Renders nothing until a second locale exists. `path` is relative to the locale root. */
export default function LangSwitcher({ locale, path }: { locale: Locale; path: string }) {
  if (LOCALES.length < 2) return null;
  const title = getSiteCopy(locale).footer.language;
  return (
    <details className="lang">
      <summary aria-label={title} title={title}>
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.4">
          <circle cx="8" cy="8" r="6.5" />
          <path d="M1.5 8h13M8 1.5c2.2 2 2.2 11 0 13M8 1.5c-2.2 2-2.2 11 0 13" />
        </svg>
        <span>{locale.toUpperCase()}</span>
      </summary>
      <ul className="lang-menu">
        {LOCALES.map((l) => (
          <li key={l}>
            <a href={localeHref(l, path)} hrefLang={l} lang={l} {...(l === locale ? { 'aria-current': 'page' } : {})}>
              {LOCALE_NAMES[l]}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
