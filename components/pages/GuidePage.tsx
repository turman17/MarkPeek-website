import { notFound } from 'next/navigation';
import Rich from '@/components/Rich';
import SiteFooter from '@/components/SiteFooter';
import SiteNav from '@/components/SiteNav';
import { getGuide, getSiteCopy } from '@/app/i18n';
import { formatDate, label, localeHref, localeUrl, type Locale } from '@/app/i18n/locales';
import { AUTHOR_URL, BASE_PATH, SITE_URL, TESTED_VERSION, fillVersion } from '@/app/site';

export default function GuidePage({ locale, slug }: { locale: Locale; slug: string }) {
  const guide = getGuide(locale, slug);
  if (!guide) notFound();

  const copy = getSiteCopy(locale);
  const c = copy.guide;
  const url = localeUrl(locale, `guides/${guide.slug}/`);
  const related = guide.related
    .map((s) => getGuide(locale, s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        '@id': `${url}#article`,
        headline: guide.title,
        description: guide.description,
        url,
        mainEntityOfPage: url,
        image: `${SITE_URL}${guide.image.src}`,
        datePublished: guide.datePublished,
        dateModified: guide.dateModified,
        inLanguage: locale,
        author: { '@type': 'Person', name: 'turman17', url: AUTHOR_URL },
        about: { '@id': `${SITE_URL}#app` },
        isPartOf: { '@id': `${SITE_URL}#website` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'MarkPeek', item: localeUrl(locale, '') },
          { '@type': 'ListItem', position: 2, name: copy.guidesIndex.breadcrumb, item: localeUrl(locale, 'guides/') },
          { '@type': 'ListItem', position: 3, name: guide.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <SiteNav locale={locale} path={`/guides/${guide.slug}/`} />
      <main className="article">
        <nav className="crumbs" aria-label="Breadcrumb">
          <a href={localeHref(locale, '/')}>MarkPeek</a>
          <span aria-hidden="true">/</span>
          <a href={localeHref(locale, '/guides/')}>{copy.guidesIndex.breadcrumb}</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{guide.title}</span>
        </nav>

        <header className="article-head">
          <h1>{guide.title}</h1>
          <p className="ticker">
            <span className="file-chip">{guide.demo.from}</span>
            <span className="ticker-arrow" aria-hidden="true">→</span>
            <span className="ticker-to">{guide.demo.to}</span>
          </p>
          <p className="lede">{guide.lede}</p>
          <p className="article-meta">
            {label(c.updated)}<time dateTime={guide.dateModified}>{formatDate(guide.dateModified, locale)}</time> · {label(c.by)}
            <a href={AUTHOR_URL} target="_blank" rel="noopener">turman17</a> · {label(c.testedWith)}{TESTED_VERSION} {c.testedOn}
          </p>
        </header>

        <figure className="shot">
          <img
            src={`${BASE_PATH}/${guide.image.src}`}
            alt={guide.image.alt}
            width={guide.image.width}
            height={guide.image.height}
          />
        </figure>

        {guide.sections.map((s) => (
          <section className="article-section" key={s.heading}>
            <h2>{s.heading}</h2>
            {s.paras?.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {s.steps && (
              <ol>
                {s.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            )}
            {s.bullets && (
              <ul>
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
            {s.code && (
              <pre className="cmd">
                <code>{s.code}</code>
              </pre>
            )}
            {s.note && <p className="article-note">{s.note}</p>}
            {s.image && (
              <figure className="shot">
                <img
                  src={`${BASE_PATH}/${s.image.src}`}
                  alt={s.image.alt}
                  width={s.image.width}
                  height={s.image.height}
                  loading="lazy"
                />
              </figure>
            )}
          </section>
        ))}

        <section className="article-section" id="faq">
          <h2>{c.faqTitle}</h2>
          {guide.faq.map((f) => (
            <div className="faq-item" key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </section>

        <aside className="article-cta" id="download">
          <h2>{c.ctaTitle}</h2>
          <p>{c.ctaBody}</p>
          <p className="cta-actions">
            <a className="btn btn-primary" href={`${localeHref(locale, '/')}#download`}>
              {fillVersion(c.ctaButton)}
            </a>
          </p>
          <p className="fineprint">
            <Rich text={c.ctaFineprint.replace('{home}', localeHref(locale, '/'))} />
          </p>
        </aside>

        {related.length > 0 && (
          <section className="article-section related">
            <h2>{c.related}</h2>
            <ul>
              {related.map((r) => (
                <li key={r.slug}>
                  <a href={localeHref(locale, `/guides/${r.slug}/`)}>{r.title}</a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <SiteFooter locale={locale} path={`/guides/${guide.slug}/`} />
    </>
  );
}
