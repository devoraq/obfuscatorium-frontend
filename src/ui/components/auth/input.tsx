import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const Input: React.FC<InputProps> = ({ hasError, ...props }) => (
  <input
    className={`w-full rounded-xl border bg-slate-800/40 px-4 py-3 text-slate-100 transition-all outline-none placeholder:text-slate-500 ${hasError ? 'border-rose-500/50 hover:border-rose-500 focus:border-rose-500 focus:ring-rose-500/10' : 'border-slate-700/60 hover:border-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10'} ${props.className} `}
    {...props}
  />
);
