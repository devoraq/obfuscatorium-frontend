import React from 'react';
import { Award, Calendar, Target, Trophy } from 'lucide-react';

interface Hackathon {
  id: string;
  name: string;
  date: string;
  status: 'Ongoing' | 'Upcoming' | 'Completed';
  progress: string;
  result?: string;
}
const HACKATHONS: Hackathon[] = [
  {
    id: 'h1',
    name: 'InnoTech Moscow 2026',
    date: '12-14 Окт',
    status: 'Ongoing',
    progress: 'Stage 2/3',
    result: 'В процессе',
  },
  {
    id: 'h2',
    name: 'AI Global Hack',
    date: '25-27 Окт',
    status: 'Upcoming',
    progress: 'Registered',
    result: 'Регистрация',
  },
  {
    id: 'h3',
    name: 'Web3 Builders 2026',
    date: '15-17 Дек 2023',
    status: 'Completed',
    progress: '2nd Place',
    result: '2 место',
  },
];
const getHackathonColors = (status: string) => {
  switch (status) {
    case 'Ongoing':
      return {
        icon: 'text-sky-400',
        bg: 'bg-sky-400/10',
        status: 'border-sky-500/50 text-sky-400 bg-sky-500/5',
      };
    case 'Upcoming':
      return {
        icon: 'text-indigo-400',
        bg: 'bg-indigo-400/10',
        status: 'border-indigo-500/50 text-indigo-400 bg-indigo-500/5',
      };
    case 'Completed':
      return {
        icon: 'text-amber-400',
        bg: 'bg-amber-400/10',
        status: 'border-slate-700 text-slate-500 bg-slate-800/30',
      };
    default:
      return {
        icon: 'text-slate-400',
        bg: 'bg-slate-400/10',
        status: 'border-slate-700 text-slate-500 bg-slate-800/30',
      };
  }
};
export const HackatonTeam: React.FC = () => (
  <section className='space-y-6'>
    <h3 className='flex items-center gap-2 text-xl font-bold text-white'>
      <Trophy size={20} className='text-amber-400' />
      Участие в хакатонах
    </h3>

    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {HACKATHONS.map((hack) => {
        const colors = getHackathonColors(hack.status);
        return (
          <div
            key={hack.id}
            className='group cursor-pointer rounded-2xl border border-slate-800/60 bg-slate-900/40 p-4 transition-all hover:border-slate-700'
          >
            <div className='flex items-start gap-4'>
              <div
                className={`h-12 w-12 rounded-xl ${colors.bg} flex items-center justify-center ${colors.icon} shrink-0 transition-transform group-hover:scale-110`}
              >
                {hack.status === 'Ongoing' && <Target size={24} />}
                {hack.status === 'Upcoming' && <Calendar size={24} />}
                {hack.status === 'Completed' && <Award size={24} />}
              </div>

              <div className='min-w-0 flex-1'>
                <h4 className='text-sm font-bold text-white'>{hack.name}</h4>
                <div className='mt-1 flex items-center gap-3'>
                  <div className='flex items-center gap-1 text-[11px] text-slate-500'>
                    <Calendar size={12} />
                    <span>{hack.date}</span>
                  </div>
                  <div className='flex items-center gap-1 text-[11px] text-slate-500'>
                    <Target size={12} />
                    <span>{hack.progress}</span>
                  </div>
                </div>
              </div>

              <div className='text-right'>
                <span
                  className={`rounded-md border px-2 py-1 text-[10px] font-extrabold uppercase ${colors.status}`}
                >
                  {hack.status}
                </span>
                {hack.result && (
                  <p className='mt-1 text-[10px] text-slate-600'>
                    {hack.result}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);
