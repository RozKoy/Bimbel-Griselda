interface CardProgramProps {
  title?: string;
  headline?: string;
  description?: string;
}

const CardProgram: React.FC<CardProgramProps> = ({
  title,
  description,
  headline,
}) => {
  return (
    <div className="bg-green-300 relative flex items-end justify-center sm:h-[400px]  sm:w-[320px]">
      <div className="bg-[#FFF0CE] pt-2 px-2  rounded-xl flex flex-col space-y-4 items-center sm:h-[340px]  sm:[300px] ">
        <p className="text-[#000]   font-semibold sm:ml-16 sm:text-2xl sm:w-[189px]">
          {headline}
        </p>
        <p className="text-[#000]  sm:text-lg sm:w-[265px]">{description}</p>
      </div>

      <div className="rounded-full  bg-[#FFB907] flex justify-center items-center absolute top-0 left-0 sm:w-[100px] sm:h-[100px]">
        <p className="text-[#FFF] font-extrabold sm:text-5xl">{title}</p>
      </div>
    </div>
  );
};

export default CardProgram;
