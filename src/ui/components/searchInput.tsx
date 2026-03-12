import React from "react";
import { Search } from "lucide-react";

interface SearchInputProps {
  placeholder: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  className,
  value,
  onChange,
}) => {
  return (
    <div className={`relative  ${className}`}>
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
        size={18}
      />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-4 px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl focus:ring-2 focus:ring-sky-500 transition-all outline-none text-white placeholder:text-slate-600 "
      />
    </div>
  );
};

export default SearchInput;
