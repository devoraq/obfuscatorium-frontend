import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

const Input: React.FC<InputProps> = ({ hasError, ...props }) => {
  return (
    <input
      className={`
        w-full bg-slate-800/40 border rounded-xl py-3 px-4 
        text-slate-100 placeholder:text-slate-500 
        transition-all outline-none 
        ${hasError ? 'border-rose-500/50 hover:border-rose-500 focus:border-rose-500 focus:ring-rose-500/10' : 'border-slate-700/60 hover:border-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10'}
        ${props.className}
      `}
      {...props}
    />
  )
}

export default Input;