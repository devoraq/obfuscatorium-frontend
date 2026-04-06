'use client';

import React from 'react';
import {
  Cpu,
  Filter,
  Gamepad2,
  Globe,
  Landmark,
  Shield,
  Sparkles,
} from 'lucide-react';

import { FindHackaton } from '@/entities/contests/ui/findHackaton';

import { CategoryButton } from '@/ui/components/categoryButton';
import { Header } from '@/ui/components/header';
import { SearchInput } from '@/ui/components/searchInput';
import { Sidebar } from '@/ui/layout/nav/sideBar';

const CATEGORIES = [
  { name: 'Все', icon: <Globe size={16} /> },
  { name: 'Web3', icon: <Sparkles size={16} /> },
  { name: 'AI', icon: <Cpu size={16} /> },
  { name: 'Fintech', icon: <Landmark size={16} /> },
  { name: 'Security', icon: <Shield size={16} /> },
  { name: 'GameDev', icon: <Gamepad2 size={16} /> },
];

const HackathonFind: React.FC = () => (
  <div className='flex h-screen w-full overflow-hidden bg-slate-950 text-slate-100'>
    <Sidebar />
    <div className='relative flex flex-1 flex-col overflow-hidden'>
      <Header />
      <main className='hide-scrollbar flex-1 overflow-x-hidden overflow-y-auto bg-slate-950/50'>
        <div className='space-y-8 p-8'>
          <div className='flex flex-col justify-between gap-6 md:flex-row md:items-end'>
            <div className='flex-1'>
              <h1 className='mb-4 text-3xl font-bold text-white'>
                Найти хакатон
              </h1>
              <div className='flex gap-4'>
                <SearchInput
                  placeholder='Название, технология или тема...'
                  className='flex-1'
                />
                <button className='flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white transition-all hover:bg-slate-700'>
                  <Filter size={18} />
                  <span className='hidden sm:inline'>Фильтры</span>
                </button>
              </div>
            </div>
          </div>

          <div className='flex flex-wrap gap-2 pb-2'>
            {CATEGORIES.map((category, index) => (
              <CategoryButton
                key={index}
                name={category.name}
                icon={category.icon}
                isActive={index === 0}
              />
            ))}
          </div>
          <FindHackaton />
        </div>
      </main>
    </div>
  </div>
);

export default HackathonFind;
