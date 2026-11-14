import GuideList from '@/components/GuideList';
import SiteFooter from '@/components/SiteFooter';
import SiteNav from '@/components/SiteNav';
import { getGuides, getSiteCopy } from '@/app/i18n';
import { localeHref, type Locale } from '@/app/i18n/locales';

export default function GuidesIndexPage({ locale }: { locale: Locale }) {
  const c = getSiteCopy(locale).guidesIndex;
  return (
    <>
      <SiteNav locale={locale} path="/guides/" />
      <main className="article">
        <nav className="crumbs" aria-label="Breadcrumb">
          <a href={localeHref(locale, '/')}>MarkPeek</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{c.breadcrumb}</span>
        </nav>
        <header className="article-head">
          <h1>{c.title}</h1>
          <p className="lede">{c.lede}</p>
        </header>
        <GuideList guides={getGuides(locale)} locale={locale} headingLevel="h2" />
      </main>
      <SiteFooter locale={locale} path="/guides/" />
    </>
  );
}
