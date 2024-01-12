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
    className: "h-auto w-full px-[3%] sm:px-0 ",

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
          slidesToScroll: 2,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="bg-[url('../../public/assets/Subtract.png')] pb-[10%] pt-4 w-full h-auto sm:min-h-screen  sm:flex sm:items-center sm:pb-0 sm:pt-0 ">
      <div className="w-full space-y-10  sm:flex sm:justify-between   ">
        <div className=" flex-col space-y-1 ml-4 mt-0  sm:mt-6 sm:space-y-2  sm:ml-12">
          <p className="text-[#000]  font-extrabold text-[40px] w-[235px]  sm:text-5xl sm:leading-tight ">
            Program MERDEKA
          </p>
          <p className="text-[#000] text-[15px] w-[95%] d sm:text-lg sm:w-[370px]">
            Lorem Ipsum has been the industry&apos; standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries.
          </p>
        </div>
        <div className=" w-full h-auto   sm:w-7/12 sm:h-[400px]  ">
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
    </div>
  );
}
