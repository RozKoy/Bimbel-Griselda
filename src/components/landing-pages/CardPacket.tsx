import Link from "next/link";
import WaTransparent from "./Icons/WaTransparent";
interface CardPacketProps {
  title?: string;
  price?: string;
}

const CardPacket: React.FC<CardPacketProps> = ({ title, price }) => {
  return (
    <div className="  relative flex items-end  sm:h-[370px] sm:w-[300px]">
      <div className="absolute top-0 bg-gradient-to-r from-[#0174bee0] to-[#00416B] left-[35%] text-center rounded-full text-white font-bold sm:text-[24px] sm:py-2 sm:px-4">
        {title}
      </div>
      <div className="bg-[#E6E6E6] rounded-2xl flex flex-col items-center shadow-[5px_5px_4px_0px] shadow-[#00000040] sm:w-full sm:h-[350px] sm:pt-10 sm:space-y-2">
        <p className="font-bold text-center sm:text-[32px] ">{price}</p>
        <p className="text-center text-[#7C7C7C] sm:text-lg sm:max-w-[269px] ">
          This clean and ever contemporary
        </p>
        <p className="text-center sm:text-lg">Keuntungan</p>
        {/* <p className="sm:tex-lg sm:max-w-[269px]">{benefite}</p> */}
        <ol className="list-decimal sm:max-w-[269px] sm:text-lg">
          <li> Point 1 xxxxxxxxxxxxxxxx</li>
          <li> Point 2 xxxxxxxxxxxxxxxx</li>
          <li> Point 3 xxxxxxxxxxxxxxxx</li>
        </ol>
        <Link
          href=""
          className="bg-[#06AC58] flex justify-center items-center  rounded-full sm:space-x-3 sm:w-[201px] sm:h-[47px]"
        >
          <p className="text-white sm:text-lg">Pesan Sekarang</p>
          <WaTransparent />
        </Link>
      </div>
    </div>
  );
};

export default CardPacket;
