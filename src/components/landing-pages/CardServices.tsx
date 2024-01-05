import Education from "./Icons/Education";
interface CardServicesProps {
  title?: string;
  description?: string;
}

const CardServices: React.FC<CardServicesProps> = ({ title, description }) => {
  return (
    <div className="bg-[#FFF] rounded-t-[28px] rounded-b-[8px] hover:shadow-[0px_2.796px_27.956px_0px] hover:shadow-[#0065FF] cursor-pointer flex flex-col space-y-6 items-center sm:py-8 sm:px-2">
      <div className="flex justify-center items-center space-x-6">
        <div className="bg-[#FFB700] p-3.5 flex justify-center items-center rounded-xl ">
          <Education />
        </div>
        <p className="font-bold sm:text-4xl">{title}</p>
      </div>
      <p className="text-[#020202] text-center sm:w-[322px] sm:text-base">
        {description}
      </p>
    </div>
  );
};

export default CardServices;
