import React from "react";
import cn from "classnames";
import { Trophy, Calendar, Users, Edit3, ExternalLink } from "lucide-react";

interface Hackathon {
  id: string;
  name: string;
  date: string;
  participantsCount: number;
  status: "active" | "draft" | "ended";
  prize?: string;
}

const events_my: Hackathon[] = [
  {
    id: "1",
    name: "Global AI Challenge 2024",
    date: "15 Мар - 20 Мар, 2026",
    participantsCount: 1240,
    status: "active",
    prize: "$50,000",
  },
  {
    id: "2",
    name: "Web3 Future Hack",
    date: "10 Апр - 12 Апр, 2026",
    participantsCount: 450,
    status: "draft",
    prize: "$50,000",
  },
];

export const MyHackathons: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
          Мои мероприятия ({events_my.length})
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {events_my.map((hackathon) => (
          <div
            key={hackathon.id}
            className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700 transition-all group"
          >
            <div className="relative h-40 overflow-hidden">
              {/* у страницы хакатона есть картинка(которую пользователь добаляет), это место под нее */}
              <div className="absolute top-4 left-4">
                <div
                  className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border",
                    {
                      "bg-emerald-500/10 text-emerald-400 border-emerald-500/20":
                        hackathon.status === "active",
                      "bg-sky-500/10 text-sky-400 border-sky-500/20":
                        hackathon.status === "draft",
                      "bg-slate-500/10 text-slate-400 border-slate-500/20":
                        hackathon.status === "ended",
                    },
                  )}
                >
                  {hackathon.status === "active"
                    ? "Активен"
                    : hackathon.status === "draft"
                      ? "Черновик"
                      : "Завершен"}
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors line-clamp-1">
                  {hackathon.name}
                </h3>
                <div className="flex items-center gap-2 text-slate-500 text-xs">
                  <Calendar size={14} />
                  <span>{hackathon.date}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-800/50">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">
                    Участники
                  </span>
                  <div className="flex items-center gap-2 text-white font-bold">
                    <Users size={14} className="text-sky-500" />
                    <span>{hackathon.participantsCount}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">
                    Призовой фонд
                  </span>
                  <div className="flex items-center gap-2 text-white font-bold">
                    <Trophy size={14} className="text-yellow-500" />
                    <span>{hackathon.prize}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold rounded-xl transition-all">
                  <Edit3 size={16} />
                  Редактировать
                </button>
                <button className="p-2.5 bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-white rounded-xl transition-all">
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
