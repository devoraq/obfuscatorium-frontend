import React from 'react';
import {
  TrendingUp,
  MousePointer2,
  Clock,
  BarChart,
  LucideIcon,
} from "lucide-react";

interface Metric {
  id: string;
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  trend: string;
}

const Metrics: React.FC = () => {
    // это все имитация бд
  const metricData: Metric[] = [
    {
      id: "ctr",
      label: "CTR Профиля",
      value: "4.2%",
      icon: MousePointer2,
      color: "text-indigo-400",
      bg: "bg-indigo-400/10",
      trend: "+12%"
    },
    {
      id: "time",
      label: "Время в коде",
      value: "32ч/нед",
      icon: Clock,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      trend: "+5ч"
    },
    {
      id: "views",
      label: "Просмотры проектов",
      value: "1,240",
      icon: BarChart,
      color: "text-sky-400",
      bg: "bg-sky-400/10",
      trend: "+23%"
    }
  ];

  return (
    <div className="space-y-4">
      {metricData.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 flex items-center justify-between group hover:border-slate-700 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl ${item.bg} ${item.color}`}>
                <Icon size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                  {item.label}
                </p>
                <p className="text-2xl font-black text-white">
                  {item.value}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-emerald-500">
              <TrendingUp size={16} />
              <span className="text-xs font-bold">{item.trend}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Metrics;