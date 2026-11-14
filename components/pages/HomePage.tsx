import FileTicker from '@/components/FileTicker';
import GuideList from '@/components/GuideList';
import QuickLookScene from '@/components/QuickLookScene';
import Rich from '@/components/Rich';
import SiteFooter from '@/components/SiteFooter';
import SiteNav from '@/components/SiteNav';
import { getGuides, getSiteCopy } from '@/app/i18n';
import { formatDate, type Locale } from '@/app/i18n/locales';
import { APP_VERSION, BASE_PATH, DMG_URL, RELEASE_DATE, ZIP_URL, fillVersion } from '@/app/site';

const SHOT = `${BASE_PATH}/assets/screenshots`;

const EXTENSIONS = ['.md', '.markdown', '.mdown', '.mkd', '.mkdn', '.mdwn', '.mdtxt', '.mdtext', '.mdx', '.rmd', '.qmd'];

/** Light-palette swatches of the built-in themes, in the same order as the copy. */
const SWATCHES = [
  { bg: '#ffffff', ink: '#333333', accent: '#0969da', font: "-apple-system, 'Segoe UI', sans-serif" },
  { bg: '#ffffff', ink: '#222222', accent: '#7a5c2e', font: "Charter, 'Iowan Old Style', Georgia, serif" },
  { bg: '#ffffff', ink: '#1f2328', accent: '#1f883d', font: "-apple-system, 'Segoe UI', sans-serif" },
  { bg: '#ffffff', ink: '#000000', accent: '#000000', font: 'Helvetica, Arial, sans-serif' },
  { bg: '#fbf8f1', ink: '#2c2a25', accent: '#8b5f3e', font: "'Iowan Old Style', Charter, Georgia, serif" },
  { bg: '#fafafa', ink: '#24292f', accent: '#0550ae', font: "ui-monospace, 'SF Mono', Menlo, monospace" },
];

// Shown verbatim in every locale: these are commands, not prose
const BREW_CMD = [
  'brew trust --cask turman17/tap/markpeek',
  'brew install --cask turman17/tap/markpeek',
  'xattr -dr com.apple.quarantine /Applications/MarkPeek.app',
].join('\n');
const SCRIPT_CMD = 'curl -fsSL https://raw.githubusercontent.com/turman17/MarkPeek/main/scripts/install.sh | bash';

const BT = '```';
// Verbatim from the app's docs/sample.md, the file rendered in math-mermaid-rendered.webp
const MATH_SAMPLE = [
  '### Math and diagrams',
  '',
  'Inline math like $E = mc^2$ and $\\sqrt{x_1 + x_2}$',
  'renders in the app and in exports; display math too:',
  '',
  '$$',
  '\\int_0^1 x^2 \\, dx = \\frac{1}{3}',
  '$$',
  '',
  `${BT}mermaid`,
  'flowchart LR',
  '    A[Markdown] --> B(MarkPeek)',
  '    B --> C{Theme}',
  '    C --> D[Quick Look]',
  '    C --> E[PDF]',
  BT,
].join('\n');

