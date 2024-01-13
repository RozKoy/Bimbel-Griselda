import Link from "next/link";
import WaTransparent from "./Icons/WaTransparent";
interface CardPacketProps {
  title?: string;
  price?: string;
}

const CardPacket: React.FC<CardPacketProps> = ({ title, price }) => {
  return (
    <div className="  relative flex items-end  w-[171.563px] h-[182px] sm:h-[370px] sm:w-[300px]">
      <div className="absolute top-0 bg-gradient-to-r from-[#0174bee0] to-[#00416B] left-[35%] text-center rounded-full text-white font-bold px-2 py-0.5 text-[13.725px] sm:text-[24px] sm:py-2 sm:px-4">
        {title}
      </div>
      <div className="bg-[#E6E6E6]  flex flex-col items-center shadow-[5px_5px_4px_0px] shadow-[#00000040] w-full h-[171.563px] rounded-[11px] pt-3 sm:rounded-2xl sm:w-full sm:h-[350px] sm:pt-10 sm:space-y-2">
        <p className="font-bold text-center text-[18.3px] sm:text-[32px] ">
          {price}
        </p>
        <p className="text-center text-[#7C7C7C] text-[11px] max-w-[153.83px] sm:text-lg sm:max-w-[269px] ">
          This clean and ever contemporary
        </p>
        <p className="text-center text-[11px] sm:text-lg">Keuntungan</p>

        <ol className="list-decimal max-w-[153.83px] text-[11px] sm:max-w-[269px] sm:text-lg">
          <li> Point 1 xxxxxxxxxxxxxxxx</li>
          <li> Point 2 xxxxxxxxxxxxxxxx</li>
          <li> Point 3 xxxxxxxxxxxxxxxx</li>
        </ol>
        <Link
          href=""
          className="bg-[#06AC58] flex justify-center items-center  rounded-full w-[115.45px] h-[26.43px] space-x-1 sm:space-x-3 sm:w-[201px] sm:h-[47px]"
        >
          <p className="text-white text-[10.30px] sm:text-lg">Pesan Sekarang</p>
          <WaTransparent className="w-[14.30px] h-[14.30px] sm:w-[25px] sm:h-[25px]" />
        </Link>
      </div>
    </div>
  );
};

export default CardPacket;
