import maskot from "/public/assets/maskot.png";
import Image from "next/image";
import Navbar from "../Navbar";
import Link from "next/link";
import WA from "@/components/landing-pages/Icons/contact/Wa";
import Instagrams from "@/components/landing-pages/Icons/contact/Instagrams";
import Facebook from "@/components/landing-pages/Icons/contact/Facebook";
import Tiktok from "@/components/landing-pages/Icons/contact/Tiktok";

const MainPages = () => {
  return (
    <div className="latar h-screen ">
      <div className="h-full gradasi sm:flex sm:flex-col">
        <div className="sm:px-10 h-full">
          <Navbar />
          <div className="sm:flex sm:space-x-10 sm:items-center sm:mt-10 ">
            <div className="sm:flex sm:flex-col sm:space-y-5 sm:w-1/2">
              <p className="text-[#FFB700] font-extrabold sm:text-[120px] leading-[120px]  ">
                <span>Bimbel</span> <br /> <span>Griselda</span>
              </p>
              <p className="">
                &quot;Tingkatkan potensimu dan capai prestasimu yang maksimal
                bersama Bimbel Griselda! Bersama-sama kita raih sukses dan
                keberhasilan dalam setiap langkah pembelajaran.&quot;
              </p>
              <Link
                href=""
                className=" bg-[#0065FF] text-white  hover:text-black hover:shadow-[inset_17rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow] flex items-center justify-center rounded-full font-bold  sm:w-5/12 sm:h-14 "
              >
                
                Jelajahi Sekarang
              </Link>
            </div>
            <div className="relative sm:w-1/2  sm:h-[420px] sm:flex sm:justify-center sm:items-center">
              <div className="bg-[#0065FF] rounded-t-[50px] sm:h-[330px] sm:w-7/12 "></div>
              <div className="absolute sm:top-0 sm:left-36">
                <Image src={maskot} width={330} height={0} alt="maskot" />
              </div>
            </div>
          </div>
        </div>
        <div className="  sm:flex sm:justify-end sm:items-end h-auto ">
          <div className=" text-white w-[501px] h-[90px] flex ">
            {" "}
            <div className="w-1/3 h-full  bg-[#FFB700] sm:rounded-tl-[50px] flex flex-col justify-center items-center ">
              <p className="font-bold sm:text-[34px]">2100</p>
              <p className="sm:text-[15px]">Member</p>
            </div>
            <div className="w-1/3 h-full bg-[#FFB700] sm:flex sm:flex-col sm:justify-center sm:items-center">
              <p className="font-bold sm:text-[34px]">126</p>
              <p className="sm:text-[15px]">Events</p>
            </div>
            <div className="w-1/3 h-full bg-[#0065FF]  sm:flex sm:justify-center sm:items-center sm:space-x-3">
              <WA fill="#FAFBFD" width="28" height="26" />
              <Instagrams fill="#FAFBFD" />
              <Facebook fill="#FAFBFD" />
              <Tiktok fill="#FAFBFD" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPages;
