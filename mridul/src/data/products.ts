export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  fabric: string;
  category: "Everyday" | "Festive" | "Minimal";
  colors: string[];
  images: string[];
  sareeLength: string;
  blouseLength: string;
  weave: string;
  care: string;
  featured?: boolean;
  bestSeller?: boolean;
  new?: boolean;
};

const img = (seed: string, w = 900, h = 1150) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const PRODUCTS: Product[] = [
  {
    id: "mr-001",
    slug: "soft-mul-cotton-saree-red",
    name: "Soft Mul Cotton Saree",
    price: 1799,
    fabric: "Mul Cotton",
    category: "Everyday",
    colors: ["Red", "Ivory", "Slate"],
    images: [img("mr001-a"), img("mr001-b"), img("mr001-c"), img("mr001-d")],
    sareeLength: "5.3 m",
    blouseLength: "0.8 m",
    weave: "Plain weave, hand-finished edge",
    care: "Gentle hand wash recommended",
    featured: true,
    bestSeller: true,
    new: true,
  },
  {
    id: "mr-002",
    slug: "handwoven-cotton-saree-indigo",
    name: "Handwoven Cotton Saree",
    price: 2499,
    fabric: "Handwoven Cotton",
    category: "Everyday",
    colors: ["Indigo", "Rust"],
    images: [img("mr002-a"), img("mr002-b"), img("mr002-c")],
    sareeLength: "5.5 m",
    blouseLength: "0.8 m",
    weave: "Handloom, self-border",
    care: "Dry clean recommended for first wash",
    bestSeller: true,
    new: true,
  },
  {
    id: "mr-003",
    slug: "everyday-mul-saree-sage",
    name: "Everyday Mul Saree",
    price: 1599,
    fabric: "Mul Cotton",
    category: "Everyday",
    colors: ["Sage", "Dusty Pink"],
    images: [img("mr003-a"), img("mr003-b"), img("mr003-c")],
    sareeLength: "5.3 m",
    blouseLength: "0.8 m",
    weave: "Plain weave",
    care: "Gentle hand wash",
    new: true,
  },
  {
    id: "mr-004",
    slug: "classic-cotton-saree-mustard",
    name: "Classic Cotton Saree",
    price: 1899,
    fabric: "Pure Cotton",
    category: "Everyday",
    colors: ["Mustard", "Teal"],
    images: [img("mr004-a"), img("mr004-b"), img("mr004-c")],
    sareeLength: "5.4 m",
    blouseLength: "0.8 m",
    weave: "Plain weave, contrast border",
    care: "Gentle hand wash",
    new: true,
  },
  {
    id: "mr-005",
    slug: "banaras-silk-saree-wine",
    name: "Banaras Silk Saree",
    price: 6499,
    compareAtPrice: 7999,
    fabric: "Banarasi Silk",
    category: "Festive",
    colors: ["Wine", "Emerald", "Gold"],
    images: [img("mr005-a"), img("mr005-b"), img("mr005-c"), img("mr005-d")],
    sareeLength: "5.5 m",
    blouseLength: "0.9 m",
    weave: "Zari brocade",
    care: "Dry clean only",
    featured: true,
    bestSeller: true,
  },
  {
    id: "mr-006",
    slug: "tussar-silk-saree-clay",
    name: "Tussar Silk Saree",
    price: 4299,
    fabric: "Tussar Silk",
    category: "Festive",
    colors: ["Clay", "Olive"],
    images: [img("mr006-a"), img("mr006-b"), img("mr006-c")],
    sareeLength: "5.4 m",
    blouseLength: "0.8 m",
    weave: "Textured tussar",
    care: "Dry clean recommended",
    bestSeller: true,
  },
  {
    id: "mr-007",
    slug: "chanderi-saree-blush",
    name: "Chanderi Saree",
    price: 3299,
    fabric: "Chanderi Silk Cotton",
    category: "Festive",
    colors: ["Blush", "Ivory"],
    images: [img("mr007-a"), img("mr007-b"), img("mr007-c")],
    sareeLength: "5.4 m",
    blouseLength: "0.8 m",
    weave: "Sheer chanderi, zari border",
    care: "Dry clean only",
  },
  {
    id: "mr-008",
    slug: "kanjivaram-silk-saree-maroon",
    name: "Kanjivaram Silk Saree",
    price: 8999,
    fabric: "Kanjivaram Silk",
    category: "Festive",
    colors: ["Maroon", "Peacock"],
    images: [img("mr008-a"), img("mr008-b"), img("mr008-c"), img("mr008-d")],
    sareeLength: "5.5 m",
    blouseLength: "0.9 m",
    weave: "Temple border zari weave",
    care: "Dry clean only",
    featured: true,
  },
  {
    id: "mr-009",
    slug: "linen-saree-stone",
    name: "Linen Saree",
    price: 2899,
    fabric: "Pure Linen",
    category: "Minimal",
    colors: ["Stone", "Charcoal"],
    images: [img("mr009-a"), img("mr009-b"), img("mr009-c")],
    sareeLength: "5.4 m",
    blouseLength: "0.8 m",
    weave: "Plain weave, raw edge",
    care: "Gentle hand wash",
    bestSeller: true,
  },
  {
    id: "mr-010",
    slug: "handloom-cotton-saree-off-white",
    name: "Handloom Cotton Saree",
    price: 2199,
    fabric: "Handloom Cotton",
    category: "Minimal",
    colors: ["Off White", "Grey"],
    images: [img("mr010-a"), img("mr010-b"), img("mr010-c")],
    sareeLength: "5.5 m",
    blouseLength: "0.8 m",
    weave: "Handloom, tonal stripe",
    care: "Gentle hand wash",
  },
  {
    id: "mr-011",
    slug: "matka-silk-saree-taupe",
    name: "Matka Silk Saree",
    price: 3699,
    fabric: "Matka Silk",
    category: "Minimal",
    colors: ["Taupe", "Black"],
    images: [img("mr011-a"), img("mr011-b"), img("mr011-c")],
    sareeLength: "5.4 m",
    blouseLength: "0.8 m",
    weave: "Slubbed matka weave",
    care: "Dry clean recommended",
  },
  {
    id: "mr-012",
    slug: "organza-saree-champagne",
    name: "Organza Saree",
    price: 4799,
    fabric: "Pure Organza",
    category: "Minimal",
    colors: ["Champagne", "Pearl Grey"],
    images: [img("mr012-a"), img("mr012-b"), img("mr012-c")],
    sareeLength: "5.5 m",
    blouseLength: "0.8 m",
    weave: "Sheer organza, satin border",
    care: "Dry clean only",
    new: true,
  },
];

export const getProductBySlug = (slug: string) =>
  PRODUCTS.find((p) => p.slug === slug);

export const getRelatedProducts = (product: Product, count = 4) =>
  PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  ).slice(0, count);
