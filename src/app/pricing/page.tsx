import type { Metadata } from 'next';
import Image from 'next/image';
import PricingContent from '@/components/pricing/PricingContent';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Rose Ramó Pricing from $110',
  description:
    'Bloomify Boutique bouquet pricing in El Paso: 25 roses $110, 50 roses $175, 75 roses $235, 100 roses $300, plus wrapping and add-ons. Pickup in Far East El Paso.',
  path: '/pricing',
});

export default function PricingPage() {
  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/gallery/gallery-04.png"
          alt="Bloomify Boutique rose ramó pricing in El Paso"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#e56b8c] text-[10px] tracking-[0.4em] uppercase mb-4">
            El Paso Florist
          </p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">Pricing</h1>
        </div>
      </section>

      <PricingContent />
    </>
  );
}
