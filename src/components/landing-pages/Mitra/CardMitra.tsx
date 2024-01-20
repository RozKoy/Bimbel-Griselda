import Image from "next/image";

interface CardMitraProps {
  title?: string;
  description?: string;
  src?: any;
}

const CardMitra: React.FC<CardMitraProps> = ({ title, description, src }) => {
  return (
    <div className="flex flex-col justify-end items-end relative w-[325.56px] h-[193px]   my-0 sm:my-10 sm:w-[360px] sm:h-[235px] ">
      <div className="rounded-[20px] bg-gradient-to-b from-blue-600 to-blue-400 shadow-md flex flex-col space-y-2 w-[315.56px] h-[160.19px] pl-3 pt-3  sm:w-[350px] sm:h-[205px] sm:pt-2 sm:pl-8">
        <p className="font-bold text-[18px] ml-16 sm:text-2xl sm:ml-14 ">
          {title}
        </p>
        <p className="text-[14px] sm:text-base">{description}</p>
      </div>

      <div className="bg-[#FFC436]  absolute left-0 top-0 flex justify-center items-center rounded-full shadow-[5px_5px_4px_0px] shadow-[#00000040] w-[77px] h-[77px] sm:w-[80px] sm:h-[80px]">
        <Image
          src={src}
          width={50}
          height={44}
          alt="mitra"
          className="w-[44px] h-[44px]  sm:w-[50px] sm:h-[44px]"
        />
      </div>
    </div>
  );
};

export default CardMitra;
