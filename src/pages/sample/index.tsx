import CardTestimonials from "@/components/landing-pages/CardTestimonials";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";

class CustomSlide extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <div {...props}>
        <div className="flex space-x-2">
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
        </div>
      </div>
    );
  }
}
const Testimonials = () => {
  const settings = {
    dots: true,
    className: " h-auto w-full   ",

    infinite: true,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,

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
    <div className="bg-[#FFB700] w-full h-full pb-[20%] pt-[3%]  px-[7%] sm:min-h-screen sm:py-14 sm:px-14">
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
          <CustomSlide />
        </Slider>
      </div>
    </div>
  );
};
export default Testimonials;
