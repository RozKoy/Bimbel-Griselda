import Education from "./Icons/Education";
interface CardServicesProps {
  title?: string;
  description?: string;
}

const CardServices: React.FC<CardServicesProps> = ({ title, description }) => {
  return (
    <div className="bg-[#FFF] rounded-t-[28px] rounded-b-[8px] hover:shadow-[0px_2.796px_27.956px_0px] hover:shadow-[#0065FF] cursor-pointer flex flex-col  items-center py-[24.663px] px-[5.691-x] space-y-2 sm:space-y-6 sm:py-8 sm:px-2">
      <div className="flex justify-center items-center space-x-2  sm:space-x-6">
        <div className="bg-[#FFB700]  flex justify-center items-center rounded-xl p-[9.486px] sm:p-3.5 ">
          <Education />
        </div>
        <p className="font-bold text-[24.663px] sm:text-4xl">{title}</p>
      </div>
      <p className="text-[#020202] text-center text-[12px] w-[219.117px] sm:w-[322px] sm:text-base">
        {description}
      </p>
    </div>
  );
};

export default CardServices;
