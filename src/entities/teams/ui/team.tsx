'use client';

import React from 'react';

import { useAppSelector } from '@/store/hooks';

export const Team: React.FC = () => {
  const team = useAppSelector((state) => state.teams.participants);
  return (
    <div className='flex-1 space-y-4'>
      {team.map((member) => (
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
  );
};
