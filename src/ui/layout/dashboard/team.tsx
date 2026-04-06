import React from 'react';
import { ArrowRight, UserPlus, Users } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  color: string;
  avatar: string;
  email?: string;
  isOnline?: boolean;
}

export const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Александр В.',
      role: 'Tech Lead',
      avatar: 'AB',
      color: 'bg-indigo-500',
      email: 'alex@example.com',
      isOnline: true,
    },
    {
      id: '2',
      name: 'Мария К.',
      role: 'UI/UX Designer',
      avatar: 'MK',
      color: 'bg-pink-500',
      email: 'maria@example.com',
      isOnline: true,
    },
    {
      id: '3',
      name: 'Иван С.',
      role: 'Backend Developer',
      avatar: 'ИС',
      color: 'bg-sky-500',
      email: 'ivan@example.com',
      isOnline: false,
    },
    {
      id: '4',
      name: 'Елена П.',
      role: 'DevOps / Infra',
      avatar: 'ЕП',
      color: 'bg-emerald-500',
      email: 'elena@example.com',
      isOnline: true,
    },
  ];

  return (
    <div className='flex flex-col rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm xl:col-span-1'>
      <div className='mb-6 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Users size={20} className='text-sky-400' />
          <h2 className='text-lg font-bold text-white'>Моя Команда</h2>
        </div>
        <button className='rounded-lg p-1.5 text-slate-400 transition-all hover:bg-slate-800 hover:text-white'>
          <UserPlus size={18} />
        </button>
      </div>

      <div className='flex-1 space-y-4'>
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className='group flex cursor-pointer items-center gap-3'
          >
            <div
              className={`h-10 w-10 rounded-xl ${member.color} flex items-center justify-center text-sm font-bold text-white shadow-lg shadow-black/20 transition-transform group-hover:scale-105`}
            >
              {member.avatar}
            </div>
            <div className='min-w-0 flex-1'>
              <p className='truncate text-sm font-semibold text-slate-200'>
                {member.name}
              </p>
              <p className='truncate text-xs text-slate-500'>{member.role}</p>
            </div>
            <div
              className={`h-2 w-2 rounded-full ${member.isOnline ? 'bg-emerald-500 shadow-lime-600' : 'bg-rose-700'}`}
            />
          </div>
        ))}
      </div>

      <button className='group mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700/50 bg-slate-800/50 px-4 py-3 text-sm font-semibold text-slate-300 transition-all hover:bg-slate-800'>
        Управление командой
        <ArrowRight
          size={16}
          className='transition-transform group-hover:translate-x-1'
        />
      </button>
    </div>
  );
};
