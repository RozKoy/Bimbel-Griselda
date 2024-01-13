import Navbar from "../Navbar";
import Image from "next/image";
import model from "/public/assets/model.png";

export default function StudentDescription() {
  return (
    <div className="bg-[#FAFBFD] w-full h-auto sm:min-h-screen sm:px-10 ">
      <Navbar />
      <div className=" space-y-0  justify-center mt-6 pb-[40%] sm:pb-0  sm:flex sm:ml-6 sm:mt-4  sm:flex-row-reverse sm:space-x-20  sm:items-center ">
        <div className="flex justify-center">
          <Image
            src={model}
            width={403}
            height={480}
            alt="model"
            className="  w-[232px] h-[276px]  sm:w-[403px] sm:h-[480px]"
          />
        </div>
        <div className="flex flex-col w-[97%] ml-4  sm:ml-0 sm:w-[612px] sm:space-y-2 ">
          <p className="font-[800] text-[#FFB700] text-[60px] sm:flex sm:justify-end sm:mr-16 sm:text-[80px]">
            Murid
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
