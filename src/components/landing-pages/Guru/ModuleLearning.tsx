import CardModule from "./CardModule";
import Slider from "react-slick";
import PrevIcon from "../Icons/PrevIcon";
import NextIcon from "../Icons/NextIcon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <NextIcon stroke="#FFB700" />
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <PrevIcon stroke="#FFB700" />
    </div>
  );
}

const settings = {
  className: " h-auto w-full  pl-[5%]    sm:pl-0  ",

  infinite: true,
  autoplay: false,
  speed: 2000,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 4,
  rows: 2,
  slidesPerRow: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        dots: true,
        rows: 1,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const ModuleLearning = () => {
  return (
    <div className="bg-[#F6F6F6] w-full flex flex-col  justify-center items-center py-14 px-[10%] space-y-4 h-auto sm:px-4 sm:min-h-screen  sm:space-y-8">
      <div className="flex flex-col w-[334px] space-y-1 sm:space-y-3  sm:w-[661px]">
        <p className="text-center text-[#020202] font-extrabold text-[26px] sm:text-[48px]">
          Bahan Ajar
        </p>
        <p className="text-center text-[#7C7C7C] text-[12px] sm:text-lg">
          Temukan koleksi bahan ajar berkualitas tinggi yang dirancang untuk
          meningkatkan pengalaman belajar. Di Griselda, kami memastikan bahan
          ajar memberikan dampak positif pada setiap sesi pembelajaran.
        </p>
      </div>

      <Slider {...settings}>
        <CardModule
          title="Jenjang Kelas TK"
          jenjang="TK"
          href="https://wa.me/6282233216825?text=Halo+kak%2C+saya+tertarik+untuk+membeli+bahan+ajar+bimbel+griselda+jenjang+kelas+TK.+Tolong+beri+pricelist+dan+info+selengkapnya"
        />
        <CardModule
          title="Jenjang Kelas SD"
          jenjang="SD"
          href="https://wa.me/6282233216825?text=Halo+kak%2C+saya+tertarik+untuk+membeli+bahan+ajar+bimbel+griselda+jenjang+kelas+SD.+Tolong+beri+pricelist+dan+info+selengkapnya"
        />
        <CardModule
          title="Jenjang Kelas SMP"
          jenjang="SMP"
          href="https://wa.me/6282233216825?text=Halo+kak%2C+saya+tertarik+untuk+membeli+bahan+ajar+bimbel+griselda+jenjang+kelas+SMP.+Tolong+beri+pricelist+dan+info+selengkapnya"
        />
        <CardModule
          title="Jenjang Kelas SMA"
          jenjang="SMA"
          href="https://wa.me/6282233216825?text=Halo+kak%2C+saya+tertarik+untuk+membeli+bahan+ajar+bimbel+griselda+jenjang+kelas+SMA.+Tolong+beri+pricelist+dan+info+selengkapnya"
        />
        <CardModule
          title="Jenjang Kelas Kuliah"
          jenjang="Kuliah"
          href="https://wa.me/6282233216825?text=Halo+kak%2C+saya+tertarik+untuk+membeli+bahan+ajar+bimbel+griselda+jenjang+kelas+KULIAH.+Tolong+beri+pricelist+dan+info+selengkapnya"
        />
        <CardModule
          title="Jenjang Kelas Umum"
          jenjang="Kelas Umum"
          href="https://wa.me/6282233216825?text=Halo+kak%2C+saya+tertarik+untuk+membeli+bahan+ajar+bimbel+griselda+jenjang+kelas+UMUM.+Tolong+beri+pricelist+dan+info+selengkapnya"
        />
        <CardModule
          title="Jenjang Kelas Dll"
          jenjang="Dll"
          href="https://wa.me/6282233216825?text=Halo+kak%2C+saya+tertarik+untuk+membeli+bahan+ajar+bimbel+griselda+jenjang+kelas+DLL.+Tolong+beri+pricelist+dan+info+selengkapnya"
        />
      </Slider>
    </div>
  );
};

export default ModuleLearning;
