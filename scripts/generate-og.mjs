// Renders the 1200x630 social preview cards for every page and locale into public/assets/og/.
// Copy comes from the site's own dictionaries, so re-run `npm run og` after changing titles.
// Needs Node 22.18+ (imports the .ts dictionaries directly) and Google Chrome.
import { mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { chromium } from '@playwright/test';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const PUBLIC = join(ROOT, 'public');
const asset = (p) => pathToFileURL(join(PUBLIC, p)).href;

// One card set per dictionary (app/i18n/site.<locale>.ts), English first
const LOCALES = readdirSync(join(ROOT, 'app/i18n'))
  .map((f) => f.match(/^site\.(\w+)\.ts$/)?.[1])
  .filter(Boolean)
  .sort((a, b) => (a === 'en' ? -1 : b === 'en' ? 1 : a.localeCompare(b)));
const load = async (locale) => {
  const site = await import(`../app/i18n/site.${locale}.ts`);
  const guides = await import(locale === 'en' ? '../app/guides/content.ts' : `../app/guides/content.${locale}.ts`);
  return {
    copy: Object.values(site).find((v) => v && typeof v === 'object' && 'home' in v),
    guides: Object.values(guides).find(Array.isArray),
  };
};

const { APP_VERSION } = await import('../app/site.ts');
// Copy may hold {version} and [link](href) markers; cards show plain text
const plain = (s) => s.replaceAll('{version}', APP_VERSION).replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

const css = (locale) => `
*{margin:0;padding:0;box-sizing:border-box}
body{width:1200px;height:630px;overflow:hidden;position:relative;background:#f8f4ea;color:#2a2119;
  font-family:-apple-system,'SF Pro Display',${locale === 'ja' ? "'Hiragino Sans'," : ''}Helvetica,sans-serif}
.mono{font-family:'JetBrains Mono','SF Mono',Menlo,${locale === 'ja' ? "'Hiragino Sans'," : ''}monospace}
.left{position:absolute;left:72px;top:64px;bottom:64px;width:610px;display:flex;flex-direction:column}
.brand{display:flex;align-items:center;gap:16px;font-weight:700;font-size:32px;letter-spacing:-.5px}
.brand img{width:60px;height:60px}
.kicker{margin-top:44px;font-size:24px;color:#855b3e;font-weight:600}
h1{font-weight:800;letter-spacing:-.03em;line-height:1.04;margin-top:14px;${locale === 'ja' ? 'word-break:auto-phrase;' : ''}}
.ticker{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-top:auto;padding-top:28px;font-size:25px}
.chip{background:#fffdf8;border:1.5px solid rgba(42,33,25,.18);border-radius:8px;padding:6px 14px;color:#2a2119}
.to{color:#855b3e;font-weight:600}
.arrow{color:#855b3e}
.note{margin-top:18px;font-size:22px;color:#6b5f52}
.shot{position:absolute;left:740px;top:96px;width:520px;height:470px;border-radius:16px;overflow:hidden;transform:rotate(2deg);
  box-shadow:0 30px 70px rgba(42,33,25,.32),0 0 0 1px rgba(42,33,25,.12);background:#1e1e1e}
.shot img{width:100%;height:100%;object-fit:cover;object-position:left top;display:block}
.list{position:absolute;left:720px;top:90px;right:60px;display:flex;flex-direction:column;gap:16px;font-size:21px}
.list div{display:flex;align-items:center;gap:12px;white-space:nowrap}
.bar{position:absolute;left:0;right:0;bottom:0;height:14px;background:#855b3e}
`;

const page = (locale, body) => `<!doctype html><html lang="${locale}"><meta charset="utf-8"><style>${css(locale)}</style><body>
<div class="left"><div class="brand"><img src="${asset('assets/icon-192.png')}"><span>MarkPeek</span></div>${body.left}</div>
${body.right}<div class="bar"></div></body></html>`;

const ticker = (from, to) =>
  `<span class="chip mono">${esc(from)}</span><span class="arrow mono">→</span><span class="to mono">${esc(to)}</span>`;

function homeCard(locale, { copy }) {
  const h = copy.home;
  return page(locale, {
    left: `<h1 data-max="80" style="margin-top:56px">${esc(h.heroTitleLine1)}<br>${esc(h.heroTitleLine2)}</h1>
      <div class="ticker">${ticker('README.md', h.tickerResult)}</div><p class="note">${esc(plain(h.heroNote))}</p>`,
    right: `<div class="shot" style="width:400px;height:466px;left:760px"><img src="${asset('assets/screenshots/quicklook.webp')}"></div>`,
  });
}

function guidesCard(locale, { copy, guides }) {
  return page(locale, {
    left: `<p class="kicker mono">${esc(copy.nav.guides)}</p><h1 data-max="72">${esc(copy.guidesIndex.title)}</h1>
      <p class="note" style="margin-top:auto">${esc(plain(copy.footer.statusLine))}</p>`,
    right: `<div class="list">${guides.map((g) => `<div>${ticker(g.demo.from, g.demo.to)}</div>`).join('')}</div>`,
  });
}

function guideCard(locale, { copy }, g) {
  return page(locale, {
    left: `<p class="kicker mono">${esc(copy.nav.guides)}</p><h1 data-max="62">${esc(g.title)}</h1>
      <div class="ticker">${ticker(g.demo.from, g.demo.to)}</div>`,
    right: `<div class="shot"><img src="${asset(g.image.src)}"></div>`,
  });
}

const browser = await chromium.launch({ channel: 'chrome' });
const tab = await browser.newPage({ viewport: { width: 1200, height: 630 } });
const tmp = join(tmpdir(), 'markpeek-og.html');

async function render(html, out) {
  writeFileSync(tmp, html);
  await tab.goto(pathToFileURL(tmp).href, { waitUntil: 'load' });
  // Shrink the title until the left column no longer overflows
  await tab.evaluate(() => {
    const h = document.querySelector('h1');
    const col = document.querySelector('.left');
    let size = Number(h.dataset.max);
    h.style.fontSize = `${size}px`;
    while (col.scrollHeight > col.clientHeight && size > 34) {
      size -= 2;
      h.style.fontSize = `${size}px`;
    }
  });
  mkdirSync(join(out, '..'), { recursive: true });
  await tab.screenshot({ path: out, type: 'jpeg', quality: 86 });
  console.log(out.replace(ROOT, ''));
}

for (const locale of LOCALES) {
  const data = await load(locale);
  const dir = join(PUBLIC, 'assets/og', locale);
  await render(homeCard(locale, data), join(dir, 'home.jpg'));
  await render(guidesCard(locale, data), join(dir, 'guides.jpg'));
  for (const g of data.guides) await render(guideCard(locale, data, g), join(dir, `${g.slug}.jpg`));
}
await browser.close();
