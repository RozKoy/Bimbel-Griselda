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
    <div className=" h-[300px] relative flex items-end m-4">
      <Image
        src={user}
        width={70}
        height={40}
        alt="user"
        className="rounded-full absolute top-1 left-[40%] "
      />

      <div className="w-full h-5/6  bg-[#FFF] rounded-br-[20.803px] rounded-tl-[20.803px] flex flex-col items-center sm:py-10 sm:px-2 sm:space-y-4  ">
        <div>
          <p className="text-center font-medium sm:text-[26px]">{nama}</p>
          <p className="text-center font-medium text-[#7C7C7C] sm:text-[17px]">
            {job}
          </p>
        </div>
        <div>
          <Comma />
          <p className="text-center text-[#2C3546] font-light sm:w-[343px] sm:text-base">
            {testimony}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardTestimonials;
