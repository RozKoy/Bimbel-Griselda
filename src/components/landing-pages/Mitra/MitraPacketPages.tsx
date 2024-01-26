import InfoIcon from "../Icons/InfoIcon";
import * as React from "react";
import { Modal } from "flowbite-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardMitraPacket from "../Murid/CardMitraPacket";

var settings = {
  className: " h-auto w-full pl-[3%]   sm:pl-[3%] sm:pr-[2%] ",
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
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
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function MitraPacketPages() {
  const kelasSD = [
    {
      id: 1,
      title: "Standart",
      investment: "Rp. 1.000.000",
      price: "Rp. 250.000",
      profit: 20,
      url: "https://wa.me/6282233216825?text=Halo+kak%2C+saya+tertarik+untuk+menjadi+mitra+bimbel+griselda+dengan+paket+%28Standart%29+tolong+beri+info+selengkapnya",
    },
    {
      id: 2,
      title: "Premium",
      investment: "Rp. 1.000.000",
      price: "Rp. 250.000",
      profit: 20,
      url: "https://wa.me/6282233216825?text=Halo+kak%2C+saya+tertarik+untuk+menjadi+mitra+bimbel+griselda+dengan+paket+%28Premium%29+tolong+beri+info+selengkapnya",
    },
    {
      id: 3,
      title: "Gold",
      investment: "Rp. 1.000.000",
      price: "Rp. 250.000",
      profit: 20,
      url: "https://wa.me/6282233216825?text=Halo+kak%2C+saya+tertarik+untuk+menjadi+mitra+bimbel+griselda+dengan+paket+%28Gold%29+tolong+beri+info+selengkapnya",
    },
  ];

  return (
    <div className="bg-[url('../../public/assets/latarPaket.png')]  w-full h-auto sm:min-h-screen">
      <div className="gradasi2 w-full h-auto pt-6 pb-8 px-5 space-y-4  sm:space-y-6 sm:min-h-screen sm:px-8 sm:pb-10  sm:pt-6">
        <div className="w-[334pxpx] sm:w-[424px]">
          <p className="font-extrabold text-center text-[26px] sm:text-5xl sm:text-left">
            Pilih Paket Kamu
          </p>
        </div>

        <div className=" flex flex-col space-y-2  items-center sm:flex-row sm:justify-between sm:items-end sm:space-y-0">
          <p className="text-[#7C7C7C] text-center text-[12px] w-[334px] sm:w-[424px] sm:text-left sm:text-lg">
            Pilih paket pembelajaran yang sesuai dengan kebutuhan Anda. Griselda
            menyediakan pricelist yang transparan, memudahkan Anda untuk memilih
            pengalaman belajar yang cocok.
          </p>

          <div className="bg-[#FFB700] flex space-x-2 p-1 rounded-md shadow-[5px_5px_4px_0px] shadow-[#00000040] ">
            <InfoIcon />
            <p className="text-white sm:text-[18px]">Informasi Lanjutan</p>
          </div>
        </div>

        <Slider {...settings}>
          <CardMitraPacket
            title="Standart"
            investment="Rp. 1.000.000"
            price="Rp. 250.000"
            profit={20}
            href="https://wa.me/6282233216825?text=Halo+kak%2C+saya+tertarik+untuk+menjadi+mitra+bimbel+griselda+dengan+paket+%28Standart%29+tolong+beri+info+selengkapnya"
          >
            <ol className="list-disc text-[12px] ml-8 sm:text-sm ">
              <li>Modul Pembelajaran Dasar.</li>
              <li>Pelatihan dasar manajerial, akademik, dan marketing.</li>
              <li>Perlengkapan administrasi sederhana.</li>
              <li>Materi promosi digital.</li>
              <li>Hak cipta atas modul pembelajaran yang dimodifikasi.</li>
              <li>Pendampingan tim Griselda selama 3 bulan.</li>
              <li>Bantuan pencarian lokasi strategis.</li>
            </ol>
          </CardMitraPacket>
          <CardMitraPacket
            title="Premium"
            investment="Rp. 1.250.000"
            price="Rp. 300.000"
            profit={20}
            href="https://wa.me/6282233216825?text=Halo+kak%2C+saya+tertarik+untuk+menjadi+mitra+bimbel+griselda+dengan+paket+%28Premium%29+tolong+beri+info+selengkapnya"
          >
            <ol className="list-disc text-[12px] ml-8 sm:text-sm ">
              <li>Semua fasilitas Paket Standar.</li>
              <li>Modul pembelajaran lengkap.</li>
              <li>Perlengkapan administrasi sederhana.</li>
              <li> Pelatihan lanjutan manajerial, akademik, dan marketing.</li>
              <li>Perlengkapan administrasi lengkap.</li>
              <li>Materi promosi cetak dan digital.</li>
              <li>Pendampingan tim Griselda selama 6 bulan.</li>
              <li> Akses ke platform pembelajaran online Griselda.</li>
            </ol>
          </CardMitraPacket>
          <CardMitraPacket
            title="Gold"
            investment="Rp. 1.500.000"
            price="Rp. 350.000"
            profit={20}
            href="https://wa.me/6282233216825?text=Halo+kak%2C+saya+tertarik+untuk+menjadi+mitra+bimbel+griselda+dengan+paket+%28Gold%29+tolong+beri+info+selengkapnya"
          >
            <ol className="list-disc text-[12px] ml-8 sm:text-sm ">
              <li>Semua fasilitas Paket Premium.</li>
              <li>Hak cipta atas modul pembelajaran yang dimodifikasi.</li>
              <li>Pendampingan tim Griselda selama 12 bulan.</li>
              <li> Bantuan pencarian lokasi strategis.</li>
              <li>Akses ke platform pembelajaran online Griselda.</li>
              <li>Materi promosi cetak dan digital.</li>
              <li>Layanan branding dan marketing eksklusif.</li>
            </ol>
          </CardMitraPacket>
        </Slider>
      </div>
    </div>
  );
}
