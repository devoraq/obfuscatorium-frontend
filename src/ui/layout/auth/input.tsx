'use client';
import { InputHTMLAttributes, useId, useState } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  disabled,
  onChange,
  ...props
}) => {
  const id = useId();
  const errorId = `${id}-error`;

  const hasError = Boolean(error);

  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className='flex w-full flex-col gap-1.5'>
      {label && (
        <label
          htmlFor={id}
          className={`text-sm font-semibold transition-colors duration-200 ${disabled ? 'text-slate-500' : 'text-slate-300'} ${hasError && !disabled ? 'text-rose-400' : ''}`}
        >
          {label}
        </label>
      )}

      <div className='relative'>
        <input
          {...props}
          id={id}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          aria-invalid={hasError}
          aria-describedby={hasError ? errorId : undefined}
          className={`w-full rounded-xl border border-slate-700/60 bg-slate-800/40 px-4 py-3 text-slate-100 transition-all outline-none placeholder:text-slate-500 hover:border-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 ${hasError ? 'border-rose-500/50 hover:border-rose-500 focus:border-rose-500 focus:ring-rose-500/10' : ''} ${disabled ? 'cursor-not-allowed border-slate-800 bg-slate-900/50 opacity-50' : ''} `}
        />
      </div>

      {error && (
        <p
          id={errorId}
          className='mt-0.5 text-xs font-medium text-rose-500'
          role='alert'
          aria-live='polite'
        >
          {error}
        </p>
      )}
    </div>
  );
};
