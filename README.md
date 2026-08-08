# MarkPeek Website

Landing page for [MarkPeek](../MarkPeek) — same stack and look as Converter-website (Next.js 15 static export, React 19).

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Static site is exported to `out/` — deploy that folder anywhere (GitHub Pages, Netlify, Vercel, etc.).

## Notes

- The download button fetches the latest release from `github.com/turman17/MarkPeek-releases` (same pattern as FinderConvert). Until that repo has a release, the button falls back to linking the releases page.
- Analytics/AdSense slots are stubbed in `app/layout.tsx`, same as Converter-website.
