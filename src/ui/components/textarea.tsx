import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  id: string;
}

export const Textarea: React.FC<TextAreaProps> = ({
  label,
  error,
  id,
  ...props
}) => (
  <div className='w-full space-y-2'>
    {label && (
      <label htmlFor={id} className='text-sm font-medium text-slate-400'>
        {label}
      </label>
    )}

    <textarea
      id={id}
      className='flex min-h-30 w-full resize-none rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-3 text-sm text-white ring-offset-slate-950 transition-all placeholder:text-slate-500 focus:ring-2 focus:ring-sky-600/30 focus:outline-none'
      {...props}
    />

    {error && <p className='ml-1 text-sm text-red-600'>{error}</p>}
  </div>
);
