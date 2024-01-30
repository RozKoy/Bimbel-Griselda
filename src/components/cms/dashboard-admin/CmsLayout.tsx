import Image from "next/image";
import Link from "next/link";
import DashboardIcon from "./DadshboardIcon";
import ModulIcon from "./ModulIcon";
import CountIcon from "./CountIcon";
import LogoutIcon from "./LogoutIcon";
import foto from "../../../../public/assets/admin.png";
import logo from "../../../../public/assets/logo.png";
import { useRouter } from "next/router";
import useLocalStorage from "@/utils/useLocalStorage";
import React, { ReactNode, useEffect, useState } from "react";
import checkAuth from "@/utils/checkAuth";
import { axiosInstance } from "@/utils/axios";

const CmsLayout = ({ children }: any) => {
  const [check, setCheck] = useState(false);
  const [refreshToken, setRefreshToken] = useLocalStorage("refreshToken", "");
  const [accessToken, setAccessToken] = useLocalStorage("accessToken", "");
  const router = useRouter();

  const logout = () => {
    setRefreshToken("");
    setAccessToken("");
    router.push("/login");
  };

  const checkRefreshToken = async () => {
    try{
      await axiosInstance
      .post("auth/admin/refresh-access-token", {
        refresh_token: refreshToken,
      });
    }catch(e:any){
      if(e.response.status === 403){
        logout();
      }
    }
  }

  useEffect( () => {
    const result: boolean = checkAuth(refreshToken);
    if (!result) {
      router.push("/login");
    } else {
      checkRefreshToken();
      setCheck(true);
    }
  });

  if (!check) {
    return null;
  }

  return (
    <div className="w-full flex min-h-screen">
      <div className="bg-[#FFC436] w-[20%] flex flex-col justify-between items-center pt-[8%] min-h-screen ">
        <div>
          <Image src={logo} width={120} height={0} alt="logo" />
        </div>
        <div className=" h-3/4 w-full flex flex-col justify-between pl-10">
          <div className="flex flex-col space-y-2 ">
            <Link
              href="/dashboard"
              className={
                router.pathname === "/dashboard"
                  ? "flex space-x-2 bg-white w-full rounded-md p-2 "
                  : "flex space-x-2 bg-white w-3/4 rounded-md p-2 "
              }
            >
              <DashboardIcon /> <p className="font-medium">Dashboard</p>
            </Link>
            <Link
              href="/learning-materials"
              className={
                router.pathname === "/learning-materials" ||
                router.pathname === "/learning-materials/add-materials" ||
                router.pathname === "/learning-materials/edit-materials" ||
                router.pathname === "/learning-materials/preview-materials"
                  ? "flex space-x-2 bg-white w-full rounded-md p-2 "
                  : "flex space-x-2 bg-white w-3/4 rounded-md p-2 "
              }
            >
              <ModulIcon /> <p className="font-medium">Mata Pelajaran</p>
            </Link>
            <Link
              href="/count-member"
              className={
                router.pathname === "/count-member"
                  ? "flex space-x-2 bg-white w-full rounded-md p-2 "
                  : "flex space-x-2 bg-white w-3/4 rounded-md p-2 "
              }
            >
              <CountIcon /> <p className="font-medium">Jumlah</p>
            </Link>
          </div>
          <Link
            href="/login"
            onClick={logout}
            className="flex space-x-2 bg-white w-4/6 rounded-md px-1 py-1 justify-center items-center mb-2"
          >
            <LogoutIcon /> <p className="text-[#FD0000] font-medium">LOGOUT</p>
          </Link>
        </div>
      </div>
      <div className=" w-[80%] flex flex-col ">
        <div className="bg-[#FFC436] w-full h-[15%] shadow-lg flex justify-between items-center px-7 ">
          <p className="text-xl font-medium">
            Selamat datang admin awali harimu dengan senyuman
          </p>
          <div className="flex space-x-4 items-center">
            <p className="text-xl font-medium">Hello Admin</p>
            <Image src={foto} width={40} height={0} alt="bimbel" />
          </div>
        </div>
        <div className=" flex flex-col py-4 px-7 w-ful min-h-[85%]  ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CmsLayout;
