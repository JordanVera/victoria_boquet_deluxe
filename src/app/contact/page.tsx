import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Camera, Clock } from 'lucide-react';
import InquiryForm from '@/components/contact/InquiryForm';
import { COMPANY } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Contact Bloomify Boutique',
  description:
    'Contact Bloomify Boutique in El Paso to ask about custom ramós, wrapping, graduation florals, Far East El Paso pickup, or delivery. Se habla español.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/gallery/gallery-08.png"
          alt={`Contact ${COMPANY.name} in El Paso`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#e56b8c] text-[10px] tracking-[0.4em] uppercase mb-4">
            Say Hello
          </p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16">
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-[#e56b8c] text-[10px] tracking-[0.35em] uppercase mb-4">
                Questions & Custom Orders
              </p>
              <h2 className="font-serif text-foreground text-3xl sm:text-4xl">
                Let&apos;s Plan Your Bouquet
              </h2>
              <p className="text-foreground/60 mt-4 leading-relaxed">
                Ready to order? Use the bouquet form. Have a question about
                colors, wrapping, or timing? Send a note here or DM{' '}
                {COMPANY.instagramHandle}. {COMPANY.languages}.
              </p>
            </div>

            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#e56b8c]/30 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-[#e56b8c]" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">
                    Pickup
                  </p>
                  <p className="text-foreground">
                    {COMPANY.address}
                    <br />
                    {COMPANY.city}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#e56b8c]/30 flex items-center justify-center flex-shrink-0">
                  <Clock size={14} className="text-[#e56b8c]" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">
                    Hours
                  </p>
                  <p className="text-foreground">
                    Custom orders · Pickup & delivery by arrangement
                  </p>
                </div>
              </li>
            </ul>

            <a
              href={COMPANY.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 border border-border hover:border-[#e56b8c]/50 text-foreground/60 hover:text-[#e56b8c] text-xs transition-all w-fit"
            >
              <Camera size={13} /> Instagram {COMPANY.instagramHandle}
            </a>
          </div>

          <div className="bg-card border border-border p-8 md:p-10">
            <h3 className="font-serif text-foreground text-2xl mb-2">
              Send a Message
            </h3>
            <p className="text-foreground/50 text-sm mb-8">
              Tell us about the occasion and we&apos;ll help you build the right
              ramó — or point you to the full order form.
            </p>
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
