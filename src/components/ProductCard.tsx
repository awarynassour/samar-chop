import Link from "next/link";
import { Product, formatPrice } from "@/lib/products";
import { ProductImage } from "./ProductImage";

type ProductCardProps = {
  product: Product;
  ratio?: string;
};

export function ProductCard({ product, ratio = "4/5" }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex flex-col gap-4 hover:opacity-100"
    >
      <ProductImage
        swatch={product.swatch}
        caption={product.caption}
        image={product.image}
        ratio={ratio}
        hover
      />
      <div className="flex items-baseline justify-between gap-4">
        <div className="font-serif text-[20px]">{product.name}</div>
        <div className="text-[13px] font-light">{formatPrice(product.price)}</div>
      </div>
    </Link>
  );
}
