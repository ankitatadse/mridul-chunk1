"use client";

import { useState, useMemo } from "react";
import { Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const TABS = ["All", "Cotton", "Everyday", "Festive", "New"] as const;

export default function BestSellerGrid({ products }: { products: Product[] }) {
  const [tab, setTab] = useState<(typeof TABS)[number]>("All");

  const filtered = useMemo(() => {
    switch (tab) {
      case "Cotton":
        return products.filter((p) => p.fabric.toLowerCase().includes("cotton"));
      case "Everyday":
        return products.filter((p) => p.category === "Everyday");
      case "Festive":
        return products.filter((p) => p.category === "Festive");
      case "New":
        return products.filter((p) => p.new);
      default:
        return products;
    }
  }, [tab, products]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-9">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`focus-ring px-4 py-2 text-[13px] tracking-wide border transition-colors ${
              tab === t
                ? "bg-ink text-cream border-ink"
                : "border-line hover:border-ink"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
