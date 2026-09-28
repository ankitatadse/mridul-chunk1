"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SLIDES = [
  {
    id: 1,
    image: "https://picsum.photos/seed/mridul-hero-1/1800/1400",
    headline: "Six yards of you.",
    body: "Sarees designed for the way you live, celebrate and remember.",
    cta: { label: "Shop New Arrivals", href: "/shop?filter=new" },
    secondary: { label: "Explore Collections", href: "/collections/everyday" },
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/mridul-hero-2/1800/1400",
    headline: "Everyday, elevated.",
    body: "Lightweight fabrics. Timeless colours. Effortless drapes.",
    cta: { label: "Shop Cotton Sarees", href: "/collections/everyday" },
  },
  {
    id: 3,
    image: "https://picsum.photos/seed/mridul-hero-3/1800/1400",
    headline: "Made to be worn.",
    body: "Beautiful sarees for ordinary days and unforgettable moments.",
    cta: { label: "Discover MRIDUL", href: "/shop" },
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % SLIDES.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[75vh] md:h-[88vh] overflow-hidden">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
            i === active ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/35 to-ink/10" />
          <div className="absolute inset-0 flex items-end md:items-center">
            <div className="max-w-[1400px] mx-auto w-full px-5 md:px-10 pb-14 md:pb-0">
              <div className="max-w-md text-cream">
                <h1 className="font-display text-4xl md:text-6xl leading-[1.05] mb-4">
                  {slide.headline}
                </h1>
                <p className="text-[15px] md:text-base text-cream/90 mb-7 max-w-xs">
                  {slide.body}
                </p>
                <div className="flex flex-wrap items-center gap-5">
                  <Link
                    href={slide.cta.href}
                    className="focus-ring inline-block bg-cream text-ink px-7 py-3 text-[13px] tracking-wide hover:bg-wine hover:text-cream transition-colors"
                  >
                    {slide.cta.label}
                  </Link>
                  {slide.secondary && (
                    <Link
                      href={slide.secondary.href}
                      className="focus-ring text-[13px] tracking-wide underline underline-offset-4 decoration-cream/50 hover:decoration-cream"
                    >
                      {slide.secondary.label}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-5 right-5 md:right-10 flex gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`focus-ring h-1 rounded-full transition-all duration-300 ${
              i === active ? "w-7 bg-cream" : "w-3 bg-cream/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
