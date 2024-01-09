import CardLearningMaterials from "./CardLearningMaterials";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function LearningMaterials() {
  const materi = [
    {
      id: 1,
      title: "Matematika",
      descriptions:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
    {
      id: 2,
      title: "Matematika",
      descriptions:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
    {
      id: 1,
      title: "Matematika",
      descriptions:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
    {
      id: 3,
      title: "Matematika",
      descriptions:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
    {
      id: 4,
      title: "Matematika",
      descriptions:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
    {
      id: 5,
      title: "Matematika",
      descriptions:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
    {
      id: 6,
      title: "Matematika",
      descriptions:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
    {
      id: 7,
      title: "Matematika",
      descriptions:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
    {
      id: 8,
      title: "Matematika",
      descriptions:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
    {
      id: 9,
      title: "Matematika",
      descriptions:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
  ];
  const settings = {
    dots: true,
    className: " h-auto w-full  pl-[3%]",

    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
    slidesPerRow: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[#F6F6F6]  w-full min-h-screen flex flex-col items-center sm:px-10 sm:py-12 sm:space-y-10 ">
      <div className="flex flex-col space-y-4 sm:w-[601px]">
        <p className="font-extrabold text-center text-[#332929] sm:text-5xl">
          Materi Pembelajaran
        </p>
        <p className="text-center text-[#7C7C7C] sm:text-lg">
          This clean and ever contemporary waterproof rucksack features an
          internal laptop pocket, on the back panel.
        </p>
      </div>

      <div className="bg-[#FFF] flex shadow-[5px_5px_4px_0px] shadow-[#00000040] justify-center items-center rounded-full sm:space-x-8 w-auto sm:h-[50px]">
        <button className="text-center text-black font-medium  hover:text-[#FFF]  transition hover:bg-blue-700 h-full rounded-full sm:text-2xl px-8">
          SD
        </button>

        <button className="text-center text-black font-medium hover:text-[#FFF]   transition hover:bg-blue-700 h-full rounded-full sm:text-2xl px-8">
          SMP
        </button>
        <button className="text-center text-black font-medium hover:text-[#FFF]   transition hover:bg-blue-700 h-full rounded-full sm:text-2xl px-8">
          SMA
        </button>
        <button className="text-center text-black font-medium hover:text-[#FFF]   transition hover:bg-blue-700 h-full rounded-full sm:text-2xl px-8">
          KULIAH
        </button>
        <button className="text-center text-black font-medium hover:text-[#FFF]   transition hover:bg-blue-700 h-full rounded-full sm:text-2xl px-8">
          UMUM
        </button>

        <button className="text-center text-black font-medium hover:text-[#FFF]   transition hover:bg-blue-700 h-full rounded-full sm:text-2xl px-8">
          LAINNYA
        </button>
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
