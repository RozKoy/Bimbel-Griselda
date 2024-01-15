import LoginLayout from "@/components/cms/login/LoginLayout";
import * as React from "react";
import logo from "../../../public/assets/logo.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Spinner } from "flowbite-react";
import Helper from "@/components/cms/login/Helper";
import { axiosInstance } from "@/utils/axios";

const OtpVerification = () => {
  const router = useRouter();
  React.useEffect(() => {
    if(!router.query.email){
      router.push("/forget-password")
    }
  })

  const {
    register,
    reset,
    handleSubmit,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm({ defaultValues: { otp: "" } });

  const [message, setMessage] = React.useState<string>("");

  const { isSubmitting } = formState;

  const onSubmit = async (data: any) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const newData = {
      email: router.query.email,
      otp: data.otp,
    };
    try {
      await axiosInstance.post("/auth/admin/otp-verification", newData);
      router.push({pathname: "/create-password", query: { email : newData.email, otp : newData.otp }}, undefined, { shallow: false })
    } catch (error: any) {
      if (error.response.status === 400) {
        setMessage(error.response.data.message[0].message);
      } else {
        setMessage(error.response.data.message);
      }
    }
  };

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ otp: "" });
    }
  }, [formState, reset]);

  return (
    <LoginLayout>
      <div>
        <Image src={logo} width={150} height={0} alt="bimbel" />
      </div>

      <div className="text-center ">
        <p className="text-3xl font-semibold leading-10">Kode Verifikasi</p>
        <p className="text-sm  leading-10">
          Masukkan Kode OTP Yang dikirimkan pada email anda
        </p>
      </div>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-10">
          <input
            type="text"
            maxLength={6}
            id="otp"
            className="bg-[#ffffff5e] border border-gray-300 text-gray-900 text-sm text-center rounded-md focus:ring-gray-300 focus:border-gray-300 block w-[350px]    "
            placeholder="Masukkan Kode OTP"
            {...register("otp", { required: true, maxLength: 6 })}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={
            isSubmitting
              ? "text-white font-semibold flex items-center justify-center mt-4 w-full bg-[#FFC436] opacity-70 shadow-md py-2 rounded-md"
              : "text-white font-semibold flex items-center justify-center mt-4 w-full bg-[#FFC436] shadow-md py-2 rounded-md"
          }
        >
          {isSubmitting ? <Spinner color="white" size="md" /> : "Verifikasi"}
        </button>
      </form>

      <span className="flex space-x-1 my-2 text-sm">
        <p>Tidak Menerima Kode OTP?</p>{" "}
        <button className="text-blue-700">Kirim Ulang</button>
      </span>

      <Helper message={message} />
    </LoginLayout>
  );
};

export default OtpVerification;
