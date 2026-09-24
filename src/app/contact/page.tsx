import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Clock } from 'lucide-react';
import InquiryForm from '@/components/contact/InquiryForm';
import { COMPANY } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';
import { getDictionary } from '@/i18n';
import { getLocale } from '@/i18n/get-locale';

export const metadata: Metadata = pageMetadata({
  title: 'Contact Victoria Boquet Deluxe',
  description:
    'Contact Victoria Boquet Deluxe in Houston to ask about custom ramós, wrapping, graduation florals, Houston pickup, or delivery. Se habla español.',
  path: '/contact',
});

export default async function ContactPage() {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/gallery/gallery-08.png"
          alt={t.contact.heroAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#7A2432] text-[10px] tracking-[0.4em] uppercase mb-4">
            {t.contact.eyebrow}
          </p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">
            {t.contact.title}
          </h1>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16">
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-[#7A2432] text-[10px] tracking-[0.35em] uppercase mb-4">
                {t.contact.questionsEyebrow}
              </p>
              <h2 className="font-serif text-foreground text-3xl sm:text-4xl">
                {t.contact.heading}
              </h2>
              <p className="text-foreground/60 mt-4 leading-relaxed">
                {t.contact.body} {COMPANY.instagramHandle}. {t.company.languages}.
              </p>
            </div>

            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#7A2432]/30 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-[#7A2432]" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">
                    {t.contact.pickup}
                  </p>
                  <p className="text-foreground">
                    {t.company.address}
                    <br />
                    {COMPANY.city}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#7A2432]/30 flex items-center justify-center flex-shrink-0">
                  <Clock size={14} className="text-[#7A2432]" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">
                    {t.contact.hours}
                  </p>
                  <p className="text-foreground">{t.contact.hoursValue}</p>
                </div>
              </li>
            </ul>

            <a
              href={COMPANY.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 border border-border hover:border-[#7A2432]/50 text-foreground/60 hover:text-[#7A2432] text-xs transition-all w-fit"
            >
              {t.contact.instagram} {COMPANY.instagramHandle}
            </a>
          </div>

          <div className="bg-card border border-border p-8 md:p-10">
            <h3 className="font-serif text-foreground text-2xl mb-2">
              {t.contact.formTitle}
            </h3>
            <p className="text-foreground/50 text-sm mb-8">{t.contact.formHelp}</p>
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
