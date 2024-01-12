import Link from "next/link";
import WA from "../Icons/contact/Wa";

interface WALinkProps {
  title?: string;
}

const WALink: React.FC<WALinkProps> = ({ title }) => {
  return (
    <Link
      href=""
      className="flex  hover:shadow-[0px_2px_30px_0px] rounded-[6.35px]  hover:shadow-[#0B7077] space-x-[3px] w-[81px] h-[28.60px] sm:rounded-xl sm:w-[250px] sm:h-[90px]"
    >
      <div className="bg-[#FFFFFF] rounded-l-[6.35px] w-[75%] flex justify-center items-center sm:rounded-l-xl">
        <p className="text-[#000] font-extrabold sm:text-5xl">{title}</p>
      </div>
      <div className="bg-[#0B7077] rounded-r-[6.35px] w-[25%] flex justify-center items-center sm:rounded-r-xl ">
        <WA
          fill="#FFFFFF"
          className="w-[17px] h-[17px] sm:w-[50px] sm:h-[50px]"
        />
      </div>
    </Link>
  );
};

export default WALink;
