import type { Metadata } from 'next';
import Image from 'next/image';
import PricingContent from '@/components/pricing/PricingContent';
import { pageMetadata } from '@/lib/seo';
import { getDictionary } from '@/i18n';
import { getLocale } from '@/i18n/get-locale';

export const metadata: Metadata = pageMetadata({
  title: 'Rose Ramó Pricing from $125',
  description:
    'Victoria Boquet Deluxe bouquet pricing in Houston: 25 roses $125, 50 roses $195, 75 roses $275, 100 roses $350, plus wrapping and add-ons. Pickup by appointment.',
  path: '/pricing',
});

export default async function PricingPage() {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/gallery/gallery-04.png"
          alt={t.pricing.heroAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#e56b8c] text-[10px] tracking-[0.4em] uppercase mb-4">
            {t.pricing.eyebrow}
          </p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">
            {t.pricing.title}
          </h1>
        </div>
      </section>

      <PricingContent />
    </>
  );
}
