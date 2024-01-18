import * as React from "react";
import { useForm } from "react-hook-form";
import { Spinner } from "flowbite-react";
import Link from "next/link";
import CmsLayout from "@/components/cms/dashboard-admin/CmsLayout";
import Breadcrumbs from "@/components/cms/dashboard-admin/Breadcrumbs";
import InputText from "@/components/cms/login/InputText";
import ToastSucces from "@/components/cms/ToastSucces";
import ToastFailed from "@/components/cms/ToastFailed";
import useAxiosPrivate from "@/utils/UseAxiosPrivate";
import useLocalStorage from "@/utils/useLocalStorage";
import { SWRResponse, mutate } from "swr";
import useSWR from "swr";
import { useRouter } from "next/router";

interface FormData {
  mapel: string;
  kategori: string;
  description: string;
  file: FileList;
}

interface Option {
  id: number;
  value: string;
  label: string;
}

interface Category {
  id: string;
  name: string;
}

interface CategoryData {
  items: Category[];
  meta: any;
}

const AddMaterials = () => {
  const axiosPrivate = useAxiosPrivate();
  const [accessToken, _] = useLocalStorage("accessToken", "");
  const router = useRouter();
  const {
    data: categorydata,
    error,
    isLoading,
  }: SWRResponse<CategoryData, any, boolean> = useSWR(`/category/all`, (url) =>
    axiosPrivate
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data?.data)
  );

  const crumbs = [
    { href: "/dashboard", text: "Dashboard" },
    { href: "/learning-materials", text: "Mata Pembelajran" },
    { text: "Tambah " },
  ];

  // const [selectedOption, setSelectedOption] = React.useState<string>();
  const [showToast, setShowToast] = React.useState(false);
  const [failedMessage, setFailedMessage] = React.useState<string>("")
  const [showToastFailed, setShowToastFailed] = React.useState(false);
  const [uploadedFileName, setUploadedFileName] = React.useState<string | null>(
    null
  );

  const [file, setFile] = React.useState<File | null>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileName = e.target.files?.[0]?.name || null;
    setFile(e.target.files?.[0] ?? null);
    setUploadedFileName(fileName);
  };

  const {
    register,
    watch,
    reset,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    try {
      if(file){
        const newFile = {
          file: file,
        };
        const path = await axiosPrivate.post("/lesson/uploadFile", newFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const newData = {
        category_id: data.kategori,
        name: data.mapel,
        description: data.description,
        image: path.data,
      };
      await axiosPrivate.post("/lesson/create", newData);
      setShowToast(true);
      setTimeout(() => {
        router.push("/learning-materials");
      });
      return;
      }
      setFailedMessage("File Wajib Diisi");
      setShowToastFailed(true);
      // alert("File Wajib Diisi");
    } catch (error: any) {
      // setShowToastFailed(true);
      if (error.response.status === 400) {
        // alert(error.response.data.message[0].message);
        setFailedMessage(error.response.data.message[0].message);
        setShowToastFailed(true);
      } else {
        setFailedMessage(error.response.data.message);
        setShowToastFailed(true);
        // alert(error.response.data.message);
      }
    }
  };

  // React.useEffect(() => {
  //   if (isSubmitting) {
  //     reset({ mapel: "", kategori: "", description: "" });
  //   }
  // }, [isSubmitting, reset]);

  return (
    <CmsLayout>
      <Breadcrumbs crumbs={crumbs} />
      <div className="border-4 border-[#FFC436] rounded px-3 py-10 mt-2">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between">
            <InputText
              type="text"
              placeholder="Masukkan Materi Pembelajaran"
              label="Materi Pelajaran"
              htmlFor="mapel"
              id="mapel"
              propsRegis={{ ...register("mapel") }}
            />
            <div>
              <label
                htmlFor="kategori"
                className="block mb-2 text-xl  text-gray-900 "
              >
                Pilih Kategori
              </label>
              <select
                id="kategori"
                {...register("kategori")}
                // onChange={(e) => setSelectedOption(e.target.value)}
                className="bg-[#ffffff5e] border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-gray-300 focus:border-gray-300 block w-[350px]  "
              >
                {categorydata?.items.map((option) => (
                  <option
                    className="uppercase"
                    key={option.id}
                    value={option.id}
                  >
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="kategori"
              className="block mb-2 text-xl  text-gray-900 "
            >
              Deskripsi Mata Pelajaran
            </label>
            <textarea
              className="bg-[#ffffff5e] border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-gray-300 focus:border-gray-300 h-40 w-full"
              id="myTextarea"
              {...register("description")}
              onChange={(e) => setValue("description", e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-between  items-center">
            <div>
              <div>
                <label
                  className="p-2 ps-0 flex items-center gap-3 cursor-pointer"
                  htmlFor="file-upload"
                >
                  <p className="bg-[#FFC436] text-black font-medium rounded-md py-1 px-3 text-sm shadow-md cursor-pointer">
                    Unggah
                  </p>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept=".png, .jpg, .jpeg"
                    // {...register("file")}
                    onChange={onChange}
                  />
                  <p className="text-sm text-gray-300">{uploadedFileName}</p>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className={
                isSubmitting
                  ? "bg-[#FFC436] text-black font-medium rounded-md  px-8 max-h-auto text-center py-1 text-sm shadow-md opacity-70"
                  : "bg-[#FFC436] text-black font-medium rounded-md  px-3 max-h-auto text-center py-1 text-sm shadow-md "
              }
            >
              {isSubmitting ? <Spinner color="white" size="sm" /> : "Simpan"}
            </button>
          </div>
        </form>
      </div>
      <Link
        href="/learning-materials"
        className="flex justify-start mt-4 bg-[#FFC436] text-black font-medium rounded-md py-1 text-sm shadow-md cursor-pointer w-[90px] border border-black text-center pl-4"
      >
        kembali
      </Link>

      {showToast && (
        <ToastSucces
          text="Berhasil menambahkan item."
          onDismiss={() => setShowToast(false)}
        ></ToastSucces>
      )}
      {showToastFailed && (
        <ToastFailed
          text={failedMessage}
          onDismiss={() => setShowToastFailed(false)}
        ></ToastFailed>
      )}
    </CmsLayout>
  );
};

export default AddMaterials;
