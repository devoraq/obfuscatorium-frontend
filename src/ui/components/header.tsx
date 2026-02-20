import React from 'react';
import Link from 'next/link'
import { Bell, HelpCircle, Plus } from 'lucide-react';
import SearchInput from '@/ui/components/searchInput'


const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 w-full h-16 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 flex items-center justify-between px-8">
      <div className="flex items-center gap-8 flex-1">
       <SearchInput 
       placeholder='Быстрый поиск...'
       className='flex-1 max-w-md w-full hidden md:block'
       />
      </div>
      
      <div className="flex items-center gap-3">
        <Link href='/main/hackaton/create' className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-lg transition-colors shadow-lg shadow-sky-600/20">
          <Plus size={14} />
          <span>Новый проект</span>
        </Link>
        
        <div className="flex items-center gap-1 border-l border-slate-800 pl-4">
          <Link href='/main/notifications' className="p-2 text-slate-400 hover:text-white rounded-lg relative transition-all">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-950"></span>
          </Link>
          
          <button className="p-2 text-slate-400 hover:text-white rounded-lg transition-all">
            <HelpCircle size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;