import React, { ReactNode } from "react";
import { Toast } from "flowbite-react";
type Props = {
  text?: string;

  className?: string;
  onDismiss?: () => void;
};
const ToastSucces = ({ text, onDismiss }: Props) => {
  return (
    <div>
      <Toast
        theme={{
          root: {
            base: "flex w-full border-2 border-[#539165] max-w-xs items-center rounded-lg bg-white p-2 absolute right-5 bottom-2 text-gray-500 ",
            closed: "opacity-0 ease-out",
          },
        }}
      >
        <svg
          className="ml-6"
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
        >
          <path
            d="M13.0013 2.16626C7.0213 2.16626 2.16797 7.01959 2.16797 12.9996C2.16797 18.9796 7.0213 23.8329 13.0013 23.8329C18.9813 23.8329 23.8346 18.9796 23.8346 12.9996C23.8346 7.01959 18.9813 2.16626 13.0013 2.16626ZM10.0655 17.6471L6.1763 13.7579C5.7538 13.3354 5.7538 12.6529 6.1763 12.2304C6.5988 11.8079 7.2813 11.8079 7.7038 12.2304L10.8346 15.3504L18.288 7.89709C18.7105 7.47459 19.393 7.47459 19.8155 7.89709C20.238 8.31959 20.238 9.00209 19.8155 9.42459L11.593 17.6471C11.1813 18.0696 10.488 18.0696 10.0655 17.6471Z"
            fill="#10B981"
          />
        </svg>
        <div className="ml-3 text-sm font-normal text-[#539165]">{text}</div>
        <Toast.Toggle onDismiss={onDismiss} />
      </Toast>
    </div>
  );
};

export default ToastSucces;
