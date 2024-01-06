import content from "/public/assets/latar.png";
import Content from "./Content";
const Gallery = () => {
  return (
    <div className="bg-[#FAFBFD] w-full h-screen sm:pt-14 sm:pb-5 sm:px-14">
      <div className=" w-auto h-full flex flex-col items-center sm:space-y-20">
        {" "}
        <div className="flex flex-col space-y-3">
          <p className=" text-center font-extrabold sm:text-5xl">Gallery</p>
          <p className="text-center text-[#2E2828] font-medium sm:text-lg sm:w-[535px]">
            Most of them buy positive feedback for us which is none other than
            the best service we provide
          </p>
        </div>
        <div className=" grid grid-cols-4 gap-2">
          <Content src={content} />
          <Content src={content} />
          <Content src={content} />
          <Content src={content} />
          <Content src={content} />
          <Content src={content} />
          <Content src={content} />
          <Content src={content} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
