import Image from "next/image";
import Link from "next/link";

const COLLECTIONS = [
  {
    key: "everyday",
    title: "Everyday",
    body: "Lightweight sarees made for everyday elegance.",
    cta: "Shop Everyday",
    image: "https://picsum.photos/seed/mridul-col-everyday/1000/1300",
  },
  {
    key: "festive",
    title: "Festive",
    body: "Timeless drapes for celebrations and special moments.",
    cta: "Shop Festive",
    image: "https://picsum.photos/seed/mridul-col-festive/1000/1300",
  },
  {
    key: "minimal",
    title: "Minimal",
    body: "Quiet colours. Beautiful textures. Effortless style.",
    cta: "Shop Minimal",
    image: "https://picsum.photos/seed/mridul-col-minimal/1000/1300",
  },
];

export default function CollectionsSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
      <div className="mb-10 md:mb-14 max-w-lg">
        <h2 className="font-display text-3xl md:text-4xl mb-3">The MRIDUL Edit</h2>
        <p className="text-muted text-[15px]">
          Three ways to wear a saree — chosen by how your day unfolds.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {COLLECTIONS.map((c) => (
          <Link
            key={c.key}
            href={`/collections/${c.key}`}
            className="focus-ring group relative block aspect-[3/4] overflow-hidden"
          >
            <Image
              src={c.image}
              alt={c.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
              <h3 className="font-display text-2xl mb-1.5">{c.title}</h3>
              <p className="text-[13px] text-cream/85 mb-3 max-w-[85%]">{c.body}</p>
              <span className="text-[12px] tracking-wide underline underline-offset-4">
                {c.cta}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
