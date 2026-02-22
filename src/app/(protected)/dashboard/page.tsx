'use client';

import React from 'react';
import { Sidebar } from '@/ui/layout/nav/sideBar'
import Header from '@/ui/components/header';

import Stats from '@/ui/layout/main/dashboard/ui/stats'
import Team from '@/ui/layout/main/dashboard/ui/team'
import Events from '@/ui/layout/main/dashboard/ui/events';

const Dashboard: React.FC = () => {
 return (
    <div className="flex h-screen w-full bg-slate-950 text-slate-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Header />
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-slate-950/50 hide-scrollbar">
          <div className="p-8 space-y-8 animate-fadeIn">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl font-bold tracking-tight text-white">Добро пожаловать обратно! Вот что происходит в ваших проектах сегодня.</h1>
            </div>
            <Stats />
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <Team />
            <Events/>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Dashboard;

    <div className="flex h-screen w-full bg-slate-950 text-slate-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Header />
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-slate-950/50 hide-scrollbar">
          
        </main>
      </div>
    </div>
