import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProduct, products, formatPrice } from "@/lib/products";
import { ProductImage } from "@/components/ProductImage";
import { ProductCard } from "@/components/ProductCard";
import { AddToBag } from "@/components/AddToBag";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProduct(params.slug);
  if (!product) return { title: "SAMAR" };
  return {
    title: `${product.name} — SAMAR`,
    description: product.description,
  };
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, 3);
  const fill =
    related.length < 3
      ? products.filter(
          (p) => p.slug !== product.slug && !related.includes(p)
        ).slice(0, 3 - related.length)
      : [];
  const youMayAlsoLike = [...related, ...fill];

  return (
    <>
      {/* Breadcrumb */}
      <div className="px-8 pt-10 text-[11px] uppercase tracking-[.2em] text-ink/50 md:px-12">
        <Link href="/shop" className="hover:text-ink">
          Collection
        </Link>
        <span className="mx-2">/</span>
        <span>{product.category}</span>
      </div>

      {/* Detail */}
      <section className="grid grid-cols-1 gap-12 px-8 py-12 md:grid-cols-2 md:gap-16 md:px-12 md:py-16">
        <div className="md:sticky md:top-28 md:self-start">
          <ProductImage
            swatch={product.swatch}
            caption={product.caption}
            image={product.image}
            ratio="4/5"
          />
        </div>

        <div className="flex flex-col gap-8 md:max-w-[440px]">
          <div className="flex flex-col gap-4">
            <span className="eyebrow">{product.category}</span>
            <h1 className="font-serif text-[clamp(30px,4vw,42px)] font-normal leading-[1.1]">
              {product.name}
            </h1>
            <div className="text-[18px] font-light">
              {formatPrice(product.price)}
            </div>
          </div>

          <p className="text-[15px] font-light leading-[1.8] text-ink/[.72]">
            {product.description}
          </p>

          <AddToBag product={product} />

          <div className="flex flex-col gap-4 border-t border-ink/[.14] pt-7">
            <span className="eyebrow">The making</span>
            <ul className="flex flex-col gap-2.5 text-[14px] font-light text-ink/[.72]">
              {product.details.map((d) => (
                <li key={d} className="flex gap-3">
                  <span className="text-bronze">—</span>
                  {d}
                </li>
              ))}
            </ul>
            <div className="mt-2 text-[13px] font-light text-ink/55">
              {product.material} · {product.origin}
            </div>
          </div>
        </div>
      </section>

      {/* You may also like */}
      {youMayAlsoLike.length > 0 && (
        <section className="border-t border-ink/[.12] px-8 py-20 md:px-12">
          <Reveal className="mb-11 font-serif text-[clamp(26px,4vw,34px)]">
            You may also like
          </Reveal>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3">
            {youMayAlsoLike.map((p, i) => (
              <Reveal key={p.slug} delay={i * 120}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
