import React from 'react';
import Link from 'next/link';
import { Bell, HelpCircle, Plus } from 'lucide-react';

import { SearchInput } from './searchInput';

export const Header: React.FC = () => (
  <header className='sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-800/50 bg-slate-950/80 px-8 backdrop-blur-md'>
    <div className='flex flex-1 items-center gap-8'>
      <SearchInput
        placeholder='Быстрый поиск...'
        className='hidden w-full max-w-md flex-1 md:block'
      />
    </div>

    <div className='flex items-center gap-3'>
      <Link
        href='/hackaton/create'
        className='hidden items-center gap-2 rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg shadow-sky-600/20 transition-colors hover:bg-sky-500 sm:flex'
      >
        <Plus size={14} />
        <span>Новый проект</span>
      </Link>

      <div className='flex items-center gap-1 border-l border-slate-800 pl-4'>
        <Link
          href='/notifications'
          className='relative rounded-lg p-2 text-slate-400 transition-all hover:text-white'
        >
          <Bell size={20} />
          <span className='absolute top-2 right-2 h-2 w-2 rounded-full border-2 border-slate-950 bg-red-500' />
        </Link>

        <button className='rounded-lg p-2 text-slate-400 transition-all hover:text-white'>
          <HelpCircle size={20} />
        </button>
      </div>
    </div>
  </header>
);
