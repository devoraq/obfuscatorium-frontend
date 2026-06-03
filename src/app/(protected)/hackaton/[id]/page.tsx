'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Bookmark,
  Calendar,
  MapPin,
  Share2,
  Trophy,
  Users,
} from 'lucide-react';

import { useAppSelector } from '@/store/hooks';

import { Header } from '@/ui/components/header';
import { Sidebar } from '@/ui/layout/nav/sideBar';

const HackathonDetailPage: React.FC = () => {
  const event = useAppSelector((state) => state.contest.currentEvent);

  return (
    <div className='flex h-screen w-full overflow-hidden bg-slate-950 text-slate-100'>
      <Sidebar />
      <div className='relative flex flex-1 flex-col overflow-hidden'>
        <Header />
        <main className='hide-scrollbar flex-1 overflow-x-hidden overflow-y-auto bg-slate-950/50'>
          <div className='p-8'>
            <Link
              href='/hackaton/find'
              className='mb-6 inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-white'
              aria-label='Вернуться к списку всех хакатонов'
            >
              <ArrowLeft size={16} />
              <span className='text-sm'>Назад к хакатонам</span>
            </Link>

            <header className='relative overflow-hidden rounded-3xl bg-slate-800'>
              <div className='aspect-video md:aspect-24/9 lg:aspect-24/9'>
                <div className='absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent' />
                <div className='absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8'>
                  <div className='space-y-1 sm:space-y-2'>
                    <div className='flex items-center gap-2'>
                      <span className='rounded-full border border-sky-500/20 bg-sky-500/20 px-2 py-0.5 text-[8px] font-bold tracking-widest text-sky-400 uppercase sm:px-3 sm:py-1 sm:text-[10px]'>
                        {event.status === 'ongoing'
                          ? 'Идет сейчас'
                          : 'Регистрация открыта'}
                      </span>
                    </div>

                    <h1 className='text-2xl font-black tracking-tight wrap-break-word text-white sm:text-3xl md:text-4xl'>
                      {/* {event.title} */}
                    </h1>
                  </div>
                </div>
              </div>
            </header>

            <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
              <div className='space-y-8 lg:col-span-2'>
                <section className='space-y-4 rounded-3xl border border-slate-800 bg-slate-900/50 p-8'>
                  <h2 className='text-xl font-bold text-white'>О хакатоне</h2>
                  <p className='leading-relaxed text-slate-400'>
                    {event.description || 'Описание отсутствует'}
                  </p>
                </section>

                <section className='space-y-6 rounded-3xl border border-slate-800 bg-slate-900/50 p-6'>
                  <h3 className='text-lg font-bold text-white'>Таймлайн</h3>
                  <ol
                    className='relative space-y-6 before:absolute before:top-2 before:bottom-2 before:left-2.5 before:w-px before:bg-slate-800'
                    aria-label='Основные этапы хакатона'
                  >
                    <li className='relative pl-8'>
                      <div className='absolute top-1.5 left-0 h-5 w-5 rounded-full border-4 border-slate-900 bg-sky-500' />
                      <time className='text-xs font-bold text-sky-400 uppercase'>
                        {/* {event.day} {event.month} */}
                      </time>
                      <p className='text-sm font-bold text-white'>
                        Открытие регистрации
                      </p>
                    </li>
                    <li className='relative pl-8'>
                      <div className='absolute top-1.5 left-0 h-5 w-5 rounded-full border-4 border-slate-900 bg-slate-700' />
                      <time className='text-xs font-bold text-slate-500 uppercase'>
                        {/* {event.day + 10} {event.month} */}
                      </time>
                      <p className='text-sm font-bold text-slate-300'>
                        Конец регистрации
                      </p>
                    </li>
                    <li className='relative pl-8'>
                      <div className='absolute top-1.5 left-0 h-5 w-5 rounded-full border-4 border-slate-900 bg-slate-700' />
                      <time className='text-xs font-bold text-slate-500 uppercase'>
                        {/* {event.day + 15} {event.month} */}
                      </time>
                      <p className='text-sm font-bold text-slate-300'>
                        Старт хакатона
                      </p>
                    </li>
                  </ol>
                </section>
              </div>

              <div className='space-y-6'>
                <div className='space-y-6 rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm'>
                  <div className='space-y-4'>
                    <div className='flex items-center gap-3 text-slate-300'>
                      <Calendar size={18} className='text-sky-400' />
                      <span className='text-sm font-medium'>
                        {/* {event.day} {event.month}, 2026 */}
                      </span>
                    </div>
                    <div className='flex items-center gap-3 text-slate-300'>
                      <MapPin size={18} className='text-sky-400' />
                      <span className='text-sm font-medium'>
                        {/* {event.location} */}
                      </span>
                    </div>
                    <div className='flex items-center gap-3 text-slate-300'>
                      <Trophy size={18} className='text-emerald-400' />
                      <span className='text-sm font-bold text-emerald-400'>
                        {/* Приз: {event.prize} */}
                      </span>
                    </div>
                    <div className='flex items-center gap-3 text-slate-300'>
                      <Users size={18} className='text-indigo-400' />
                      <span className='text-sm font-medium'>
                        {/* {event.participantsCount} участников */}
                      </span>
                    </div>
                  </div>

                  <div className='space-y-3 pt-4'>
                    <button className='w-full rounded-xl bg-sky-600 py-3.5 font-bold text-white shadow-lg shadow-sky-600/20 transition-all hover:bg-sky-500 active:scale-95'>
                      {event.status === 'ongoing'
                        ? 'Присоединиться'
                        : 'Участвовать'}
                    </button>
                    <div className='flex gap-2'>
                      <button className='flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-800 py-3 font-bold text-slate-300 transition-all hover:bg-slate-700'>
                        <Bookmark size={16} />
                        Сохранить
                      </button>
                      <button className='rounded-xl bg-slate-800 p-3 text-slate-300 transition-all hover:bg-slate-700'>
                        <Share2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>

                <aside className='rounded-3xl border border-sky-500/20 bg-linear-to-br from-indigo-600/20 to-sky-600/20 p-6 backdrop-blur-sm'>
                  <h3 className='mb-2 text-sm font-bold text-white'>
                    Нужна команда?
                  </h3>
                  <p className='mb-4 text-xs text-slate-400'>
                    Найдите единомышленников или присоединитесь к существующей
                    команде.
                  </p>
                  <Link
                    href='/team/find'
                    className='block w-full rounded-lg border border-white/10 bg-white/10 py-2.5 text-center text-xs font-medium text-white transition-all hover:bg-white/20'
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
