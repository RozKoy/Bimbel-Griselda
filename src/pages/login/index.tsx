import LoginLayout from "@/components/cms/login/LoginLayout";
import * as React from "react";
import logo from "../../../public/assets/logo.png";
import Image from "next/image";
import InputText from "@/components/cms/login/InputText";
import InputHideText from "@/components/cms/login/InputHideText";
import { useForm } from "react-hook-form";
// import Helper from "@/components/cms/login/Helper";
import ToastSucces from "@/components/cms/ToastSucces";
import Link from "next/link";
import { Spinner } from "flowbite-react";
import { useRouter } from "next/router";
import useLocalStorage from "@/utils/useLocalStorage";
import { axiosInstance } from "@/utils/axios";



const Login = () => {
  const [refreshToken, setRefreshToken] = useLocalStorage("refreshToken", "");
  const [accessToken, setAccessToken] = useLocalStorage("accessToken", "");

  const {
    register,
    reset,
    handleSubmit,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm({ defaultValues: { email: "", password: "" } });

  const { isSubmitting } = formState;

  // const [message, setMessage] = React.useState<string>("");
  const [showToast, setShowToast] = React.useState(false);
  const router = useRouter();

  const onSubmit = async (data: object) => {
    try{
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await axiosInstance.post("/auth/admin/login", data);
      setRefreshToken(response.data.data.refresh_token);
      setAccessToken(response.data.data.access_token);
      setShowToast(true);
      setTimeout(() => {
        router.push("/dashboard");
      },1300)
      console.log(response);
    }catch(error : any){
      if(error.response.status === 400) {
        alert(error.response.data.message[0].message);
      }else{
        alert(error.response.data.message);
      }
    }
  };

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: "", password: "" });
    }
  }, [formState, reset]);

  return (
    <LoginLayout>
      <div>
        <Image src={logo} width={150} height={0} alt="bimbel" />
      </div>

      <div className="text-center ">
        <p className="text-3xl font-semibold leading-10">Login Sebagai Admin</p>
        <p className="text-sm uppercase leading-10">Masukkan Data Diri Anda</p>
      </div>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-3">
          <InputText
            placeholder="Masukkan Email"
            type="text"
            htmlFor="email"
            id="email"
            label="Email"
            propsRegis={{ ...register("email") }}
          />
          <InputHideText
            placeholder="Masukkan Kata Sandi"
            htmlFor="name"
            id="name"
            label="Kata Sandi"
            className="right-1 bottom-3"
            propsRegis={{ ...register("password") }}
          />
        </div>
        <Link href="/forget-password" className="flex justify-end mt-2">
          Lupa kata sandi
        </Link>
        {/* <Helper message={message} /> */}

        <button
          type="submit"
          disabled={isSubmitting}
          className={
            isSubmitting
              ? "text-white font-semibold flex items-center justify-center mt-4 w-full bg-[#FFC436] opacity-70 shadow-md py-2 rounded-md"
              : "text-white font-semibold flex items-center justify-center mt-4 w-full bg-[#FFC436] shadow-md py-2 rounded-md"
          }
        >
          {isSubmitting ? <Spinner color="white" size="md" /> : "Login"}
        </button>
      </form>
      {showToast && (
        <ToastSucces
          text="Login Berhasil"
          onDismiss={() => setShowToast(false)}
        ></ToastSucces>
      )}
    </LoginLayout>
  );
};

export default Login;
