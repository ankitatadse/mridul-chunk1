import Image from "next/image";
import Link from "next/link";

export default function StorySection() {
  return (
    <section id="story" className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        <div className="md:col-span-7 relative aspect-[16/10] md:aspect-[16/11] order-2 md:order-1">
          <Image
            src="https://picsum.photos/seed/mridul-story/1400/900"
            alt="Fabric detail from a MRIDUL saree"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 58vw, 100vw"
          />
        </div>
        <div className="md:col-span-5 order-1 md:order-2">
          <h2 className="font-display text-3xl md:text-4xl mb-5 leading-[1.1]">
            The story of MRIDUL
          </h2>
          <p className="text-[15px] text-muted mb-5 max-w-sm">
            MRIDUL is about making beautiful sarees part of everyday life.
          </p>
          <ul className="text-[15px] space-y-1.5 mb-6">
            <li>Thoughtfully chosen fabrics.</li>
            <li>Beautiful colours.</li>
            <li>Comfortable drapes.</li>
            <li>Timeless Indian craftsmanship.</li>
          </ul>
          <p className="text-[15px] mb-7 max-w-sm">
            A saree should feel as good to wear as it looks.
          </p>
          <Link
            href="/story"
            className="focus-ring text-[13px] tracking-wide underline underline-offset-4"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
