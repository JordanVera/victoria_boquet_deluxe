'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { BOUQUET_PACKAGES } from '@/lib/pricing';

export default function PricingPreview() {
  return (
    <section className="py-24 bg-[#0e0c08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#e56b8c] text-[10px] tracking-[0.35em] uppercase mb-4"
          >
            Rose Ramós
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-white text-4xl sm:text-5xl"
          >
            Bouquet Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/55"
          >
            Choose your count, then customize colors, wrapping, and add-ons.{' '}
            <Link
              href="/order"
              className="text-[#e56b8c] underline-offset-4 transition-colors hover:text-[#d15476] hover:underline"
            >
              Order online
            </Link>
            .
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BOUQUET_PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className={`relative flex flex-col border p-7 ${
                pkg.highlighted
                  ? 'border-[#e56b8c] bg-[#161410]'
                  : 'border-white/10 bg-[#161410]'
              }`}
            >
              {pkg.highlighted ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e56b8c] px-4 py-1 text-[10px] tracking-[0.2em] uppercase text-black">
                  Most Popular
                </span>
              ) : null}
              <p className="text-[#e56b8c] text-[10px] tracking-[0.3em] uppercase">
                {pkg.name}
              </p>
              <p className="font-serif text-4xl text-white mt-3">{pkg.price}</p>
              {pkg.priceNote ? (
                <p className="mt-1 text-xs tracking-[0.16em] text-white/45 uppercase">
                  {pkg.priceNote}
                </p>
              ) : null}
              <p className="text-white/55 text-sm leading-relaxed mt-4 mb-6">
                {pkg.description}
              </p>
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {pkg.features.slice(0, 4).map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2 text-sm text-white/65"
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
                href="/pricing"
                className="inline-flex items-center gap-2 text-[#e56b8c] text-xs tracking-[0.2em] uppercase hover:gap-3 transition-all"
              >
                View Details <ArrowRight size={12} />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/pricing"
            className="inline-flex px-8 py-3.5 border border-[#e56b8c] text-[#e56b8c] text-xs tracking-[0.2em] uppercase hover:bg-[#e56b8c] hover:text-black transition-colors duration-200"
          >
            See Full Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
