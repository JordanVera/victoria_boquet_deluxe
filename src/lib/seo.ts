import type { Metadata } from 'next';
import { COMPANY } from './data';

export const SITE_URL = 'https://victoriaboquetdeluxe.com';

export const SEO = {
  title: 'Victoria Boquet Deluxe | Luxury Ramós & Floral Designs in Houston',
  description:
    'Victoria Boquet Deluxe designs luxury rose ramós and wrapped bouquets in Houston, TX. 25–100 roses, signature wrapping, grad and prom florals, by-appointment pickup, and delivery. Se habla español.',
  keywords: [
    'Victoria Boquet Deluxe',
    'Houston florist',
    'Houston ramó',
    'custom rose bouquet Houston',
    'graduation flowers Houston',
    'prom bouquet Houston',
    'luxury florist Houston',
    'wrapped rose bouquet',
    'victoriaboquetdeluxe',
  ],
};

export function pageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  const fullTitle = `${title} | ${COMPANY.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: COMPANY.name,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: '/hero.png',
          width: 1200,
          height: 800,
          alt: `${COMPANY.name} — luxury ramós and wrapped bouquets in Houston, TX`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function floristJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Florist', 'LocalBusiness'],
    '@id': `${SITE_URL}/#florist`,
    name: COMPANY.name,
    alternateName: COMPANY.shortName,
    description: SEO.description,
    url: SITE_URL,
    image: [`${SITE_URL}/hero.png`, `${SITE_URL}/gallery/gallery-01.png`],
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.address,
      addressLocality: 'Houston',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    areaServed: ['Houston', 'Greater Houston', 'Texas'],
    priceRange: '$125–$350',
    sameAs: [COMPANY.instagram].filter(Boolean),
    knowsLanguage: ['en', 'es'],
  };
}
