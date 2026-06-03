import React from 'react';
import cn from 'classnames';
import { Calendar, Edit3, ExternalLink, Trophy, Users } from 'lucide-react';

interface Hackathon {
  id: string;
  name: string;
  date: string;
  participantsCount: number;
  status: 'active' | 'draft' | 'ended';
  prize?: string;
}

const events_my: Hackathon[] = [
  {
    id: '1',
    name: 'Global AI Challenge 2024',
    date: '15 Мар - 20 Мар, 2026',
    participantsCount: 1240,
    status: 'active',
    prize: '$50,000',
  },
  {
    id: '2',
    name: 'Web3 Future Hack',
    date: '10 Апр - 12 Апр, 2026',
    participantsCount: 450,
    status: 'draft',
    prize: '$50,000',
  },
];

export const MyHackathons: React.FC = () => (
  <div className='space-y-8'>
    <div className='flex flex-col justify-between gap-4 md:flex-row md:items-center'>
      <h2 className='flex items-center gap-2 text-lg font-bold text-white'>
        <div className='h-2 w-2 animate-pulse rounded-full bg-sky-500' />
        Мои мероприятия ({events_my.length})
      </h2>
    </div>

    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
      {events_my.map((hackathon) => (
        <div
          key={hackathon.id}
          className='group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 transition-all hover:border-slate-700'
        >
          <div className='relative h-40 overflow-hidden'>
            {/* у страницы хакатона есть картинка(которую пользователь добаляет), это место под нее */}
            <div className='absolute top-4 left-4'>
              <div
                className={cn(
                  'rounded-full border px-3 py-1 text-[10px] font-bold tracking-wider uppercase',
                  {
                    'border-emerald-500/20 bg-emerald-500/10 text-emerald-400':
                      hackathon.status === 'active',
                    'border-sky-500/20 bg-sky-500/10 text-sky-400':
                      hackathon.status === 'draft',
                    'border-slate-500/20 bg-slate-500/10 text-slate-400':
                      hackathon.status === 'ended',
                  },
                )}
              >
                {hackathon.status === 'active'
                  ? 'Активен'
                  : hackathon.status === 'draft'
                    ? 'Черновик'
                    : 'Завершен'}
              </div>
            </div>
          </div>

          <div className='space-y-4 p-6'>
            <div className='space-y-1'>
              <h3 className='line-clamp-1 text-lg font-bold text-white transition-colors group-hover:text-sky-400'>
                {hackathon.name}
              </h3>
              <div className='flex items-center gap-2 text-xs text-slate-500'>
                <Calendar size={14} />
                <span>{hackathon.date}</span>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4 border-y border-slate-800/50 py-4'>
              <div className='space-y-1'>
                <span className='text-[10px] font-bold text-slate-500 uppercase'>
                  Участники
                </span>
                <div className='flex items-center gap-2 font-bold text-white'>
                  <Users size={14} className='text-sky-500' />
                  <span>{hackathon.participantsCount}</span>
                </div>
              </div>
              <div className='space-y-1'>
                <span className='text-[10px] font-bold text-slate-500 uppercase'>
                  Призовой фонд
                </span>
                <div className='flex items-center gap-2 font-bold text-white'>
                  <Trophy size={14} className='text-yellow-500' />
                  <span>{hackathon.prize}</span>
                </div>
              </div>
            </div>

            <div className='flex items-center gap-3 pt-2'>
              <button className='flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-800 py-2.5 text-sm font-bold text-white transition-all hover:bg-slate-700'>
                <Edit3 size={16} />
                Редактировать
              </button>
              <button className='rounded-xl bg-sky-500/10 p-2.5 text-sky-400 transition-all hover:bg-sky-500 hover:text-white'>
                <ExternalLink size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
