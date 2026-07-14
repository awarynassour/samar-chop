"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/lib/products";

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  className = "",
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  className?: string;
  required?: boolean;
}) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="text-[11px] uppercase tracking-[.2em] text-ink/60">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="border border-ink/25 bg-transparent px-4 py-3 text-[14px] outline-none transition-colors focus:border-ink"
      />
    </label>
  );
}

export default function CheckoutPage() {
  const { items, subtotal, clear, ready } = useCart();
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <section className="mx-auto flex min-h-[56vh] max-w-[560px] flex-col items-center justify-center gap-7 px-8 py-24 text-center">
        <div className="eyebrow">Order confirmed</div>
        <h1 className="font-serif text-[clamp(34px,5vw,48px)] leading-[1.1]">
          Thank you.
        </h1>
        <p className="max-w-[400px] text-[15px] font-light leading-[1.7] text-ink/[.72]">
          Your order is with the atelier. A confirmation is on its way to your
          inbox, and each piece will be finished by hand before it ships —
          complimentary, and insured.
        </p>
        <Link
          href="/shop"
          className="inline-block border border-ink px-9 py-4 text-[11px] uppercase tracking-[.24em] transition-all duration-[350ms] hover:bg-ink hover:text-ivory hover:opacity-100"
        >
          Continue shopping
        </Link>
      </section>
    );
  }

  if (ready && items.length === 0) {
    return (
      <section className="mx-auto flex min-h-[52vh] max-w-[560px] flex-col items-center justify-center gap-7 px-8 py-24 text-center">
        <h1 className="font-serif text-[clamp(32px,5vw,44px)]">
          Nothing to check out
        </h1>
        <p className="text-[15px] font-light text-ink/[.72]">
          Your bag is empty.
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clear();
    setDone(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="px-8 py-16 md:px-12 md:py-20">
      <h1 className="mb-12 font-serif text-[clamp(36px,6vw,56px)]">Checkout</h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_360px]"
      >
        {/* Form */}
        <div className="flex flex-col gap-12">
          <fieldset className="flex flex-col gap-5">
            <legend className="mb-5 font-serif text-[24px]">Contact</legend>
            <Field label="Email" name="email" type="email" autoComplete="email" />
          </fieldset>

          <fieldset className="flex flex-col gap-5">
            <legend className="mb-5 font-serif text-[24px]">Shipping</legend>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="First name" name="first" autoComplete="given-name" />
              <Field label="Last name" name="last" autoComplete="family-name" />
            </div>
            <Field label="Address" name="address" autoComplete="address-line1" />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              <Field label="City" name="city" autoComplete="address-level2" />
              <Field
                label="Postal code"
                name="postal"
                autoComplete="postal-code"
              />
              <Field label="Country" name="country" autoComplete="country-name" />
            </div>
          </fieldset>

          <fieldset className="flex flex-col gap-5">
            <legend className="mb-5 font-serif text-[24px]">Payment</legend>
            <Field
              label="Card number"
              name="card"
              autoComplete="cc-number"
            />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Expiry (MM/YY)" name="expiry" autoComplete="cc-exp" />
              <Field label="CVC" name="cvc" autoComplete="cc-csc" />
            </div>
            <p className="text-[12px] font-light text-ink/50">
              This is a demonstration checkout — no payment is taken and no data
              is stored.
            </p>
          </fieldset>
        </div>

        {/* Summary */}
        <aside className="h-max border border-ink/[.16] bg-ivory-band p-8 lg:sticky lg:top-28">
          <h2 className="mb-6 font-serif text-[24px]">Your order</h2>
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <div
                key={`${item.slug}-${item.size}`}
                className="flex justify-between gap-4 text-[13px] font-light"
              >
                <span className="text-ink/[.72]">
                  {item.name}
                  <span className="text-ink/45">
                    {" "}
                    · {item.size} · ×{item.qty}
                  </span>
                </span>
                <span className="shrink-0">
                  {formatPrice(item.price * item.qty)}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 border-t border-ink/[.14] pt-6 text-[14px] font-light">
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
            <span className="font-serif text-[24px]">
              {formatPrice(subtotal)}
            </span>
          </div>
          <button
            type="submit"
            className="mt-8 block w-full border border-ink px-9 py-4 text-center text-[11px] uppercase tracking-[.24em] transition-all duration-[350ms] hover:bg-ink hover:text-ivory hover:opacity-100"
          >
            Place order
          </button>
        </aside>
      </form>
    </section>
  );
}
