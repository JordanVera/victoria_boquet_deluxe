'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQS } from '@/lib/data';

export default function FaqAccordion() {
  return (
    <Accordion multiple hiddenUntilFound className="w-full">
      {FAQS.map((faq) => (
        <AccordionItem
          key={faq.question}
          value={faq.question}
          className="border-b border-border"
        >
          <AccordionTrigger className="rounded-none py-6 font-serif text-lg font-normal text-foreground hover:text-[#e56b8c] hover:no-underline sm:text-xl">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-base leading-relaxed text-foreground/65">
            <p>{faq.answer}</p>
            {faq.link ? (
              <Link
                href={faq.link.href}
                className="mt-4 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#e56b8c] uppercase transition-all hover:gap-3"
              >
                {faq.link.label} <ArrowRight size={12} />
              </Link>
            ) : null}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
