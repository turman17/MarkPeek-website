import GuidesIndexPage from '@/components/pages/GuidesIndexPage';
import { guidesIndexMetadata } from '@/app/i18n/metadata';

export const metadata = guidesIndexMetadata('en');

export default function GuidesIndex() {
  return <GuidesIndexPage locale="en" />;
}
