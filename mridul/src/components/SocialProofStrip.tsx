import Image from "next/image";
import { STORE_CONFIG } from "@/lib/config";

const SEEDS = ["proof-1", "proof-2", "proof-3", "proof-4", "proof-5"];

export default function SocialProofStrip() {
  return (
    <section className="py-14 md:py-16 border-b border-line">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <p className="text-center text-[12px] tracking-[0.15em] text-muted mb-8">
          Worn, loved, shared — {STORE_CONFIG.instagramHandle}
        </p>
        <div className="flex gap-3 md:gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
          {SEEDS.map((s) => (
            <div key={s} className="relative min-w-[130px] w-[130px] md:min-w-[180px] md:w-[180px] aspect-[3/4] shrink-0 overflow-hidden">
              <Image
                src={`https://picsum.photos/seed/mridul-${s}/400/540`}
                alt=""
                fill
                className="object-cover"
                sizes="180px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
