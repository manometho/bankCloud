
import Hero from "@/components/home/Hero";
import FeaturedServices from "@/components/home/FeaturedServices";
import InfoBanner from "@/components/home/InfoBanner";
import ProductsSection from "@/components/home/ProductsSection";
import ContactCta from "@/components/home/ContactCta";

const Index = () => {
  return (
    <div>
      <Hero />
      <FeaturedServices />
      <InfoBanner />
      <ProductsSection />
      <ContactCta />
    </div>
  );
};

export default Index;
