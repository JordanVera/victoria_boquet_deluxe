import type { Metadata } from 'next';
import Image from 'next/image';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { pageMetadata } from '@/lib/seo';
import { getDictionary } from '@/i18n';
import { getLocale } from '@/i18n/get-locale';

export const metadata: Metadata = pageMetadata({
  title: 'Ramó & Bouquet Gallery',
  description:
    'Browse Victoria Boquet Deluxe ramós — custom rose bouquets, signature wrapping, lilies, and graduation florals designed in Houston, TX.',
  path: '/gallery',
});

export default async function GalleryPage() {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/gallery/gallery-05.png"
          alt={t.gallery.heroAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#7A2432] text-[10px] tracking-[0.4em] uppercase mb-4">
            {t.gallery.eyebrow}
          </p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">
            {t.gallery.title}
          </h1>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <p className="mx-auto mb-12 max-w-2xl text-center text-foreground/65 leading-relaxed">
          {t.gallery.intro}
        </p>
        <GalleryGrid />
      </section>
    </>
  );
}
