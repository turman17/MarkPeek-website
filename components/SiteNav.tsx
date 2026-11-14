import LangSwitcher from '@/components/LangSwitcher';
import { getSiteCopy } from '@/app/i18n';
import { localeHref, type Locale } from '@/app/i18n/locales';
import { BASE_PATH } from '@/app/site';

/** `path` is the current page relative to the locale root, e.g. '/', '/guides/', '/guides/some-slug/'. */
export default function SiteNav({ locale, path }: { locale: Locale; path: string }) {
  const c = getSiteCopy(locale).nav;
  const home = localeHref(locale, '/');
  return (
    <nav className="nav" aria-label={c.ariaLabel}>
      <div className="nav-inner">
        <a className="brand" href={home}>
          <img src={`${BASE_PATH}/assets/favicon-64.png`} alt="" width={30} height={30} />
          <span>MarkPeek</span>
        </a>
        <div className="nav-links">
          <a href={`${home}#what`} className="nav-link nav-link-secondary">{c.what}</a>
          <a href={`${home}#formats`} className="nav-link nav-link-secondary">{c.formats}</a>
          <a href={`${home}#themes`} className="nav-link nav-link-secondary">{c.themes}</a>
          <a href={localeHref(locale, '/guides/')} className="nav-link">{c.guides}</a>
          <a href={`${home}#faq`} className="nav-link nav-link-secondary">{c.faq}</a>
          <LangSwitcher locale={locale} path={path} />
          <a href={`${home}#download`} className="nav-cta">{c.download}</a>
        </div>
      </div>
    </nav>
  );
}
