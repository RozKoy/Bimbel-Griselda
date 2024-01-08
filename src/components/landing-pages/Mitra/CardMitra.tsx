import Image from "next/image";
import mitraLogo from "/public/assets/mitraLogo.png";
interface CardMitraProps {
  title?: string;
  description?: string;
}

const CardMitra: React.FC<CardMitraProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col justify-end items-end relative sm:w-[360px] sm:h-[230px] ">
      <div className="rounded-[20px] bg-gradient-to-b from-blue-600 to-blue-400 shadow-md flex flex-col space-y-2  sm:w-[350px] sm:h-[188px] sm:pt-2 sm:pl-8">
        <p className="font-bold sm:text-2xl sm:ml-14 ">{title}</p>
        <p className="sm:text-base">{description}</p>
      </div>

      <div className="bg-[#FFC436]  absolute left-0 top-0 flex justify-center items-center rounded-full shadow-[5px_5px_4px_0px] shadow-[#00000040] sm:w-[80px] sm:h-[80px]">
        <Image src={mitraLogo} width={50} height={44} alt="mitra" />
      </div>
    </div>
  );
};

export default CardMitra;
