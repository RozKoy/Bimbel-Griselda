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
    <div className="bg-[url('/assets/latar.png')] min-h-screen w-full sm:min-h-screen ">
      <div className="min-h-screen gradasi w-full   sm:min-h-screen  sm:flex sm:flex-col">
        <div className=" h-full  sm:px-10 ">
          <Navbar />
          <div className=" px-4 sm:px-0 sm:flex sm:justify-center  sm:items-center sm:mt-10 ">
            <div className="w-[358px]  sm:flex sm:flex-col sm:space-y-5 sm:w-[639px]">
              <p className="text-[#FFB700] text-[62.669px] leading-[70px]  font-extrabold my-[16px] sm:text-[120px] sm:leading-[120px]  ">
                Bimbel Griselda
              </p>
              <p className="text-[15px] mb-[20.89px] sm:text-[20px]">
                &quot;Tingkatkan potensimu dan capai prestasimu yang maksimal
                bersama Bimbel Griselda! Bersama-sama kita raih sukses dan
                keberhasilan dalam setiap langkah pembelajaran.&quot;
              </p>
              <Link
                href=""
                className=" bg-[#0065FF] w-[166.84px] h-[44.6px] mb-8 text-white  hover:text-black hover:shadow-[inset_17rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow] flex items-center justify-center rounded-full font-bold  sm:w-[255.05px] sm:h-14 "
              >
                Jelajahi Sekarang
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative  w-[219.634px] h-[245px] flex justify-center items-center  sm:h-[492px] sm:w-[441px] sm:flex sm:justify-center sm:items-center sm:left-0 ">
                <div className="bg-[#0065FF] w-full h-[200.09px] rounded-t-[50px]  sm:h-[401px]  "></div>
                <div className="absolute top-0 left-[12%]">
                  <Image
                    src={maskot}
                    width="330"
                    height="340"
                    className="w-[219.634px] h-[245px] md:h-[492px] md:w-[397px]"
                    alt="maskot"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center mt-8 sm:flex sm:justify-end sm:items-end  sm:mb-0 ">
          <div className=" text-white w-[267.369px] h-[48.03px] flex   mt-[3%]  sm:w-[501px] sm:h-[90px] sm:flex  ">
            <div className="w-1/3 h-full  bg-[#FFB700] rounded-tl-[26px] sm:rounded-tl-[48px] flex flex-col justify-center items-center ">
              <p className="font-bold text-[19px] sm:text-[34px]">2100</p>
              <p className="text-[8px] sm:text-[15px]">Member</p>
            </div>
            <div className="w-1/3 h-full bg-[#FFB700] flex flex-col justify-center items-center">
              <p className="font-bold text-[19px] sm:text-[34px]">126</p>
              <p className="text-[8px] sm:text-[15px]">Events</p>
            </div>
            <div className="w-1/3 h-full bg-[#0065FF] rounded-tr-[26px] flex justify-center items-center space-x-1 sm:rounded-tr-[0px] sm:flex sm:justify-center sm:items-center sm:space-x-3">
              <WA
                fill="#FAFBFD"
                className="w-[14px] h-[14px] sm:w-[28px] sm:h-[28px]"
              />
              <Instagrams
                fill="#FAFBFD"
                className="w-[14px] h-[14px] sm:w-[28px] sm:h-[28px]"
              />
              <Facebook
                fill="#FAFBFD"
                className="w-[14px] h-[14px] sm:w-[28px] sm:h-[28px]"
              />
              <Tiktok
                fill="#FAFBFD"
                className="w-[14px] h-[14px] sm:w-[28px] sm:h-[28px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPages;
