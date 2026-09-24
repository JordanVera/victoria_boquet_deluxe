import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '@/lib/data';
import SocialLinks from '@/components/layout/SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-black text-white/80">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 sm:pb-8 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo-white.png"
                alt={COMPANY.name}
                width={96}
                height={96}
                className="h-20 w-auto"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed">
              Custom floral designs and rose ramós in El Paso — pickup in Far
              East El Paso, delivery available. {COMPANY.languages}.
            </p>
            <SocialLinks linkClassName="text-white/80 hover:text-white" />
          </div>

          <div>
            <h4 className="mb-6 text-xs tracking-[0.25em] text-white uppercase">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs tracking-[0.25em] text-white uppercase">
              Contact
            </h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <a
                  href={COMPANY.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  {COMPANY.instagramHandle}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 shrink-0 text-white" />
                <span>
                  {COMPANY.address}
                  <br />
                  {COMPANY.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 text-xs text-white/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved.
          </p>
          <p>{COMPANY.serviceArea}</p>
        </div>
      </div>
    </footer>
  );
}
