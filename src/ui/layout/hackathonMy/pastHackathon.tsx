import React from "react";
import { ChevronRight, Trophy } from "lucide-react";

interface PastHackathon {
  id: string;
  title: string;
  place: string;
  prize: string;
}
const PAST: PastHackathon[] = [
  {
    id: "1",
    title: "Tinkoff Hack 2023",
    place: "3 Место",
    prize: "$1,500",
  },
  {
    id: "2",
    title: "Web3 Summit",
    place: "1 Место",
    prize: "$5,000",
  },
  {
    id: "3",
    title: "Green Code",
    place: "Финалист",
    prize: "$500",
  },
  {
    id: "4",
    title: "Hack&Change",
    place: "2 Место",
    prize: "$2,000",
  },
];

const PastHackathon: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-bold text-slate-500">
        Прошедшие ({PAST.length})
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PAST.map((hack) => (
          <div
            key={hack.id}
            className="bg-slate-900/30 border border-slate-800 p-4 rounded-xl flex items-center gap-4 opacity-70"
          >
            <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
              <Trophy size={18} className="text-slate-600" />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-white truncate">
                {hack.title}
              </h4>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                {hack.place} • {hack.prize}
              </p>
            </div>

            <button className="p-2 text-slate-500 hover:text-white rounded-lg hover:bg-slate-800 transition-all">
              <ChevronRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastHackathon;
