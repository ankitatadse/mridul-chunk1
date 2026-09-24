import type { Metadata } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/context/store-context";
import CartDrawer from "@/components/CartDrawer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { STORE_CONFIG } from "@/lib/config";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "MRIDUL — Contemporary Indian Sarees",
  description:
    "Sarees designed for the way you live, celebrate and remember. Contemporary cotton, silk and linen sarees from MRIDUL.",
  openGraph: {
    title: "MRIDUL — Contemporary Indian Sarees",
    description: "Sarees designed for the way you live, celebrate and remember.",
    siteName: STORE_CONFIG.brand,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${publicSans.variable} antialiased`}>
        <StoreProvider>
          {children}
          <CartDrawer />
          <WhatsAppButton />
        </StoreProvider>
      </body>
    </html>
  );
}
