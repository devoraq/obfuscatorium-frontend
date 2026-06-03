import React from 'react';
import { CheckCircle2, ChevronRight, Clock, Trophy } from 'lucide-react';

interface ActiveHackathons {
  id: string;
  title: string;
  role: string;
  deadline: string;
  tasksCompleted: number;
  tasksTotal: number;
}
const ACTIVE: ActiveHackathons[] = [
  {
    id: '1',
    title: 'InnoTech Moscow 2026',
    role: 'Lead Developer',
    deadline: '42 часа',
    tasksCompleted: 8,
    tasksTotal: 12,
  },
  {
    id: '2',
    title: 'AI',
    role: 'ML Engineer',
    deadline: '3 дня',
    tasksCompleted: 5,
    tasksTotal: 10,
  },
];
export const ActiveHackathon: React.FC = () => (
  <div className='space-y-6'>
    <h2 className='flex items-center gap-2 text-lg font-bold text-white'>
      <div className='h-2 w-2 animate-pulse rounded-full bg-green-500' />
      Активные ({ACTIVE.length})
    </h2>

    <div className='grid grid-cols-1 gap-4'>
      {ACTIVE.map((hack) => (
        <div
          key={hack.id}
          className='group flex cursor-pointer flex-col items-center gap-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-sky-500/30 md:flex-row'
        >
          <div className='flex h-24 w-full shrink-0 items-center justify-center rounded-xl bg-slate-800 md:w-24'>
            <Trophy size={32} className='text-slate-600' />
          </div>

          <div className='flex-1 space-y-3 text-center md:text-left'>
            <h3 className='text-xl font-bold text-white transition-colors group-hover:text-sky-400'>
              {hack.title}
            </h3>
            <p className='text-sm text-slate-500'>
              Ваша роль:{' '}
              <span className='font-medium text-white'>{hack.role}</span>
            </p>

            <div className='flex flex-wrap justify-center gap-4 pt-2 md:justify-start'>
              <div className='flex items-center gap-1.5 text-xs text-slate-400'>
                <Clock size={14} className='text-sky-500' />
                <span>Дедлайн через {hack.deadline}</span>
              </div>
              <div className='flex items-center gap-1.5 text-xs text-slate-400'>
                <CheckCircle2 size={14} className='text-green-500' />
                <span>
                  Задач выполнено: {hack.tasksCompleted}/{hack.tasksTotal}
                </span>
              </div>
            </div>
          </div>

          <button className='flex w-full justify-end rounded-xl bg-slate-800 p-3 transition-all group-hover:bg-sky-500 md:w-10 md:justify-center'>
            <ChevronRight size={20} className='items-end text-white' />
          </button>
        </div>
      ))}
    </div>
  </div>
);
