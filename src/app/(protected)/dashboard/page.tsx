'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, UserPlus, Users } from 'lucide-react';

import { Events } from '@/entities/contests/ui/events';
import { Stats } from '@/entities/stats/ui/stats';
import { Team } from '@/entities/teams/ui/team';

import { Header } from '@/ui/components/header';
import { Sidebar } from '@/ui/layout/nav/sideBar';

const Dashboard: React.FC = () => (
  <div className='flex h-screen w-full overflow-hidden bg-slate-950 text-slate-100'>
    <Sidebar />
    <div className='relative flex flex-1 flex-col overflow-hidden'>
      <Header />
      <main className='hide-scrollbar flex-1 overflow-x-hidden overflow-y-auto bg-slate-950/50'>
        <div className='animate-fadeIn space-y-8 p-8'>
          <div className='flex flex-col gap-1'>
            <h1 className='text-3xl font-bold tracking-tight text-white'>
              Добро пожаловать обратно! Вот что происходит в ваших проектах
              сегодня.
            </h1>
          </div>

          <Stats />

          <div className='grid grid-cols-1 gap-6 xl:grid-cols-3'>
            <div className='flex flex-col rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm xl:col-span-1'>
              <div className='mb-6 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <Users size={20} className='text-sky-400' />
                  <h2 className='text-lg font-bold text-white'>Моя Команда</h2>
                </div>
                <button className='rounded-lg p-1.5 text-slate-400 transition-all hover:bg-slate-800 hover:text-white'>
                  <UserPlus size={18} />
                </button>
              </div>
              <Team />
              <button className='group mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700/50 bg-slate-800/50 px-4 py-3 text-sm font-semibold text-slate-300 transition-all hover:bg-slate-800'>
                Управление командой
                <ArrowRight
                  size={16}
                  className='transition-transform group-hover:translate-x-1'
                />
              </button>
            </div>

            <div className='rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm xl:col-span-2'>
              <div className='mb-6 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <Calendar size={20} className='text-indigo-400' />
                  <h2 className='text-lg font-bold text-white'>
                    Предстоящие События
                  </h2>
                </div>
                <Link
                  href='/hackaton/all'
                  className='text-xs font-bold tracking-wider text-sky-400 uppercase hover:underline'
                >
                  Все хакатоны
                </Link>
              </div>
              <div className='space-y-3'>
                <Events />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);
export default Dashboard;
