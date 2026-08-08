import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'MarkPeek — Press Space, read Markdown',
  description:
    'MarkPeek makes Quick Look render Markdown beautifully. Select any .md file in Finder, press Space, and read a styled preview instead of raw text. Fully customizable styles.',
  icons: {
    icon: '/assets/favicon-64.png',
    apple: '/assets/icon-256.png',
  },
  openGraph: {
    title: 'MarkPeek — Press Space, read Markdown',
    description:
      'Quick Look previews for Markdown on your Mac. Styled, customizable, instant. Press Space on any .md file.',
    images: ['/assets/icon-512.png'],
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mono.variable}>
      {/* ═══ Analytics slot ═══
          Paste Google Analytics / Plausible snippet here (use next/script), e.g.:
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
      */}
      <body>{children}</body>
    </html>
  );
}
