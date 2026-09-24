import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';
import { getDictionary } from '@/i18n';
import { getLocale } from '@/i18n/get-locale';

export const metadata: Metadata = pageMetadata({
  title: 'Thank You',
  description: `Thank you for contacting ${COMPANY.name}. We will be in touch soon about your Houston bouquet order.`,
  path: '/thank-you',
  noIndex: true,
});

export default async function ThankYouPage() {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-[#e56b8c] text-[10px] tracking-[0.4em] uppercase mb-6">
        {t.thankYou.eyebrow}
      </p>
      <h1 className="font-serif text-foreground text-4xl sm:text-5xl mb-6">
        {t.thankYou.title}
      </h1>
      <p className="text-foreground/60 max-w-md leading-relaxed mb-10">
        {t.thankYou.body}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-8 py-3.5 bg-[#e56b8c] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#c94f71] transition-colors"
        >
          {t.thankYou.backHome}
        </Link>
        <Link
          href="/pricing"
          className="px-8 py-3.5 border border-border text-foreground text-xs tracking-[0.2em] uppercase hover:border-[#e56b8c] hover:text-[#e56b8c] transition-colors"
        >
          {t.thankYou.viewPricing}
        </Link>
      </div>
    </section>
  );
}
