import type { Metadata } from 'next';
import RootDocument from '@/components/RootDocument';
import { getSiteCopy } from '@/app/i18n';
import { localeHref } from '@/app/i18n/locales';
import { baseMetadata } from '@/app/i18n/metadata';

const copy = getSiteCopy('en').notFound;

export const metadata: Metadata = {
  ...baseMetadata,
  title: copy.metaTitle,
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <RootDocument locale="en">
      <main className="notfound">
        <h1>{copy.heading}</h1>
        <p>{copy.body}</p>
        <a className="btn btn-primary" href={localeHref('en', '/')}>
          {copy.back}
        </a>
      </main>
    </RootDocument>
  );
}
