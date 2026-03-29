'use client';

import React from 'react';
import { Users, ArrowRight, UserPlus, Calendar } from "lucide-react";
import { Sidebar } from '@/ui/layout/nav/sideBar'
import Header from '@/ui/layout/header/header';
import Stats from '@/entities/stats/ui/stats';
import Team from '@/entities/teams/ui/team';
import Events from '@/entities/contests/ui/events';
import Link from 'next/link';

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
              <div className="xl:col-span-1 bg-slate-900/50 border border-slate-800 rounded-3xl p-6 backdrop-blur-sm flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Users size={20} className="text-sky-400" />
                    <h2 className="text-lg font-bold text-white">Моя Команда</h2>
                  </div>
                  <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all">
                    <UserPlus size={18} />
                  </button>
                </div>
                <Team /> 
                <button className="w-full mt-6 py-3 px-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 text-slate-300 text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group">Управление командой
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                </button>
              </div>

              <div className="xl:col-span-2 bg-slate-900/50 border border-slate-800 rounded-3xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={20} className="text-indigo-400" />
                    <h2 className="text-lg font-bold text-white">Предстоящие События</h2>
                  </div>
                  <Link href='/hackaton/all' className="text-sky-400 text-xs font-bold hover:underline uppercase tracking-wider">Все хакатоны</Link>
                </div>
                <div className="space-y-3">
                  <Events />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Dashboard;
