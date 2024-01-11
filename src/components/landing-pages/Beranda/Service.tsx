import CardServices from "../CardServices";
const Services = () => {
  return (
    <div className="bg-[#F6F6F6] w-full min-h-screen flex flex-col justify-center items-center ">
      <div className="text-center    flex flex-col space-y-2 sm:space-y-6">
        <p className="text-[#020202] text-[26px] font-bold sm:text-5xl">
          Yang Kami Tawarkan
        </p>
        <p className="text-[#7C7C7C] font-medium text-[12px] w-[334px] sm:text-lg sm:w-[601px]">
          This clean and ever contemporary waterproof rucksack features an
          internal laptop pocket, on the back panel.
        </p>
      </div>
      <div className=" mt-4   space-y-4 sm:flex sm:space-x-8 sm:mt-20">
        <CardServices
          title="Guru"
          description="Increasingly-popular option for online shopping, where customers do not have to pay an additional shipping charge"
        />
        <CardServices
          title="Murid"
          description="Increasingly-popular option for online shopping, where customers do not have to pay an additional shipping charge"
        />
        <CardServices
          title="Mitra"
          description="Increasingly-popular option for online shopping, where customers do not have to pay an additional shipping charge"
        />
      </div>
    </div>
  );
};

export default Services;
