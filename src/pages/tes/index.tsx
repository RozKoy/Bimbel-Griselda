import Image from "next/image";
import Link from "next/link";
import DashboardIcon from "../../components/cms/dashboard-admin/DadshboardIcon";
import ModulIcon from "../../components/cms/dashboard-admin/ModulIcon";
import CountIcon from "../../components/cms/dashboard-admin/CountIcon";
import LogoutIcon from "../../components/cms/dashboard-admin/LogoutIcon";
import foto from "../../../public/assets/admin.png";
import logo from "../../../public/assets/logo.png";
import preview from "../../../public/assets/preview.png";
import { useRouter } from "next/router";

const Tes = () => {
  const router = useRouter();
  return (
    <div className="bg-red-400 min-h-screen flex ">
      <div className=" w-[20%] flex flex-col justify-between items-center pt-[8%]  ">
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
              <DashboardIcon /> <p>Dashboard</p>
            </Link>
            <Link
              href="/learning-materials"
              className={
                router.pathname === "/learning-materials"
                  ? "flex space-x-2 bg-white w-full rounded-md p-2 "
                  : "flex space-x-2 bg-white w-3/4 rounded-md p-2 "
              }
            >
              <ModulIcon /> <p>Mata Pelajaran</p>
            </Link>
            <Link
              href=""
              className="flex space-x-2 bg-white w-full rounded-md p-2 items-center"
            >
              <CountIcon /> <p>Jumlah</p>
            </Link>
          </div>

          <Link
            href=""
            className="flex space-x-2 bg-white w-4/6 rounded-md px-1 py-1 justify-center items-center mb-2"
          >
            <LogoutIcon /> <p className="text-red-600">Keluar</p>
          </Link>
        </div>
      </div>

      <div className=" w-[80%] flex flex-col bg-white ">
        <div className="bg-[#FFC436] w-full h-[15%] shadow-lg flex justify-between items-center px-7 ">
          <p className="text-xl font-medium">
            Selamat datang admin awali harimu dengan senyuman
          </p>
          <div className="flex space-x-4 items-center">
            <p className="text-xl font-medium">Hello Admin</p>
            <Image src={foto} width={40} height={0} alt="bimbel" />
          </div>
        </div>
        <div className=" flex flex-col py-4 px-7 h-[64] overflow-auto">
          <div>
            <Image src={preview} width={442} height={552} alt="logo" />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Tes;
