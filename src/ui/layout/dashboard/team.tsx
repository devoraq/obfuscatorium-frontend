import React from "react";
import { Users, ArrowRight, UserPlus } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  color: string;
  avatar: string;
  email?: string;
  isOnline?: boolean;
}
const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "Александр В.",
      role: "Tech Lead",
      avatar: "AB",
      color: "bg-indigo-500",
      email: "alex@example.com",
      isOnline: true,
    },
    {
      id: "2",
      name: "Мария К.",
      role: "UI/UX Designer",
      avatar: "MK",
      color: "bg-pink-500",
      email: "maria@example.com",
      isOnline: true,
    },
    {
      id: "3",
      name: "Иван С.",
      role: "Backend Developer",
      avatar: "ИС",
      color: "bg-sky-500",
      email: "ivan@example.com",
      isOnline: false,
    },
    {
      id: "4",
      name: "Елена П.",
      role: "DevOps / Infra",
      avatar: "ЕП",
      color: "bg-emerald-500",
      email: "elena@example.com",
      isOnline: true,
    },
  ];

  return (
    <div className="xl:col-span-1 bg-slate-900/50 border border-slate-800 rounded-3xl p-6 backdrop-blur-sm flex flex-col">
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Users size={20} className="text-sky-400" />
          <h2 className="text-lg font-bold text-white">Моя Команда</h2>
        </div>
        <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all">
          <UserPlus size={18} />
        </button>
      </div>

      <div className="space-y-4 flex-1">
        {teamMembers.map((member) => (
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

      <button className="w-full mt-6 py-3 px-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 text-slate-300 text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group">
        Управление командой
        <ArrowRight
          size={16}
          className="group-hover:translate-x-1 transition-transform"/>
      </button>
    </div>
  );
};

export default Team;
