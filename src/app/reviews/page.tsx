import type { Metadata } from 'next';
import Image from 'next/image';
import { ExternalLink, Star } from 'lucide-react';
import { COMPANY, REVIEWS } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Client Love from El Paso',
  description: `Bloomify Boutique is loved on Instagram ${COMPANY.instagramHandle} — custom ramós, wrapping, and graduation florals in El Paso, TX.`,
  path: '/reviews',
});

export default function ReviewsPage() {
  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/hero.png"
          alt={`Client love for ${COMPANY.name} in El Paso`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#e56b8c] text-[10px] tracking-[0.4em] uppercase mb-4">
            Mentions
          </p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">
            Reviews
          </h1>
          <p className="mt-4 text-white/70 text-sm">
            2.5k followers · {COMPANY.instagramHandle}
          </p>
        </div>
      </section>
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <p className="mx-auto mb-12 max-w-2xl text-center text-foreground/65 leading-relaxed">
          Clients come to Bloomify for packed ramós, boutique wrapping, and
          florals that photograph as well as they feel to carry.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {REVIEWS.map((review) => (
            <blockquote
              key={review.id}
              className="bg-card border border-border p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, n) => (
                  <Star
                    key={n}
                    size={14}
                    className="fill-[#e56b8c] text-[#e56b8c]"
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
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#e56b8c] text-black text-xs tracking-[0.2em] uppercase font-medium hover:opacity-90 transition-opacity"
          >
            See Mentions on Instagram <ExternalLink size={14} />
          </a>
        </div>
      </section>
    </>
  );
}
