"use client";

import { useId, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  disabled,
  value,
  onChange,
  ...props
}) => {
  const id = useId();
  const errorId = `${id}-error`;
  const hasError = Boolean(error);

  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={id}
          className={`
            text-sm font-semibold transition-colors duration-200
            ${disabled ? "text-slate-500" : "text-slate-300"}
            ${hasError && !disabled ? "text-rose-400" : ""}
          `}
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input
          {...props}
          id={id}
          value={value}
          disabled={disabled}
          onChange={onChange}
          aria-invalid={hasError}
          aria-describedby={hasError ? errorId : undefined}
          className={`
            w-full bg-slate-800/40 border rounded-xl py-3 px-4
            text-slate-100 placeholder:text-slate-500 
            transition-all outline-none
            border-slate-700/60 hover:border-slate-600 
            focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10
            ${hasError ? "border-rose-500/50 hover:border-rose-500 focus:border-rose-500 focus:ring-rose-500/10" : ""}
            ${disabled ? "opacity-50 cursor-not-allowed bg-slate-900/50 border-slate-800" : ""}
          `}
        />
      </div>

      {error && (
        <p
          id={errorId}
          className="text-xs font-medium text-rose-500 mt-0.5"
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;