import Image from "next/image";
import latar from "/public/assets/latar.png";

export default function Background({ children }: any) {
  return (
    <div>
      <Image
        alt="Mountains"
        src={latar}
        placeholder="empty"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      {children}
    </div>
  );
}
