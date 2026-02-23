"use client";

import React from 'react';
import { useAppSelector } from '@/store/hooks';

const Team: React.FC = () => {
  const team = useAppSelector((state) => state.teams.participants);
  return (
    <div className="space-y-4 flex-1">
      {team.map((member) => (
        <div
          key={member.id}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div
            className={`w-10 h-10 rounded-xl ${member.color} flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-black/20 group-hover:scale-105 transition-transform`}>
            {member.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-200 truncate">
              {member.name}
            </p>
            <p className="text-xs text-slate-500 truncate">{member.role}</p>
          </div>
          <div
            className={`w-2 h-2 rounded-full ${member.isOnline ? "bg-emerald-500 shadow-lime-600" : "bg-rose-700"}`}
          />
        </div>
      ))}
    </div>
  )
}

export default Team;