"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { STORE_CONFIG } from "@/lib/config";
import WishlistButton from "@/components/WishlistButton";
import { useStore } from "@/context/store-context";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useStore();

  return (
    <div className="group">
      <div className="relative aspect-[4/5] bg-line overflow-hidden mb-3">
        <Link href={`/product/${product.slug}`} className="focus-ring block w-full h-full">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-opacity duration-500 group-hover:opacity-0"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          />
          {product.images[1] && (
            <Image
              src={product.images[1]}
              alt=""
              fill
              className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            />
          )}
        </Link>

        <div className="absolute top-3 right-3">
          <WishlistButton productId={product.id} />
        </div>

        {product.compareAtPrice && (
          <span className="absolute top-3 left-3 bg-wine text-cream text-[11px] tracking-wide px-2 py-1">
            Sale
          </span>
        )}

        <button
          onClick={() => addToCart(product, product.colors[0])}
          className="focus-ring absolute left-0 right-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-ink text-cream text-[12px] tracking-wide py-3 hidden md:block"
        >
          Add to Bag
        </button>
      </div>

      <Link href={`/product/${product.slug}`} className="focus-ring block">
        <p className="text-[14px] leading-snug">{product.name}</p>
        <p className="text-[12px] text-muted mt-0.5">{product.fabric}</p>
        <p className="text-[13px] mt-1.5">
          {STORE_CONFIG.currency}
          {product.price.toLocaleString("en-IN")}
          {product.compareAtPrice && (
            <span className="text-muted line-through ml-2 text-[12px]">
              {STORE_CONFIG.currency}
              {product.compareAtPrice.toLocaleString("en-IN")}
            </span>
          )}
        </p>
      </Link>
    </div>
  );
}
