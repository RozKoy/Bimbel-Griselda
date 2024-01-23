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
    autoplay: true,
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
          <p className="text-center text-[#FFF] font-medium text-[12px] w-[334px] sm:text-lg sm:w-[540px]">
            Kesuksesan cerita kami tercermin dalam testimoni pelanggan kami.
            Baca pengalaman belajar yang menginspirasi dan melihat bagaimana
            Griselda telah menjadi mitra setia dalam pencapaian pendidikan
            mereka.
          </p>
        </div>
        <Slider {...settings}>
          <CardTestimonials
            stroke="#0065FF"
            testimony="Belajar sama bimbel griselda enak banget, kakanya ngajarnga santai tapi rinci, kalo belajar sama kakaknya aku jadi cepat nangkap, bintang ⭐⭐⭐⭐⭐"
          />

          <CardTestimonials
            stroke="#FFB700"
            testimony="BELAJAR SAMA KAKA DI BIMBEL GRISELDA JADI LEBIH MUDAH DAN SERU ABIZZZ DEH, AKU YANG KEMARIN GASUKA MTK JADI SUKAAA"
          />
          <CardTestimonials
            stroke="#06AC58"
            testimony="Buat salah satu kaka di bimbel Griselda. Makasih yah Kak semenjak kakak yang bantuin aku aku semakin pede dan belajar dan semakin bersemangat dan punya motivasi .juga aku lebih mudah memahami pelajaran Thanks ya kak muga-mugahan murid-murid yang lainnya juga punya inspirasi dan semangat dan belajar,kak Vanya dan tim tetap semangat!!! ya ... "
          />
          <CardTestimonials
            stroke="#FD0000"
            testimony="8/10 untuk kakak2nya, karena ramah2 dan sangat sabarrr, pas aku bingung sama soal sekolah, mereka bisa bantu, dan penjelasannya mudah dipahami - 9/10 untuk materi, materinya mengikuti pelajaran disekolah, dan mereka niat banget bikin materi, luv luv, aku dibikinin ppt untun ringkasan materi - 10/10 kakak2nya ramah banget, suka2 - 10/10 jam belajarnya fleksibel banget, sama2 mengikuti jadwal kesibukan masing2, jadi meskipun hari ini gabisa, bisa diganti besok🫰🏻🫰🏻🫰🏻- bintang 5 bwt semuanya🌟🌟🌟🌟🌟"
          />
        </Slider>
      </div>
    </div>
  );
};
export default Testimonials;
