import Hero from '@/components/home/Hero';
import Welcome from '@/components/home/Welcome';
import GalleryTeaser from '@/components/home/GalleryTeaser';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaStrip from '@/components/home/CtaStrip';
import PricingPreview from '@/components/home/PricingPreview';
import { SEO } from '@/lib/seo';
import { COMPANY, OFFERINGS } from '@/lib/data';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Flower2,
  Heart,
  Sparkles,
  Star,
} from 'lucide-react';

export const metadata: Metadata = {
  title: { absolute: SEO.title },
  description: SEO.description,
  alternates: { canonical: '/' },
};

const signatureHighlights = [
  {
    title: 'Built to Order, Not Off the Shelf',
    description:
      'Choose rose count, colors, wrapping, and add-ons. Every ramó is packed to match your inspo — not a catalog stock photo.',
    icon: Sparkles,
  },
  {
    title: 'The Wrap Is the Look',
    description:
      'Hot pink, translucent, Dior-inspired, Coach-inspired, graduation wraps, and more. The paper is part of the bouquet.',
    icon: Flower2,
  },
  {
    title: 'Made for the Camera',
    description:
      'Full, round ramós designed to photograph from every angle — birthdays, proposals, grad, prom, and everyday wow.',
    icon: Heart,
  },
];

const orderingFlow = [
  'Pick your rose count, colors, wrapping, and add-ons',
  'Share a date, inspo photo, and pickup or delivery',
  'Confirm details and place a 50% deposit',
  'Collect in Far East El Paso — or have it delivered',
];

const idealOccasions = [
  'Birthdays',
  'Graduation',
  'Prom',
  'Anniversaries',
  'Proposals',
  'Just Because',
];

