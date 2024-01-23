import Comma from "./Icons/CommaIcon";

interface CardTestimonialsProps {
  testimony?: string;
  stroke?: string;
}

const CardTestimonials: React.FC<CardTestimonialsProps> = ({
  testimony,
  stroke,
}) => {
  return (
    <div className="  relative flex items-end m-4 h-[270px]  sm:h-[400px]">
      <div className="rounded-full bg-[#EFEFEF] shadow-[0px_4px_4px] shadow-[#00000040] absolute top-0 left-[36%] p-2 sm:left-[40%]">
        <svg
          className=" w-[70px] h-[70px]  sm:w-[100px] sm:h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          width="101"
          height="101"
          viewBox="0 0 101 101"
          fill="none"
        >
          <path
            d="M79.5404 87.6685V79.3351C79.5404 74.9148 77.7844 70.6756 74.6588 67.55C71.5332 64.4244 67.294 62.6685 62.8737 62.6685H37.8737C33.4534 62.6685 29.2142 64.4244 26.0886 67.55C22.963 70.6756 21.207 74.9148 21.207 79.3351V87.6685"
            stroke={stroke}
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M50.3737 46.0018C59.5784 46.0018 67.0404 38.5399 67.0404 29.3351C67.0404 20.1304 59.5784 12.6685 50.3737 12.6685C41.169 12.6685 33.707 20.1304 33.707 29.3351C33.707 38.5399 41.169 46.0018 50.3737 46.0018Z"
            stroke={stroke}
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="w-full h-5/6  bg-[#FFF] rounded-br-[20.803px] rounded-tl-[20.803px] flex justify-center items-center      ">
        <div>
          <Comma className="w-[13.39px] h-[22.678px] sm:w-[17.991px] sm:h-[30.334px]" />
          <p className="text-center text-[#2C3546] font-light text-[10px] w-[256.627px] sm:w-[470px] sm:text-base">
            {testimony}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardTestimonials;
