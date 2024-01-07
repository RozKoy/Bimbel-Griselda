import Image from "next/image";
import book from "/public/assets/bookmark.png";

interface CardModuleProps {
  title?: string;
  description?: string;
}

const CardModule: React.FC<CardModuleProps> = ({ title, description }) => {
  return (
    <div className="bg-[#FFB700] rounded-3xl flex flex-col sm:px-6 sm:py-6">
      <p className="text-[#FFF] font-extrabold sm:w-[231px] sm:text-[32px]">{title}</p>
      <div className="bg-[#FFF] flex justify-center space-x-2 rounded-xl sm:px-3 sm:pt-5 sm:pb-10">
        <p className="text-[#0000008c] sm:text-[9.42px] sm:w-[116px]">
          {description}
        </p>
        <Image src={book} width={80} height={85} alt="book" />
      </div>
    </div>
  );
};

export default CardModule;
