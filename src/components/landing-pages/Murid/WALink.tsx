import Link from "next/link";
import WA from "../Icons/contact/Wa";

interface WALinkProps {
  title?: string;
}

const WALink: React.FC<WALinkProps> = ({ title }) => {
  return (
    <Link
      href=""
      className="flex rounded-xl hover:shadow-[0px_2px_30px_0px]  hover:shadow-[#0B7077] space-x-[3px] sm:w-[281px] sm:h-[90px]"
    >
      <div className="bg-[#FFFFFF] rounded-l-xl w-[75%] flex justify-center items-center">
        <p className="text-[#000] font-extrabold sm:text-5xl">{title}</p>
      </div>
      <div className="bg-[#0B7077] rounded-r-xl w-[25%] flex justify-center items-center ">
        <WA fill="#FFFFFF" width="33" height="31" />
      </div>
    </Link>
  );
};

export default WALink;
