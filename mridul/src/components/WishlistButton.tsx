"use client";

import { Heart } from "lucide-react";
import { useStore } from "@/context/store-context";

export default function WishlistButton({ productId }: { productId: string }) {
  const { toggleWishlist, isWishlisted } = useStore();
  const active = isWishlisted(productId);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        toggleWishlist(productId);
      }}
      aria-pressed={active}
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
      className="focus-ring w-8 h-8 rounded-full bg-cream/90 flex items-center justify-center hover:bg-cream transition-colors"
    >
      <Heart
        size={15}
        className={active ? "fill-wine text-wine" : "text-ink"}
      />
    </button>
  );
}
