import CardMitra from "./CardMitra";
import Slider from "react-slick";
import mitraLogo from "/public/assets/sikep.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ListMitra() {
  var settings = {
    className: " h-auto w-full pl-[3%]  sm:pl-[3%] sm:pr-[2%] ",
    dots: true,
    infinite: false,
    speed: 500,
    rows: 2,

    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          rows: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full h-auto flex flex-col px-4 pt-4 pb-[10%] space-y-2 sm:px-4 sm:min-h-screen sm:items-center sm:py-10 sm:space-y-14">
      <div className="flex flex-col sm:space-y-2 sm:max-w-[601px]">
        <p className=" font-bold text-[40px] sm:text-center sm:text-[48px]">
          Daftar Kemitraan
        </p>
        <p className=" text-[#7C7C7C] text-[15px] sm:text-center sm:text-lg">
          Griselda mengundang Anda untuk menjadi mitra dalam penciptaan masa
          depan pendidikan yang inovatif. Daftar kemitraan kami menyediakan
          informasi tentang berbagai paket kerjasama yang dapat menguntungkan
          kedua belah pihak.
        </p>
      </div>

      <Slider {...settings}>
        <CardMitra
          src={mitraLogo}
          title="Sikep Smart Academy"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </Slider>
    </div>
  );
}
