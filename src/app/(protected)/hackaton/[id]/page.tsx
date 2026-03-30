"use client";

import React from "react";
import Sidebar from "@/ui/layout/nav/sideBar";
import Header from "@/ui/components/header";
import { MapPin, Trophy, Users, ArrowLeft, Calendar, Share2, Bookmark } from "lucide-react";
import Link from "next/link";
import { useAppSelector } from "@/store/hooks";


const HackathonDetailPage: React.FC = () => {
  const event  = useAppSelector((state) => state.contest.currentEvent);

  return (
    <div className="flex h-screen w-full bg-slate-950 text-slate-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Header />
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-slate-950/50 hide-scrollbar">
          <div className="p-8">
            <Link
              href="/hackaton/find"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors"
              aria-label="Вернуться к списку всех хакатонов"
            >
              <ArrowLeft size={16} />
              <span className="text-sm">Назад к хакатонам</span>
            </Link>

            <header className="relative rounded-3xl overflow-hidden bg-slate-800">
              <div className="aspect-video md:aspect-24/9 lg:aspect-24/9">
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8">
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-sky-500/20 text-sky-400 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest rounded-full border border-sky-500/20">
                        {event.status === "ongoing"
                          ? "Идет сейчас"
                          : "Регистрация открыта"}
                      </span>
                    </div>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight wrap-break-word">
                      {/* {event.title} */}
                    </h1>
                  </div>
                </div>
              </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 space-y-4">
                  <h2 className="text-xl font-bold text-white">О хакатоне</h2>
                  <p className="text-slate-400 leading-relaxed">
                    {event.description || "Описание отсутствует"}
                  </p>
                </section>

                <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 space-y-6">
                  <h3 className="text-lg font-bold text-white">Таймлайн</h3>
                  <ol
                    className="space-y-6 relative before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-px before:bg-slate-800"
                    aria-label="Основные этапы хакатона"
                  >
                    <li className="relative pl-8">
                      <div className="absolute left-0 top-1.5 w-5 h-5 bg-sky-500 rounded-full border-4 border-slate-900" />
                      <time className="text-xs font-bold text-sky-400 uppercase">
                        {/* {event.day} {event.month} */}
                      </time>
                      <p className="text-sm font-bold text-white">
                        Открытие регистрации
                      </p>
                    </li>
                    <li className="relative pl-8">
                      <div className="absolute left-0 top-1.5 w-5 h-5 bg-slate-700 rounded-full border-4 border-slate-900" />
                      <time className="text-xs font-bold text-slate-500 uppercase">
                        {/* {event.day + 10} {event.month} */}
                      </time>
                      <p className="text-sm font-bold text-slate-300">
                        Конец регистрации
                      </p>
                    </li>
                    <li className="relative pl-8">
                      <div className="absolute left-0 top-1.5 w-5 h-5 bg-slate-700 rounded-full border-4 border-slate-900" />
                      <time className="text-xs font-bold text-slate-500 uppercase">
                        {/* {event.day + 15} {event.month} */}
                      </time>
                      <p className="text-sm font-bold text-slate-300">
                        Старт хакатона
                      </p>
                    </li>
                  </ol>
                </section>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 backdrop-blur-sm space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-300">
                      <Calendar size={18} className="text-sky-400" />
                      <span className="text-sm font-medium">
                        {/* {event.day} {event.month}, 2026 */}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <MapPin size={18} className="text-sky-400" />
                      <span className="text-sm font-medium">
                        {/* {event.location} */}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <Trophy size={18} className="text-emerald-400" />
                      <span className="text-sm font-bold text-emerald-400">
                        {/* Приз: {event.prize} */}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <Users size={18} className="text-indigo-400" />
                      <span className="text-sm font-medium">
                        {/* {event.participantsCount} участников */}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <button className="w-full py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-sky-600/20 active:scale-95">
                      {event.status === "ongoing"
                        ? "Присоединиться"
                        : "Участвовать"}
                    </button>
                    <div className="flex gap-2">
                      <button className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                        <Bookmark size={16} />
                        Сохранить
                      </button>
                      <button className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-all">
                        <Share2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>

                <aside className="bg-linear-to-br from-indigo-600/20 to-sky-600/20 border border-sky-500/20 rounded-3xl p-6 backdrop-blur-sm">
                  <h3 className="text-sm font-bold text-white mb-2">
                    Нужна команда?
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">
                    Найдите единомышленников или присоединитесь к существующей
                    команде.
                  </p>
                  <Link
                    href="/team/find"
                    className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-lg transition-all border border-white/10 block text-center"
                  >
                    Найти команду
                  </Link>
                </aside>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HackathonDetailPage;
