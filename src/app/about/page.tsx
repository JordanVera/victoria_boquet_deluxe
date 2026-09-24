import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CtaStrip from '@/components/home/CtaStrip';
import { COMPANY, OWNER } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';
import { getDictionary } from '@/i18n';
import { getLocale } from '@/i18n/get-locale';

export const metadata: Metadata = pageMetadata({
  title: 'Houston Florist for Custom Ramós & Wrapped Bouquets',
  description:
    'Victoria Boquet Deluxe is a Houston floral studio for custom rose ramós, signature wrapping, grad and prom bouquets, by-appointment pickup, and delivery. Se habla español.',
  path: '/about',
});

export default async function AboutPage() {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/gallery/gallery-02.png"
          alt={t.about.heroAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#7A2432] text-[10px] tracking-[0.4em] uppercase mb-4">
            {t.about.eyebrow}
          </p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">
            {t.about.title}
          </h1>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="flex flex-col gap-8">
          <h2 className="font-serif text-4xl sm:text-5xl leading-tight text-foreground">
            {t.about.heading}{' '}
            <em className="italic text-[#7A2432]">{t.about.headingEm}</em>
          </h2>
          <p className="text-foreground/65 text-lg leading-relaxed">
            {t.about.intro}
          </p>
          <p className="text-foreground/65 text-lg leading-relaxed">
            {t.about.body}
          </p>
          <p className="text-foreground/65 text-lg leading-relaxed">
            {t.about.evolution}
          </p>
          <div className="grid sm:grid-cols-3 gap-8 pt-8 border-t border-border">
            {t.about.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-2xl text-[#7A2432]">
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
                alt={t.about.ownerImageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 42vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.35em] text-primary uppercase">
              {t.about.meetOwner}
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              {OWNER.name}
            </h2>
            <p className="mt-2 text-sm tracking-[0.18em] text-white/50 uppercase">
              {t.about.ownerRole}
            </p>
            <p className="mt-7 text-base leading-8 text-white/70 sm:text-lg">
              {t.about.ownerIntro}
            </p>
            <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">
              {t.about.ownerBio}
            </p>
            <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">
              {t.about.ownerClosing}
            </p>
            <a
              href={COMPANY.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-primary uppercase transition-colors hover:text-primary/80"
            >
              {t.about.follow} {COMPANY.instagramHandle}
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-[#F6F1EA]">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-6">
          {t.about.highlights.map((item) => (
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

      <section className="py-16 px-6 text-center">
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 text-[#7A2432] text-xs tracking-[0.2em] uppercase hover:gap-3 transition-all"
        >
          {t.about.viewPricing} <ArrowRight size={12} />
        </Link>
      </section>

      <CtaStrip />
    </>
  );
}
