'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import Events from '@/entities/contests/ui/events';
import { Contest } from '@/entities/contests/model/contestSlice';

interface HackathonsSectionProps {
  title: string;
  icon: LucideIcon;
  iconColor: string;
  badgeColor: string;
  data: Contest[];
}

export const HackathonsSection: React.FC<HackathonsSectionProps> = ({ 
  title, 
  icon: Icon, 
  iconColor, 
  badgeColor, 
  data 
}) => {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2">
        <Icon size={20} className={iconColor} />
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <span className={`px-2 py-0.5 ${badgeColor} text-[10px] font-bold rounded-full border`}>
          {data.length}
        </span>
      </div>
      <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 backdrop-blur-sm">
        <Events data={data} />
      </div>
    </section>
  );
};