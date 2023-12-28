import { useForm } from "react-hook-form";

interface Props {
  placeholder: string;
  type: any;
  htmlFor: string;
  id: any;
  propsRegis: any;
  label: string;
}

const InputText = ({
  placeholder,
  type,
  htmlFor,
  id,
  propsRegis,
  label,
}: Props) => {
  return (
    <div>
      <label htmlFor={htmlFor} className="block mb-2 text-xl  text-gray-900 ">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="bg-[#ffffff5e] border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-gray-300 focus:border-gray-300 block w-[350px]    "
        placeholder={placeholder}
        {...propsRegis}
      />
    </div>
  );
};

export default InputText;
