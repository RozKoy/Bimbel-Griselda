import WALink from "./WALink";
export default function ClassLevel() {
  return (
    <div className="jenjang w-full h-screen">
      <div className="w-full h-full gradasi1 flex flex-col justify-center items-center sm:space-y-28">
        <div className="flex flex-col space-y-4 sm:w-[601px]">
          <p className="font-extrabold text-center text-[#000] sm:text-5xl">
            Jenjang Kelas
          </p>
          <p className="text-center text-[#7C7C7C] sm:text-lg">
            This clean and ever contemporary waterproof rucksack features an
            internal laptop pocket, on the back panel.
          </p>
        </div>

        <div className="flex flex-col items-center sm:space-y-14 ">
          <div className="sm:flex sm:space-x-12">
            <WALink title="TK" />
            <WALink title="SD" />
            <WALink title="SMP" />
            <WALink title="SMA" />
          </div>
          <div className="sm:flex sm:space-x-12">
            <WALink title="KULIAH" />
            <WALink title="UMUM" />
            <WALink title="DLL" />
          </div>
        </div>
      </div>
    </div>
  );
}
