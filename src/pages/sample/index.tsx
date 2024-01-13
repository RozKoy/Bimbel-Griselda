import Image from "next/image";
import logo from "/public/assets/maskot.png";
import ring from "/public/assets/ring.png";
import { motion } from "framer-motion";
import ShadowMaskot from "@/components/landing-pages/ShadowMaskot";

export default function Sample2() {
  return (
    <div className=" flex justify-center items-center w-full h-screen ">
      <div className="  flex flex-col space-y-10 sm:space-y-4 sm:py-10">
        <div className="flex justify-center items-center ">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: -90 }}
            exit={{ x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className="flex flex-col">
              <Image
                src={logo}
                width={270}
                height={253}
                alt="logo"
                className="w-[185px] h-[200px] sm:w-[253px] sm:h-[296px]"
              />
              <ShadowMaskot className="w-[192px] h-[35px] sm:w-[221px] sm:h-[49px]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -300, y: 50, width: 0, opacity: 0 }}
            animate={{ x: -100, y: 0, opacity: 1 }}
            exit={{ x: 0, y: 0 }}
            transition={{ duration: 3, ease: "backInOut" }}
          >
            <div>
              <p className="font-bold text-[#FFC436] custom-text-shadow text-[32px] w-[173px] sm:w-[426px] sm:text-[80px]">
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
            className="animate-spin w-[60px] h-[60px] mt-16 sm:mt-0 sm:w-[100px] sm:h-[100px]"
          />
        </div>
      </div>
    </div>
  );
}
