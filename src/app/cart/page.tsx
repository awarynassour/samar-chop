"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { ProductImage } from "@/components/ProductImage";
import { formatPrice } from "@/lib/products";

export default function CartPage() {
  const { items, subtotal, updateQty, removeItem, ready } = useCart();

  if (ready && items.length === 0) {
    return (
      <section className="mx-auto flex min-h-[52vh] max-w-[560px] flex-col items-center justify-center gap-7 px-8 py-24 text-center">
        <h1 className="font-serif text-[clamp(32px,5vw,44px)]">Your bag is empty</h1>
        <p className="max-w-[360px] text-[15px] font-light leading-[1.7] text-ink/[.72]">
          Nothing here yet. The collection is waiting — silk, wool and cashmere,
          made to be kept.
        </p>
        <Link
          href="/shop"
          className="inline-block border border-ink px-9 py-4 text-[11px] uppercase tracking-[.24em] transition-all duration-[350ms] hover:bg-ink hover:text-ivory hover:opacity-100"
        >
          Explore the collection
        </Link>
      </section>
    );
  }

  return (
    <section className="px-8 py-16 md:px-12 md:py-20">
      <h1 className="mb-12 font-serif text-[clamp(36px,6vw,56px)]">Your Bag</h1>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_360px]">
        {/* Line items */}
        <div className="flex flex-col">
          {items.map((item) => (
            <div
              key={`${item.slug}-${item.size}`}
              className="flex gap-6 border-t border-ink/[.14] py-7 first:border-t-0 first:pt-0"
            >
              <Link
                href={`/product/${item.slug}`}
                className="w-[96px] shrink-0 hover:opacity-100 sm:w-[120px]"
              >
                <ProductImage swatch={item.swatch} ratio="4/5" />
              </Link>

              <div className="flex flex-1 flex-col justify-between gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1.5">
                    <Link
                      href={`/product/${item.slug}`}
                      className="font-serif text-[20px] hover:opacity-100"
                    >
                      {item.name}
                    </Link>
                    <div className="text-[11px] uppercase tracking-[.2em] text-ink/55">
                      Size {item.size}
                    </div>
                  </div>
                  <div className="text-[14px] font-light">
                    {formatPrice(item.price * item.qty)}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center border border-ink/25">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      onClick={() => updateQty(item.slug, item.size, item.qty - 1)}
                      className="px-3 py-2 text-[15px] transition-colors hover:bg-ink hover:text-ivory hover:opacity-100"
                    >
                      −
                    </button>
                    <span className="min-w-[36px] text-center text-[13px]">
                      {item.qty}
                    </span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() => updateQty(item.slug, item.size, item.qty + 1)}
                      className="px-3 py-2 text-[15px] transition-colors hover:bg-ink hover:text-ivory hover:opacity-100"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.slug, item.size)}
                    className="border-b border-ink/40 pb-0.5 text-[11px] uppercase tracking-[.2em] text-ink/55 transition-colors hover:text-ink hover:opacity-100"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <aside className="h-max border border-ink/[.16] bg-ivory-band p-8 lg:sticky lg:top-28">
          <h2 className="mb-6 font-serif text-[24px]">Summary</h2>
          <div className="flex flex-col gap-3 text-[14px] font-light">
            <div className="flex justify-between">
              <span className="text-ink/[.72]">Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ink/[.72]">Shipping</span>
              <span className="text-bronze">Complimentary</span>
            </div>
          </div>
          <div className="mt-6 flex items-baseline justify-between border-t border-ink/[.14] pt-6">
            <span className="text-[11px] uppercase tracking-[.24em]">Total</span>
            <span className="font-serif text-[24px]">{formatPrice(subtotal)}</span>
          </div>
          <Link
            href="/checkout"
            className="mt-8 block border border-ink px-9 py-4 text-center text-[11px] uppercase tracking-[.24em] transition-all duration-[350ms] hover:bg-ink hover:text-ivory hover:opacity-100"
          >
            Proceed to checkout
          </Link>
          <Link
            href="/shop"
            className="mt-4 block text-center text-[11px] uppercase tracking-[.2em] text-ink/55 hover:text-ink hover:opacity-100"
          >
            Continue shopping
          </Link>
        </aside>
      </div>
    </section>
  );
}