export default function HomePage({ locale }: { locale: Locale }) {
  const copy = getSiteCopy(locale);
  const c = copy.home;

  return (
    <>
      <SiteNav locale={locale} path="/" />

      <header className="hero" id="top">
        <div className="hero-copy">
          <h1>
            {c.heroTitleLine1}
            <br />
            {c.heroTitleLine2}
          </h1>
          <FileTicker spaceLabel={c.scene.space} result={c.tickerResult} />
          <p className="lede">
            <Rich text={c.heroLede} />
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={DMG_URL}>
              {c.heroCta}
            </a>
            <span className="hero-note">
              <Rich text={fillVersion(c.heroNote)} />
            </span>
          </div>
        </div>
        <QuickLookScene copy={c.scene} />
      </header>

      <main>
        <section className="section" id="what">
          <div className="split">
            <div>
              <h2>{c.whatTitle}</h2>
              {c.whatParas.map((p) => (
                <p className="prose" key={p}>
                  <Rich text={p} />
                </p>
              ))}
            </div>
            <dl className="spec">
              {c.whatFacts.map((f) => (
                <div key={f.term}>
                  <dt>{f.term}</dt>
                  <dd>{f.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section" id="formats">
          <h2>{c.formatsTitle}</h2>
          <p className="section-lede">{c.formatsLede}</p>
          <ul className="ext-list">
            {EXTENSIONS.map((ext) => (
              <li key={ext}>
                <code className="file-chip">{ext}</code>
              </li>
            ))}
          </ul>
          <p className="fineprint">
            <Rich text={c.formatsNote} />
          </p>
        </section>

        <section className="section" id="how">
          <h2>{c.howTitle}</h2>
          <figure className="shot">
            <video
              src={`${SHOT}/finder-space.mp4`}
              poster={`${SHOT}/finder-space-poster.webp`}
              width={1440}
              height={900}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={c.howVideoAria}
            />
            <figcaption>{c.howVideoCaption}</figcaption>
          </figure>
          <ol className="steps">
            {c.steps.map((step, i) => (
              <li className="step" key={step.title}>
                <span className="step-num" aria-hidden="true">{i + 1}</span>
                <h3>{step.title}</h3>
                <p>
                  <Rich text={step.body} />
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section" id="themes">
          <h2>{c.themesTitle}</h2>
          <p className="section-lede">{c.themesLede}</p>
          <ul className="theme-list">
            {c.themes.map((t, i) => (
              <li key={t.name} className="theme-row">
                <span
                  className="swatch"
                  aria-hidden="true"
                  style={{ background: SWATCHES[i].bg, color: SWATCHES[i].ink, fontFamily: SWATCHES[i].font, ['--sw' as string]: SWATCHES[i].accent }}
                >
                  Aa
                </span>
                <span className="theme-name">{t.name}</span>
                <span className="theme-blurb">{t.blurb}</span>
              </li>
            ))}
          </ul>
          {c.themesParas.map((p) => (
            <p className="prose" key={p}>
              <Rich text={p} />
            </p>
          ))}
          <div className="shot-pair">
            <figure className="shot">
              <img src={`${SHOT}/inspector.webp`} alt={c.inspectorAlt} width={1400} height={880} loading="lazy" />
            </figure>
            <figure className="shot">
              <img src={`${SHOT}/theme-builder.webp`} alt={c.builderAlt} width={1400} height={880} loading="lazy" />
            </figure>
          </div>
        </section>

        <section className="section" id="reading">
          <h2>{c.readTitle}</h2>
          <p className="section-lede">{c.readLede}</p>
          <dl className="rows">
            {c.readItems.map((item) => (
              <div className="row" key={item.title}>
                <dt>{item.title}</dt>
                <dd>
                  <Rich text={item.body} />
                </dd>
              </div>
            ))}
          </dl>
          <figure className="shot">
            <video
              src={`${SHOT}/app-tour.mp4`}
              poster={`${SHOT}/app-tour-poster.webp`}
              width={1440}
              height={876}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={c.tourVideoAria}
            />
            <figcaption>{c.tourVideoCaption}</figcaption>
          </figure>
        </section>

        <section className="section" id="math">
          <h2>{c.mathTitle}</h2>
          {c.mathParas.map((p) => (
            <p className="prose" key={p}>
              <Rich text={p} />
            </p>
          ))}
          <div className="type-see">
            <figure className="codeblock">
              <figcaption>{c.mathSampleLabel}</figcaption>
              <pre>
                <code>{MATH_SAMPLE}</code>
              </pre>
            </figure>
            <figure className="codeblock codeblock-result">
              <figcaption>{c.mathResultLabel}</figcaption>
              <img
                src={`${SHOT}/math-mermaid-rendered.webp`}
                alt={c.mathResultAlt}
                width={760}
                height={390}
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        <section className="section" id="export">
          <h2>{c.exportTitle}</h2>
          <p className="section-lede">{c.exportLede}</p>
          <div className="split split-media">
            <figure className="shot">
              <img src={`${SHOT}/export-pdf.webp`} alt={c.exportAlt} width={1400} height={880} loading="lazy" />
            </figure>
            <dl className="rows rows-tight">
              {c.exportItems.map((item) => (
                <div className="row" key={item.title}>
                  <dt>{item.title}</dt>
                  <dd>
                    <Rich text={item.body} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section" id="guides">
          <h2>{c.guidesTitle}</h2>
          <p className="section-lede">{c.guidesLede}</p>
          <GuideList guides={getGuides(locale)} locale={locale} />
        </section>

        <section className="section" id="privacy">
          <h2>{c.privacyTitle}</h2>
          <p className="section-lede">{c.privacyLede}</p>
          <dl className="rows">
            {c.privacyItems.map((item) => (
              <div className="row" key={item.title}>
                <dt>{item.title}</dt>
                <dd>
                  <Rich text={item.body} />
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="section section-download" id="download">
          <img src={`${BASE_PATH}/assets/icon-144.png`} alt={c.downloadIconAlt} width={72} height={72} loading="lazy" className="cta-icon" />
          <h2>{c.downloadTitle}</h2>
          <p className="section-lede">{fillVersion(c.downloadLede)}</p>
          <dl className="status-card">
            <div>
              <dt>{c.versionLabel}</dt>
              <dd>{APP_VERSION}</dd>
            </div>
            <div>
              <dt>{c.releasedLabel}</dt>
              <dd>
                <time dateTime={RELEASE_DATE}>{formatDate(RELEASE_DATE, locale)}</time>
              </dd>
            </div>
            <div>
              <dt>{c.requiresLabel}</dt>
              <dd>{c.requiresDetail}</dd>
            </div>
          </dl>
          <div className="install-options">
            <div className="install-option">
              <h3>{c.downloadBrew.title}</h3>
              <p>
                <Rich text={c.downloadBrew.body} />
              </p>
              <pre className="cmd codeblock">
                <code>{BREW_CMD}</code>
              </pre>
            </div>
            <div className="install-option">
              <h3>{c.downloadScript.title}</h3>
              <p>
                <Rich text={c.downloadScript.body} />
              </p>
              <pre className="cmd codeblock">
                <code>{SCRIPT_CMD}</code>
              </pre>
            </div>
            <div className="install-option">
              <h3>{c.downloadManual.title}</h3>
              <p>
                <Rich text={c.downloadManual.body} />
              </p>
              <p className="download-files">
                <a className="btn btn-primary" href={DMG_URL}>
                  {c.downloadDmg}
                </a>
                <a className="btn btn-secondary" href={ZIP_URL}>
                  {c.downloadZip}
                </a>
              </p>
            </div>
          </div>
          <p className="fineprint">
            <Rich text={c.downloadFineprint} />
          </p>
        </section>

        <section className="section" id="install">
          <h2>{c.installTitle}</h2>
          <p className="section-lede">{c.installLede}</p>
          <ol className="install-steps">
            {c.installSteps.map((s, i) => (
              <li key={s.title}>
                <span className="step-num" aria-hidden="true">{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>
                    <Rich text={s.body} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="fineprint">
            <Rich text={c.installFineprint} />
          </p>
        </section>

        <section className="section" id="faq">
          <h2>{c.faqTitle}</h2>
          <div className="faq">
            {c.faq.map((item) => (
              <div className="faq-item" key={item.q}>
                <h3>{item.q}</h3>
                <p>
                  <Rich text={item.a} />
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} path="/" />
    </>
  );
}
