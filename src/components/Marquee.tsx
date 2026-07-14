const DEFAULT_ITEMS = [
  "Autumn — Winter 2026",
  "Made in Como",
  "Silk & Cashmere",
  "Complimentary shipping",
];

type MarqueeProps = {
  items?: string[];
  /** Seconds per loop. */
  speed?: number;
};

export function Marquee({ items = DEFAULT_ITEMS, speed = 22 }: MarqueeProps) {
  const track = (
    <div className="flex shrink-0 items-center gap-14 pr-14 text-[11px] uppercase tracking-[.3em] whitespace-nowrap text-ink/[.66]">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-14">
          {item}
          <span aria-hidden>·</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden border-y border-ink/[.14] bg-ivory-band py-4">
      <div
        className="flex w-max"
        style={{ animation: `sm-marquee ${speed}s linear infinite` }}
      >
        {track}
        {track}
      </div>
    </div>
  );
}
