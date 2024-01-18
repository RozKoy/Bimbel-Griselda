import CardLearningMaterials from "./CardLearningMaterials";
import * as React from "react";
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
var settings = {
  className: " h-auto w-full pl-[3%]    sm:pl-[3%]   ",
  dots: true,
  infinite: false,
  speed: 500,
  rows: 2,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
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
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
export default function LearningMaterials() {
  // dummy data
  const materi = [
    {
      id: 1,
      title: "Matematika",
      descriptions:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      id: 2,
      title: "IPA",
      descriptions:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
    {
      id: 3,
      title: "IPS",
      descriptions:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
    {
      id: 4,
      title: "Sejarah",
      descriptions:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
    {
      id: 5,
      title: "Fisika",
      descriptions:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
    {
      id: 6,
      title: "Kimia",
      descriptions:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
    {
      id: 7,
      title: "Penjas",
      descriptions:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
    {
      id: 8,
      title: "Sosiologi",
      descriptions:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
    {
      id: 9,
      title: "Ekonomi",
      descriptions:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
  ];

  // array variabel kelas
  const kelas: string[] = ["SD", "SMP", "SMA", "KULIAH", "UMUM", "LAINNYA"];

  //useState variable to handle button color
  const [activeButton, setActiveButton] = React.useState<string>("");

  return (
    <div className="bg-[#F6F6F6]  w-full h-auto flex flex-col items-center px-[10%] py-24 space-y-6 sm:min-h-screen sm:px-10 sm:py-12 sm:space-y-10 ">
      <div className="flex flex-col space-y-1 sm:space-y-4 sm:w-[601px]">
        <p className="font-extrabold text-center text-[#332929] text-[26px] sm:text-5xl">
          Materi Pembelajaran
        </p>
        <p className="text-center text-[#7C7C7C] text-[12px] sm:text-lg">
          This clean and ever contemporary waterproof rucksack features an
          internal laptop pocket, on the back panel.
        </p>
      </div>

      <div className="bg-[#FFF] flex shadow-[5px_5px_4px_0px] shadow-[#00000040] justify-center items-center rounded-full w-auto h-[27px] space-x-1 sm:space-x-8 sm:h-[50px]">
        {kelas.map((label, index) => (
          <button
            key={index}
            onClick={() => setActiveButton(label)}
            className={`text-center font-medium transition h-full rounded-full px-3 text-[13px] sm:text-2xl sm:px-8 ${
              activeButton === label
                ? "bg-blue-700 text-[#FFF]"
                : "bg-[#FFF] text-black"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <Slider {...settings}>
        {materi.map((materi) => (
          <CardLearningMaterials
            key={materi.id}
            title={materi.title}
            description={materi.descriptions}
          />
        ))}
      </Slider>
    </div>
  );
}
