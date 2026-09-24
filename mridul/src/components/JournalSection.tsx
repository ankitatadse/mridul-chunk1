import Image from "next/image";
import Link from "next/link";

const ARTICLES = [
  {
    slug: "how-to-style-a-cotton-saree-for-everyday-wear",
    category: "Styling",
    title: "How to Style a Cotton Saree for Everyday Wear",
    image: "https://picsum.photos/seed/mridul-journal-1/900/650",
  },
  {
    slug: "5-easy-saree-drapes-for-modern-women",
    category: "Drapes",
    title: "5 Easy Saree Drapes for Modern Women",
    image: "https://picsum.photos/seed/mridul-journal-2/900/650",
  },
  {
    slug: "how-to-choose-the-right-saree-fabric",
    category: "Fabric",
    title: "How to Choose the Right Saree Fabric",
    image: "https://picsum.photos/seed/mridul-journal-3/900/650",
  },
];

export default function JournalSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
      <div className="mb-10 md:mb-14 max-w-lg">
        <h2 className="font-display text-3xl md:text-4xl mb-3">The MRIDUL Journal</h2>
        <p className="text-muted text-[15px]">Notes on fabric, drape and everyday style.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {ARTICLES.map((a) => (
          <Link key={a.slug} href={`/journal/${a.slug}`} className="focus-ring group block">
            <div className="relative aspect-[4/3] overflow-hidden mb-4">
              <Image
                src={a.image}
                alt={a.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
            <p className="text-[12px] text-muted mb-1.5">{a.category}</p>
            <h3 className="font-display text-xl mb-2 leading-snug">{a.title}</h3>
            <span className="text-[13px] underline underline-offset-4">Read Article</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
