import type { Metadata } from 'next';
import { COMPANY } from './data';

export const SITE_URL = 'https://bloomifyboutique.com';

export const SEO = {
  title: 'Bloomify Boutique | Custom Ramós & Floral Designs in El Paso',
  description:
    'Bloomify Boutique designs custom rose ramós and wrapped bouquets in El Paso, TX. 25–100 roses, signature wrapping, grad and prom florals, Far East El Paso pickup, and delivery. Se habla español.',
  keywords: [
    'Bloomify Boutique',
    'El Paso florist',
    'El Paso ramó',
    'custom rose bouquet El Paso',
    'graduation flowers El Paso',
    'prom bouquet El Paso',
    'Far East El Paso florist',
    'wrapped rose bouquet',
    'bloomifyboutique',
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
          alt: `${COMPANY.name} — custom ramós and wrapped bouquets in El Paso, TX`,
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
      addressLocality: 'El Paso',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    areaServed: ['Far East El Paso', 'El Paso', 'Texas'],
    priceRange: '$110–$300',
    sameAs: [COMPANY.instagram, COMPANY.jotformUrl].filter(Boolean),
    knowsLanguage: ['en', 'es'],
  };
}
