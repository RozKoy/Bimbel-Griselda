import Image from "next/image";
import logo from "/public/assets/maskot.png";
import ring from "/public/assets/ring.png";
import { motion } from "framer-motion";
import ShadowMaskot from "./ShadowMaskot";

export default function Sample2() {
  return (
    <div className="bg-gradient-to-br from-white via-white to-gray-300 flex justify-center items-center w-full h-screen ">
      <div className=" py-10 flex flex-col space-y-4">
        <div className="flex justify-center items-center ">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: -200 }}
            exit={{ x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className="flex flex-col">
              <Image src={logo} width={270} height={253} alt="logo" />
              <ShadowMaskot />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -300, y: 50, width: 0, opacity: 0, fontSize: "0px" }}
            animate={{ x: -100, y: 0, opacity: 1, fontSize: "88px" }}
            exit={{ x: 0, y: 0 }}
            transition={{ duration: 3, ease: "backInOut" }}
          >
            <div>
              <p className="font-bold text-[#FFC436] custom-text-shadow sm:w-[426px]">
                Bimbel Griselda
              </p>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center">
          <Image
            src={ring}
            width={100}
            height={100}
            alt="ring"
            className="animate-spin "
          />
        </div>
      </div>
    </div>
  );
}
