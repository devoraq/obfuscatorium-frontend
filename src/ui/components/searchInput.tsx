import React from 'react';
import { Search } from 'lucide-react';

interface SearchInputProps {
  placeholder: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  className,
  value,
  onChange,
}) => (
  <div className={`relative ${className}`}>
    <Search
      className='absolute top-1/2 left-3 -translate-y-1/2 text-slate-500'
      size={18}
    />
    <input
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className='w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 pr-4 pl-10 text-white transition-all outline-none placeholder:text-slate-600 focus:ring-2 focus:ring-sky-500'
    />
  </div>
);
