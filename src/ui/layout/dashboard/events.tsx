'use client';

import React from 'react';
import { Calendar, UsersRound } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  month: string;
  day: number;
  location: string;
  prize?: string;
  status?: 'upcoming' | 'ongoing' | 'finished';
  participantsCount?: number;
}

export const Events: React.FC = () => {
  const events: Event[] = [
    {
      id: 'evt_001',
      title: 'Codenrock',
      month: 'Окт',
      day: 15,
      location: 'Online',
      prize: '$5,000',
      status: 'upcoming',
      participantsCount: 234,
    },
    {
      id: 'evt_002',
      title: 'AI и ML',
      month: 'Окт',
      day: 22,
      location: 'Москва',
      status: 'upcoming',
      participantsCount: 156,
    },
    {
      id: 'evt_003',
      title: 'Кибербезопасность',
      month: 'Ноя',
      day: 5,
      location: 'Online',
      status: 'ongoing',
      participantsCount: 189,
    },
  ];
  return (
    <div className='rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm xl:col-span-2'>
      <div className='mb-6 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Calendar size={20} className='text-indigo-400' />
          <h2 className='text-lg font-bold text-white'>Предстоящие События</h2>
        </div>
        <button className='text-xs font-bold tracking-wider text-sky-400 uppercase hover:underline'>
          Все хакатоны
        </button>
      </div>

      <div className='space-y-3'>
        {events.map((event) => (
          <div
            key={event.id}
            className='group flex items-center gap-4 rounded-2xl border border-slate-800/40 bg-slate-800/20 p-4 transition-all hover:border-slate-700/60 hover:bg-slate-800/40'
          >
            <div className='flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10'>
              <span className='text-[10px] leading-none font-black text-indigo-400 uppercase'>
                {event.month}
              </span>
              <span className='text-lg font-black text-slate-200'>
                {event.day}
              </span>
            </div>

            <div className='min-w-0 flex-1'>
              <h3 className='truncate text-sm font-bold text-slate-100 transition-colors group-hover:text-sky-400'>
                {event.title}
              </h3>
              <div className='mt-0.5 flex flex-wrap items-center gap-2 text-xs text-slate-500'>
                <span className='flex items-center gap-1'>
                  {event.location}
                </span>
                <span className='h-1 w-1 rounded-full bg-slate-700' />
                {typeof event.prize === 'string' && event.prize.length > 0 ? (
                  <div>
                    <span className='h-1 w-1 rounded-full bg-slate-700' />
                    <span className='font-semibold text-emerald-400'>
                      Приз: {event.prize}
                    </span>
                  </div>
                ) : null}
                {event.participantsCount && (
                  <>
                    <span className='h-1 w-1 rounded-full bg-slate-700' />
                    <span className='flex gap-2 text-slate-400'>
                      <UsersRound size={15} className='text-indigo-400' />{' '}
                      {event.participantsCount}
                    </span>
                  </>
                )}
              </div>
            </div>

            <button
              className='rounded-lg bg-sky-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-sky-600/10 transition-all hover:bg-sky-500 active:scale-95'
              data-event-id={event.id}
              data-action='participate'
            >
              {event.status === 'ongoing' ? 'Присоединиться' : 'Участвовать'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
