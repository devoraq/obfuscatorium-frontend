'use client';

import React from 'react';

import { useAppSelector } from '@/store/hooks';

export const Stats: React.FC = () => {
  const stats = useAppSelector((state) => state.stats.stats);
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.id}
            className='group rounded-2xl border border-slate-800 bg-slate-900/50 p-5 transition-colors hover:border-slate-700'
            data-stat-key={stat.key}
          >
            <div className='mb-3 flex items-center justify-between'>
              <div
                className={`${stat.bg} ${stat.color} rounded-xl p-2.5 transition-transform group-hover:scale-110`}
              >
                <Icon size={22} />
              </div>
              <span className='text-xs font-bold text-slate-500 uppercase'>
                {stat.key === 'wins' ? 'Достижения' : 'Статистика'}
              </span>
            </div>

            <p className='text-2xl font-black text-white md:text-3xl'>
              {stat.value}
              {stat.key === 'total_participations' && (
                <span className='ml-1 text-sm text-slate-500'>раз</span>
              )}
            </p>

            <p className='mt-1 text-sm text-slate-400'>{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
};
