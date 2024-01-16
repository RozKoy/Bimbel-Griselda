import Link from "next/link";
import WaTransparent from "./Icons/WaTransparent";
interface CardPacketTKProps {
  title?: string;
  price?: string;
  status?: string;
}

const CardPacketTK: React.FC<CardPacketTKProps> = ({
  title,
  price,
  status,
}) => {
  return (
    <div className="relative flex items-center  w-[171.563px] h-[182px] sm:h-[250px] sm:w-[300px]">
      <div className="absolute top-0 w-full  flex justify-center">
        <p className="text-white font-bold text-[13.725px] bg-gradient-to-r from-[#0174bee0] to-[#00416B] sm:text-[24px] text-center rounded-[20px]  px-2 py-0.5  sm:py-2 sm:px-5 sm:max-w-[250px]">
          {title}
        </p>
      </div>
      <div className="bg-[#E6E6E6] shadow-[5px_5px_4px_0px] shadow-[#00000040] w-full max-h-[171.563px] rounded-[11px] pt-3 sm:rounded-2xl sm:w-full sm:max-h-[235px] sm:pt-10 sm:pb-4">
        <div className=" flex flex-col justify-center items-center  sm:space-y-5 sm:mt-4">
          <div className="text-center">
            <p className="text-[24px] ">{status}</p>
            <p className="font-bold sm:text-[32px]">{price}</p>
          </div>

          <Link
            href=""
            className="bg-[#06AC58] flex justify-center items-center  rounded-full w-[115.45px] h-[26.43px] space-x-1 sm:space-x-3 sm:w-[201px] sm:h-[47px]"
          >
            <p className="text-white text-[10.30px] sm:text-lg">
              Pesan Sekarang
            </p>
            <WaTransparent className="w-[14.30px] h-[14.30px] sm:w-[25px] sm:h-[25px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardPacketTK;
