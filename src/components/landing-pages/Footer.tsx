import Link from "next/link";
import Image from "next/image";
import logo from "/public/assets/logoBimbel.png";
import WA from "../../components/landing-pages/Icons/contact/Wa";
import Instagrams from "../../components/landing-pages/Icons/contact/Instagrams";
import Facebook from "../../components/landing-pages/Icons/contact/Facebook";
import Tiktok from "../../components/landing-pages/Icons/contact/Tiktok";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <div className="bg-[#F6F6F6] flex flex-col w-auto  h-full md:w-full md:pt-14 md:pb-4 md:px-10">
      <div className=" md:flex md:justify-between">
        <div className="flex my-4 flex-col items-start">
          <div className="flex space-x-4 justify-center mb-4 items-center">
            <div className="bg-[#0065FF] w-[3px] h-[33px]"></div>
            <p className="font-bold text-[17px] md:text-2xl"> TENTANG KAMI</p>
          </div>
          <div className="flex space-x-4 justify-center items-center mb-2">
            <Image
              src={logo}
              className="w-[48px] h-[48px]"
              width="40"
              height="40"
              alt="logo"
            />
            <p className="text-[#FFB700] font-extrabold text-[25px] md:text-[28px]">
              Bimbel Griselda
            </p>
          </div>
          <p className="w-[354px] md:w-[442px]">
            Temukan potensi terbaikmu bersama Bimbel Griselda! Pelajari dengan
            semangat dan prestasi, karena setiap pelajaran adalah langkah menuju
            keberhasilan.
          </p>
        </div>

        <div className="flex flex-col my-4 items-start">
          <div className="flex space-x-4 justify-center items-center mb-4">
            <div className="bg-[#0065FF] w-[3px] h-[33px]"></div>
            <p className="font-bold text-[17px] md:text-2xl"> HUBUNGI KAMI</p>
          </div>
          <p className="mb-4 w-[338px]">
            Headquarter Office Jl. Brigjen Hasan Kasim, Ruko 30A Kecamatan
            Sukaramme, Kota Bandar Lampung 30114.
          </p>
          <div className=" flex space-x-3">
            <WA fill="#0065FF" width="28" height="26" />
            <Instagrams fill="#0065FF" />
            <Facebook fill="#0065FF" />
            <Tiktok fill="#0065FF" />
          </div>
        </div>

        <div className="flex flex-col items-start">
          <div className="flex space-x-4 justify-center items-center mb-4">
            <div className="bg-[#0065FF] w-[3px] h-[33px]"></div>
            <p className="font-bold md:text-2xl"> NAVIGASI</p>
          </div>
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              className={
                router.pathname === "/"
                  ? " text-[12px] font-bold text-[#0065FF] md:text-base"
                  : " text-[12px] md:text-base"
              }
            >
              Beranda
            </Link>
            <Link
              href="/teacher"
              className={
                router.pathname === "/teacher"
                  ? "text-[12px]   font-bold text-[#0065FF] md:text-base"
                  : " text-[12px] md:text-base"
              }
            >
              Guru
            </Link>
            <Link
              href="/student"
              className={
                router.pathname === "/student"
                  ? "text-[12px]  font-bold text-[#0065FF] md:text-base "
                  : "text-[12px] md:text-base"
              }
            >
              Murid
            </Link>
            <Link
              href="/patner"
              className={
                router.pathname === "/patner"
                  ? "text-[12px]   font-bold text-[#0065FF] md:text-base"
                  : "text-[12px] md:text-base"
              }
            >
              Mitra
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center font-light text-[10px] mt-12 md:text-[14px] md:mt-16">
        Copyright 2023 All Right Reserve | Made with ♡ Reclas Tech
      </p>
    </div>
  );
}
