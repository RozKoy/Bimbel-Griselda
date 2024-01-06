import Image from "next/image";
import model from "/public/assets/model1.png";
import Link from "next/link";

export default function Offering() {
  return (
    <div className="bg-[#FAFBFD] w-full min-h-screen flex justify-center items-center px-8 ">
      <div className=" w-full h-auto flex  items-end relative">
        <div className="bg-[#06AC58] w-full h-auto rounded-xl flex flex-col space-y-4 sm:px-10 sm:py-8  ">
          <p className="text-[#FFF] font-extrabold sm:text-[57px] sm:w-[429px]">
            Tertarik Ingin Bergabung?
          </p>
          <p className="text-[#FFF]  sm:text-[30px] sm:w-[667px]">
            Silahkan Gabung WA Grup Calon Grup Untuk informasi lebih lanjut
          </p>

          <Link
            href=""
            className="bg-[#FFF] text-[#0B7077] flex justify-center items-center rounded-lg text-xl font-semibold sm:w-[299px] sm:h-[57px]"
          >
            Join Whatsapp group
          </Link>
        </div>
        <Image
          src={model}
          width={380}
          height={380}
          alt="model"
          className="absolute  right-[5%]"
        />
      </div>
    </div>
  );
}
