import { Gallery } from "@/components/Gallery/Gallery";
import HeroSection from "@/components/HeroSection/HeroSection";
import PageSearch from "@/components/PageSearch/PageSearch";

const Home = () => {
  return (
    <>
      <HeroSection />
      <PageSearch />
      {/* FEATURED ROOM */}
      <Gallery />
      {/* Newsletter  */}
    </>
  );
};

export default Home;
