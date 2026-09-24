'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useI18n } from '@/components/i18n/LanguageProvider';

export default function FaqAccordion() {
  const { t } = useI18n();

  return (
    <Accordion multiple hiddenUntilFound className="w-full">
      {t.faq.items.map((faq) => (
        <AccordionItem
          key={faq.question}
          value={faq.question}
          className="border-b border-border"
        >
          <AccordionTrigger className="rounded-none py-6 font-serif text-lg font-normal text-foreground hover:text-[#7A2432] hover:no-underline sm:text-xl">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-base leading-relaxed text-foreground/65">
            <p>{faq.answer}</p>
            {'link' in faq && faq.link ? (
              <Link
                href={faq.link.href}
                className="mt-4 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#7A2432] uppercase transition-all hover:gap-3"
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
