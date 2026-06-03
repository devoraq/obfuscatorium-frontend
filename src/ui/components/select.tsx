import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  className,
  ...props
}) => (
  <div className='space-y-2'>
    <label className='block text-sm font-medium text-slate-400'>{label}</label>
    <select
      className={`w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white transition-all outline-none focus:ring-2 focus:ring-sky-600/30 ${className}`}
      {...props}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className='bg-slate-800'
        >
          {option.label}
        </option>
      ))}
    </select>
  </div>
);
