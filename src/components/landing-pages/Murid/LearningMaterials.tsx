import CardLearningMaterials from "./CardLearningMaterials";
export default function LearningMaterials() {
  return (
    <div className="bg-[#F6F6F6]  w-full min-h-screen flex flex-col items-center sm:px-10 sm:py-12 sm:space-y-10 ">
      <div className="flex flex-col space-y-4 sm:w-[601px]">
        <p className="font-extrabold text-center text-[#000] sm:text-5xl">
          Materi Pembelajaran
        </p>
        <p className="text-center text-[#7C7C7C] sm:text-lg">
          This clean and ever contemporary waterproof rucksack features an
          internal laptop pocket, on the back panel.
        </p>
      </div>

      <div className="bg-[#FFF] flex shadow-[5px_5px_4px_0px] shadow-[#00000040] justify-center items-center rounded-full sm:space-x-8 w-auto sm:h-[50px]">
        <button className="text-center text-black font-medium  hover:text-[#FFF]  transition hover:bg-blue-700 h-full rounded-full sm:text-2xl px-8">
          SD
        </button>

        <button className="text-center text-black font-medium hover:text-[#FFF]   transition hover:bg-blue-700 h-full rounded-full sm:text-2xl px-8">
          SMP
        </button>
        <button className="text-center text-black font-medium hover:text-[#FFF]   transition hover:bg-blue-700 h-full rounded-full sm:text-2xl px-8">
          SMA
        </button>
        <button className="text-center text-black font-medium hover:text-[#FFF]   transition hover:bg-blue-700 h-full rounded-full sm:text-2xl px-8">
          KULIAH
        </button>
        <button className="text-center text-black font-medium hover:text-[#FFF]   transition hover:bg-blue-700 h-full rounded-full sm:text-2xl px-8">
          UMUM
        </button>

        <button className="text-center text-black font-medium hover:text-[#FFF]   transition hover:bg-blue-700 h-full rounded-full sm:text-2xl px-8">
          LAINNYA
        </button>
      </div>
      <div className="flex sm:space-x-16">
        <CardLearningMaterials
          title="Matematika"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        />
        <CardLearningMaterials
          title="Matematika"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        />
        <CardLearningMaterials
          title="Matematika"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        />
      </div>
    </div>
  );
}
