"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductCarousel({ products }: { products: Product[] }) {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    scroller.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scroller}
        className="flex gap-5 md:gap-6 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {products.map((p) => (
          <div key={p.id} className="min-w-[68%] sm:min-w-[42%] lg:min-w-[24%] snap-start">
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      <div className="hidden md:flex justify-end gap-2 mt-5">
        <button
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
          className="focus-ring w-9 h-9 border border-line rounded-full flex items-center justify-center hover:border-ink transition-colors"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={() => scroll(1)}
          aria-label="Scroll right"
          className="focus-ring w-9 h-9 border border-line rounded-full flex items-center justify-center hover:border-ink transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
