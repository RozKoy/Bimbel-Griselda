import CmsLayout from "@/components/cms/dashboard-admin/CmsLayout";
import * as React from "react";
import Breadcrumbs from "@/components/cms/dashboard-admin/Breadcrumbs";
import ToastFailed from "@/components/cms/ToastFailed";
import plus from "../../../public/assets/plust.png";
import minus from "../../../public/assets/minus.png";
import Image from "next/image";
import update from "../../../public/assets/updates.png";
import { SubmitHandler, useForm } from "react-hook-form";
import ToastSucces from "@/components/cms/ToastSucces";
import { Modal } from "flowbite-react";
import useAxiosPrivate from "@/utils/UseAxiosPrivate";
import useLocalStorage from "@/utils/useLocalStorage";
import { SWRResponse, mutate } from "swr";
import useSWR from "swr";

interface FormData {
  member: number;
  event: number;
}

const CountMember = () => {
  const crumbs = [
    { href: "/dashboard", text: "Dashboard" },
    { text: "Jumlah" },
  ];

  const axiosPrivate = useAxiosPrivate();
  const [accessToken, _] = useLocalStorage("accessToken", "");
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [openModal2, setOpenModal2] = React.useState<boolean>(false);
  const [showToast, setShowToast] = React.useState(false);
  const [member, setMember] = React.useState(0);

  const {
    data,
    error,
    isLoading,
  } = useSWR(
    `/count`,
    (url) =>
      axiosPrivate
        .get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          setValue2("event", res.data[0].value);
          setValue("member", res.data[1].value);
          res.data;
        }),{
          revalidateOnFocus : false,
        }
  );


  const showModal = () => {
    setOpenModal(true);
  };
  const showModal2 = () => {
    setOpenModal2(true);
  };

  const { register, handleSubmit, setValue, watch, reset, formState } =
    useForm<FormData>({
    });

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    setValue: setValue2,
    watch: watch2,
    reset: reset2,
    formState: formState2,
  } = useForm<FormData>({
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const update = {
      value : data.member
    }
    try{
      await axiosPrivate.put('/count/update/member',update)
    }catch(e){
      alert("Update Gagal")
    }
    setOpenModal(false);
    setShowToast(true);
    mutate(`/count`);
  };

  const onSubmitEvent: SubmitHandler<FormData> = async (data) => {
    const update = {
      value : data.event
    }
    try{
      await axiosPrivate.put('/count/update/event',update)
    }catch(e){
      alert("Update Gagal")
    }
    setOpenModal2(false);
    setShowToast(true);
    mutate(`/count`);
  };

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ member: 0 });
    } else if (formState2.isSubmitSuccessful) {
      reset2({ event: 0 });
    }
  }, [formState, reset, reset2, formState2]);

  const handleMinusClick = () => {
    const currentValue = watch("member");
    setValue("member", currentValue - 1);
  };
  const handleMinusClickEvent = () => {
    const currentValue = watch2("event");
    setValue2("event", currentValue - 1);
  };

  const handlePlusClick = () => {
    const currentValue = watch("member");
    setValue("member", currentValue + 1);
  };
  const handlePlusClickEvent = () => {
    const currentValue = watch2("event");
    setValue2("event", currentValue + 1);
  };

  return (
    <CmsLayout>
      <Breadcrumbs crumbs={crumbs} />

      {/* Update Member */}
      <div className="flex flex-col space-y-10 items-center ">
        <div className="border-4 border-[#FFC436] rounded w-2/4">
          <p className=" text-center text-xl py-4 font-medium bg-[#ffc43680]">
            {" "}
            Member
          </p>
          <form
            key={1}
            className="flex justify-between px-6 py-10"
            onSubmit={handleSubmit(showModal)}
          >
            <div className="flex space-x-2">
              <button
                type="button"
                className="bg-[#ffc43680] rounded py-1 px-2"
                onClick={handleMinusClick}
              >
                <Image src={minus} width={24} height={24} alt="minus" />
              </button>
              <input
                type="number"
                id="member"
                {...register("member")}
                className="text-center w-2/4  py-1 border-2 text-base font-medium border-[#FFC436] rounded-md focus:border-[#FFC436] focus:ring-[#FFC436]"
              />
              <button
                type="button"
                className="bg-[#ffc43680] rounded py-1 px-2"
                onClick={handlePlusClick}
              >
                <Image src={plus} width={24} height={24} alt="minus" />
              </button>
            </div>

            <button
              onClick={showModal}
              type="button"
              className="bg-[#FFC436] px-8 py-1 shadow-lg text-base font-medium rounded-md"
            >
              {" "}
              Update
            </button>
            <Modal
              className=""
              show={openModal}
              size="md"
              onClose={() => setOpenModal(false)}
              popup
            >
              <Modal.Body className="border-4 border-[#FFC436] rounded-md py-6">
                <div className="flex flex-col justify-center items-center">
                  <Image src={update} width={131} height={143} alt="hapus" />
                  <p className=" mt-4 mb-6">
                    Apakah Anda Ingin Mengupdate Data ?
                  </p>

                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => setOpenModal(false)}
                      className="border-2 border-[#F00] rounded-md w-[119px] h-[30px] text-center text-md text-[#F00] font-medium shadow-md"
                    >
                      No
                    </button>
                    <button
                      onClick={handleSubmit(onSubmit)}
                      className="border-2 bg-[#FFC436] rounded-md w-[119px] h-[30px] text-center text-md font-medium shadow-md"
                    >
                      Ya
                    </button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </form>
          {showToast && (
            <ToastSucces
              text="Data Berhasil Diupdate"
              onDismiss={() => setShowToast(false)}
            ></ToastSucces>
          )}
        </div>

        {/* Update Event */}
        <div className="border-4 border-[#FFC436] rounded w-2/4">
          <p className=" text-center text-xl py-4 font-medium bg-[#ffc43680]">
            {" "}
            Event
          </p>
          <form
            key={2}
            className="flex justify-between px-6 py-10"
            onSubmit={handleSubmit2(showModal2)}
          >
            <div className="flex space-x-2">
              <button
                type="button"
                className="bg-[#ffc43680] rounded py-1 px-2"
                onClick={handleMinusClickEvent}
              >
                <Image src={minus} width={24} height={24} alt="minus" />
              </button>
              <input
                type="number"
                id="event"
                {...register2("event")}
                className="text-center w-2/4 py-1 border-2 text-base font-medium border-[#FFC436] rounded-md focus:border-[#FFC436] focus:ring-[#FFC436]"
              />
              <button
                type="button"
                className="bg-[#ffc43680] rounded py-1 px-2"
                onClick={handlePlusClickEvent}
              >
                <Image src={plus} width={24} height={24} alt="minus" />
              </button>
            </div>

            <button
              onClick={showModal2}
              type="button"
              className="bg-[#FFC436] px-8 py-1 shadow-lg text-base font-medium rounded-md"
            >
              {" "}
              Update
            </button>
            <Modal
              className=""
              show={openModal2}
              size="md"
              onClose={() => setOpenModal2(false)}
              popup
            >
              <Modal.Body className="border-4 border-[#FFC436] rounded-md py-6">
                <div className="flex flex-col justify-center items-center">
                  <Image src={update} width={131} height={143} alt="hapus" />
                  <p className=" mt-4 mb-6">
                    Apakah Anda Ingin Mengupdate Data ?
                  </p>

                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => setOpenModal2(false)}
                      className="border-2 border-[#F00] rounded-md w-[119px] h-[30px] text-center text-md text-[#F00] font-medium shadow-md"
                    >
                      No
                    </button>
                    <button
                      onClick={handleSubmit2(onSubmitEvent)}
                      className="border-2 bg-[#FFC436] rounded-md w-[119px] h-[30px] text-center text-md font-medium shadow-md"
                    >
                      Ya
                    </button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </form>
        </div>
      </div>
    </CmsLayout>
  );
};

export default CountMember;
