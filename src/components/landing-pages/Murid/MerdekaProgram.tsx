import CardProgram from "./CardProgram";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrow(props: any) {
  const { onClick } = props;
  return <div className="hidden" onClick={onClick} />;
}

export default function MerdekaProgram() {
  const settings = {
    className: "  h-auto flex items-end sm:w-[678px]  ",

    speed: 2000,

    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,

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
    <div className="bg-[url('../../public/assets/Subtract.png')] w-full min-h-screen flex  items-center ">
      <div className="flex   sm:space-x-48 ">
        <div className="flex flex-col space-y-8 sm:ml-14 sm:mt-2">
          <p className="text-[#000] font-extrabold sm:text-5xl sm:w-[235px]">
            Program Merdeka
          </p>
          <p className="text-[#000] d sm:text-lg sm:w-[370px]">
            Lorem Ipsum has been the industry&apos; standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries.
          </p>
        </div>
        <Slider {...settings}>
          <CardProgram
            title="M"
            headline="Mentorship Profesional"
            description="Dengan didukung oleh tim pengajar berkualifikasi tinggi, kami menawarkan mentorship m ruprofesional untuk membimbing siswa menuju keunggulan akademis."
          />
          <CardProgram
            title="E"
            headline="Mentorship Profesional"
            description="Dengan didukung oleh tim pengajar berkualifikasi tinggi, kami menawarkan mentorship profesional untuk membimbing siswa menuju keunggulan akademis."
          />
          <CardProgram
            title="R"
            headline="Mentorship Profesional"
            description="Dengan didukung oleh tim pengajar berkualifikasi tinggi, kami menawarkan mentorship m ruprofesional untuk membimbing siswa menuju keunggulan akademis."
          />
          <CardProgram
            title="D"
            headline="Mentorship Profesional"
            description="Dengan didukung oleh tim pengajar berkualifikasi tinggi, kami menawarkan mentorship profesional untuk membimbing siswa menuju keunggulan akademis."
          />
          <CardProgram
            title="E"
            headline="Mentorship Profesional"
            description="Dengan didukung oleh tim pengajar berkualifikasi tinggi, kami menawarkan mentorship m ruprofesional untuk membimbing siswa menuju keunggulan akademis."
          />
          <CardProgram
            title="K"
            headline="Mentorship Profesional"
            description="Dengan didukung oleh tim pengajar berkualifikasi tinggi, kami menawarkan mentorship profesional untuk membimbing siswa menuju keunggulan akademis."
          />
          <CardProgram
            title="A"
            headline="Mentorship Profesional"
            description="Dengan didukung oleh tim pengajar berkualifikasi tinggi, kami menawarkan mentorship profesional untuk membimbing siswa menuju keunggulan akademis."
          />
        </Slider>
      </div>
    </div>
  );
}
