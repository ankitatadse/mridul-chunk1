import Link from "next/link";
import { STORE_CONFIG } from "@/lib/config";

const NAV = [
  { label: "Shop", href: "/shop" },
  { label: "New Arrivals", href: "/shop?filter=new" },
  { label: "Collections", href: "/collections/everyday" },
  { label: "Our Story", href: "/story" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

const CARE = [
  { label: "Shipping", href: "/pages/shipping" },
  { label: "Returns", href: "/pages/returns" },
  { label: "Privacy", href: "/pages/privacy" },
  { label: "Terms", href: "/pages/terms" },
];

export default function Footer() {
  return (
    <footer className="pt-16 md:pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <p className="font-display text-4xl md:text-5xl mb-12">{STORE_CONFIG.brand}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-[14px] mb-14">
          <div>
            <p className="text-muted text-[12px] mb-4">Shop</p>
            <ul className="space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="focus-ring hover:text-wine transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-muted text-[12px] mb-4">Customer Care</p>
            <ul className="space-y-2.5">
              {CARE.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="focus-ring hover:text-wine transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-muted text-[12px] mb-4">Connect</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={STORE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring hover:text-wine transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${STORE_CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring hover:text-wine transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-muted text-[12px] mb-4">Payment</p>
            <ul className="space-y-2.5 text-muted">
              <li>UPI</li>
              <li>Cards</li>
              <li>Net Banking</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-line pt-6 flex flex-col sm:flex-row justify-between gap-2 text-[12px] text-muted">
          <p>© {new Date().getFullYear()} {STORE_CONFIG.brand}. All rights reserved.</p>
          <p>Made with care, in India.</p>
        </div>
      </div>
    </footer>
  );
}
