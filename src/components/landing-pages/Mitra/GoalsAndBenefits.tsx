import ShapeBackgroundIcon from "../Icons/ShapeBackgroundIcon";
export default function GoalsAndBenefits() {
  return (
    <div className="latarMitra w-full h-screen">
      <div className="gradasi3 w-full h-full flex items-center sm:space-x-5">
        <div className="relative  h-3/4">
          <ShapeBackgroundIcon />
          <div className="absolute top-[20%] left-[10%] ">
            <div className="flex flex-col sm:space-y-3">
              <p className="font-extrabold sm:text-5xl sm:max-w-[313px]">
                Tujuan dan Keuntungan
              </p>
              <p className="sm:text-lg sm:max-w-[370px]">
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-b from-blue-600 to-blue-400 shadow-md flex flex-col justify-between items-center sm:pt-[27px] sm:pb-[129px]  sm:w-[350px] sm:h-[450px]">
          <p className="font-extrabold text-center sm:text-3xl">Tujuan</p>
          <p className="text-center sm:text-[18px] sm:w-[315px] ">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries.
          </p>
        </div>

        <div className="rounded-lg bg-gradient-to-b from-white to-white-40  shadow-md flex flex-col justify-between items-center sm:pt-[20px] sm:pb-[98px]  sm:w-[300px] sm:h-[400px]">
          <p className="font-extrabold text-center sm:text-3xl">Keuntungan</p>
          <p className="text-center sm:text-[16px] sm:w-[280px] ">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries.
          </p>
        </div>
      </div>
    </div>
  );
}
