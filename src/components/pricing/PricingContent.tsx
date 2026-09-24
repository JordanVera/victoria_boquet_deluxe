'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import CtaStrip from '@/components/home/CtaStrip';
import { ADD_ONS, BOUQUET_PACKAGES } from '@/lib/pricing';
import { useI18n } from '@/components/i18n/LanguageProvider';

export default function PricingContent() {
  const { t } = useI18n();

  return (
    <>
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-base leading-relaxed text-foreground/65 sm:text-lg">
            {t.pricing.intro}
          </p>
          <p className="mt-5 text-sm leading-relaxed text-foreground/50">
            {t.pricing.depositLead}{' '}
            <Link
              href="/order"
              className="text-[#e56b8c] underline-offset-4 transition-colors hover:text-[#c94f71] hover:underline"
            >
              {t.pricing.startOrder}
            </Link>
            .
          </p>
        </div>

        <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {BOUQUET_PACKAGES.map((pkg) => {
            const copy = t.pricing.packages[pkg.id];
            return (
              <article
                key={pkg.id}
                className={`flex flex-col border p-8 ${
                  pkg.highlighted
                    ? 'border-[#e56b8c] bg-[#fbf0f3] shadow-lg shadow-[#e56b8c]/10'
                    : 'border-border bg-card'
                }`}
              >
                {pkg.highlighted ? (
                  <span className="self-start bg-[#e56b8c] px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-white mb-4">
                    {t.pricing.mostPopular}
                  </span>
                ) : null}
                <p className="text-[#e56b8c] text-[10px] tracking-[0.3em] uppercase">
                  {copy.name}
                </p>
                <p className="font-serif text-5xl text-foreground mt-2">
                  {pkg.price}
                </p>
                {copy.priceNote ? (
                  <p className="mt-1 text-xs tracking-[0.16em] text-foreground/45 uppercase">
                    {copy.priceNote}
                  </p>
                ) : null}
                <p className="text-foreground/60 text-sm leading-relaxed mt-4 mb-6">
                  {copy.description}
                </p>
                <ul className="flex flex-col gap-3 flex-1">
                  {copy.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2.5 text-sm text-foreground/70"
                    >
                      <Check
                        size={14}
                        className="text-[#e56b8c] flex-shrink-0 mt-0.5"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/order"
                  className="mt-8 inline-flex justify-center bg-[#e56b8c] px-6 py-3 text-xs tracking-[0.2em] uppercase text-white hover:bg-[#c94f71] transition-colors"
                >
                  {t.pricing.orderPackage} {copy.name}
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {ADD_ONS.length > 0 ? (
        <section className="px-6 py-16 lg:px-8 bg-[#0e0c08]">
          <div className="mx-auto max-w-7xl">
            <p className="text-[#f3c4ce] text-[10px] tracking-[0.35em] uppercase mb-4 text-center">
              {t.pricing.addOnsEyebrow}
            </p>
            <h2 className="font-serif text-white text-3xl text-center mb-12">
              {t.pricing.addOnsTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {ADD_ONS.map((addon) => {
                const copy = t.pricing.addOns[addon.id];
                return (
                  <article
                    key={addon.id}
                    className="border border-white/10 bg-[#161410] p-8"
                  >
                    <p className="font-serif text-4xl text-[#f3c4ce]">
                      {addon.price}
                    </p>
                    <h3 className="font-serif text-2xl text-white mt-3">
                      {copy.name}
                    </h3>
                    <p className="text-white/55 text-sm mt-3 mb-6">
                      {copy.description}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {copy.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex gap-2 text-sm text-white/65"
                        >
                          <Check
                            size={14}
                            className="text-[#f3c4ce] flex-shrink-0 mt-0.5"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-6 py-16 lg:px-8 border-t border-border">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl text-foreground mb-6 text-center">
            {t.pricing.notesTitle}
          </h2>
          <ul className="flex flex-col gap-3">
            {t.pricing.notes.map((note) => (
              <li
                key={note}
                className="flex gap-2.5 text-sm text-foreground/65"
              >
                <Check
                  size={14}
                  className="text-[#e56b8c] flex-shrink-0 mt-0.5"
                />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
