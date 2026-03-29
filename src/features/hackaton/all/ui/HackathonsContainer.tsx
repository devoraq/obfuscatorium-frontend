'use client';

import React from 'react';
import { Bookmark, Zap, Trophy } from 'lucide-react';
import { useHackathons } from '../model/useHackathons';
import { HackathonsSection } from '@/ui/layout/hackathonAll/HackathonsSection';

export const HackathonsContainer: React.FC = () => {
  const { myHackathons, activeHackathons, availableHackathons } = useHackathons();

  return (
    <div className="space-y-12">
      <HackathonsSection 
        title="Мои хакатоны"
        icon={Bookmark}
        iconColor="text-sky-400"
        badgeColor="bg-sky-500/10 text-sky-400 border-sky-500/20"
        data={myHackathons}
      />
      <HackathonsSection 
        title="Активные хакатоны"
        icon={Zap}
        iconColor="text-amber-400"
        badgeColor="bg-amber-500/10 text-amber-400 border-amber-500/20"
        data={activeHackathons}
      />
      <HackathonsSection 
        title="Доступные хакатоны"
        icon={Trophy}
        iconColor="text-indigo-400"
        badgeColor="bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
        data={availableHackathons}
      />
    </div>
  );
};