import { FeaturedRoom } from "@/components/FeaturedRoom/FeaturedRoom";
import { Gallery } from "@/components/Gallery/Gallery";
import HeroSection from "@/components/HeroSection/HeroSection";
import Newsletter from "@/components/Newsletter/Newsletter";
import PageSearch from "@/components/PageSearch/PageSearch";

const Home = () => {
  return (
    <>
      <HeroSection />
      <PageSearch />
      <FeaturedRoom />
      <Gallery />
      <Newsletter />
    </>
  );
};

export default Home;