const boutiqueStats = [
  { value: '25–100', label: 'Rose ramós', icon: Flower2 },
  { value: 'El Paso', label: 'Far East pickup', icon: Heart },
  { value: '2.5k', label: 'Instagram followers', icon: Star },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <section
        aria-label="Boutique highlights"
        className="relative z-20 mx-4 -mt-8 overflow-hidden rounded-3xl border border-white/60 bg-white/95 shadow-[0_24px_80px_rgba(30,20,22,0.16)] backdrop-blur-xl sm:mx-8 lg:mx-auto lg:max-w-5xl"
      >
        <div className="grid divide-y divide-primary/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {boutiqueStats.map(({ value, label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-4 px-6 py-6 sm:py-7"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div>
                <p className="font-serif text-2xl leading-none text-foreground">
                  {value}
                </p>
                <p className="mt-1.5 text-[10px] tracking-[0.2em] text-foreground/50 uppercase">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Welcome />
      <section className="overflow-hidden bg-[#171315] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
            <div className="relative order-2 min-h-140 sm:min-h-170 lg:order-1">
              <div className="absolute inset-x-0 top-0 h-[72%] overflow-hidden rounded-t-[8rem]">
                <Image
                  src="/gallery/775018598_17887103202610537_3528841871419055537_n.jpg"
                  alt="Hot-pink wrapped rose ramó by Bloomify Boutique"
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 46vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
              </div>

              <div className="absolute right-0 bottom-0 h-[44%] w-[58%] overflow-hidden border-[6px] border-[#171315] bg-[#171315] shadow-2xl sm:border-10">
                <Image
                  src="/gallery/779633037_17887804155610537_8677391227249741259_n.jpg"
                  alt="Red and strawberry-pink ramós styled together"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 55vw, 28vw"
                />
              </div>

              <div className="absolute bottom-[11%] left-0 max-w-55 rounded-r-2xl border-l-2 border-primary bg-white p-5 text-foreground shadow-2xl sm:p-6">
                <p className="font-serif text-xl italic leading-snug">
                  “Packed tight. Wrapped luxe. Made to be carried.”
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 text-primary">
                <span className="h-px w-10 bg-primary" />
                <p className="text-[10px] tracking-[0.35em] uppercase">
                  The Bloomify Experience
                </p>
              </div>
              <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
                One custom ramó.{' '}
                <em className="font-normal text-primary">
                  Every detail yours.
                </em>
              </h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
                From a 25-rose birthday bouquet to a 100-count statement piece,
                Bloomify builds El Paso florals around your colors, wrapping,
                and occasion — then confirms a deposit so nothing is left to
                chance.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-4">
                {OFFERINGS.map((offering) => (
                  <div
                    key={offering}
                    className="flex items-center gap-2 border-b border-white/10 pb-4 text-sm text-white/80"
                  >
                    <Sparkles
                      className="h-3.5 w-3.5 shrink-0 text-primary"
                      strokeWidth={1.5}
                    />
                    {offering}
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/order"
                  className="group inline-flex items-center justify-center gap-3 bg-primary px-7 py-4 text-xs font-semibold tracking-[0.2em] text-black uppercase transition-colors hover:bg-primary/90"
                >
                  Start Your Order
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={COMPANY.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 border border-white/25 px-7 py-4 text-xs tracking-[0.2em] text-white uppercase transition-colors hover:border-primary hover:text-primary"
                >
                  {COMPANY.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs tracking-[0.24em] text-primary uppercase">
              Signature Experience
            </p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Florals that feel as extra as the occasion
            </h2>
            <p className="mt-5 text-base text-foreground/70 sm:text-lg">
              Bloomify Boutique is built for wrapped ramós — custom color
              stories, boutique paper, and add-ons that turn a bouquet into a
              moment.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {signatureHighlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article
                  key={highlight.title}
                  className="group rounded-3xl border border-primary/15 bg-linear-to-b from-white to-primary/5 p-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="inline-flex rounded-2xl bg-primary/15 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-2xl">{highlight.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70 sm:text-base">
                    {highlight.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="text-xs tracking-[0.24em] text-primary uppercase">
              Ordering Made Simple
            </p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              From form to full ramó in four steps
            </h2>
            <p className="mt-5 max-w-2xl text-base text-foreground/70 sm:text-lg">
              No more guessing over DMs. Share the details once, confirm a
              deposit, and Bloomify handles the design, wrap, and pickup or
              delivery.
            </p>
            <Link
              href="/order"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold tracking-[0.18em] uppercase text-primary-foreground transition hover:brightness-95"
            >
              Order a Bouquet
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-3xl border border-primary/15 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.07)] sm:p-8">
            <ul className="space-y-4">
              {orderingFlow.map((step, index) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                    {index + 1}
                  </span>
                  <div className="flex items-start gap-2 text-foreground/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{step}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/10 p-4">
              <p className="text-sm leading-relaxed text-foreground/80">
                A 50% deposit locks your order. Preferred payment: Zelle, Cash
                App, or Apple Pay.
              </p>
            </div>
          </div>
        </div>
      </section>
      <PricingPreview />
      <GalleryTeaser />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 rounded-[2rem] border border-primary/15 bg-linear-to-br from-white via-white to-primary/10 p-8 shadow-[0_12px_40px_rgba(0,0,0,0.07)] lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs tracking-[0.24em] text-primary uppercase">
                Perfect For
              </p>
              <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
                The milestones — and the random Tuesday
              </h2>
              <p className="mt-4 max-w-2xl text-foreground/70">
                Whether it is grad night, a proposal, or a surprise drop-off,
                Bloomify wraps the bouquet to match the moment.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {idealOccasions.map((occasion) => (
                  <span
                    key={occasion}
                    className="rounded-full border border-primary/20 bg-white px-4 py-2 text-xs tracking-[0.13em] uppercase text-foreground/75"
                  >
                    {occasion}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/order"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold tracking-[0.17em] uppercase text-primary-foreground transition hover:brightness-95"
              >
                Order Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-white px-6 py-3 text-sm font-semibold tracking-[0.17em] uppercase text-foreground transition hover:border-primary/60"
              >
                See the Work
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <TestimonialsSection /> */}
      <CtaStrip />
    </>
  );
}
