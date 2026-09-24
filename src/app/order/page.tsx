import type { Metadata } from 'next';
import Image from 'next/image';
import OrderForm from '@/components/order/OrderForm';
import { COMPANY } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Order a Custom Bouquet',
  description:
    'Order a custom Bloomify Boutique ramó in El Paso. Choose rose count, colors, wrapping, add-ons, and pickup or delivery. A 50% deposit places the order.',
  path: '/order',
});

export default function OrderPage() {
  return (
    <>
      <section className="relative h-64 overflow-hidden sm:h-80">
        <Image
          src="/gallery/gallery-01.png"
          alt="Order a custom ramó from Bloomify Boutique"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="mb-4 text-[10px] tracking-[0.4em] text-[#e56b8c] uppercase">
            Custom Floral Order
          </p>
          <h1 className="font-serif text-5xl text-white sm:text-6xl">
            Order a Bouquet
          </h1>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mx-auto max-w-xl text-foreground/60 leading-relaxed">
              Create your bouquet by selecting style, colors, wrapping, and
              add-ons. Once submitted, Bloomify will confirm the details and
              send 50% deposit information to place the order. You can also
              order via Instagram {COMPANY.instagramHandle}.
            </p>
          </div>
          <div className="border border-border bg-card p-6 sm:p-10">
            <OrderForm />
          </div>
        </div>
      </section>
    </>
  );
}
