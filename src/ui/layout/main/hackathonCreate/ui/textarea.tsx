import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

 const Textarea: React.FC<TextareaProps> = ({ label, id, ...props }) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-slate-400">
        {label}
      </label>
      <textarea
        id={id}
        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 
                   rounded-xl focus:ring-2 focus:ring-sky-500/20 outline-none 
                   transition-all text-white placeholder:text-slate-600 resize-none"
        {...props}
      />
    </div>
  );
};
 
export default Textarea;