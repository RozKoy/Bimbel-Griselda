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

const AddMaterials = () => {
  const crumbs = [
    { href: "/dashboard", text: "Dashboard" },
    { href: "/learning-materials", text: "Mata Pembelajran" },
    { text: "Tambah " },
  ];

  const [selectedOption, setSelectedOption] = React.useState<string>();
  const [showToast, setShowToast] = React.useState(false);
  const [showToastFailed, setShowToastFailed] = React.useState(false);
  const [uploadedFileName, setUploadedFileName] = React.useState<string | null>(
    null
  );
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Memperbarui state saat pengguna memilih file
    const fileName = e.target.files?.[0]?.name || null;
    setUploadedFileName(fileName);
  };

  const {
    register,
    reset,
    handleSubmit,
    setValue,
    watch,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm({
    defaultValues: { mapel: "", kategori: "", description: "", file: {} },
  });

  const opsi = [
    { id: 0, value: "", label: "Pilih Kategori" },
    { id: 1, value: "tk", label: "TK" },
    { id: 2, value: "sd", label: "SD" },
    { id: 3, value: "smp", label: "SMP" },
    { id: 4, value: "sma", label: "SMA" },
    { id: 5, value: "kuliah", label: "Kuliah" },
    { id: 6, value: "umum", label: "Umum" },
    { id: 7, value: "dll", label: "Dan Lain-Lain" },
  ];

  const { isSubmitting } = formState;

  const onSubmit = async (data: object) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setShowToast(true);

    console.log(data);
  };

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ mapel: "", kategori: "", description: "", file: {} });
    }
  }, [formState, reset]);

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
                onChange={(e) => setSelectedOption(e.target.value)}
                className="bg-[#ffffff5e] border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-gray-300 focus:border-gray-300 block w-[350px]  "
              >
                {opsi.map((option) => (
                  <option
                    className="uppercase"
                    key={option.id}
                    value={option.value}
                  >
                    {option.label}
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
                    {...register("file")}
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

export default AddMaterials;
