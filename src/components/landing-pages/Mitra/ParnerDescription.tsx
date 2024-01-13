import Navbar from "../Navbar";
import Image from "next/image";
import mitra from "/public/assets/mitra.png";

export default function PatnerDescription() {
  return (
    <div className="bg-[#FAFBFD] w-full pb-[10%] sm:pb-4 sm:min-h-screen sm:px-10">
      <Navbar />
      <div className="sm:ml-6 sm:mt-10 sm:flex sm:space-x-20 sm:justify-center sm:items-center">
        <div className="flex justify-center">
          <Image
            src={mitra}
            width={403}
            height={480}
            alt="model"
            className="w-[220px] h-[274.69px] sm:w-[399px] sm:h-[499px]"
          />
        </div>
        <div className="flex flex-col space-y-0 w-[345px] ml-4 sm:ml-0 sm:w-[612px] sm:space-y-2 ">
          <p className="font-[800]  text-[#FFB700] text-[80px] sm:text-[80px]">
            Mitra
          </p>
          <p className="text-[#0000008c] text-[15px] sm:text-[26.909px] w-full">
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
