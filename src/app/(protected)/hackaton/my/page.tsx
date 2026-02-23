'use client';

import React from 'react';
import { Sidebar } from '@/ui/layout/nav/sideBar'
import Header from '@/ui/components/header';
import { Trophy } from 'lucide-react';
import ActiveHackathon from '@/ui/layout/hackathonMy/activeHackathon'
import PastHackathon from '@/ui/layout/hackathonMy/pastHackathon'

const HackathonMy: React.FC = () => {
  return (
    <div className="flex h-screen w-full bg-slate-950 text-slate-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Header />
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-slate-950/50 hide-scrollbar">
          <div className="space-y-8 p-8 animate-fadeIn">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-sky-500/10 rounded-lg">
                  <Trophy size={24} className="text-sky-400" />
                </div>
                <h1 className="text-3xl font-bold text-white">Мои хакатоны</h1>
              </div>
              <p className="text-slate-400 ml-14">
                Отслеживайте прогресс и дедлайны ваших текущих проектов
              </p>
            </div>
          < ActiveHackathon/>
            <PastHackathon />
          </div>          
        </main>
      </div>
    </div>

  );
};

export default HackathonMy;