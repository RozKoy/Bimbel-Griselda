import Image from "next/image";
import * as React from "react";
import logo from "/public/assets/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className=" sm:pt-5">
      <div className="sm:flex sm:justify-between sm:items-center ">
        <Image src={logo} width={50} height={20} alt="logo" />
        <div className="sm:flex sm:space-x-14">
          <Link
            href="/"
            className={
              router.pathname === "/"
                ? "text-xl text-[#0065FF] font-bold"
                : "text-xl "
            }
          >
            Beranda
          </Link>
          <Link
            href="/teacher"
            className={
              router.pathname === "/teacher"
                ? "text-xl text-[#0065FF] font-bold"
                : "text-xl "
            }
          >
            Guru
          </Link>
          <Link
            href="/student"
            className={
              router.pathname === "/student"
                ? "text-xl text-[#0065FF] font-bold"
                : "text-xl "
            }
          >
            Murid
          </Link>
          <Link
            href="/patner"
            className={
              router.pathname === "/patner"
                ? "text-xl text-[#0065FF] font-bold"
                : "text-xl "
            }
          >
            Mitra
          </Link>
        </div>
      </div>
    </div>
  );
}
