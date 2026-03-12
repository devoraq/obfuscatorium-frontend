import React from "react";
import { ChevronRight, Clock, CheckCircle2, Trophy } from "lucide-react";

interface ActiveHackathons {
  id: string;
  title: string;
  role: string;
  deadline: string;
  tasksCompleted: number;
  tasksTotal: number;
}
const ACTIVE: ActiveHackathons[] = [
  {
    id: "1",
    title: "InnoTech Moscow 2026",
    role: "Lead Developer",
    deadline: "42 часа",
    tasksCompleted: 8,
    tasksTotal: 12,
  },
  {
    id: "2",
    title: "AI",
    role: "ML Engineer",
    deadline: "3 дня",
    tasksCompleted: 5,
    tasksTotal: 10,
  },
];
const ActiveHackathon: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-bold text-white flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        Активные ({ACTIVE.length})
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {ACTIVE.map((hack) => (
          <div
            key={hack.id}
            className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6 group hover:border-sky-500/30 transition-all cursor-pointer"
          >
            <div className="w-full md:w-24 h-24 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
              <Trophy size={32} className="text-slate-600" />
            </div>

            <div className="flex-1 space-y-3 text-center md:text-left">
              <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                {hack.title}
              </h3>
              <p className="text-sm text-slate-500">
                Ваша роль:{" "}
                <span className="text-white font-medium">{hack.role}</span>
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock size={14} className="text-sky-500" />
                  <span>Дедлайн через {hack.deadline}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <CheckCircle2 size={14} className="text-green-500" />
                  <span>
                    Задач выполнено: {hack.tasksCompleted}/{hack.tasksTotal}
                  </span>
                </div>
              </div>
            </div>

            <button className="p-3 bg-slate-800 rounded-xl group-hover:bg-sky-500 transition-all w-full md:w-10 flex justify-end md:justify-center">
              <ChevronRight size={20} className="text-white items-end" />
            </button>
          </div>
        ))}
      </div>
    </div>  
  );
};

export default ActiveHackathon;
