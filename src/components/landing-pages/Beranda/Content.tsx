import Image from "next/image";

interface ContentProps {
  src?: any;
}

const Content: React.FC<ContentProps> = ({ src }) => {
  return (
    <div className="overflow-hidden flex justify-center items-center  cursor-pointer shadow-md w-[280px] h-[212px] m-2">
      <Image
        src={src}
        width={300}
        height={100}
        alt="content"
        className="object-cover hover:scale-150 transition-all  w-[280px] h-[212px]"
      />
    </div>
  );
};

export default Content;
