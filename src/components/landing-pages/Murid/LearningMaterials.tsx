import CardLearningMaterials from "./CardLearningMaterials";
import * as React from "react";
import Slider from "react-slick";
import PrevIcon from "../Icons/PrevIcon";
import NextIcon from "../Icons/NextIcon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SWRResponse, mutate } from "swr";
import useSWR from "swr";
import { axiosInstance } from "@/utils/axios";

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
  className: " h-auto w-full pl-[0%]    sm:pl-[3%]   ",
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

interface CategoryList {
  label: string;
  value: string;
}

interface Category {
  id: string;
  name: string;
}

interface Lesson {
  id: string;
  name: string;
  description: string;
  image: string;
  category: Category;
}

interface LessonData {
  items: any;
  meta: any;
}

const LearningMaterials = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>("");
  const [activeButton, setActiveButton] = React.useState<string>("");
  const { data }: SWRResponse<Lesson[]> = useSWR(
    `/lesson/getByCategory?id=${activeCategory}`,
    (url) => axiosInstance.get(url).then((res) => res.data)
  );

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

  const category: CategoryList[] = [
    {
      label: "SD",
      value: "2a03863e-fe20-4395-bb5c-bf275ca88ba2",
    },
    {
      label: "SMP",
      value: "3bbbcc17-98f5-4c86-a286-04bf914a801a",
    },
    {
      label: "SMA",
      value: "eee2e5b2-ee9d-45f8-9c41-078cb50dfeee",
    },
    {
      label: "KULIAH",
      value: "bc2da986-82af-481b-be86-c21825e4dce0",
    },
    {
      label: "UMUM",
      value: "10405139-279b-40fb-8240-c8430774044f",
    },
    {
      label: "LAINNYA",
      value: "64c3b319-dd96-45bf-a14d-75bdbe12f45f",
    },
  ];

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
        {category.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveButton(item.label);
              setActiveCategory(item.value);
              mutate(`/lesson/getByCategory?id=${activeCategory}`);
            }}
            className={`text-center font-medium transition h-full rounded-full px-3 text-[13px] sm:text-2xl sm:px-8 ${
              activeButton === item.label
                ? "bg-blue-700 text-[#FFF]"
                : "bg-[#FFF] text-black"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <Slider {...settings}>
        {data?.map((materi, index) => (
          <CardLearningMaterials
            category={materi.category.name}
            image={materi.image}
            key={index}
            title={materi.name}
            description={materi.description}
            whatsapp={
              `https://wa.me/6282233216825?text=Halo+kak+saya+tertarik+untuk+membeli+materi+pembelajaran+bimbel+griselda+jenjang+kelas+${materi.category.name}+dengan+judul+materi+${encodeURI(materi.name)}+Tolong+beri+pricelist+dan+info+selengkapnya`
            }
          />
        ))}
      </Slider>
    </div>
  );
};

export default LearningMaterials;