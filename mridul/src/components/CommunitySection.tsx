import Image from "next/image";
import { STORE_CONFIG } from "@/lib/config";

const LOOKS = [
  { seed: "mridul-real-1", handle: "@priyaa.wears" },
  { seed: "mridul-real-2", handle: "@thesareediary" },
  { seed: "mridul-real-3", handle: "@meera.draped" },
  { seed: "mridul-real-4", handle: "@ananya_in_six" },
  { seed: "mridul-real-5", handle: "@thecottonaffair" },
  { seed: "mridul-real-6", handle: "@radhika.styles" },
];

export default function CommunitySection() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="mb-10 md:mb-14 max-w-lg">
          <h2 className="font-display text-3xl md:text-4xl mb-3">
            Real women. Real drapes.
          </h2>
          <p className="text-muted text-[15px]">
            See how our community wears {STORE_CONFIG.brand}. Tag {STORE_CONFIG.instagramHandle} to be featured.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {LOOKS.map((look) => (
            <div key={look.seed} className="group relative aspect-[3/4] overflow-hidden">
              <Image
                src={`https://picsum.photos/seed/${look.seed}/700/950`}
                alt={`MRIDUL styled by ${look.handle}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 768px) 33vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-3 left-3 text-cream text-[12px] opacity-0 group-hover:opacity-100 transition-opacity">
                {look.handle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
