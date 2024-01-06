import CardTestimonials from "../CardTestimonials";
const Testimonials = () => {
  return (
    <div className="bg-[#FFB700] w-full h-screen sm:py-14 sm:px-14">
      <div className=" w-auto h-full flex flex-col items-center sm:space-y-28 ">
        <div className="flex flex-col space-y-2">
          <p className="text-[#FFF] text-center font-extrabold sm:text-5xl">
            Testimonials
          </p>
          <p className="text-center text-[#FFF] font-medium sm:text-lg sm:w-[535px]">
            Most of them buy positive feedback for us which is none other than
            the best service we provide
          </p>
        </div>
        <div className="flex sm:space-x-6">
          <CardTestimonials
            nama="Pandu"
            job="Programmers"
            testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu consectetur elementum id massa."
          />
          <CardTestimonials
            nama="Pandu"
            job="Programmers"
            testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec arcu consectetur elementum id massa."
          />
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
