import CardPacket from "./CardPacket";
import CardPacketTK from "./CardPacketTK";
import * as React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  className: " h-auto w-[90%]   ",
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

export default function PacketPages() {
  // array variabel kelas
  const kelas: string[] = ["TK", "SD", "SMP", "SMA"];

  //useState variable to handle button color
  const [activeButton, setActiveButton] = React.useState<string>("TK");

  const kelasTK = [
    { id: 1, title: "Calistung", status: "online", price: "Rp.50.000" },
    { id: 2, title: "International", status: "online", price: "Rp.60.000" },
    { id: 3, title: "Calistung", status: "offline", price: "Rp.60.000" },
    { id: 4, title: "International", status: "offline", price: "Rp.60.000" },
  ];

  const kelasSD = [
    {
      id: 1,
      title: "Kurikulum Nasional",
      pricelist1: "Rp.70.000",
      pricelist2: "Rp.75.000",
      pricelist3: "Rp.80.000",
      pricelist4: "Rp.85.000",
    },
    {
      id: 2,
      title: "Kurikulum International",
      pricelist1: "Rp.80.000",
      pricelist2: "Rp.85.000",
      pricelist3: "Rp.90.000",
      pricelist4: "Rp.95.000",
    },
    {
      id: 3,
      title: "Olimpiade",
      pricelist1: "Rp.85.000",
      pricelist2: "Rp.90.000",
      pricelist3: "Rp.95.000",
      pricelist4: "Rp.100.000",
    },
    {
      id: 4,
      title: "Intensif English Class",
      pricelist1: "Rp.80.000",
      pricelist2: "Rp.85.000",
      pricelist3: "Rp.90.000",
      pricelist4: "Rp.95.000",
    },
  ];

  const kelasSMP = [
    {
      id: 1,
      title: "Kurikulum Nasional",
      pricelist1: "Rp.80.000",
      pricelist2: "Rp.85.000",
      pricelist3: "Rp.90.000",
      pricelist4: "Rp.95.000",
    },
    {
      id: 2,
      title: "Kurikulum International",
      pricelist1: "Rp.90.000",
      pricelist2: "Rp.95.000",
      pricelist3: "Rp.95.000",
      pricelist4: "Rp.98.000",
    },
    {
      id: 3,
      title: "Olimpiade",
      pricelist1: "Rp.90.000",
      pricelist2: "Rp.95.000",
      pricelist3: "Rp.95.000",
      pricelist4: "Rp.100.000",
    },
    {
      id: 4,
      title: "Intensif English Class",
      pricelist1: "Rp.90.000",
      pricelist2: "Rp.95.000",
      pricelist3: "Rp.95.000",
      pricelist4: "Rp.98.000",
    },
  ];

  const kelasSMA = [
    {
      id: 1,
      title: "Kurikulum Nasional",
      pricelist1: "Rp.90.000",
      pricelist2: "Rp.95.000",
      pricelist3: "Rp.95.000",
      pricelist4: "Rp.100.000",
    },
    {
      id: 2,
      title: "Kurikulum International",
      pricelist1: "Rp.95.000",
      pricelist2: "Rp.100.000",
      pricelist3: "Rp.100.000",
      pricelist4: "Rp.110.000",
    },
    {
      id: 3,
      title: "Olimpiade",
      pricelist1: "Rp.100.000",
      pricelist2: "Rp.110.000",
      pricelist3: "Rp.110.000",
      pricelist4: "Rp.120.000",
    },
    {
      id: 4,
      title: "Intensif English Class",
      pricelist1: "Rp.95.000",
      pricelist2: "Rp.100.000",
      pricelist3: "Rp.100.000",
      pricelist4: "Rp.110.000",
    },
  ];

  return (
    <div className="bg-[url('../../public/assets/latarPaket.png')]  w-full h-auto sm:min-h-screen">
      <div className="gradasi2 w-full h-full sm:min-h-screen sm:px-8 sm:pb-10 ">
        <div className="sm:pt-4 sm:pb-6 ">
          <div className="w-[334pxpx] sm:w-[424px]">
            <p className="font-extrabold text-center text-[26px] sm:text-5xl sm:text-left">
              Pilih Paket Kamu
            </p>
            <p className="text-[#7C7C7C] text-center text-[12px] sm:text-left sm:text-lg">
              This clean and ever contemporary waterproof rucksack features an
              internal laptop pocket, on the back panel.
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center sm:space-y-8">
          <div className="bg-[#FFF] flex shadow-[5px_5px_4px_0px] shadow-[#00000040] justify-center items-center rounded-full w-auto h-[27px] space-x-1 sm:space-x-8 sm:h-[50px]">
            {kelas.map((label, index) => (
              <button
                key={index}
                onClick={() => setActiveButton(label)}
                className={`text-center font-medium transition h-full rounded-full px-3 text-[13px] sm:text-2xl sm:px-8 ${
                  activeButton === label
                    ? "bg-blue-700 text-[#FFF]"
                    : "bg-[#FFF] text-black"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {activeButton === kelas[0] ? (
            <Slider {...settings}>
              {kelasTK.map((tk) => (
                <CardPacketTK
                  key={tk.id}
                  title={tk.title}
                  price={tk.price}
                  status={tk.status}
                />
              ))}
            </Slider>
          ) : activeButton === kelas[1] ? (
            <Slider {...settings}>
              {kelasSD.map((sd) => (
                <CardPacket
                  key={sd.id}
                  title={sd.title}
                  pricelist1={sd.pricelist1}
                  pricelist2={sd.pricelist2}
                  pricelist3={sd.pricelist3}
                  pricelist4={sd.pricelist4}
                />
              ))}
            </Slider>
          ) : activeButton === kelas[2] ? (
            <Slider {...settings}>
              {kelasSMP.map((smp) => (
                <CardPacket
                  key={smp.id}
                  title={smp.title}
                  pricelist1={smp.pricelist1}
                  pricelist2={smp.pricelist2}
                  pricelist3={smp.pricelist3}
                  pricelist4={smp.pricelist4}
                />
              ))}
            </Slider>
          ) : activeButton === kelas[3] ? (
            <Slider {...settings}>
              {kelasSMA.map((sma) => (
                <CardPacket
                  key={sma.id}
                  title={sma.title}
                  pricelist1={sma.pricelist1}
                  pricelist2={sma.pricelist2}
                  pricelist3={sma.pricelist3}
                  pricelist4={sma.pricelist4}
                />
              ))}
            </Slider>
          ) : (
            <p>Coming Soon</p>
          )}
        </div>
      </div>
    </div>
  );
}
