import React from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  id: string;
}

const Textarea: React.FC<TextAreaProps> = ({ label, error, id, ...props }) => {
  return (
    <div className="w-full space-y-2">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-slate-400 ">
          {label}
        </label>
      )}

      <textarea
        id={id}
        className="flex min-h-30 w-full rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-3 text-sm text-white ring-offset-slate-950 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-600/30 transition-all resize-none"
        {...props}
      />

      {error && <p className="text-sm text-red-600 ml-1">{error}</p>}
    </div>
  );
};

export default Textarea;
