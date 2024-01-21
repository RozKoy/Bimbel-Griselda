import Image from "next/image";
import book from "/public/assets/bookmark.png";
import Link from "next/link";

interface CardModuleProps {
  title?: string;
  href?:any;
}

const CardModule: React.FC<CardModuleProps> = ({ title,href }) => {
  return (
    <div className="bg-[#FFB700] m-4 rounded-lg flex justify-center items-center   w-[147px] py-[7.51px] pl-[7.51px] pr-[8.13px]  sm:py-[14.55px] sm:pr-[14.55px] sm:pl-[15.16px]  sm:w-[284px] sm:scale-90">
      <div className="bg-[#FFf]  flex items-center rounded-lg p-2 sm:p-3">
        <div className="flex flex-col justify-center space-y-2 w-[123px] h-[80px]  sm:w-[213px] sm:h-[140px]">
          <div className=" w-full  ">
            <p className="text-[#0065FF] font-bold text-[13px] sm:text-[22px]">
              {title}
            </p>
            <p className="text-[#0000008c] text-[6px] sm:text-[11.425px]">
              Untuk gabung ke bahan ajar jenjang SMA, silahkan gabung ke grup WA
            </p>
          </div>
          <Link
            href={href}
            className="bg-[#06AC58] flex justify-center items-center  w-[65.51px] h-[15.25px] rounded-[2px] sm:rounded-lg sm:w-[125px] sm:h-[29px] "
          >
            <p className="text-[#FFF] text-[6px] sm:text-[11.425px]">
              Gabung Sekarang
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardModule;
