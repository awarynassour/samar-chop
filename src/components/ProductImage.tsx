type ProductImageProps = {
  swatch: [string, string];
  caption?: string;
  image?: string;
  /** CSS aspect-ratio, e.g. "4/5". */
  ratio?: string;
  /** Enable the hover zoom (used inside product cards). */
  hover?: boolean;
  className?: string;
};

/**
 * A product image showing the actual item photograph if available,
 * falling back to the woven-fabric stripe placeholder.
 */
export function ProductImage({
  swatch,
  caption,
  image,
  ratio = "4/5",
  hover = false,
  className = "",
}: ProductImageProps) {
  const [stripe, base] = swatch;
  return (
    <div
      className={`overflow-hidden bg-sand ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {image ? (
        <img
          src={image}
          alt={caption || "Product image"}
          className={`h-full w-full object-cover ${
            hover ? "transition-transform duration-[800ms] group-hover:scale-[1.06]" : ""
          }`}
          style={{
            transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
          }}
        />
      ) : (
        <div
          className={`fabric flex h-full w-full items-center justify-center ${
            hover ? "transition-transform duration-[800ms] group-hover:scale-[1.06]" : ""
          }`}
          style={
            {
              "--stripe-a": stripe,
              "--stripe-b": base,
              transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
            } as React.CSSProperties
          }
        >
          {caption && (
            <span className="font-mono text-[11px] text-bronze">{caption}</span>
          )}
        </div>
      )}
    </div>
  );
}
