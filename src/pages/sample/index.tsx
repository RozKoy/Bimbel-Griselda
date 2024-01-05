import Image from "next/image";
import mountains from "/public/assets/latar.png";

export default function Background() {
  return (
    <Image
      alt="Mountains"
      src={mountains}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
      }}
    />
  );
}
