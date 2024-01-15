import content from "/public/assets/latar.png";
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
    className: " h-auto w-full   pl-[9.7%] pr-[5%]  sm:px-0 ",

    infinite: true,
    speed: 500,
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
          <Content src={content} />
          <Content src={content} />
          <Content src={content} />
          <Content src={content} />
          <Content src={content} />
          <Content src={content} />
          <Content src={content} />
          <Content src={content} />
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
