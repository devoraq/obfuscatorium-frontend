'use client';

import React from 'react';
import Link from 'next/link';
import { UsersRound } from 'lucide-react';

import { Contest } from '@/entities/contests/model/contest.slice';

import { useAppSelector } from '@/store/hooks';

interface EventsProps {
  data?: Contest[];
}

export const Events: React.FC<EventsProps> = ({ data }) => {
  const storeEvents = useAppSelector((state) => state.contest.events);
  const events = data || storeEvents;

  if (!events || events.length === 0) {
    return <div className='text-sm text-slate-500'>Нет доступных событий</div>;
  }

  const renderedEvents = events.map((event) => {
    const hasPrize =
      typeof event.prize === 'string' && event.prize.trim().length > 0;

    const hasParticipants = Boolean(event.participantsCount);

    const buttonText =
      event.status === 'ongoing' ? 'Присоединиться' : 'Участвовать';
    const prizeBlock = hasPrize ? (
      <>
        <span className='h-1 w-1 rounded-full bg-slate-700' />
        <span className='font-semibold text-emerald-400'>
          Приз: {event.prize}
        </span>
      </>
    ) : null;

    const participantsBlock = hasParticipants ? (
      <>
        <span className='h-1 w-1 rounded-full bg-slate-700' />
        <span className='flex items-center gap-1 text-slate-400'>
          <UsersRound size={15} className='text-indigo-400' />
          {event.participantsCount}
        </span>
      </>
    ) : null;

    return (
      <div
        key={event.id}
        className='group flex flex-col items-start gap-3 rounded-2xl border border-slate-800/40 bg-slate-800/20 p-3 transition-all hover:border-slate-700/60 hover:bg-slate-800/40 sm:flex-row sm:items-center sm:gap-4 sm:p-4'
      >
        <div className='flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10'>
          <span className='text-[10px] leading-none font-black text-indigo-400 uppercase'>
            {event.month}
          </span>
          <span className='text-lg font-black text-slate-200'>{event.day}</span>
        </div>

        <div className='min-w-0 flex-1'>
          <h3 className='truncate text-sm font-bold text-slate-100 transition-colors group-hover:text-sky-400'>
            {event.title}
          </h3>

          <div className='mt-0.5 flex flex-wrap items-center gap-2 text-xs text-slate-500'>
            <span>{event.location}</span>
            {prizeBlock}
            {participantsBlock}
          </div>
        </div>

        <Link
          href={`/hackaton/${event.id}`}
          className='rounded-lg bg-sky-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-sky-600/10 transition-all hover:bg-sky-500 active:scale-95'
          data-event-id={event.id}
          data-action='participate'
        >
          {buttonText}
        </Link>
      </div>
    );
  });

  return <div className='flex flex-col gap-4'>{renderedEvents}</div>;
};
