// Product service: swap this file's internals for Shopify Storefront API later.
import {products} from "@/data/products";
import type {Product} from "@/types/product";
export async function getProducts():Promise<Product[]>{return products}
export async function getProduct(slug:string){return products.find(p=>p.slug===slug)}
export async function getByCategory(c:string){return products.filter(p=>p.category===c)}
