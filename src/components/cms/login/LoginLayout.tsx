import Image from "next/image";
import rocket from "../../../../public/assets/rocket.png";
const LoginLayout = ({ children }: any) => {
  return (
    <div className="w-full h-screen  flex">
      <div className="bg-[#FFC436] w-3/12 flex flex-col justify-between items-center pt-20 ">
        <div className="text-center">
          <p className="text-3xl font-semibold uppercase text-">
            Selamat Datang{" "}
          </p>
          <p className="text-sm font-medium">Semoga Harimu Menyenangkan</p>
        </div>
        <div>
          <Image src={rocket} width={350} height={20} alt="logo" />
        </div>
      </div>
      <div className=" w-9/12 flex justify-center items-center">
        <div className=" flex flex-col justify-center items-center p-4 w-3/4 ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
