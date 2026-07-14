"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { products, categories, Category } from "@/lib/products";

export default function ShopPage() {
  const [active, setActive] = useState<Category>("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? products
        : products.filter((p) => p.category === active),
    [active]
  );

  return (
    <section className="px-8 pb-10 pt-16 md:px-12 md:pt-20">
      {/* Header block */}
      <div className="mb-12 flex flex-col gap-6 border-b border-ink/[.14] pb-10">
        <Reveal className="eyebrow">Autumn — Winter 2026</Reveal>
        <Reveal
          delay={120}
          className="font-serif font-normal"
          style={{ fontSize: "clamp(40px,7vw,68px)", lineHeight: 1.05 }}
        >
          The Collection
        </Reveal>
        <Reveal
          delay={240}
          className="max-w-[440px] text-[15px] font-light leading-[1.7] text-ink/[.72]"
        >
          Silk, wool, cashmere and evening — {products.length} pieces, cut in
          Como and finished by hand.
        </Reveal>
      </div>

      {/* Filters */}
      <div className="mb-11 flex flex-wrap items-center gap-x-8 gap-y-3">
        {categories.map((cat) => {
          const isActive = cat === active;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`pb-1 text-[11px] uppercase tracking-[.24em] transition-colors duration-300 ${
                isActive
                  ? "border-b border-ink text-ink"
                  : "border-b border-transparent text-ink/45 hover:text-ink"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div
        key={active}
        className="page-enter grid grid-cols-1 gap-x-7 gap-y-14 sm:grid-cols-2 md:grid-cols-3"
      >
        {visible.map((product, i) => (
          <Reveal key={product.slug} delay={(i % 3) * 120}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
