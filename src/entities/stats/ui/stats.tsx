"use client";

import React from 'react';
import { useAppSelector } from '@/store/hooks';
import { STATS_ICON_MAP, STATS_STYLES } from '@/entities/stats/model/statsSlice'

const Stats: React.FC = () => {
    const stats = useAppSelector((state) => state.stats.stats); 
  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {

 const Icon = STATS_ICON_MAP[stat.iconName];

 const styles = STATS_STYLES[stat.iconName] || {
          color: "text-slate-400",
          bg: "bg-slate-400/10",
        };

         return (
          <div
            key={stat.id}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-colors group"
            data-stat-key={stat.key}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`${styles.bg} ${styles.color} p-2.5 rounded-xl group-hover:scale-110 transition-transform`}>
                <Icon size={22} />
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase">
               {stat.key === 'wins' ? 'Достижения' : 'Статистика'}
              </span>
            </div>

            <p className="text-2xl md:text-3xl font-black text-white">
              {stat.value}
              {stat.key === "total_participations" && (
                <span className="text-sm text-slate-500 ml-1">раз</span>
              )}
            </p>

            <p className="text-sm text-slate-400 mt-1">
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  )
}

export default Stats;