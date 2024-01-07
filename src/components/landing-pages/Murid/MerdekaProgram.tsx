import CardProgram from "./CardProgram";
export default function MerdekaProgram() {
  return (
    <div className="bg-red-200 w-full min-h-screen flex justify-center items-center">
      <div className="flex bg-blue-200 sm:space-x-20 ">
        <div className="flex flex-col space-y-8">
          <p className="text-[#000] font-extrabold sm:text-5xl sm:w-[235px]">
            Program Merdeka
          </p>
          <p className="text-[#000] d sm:text-lg sm:w-[370px]">
            Lorem Ipsum has been the industry&apos; standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries.
          </p>
        </div>
        <div className="flex space-x-4 ">
          <CardProgram
            title="M"
            headline="Mentorship Profesional"
            description="Dengan didukung oleh tim pengajar berkualifikasi tinggi, kami menawarkan mentorship profesional untuk membimbing siswa menuju keunggulan akademis."
          />
          <CardProgram
            title="E"
            headline="Mentorship Profesional"
            description="Dengan didukung oleh tim pengajar berkualifikasi tinggi, kami menawarkan mentorship profesional untuk membimbing siswa menuju keunggulan akademis."
          />
        </div>
      </div>
    </div>
  );
}
