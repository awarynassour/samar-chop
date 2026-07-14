"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

const navLeft = [
  { label: "Collections", href: "/shop" },
  { label: "Atelier", href: "/#atelier" },
  { label: "Journal", href: "/shop" },
];

export function Header() {
  const { count, ready } = useCart();
  const bag = ready ? count : 0;

  return (
    <header
      className="sticky top-0 z-40 flex items-center justify-between border-b border-ink/[.12] px-6 py-5 backdrop-blur-md md:px-12 md:py-[26px]"
      style={{ background: "rgba(246,242,234,.92)" }}
    >
      <nav className="hidden items-center gap-7 text-[11px] uppercase tracking-[.2em] md:flex">
        {navLeft.map((item) => (
          <Link key={item.label} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <Link
        href="/"
        className="font-serif text-[22px] font-medium tracking-wordmark md:text-[26px]"
        style={{ marginLeft: "0.34em" }}
        aria-label="SAMAR — home"
      >
        SAMAR
      </Link>

      <div className="flex items-center gap-6 text-[11px] uppercase tracking-[.2em] md:gap-7">
        <Link href="/shop" className="hidden sm:inline">
          Search
        </Link>
        <Link href="/cart" aria-label={`Bag, ${bag} items`}>
          Bag ({bag})
        </Link>
      </div>
    </header>
  );
}
