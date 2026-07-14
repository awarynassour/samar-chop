"use client";

import { useEffect, useRef } from "react";

type ParallaxProps = {
  /** Movement factor per pixel scrolled, e.g. -0.08 (matches the prototype). */
  factor?: number;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

/**
 * Translates its content vertically as it moves through the viewport, porting
 * the data-parallax behaviour from the 1a prototype (here driven by the window
 * scroll position rather than an inner scroll root).
 */
export function Parallax({
  factor = -0.08,
  className = "",
  style,
  children,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      // Offset from viewport centre — keeps motion balanced around the section.
      const fromCenter = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translateY(${(fromCenter * factor).toFixed(1)}px)`;
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [factor]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
