import Image from "next/image";
import * as React from "react";
import logo from "/public/assets/logo.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" sm:pt-5">
      <div className="sm:flex sm:justify-between sm:items-center ">
        <Image src={logo} width={50} height={20} alt="logo" />
        <div className="sm:flex sm:space-x-14">
          <Link href="" className="text-xl visited:text-blue-700">
            Beranda
          </Link>
          <Link href="" className="text-xl">
            Murid
          </Link>
          <Link href="" className="text-xl">
            Mitra
          </Link>
        </div>
      </div>
    </div>
  );
}
