'use client';

import React from 'react';
import { Upload } from 'lucide-react';

interface FileUploadProps {
  label: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({ label }) => (
  <div className='space-y-2'>
    <label className='block text-sm font-medium text-slate-400'>{label}</label>
    <div className='flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-700 bg-slate-800/20 transition-all hover:bg-slate-800/40'>
      <Upload className='mb-2 text-slate-500' size={32} />
      <p className='text-sm font-medium text-slate-300'>
        Кликните или перетащите файл
      </p>
      <p className='mt-1 text-xs text-slate-500'>
        PNG, JPG до 10MB (рекомендуется 16:9)
      </p>
    </div>
  </div>
);
