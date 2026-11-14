import type { Metadata, Viewport } from 'next';
import RootDocument from '@/components/RootDocument';
import { baseMetadata } from '@/app/i18n/metadata';

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: '#855b3e',
};

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
