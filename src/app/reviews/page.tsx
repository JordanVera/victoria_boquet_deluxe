import type { Metadata } from 'next';
import Image from 'next/image';
import { ExternalLink, Star } from 'lucide-react';
import { COMPANY } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';
import { getDictionary } from '@/i18n';
import { getLocale } from '@/i18n/get-locale';

export const metadata: Metadata = pageMetadata({
  title: 'Client Love from Houston',
  description: `Victoria Boquet Deluxe is loved on Instagram ${COMPANY.instagramHandle} — custom ramós, wrapping, and graduation florals in Houston, TX.`,
  path: '/reviews',
});

export default async function ReviewsPage() {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/hero.png"
          alt={t.reviews.heroAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#7A2432] text-[10px] tracking-[0.4em] uppercase mb-4">
            {t.reviews.eyebrow}
          </p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">
            {t.reviews.title}
          </h1>
          <p className="mt-4 text-white/70 text-sm">
            {COMPANY.instagramHandle}
          </p>
        </div>
      </section>
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <p className="mx-auto mb-12 max-w-2xl text-center text-foreground/65 leading-relaxed">
          {t.reviews.intro}
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {t.reviews.items.map((review) => (
            <blockquote
              key={review.id}
              className="bg-card border border-border p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, n) => (
                  <Star
                    key={n}
                    size={14}
                    className="fill-[#7A2432] text-[#7A2432]"
                  />
                ))}
              </div>
              <p className="font-serif text-lg leading-relaxed text-foreground">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="mt-6">
                <p className="font-serif text-foreground">{review.name}</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mt-1">
                  {review.event}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href={COMPANY.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#7A2432] text-white text-xs tracking-[0.2em] uppercase font-medium hover:opacity-90 transition-opacity"
          >
            {t.reviews.seeMentions} <ExternalLink size={14} />
          </a>
        </div>
      </section>
    </>
  );
}
