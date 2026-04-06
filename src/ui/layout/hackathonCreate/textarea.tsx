import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, id, ...props }) => (
  <div className='space-y-2'>
    <label htmlFor={id} className='block text-sm font-medium text-slate-400'>
      {label}
    </label>
    <textarea
      id={id}
      className='w-full resize-none rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white transition-all outline-none placeholder:text-slate-600 focus:ring-2 focus:ring-sky-500/20'
      {...props}
    />
  </div>
);
