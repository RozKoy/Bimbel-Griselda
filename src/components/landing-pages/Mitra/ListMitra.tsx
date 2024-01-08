import CardMitra from "./CardMitra";

export default function ListMitra() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center sm:py-10 sm:space-y-14">
      <div className="flex flex-col sm:space-y-2 sm:max-w-[601px]">
        <p className="text-center font-bold sm:text-[48px]">Daftar Kemitraan</p>
        <p className="text-center text-[#7C7C7C] sm:text-lg">
          This clean and ever contemporary waterproof rucksack features an
          internal laptop pocket, on the back panel.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <CardMitra
          title="Gurulesku"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <CardMitra
          title="Gurulesku"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <CardMitra
          title="Gurulesku"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <CardMitra
          title="Gurulesku"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <CardMitra
          title="Gurulesku"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <CardMitra
          title="Gurulesku"
          description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
       
      </div>
    </div>
  );
}
