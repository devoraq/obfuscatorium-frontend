'use client';

import React from 'react';
import { Sidebar } from '@/ui/layout/nav/sideBar';
import Header from '@/ui/layout/header/header';
import SearchInput from '@/ui/components/forms-elemets/searchInput';
import { Filter, Search } from "lucide-react";
import { HackathonsContainer } from '@/features/hackaton/all/ui/HackathonsContainer';

const AllHackatons: React.FC = () => {
  return (
    <div className="flex h-screen w-full bg-slate-950 text-slate-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Header />
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-slate-950/50 hide-scrollbar">
          <div className="p-8 space-y-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-white">Хакатоны</h1>
                <p className="text-slate-400 pt-5">Исследуйте, участвуйте и побеждайте в лучших технологических событиях.</p>
              </div>
              
              <div className="flex flex-col md:flex-row items-start gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <SearchInput placeholder="Поиск..." />
                </div>
                <button className="flex items-center gap-2 px-4 py-3.5 bg-slate-900 border border-slate-800 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-all">
                  <Filter size={18} />
                  Фильтры
                </button>
              </div>
            </div>

            <HackathonsContainer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AllHackatons;