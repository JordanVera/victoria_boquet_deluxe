import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CtaStrip from '@/components/home/CtaStrip';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { ABOUT_CONTENT, COMPANY, OWNER, STUDIO_HIGHLIGHTS } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'El Paso Florist for Custom Ramós & Wrapped Bouquets',
  description:
    'Bloomify Boutique is an El Paso floral studio for custom rose ramós, signature wrapping, grad and prom bouquets, Far East El Paso pickup, and delivery. Se habla español.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/gallery/gallery-02.png"
          alt="Bloomify Boutique custom blush rose bouquet in El Paso"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#e56b8c] text-[10px] tracking-[0.4em] uppercase mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">
            About Bloomify
          </h1>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="flex flex-col gap-8">
          <h2 className="font-serif text-4xl sm:text-5xl leading-tight text-foreground">
            Custom florals from{' '}
            <em className="italic text-[#e56b8c]">Far East El Paso.</em>
          </h2>
          <p className="text-foreground/65 text-lg leading-relaxed">
            {ABOUT_CONTENT.intro}
          </p>
          <p className="text-foreground/65 text-lg leading-relaxed">
            {ABOUT_CONTENT.body}
          </p>
          <p className="text-foreground/65 text-lg leading-relaxed">
            {ABOUT_CONTENT.evolution}
          </p>
          <div className="grid sm:grid-cols-3 gap-8 pt-8 border-t border-border">
            {[
              { number: '25–100', label: 'Rose ramós' },
              { number: 'El Paso', label: 'Pickup & delivery' },
              { number: '2.5k', label: `${COMPANY.instagramHandle}` },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-2xl text-[#e56b8c]">
                  {stat.number}
                </p>
                <p className="text-sm text-foreground/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#171315] py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="absolute -inset-3 rounded-[2rem] border border-primary/30" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-2xl">
              <Image
                src={OWNER.image}
                alt={OWNER.imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 42vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.35em] text-primary uppercase">
              Meet the Owner
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              {OWNER.name}
            </h2>
            <p className="mt-2 text-sm tracking-[0.18em] text-white/50 uppercase">
              {OWNER.role}
            </p>
            <p className="mt-7 text-base leading-8 text-white/70 sm:text-lg">
              {OWNER.intro}
            </p>
            <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">
              {OWNER.bio}
            </p>
            <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">
              {OWNER.closing}
            </p>
            <a
              href={COMPANY.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-primary uppercase transition-colors hover:text-primary/80"
            >
              Follow {COMPANY.instagramHandle}
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-[#FBF6F7]">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-6">
          {STUDIO_HIGHLIGHTS.map((item) => (
            <div key={item.title} className="bg-white border border-border p-8">
              <h3 className="font-serif text-2xl text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* <TestimonialsSection /> */}

      <section className="py-16 px-6 text-center">
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 text-[#e56b8c] text-xs tracking-[0.2em] uppercase hover:gap-3 transition-all"
        >
          View Bouquet Pricing <ArrowRight size={12} />
        </Link>
      </section>

      <CtaStrip />
    </>
  );
}
