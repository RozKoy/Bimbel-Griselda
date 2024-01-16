import CardPacket from "./CardPacket";
import CardPacketTK from "./CardPacketTK";
import * as React from "react";
import PrevIcon from "@/components/landing-pages/Icons/PrevIcon";
import NextIcon from "@/components/landing-pages/Icons/NextIcon";
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

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <PrevIcon stroke="#FFB700" />
    </div>
  );
}
export default function PacketPages() {
  // array variabel kelas
  const kelas: string[] = ["TK", "SD", "SMP", "SMA"];

  //useState variable to handle button color
  const [activeButton, setActiveButton] = React.useState<string>("");
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

          <Slider {...settings}>
            {/* <CardPacketTK title="Calistung" price="Rp. 80.000/1 jam" status="online/jam" />
            <CardPacketTK title="International" price="Rp. 80.000/1 jam" status="online/jam" />
            <CardPacketTK title="Calistung" price="Rp. 80.000/1 jam" status="ofline/jam" />
            <CardPacketTK title="International" price="Rp. 80.000/1 jam" status="ofline/jam" /> */}
            <CardPacket
              title="Nasional"
              status="online"
              pricelist1="Rp. 80.000/1 jam"
              pricelist2="Rp. 80.000/1 jam"
              pricelist3="Rp. 80.000/1 jam"
              pricelist4="Rp. 80.000/1 jam"
              status2="offline"
            />
            <CardPacket
              title="Nasional"
              status="online"
              pricelist1="Rp. 80.000/1 jam"
              pricelist2="Rp. 80.000/1 jam"
              pricelist3="Rp. 80.000/1 jam"
              pricelist4="Rp. 80.000/1 jam"
              status2="offline"
            />
            <CardPacket
              title="Nasional"
              status="online"
              pricelist1="Rp. 80.000/1 jam"
              pricelist2="Rp. 80.000/1 jam"
              pricelist3="Rp. 80.000/1 jam"
              pricelist4="Rp. 80.000/1 jam"
              status2="offline"
            />
            <CardPacket
              title="Nasional"
              status="online"
              pricelist1="Rp. 80.000/1 jam"
              pricelist2="Rp. 80.000/1 jam"
              pricelist3="Rp. 80.000/1 jam"
              pricelist4="Rp. 80.000/1 jam"
              status2="offline"
            />
          </Slider>
        </div>
      </div>
    </div>
  );
}
