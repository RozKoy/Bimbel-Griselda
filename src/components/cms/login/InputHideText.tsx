import VisibleIcon from "@/components/cms/login/VisibleIcon";
import InvisibleIcon from "@/components/cms/login/InvisibleIcon";
import { useState } from "react";

interface Props {
  placeholder: string;
  propsRegis: any;
  label: string;
  className: string;
  htmlFor: string;
  id: any;
}

const InputHideText = ({
  placeholder,
  propsRegis,
  label,
  className,
  htmlFor,
  id,
}: Props): JSX.Element => {
  const [hide, setHide] = useState<boolean>(true);
  return (
    <div>
      <label htmlFor={htmlFor} className="block mb-2 text-xl  text-gray-900 ">
        {label}
      </label>
      <div className=" relative">
        <input
          type={hide ? "password" : "text"}
          id={id}
          className="bg-[#ffffff5e] border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-gray-300 focus:border-gray-300  w-[350px]    "
          placeholder={placeholder}
          {...propsRegis}
        />
        <a onClick={() => setHide(!hide)} className={`absolute ${className}`}>
          {hide ? <InvisibleIcon /> : <VisibleIcon />}
          {/* {hide ? <InvisibleIcon/> : <VisibleIcon />} */}
        </a>
      </div>
    </div>
  );
};

export default InputHideText;
