import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { Parallax } from "@/components/Parallax";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

const edit = products.slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="grid min-h-[660px] grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-7 px-8 py-16 md:px-16 md:py-[84px]">
          <Reveal delay={0} className="eyebrow">
            Autumn — Winter 2026
          </Reveal>
          <Reveal
            delay={120}
            className="font-serif italic"
            style={{
              fontSize: "clamp(44px, 6vw, 72px)",
              lineHeight: 1.04,
              textWrap: "balance",
            }}
          >
            Quiet pieces for loud lives.
          </Reveal>
          <Reveal
            delay={260}
            className="max-w-[400px] text-[15px] font-light leading-[1.7] text-ink/[.72]"
          >
            Silk, double-face wool and cashmere — cut in Como, finished by hand,
            made to be kept.
          </Reveal>
          <Reveal delay={400} className="mt-2 flex gap-3.5">
            <Link
              href="/shop"
              className="inline-block border border-ink px-9 py-4 text-[11px] uppercase tracking-[.24em] transition-all duration-[350ms] hover:bg-ink hover:text-ivory hover:opacity-100"
            >
              Explore the collection
            </Link>
          </Reveal>
        </div>

        <div className="relative min-h-[360px] overflow-hidden md:min-h-full">
          <Parallax
            factor={-0.08}
            className="absolute inset-x-0 -inset-y-16 flex items-center justify-center"
          >
            <img
              src="/images/hero-campaign.png"
              alt="SAMAR Autumn/Winter Campaign"
              className="h-full w-full object-cover"
              style={{
                animation: "sm-kenburns 16s ease-in-out infinite alternate",
              }}
            />
          </Parallax>
        </div>
      </section>

      {/* ---------------- MARQUEE ---------------- */}
      <Marquee />

      {/* ---------------- THE EDIT ---------------- */}
      <section className="px-8 pb-10 pt-24 md:px-12">
        <Reveal className="mb-11 flex items-baseline justify-between">
          <h2 className="font-serif text-[clamp(32px,5vw,42px)] font-normal">
            The Edit
          </h2>
          <Link
            href="/shop"
            className="border-b border-ink pb-1 text-[11px] uppercase tracking-[.24em]"
          >
            View all
          </Link>
        </Reveal>
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3">
          {edit.map((product, i) => (
            <Reveal key={product.slug} delay={i * 140}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- ATELIER ---------------- */}
      <section
        id="atelier"
        className="mt-14 grid grid-cols-1 bg-ink text-ivory md:grid-cols-2"
      >
        <div className="relative min-h-[320px] overflow-hidden md:min-h-[520px]">
          <Parallax
            factor={-0.05}
            className="absolute inset-x-0 -inset-y-12 flex items-center justify-center"
          >
            <img
              src="/images/atelier-sewing.png"
              alt="SAMAR Atelier craftsmanship"
              className="h-full w-full object-cover"
            />
          </Parallax>
        </div>
        <div className="flex flex-col justify-center gap-6 px-10 py-20 md:px-[72px] md:py-24">
          <Reveal
            className="text-[11px] uppercase"
            style={{ letterSpacing: ".32em", color: "var(--gold)" }}
          >
            The Atelier
          </Reveal>
          <Reveal
            delay={120}
            className="font-serif font-normal leading-[1.15]"
            style={{ fontSize: "clamp(32px,4.5vw,44px)", textWrap: "balance" }}
          >
            Como, Italia. Twelve hands per garment.
          </Reveal>
          <Reveal
            delay={240}
            className="max-w-[380px] text-[14px] font-light leading-[1.8] text-ivory/70"
          >
            Every Samar piece passes through the same workshop that has dressed
            the quietly powerful since 1987.
          </Reveal>
          <Reveal delay={360}>
            <Link
              href="/shop"
              className="w-max border-b pb-1 text-[11px] uppercase tracking-[.24em]"
              style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
            >
              Our story
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
