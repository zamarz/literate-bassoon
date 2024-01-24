import { FeaturedRoom } from "@/components/FeaturedRoom/FeaturedRoom";
import { Gallery } from "@/components/Gallery/Gallery";
import HeroSection from "@/components/HeroSection/HeroSection";
import Newsletter from "@/components/Newsletter/Newsletter";
import PageSearch from "@/components/PageSearch/PageSearch";
import { getFeaturedRoom } from "@/libs/apis";

const Home = async () => {
  const featuredRoom = await getFeaturedRoom();

  return (
    <>
      <HeroSection />
      <PageSearch />
      <FeaturedRoom featuredRoom={featuredRoom} />
      <Gallery />
      <Newsletter />
    </>
  );
};

export default Home;
