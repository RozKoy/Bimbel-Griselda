import Image from "next/image";

interface ContentProps {
  src?: any;
}

const Content: React.FC<ContentProps> = ({ src }) => {
  return (
    <div className="overflow-hidden cursor-pointer shadow-md">
      <Image
        src={src}
        width={300}
        height={100}
        alt="content"
        className="object-cover hover:scale-150 transition-all"
      />
    </div>
  );
};

export default Content;
