'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { COMPANY } from '@/lib/data';
import { useI18n } from '@/components/i18n/LanguageProvider';

export default function CtaStrip() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden py-24 px-6 lg:px-8">
      <Image
        src="/gallery/gallery-01.png"
        alt={t.cta.imageAlt}
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-[10px] tracking-[0.4em] text-[#C9A46C] uppercase"
        >
          {t.cta.eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-6 font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl"
        >
          {t.cta.title} <em className="italic">{t.cta.titleEm}</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mb-10 max-w-xl text-base text-white/75 sm:text-lg"
        >
          {t.cta.body}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/order"
            className="bg-[#7A2432] px-8 py-3.5 text-xs tracking-[0.2em] text-white uppercase transition-colors duration-200 hover:bg-[#5F1C27]"
          >
            {t.cta.startOrder}
          </Link>
          <a
            href={COMPANY.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white/50 px-8 py-3.5 text-xs tracking-[0.2em] text-white uppercase transition-all duration-200 hover:border-[#C9A46C] hover:text-[#C9A46C]"
          >
            {COMPANY.instagramHandle}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
