import Image from "next/image";
import model from "/public/assets/model1.png";
import Link from "next/link";

export default function Offering() {
  return (
    <div className="bg-[#FAFBFD] w-full h-[450px] flex justify-center items-center px-4 sm:px-8 sm:min-h-screen  ">
      <div className=" w-full  h-auto flex  items-end relative mt-0 sm:mt-5">
        <div className="bg-[#06AC58] w-full h-auto  flex flex-col px-[18.19px] py-[15.86px] space-y-2 rounded-[5px] sm:rounded-xl sm:space-y-4 sm:px-10 sm:py-8  ">
          <p className="text-[#FFF] font-extrabold w-[131px] text-[20px] sm:text-[57px] sm:w-[429px]">
            Tertarik Ingin Bergabung?
          </p>
          <p className="text-[#FFF] w-[204px] text-[12px] sm:text-[30px] sm:w-[667px]">
            Silahkan Gabung WA Grup Calon Grup Untuk informasi lebih lanjut
          </p>

          <Link
            href=""
            className="bg-[#FFF] text-[#0B7077] flex justify-center items-center  hover:text-[#FFF] hover:shadow-[inset_20rem_0_0_0] hover:shadow-[#0B7077] duration-[400ms,700ms] transition-[color,box-shadow] font-semibold w-[138.39px] h-[23.20px] text-[10px] rounded-[3px] sm:rounded-lg  sm:w-[299px] sm:h-[57px] sm:text-xl"
          >
            Join Whatsapp group
          </Link>
        </div>
        <Image
          src={model}
          width={380}
          height={380}
          alt="model"
          className="absolute  right-0 w-[145px] h-[185px] sm:right-[5%] sm:w-[408px] sm:h-[542px]"
        />
      </div>
    </div>
  );
}
