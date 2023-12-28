import LoginLayout from "@/components/cms/login/LoginLayout";
import * as React from "react";
import logo from "../../../public/assets/logo.png";
import Image from "next/image";
import InputText from "@/components/cms/login/InputText";
import InputHideText from "@/components/cms/login/InputHideText";
import { useForm } from "react-hook-form";
// import Helper from "@/components/cms/login/Helper";
import Link from "next/link";

const CreatePassword = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm({ defaultValues: { password: "", newPassword: "" } });

  // const [message, setMessage] = React.useState<string>("");

  const onSubmit = (data: any) => {
    // setMessage("Login Anda Bermasalah");
    console.log(data);
  };

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ newPassword: "", password: "" });
    }
  }, [formState, reset]);

  return (
    <LoginLayout>
      <div>
        <Image src={logo} width={150} height={0} alt="bimbel" />
      </div>

      <div className="text-center mb-4">
        <p className="text-3xl font-semibold leading-8">Buat Kata Sandi Baru</p>
        <p className="text-sm  leading-8">
          Silahkan Masukkan Sandi dengan 7 Karakter
        </p>
      </div>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-3">
          <InputHideText
            placeholder="Masukkan Kata Sandi Baru"
            htmlFor="password"
            id="password"
            label="Kata Sandi Baru"
            className="right-1 bottom-3"
            propsRegis={{ ...register("password") }}
          />

          <InputHideText
            placeholder="Masukkan Konfirmasi Sandi Baru"
            htmlFor="nePassword"
            id="newPassword"
            label="Konfrimasi Kata Sandi Baru"
            className="right-1 bottom-3"
            propsRegis={{ ...register("newPassword") }}
          />
        </div>
        {/* <Helper message={message} /> */}

        <button
          type="submit"
          className="text-white font-semibold flex items-center justify-center mt-4 w-full bg-[#FFC436] shadow-md py-2 rounded-md"
        >
          Simpan
        </button>
      </form>
      <Link
        href="/login"
        className="flex justify-center mt-2 underline text-sm"
      >
        Kembali Ke Halaman Login
      </Link>
    </LoginLayout>
  );
};

export default CreatePassword;
