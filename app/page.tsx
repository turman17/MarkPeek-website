import DownloadButton from '@/components/DownloadButton';
import QuickLookScene from '@/components/QuickLookScene';
import StyleTicker from '@/components/StyleTicker';

const FEATURES = [
  {
    title: 'Press Space, read Markdown',
    body: 'Quick Look shows styled headings, lists, code blocks, and links instead of a wall of raw # and *. No app to open, ever.',
  },
  {
    title: 'Four styles built in',
    body: 'Modern, Serif, GitHub, and Plain. Pick one and every preview on your Mac follows it instantly.',
  },
  {
    title: 'Style anything',
    body: 'Fonts, sizes, line height, content width, spacing, and every color — with separate light and dark palettes, edited live in a preview pane.',
  },
  {
    title: 'Your own presets',
    body: 'Save any combination as a named preset. Tweak it later and it updates itself — built-ins always stay clean.',
  },
  {
    title: 'Dark mode done right',
    body: 'Previews follow the system appearance with a dedicated dark palette, or force always-light / always-dark.',
  },
  {
    title: 'Native, offline, private',
    body: 'A tiny Quick Look extension using macOS frameworks. Your files never leave your Mac — no uploads, no accounts.',
  },
];

const STEPS = [
  { title: 'Select', body: 'Click any .md file in Finder — README, notes, changelog, anything.' },
  { title: 'Press Space', body: 'Quick Look opens instantly, styled the way you chose.' },
  { title: 'Read', body: 'Arrow through whole folders of Markdown without opening a single app.' },
];

const EXTENSIONS = ['.md', '.markdown', '.mdown', '.mkd', '.mkdn'];

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top">
            <img src="/assets/icon-256.png" alt="" width={30} height={30} />
            <span>MarkPeek</span>
          </a>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#styles">Styles</a>
            <a href="#download" className="btn btn-nav">Download</a>
          </div>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-copy">
          <h1>
            Press Space.
            <br />
            Read Markdown.
          </h1>
          <StyleTicker />
          <p className="lede">
            MarkPeek teaches Quick Look to render Markdown. Select a <strong>.md</strong> file,
            press <strong>Space</strong>, and read a styled preview instead of raw text — in a look
            you designed.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#download">Download for Mac</a>
            <span className="hero-note">Free · macOS 14+ · Apple Silicon &amp; Intel</span>
          </div>
        </div>
        <QuickLookScene />
      </header>

      <main>
        <section className="section" id="features">
          <h2>The Markdown reader you never have to open</h2>
          <div className="grid">
            {FEATURES.map((f) => (
              <div className="card" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="styles">
          <h2>Styled your way</h2>
          <p className="section-lede">
            Start from a built-in preset, then change anything in the settings app — with a live
            preview while you edit.
          </p>
          <div className="style-grid">
            <div className="style-card style-modern">
              <span className="style-label">Modern</span>
              <div className="style-sample">
                <h4>Heading</h4>
                <p>Clean system sans with <strong>comfortable</strong> spacing.</p>
              </div>
            </div>
            <div className="style-card style-serif">
              <span className="style-label">Serif</span>
              <div className="style-sample">
                <h4>Heading</h4>
                <p>Bookish Georgia, <em>italic quotes</em>, warm links.</p>
              </div>
            </div>
            <div className="style-card style-github">
              <span className="style-label">GitHub</span>
              <div className="style-sample">
                <h4>Heading</h4>
                <p>Underlined headings and familiar <code>code</code> chips.</p>
              </div>
            </div>
            <div className="style-card style-custom">
              <span className="style-label">Yours</span>
              <div className="style-sample">
                <h4>Heading</h4>
                <p>Every font, size, and color — saved as your own preset.</p>
              </div>
            </div>
          </div>
          <p className="fineprint">
            Works with{' '}
            {EXTENSIONS.map((ext, i) => (
              <span key={ext}>
                <code>{ext}</code>
                {i < EXTENSIONS.length - 1 ? ' · ' : ''}
              </span>
            ))}{' '}
            — headings, bold, italic, inline code, code blocks, lists, blockquotes, links, and
            horizontal rules.
          </p>
        </section>

        <section className="section" id="how">
          <h2>Three steps, zero apps opened</h2>
          <div className="steps">
            {STEPS.map((step, i) => (
              <div className="step" key={step.title}>
                <span className="step-num">{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-cta" id="download">
          <img src="/assets/icon-256.png" alt="" width={72} height={72} className="cta-icon" />
          <h2>Get MarkPeek</h2>
          <p className="section-lede">Free download. Runs on macOS 14 Sonoma and later.</p>
          <DownloadButton />
          <p className="fineprint">
            Drag to Applications, open once, and press Space on any Markdown file. If previews
            don&apos;t change, enable MarkPeek in System Settings → Login Items &amp; Extensions →
            Quick Look.
          </p>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <span>© 2026 MarkPeek</span>
          <span className="footer-links">
            <a href="#features">Features</a>
            <a href="#styles">Styles</a>
            <a href="#download">Download</a>
          </span>
        </div>
      </footer>
    </>
  );
}
