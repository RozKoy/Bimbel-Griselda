import MainPages from "@/components/landing-pages/Beranda/MainPages";
import Services from "@/components/landing-pages/Beranda/Service";
import Navbar from "@/components/landing-pages/Navbar";
import Testimonials from "@/components/landing-pages/Beranda/Testimonials";
import Gallery from "@/components/landing-pages/Beranda/Gallery";
import Footer from "@/components/landing-pages/Footer";
import Loading from "@/components/landing-pages/Loading";
import * as React from "react";
import useSWR from "swr";
import { axiosInstance } from "@/utils/axios";

const Home = () => {
  // const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const {
    data,
    error,
    isLoading,
  } = useSWR(
    `/count`,
    (url) =>
      axiosInstance.get(url).then((res) => {
        return res.data;
      })
  );

  // React.useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(true);
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          { data && (
            <MainPages event={data[0]?.value || 0} member={data[1]?.value || 0} />
          ) }
          { !data && (
            <MainPages event={0} member={0} />
          ) }
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
