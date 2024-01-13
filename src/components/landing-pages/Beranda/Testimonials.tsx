import CardTestimonials from "../CardTestimonials";
import Slider from "react-slick";
import PrevIcon from "../Icons/PrevIcon";
import NextIcon from "../Icons/NextIcon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <NextIcon stroke="white" />
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <PrevIcon stroke="white" />
    </div>
  );
}


const Testimonials = () => {
  const settings = {
    dots: true,
    className: " h-auto w-full pl-[3%] pr-[1%]  sm:pr-1 sm:pl-3   ",

    infinite: true,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[#FFB700] w-full h-full pb-[20%] pt-[3%] pl-[5%] pr-[10%] sm:min-h-screen sm:py-14 sm:px-14">
      <div className=" w-auto h-full flex flex-col items-center space-y-16 sm:space-y-28 ">
        <div className="flex flex-col space-y-2 sm:space-y-3">
          <p className="text-[#FFF] text-center  font-extrabold text-[26px] sm:text-5xl">
            Testimonials
          </p>
          <p className="text-center text-[#FFF] font-medium text-[12px] w-[334px] sm:text-lg sm:w-[535px]">
            Most of them buy positive feedback for us which is none other than
            the best service we provide
          </p>
        </div>
        <Slider {...settings}>
          <CardTestimonials
            nama="Pandu"
            job="Programmers"
            testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu consectetur elementum id massa."
          />

          <CardTestimonials
            nama="Pandu"
            job="Programmers"
            testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu consectetur elementum id massa."
          />
          <CardTestimonials
            nama="Pandu"
            job="Programmers"
            testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu consectetur elementum id massa."
          />
          <CardTestimonials
            nama="Pandu"
            job="Programmers"
            testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu consectetur elementum id massa."
          />
        </Slider>
      </div>
    </div>
  );
};
export default Testimonials;
