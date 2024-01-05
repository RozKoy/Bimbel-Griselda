import MainPages from "@/components/landing-pages/Beranda/MainPages";
import Services from "@/components/landing-pages/Beranda/Service";
import Testimonials from "@/components/landing-pages/Beranda/Testimonials";
import Gallery from "@/components/landing-pages/Beranda/Gallery";

const Home = () => {
  return (
    <>
      <MainPages />
      <Services />
      <Testimonials />
      <Gallery />
    </>
  );
};

export default Home;
