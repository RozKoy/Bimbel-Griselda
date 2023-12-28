import Link from "next/link";
import tambah from "../../../../public/assets/addNew.png";
import Image from "next/image";

const AddNew = ({ href }: any) => {
  return (
    <Link href={href} className="flex items-center space-x-1 bg-[#FFC436] rounded px-2 py-1">
      <Image src={tambah} width={23} height={22} alt="tambah" />
      <p className=" text-white font-sm font-medium"> Tambah</p>
    </Link>
  );
};

export default AddNew;
