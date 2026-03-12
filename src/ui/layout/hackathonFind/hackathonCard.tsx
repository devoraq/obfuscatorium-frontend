
import React from "react";
import { Contest } from "@/entities/contests/model/contestSlice";
import { Calendar, Globe, Cpu, Landmark, Shield, Gamepad2, Sparkles, Users, Trophy, Tag } from "lucide-react";



interface CategoryIcons {
  [key: string]: React.ReactNode;
}

const CATEGORY_ICONS: CategoryIcons = {
  Web3: <Sparkles className="w-5 h-5 text-white" />,
  AI: <Cpu className="w-5 h-5 text-white" />,
  Fintech: <Landmark className="w-5 h-5 text-white" />,
  Security: <Shield className="w-5 h-5 text-white" />,
  GameDev: <Gamepad2 className="w-5 h-5 text-white" />,
  Other: <Globe className="w-5 h-5 text-white" />,
};
interface Props {
  contest: Contest;
}

const HackathonCard: React.FC<Props> = ({ contest }) => {
  const statusLabel =
    contest.status === "ongoing"
      ? "Открыт"
      : contest.status === "upcoming"
      ? "Скоро"
      : "Завершен";

  const statusDotColor =
    contest.status === "ongoing"
      ? "bg-green-500"
      : contest.status === "upcoming"
      ? "bg-amber-500"
      : "bg-gray-500";

  return (
    <div
      className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800
      rounded-2xl overflow-hidden hover:border-sky-500/50
      transition-all duration-300 hover:-translate-y-1"
    >
      <div
        className="h-24 bg-linear-to-br from-slate-800 to-slate-900
        flex items-center justify-between p-4
        group-hover:from-sky-900/30 group-hover:to-purple-900/30
        transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          <div
            className="flex items-center gap-1.5 px-2 py-1
            bg-black/40 backdrop-blur-sm rounded-lg"
          >
            <div className={`w-2 h-2 rounded-full ${statusDotColor}`} />

            {/* статус */}
            {/* <span className="text-xs font-medium text-white">
              {statusLabel}
            </span> */}
          </div>

          {contest.participantsCount && (
            <div
              className="flex items-center gap-1.5 px-2 py-1
              bg-black/40 backdrop-blur-sm rounded-lg"
            >
              <Users size={12} className="text-slate-400" />

              {/* участники */}
              {/* <span className="text-xs text-slate-300">
                {contest.participantsCount}
              </span> */}
            </div>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3
          className="text-xl font-bold text-white mb-3
          group-hover:text-sky-400 transition-colors duration-300
          line-clamp-2"
        >
          {contest.title}
        </h3>

        <div
          className="flex items-center justify-between mb-6
          text-sm bg-slate-800/30 rounded-xl p-3
          border border-slate-700/50"
        >
          <div className="flex items-center gap-2 text-slate-400">
            <Calendar size={14} className="text-sky-400" />

            {/* дата */}
            {/* <span>{contest.month} {contest.day}</span> */}
          </div>

          {contest.prize && (
            <div className="flex items-center gap-2 text-amber-400 font-semibold">
              <Trophy size={14} />

              {/* приз */}
              {/* <span>{contest.prize}</span> */}
            </div>
          )}
        </div>

        <button
          className="w-full py-3 bg-slate-800 hover:bg-sky-600
          text-white text-sm font-semibold rounded-xl
          transition-all duration-300
          hover:shadow-lg hover:shadow-sky-600/20
          flex items-center justify-center gap-2
          border border-slate-700 hover:border-sky-400"
        >
          {/* Подробнее */}
          {/* Подробнее */}
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default HackathonCard;