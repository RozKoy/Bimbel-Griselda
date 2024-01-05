interface FacebookProps {
    fill?: string;
}

const Facebook: React.FC<FacebookProps> = ({ fill }) =>{
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 14.2357C0 21.2739 5.23571 27.1265 12.0833 28.3133V18.0886H8.45833V14.1566H12.0833V11.0103C12.0833 7.47116 14.419 5.50575 17.7226 5.50575C18.769 5.50575 19.8976 5.66265 20.944 5.81955V9.43775H19.0917C17.319 9.43775 16.9167 10.3025 16.9167 11.4043V14.1566H20.7833L20.1393 18.0886H16.9167V28.3133C23.7643 27.1265 29 21.2751 29 14.2357C29 6.40588 22.475 0 14.5 0C6.525 0 0 6.40588 0 14.2357Z"
          fill={fill}
        />
      </svg>
    );
}

export default Facebook;