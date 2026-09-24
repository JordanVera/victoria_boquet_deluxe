import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StickyMobileCta from '@/components/layout/StickyMobileCta';
import { LanguageProvider } from '@/components/i18n/LanguageProvider';
import { COMPANY } from '@/lib/data';
import { SEO, SITE_URL, floristJsonLd } from '@/lib/seo';
import { getLocale } from '@/i18n/get-locale';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO.title,
    template: `%s | ${COMPANY.name}`,
  },
  description: SEO.description,
  keywords: SEO.keywords,
  applicationName: COMPANY.name,
  authors: [{ name: COMPANY.name, url: SITE_URL }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  alternates: { canonical: '/' },
  icons: {
    icon: '/emblem.png',
  },
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: SITE_URL,
    siteName: COMPANY.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 800,
        alt: `${COMPANY.name} — custom ramós and wrapped bouquets in Houston, TX`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.title,
    description: SEO.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(floristJsonLd()) }}
        />
        <LanguageProvider locale={locale}>
          <Navbar />
          <main className="flex-1 pb-20 sm:pb-0">{children}</main>
          <Footer />
          <StickyMobileCta />
        </LanguageProvider>
      </body>
    </html>
  );
}
