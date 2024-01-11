import { Modal, ModalBody, ModalHeader } from "flowbite-react";
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
}

const CardLearningMaterials: React.FC<CardLearningMaterialsProps> = ({
  title,
  description,
}) => {
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  return (
    <div className="bg-[#FFC436] rounded-lg flex flex-col items-center px-3 space-y-1 sm:w-[300px] sm:h-[350px]  sm:pt-3 sm:pb-2 sm:m-4">
      <div className="flex justify-center items-center sm:space-x-5">
        <BooksIcon />
        <p className="text-[#FFF] font-medium sm:text-2xl">{title}</p>
      </div>
      <div className="bg-[#FFF] rounded-xl sm:px-[15px] sm:py-[19px]">
        <p className="font-thin max-w-[250px] sm:text-base ">{description}</p>
      </div>
      <button
        className="rounded-full bg-[#fff] sm:px-[20px] sm:py-[4px] sm:text-lg"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Lihat Selengkapnya
      </button>

      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        size="6xl"
        className="font-sans"
        popup
      >
        <ModalBody>
          <div className="flex ">
            <div className=" h-full w-1/2 overflow-x-auto max-h-[550px]">
              <Image src={preview} width={450} height={400} alt="preview" />
              <Image src={preview} width={450} height={400} alt="preview" />
            </div>
            <div className=" h-full w-1/2 flex flex-col sm:space-y-6 pl-2">
              <div className="flex justify-end">
                <CloseIcon onClick={() => setOpenModal(false)} />
              </div>
              <div className="flex flex-col">
                <p className="font-extrabold leading-[30px] sm:text-[32px] ">
                  {title}
                </p>
                <p className="font-normal leading-[30px] sm:text-2xl ">
                  Jenjang SD
                </p>
                <p className="font-thin mt-3 sm:text-base ">{description}</p>
              </div>

              <Link
                href=""
                className="bg-[#06AC58] flex justify-center items-center rounded-2xl sm:space-x-5 sm:w-[280px] sm:h-[50px] "
              >
                <p className="text-white text-center font-thin sm:text-[24px]">
                  Chat Sekarang
                </p>
                <WA fill="#FFF" className="w-[32px] h-[32.365px]" />
              </Link>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CardLearningMaterials;
