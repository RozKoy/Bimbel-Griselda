// components/UploadForm.tsx
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  file: FileList;
};

const UploadForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Memperbarui state saat pengguna memilih file
    const fileName = e.target.files?.[0]?.name || null;
    setUploadedFileName(fileName);
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);

    try {
      // Simulasi proses pengungahan (Anda dapat mengganti ini dengan logika pengungahan sesungguhnya)
      await uploadFile(data.file[0]);

      // Lakukan sesuatu dengan data formulir jika perlu
    } catch (error) {
      console.error("Error during file upload:", error);
    } finally {
      setIsLoading(false);
    }

    console.log(data.file);
  };

  const uploadFile = async (file: File) => {
    // Simulasi proses pengungahan (Anda dapat mengganti ini dengan logika pengungahan sesungguhnya)
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="p-2 ps-0 flex items-center gap-3 cursor-pointer">
          <label
            htmlFor="file-upload"
            className={`bg-[#FFC436] text-black font-medium rounded-md py-1 px-3 text-sm shadow-md cursor-pointer ${
              isLoading ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            {isLoading ? "Uploading..." : "Unggah"}
            <input
              id="file-upload"
              type="file"
              className="hidden"
              accept=".png, .jpg, .jpeg"
              {...register("file")}
              onChange={onChange}
              disabled={isLoading}
            />
          </label>
          {uploadedFileName && !isLoading && (
            <p className="text-sm text-gray-300">{uploadedFileName}</p>
          )}
        </div>
      </div>
      <button type="submit" disabled={isLoading}>
        Submit
      </button>
    </form>
  );
};

export default UploadForm;
