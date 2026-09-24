'use client';

import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { LOCALES, type Locale } from '@/i18n/config';
import { setLocale } from '@/i18n/actions';
import { useI18n } from '@/components/i18n/LanguageProvider';
import { cn } from '@/lib/utils';

export default function LanguageToggle({
  className,
}: {
  className?: string;
}) {
  const { locale, t } = useI18n();
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onSelect = (next: Locale) => {
    if (next === locale || pending) return;
    startTransition(async () => {
      await setLocale(next);
      router.refresh();
    });
  };

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className={cn(
        'inline-flex items-center rounded-full border border-white/30 p-0.5 text-[10px] tracking-[0.18em] uppercase',
        pending && 'opacity-70',
        className,
      )}
    >
      {LOCALES.map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            aria-pressed={active}
            disabled={pending}
            onClick={() => onSelect(code)}
            className={cn(
              'rounded-full px-2 py-1 transition-colors',
              active
                ? 'bg-white text-primary'
                : 'text-white/70 hover:text-white',
            )}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
