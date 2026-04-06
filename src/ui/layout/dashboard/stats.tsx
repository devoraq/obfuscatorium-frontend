import React from 'react';
import { Award, Briefcase, Trophy, Zap } from 'lucide-react';

import { StatItem } from '@/entities/stats/model/stats.slice';

export const Stats: React.FC = () => {
  const stats: StatItem[] = [
    {
      id: '1',
      key: 'active_hackathons',
      label: 'Активные хакатоны',
      value: 2,
      icon: Trophy,
      color: 'text-amber-400',
      bg: 'bg-amber-400/10',
    },
    {
      id: '2',
      key: 'my_projects',
      label: 'Мои проекты',
      value: 12,
      icon: Briefcase,
      color: 'text-sky-400',
      bg: 'bg-sky-400/10',
    },
    {
      id: '3',
      key: 'total_participations',
      label: 'Всего участий',
      value: 28,
      icon: Zap,
      color: 'text-indigo-400',
      bg: 'bg-indigo-400/10',
    },
    {
      id: '4',
      key: 'wins',
      label: 'Победы',
      value: 5,
      icon: Award,
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10',
    },
  ];

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
