import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
  className?: string;
}

const Select: React.FC<SelectProps> = ({label, options, className, ...props}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-400">
        {label}
      </label>
      <select
        className={`w-full px-4 py-3 bg-slate-800 border border-slate-700 
                   rounded-xl focus:ring-2 focus:ring-sky-500/20 outline-none 
                   transition-all text-white ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-slate-800"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
