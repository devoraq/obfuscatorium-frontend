import React from 'react';
import { ChevronRight, Trophy } from 'lucide-react';

interface PastHackathon {
  id: string;
  title: string;
  place: string;
  prize: string;
}
const PAST: PastHackathon[] = [
  {
    id: '1',
    title: 'Tinkoff Hack 2023',
    place: '3 Место',
    prize: '$1,500',
  },
  {
    id: '2',
    title: 'Web3 Summit',
    place: '1 Место',
    prize: '$5,000',
  },
  {
    id: '3',
    title: 'Green Code',
    place: 'Финалист',
    prize: '$500',
  },
  {
    id: '4',
    title: 'Hack&Change',
    place: '2 Место',
    prize: '$2,000',
  },
];

export const PastHackathon: React.FC = () => (
  <div className='space-y-6'>
    <h2 className='text-lg font-bold text-slate-500'>
      Прошедшие ({PAST.length})
    </h2>
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      {PAST.map((hack) => (
        <div
          key={hack.id}
          className='flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/30 p-4 opacity-70'
        >
          <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800'>
            <Trophy size={18} className='text-slate-600' />
          </div>

          <div className='min-w-0 flex-1'>
            <h4 className='truncate font-semibold text-white'>{hack.title}</h4>
            <p className='text-[10px] tracking-wider text-slate-500 uppercase'>
              {hack.place} • {hack.prize}
            </p>
          </div>

          <button className='rounded-lg p-2 text-slate-500 transition-all hover:bg-slate-800 hover:text-white'>
            <ChevronRight size={16} />
          </button>
        </div>
      ))}
    </div>
  </div>
);
