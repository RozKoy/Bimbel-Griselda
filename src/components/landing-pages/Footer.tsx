import Link from "next/link";
import Image from "next/image";
import logo from "/public/assets/logoBimbel.png";
import WA from "./Icons/contact/Wa";
import Instagrams from "./Icons/contact/Instagrams";
import Facebook from "./Icons/contact/Facebook";
import Tiktok from "./Icons/contact/Tiktok";

export default function Footer() {
  return (
    <div className="bg-[#F6F6F6] w-full h-auto sm:pt-14 sm:pb-4 sm:px-10">
      <div className="sm:flex sm:justify-between">
        <div className="flex flex-col items-start">
          <div className="flex space-x-4 justify-center mb-4 items-center">
            <div className="bg-[#0065FF] w-[3px] h-[33px]"></div>
            <p className="font-bold sm:text-2xl"> TENTANG KAMI</p>
          </div>
          <div className="flex space-x-4 justify-center items-center mb-2">
            <Image src={logo} width={40} height={50} alt="logo" />
            <p className="text-[#FFB700] font-extrabold sm:text-[28px]">
              Bimbel Griselda
            </p>
          </div>
          <p className="sm:w-[442px]">
            Temukan potensi terbaikmu bersama Bimbel Griselda! Pelajari dengan
            semangat dan prestasi, karena setiap pelajaran adalah langkah menuju
            keberhasilan.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <div className="flex space-x-4 justify-center items-center mb-4">
            <div className="bg-[#0065FF] w-[3px] h-[33px]"></div>
            <p className="font-bold sm:text-2xl"> HUBUNGI KAMI</p>
          </div>
          <p className="mb-4 sm:w-[338px]">
            Headquarter Office Jl. Brigjen Hasan Kasim, Ruko 30A Kecamatan
            Sukaramme, Kota Bandar Lampung 30114.
          </p>
          <div className=" flex space-x-3">
            <WA fill="#0065FF" />
            <Instagrams fill="#0065FF" />
            <Facebook fill="#0065FF" />
            <Tiktok fill="#0065FF" />
          </div>
        </div>

        <div className="flex flex-col items-start">
          <div className="flex space-x-4 justify-center items-center mb-4">
            <div className="bg-[#0065FF] w-[3px] h-[33px]"></div>
            <p className="font-bold sm:text-2xl"> NAVIGASI</p>
          </div>
          <div className="flex flex-col space-y-3">
            <Link
              href=""
              className="text-base  visited:font-extrabold visited:text-[#0065FF]"
            >
              Beranda
            </Link>
            <Link href="" className="text-base ">
              Guru
            </Link>
            <Link href="" className="text-base ">
              Murid
            </Link>
            <Link href="" className="text-base ">
              Mitra
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center font-light sm:mt-16">
        Copyright 2023 All Right Reserve | Made with ♡ Reclas Tech
      </p>
    </div>
  );
}
