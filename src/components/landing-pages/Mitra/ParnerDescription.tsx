import Navbar from "../Navbar";
import Image from "next/image";
import mitra from "/public/assets/mitra.png";

export default function PatnerDescription() {
  return (
    <div className="bg-[#FAFBFD] w-full h-screen sm:px-10">
      <Navbar />
      <div className="sm:ml-6 sm:mt-10 sm:flex sm:space-x-20 sm:justify-center sm:items-center">
        <Image src={mitra} width={403} height={480} alt="model" />
        <div className="flex flex-col w-[612px] sm:space-y-2 ">
          <p className="font-[800] fmr-16 text-[#FFB700] sm:text-[80px]">
            Mitra
          </p>
          <p className="text-[#0000008c] sm:text-[26.909px] w-full">
            Aspiring teachers can take advantage of mentorship and personal
            mentorship programs to get direct guidance from experienced
            educators. This creates an opportunity for personal questions and
            in-depth discussion.
          </p>
        </div>
      </div>
    </div>
  );
}
