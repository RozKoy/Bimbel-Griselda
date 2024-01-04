import React from "react";
import { useForm } from "react-hook-form";

interface FormData {
  nama: string;
  email: string;
  password: string;
  file: FileList;
}

const FormComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    
    // Lakukan sesuatu dengan data yang dikirim
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nama:</label>
        <input {...register("nama", { required: "Nama wajib diisi" })} />
        {errors.nama && <span>{errors.nama.message}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input {...register("email", { required: "Email wajib diisi" })} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          {...register("password", { required: "Password wajib diisi" })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <div>
        <label>Upload File:</label>
        <input type="file" {...register("file")} />
        {errors.file && <span>{errors.file.message}</span>}
      </div>

      <div>
        <button type="submit">Kirim</button>
      </div>
    </form>
  );
};

export default FormComponent;
