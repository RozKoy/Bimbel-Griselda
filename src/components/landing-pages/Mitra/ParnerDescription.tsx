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
            Kemitraan adalah hubungan kerjasama antara dua pihak atau lebih yang
            sepakat untuk saling bekerja sama demi mencapai tujuan bersama. Pada
            Bimbel Griselda kemitraan merupakan kerjasama dalam berbagai hal
            untuk memudahkan generasi bangsa agar bisa mencapai tujuan mereka
            kedepannya.
          </p>
        </div>
      </div>
    </div>
  );
}
