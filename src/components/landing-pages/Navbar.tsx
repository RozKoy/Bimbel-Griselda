import * as React from "react";
import hamburger from "/public/assets/burger.png";
import logo from "/public/assets/owlbimbel.png";
import CloseMenuIcon from "@/components/landing-pages/Icons/CloseMenuIcon";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" bg-white flex flex-wrap items-center justify-between p-3 md:py-3 md:px-0 md:bg-transparent">
      <Image
        src={logo}
        className="h-[50px] w-[50px]"
        alt="logo"
        width="120"
        height="120"
      />
      <div className="flex  md:hidden">
        <button
          className="bg-[#FFC436] w-[50px] h-[50px] flex justify-center items-center rounded-lg"
          id="hamburger"
          onClick={toggleMenu}
        >
          <Image
            className={`toggle   ${isMenuOpen ? "hidden" : "block"}`}
            src={hamburger}
            width="40"
            height="40"
            alt="Open Menu"
          />

          <div className={`toggle ${isMenuOpen ? "block" : "hidden"}`}>
            <CloseMenuIcon />
          </div>
        </button>
      </div>
      <div
        className={`toggle md:flex md:space-x-14 ${
          isMenuOpen ? "block" : "hidden"
        } w-full md:bg-transparent  md:w-auto md:flex text-left text-bold mt-0 md:mt-0  md:border-none`}
      >
        {/* Add your menu items here */}
        <Link
          href="/"
          className={
            router.pathname === "/"
              ? "block  text-[#0065FF] font-bold text-[20px] md:text-xl md:inline-block   px-3 py-1   "
              : "block text-[20px] md:text-xl md:inline-block px-3 py-1   "
          }
        >
          Beranda
        </Link>
        <Link
          href="/teacher"
          className={
            router.pathname === "/teacher"
              ? "block text-[#0065FF] font-bold text-[20px] md:text-xl md:inline-block   px-3 py-1   "
              : "block text-[20px] md:text-xl md:inline-block px-3 py-1   "
          }
        >
          Guru
        </Link>
        <Link
          href="/student"
          className={
            router.pathname === "/student"
              ? "block text-[#0065FF] font-bold text-[20px] md:text-xl md:inline-block   px-3 py-1   "
              : "block text-[20px] md:text-xl md:inline-block px-3 py-1   "
          }
        >
          Murid
        </Link>
        <Link
          href="/patner"
          className={
            router.pathname === "/patner"
              ? "block text-[#0065FF] font-bold text-[20px] md:text-xl md:inline-block   px-3 py-1   "
              : "block text-[20px] md:text-xl md:inline-block px-3 py-1   "
          }
        >
          Mitra
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
