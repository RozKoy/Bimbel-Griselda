interface Props {
  type?: string;
  id?: string;
  placeholder?: string;
  onChange?: any;
  value?: string;
}

const SearchBar = ({ type, id, placeholder, onChange, value }: Props) => {
  return (
    <input
      onChange={onChange}
      value={value}
      type={type}
      id={id}
      className="bg-[#ffffff5e] border border-[#FFC436] text-gray-900 text-sm  rounded-md focus:ring-[#FFC436] focus:border-[#FFC436] block w-[350px]    "
      placeholder={placeholder}
    />
  );
};

export default SearchBar;
