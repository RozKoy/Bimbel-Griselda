import content from "/public/assets/latar.png";
import content1 from "/public/assets/galeri1.jpeg";
import content2 from "/public/assets/galeri2.jpeg";
import content3 from "/public/assets/galeri3.jpeg";
import content4 from "/public/assets/galeri4.jpeg";
import content5 from "/public/assets/galeri5.jpeg";
import content6 from "/public/assets/galeri6.jpeg";
import content7 from "/public/assets/galeri7.jpg";
import content8 from "/public/assets/galeri8.jpg";
import Content from "./Content";
import Slider from "react-slick";
import PrevIcon from "../Icons/PrevIcon";
import NextIcon from "../Icons/NextIcon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <NextIcon stroke="black" />
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <PrevIcon stroke="black" />
    </div>
  );
}

const Gallery = () => {
  const settings = {
    className: " h-auto w-full   pl-[9.7%] pr-[5%]  sm:px-5 ",

    infinite: true,
    autoplay: true,
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
          dots: false,
          rows: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[#FAFBFD] w-full h-auto pt-10 pb-10 pl-[5%] pr-[10%] sm:min-h-screen sm:pt-14 sm:pb-5 sm:px-2">
      <div className=" w-auto h-full flex flex-col items-center space-y-8 sm:space-y-12">
        <div className="flex flex-col space-y-3">
          <p className=" text-center font-extrabold text-[26px] sm:text-5xl">
            Gallery
          </p>
          <p className="text-center text-[#2E2828] font-medium text-[12px] w-[334px] sm:text-lg sm:w-[535px]">
            Most of them buy positive feedback for us which is none other than
            the best service we provide
          </p>
        </div>

        <Slider {...settings}>
          <Content src={content1} />
          <Content src={content2} />
          <Content src={content3} />
          <Content src={content4} />
          <Content src={content5} />
          <Content src={content6} />
          <Content src={content7} />
          <Content src={content8} />
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
