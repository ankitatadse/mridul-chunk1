import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import SocialProofStrip from "@/components/SocialProofStrip";
import ProductCarousel from "@/components/ProductCarousel";
import CollectionsSection from "@/components/CollectionsSection";
import CampaignSection from "@/components/CampaignSection";
import BestSellerGrid from "@/components/BestSellerGrid";
import StorySection from "@/components/StorySection";
import CommunitySection from "@/components/CommunitySection";
import JournalSection from "@/components/JournalSection";
import InstagramSection from "@/components/InstagramSection";
import BenefitsSection from "@/components/BenefitsSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { listNewArrivals, listBestSellers } from "@/lib/product-service";

export default async function Home() {
  const newArrivals = await listNewArrivals();
  const bestSellers = await listBestSellers();

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSlider />
        <SocialProofStrip />

        <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="mb-10 md:mb-14 max-w-lg">
            <h2 className="font-display text-3xl md:text-4xl mb-3">New Arrivals</h2>
            <p className="text-muted text-[15px]">
              Fresh drapes, new colours and timeless fabrics.
            </p>
          </div>
          <ProductCarousel products={newArrivals} />
        </section>

        <CollectionsSection />
        <CampaignSection />

        <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="mb-10 md:mb-14 max-w-lg">
            <h2 className="font-display text-3xl md:text-4xl mb-3">Most Loved</h2>
            <p className="text-muted text-[15px]">
              The sarees our customers reach for again and again.
            </p>
          </div>
          <BestSellerGrid products={bestSellers} />
        </section>

        <StorySection />
        <CommunitySection />
        <JournalSection />
        <BenefitsSection />
        <InstagramSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
