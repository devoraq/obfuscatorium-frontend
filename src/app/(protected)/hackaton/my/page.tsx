'use client';

import React from 'react';
import { Trophy } from 'lucide-react';

import { Header } from '@/ui/components/header';
import { ActiveHackathon } from '@/ui/layout/hackathonMy/activeHackathon';
import { MyHackathons } from '@/ui/layout/hackathonMy/myHackaton';
import { PastHackathon } from '@/ui/layout/hackathonMy/pastHackathon';
import { Sidebar } from '@/ui/layout/nav/sideBar';

const HackathonMy: React.FC = () => (
  <div className='flex h-screen w-full overflow-hidden bg-slate-950 text-slate-100'>
    <Sidebar />
    <div className='relative flex flex-1 flex-col overflow-hidden'>
      <Header />
      <main className='hide-scrollbar flex-1 overflow-x-hidden overflow-y-auto bg-slate-950/50'>
        <div className='animate-fadeIn space-y-8 p-8'>
          <div>
            <div className='mb-2 flex items-center gap-3'>
              <div className='rounded-lg bg-sky-500/10 p-2'>
                <Trophy size={24} className='text-sky-400' />
              </div>
              <h1 className='text-3xl font-bold text-white'>Мои хакатоны</h1>
            </div>
            <p className='ml-14 text-slate-400'>
              Отслеживайте прогресс и дедлайны ваших текущих проектов
            </p>
          </div>
          <MyHackathons />
          <ActiveHackathon />
          <PastHackathon />
        </div>
      </main>
    </div>
  </div>
);

export default HackathonMy;
