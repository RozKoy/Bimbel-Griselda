import CardPacket from "./CardPacket";
export default function PacketPages() {
  return (
    <div className="latarPaket  w-full h-screen sm:min-h-screen">
      <div className="gradasi2 w-full h-full flex flex-col justify-center items-center space-y-4 sm:space-y-10 sm:items-start sm:min-h-screen sm:px-16  sm:pb-[2%] ">
        <div className="w-[334pxpx] sm:w-[424px]">
          <p className="font-extrabold text-center text-[26px] sm:text-5xl sm:text-left">
            Pilih Paket Kamu
          </p>
          <p className="text-[#7C7C7C] text-center text-[12px] sm:text-left sm:text-lg">
            This clean and ever contemporary waterproof rucksack features an
            internal laptop pocket, on the back panel.
          </p>
        </div>

        <div className=" flex flex-col space-y-4 items-center sm:flex-row sm:space-y-0 sm:ml-[5%] sm:space-x-8 ">
          <div className="flex space-x-4 sm:space-x-8">
            <CardPacket title="PAKET 1" price="Rp. x.xxx.xxx" />
            <CardPacket title="PAKET 2" price="Rp. x.xxx.xxx" />
          </div>

          <div >
            <CardPacket title="PAKET 3" price="Rp. x.xxx.xxx" />
          </div>
        </div>
      </div>
    </div>
  );
}
