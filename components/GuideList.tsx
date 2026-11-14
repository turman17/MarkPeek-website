import { getSiteCopy } from '@/app/i18n';
import { label, localeHref, type Locale } from '@/app/i18n/locales';
import type { Guide } from '@/app/guides/content';

export default function GuideList({
  guides,
  locale,
  headingLevel = 'h3',
}: {
  guides: Guide[];
  locale: Locale;
  headingLevel?: 'h2' | 'h3';
}) {
  const Heading = headingLevel;
  const insteadOf = getSiteCopy(locale).guide.insteadOf;
  return (
    <ul className="guide-list">
      {guides.map((g) => (
        <li key={g.slug}>
          <a className="guide-row" href={localeHref(locale, `/guides/${g.slug}/`)}>
            <span className="guide-main">
              <span className="guide-demo">
                <span className="file-chip">{g.demo.from}</span>
                <span className="ticker-arrow" aria-hidden="true">→</span>
                <span className="guide-to">{g.demo.to}</span>
              </span>
              <Heading className="guide-title">{g.title}</Heading>
            </span>
            <span className="guide-replaces">{label(insteadOf)}{g.replaces}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
