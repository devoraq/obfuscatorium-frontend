'use client';

import React from 'react';
import { Upload } from 'lucide-react';

interface FileUploadProps {
  label: string;
}

 const FileUpload: React.FC<FileUploadProps> = ({ label }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-400">
        {label}
      </label>
      <div className="w-full h-48 border-2 border-dashed border-slate-700 rounded-2xl 
                    flex flex-col items-center justify-center bg-slate-800/20 
                    hover:bg-slate-800/40 transition-all cursor-pointer">
        <Upload className="text-slate-500 mb-2" size={32} />
        <p className="text-sm font-medium text-slate-300">Кликните или перетащите файл</p>
        <p className="text-xs text-slate-500 mt-1">PNG, JPG до 10MB (рекомендуется 16:9)</p>
      </div>
    </div>
  );
};
export default FileUpload;