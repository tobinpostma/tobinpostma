import type { Metadata, Viewport } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import '@fortawesome/fontawesome-free/css/all.css';
import './globals.scss';
import { GoogleAnalytics } from '@next/third-parties/google';

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-source-sans',
});

export const viewport: Viewport = {
  themeColor: '#663399',
};

const siteDescription =
  'Senior-level executive with 15+ years of public policy, sustainability and strategic communications experience';

export const metadata: Metadata = {
  title: 'Tobin Postma',
  description: `Tobin Postma - ${siteDescription}`,
  keywords: [
    'Tobin',
    'Postma',
    'sustainability',
    'public policy',
    'strategic communications',
    'executive',
    'consulting',
    'leadership',
    'climate',
    'environmental policy',
  ],
  authors: [{ name: 'Tobin Postma' }],
  icons: {
    icon: '/images/favicon.svg',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Tobin Postma',
    description: siteDescription,
    url: 'https://www.tobinpostma.com',
    siteName: 'Tobin Postma',
    type: 'website',
    images: [
      {
        url: 'https://www.tobinpostma.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tobin Postma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tobin Postma',
    description: siteDescription,
    images: ['https://www.tobinpostma.com/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sourceSans.variable}>
      <body className={sourceSans.className}>{children}</body>
      <GoogleAnalytics gaId="G-PQLRZ58TFY" />
    </html>
  );
}
