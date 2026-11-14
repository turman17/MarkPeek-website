import { JetBrains_Mono } from 'next/font/google';
import '@/app/globals.css';
import { getSiteCopy } from '@/app/i18n';
import type { Locale } from '@/app/i18n/locales';
import { APP_VERSION, RELEASE_DATE, RELEASES_URL, REPO_URL, SITE_URL } from '@/app/site';

// One variable file covers every weight we use, so only a single font file is preloaded.
const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: 'variable',
  display: 'swap',
  variable: '--font-mono',
});

export default function RootDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const copy = getSiteCopy(locale);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}#website`,
        url: SITE_URL,
        name: 'MarkPeek',
        inLanguage: locale,
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${SITE_URL}#app`,
        name: 'MarkPeek',
        description: copy.home.appDescription,
        url: SITE_URL,
        image: `${SITE_URL}assets/icon-512.png`,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'macOS 14 or later',
        license: 'https://www.gnu.org/licenses/gpl-3.0.html',
        isAccessibleForFree: true,
        inLanguage: locale,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        isPartOf: { '@id': `${SITE_URL}#website` },
        softwareVersion: APP_VERSION,
        datePublished: RELEASE_DATE,
        downloadUrl: RELEASES_URL,
        installUrl: `${SITE_URL}#download`,
        codeRepository: REPO_URL,
      },
    ],
  };

  return (
    <html lang={locale} className={mono.variable}>
      {/* Analytics slot: paste a Plausible / GoatCounter snippet here (use next/script). */}
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        {children}
      </body>
    </html>
  );
}
