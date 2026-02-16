import React from "react";
import { Trophy, Briefcase, Zap, Award, LucideIcon } from "lucide-react";

interface StatItem {
  id: string;
  label: string;
  value: number | string;
  icon: LucideIcon;
  color: string;
  bg: string;
  key: string;
}

const Stats: React.FC = () => {
  const stats: StatItem[] = [
    {
      id: "1",
      key: "active_hackathons",
      label: "Активные хакатоны",
      value: 2,
      icon: Trophy,
      color: "text-amber-400",
      bg: "bg-amber-400/10",
    },
    {
      id: "2",
      key: "my_projects",
      label: "Мои проекты",
      value: 12,
      icon: Briefcase,
      color: "text-sky-400",
      bg: "bg-sky-400/10",
    },
    {
      id: "3",
      key: "total_participations",
      label: "Всего участий",
      value: 28,
      icon: Zap,
      color: "text-indigo-400",
      bg: "bg-indigo-400/10",
    },
    {
      id: "4",
      key: "wins",
      label: "Победы",
      value: 5,
      icon: Award,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.id}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-colors group"
            data-stat-key={stat.key}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`${stat.bg} ${stat.color} p-2.5 rounded-xl group-hover:scale-110 transition-transform`}>
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
  );
};

export default Stats;