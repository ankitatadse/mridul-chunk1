"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus } from "lucide-react";
import { useStore } from "@/context/store-context";
import { STORE_CONFIG } from "@/lib/config";

export default function CartDrawer() {
  const {
    cart,
    cartOpen,
    setCartOpen,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
  } = useStore();

  if (!cartOpen) return null;

  const remaining = STORE_CONFIG.freeShippingThreshold - cartSubtotal;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        aria-label="Close cart"
        onClick={() => setCartOpen(false)}
        className="absolute inset-0 bg-ink/40"
      />
      <div className="relative w-full sm:w-[420px] h-full bg-cream flex flex-col">
        <div className="flex items-center justify-between px-5 md:px-6 py-5 border-b border-line">
          <p className="font-display text-xl">Your Bag ({cart.length})</p>
          <button onClick={() => setCartOpen(false)} aria-label="Close cart" className="focus-ring p-1">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <p className="text-[15px] mb-5">Your bag is empty.</p>
            <button
              onClick={() => setCartOpen(false)}
              className="focus-ring text-[13px] underline underline-offset-4"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {remaining > 0 && (
              <p className="px-5 md:px-6 py-3 text-[12px] text-muted border-b border-line">
                Add {STORE_CONFIG.currency}
                {remaining.toLocaleString("en-IN")} more for free shipping.
              </p>
            )}

            <div className="flex-1 overflow-y-auto px-5 md:px-6 py-5 space-y-6">
              {cart.map((line) => (
                <div key={`${line.productId}-${line.color}`} className="flex gap-4">
                  <div className="relative w-20 h-24 bg-line shrink-0">
                    <Image src={line.image} alt={line.name} fill className="object-cover" sizes="80px" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between gap-2">
                      <Link
                        href={`/product/${line.slug}`}
                        onClick={() => setCartOpen(false)}
                        className="focus-ring text-[14px] leading-snug"
                      >
                        {line.name}
                      </Link>
                      <button
                        onClick={() => removeFromCart(line.productId, line.color)}
                        aria-label={`Remove ${line.name}`}
                        className="focus-ring text-muted hover:text-ink"
                      >
                        <X size={15} />
                      </button>
                    </div>
                    <p className="text-[12px] text-muted mt-1">{line.color}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-line">
                        <button
                          aria-label="Decrease quantity"
                          onClick={() => updateQuantity(line.productId, line.color, line.quantity - 1)}
                          className="focus-ring w-7 h-7 flex items-center justify-center"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-7 text-center text-[13px]">{line.quantity}</span>
                        <button
                          aria-label="Increase quantity"
                          onClick={() => updateQuantity(line.productId, line.color, line.quantity + 1)}
                          className="focus-ring w-7 h-7 flex items-center justify-center"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="text-[13px]">
                        {STORE_CONFIG.currency}
                        {(line.price * line.quantity).toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-line px-5 md:px-6 py-5 space-y-4">
              <div className="flex justify-between text-[14px]">
                <span>Subtotal</span>
                <span>
                  {STORE_CONFIG.currency}
                  {cartSubtotal.toLocaleString("en-IN")}
                </span>
              </div>
              <Link
                href="/checkout"
                className="focus-ring block text-center bg-ink text-cream py-3.5 text-[13px] tracking-wide hover:bg-wine transition-colors"
              >
                Checkout
              </Link>
              <button
                onClick={() => setCartOpen(false)}
                className="focus-ring block w-full text-center text-[13px] underline underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
