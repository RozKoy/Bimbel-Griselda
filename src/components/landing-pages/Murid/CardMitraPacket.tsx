import Link from "next/link";
import WaTransparent from "@/components/landing-pages/Icons/WaTransparent";

interface CardPacketMitraProps {
  title?: string;
  investment?: string;
  price?: string;
  profit?: number;
  href?: any;
  children:any;
}

const CardMitraPacket: React.FC<CardPacketMitraProps> = ({
  title,
  investment,
  price,
  profit,
  href,
  children,
}) => {
  return (
    <div className="  relative flex items-center w-[320px] h-[410px] sm:h-[531px] sm:w-[514px]">
      <div className="absolute top-0 w-full  flex justify-center">
        <p className="text-white font-bold text-[13.725px] bg-gradient-to-r from-[#0174bee0] to-[#00416B] text-center rounded-[20px]  px-2 py-0.5  sm:text-[24px]  sm:py-2 sm:px-5 sm:max-w-[250px]">
          {title}
        </p>
      </div>
      <div className="bg-[#E6E6E6] shadow-[5px_5px_4px_0px] shadow-[#00000040] w-full h-[90%] rounded-[11px] pt-3 pb-2 sm:rounded-2xl sm:w-full sm: sm:pt-5 sm:pb-4">
        <div className=" flex flex-col justify-center items-center mt-3 space-y-2 sm:space-y-2 sm:mt-8">
          <div className="flex space-x-10">
            <div className="flex-col text-center">
              <p className="text-[13.241px] sm:text-[24px]">Investasi</p>
              <p className="font-bold text-[17.65px] sm:text-[32px]">
                {investment}
              </p>
            </div>
            <div className="flex-col text-center">
              <p className="text-[13.241px] sm:text-[24px]">
                Biaya Pendaftaran
              </p>
              <p className="font-bold text-[17.65px] sm:text-[32px]">{price}</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex-col text-center">
              <p className="text-[13.241px] sm:text-[24px]">Profit Sharing</p>
              <p className="font-bold text-[17.65px] sm:text-[32px]">
                {profit}%
              </p>
            </div>
          </div>

          <div className="flex-col">
            <p className="font-bold text-[12px] ml-2 sm:ml-0 sm:text-sm">Fasilitas:</p>
            {children}
          </div>

          <Link
            href={href}
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

export default CardMitraPacket;
