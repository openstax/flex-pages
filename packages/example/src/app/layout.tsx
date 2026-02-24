import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: { template: '%s | Flex Pages', default: 'Flex Pages' },
  description: 'OpenStax Flex Pages example application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
