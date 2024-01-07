import Navbar from "../Navbar";
import Image from "next/image";
import model from "/public/assets/model.png";

export default function StudentDescription() {
  return (
    <div className="bg-[#FAFBFD] w-full h-screen sm:px-10">
      <Navbar />
      <div className="sm:ml-6 sm:mt-10 sm:flex sm:space-x-20 sm:justify-center sm:items-center">
        <div className="flex flex-col w-[612px] sm:space-y-2 ">
          <p className="font-[800] flex justify-end mr-16 text-[#FFB700] sm:text-[80px]">
            Murid
          </p>
          <p className="text-[#0000008c] sm:text-[26.909px] w-full">
            Aspiring teachers can take advantage of mentorship and personal
            mentorship programs to get direct guidance from experienced
            educators. This creates an opportunity for personal questions and
            in-depth discussion.
          </p>
        </div>

        <Image src={model} width={403} height={480} alt="model" />
      </div>
    </div>
  );
}
