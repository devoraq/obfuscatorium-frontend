import React from 'react';
import { Info } from 'lucide-react';

interface InfoMessageProps {
  infoText: string;
}

export const InfoMessage: React.FC<InfoMessageProps> = ({ infoText }) => (
  <div className='flex gap-2 rounded-xl border border-sky-500/20 bg-sky-500/10 p-3 sm:gap-3 sm:p-4'>
    <Info className='h-4 w-4 shrink-0 text-sky-400 sm:h-5 sm:w-5' size={20} />
    <p className='text-xs leading-relaxed text-sky-200'>{infoText}</p>
  </div>
);
