import CardModule from "./CardModule";

const ModuleLearning = () => {
  return (
    <div className="bg-[#F6F6F6] w-full min-h-screen flex flex-col s justify-center items-center pt-6 pb-10 sm:space-y-8">
      <div className="flex flex-col space-y-3 sm:w-[661px]">
        <p className="text-center text-[#020202] font-extrabold sm:text-[48px]">
          Bahan Ajar
        </p>
        <p className="text-center text-[#7C7C7C] sm:text-lg">
          This clean and ever contemporary waterproof rucksack features an
          internal laptop pocket, on the back panel.
        </p>
      </div>

      <div className=" grid grid-cols-3 gap-20">
        <CardModule
          title="Modul Pembelajaran"
          description="Increasingly-popular option for online shopping, where customers do not have to pay an additional shipping charge"
        />
        <CardModule
          title="Modul Pembelajaran"
          description="Increasingly-popular option for online shopping, where customers do not have to pay an additional shipping charge"
        />
        <CardModule
          title="Modul Pembelajaran"
          description="Increasingly-popular option for online shopping, where customers do not have to pay an additional shipping charge"
        />
        <CardModule
          title="Modul Pembelajaran"
          description="Increasingly-popular option for online shopping, where customers do not have to pay an additional shipping charge"
        />
        <CardModule
          title="Modul Pembelajaran"
          description="Increasingly-popular option for online shopping, where customers do not have to pay an additional shipping charge"
        />
        <CardModule
          title="Modul Pembelajaran"
          description="Increasingly-popular option for online shopping, where customers do not have to pay an additional shipping charge"
        />
      </div>
    </div>
  );
};

export default ModuleLearning;
