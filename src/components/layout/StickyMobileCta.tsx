'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { COMPANY } from '@/lib/data';

const HIDDEN_PATHS = new Set(['/order', '/thank-you']);

export default function StickyMobileCta() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (HIDDEN_PATHS.has(pathname)) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 sm:hidden transition-transform duration-300 ease-out ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!visible}
    >
      <div className="border-t border-white/10 bg-black/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(0,0,0,0.35)] backdrop-blur-md">
        <div className="mx-auto flex max-w-lg items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate font-serif text-sm text-white">
              {COMPANY.shortName}
            </p>
            <p className="truncate text-[10px] tracking-[0.15em] text-white/50 uppercase">
              El Paso · Order your ramó
            </p>
          </div>
          <Link
            href="/order"
            tabIndex={visible ? 0 : -1}
            className="shrink-0 bg-[#e56b8c] px-5 py-3 text-[10px] font-medium tracking-[0.2em] text-black uppercase transition-colors hover:bg-[#d15476]"
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
}
