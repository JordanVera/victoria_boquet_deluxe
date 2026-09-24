import type { Metadata } from 'next';
import Image from 'next/image';
import CtaStrip from '@/components/home/CtaStrip';
import FaqAccordion from '@/components/faq/FaqAccordion';
import { pageMetadata } from '@/lib/seo';
import { getDictionary } from '@/i18n';
import { getLocale } from '@/i18n/get-locale';

export const metadata: Metadata = pageMetadata({
  title: 'Florist FAQs — Ordering, Care & Delivery',
  description:
    'Victoria Boquet Deluxe FAQs for Houston: how to order a ramó, rose pricing, Houston pickup, delivery fees, deposits, wrapping, and floral care. Se habla español.',
  path: '/faq',
});

export default async function FaqPage() {
  const locale = await getLocale();
  const t = getDictionary(locale);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.items.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'link' in faq && faq.link ? `${faq.answer} ${faq.link.label}.` : faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative h-64 overflow-hidden sm:h-80">
        <Image
          src="/gallery/gallery-09.png"
          alt={t.faq.heroAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="mb-4 text-[10px] tracking-[0.4em] text-[#e56b8c] uppercase">
            {t.faq.eyebrow}
          </p>
          <h1 className="font-serif text-5xl text-white sm:text-6xl">
            {t.faq.title}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-base leading-relaxed text-foreground/65 sm:text-lg">
            {t.faq.intro}
          </p>
        </div>
        <FaqAccordion />
      </section>

      <CtaStrip />
    </>
  );
}
