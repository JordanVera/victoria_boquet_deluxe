'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { REVIEWS, COMPANY } from '@/lib/data';

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-[#FBF6F7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#e56b8c] text-[10px] tracking-[0.35em] uppercase mb-4">
            Loved on Instagram
          </p>
          <h2 className="font-serif text-foreground text-4xl sm:text-5xl">
            What Clients Are Saying
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.slice(0, 3).map((review, i) => (
            <motion.blockquote
              key={review.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-border p-8"
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
              <p className="font-serif text-lg leading-snug text-foreground">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="mt-6">
                <p className="font-serif text-foreground">{review.name}</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mt-1">
                  {review.event}
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={COMPANY.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-border text-foreground/70 text-xs tracking-[0.2em] uppercase hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            See Mentions on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
