// Product service — the only place UI code should reach for product data.
// Today this reads local mock data. Swapping to the Shopify Storefront API
// later means changing this file only, not the components that call it.
import { PRODUCTS, Product, getProductBySlug, getRelatedProducts } from "@/data/products";

export async function listProducts(): Promise<Product[]> {
  return PRODUCTS;
}

export async function listByCategory(category: Product["category"]): Promise<Product[]> {
  return PRODUCTS.filter((p) => p.category === category);
}

export async function listBestSellers(): Promise<Product[]> {
  return PRODUCTS.filter((p) => p.bestSeller);
}

export async function listNewArrivals(): Promise<Product[]> {
  return PRODUCTS.filter((p) => p.new);
}

export async function listFeatured(): Promise<Product[]> {
  return PRODUCTS.filter((p) => p.featured);
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  return getProductBySlug(slug);
}

export async function getRelated(product: Product): Promise<Product[]> {
  return getRelatedProducts(product);
}
