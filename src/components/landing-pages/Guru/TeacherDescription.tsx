import Navbar from "../Navbar";
import Image from "next/image";
import teacher from "/public/assets/image 5.png";

export default function TeacherDescription() {
  return (
    <div className="bg-[#FAFBFD] w-full h-auto pb-4 sm:h-screen sm:px-10 ">
      <Navbar />

      <div className=" px-4 mt-10  sm:ml-6 sm:mt-16 sm:flex sm:space-x-16">
        <div className="flex justify-center">
          <div className=" w-[229.533px] h-[229.533px ]  sm:w-[360px] sm:h-[360px] relative">
            <div className="bg-blue-700 w-[229.533px] h-[229.533px] rounded-3xl rotate-[-7.66deg] sm:w-[360px] sm:h-[360px]"></div>
            <Image
              src={teacher}
              width={360}
              height={360}
              alt="teacher"
              className="absolute top-0 w-[229.533px] h-[229.533px] sm:w-[360px] sm:h-[360px]"
            />
          </div>
        </div>

        <div className="flex flex-col w-full space-y-1 mt-6 sm:mt-0  sm:w-[612px] sm:space-y-2">
          <p className="font-[800] text-[#FFB700] text-[60px] sm:text-[80px]">GURU</p>
          <p className="text-[#0000008c] text-[15px] sm:text-[26.909px]">
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
