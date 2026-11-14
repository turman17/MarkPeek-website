# MarkPeek Website

Landing page and guides for [MarkPeek](../MarkPeek), a free, open-source Markdown viewer and editor for macOS with themed Quick Look previews. Next.js 15 static export, React 19, TypeScript. Architecture mirrors Converter-website (FinderConvert).

## Develop

```bash
npm install
npm run dev -- -p 3002   # http://localhost:3002/MarkPeek-website/
npx tsc --noEmit
```

## Build

```bash
npm run build   # exports to out/
```

Do not run a build while `next dev` is running; stop dev and `rm -rf .next` first.

## Deploy

GitHub Pages project site at https://turman17.github.io/MarkPeek-website/ via `.github/workflows/deploy.yml` (push to `main`). `next.config.mjs` sets `basePath: '/MarkPeek-website'` and `trailingSlash: true`; `public/.nojekyll` lets `_next/` be served. With a custom domain, drop `basePath`, update `app/site.ts` (`SITE_URL`, `BASE_PATH`) and add a `CNAME` file.

## Releases

The site describes the release set in `app/site.ts` (`APP_VERSION`, `RELEASE_DATE`; the .dmg and .zip URLs follow the app's `MarkPeek-v<version>` asset names). For a new app release: update those two and `SITE_UPDATED`, check the copy against the release notes, run `npm run og` (cards show the version), and update `public/llms.txt`. Copy strings use `{version}` instead of a literal version number.

## i18n

English at the root; German, French, Spanish and Japanese under `/de/`, `/fr/`, `/es/`, `/ja/`. `LOCALES` in `app/i18n/locales.ts` drives routes, sitemap and hreflang. Copy lives in `app/i18n/site.<locale>.ts` (typed by `types.ts`) and `app/guides/content.<locale>.ts`. To add a locale, see the comment in `locales.ts`. The translations are machine-made and should get a native read-through.

## Icons and social cards

- Favicons, logo and app icons in `public/` come from the app's `MarkPeek/AppIcon.icns` (1024 px master; 16/32 px use the icns's own small renditions). `apple-touch-icon.png` and `icon-maskable-512.png` are full-bleed versions on the icon's background colour, because iOS and Android apply their own mask.
- Every page has its own 1200x630 card in `public/assets/og/<locale>/` (`home`, `guides`, one per guide slug). They are rendered from the dictionaries by `npm run og` (headless Chrome); re-run it after changing titles, guides or locales.

## Notes

- Copy is verified against the app source in `../MarkPeek`; do not describe features beyond it (16 syntax-highlighting language families, not 17; app is not notarized).
- Analytics slot is a comment in `components/RootDocument.tsx`.
