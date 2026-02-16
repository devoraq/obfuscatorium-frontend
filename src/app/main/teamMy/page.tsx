"use client";

import React from "react";
import { MessageSquare, Users, UserPlus } from "lucide-react";
import Button from  '@/ui/components/button'
import HackatonTeam from "@/ui/layout/main/teamMy/hackatonTeam";
import MemberTeam from "@/ui/layout/main/teamMy/memberTeam";

const TeamMy: React.FC = () => {
  return (
    <div className="space-y-8 p-8 animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-sky-500/10 rounded-lg">
              <Users size={20} className="text-sky-400" />
            </div>
            <h1 className="text-3xl font-bold text-white">
              Команда: <span className="text-sky-400">CodeCrafters</span>
            </h1>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="px-5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 transition-all text-sm font-semibold flex items-center gap-2 text-white">
            <MessageSquare size={18} />
            <span>Чат команды</span>
          </button>
         <Button 
                icon = {UserPlus}
                text = 'Пригласить участника'
                className="flex px-5  text-sm font-semibold"
              />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 text-sm font-semibold ">
        <MemberTeam />
        <HackatonTeam />
      </div>
    </div>
  );
};

export default TeamMy;


