import { execFileSync } from 'node:child_process';
import { test, expect, Page } from '@playwright/test';

const PROD = 'https://turman17.github.io/MarkPeek-website/';
const BASE = 'http://localhost:3002/MarkPeek-website/';
const BRAND_ICON = 'favicon-64.png';

// Derive the page list from the dev server's sitemap so new locales are covered automatically.
function loadPages(): string[] {
  // sync fetch: Playwright loads specs as CJS, so no top-level await
  const xml = execFileSync('curl', ['-sf', `${BASE}sitemap.xml`], { encoding: 'utf8' });
  const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
  return locs.map((u) => {
    if (!u.startsWith(PROD)) throw new Error(`sitemap URL not under ${PROD}: ${u}`);
    return u.slice(PROD.length);
  });
}

const PAGES = loadPages();

type ImgInfo = {
  src: string;
  alt: string | null;
  width: string | null;
  height: string | null;
  loaded: boolean;
};

async function collectImages(page: Page): Promise<ImgInfo[]> {
  return page.$$eval('img', (imgs) =>
    imgs.map((i) => ({
      src: i.currentSrc || i.src,
      alt: i.getAttribute('alt'),
      width: i.getAttribute('width'),
      height: i.getAttribute('height'),
      loaded: i.complete && i.naturalWidth > 0,
    })),
  );
}

async function openAndLoadAll(page: Page, path: string) {
  await page.goto(path, { waitUntil: 'load' });
  // trigger any lazy-loaded images
  await page.$$eval('img', (imgs) => imgs.forEach((i) => (i.loading = 'eager')));
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 50));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForLoadState('networkidle');
}

test('sitemap covers home, guides index and guide pages', () => {
  expect(PAGES).toContain('');
  expect(PAGES).toContain('guides/');
  expect(PAGES.filter((p) => /^guides\/.+/.test(p)).length, 'guide pages').toBeGreaterThan(0);
});

for (const path of PAGES) {
  test.describe(`/${path}`, () => {
    test('images load, return 200, and have size + alt attributes', async ({ page, request }) => {
      await openAndLoadAll(page, path);
      const imgs = await collectImages(page);
      expect(imgs.length, 'page has images').toBeGreaterThan(0);

      for (const img of imgs) {
        const isBrand = img.src.endsWith(BRAND_ICON);
        expect(img.loaded, `loaded: ${img.src}`).toBe(true);
        expect((await request.get(img.src)).status(), `HTTP status: ${img.src}`).toBe(200);
        expect(img.width, `width attr: ${img.src}`).toBeTruthy();
        expect(img.height, `height attr: ${img.src}`).toBeTruthy();
        expect(img.alt, `alt attr present: ${img.src}`).not.toBeNull();
        if (!isBrand) expect(img.alt, `alt non-empty: ${img.src}`).not.toBe('');
      }
    });

    test('video posters and sources return 200', async ({ page, request }) => {
      await page.goto(path);
      const urls = await page.$$eval('video', (vs) =>
        vs.flatMap((v) => [
          v.poster,
          v.currentSrc || v.src,
          ...Array.from(v.querySelectorAll('source')).map((s) => s.src),
        ]).filter(Boolean),
      );
      for (const url of new Set(urls)) {
        expect((await request.get(url)).status(), `HTTP status: ${url}`).toBe(200);
      }
    });

    test('og:image and twitter:image are absolute and served as images', async ({ page, request, baseURL }) => {
      await page.goto(path);
      for (const sel of ['meta[property="og:image"]', 'meta[name="twitter:image"]']) {
        const url = await page.getAttribute(sel, 'content');
        expect(url, `${sel} present`).toBeTruthy();
        expect(url!.startsWith(PROD), `${sel} under ${PROD}: ${url}`).toBe(true);
        const res = await request.get(url!.replace(PROD, baseURL!));
        expect(res.status(), `${sel} status: ${url}`).toBe(200);
        expect(res.headers()['content-type'], `${sel} content-type`).toMatch(/^image\//);
      }
    });

    test('favicons, touch icon and manifest load', async ({ page, request }) => {
      await page.goto(path);
      const hrefs = await page.$$eval('link[rel="icon"], link[rel="apple-touch-icon"], link[rel="manifest"]', (links) =>
        links.map((l) => (l as HTMLLinkElement).href),
      );
      expect(hrefs.length, 'icon links present').toBeGreaterThan(0);
      for (const href of hrefs) {
        expect((await request.get(href)).status(), href).toBe(200);
      }
    });

    test('canonical is absolute and matches the page URL', async ({ page }) => {
      await page.goto(path);
      const canonical = await page.getAttribute('link[rel="canonical"]', 'href');
      expect(canonical).toBe(PROD + path);
    });

    test('no image or video is wider than its container, no horizontal scroll', async ({ page }) => {
      await openAndLoadAll(page, path);
      const overflowing = await page.$$eval('img, video', (els) =>
        els
          .filter((e) => e.parentElement && e.getBoundingClientRect().width > e.parentElement.clientWidth + 0.5)
          .map((e) => `${(e as HTMLImageElement).src} (${e.getBoundingClientRect().width} > ${e.parentElement!.clientWidth})`),
      );
      expect(overflowing).toEqual([]);
      const scroll = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: window.innerWidth }));
      expect(scroll.sw, 'document scrollWidth <= innerWidth').toBeLessThanOrEqual(scroll.iw);
    });
  });
}

test('404 page renders', async ({ page }) => {
  const res = await page.goto('this-page-does-not-exist/');
  test.skip(!res || res.status() !== 404, `dev server returned ${res?.status()} for a missing path`);
  await expect(page.locator('body')).not.toBeEmpty();
  const sw = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);
  expect(sw, 'no horizontal scroll on 404').toBe(true);
});

test('image reuse across pages (informational)', async ({ page }) => {
  // Visits every page in one test, so the default 30s budget is too small
  test.setTimeout(PAGES.length * 15_000);
  const usage = new Map<string, string[]>();
  for (const path of PAGES) {
    await page.goto(path, { waitUntil: 'domcontentloaded' });
    const srcs = new Set<string>();
    for (const img of await collectImages(page)) {
      srcs.add(img.src.replace(/^.*\/MarkPeek-website\//, ''));
    }
    for (const s of srcs) usage.set(s, [...(usage.get(s) ?? []), `/${path}`]);
  }

  const table = [...usage].map(([src, pages]) => `${src} -> ${pages.join(', ')}`).join('\n');
  console.log(`\nImage reuse:\n${table}`);
  test.info().annotations.push({ type: 'image-reuse', description: table });
});
