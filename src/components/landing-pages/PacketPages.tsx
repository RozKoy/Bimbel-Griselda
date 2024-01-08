import CardPacket from "./CardPacket";
export default function PacketPages() {
  return (
    <div className="latarPaket w-full h-screen">
      <div className="gradasi2 w-full h-full flex flex-col sm:space-y-6 sm:px-16 sm:pt-[5%] ">
        <div className="sm:w-[424px]">
          <p className="font-extrabold sm:text-5xl">Pilih Paket Kamu</p>
          <p className="text-[#7C7C7C] sm:text-lg">
            This clean and ever contemporary waterproof rucksack features an
            internal laptop pocket, on the back panel.
          </p>
        </div>

        <div className="flex justify-center items-center space-x-8">
          <CardPacket title="PAKET 1" price="Rp. x.xxx.xxx" />
          <CardPacket title="PAKET 2" price="Rp. x.xxx.xxx" />
          <CardPacket title="PAKET 3" price="Rp. x.xxx.xxx" />
        </div>
      </div>
    </div>
  );
}
