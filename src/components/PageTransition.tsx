"use client";

import { usePathname } from "next/navigation";

/**
 * Re-keys its subtree on route change so the `page-enter` CSS animation
 * (fade + rise) replays on every navigation.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
}
