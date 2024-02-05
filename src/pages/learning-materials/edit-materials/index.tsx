import CmsLayout from "@/components/cms/dashboard-admin/CmsLayout";
import * as React from "react";
import Breadcrumbs from "@/components/cms/dashboard-admin/Breadcrumbs";
import InputText from "@/components/cms/login/InputText";
import DeleteModal from "@/components/cms/DeleteModal";
import Link from "next/link";
import { useForm } from "react-hook-form";
import ToastSucces from "@/components/cms/ToastSucces";
import ToastFailed from "@/components/cms/ToastFailed";
import { Spinner } from "flowbite-react";
import useAxiosPrivate from "@/utils/UseAxiosPrivate";
import useLocalStorage from "@/utils/useLocalStorage";
import { SWRResponse, mutate } from "swr";
import useSWR from "swr";
import { useRouter } from "next/router";

interface Category {
  id: string;
  name: string;
}

interface CategoryData {
  items: Category[];
  meta: any;
}

const EditMaterials = () => {
  const router = useRouter();
  const axiosPrivate = useAxiosPrivate();
  const [accessToken, _] = useLocalStorage("accessToken", "");
  const [file, setFile] = React.useState<File | null>(null);

  const { data: categorydata }: SWRResponse<CategoryData> = useSWR(
    `/category/all?limit=10`,
    (url) =>
      axiosPrivate
        .get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => res.data?.data)
  );

  const {
    register,
    reset,
    handleSubmit,
    setValue,
    watch,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm();

  // const { data, error, isLoading } = useSWR(`/lesson/getById`, (url) => {
  //   return axiosPrivate
  //     .post(
  //       url,
  //       {
  //         id: router.query.id as string,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       setValue("mapel", res.data?.name);
  //       setValue("description", res.data?.description);
  //       setValue("category", res.data?.category.id);
  //       return res.data;
  //     });
  // },{
  //   revalidateOnFocus : false,
  // });

  React.useEffect(() => {
    const fetchData = async () => {
      await axiosPrivate
        .post(
          "/lesson/getById",
          {
            id: router.query.id,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((res) => {
          setValue("mapel", res.data?.name);
          setValue("description", res.data?.description);
          setValue("kategori", res.data?.category.id);
          setValue("image", res.data?.image);
        });
    };
    fetchData();
  },[router.isReady]);

  const crumbs = [
    { href: "/dashboard", text: "Dashboard" },
    { href: "/learning-materials", text: "Mata Pembelajran" },
    { text: "Edit" },
  ];

  const [showToast, setShowToast] = React.useState(false);
  const [showToastFailed, setShowToastFailed] = React.useState(false);
  const [uploadedFileName, setUploadedFileName] = React.useState<string | null>(
    null
  );
  // const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Memperbarui state saat pengguna memilih file
    const fileName = e.target.files?.[0]?.name || null;
    setFile(e.target.files?.[0] ?? null);
    setUploadedFileName(fileName);
  };

  const { isSubmitting } = formState;

  const onSubmit = async (data: any) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    try {
      if (file) {
        const newFile = {
          file: file,
        };
        console.log("ini image : " + data.image);
        const path = await axiosPrivate.put(
          `/lesson/updateFile?name=${data.image}`,
          newFile,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log("ini path : " + path.data);
        const newData = {
          id: router.query.id as string,
          category_id: data.kategori,
          name: data.mapel,
          description: data.description,
          image: path.data,
        };
        await axiosPrivate.put("/lesson/update", newData);
        setShowToast(true);
        setTimeout(() => {
          router.push("/learning-materials");
        },2000);
        return;
      }
      const newData = {
        id: router.query.id as string,
        category_id: data.kategori,
        name: data.mapel,
        description: data.description,
      };
      await axiosPrivate.put("/lesson/update", newData);
      setShowToast(true);
      setTimeout(() => {
        router.push("/learning-materials");
      },2000);
    } catch (error: any) {
      if (error.response.status === 400) {
        alert(error.response.data.message[0].message);
      } else {
        alert(error.response.data.message);
      }
      setShowToastFailed(true);
    }
    // setShowToast(true);
    // console.log(data);
  };

  // React.useEffect(() => {
  //   if (formState.isSubmitSuccessful) {
  //     reset({ mapel: "", kategori: "", description: "", file: {} });
  //   }
  // }, [formState, reset]);

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
                className="bg-[#ffffff5e] border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-gray-300 focus:border-gray-300 block w-[350px] uppercase"
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
          text="Data Gagal Ditambah"
          onDismiss={() => setShowToastFailed(false)}
        ></ToastFailed>
      )}
    </CmsLayout>
  );
};

export default EditMaterials;
