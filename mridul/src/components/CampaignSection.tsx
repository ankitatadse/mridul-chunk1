import Image from "next/image";
import Link from "next/link";

export default function CampaignSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-4 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[560px]">
          <Image
            src="https://picsum.photos/seed/mridul-campaign-everyday/1200/1500"
            alt="Woman wearing a MRIDUL everyday saree"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div className="bg-surface flex items-center">
          <div className="px-6 md:px-16 py-12 md:py-0 max-w-md">
            <h2 className="font-display text-3xl md:text-4xl mb-5 leading-[1.1]">
              The everyday saree
            </h2>
            <p className="text-[15px] text-muted mb-2">
              A saree shouldn&apos;t wait for a special occasion.
            </p>
            <p className="text-[15px] mb-1">Wear it to work.</p>
            <p className="text-[15px] mb-1">Wear it to dinner.</p>
            <p className="text-[15px] mb-6">
              Wear it because today feels worth dressing up for.
            </p>
            <Link
              href="/collections/everyday"
              className="focus-ring inline-block border border-ink px-7 py-3 text-[13px] tracking-wide hover:bg-ink hover:text-cream transition-colors"
            >
              Shop the Edit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
