import ShapeBackgroundIcon from "../Icons/ShapeBackgroundIcon";
export default function GoalsAndBenefits() {
  return (
    <div className="latarMitra w-full h-auto  sm:min-h-screen">
      <div className="gradasi3 w-full h-full pb-[10%] sm:h-screen sm:pb-0 sm:flex sm:items-center sm:space-x-2">
        <div className="relative  sm:h-3/4">
          <ShapeBackgroundIcon className="w-[357px] h-[319px] sm:w-[574px] sm:h-[470px]" />
          <div className="absolute top-[10%] left-[4%] sm:top-[20%] sm:left-[10%] ">
            <div className="flex flex-col  sm:space-y-3">
              <p className="font-extrabold text-[40px] max-w-[302px] sm:text-5xl sm:max-w-[313px]">
                Tujuan dan Keuntungan
              </p>
              <p className="text-[] max-w-[357px]   sm:text-lg sm:max-w-[370px]">
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2 space-x-0 sm:space-y-0 sm:space-x-2 sm:flex-row">
          <div className=" bg-gradient-to-b from-blue-600 to-blue-400 shadow-md flex flex-col  items-center w-[269px] h-[361px] py-4 space-y-4 rounded-[20px] sm:justify-between sm:rounded-2xl sm:pt-[10px] sm:pb-[129px]  sm:w-[330px] sm:h-[430px]">
            <p className="font-extrabold text-center text-[24px] sm:text-3xl">
              Tujuan
            </p>
            <p className="text-center text-[14px] w-[242px] sm:text-[18px] sm:w-[315px] ">
              Tujuan dari program kemitraan kami adalah untuk meningkatkan
              kualitas pendidikan dengan melibatkan kerjasama antara lembaga
              bimbingan belajar, sekolah, dan orang tua. Hal ini bertujuan untuk
              memberikan dukungan tambahan kepada siswa, meningkatkan pemahaman
              mereka terhadap materi pelajaran, serta menciptakan lingkungan
              belajar yang lebih efektif dan inklusif.
            </p>
          </div>

          <div className=" bg-gradient-to-b from-white to-white-40  shadow-md flex flex-col  items-center w-[300px] h-[320px] rounded-[20px] space-y-4 py-4 px-4 sm:rounded-lg sm:space-y-1 sm:pt-2 sm:pb-[98px]  sm:w-[250px] sm:h-[400px]">
            <p className="font-extrabold text-[20px] sm:text-3xl">Keuntungan</p>
            <ol className="list-decimal text-[left] text-[12px] max-w-[280px] sm:max-w-[200px] sm:text-[13px]  ">
              <li>
                Dukungan Pemasaran: Mendapatkan dukungan pemasaran dan promosi
                dari pusat, termasuk kampanye iklan dan materi pemasaran.
              </li>
              <li>
                Bimbingan Manajemen: Mendapatkan bimbingan manajemen dan
                konsultasi untuk meningkatkan kinerja bisnis.
              </li>
              <li>
                Sistem Pembelajaran yang Teruji: Menggunakan sistem pembelajaran
                yang sudah teruji dan terstruktur.
              </li>
              <li>
                Skala Ekonomi: Memanfaatkan skala ekonomi yang dapat diperoleh
                melalui model bisnis waralaba.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
