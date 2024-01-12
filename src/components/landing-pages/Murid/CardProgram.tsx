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
    <div className=" relative flex items-end justify-center w-[200px] h-[200.60px]  sm:h-[400px]  sm:w-[320px]">
      <div className="bg-[#FFF0CE] pt-2 px-2 w-[152px] h-[175.60px]  flex flex-col  items-center rounded-[10.33px] sm:rounded-xl sm:space-y-4 sm:h-[340px]  sm:w-[300px] ">
        <p className="text-[#000] w-[97.61px]  font-semibold text-[13px] ml-6 sm:ml-20 sm:text-2xl sm:w-[189px]">
          {headline}
        </p>
        <p className="text-[#000]  text-[9px] w-[137px] h-[115.17px] sm:text-lg sm:w-[265px]">
          {description}
        </p>
      </div>

      <div className="rounded-full  bg-[#FFB907] shadow-[5px_5px_4px_0px] shadow-[#00000040] flex justify-center items-center absolute top-0 left-0 w-[51.65px] h-[51.65px] sm:w-[100px] sm:h-[100px]">
        <p className="text-[#FFF] font-extrabold text-[24.79px] sm:text-5xl">
          {title}
        </p>
      </div>
    </div>
  );
};

export default CardProgram;
