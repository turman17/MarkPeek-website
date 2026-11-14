import { getSiteCopy } from '@/app/i18n';
import { LOCALES, LOCALE_NAMES, label, localeHref, type Locale } from '@/app/i18n/locales';
import { AUTHOR_URL, fillVersion } from '@/app/site';

/** `path` is the current page relative to the locale root. */
export default function SiteFooter({ locale, path }: { locale: Locale; path: string }) {
  const copy = getSiteCopy(locale);
  const c = copy.nav;
  const home = localeHref(locale, '/');
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>
          © 2026 MarkPeek · GPL-3.0 · {fillVersion(copy.footer.statusLine)} · {label(copy.footer.madeBy)}
          <a href={AUTHOR_URL} target="_blank" rel="noopener">turman17</a>
        </span>
        <span className="footer-links">
          <a href={`${home}#what`}>{c.what}</a>
          <a href={`${home}#formats`}>{c.formats}</a>
          <a href={`${home}#themes`}>{c.themes}</a>
          <a href={localeHref(locale, '/guides/')}>{c.guides}</a>
          <a href={`${home}#faq`}>{c.faq}</a>
        </span>
      </div>
      {LOCALES.length > 1 && (
        <nav className="footer-langs" aria-label={copy.footer.language}>
          {LOCALES.map((l) =>
            l === locale ? (
              <span key={l} lang={l} aria-current="true">{LOCALE_NAMES[l]}</span>
            ) : (
              <a key={l} href={localeHref(l, path)} hrefLang={l} lang={l}>{LOCALE_NAMES[l]}</a>
            ),
          )}
        </nav>
      )}
    </footer>
  );
}
