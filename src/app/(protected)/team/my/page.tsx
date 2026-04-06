'use client';

import React from 'react';
import { MessageSquare, UserPlus, Users } from 'lucide-react';

import { Button } from '@/ui/components/button';
import { Header } from '@/ui/components/header';
import { Sidebar } from '@/ui/layout/nav/sideBar';
import { HackatonTeam } from '@/ui/layout/teamMy/hackatonTeam';
import { MemberTeam } from '@/ui/layout/teamMy/memberTeam';

const TeamMy: React.FC = () => (
  <div className='flex h-screen w-full overflow-hidden bg-slate-950 text-slate-100'>
    <Sidebar />
    <div className='relative flex flex-1 flex-col overflow-hidden'>
      <Header />
      <main className='hide-scrollbar flex-1 overflow-x-hidden overflow-y-auto bg-slate-950/50'>
        <div className='animate-fadeIn space-y-8 p-8'>
          <div className='flex flex-col justify-between gap-6 md:flex-row md:items-center'>
            <div>
              <div className='mb-2 flex items-center gap-3'>
                <div className='rounded-lg bg-sky-500/10 p-2'>
                  <Users size={20} className='text-sky-400' />
                </div>
                <h1 className='text-3xl font-bold text-white'>
                  Команда: <span className='text-sky-400'>CodeCrafters</span>
                </h1>
              </div>
            </div>

            <div className='flex gap-3'>
              <button className='flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-slate-700'>
                <MessageSquare size={18} />
                <span>Чат команды</span>
              </button>
              <Button
                icon={UserPlus}
                text='Пригласить участника'
                className='flex px-5 text-sm font-semibold'
              />
            </div>
          </div>

          <div className='grid grid-cols-1 gap-8 text-sm font-semibold'>
            <MemberTeam />
            <HackatonTeam />
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default TeamMy;
