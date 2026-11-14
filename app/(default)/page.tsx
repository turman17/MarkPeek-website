import HomePage from '@/components/pages/HomePage';
import { homeMetadata } from '@/app/i18n/metadata';

export const metadata = homeMetadata('en');

export default function Home() {
  return <HomePage locale="en" />;
}
