'use client';

import React, { useEffect } from 'react';
import { Sidebar } from '@/ui/layout/nav/sideBar';
import Header from '@/ui/components/header';
import SearchInput from '@/ui/components/searchInput'
import { Filter, Search, Trophy, Zap, Bookmark } from "lucide-react";
import Events from '@/entities/contests/ui/events';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getContestsThunk } from '@/entities/contests/model/getTestContestsThunk';

const AllHackatons: React.FC = () => {
  const dispatch = useAppDispatch();
  const { events } = useAppSelector((state) => state.contest);

  useEffect(() => {
    dispatch(getContestsThunk());
  }, [dispatch]);

  // фильтрация по категориям
  const myHackathons = events.filter(event => event.isParticipating === true);
  const activeHackathons = events.filter(event => event.status === 'ongoing' && !event.isParticipating);
  const availableHackathons = events.filter(event => event.status === 'upcoming' && !event.isParticipating);

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
              
              <div className=" flex flex-col md:flex-row  items-start gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <SearchInput 
                    placeholder="Поиск..." 
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-3.5 bg-slate-900 border border-slate-800 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-all">
                  <Filter size={18} />
                  Фильтры
                </button>
              </div>
            </div>

            <div className="space-y-12">
              {/* Мои хакатоны */}
              <section className="space-y-6">
                <div className="flex items-center gap-2">
                  <Bookmark size={20} className="text-sky-400" />
                  <h2 className="text-xl font-bold text-white">Мои хакатоны</h2>
                  <span className="px-2 py-0.5 bg-sky-500/10 text-sky-400 text-[10px] font-bold rounded-full border border-sky-500/20">
                    {myHackathons.length}
                  </span>
                </div>
                <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 backdrop-blur-sm">
                  <Events data={myHackathons} />
                </div>
              </section>

              {/* Активные хакатоны */}
              <section className="space-y-6">
                <div className="flex items-center gap-2">
                  <Zap size={20} className="text-amber-400" />
                  <h2 className="text-xl font-bold text-white">Активные хакатоны</h2>
                  <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 text-[10px] font-bold rounded-full border border-amber-500/20">
                    {activeHackathons.length}
                  </span>
                </div>
                <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 backdrop-blur-sm">
                  <Events data={activeHackathons} />
                </div>
              </section>

              {/* Доступные хакатоны */}
              <section className="space-y-6">
                <div className="flex items-center gap-2">
                  <Trophy size={20} className="text-indigo-400" />
                  <h2 className="text-xl font-bold text-white">Доступные хакатоны</h2>
                  <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold rounded-full border border-indigo-500/20">
                    {availableHackathons.length}
                  </span>
                </div>
                <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 backdrop-blur-sm">
                  <Events data={availableHackathons} />
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AllHackatons;