"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { STORE_CONFIG } from "@/lib/config";
import { useStore } from "@/context/store-context";

const LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "New Arrivals", href: "/shop?filter=new" },
  { label: "Collections", href: "/collections/everyday" },
  { label: "Our Story", href: "/#story" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, wishlist, setCartOpen } = useStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-sm border-b border-line py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 flex items-center justify-between">
        <button
          className="focus-ring md:hidden p-1"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={22} />
        </button>

        <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-wide">
          {LINKS.slice(0, 2).map((l) => (
            <Link key={l.href} href={l.href} className="focus-ring hover:text-wine transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="font-display text-2xl md:text-3xl tracking-[0.08em] absolute left-1/2 -translate-x-1/2"
        >
          {STORE_CONFIG.brand}
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-wide">
          {LINKS.slice(2).map((l) => (
            <Link key={l.href} href={l.href} className="focus-ring hover:text-wine transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-5">
          <button aria-label="Search" className="focus-ring hidden sm:block hover:text-wine transition-colors">
            <Search size={19} />
          </button>
          <Link href="/wishlist" aria-label="Wishlist" className="focus-ring relative hover:text-wine transition-colors">
            <Heart size={19} />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 text-[10px] bg-wine text-cream rounded-full w-4 h-4 flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>
          <button
            aria-label="Open bag"
            onClick={() => setCartOpen(true)}
            className="focus-ring relative hover:text-wine transition-colors"
          >
            <ShoppingBag size={19} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-[10px] bg-wine text-cream rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-cream md:hidden flex flex-col">
          <div className="flex items-center justify-between px-5 py-6 border-b border-line">
            <span className="font-display text-2xl tracking-[0.08em]">{STORE_CONFIG.brand}</span>
            <button className="focus-ring p-1" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-5 py-6 text-lg font-display">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="focus-ring py-3 border-b border-line"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
