export type Product = {
  slug: string;
  name: string;
  price: number;
  category: "Silk" | "Wool" | "Cashmere" | "Evening";
  material: string;
  origin: string;
  description: string;
  details: string[];
  sizes: string[];
  /** Two tones for the fabric-swatch placeholder image [stripe, base]. */
  swatch: [string, string];
  /** Short caption shown on the placeholder, echoing the prototype. */
  caption: string;
  image: string;
};

export const products: Product[] = [
  {
    slug: "column-dress-raw-silk",
    name: "Column Dress in Raw Silk",
    price: 1240,
    category: "Silk",
    material: "100% raw silk",
    origin: "Cut in Como, finished by hand",
    description:
      "A single clean line from shoulder to floor. Raw silk holds the light without shine — quiet, exacting, made to be kept.",
    details: [
      "Bias-cut through the body",
      "Concealed side seam closure",
      "Fully lined in silk habotai",
      "Dry clean by a specialist",
    ],
    sizes: ["36", "38", "40", "42", "44"],
    swatch: ["#e7ddcc", "#eee5d6"],
    caption: "product — column dress",
    image: "/images/column-dress.png",
  },
  {
    slug: "double-face-wool-coat",
    name: "Double-Face Wool Coat",
    price: 2890,
    category: "Wool",
    material: "Double-face virgin wool",
    origin: "Cut in Como, finished by hand",
    description:
      "No lining, no interfacing — two faces of wool bonded and closed by hand. The seams are the structure. It falls like a coat should.",
    details: [
      "Hand-finished double-face construction",
      "Set-in sleeve, dropped shoulder",
      "Horn buttons",
      "Made to be worn a lifetime",
    ],
    sizes: ["36", "38", "40", "42"],
    swatch: ["#e2d6c2", "#eae0cf"],
    caption: "product — wool coat",
    image: "/images/wool-coat.png",
  },
  {
    slug: "bias-satin-skirt",
    name: "Bias Satin Skirt",
    price: 960,
    category: "Silk",
    material: "Silk satin",
    origin: "Cut in Como, finished by hand",
    description:
      "Cut on the true bias so it moves with you and settles into a soft column at rest. Satin on the outside, matte silk against the skin.",
    details: [
      "True bias cut",
      "Hidden side zip",
      "Hand-rolled hem",
      "Dry clean only",
    ],
    sizes: ["36", "38", "40", "42", "44"],
    swatch: ["#e9dfcd", "#f0e8d9"],
    caption: "product — satin skirt",
    image: "/images/satin-skirt.png",
  },
  {
    slug: "cashmere-shell",
    name: "Cashmere Shell",
    price: 740,
    category: "Cashmere",
    material: "Grade-A Mongolian cashmere",
    origin: "Knit in Como, finished by hand",
    description:
      "A sleeveless shell in a close, fine gauge. The kind of piece you reach for first and keep for years.",
    details: [
      "12-gauge fine knit",
      "Fully fashioned shoulders",
      "Ribbed neck and armholes",
      "Hand wash cold, dry flat",
    ],
    sizes: ["XS", "S", "M", "L"],
    swatch: ["#e6dcc9", "#efe6d5"],
    caption: "product — cashmere shell",
    image: "/images/cashmere-shell.png",
  },
  {
    slug: "silk-column-shirt",
    name: "Silk Column Shirt",
    price: 620,
    category: "Silk",
    material: "Sandwashed silk",
    origin: "Cut in Como, finished by hand",
    description:
      "A fluid shirt with a long, clean placket. Sandwashed until the silk goes matte and soft — nothing about it announces itself.",
    details: [
      "Sandwashed silk crêpe de chine",
      "Mother-of-pearl buttons",
      "French seams throughout",
      "Dry clean only",
    ],
    sizes: ["36", "38", "40", "42"],
    swatch: ["#e8decb", "#f1e9da"],
    caption: "product — silk shirt",
    image: "/images/silk-shirt.png",
  },
  {
    slug: "cashmere-wrap-coat",
    name: "Cashmere Wrap Coat",
    price: 3200,
    category: "Cashmere",
    material: "Cashmere and wool blend",
    origin: "Cut in Como, finished by hand",
    description:
      "A belted wrap with no buttons and no rules — it closes the way you want it to. Weightless for the warmth it gives.",
    details: [
      "Self-tie belt, no closure",
      "Patch pockets",
      "Raglan sleeve",
      "Dry clean by a specialist",
    ],
    sizes: ["36", "38", "40", "42"],
    swatch: ["#e3d8c4", "#ece2d1"],
    caption: "product — wrap coat",
    image: "/images/wool-coat.png",
  },
  {
    slug: "bias-slip-dress",
    name: "Bias Slip Dress",
    price: 890,
    category: "Evening",
    material: "Silk charmeuse",
    origin: "Cut in Como, finished by hand",
    description:
      "The evening piece that reads as nothing at all until the light finds it. Cut on the bias, held by two fine straps.",
    details: [
      "True bias cut",
      "Adjustable straps",
      "Hand-rolled hem",
      "Dry clean only",
    ],
    sizes: ["36", "38", "40", "42"],
    swatch: ["#e5dbc8", "#eee4d3"],
    caption: "product — slip dress",
    image: "/images/satin-skirt.png",
  },
  {
    slug: "wool-trouser",
    name: "Wide Wool Trouser",
    price: 780,
    category: "Wool",
    material: "Virgin wool gabardine",
    origin: "Cut in Como, finished by hand",
    description:
      "A high, clean waist falling to a wide, quiet leg. Pressed once and it holds — the trouser you build a wardrobe around.",
    details: [
      "High rise, wide leg",
      "Hook-and-bar closure",
      "Slant pockets",
      "Dry clean only",
    ],
    sizes: ["36", "38", "40", "42", "44"],
    swatch: ["#e4d9c6", "#ede3d2"],
    caption: "product — wool trouser",
    image: "/images/cashmere-shell.png",
  },
  {
    slug: "evening-column-gown",
    name: "Evening Column Gown",
    price: 2480,
    category: "Evening",
    material: "Silk double-georgette",
    origin: "Cut in Como, finished by hand",
    description:
      "Floor-length and unbroken, in a double layer of georgette that moves like water and covers like cloth. For the rooms that matter.",
    details: [
      "Double-georgette construction",
      "Concealed back zip",
      "Built-in silk lining",
      "Dry clean by a specialist",
    ],
    sizes: ["36", "38", "40", "42"],
    swatch: ["#e6dcca", "#efe5d4"],
    caption: "product — evening gown",
    image: "/images/column-dress.png",
  },
];

export const categories = ["All", "Silk", "Wool", "Cashmere", "Evening"] as const;
export type Category = (typeof categories)[number];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(value: number): string {
  return "€" + value.toLocaleString("en-US");
}
