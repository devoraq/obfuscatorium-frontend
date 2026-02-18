import React from 'react';
import { Trophy } from 'lucide-react';

import ActiveHackathon from '@/ui/layout/main/hackathonMy/ui/activeHackathon'
import PastHackathon from '@/ui/layout/main/hackathonMy/ui/pastHackathon'

const HackathonMy: React.FC = () => {
  return (
    <div className="space-y-8 p-8 animate-fadeIn">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-sky-500/10 rounded-lg">
            <Trophy size={24} className="text-sky-400" />
          </div>
          <h1 className="text-3xl font-bold text-white">Мои хакатоны</h1>
        </div>
        <p className="text-slate-400 ml-14">
          Отслеживайте прогресс и дедлайны ваших текущих проектов
        </p>
      </div>
     < ActiveHackathon/>
      <PastHackathon />
    </div>
  );
};

export default HackathonMy;