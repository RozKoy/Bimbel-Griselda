import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import * as React from "react";
import CloseIcon from "../Icons/CloseIcon";
import BooksIcon from "../Icons/BooksIcon";
import WA from "../Icons/contact/Wa";
import Image from "next/image";
import preview from "/public/assets/preview.png";

import Link from "next/link";

interface CardLearningMaterialsProps {
  title?: string;
  description?: string;
  image?: string;
  category?: string;
  whatsapp?: string;
}

const CardLearningMaterials: React.FC<CardLearningMaterialsProps> = ({
  title,
  description,
  image,
  category,
  whatsapp,
}) => {
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const customTheme: CustomFlowbiteTheme["modal"] = {
    header: {
      close: {
        base: "ml-auto inline-flex items-center rounded-lg bg-transparent pr-2 text-sm text-gray-900  ",
        icon: "h-9 w-9",
      },
    },
  };
  return (
    <div className="bg-[#FFC436]  flex flex-col items-start px-[5px]  mx-5 space-y-1 w-[130px] h-[136px] rounded-[7.771px] pt-2 pb-0 sm:items-center sm:rounded-lg sm:w-[300px] sm:h-[350px]  sm:pt-3 sm:pb-2 sm:m-4">
      <div className="flex justify-center items-center space-x-2 sm:space-x-5">
        <BooksIcon className="w-[19.49px] h-[19.49px] sm:w-[50px] sm:h-[50px]" />
        <p className="text-[#FFF] font-medium text-[9.326px] sm:text-2xl">
          {title}
        </p>
      </div>
      <div className="bg-[#FFF] rounded-[7.771px] px-1 py-2 min-w-full h-[65%] sm:h-[72%] sm:px-[15px] sm:py-[19px]">
        <p className="font-thin text-[6.26px] overflow-x-auto max-w-[114px]  max-h-[100%] sm:max-w-[250px] sm:text-base ">
          {description}
        </p>
      </div>
      <div className="flex">
        <button
          className="rounded-full bg-[#fff] text-[7px] px-[10px] py-[1px] sm:px-[20px] sm:py-[4px] sm:text-lg"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Lihat Selengkapnya
        </button>
        <Link
          href={whatsapp as string}
          className="rounded-full bg-[#fff] px-[10px] py-[2px] sm:px-[18px] sm:py-[4px] "
        >
          <WA
            className="w-[9px] h-[9px] sm:w-[23px] sm:h-[23px] "
            fill="#06AC58"
          />
        </Link>
      </div>

      <Modal
        theme={customTheme}
        show={openModal}
        onClose={() => setOpenModal(false)}
        size="6xl"
        className="font-sans"
        popup
      >
        <Modal.Header />
        <ModalBody>
          <div className=" sm:flex   ">
            <div className=" h-full  overflow-x-auto w-full max-h-[450px] sm:w-1/2 sm:pl-0">
              <Image
                src={
                  ("/api-backend/lesson/getFile?name=" +
                    image) as string
                }
                width={450}
                height={400}
                alt="preview"
              />
              {/* <Image src={preview} width={450} height={400} alt="preview" /> */}
            </div>
            <div className=" h-full  flex flex-col space-y-1 sm:w-1/2 sm:pl-2 sm:space-y-4 ">
              <div className="flex flex-col">
                <p className="font-extrabold leading-[30px] text-[23.76px] sm:text-[32px] ">
                  {title}
                </p>
                <p className="font-normal leading-[30px] text-[17.82px] sm:text-2xl ">
                  Jenjang {category?.toUpperCase()}
                </p>
                <p className="font-thin text-[11.88px] w-[295.526px] sm:w-[90%] sm:mt-1 sm:text-base ">
                  {description}
                </p>
              </div>

              <Link
                href={whatsapp as string}
                className="bg-[#06AC58] flex justify-center items-center w-[100.65px] h-[30.126px] rounded-[5.425px] space-x-2 sm:rounded-md sm:space-x-5 sm:w-[170px] sm:h-[40px]  "
              >
                <p className="text-white text-center font-thin text-[10px] sm:text-[18px]">
                  Chat Sekarang
                </p>
                <WA
                  fill="#FFF"
                  className="w-[14.276px] h-[14.76px] sm:w-[20px] sm:h-[20.365px]"
                />
              </Link>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CardLearningMaterials;
