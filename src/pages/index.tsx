import MainPages from "@/components/landing-pages/Beranda/MainPages";
import Services from "@/components/landing-pages/Beranda/Service";
import Navbar from "@/components/landing-pages/Navbar";
import Testimonials from "@/components/landing-pages/Beranda/Testimonials";
import Gallery from "@/components/landing-pages/Beranda/Gallery";
import Footer from "@/components/landing-pages/Footer";
import Loading from "@/components/landing-pages/Loading";
import * as React from "react";

const Home = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          
          <MainPages />
          <Services name="nextSection" />
          <Testimonials />
          <Gallery />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
