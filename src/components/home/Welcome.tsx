'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useI18n } from '@/components/i18n/LanguageProvider';

const anim = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Welcome() {
  const { t } = useI18n();

  return (
    <section className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16 items-start">
          <motion.div {...anim(0)} className="flex flex-col gap-4">
            <span className="text-[#e56b8c] text-[10px] tracking-[0.35em] uppercase">
              {t.welcome.eyebrow}
            </span>
            <div className="h-px w-16 bg-[#e56b8c]" />
            <p className="text-xs tracking-[0.2em] uppercase text-foreground/40 mt-4">
              {t.company.serviceArea}
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.h2
              {...anim(0.1)}
              className="font-serif text-4xl sm:text-5xl leading-tight text-foreground"
            >
              {t.welcome.title}{' '}
              <em className="italic text-[#e56b8c]">{t.welcome.titleEm}</em>
            </motion.h2>
            <motion.p
              {...anim(0.2)}
              className="text-foreground/65 leading-relaxed text-base sm:text-lg"
            >
              {t.about.intro} {t.about.body}
            </motion.p>
            <motion.p
              {...anim(0.3)}
              className="text-foreground/65 leading-relaxed text-base sm:text-lg"
            >
              {t.about.evolution}
            </motion.p>
            <motion.div
              {...anim(0.4)}
              className="flex gap-8 pt-4 border-t border-border"
            >
              {t.welcome.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl text-[#e56b8c]">
                    {stat.number}
                  </p>
                  <p className="text-xs text-foreground/50 tracking-wide mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
            <motion.div {...anim(0.5)}>
              <Link
                href="/about"
                className="inline-flex items-center text-[#e56b8c] text-xs tracking-[0.2em] uppercase hover:underline underline-offset-4"
              >
                {t.welcome.learnMore}
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-20">
          {t.about.highlights.map((item, i) => (
            <motion.div
              key={item.title}
              {...anim(0.1 * i)}
              className="border border-border p-6"
            >
              <h3 className="font-serif text-xl text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
