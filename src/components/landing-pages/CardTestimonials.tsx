import Image from "next/image";
import user from "/public/assets/user.png";
import Comma from "./Icons/CommaIcon";

interface CardTestimonialsProps {
  nama?: string;
  job?: string;
  testimony?: string;
}

const CardTestimonials: React.FC<CardTestimonialsProps> = ({
  nama,
  job,
  testimony,
}) => {
  return (
    <div className="  relative flex items-end m-4 h-[240px]  sm:h-[350px]">
      <Image
        src={user}
        width="40"
        height="40"
        alt="user"
        className="rounded-full absolute top-0 left-[35%]   w-[92.345px] h-[92.345px] sm:left-[40%] sm:w-[123.517px] sm:h-[123.517px]"
      />

      <div className="w-full h-5/6  bg-[#FFF] rounded-br-[20.803px] rounded-tl-[20.803px] flex flex-col items-center py-14  sm:py-20 sm:space-y-4  ">
        <div>
          <p className="text-center font-medium text-[20px] sm:text-[26px]">
            {nama}
          </p>
          <p className="text-center font-medium text-[#7C7C7C] tex-[12px] sm:text-[17px]">
            {job}
          </p>
        </div>
        <div>
          <Comma className="w-[13.39px] h-[22.678px] sm:w-[17.991px] sm:h-[30.334px]" />
          <p className="text-center text-[#2C3546] font-light text-[12px] w-[256.627px] sm:w-[343px] sm:text-base">
            {testimony}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardTestimonials;
