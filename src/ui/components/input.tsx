import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  className,
  id,
  ...props
}) => (
  <div className='space-y-2'>
    <label htmlFor={id} className='block text-sm font-medium text-slate-400'>
      {label}
    </label>
    <input
      id={id}
      className={`w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white transition-all outline-none placeholder:text-slate-600 focus:ring-2 focus:ring-sky-600/30 ${className}`}
      {...props}
    />
  </div>
);
