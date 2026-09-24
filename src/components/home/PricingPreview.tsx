'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { BOUQUET_PACKAGES } from '@/lib/pricing';
import { useI18n } from '@/components/i18n/LanguageProvider';

export default function PricingPreview() {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-[#0e0c08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#C9A46C] text-[10px] tracking-[0.35em] uppercase mb-4"
          >
            {t.pricing.previewEyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-white text-4xl sm:text-5xl"
          >
            {t.pricing.previewTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/55"
          >
            {t.pricing.previewBody}{' '}
            <Link
              href="/order"
              className="text-[#C9A46C] underline-offset-4 transition-colors hover:text-[#E2C48A] hover:underline"
            >
              {t.pricing.orderOnline}
            </Link>
            .
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BOUQUET_PACKAGES.map((pkg, i) => {
            const copy = t.pricing.packages[pkg.id];
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className={`relative flex flex-col border p-7 ${
                  pkg.highlighted
                    ? 'border-[#7A2432] bg-[#161410]'
                    : 'border-white/10 bg-[#161410]'
                }`}
              >
                {pkg.highlighted ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#7A2432] px-4 py-1 text-[10px] tracking-[0.2em] uppercase text-white">
                    {t.pricing.mostPopular}
                  </span>
                ) : null}
                <p className="text-[#C9A46C] text-[10px] tracking-[0.3em] uppercase">
                  {copy.name}
                </p>
                <p className="font-serif text-4xl text-white mt-3">{pkg.price}</p>
                {copy.priceNote ? (
                  <p className="mt-1 text-xs tracking-[0.16em] text-white/45 uppercase">
                    {copy.priceNote}
                  </p>
                ) : null}
                <p className="text-white/55 text-sm leading-relaxed mt-4 mb-6">
                  {copy.description}
                </p>
                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {copy.features.slice(0, 4).map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-sm text-white/65"
                    >
                      <Check
                        size={14}
                        className="text-[#C9A46C] flex-shrink-0 mt-0.5"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 text-[#C9A46C] text-xs tracking-[0.2em] uppercase hover:gap-3 transition-all"
                >
                  {t.pricing.viewDetails} <ArrowRight size={12} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/pricing"
            className="inline-flex px-8 py-3.5 border border-[#C9A46C] text-[#C9A46C] text-xs tracking-[0.2em] uppercase hover:bg-[#C9A46C] hover:text-black transition-colors duration-200"
          >
            {t.pricing.seeFull}
          </Link>
        </div>
      </div>
    </section>
  );
}
