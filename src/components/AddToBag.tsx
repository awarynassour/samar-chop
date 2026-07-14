"use client";

import { useState } from "react";
import { Product } from "@/lib/products";
import { useCart } from "./CartProvider";

export function AddToBag({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [size, setSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState(false);

  const handleAdd = () => {
    if (!size) {
      setError(true);
      return;
    }
    addItem({
      slug: product.slug,
      name: product.name,
      price: product.price,
      size,
      swatch: product.swatch,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <div className="flex items-baseline justify-between">
          <span className="eyebrow">Size</span>
          <span className="text-[11px] uppercase tracking-[.24em] text-ink/50">
            Size guide
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((s) => {
            const active = s === size;
            return (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setSize(s);
                  setError(false);
                }}
                aria-pressed={active}
                className={`min-w-[52px] border px-3 py-3 text-[12px] tracking-[.08em] transition-colors duration-300 ${
                  active
                    ? "border-ink bg-ink text-ivory"
                    : "border-ink/25 hover:border-ink"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
        {error && (
          <p className="text-[11px] uppercase tracking-[.2em] text-bronze">
            Please select a size
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={handleAdd}
        className="inline-block border border-ink px-9 py-4 text-[11px] uppercase tracking-[.24em] transition-colors duration-300 hover:bg-ink hover:text-ivory hover:opacity-100"
      >
        {added ? "Added to bag ✓" : "Add to bag"}
      </button>
    </div>
  );
}
