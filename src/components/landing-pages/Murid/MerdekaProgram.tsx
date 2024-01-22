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
    autoplay: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 2000,
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
    <div className="bg-[url('../../public/assets/Subtract.png')] pb-[5%] pt-4 w-full h-[750px] flex  items-end sm:h-screen  sm:flex sm:items-center sm:pb-0 sm:pt-0 ">
      <div className="w-full space-y-10 sm:flex sm:justify-between   ">
        <div className=" flex-col space-y-1 ml-4 mt-0 sm:mt-6 sm:space-y-2  sm:ml-12">
          <p className="text-[#000]  font-extrabold text-[40px] w-[235px]  sm:text-5xl sm:leading-tight ">
            Program MERDEKA
          </p>
          <p className="text-[#000] text-[15px] w-[95%]  sm:text-lg sm:w-[470px] ">
            Program MERDEKA di Bimbel Kami menciptakan lingkungan pembelajaran
            unik dan efektif. Dengan Mentorship Profesional, Edukasi Interaktif,
            Resources Komprehensif, Dedikasi Tim, Evaluasi Berkualitas, Kelas
            Kecil, dan Akses Materi Tersedia, kami membimbing siswa menuju
            keunggulan akademis. Sistem evaluasi berkualitas dan kelas kecil
            mendukung pendekatan personal dan efektif, sementara akses mudah ke
            materi pembelajaran terkini memastikan persiapan siswa menghadapi
            tantangan akademis dengan percaya diri. Bersama kami, setiap
            pelajaran menjadi momen berharga untuk pertumbuhan dan kemajuan yang
            optimal.
          </p>
        </div>
        <div className=" w-full h-auto   sm:w-7/12 sm:h-[400px]  ">
          <Slider {...settings}>
            <CardProgram
              title="M"
              headline="Mentorship Profesional"
              description="Didukung oleh tim pengajar berkualifikasi tinggi, kami membimbing siswa menuju keunggulan akademis."
            />
            <CardProgram
              title="E"
              headline="Edukasi Interaktif"
              description="Pengalaman pembelajaran tak terlupakan melalui pendekatan edukasi interaktif, memastikan setiap pelajaran menjadi momen berharga bagi kemajuan siswa."
            />
            <CardProgram
              title="R"
              headline="Resources Komprehensi"
              description="Sumber daya pembelajaran komprehensif, termasuk buku, video, dan materi inovatif, memastikan keberagaman pendekatan sesuai dengan gaya belajar."
            />
            <CardProgram
              title="D"
              headline="Dedikasi Tim"
              description="Tim berdedikasi memberikan dukungan penuh, bukan hanya sebagai pengajar, tetapi juga sebagai teman dan pembimbing setiap siswa."
            />
            <CardProgram
              title="E"
              headline="Evaluasi Berkualitas"
              description="Sistem evaluasi berkualitas membantu memahami kemajuan siswa secara mendalam, memastikan pengembangan optimal."
            />
            <CardProgram
              title="K"
              headline="Kelas Kecil, Pembelajaran Efektif"
              description="Dengan mempertahankan kelas kecil, kami fokus pada pembelajaran personal dan efektif, menciptakan lingkungan mendukung pertumbuhan akademis."
            />
            <CardProgram
              title="A"
              headline="Akses Materi Tersedia"
              description="Memberikan akses mudah ke materi pembelajaran terkini dan relevan, membantu siswa menghadapi tantangan akademis dengan percaya diri."
            />
          </Slider>
        </div>
      </div>
    </div>
  );
}
