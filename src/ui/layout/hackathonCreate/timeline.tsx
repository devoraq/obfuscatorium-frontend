import React from 'react';
import { Clock, Plus, Trash2 } from 'lucide-react';

import { Input } from '@/ui/components/input';

export const Timeline: React.FC = () => (
  <div className='space-y-3 rounded-xl border border-slate-800 bg-slate-900/50 p-3 sm:space-y-4 sm:rounded-2xl sm:p-4'>
    <div className='flex items-center gap-2 text-purple-400'>
      <Clock size={16} className='shrink-0' />
      <span className='text-[10px] font-bold tracking-wider uppercase sm:text-xs'>
        Таймлайн
      </span>
    </div>

    <div className='space-y-2'>
      <div className='group flex w-full items-center justify-between gap-2 rounded-lg bg-slate-800/30 p-2'>
        <div className='flex min-w-0 flex-1 items-center gap-2 text-xs text-slate-400 sm:gap-3'>
          <div className='h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500 sm:h-2 sm:w-2' />
          <Input
            id='stage-name'
            placeholder='Регистрация'
            className='w-full truncate border-none bg-transparent p-0 text-xs text-slate-300 outline-none placeholder:text-slate-600 focus:ring-0 sm:text-sm'
          />
        </div>

        <button className='ml-1 shrink-0 text-slate-600 transition-all hover:text-red-400'>
          <Trash2 size={12} className='sm:h-3.5 sm:w-3.5' />
        </button>
      </div>

      <button className='flex w-full items-center justify-center gap-1 rounded-lg border border-dashed border-slate-700 py-2 text-[10px] text-slate-500 transition-all hover:border-slate-500 hover:text-slate-300 sm:py-2.5 sm:text-xs'>
        <Plus size={12} className='shrink-0 sm:h-3.5 sm:w-3.5' />
        <span className='truncate'>Добавить этап</span>
      </button>
    </div>
  </div>
);
