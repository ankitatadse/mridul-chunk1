import Image from "next/image";
import { STORE_CONFIG } from "@/lib/config";

const SEEDS = ["ig-1", "ig-2", "ig-3", "ig-4", "ig-5", "ig-6"];

export default function InstagramSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 className="font-display text-3xl md:text-4xl mb-2">
              Follow the MRIDUL story
            </h2>
            <p className="text-muted text-[15px]">{STORE_CONFIG.instagramHandle}</p>
          </div>
          <a
            href={STORE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring text-[13px] underline underline-offset-4"
          >
            Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
          {SEEDS.map((s) => (
            <a
              key={s}
              href={STORE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring relative aspect-square block overflow-hidden"
            >
              <Image
                src={`https://picsum.photos/seed/mridul-${s}/500/500`}
                alt=""
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(min-width: 768px) 16vw, 33vw"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
