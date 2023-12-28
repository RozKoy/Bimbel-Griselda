import LoginLayout from "@/components/cms/login/LoginLayout";
import * as React from "react";
import logo from "../../../public/assets/logo.png";
import Image from "next/image";
import InputText from "@/components/cms/login/InputText";
import { useForm } from "react-hook-form";
// import Helper from "@/components/cms/login/Helper";
import Link from "next/link";
import { Spinner } from "flowbite-react";

const ForgetPassword = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm({ defaultValues: { email: "" } });

  // const [message, setMessage] = React.useState<string>("");

  const { isSubmitting } = formState;


   const onSubmit = async (data: object) => {
     await new Promise((resolve) => setTimeout(resolve, 2000));

     console.log(data);
   };

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: "" });
    }
  }, [formState, reset]);

  return (
    <LoginLayout>
      <div>
        <Image src={logo} width={150} height={0} alt="bimbel" />
      </div>

      <div className="text-center ">
        <p className="text-3xl font-semibold leading-10">Lupa Kata Sandi</p>
        <p className="text-sm  leading-10">Masukkan Alamat Email Anda</p>
      </div>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-10">
          <InputText
            placeholder="Masukkan Email"
            type="text"
            htmlFor="email"
            id="email"
            label=""
            propsRegis={{ ...register("email") }}
          />
        </div>

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
          {isSubmitting ? <Spinner color="white" size="md" /> : "Kirim"}
        </button>
      </form>
      <Link href="/login" className="mt-2 text-sm underline">
        Kembali ke halaman login
      </Link>
    </LoginLayout>
  );
};

export default ForgetPassword;
