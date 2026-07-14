"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";

export type CartItem = {
  slug: string;
  name: string;
  price: number;
  size: string;
  qty: number;
  swatch: [string, string];
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void;
  removeItem: (slug: string, size: string) => void;
  updateQty: (slug: string, size: string, qty: number) => void;
  clear: () => void;
  ready: boolean;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "samar.cart.v1";

function lineKey(slug: string, size: string) {
  return `${slug}::${size}`;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  // Hydrate from localStorage once on mount.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      /* ignore malformed storage */
    }
    setReady(true);
  }, []);

  // Persist on change (after initial hydration).
  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage may be unavailable */
    }
  }, [items, ready]);

  const addItem = useCallback(
    (item: Omit<CartItem, "qty">, qty = 1) => {
      setItems((prev) => {
        const key = lineKey(item.slug, item.size);
        const existing = prev.find((p) => lineKey(p.slug, p.size) === key);
        if (existing) {
          return prev.map((p) =>
            lineKey(p.slug, p.size) === key ? { ...p, qty: p.qty + qty } : p
          );
        }
        return [...prev, { ...item, qty }];
      });
    },
    []
  );

  const removeItem = useCallback((slug: string, size: string) => {
    const key = lineKey(slug, size);
    setItems((prev) => prev.filter((p) => lineKey(p.slug, p.size) !== key));
  }, []);

  const updateQty = useCallback((slug: string, size: string, qty: number) => {
    const key = lineKey(slug, size);
    setItems((prev) =>
      prev
        .map((p) =>
          lineKey(p.slug, p.size) === key ? { ...p, qty: Math.max(0, qty) } : p
        )
        .filter((p) => p.qty > 0)
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((n, i) => n + i.qty, 0);
    const subtotal = items.reduce((n, i) => n + i.qty * i.price, 0);
    return { items, count, subtotal, addItem, removeItem, updateQty, clear, ready };
  }, [items, addItem, removeItem, updateQty, clear, ready]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
