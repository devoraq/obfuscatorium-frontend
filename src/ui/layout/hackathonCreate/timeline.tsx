import React from "react";
import Input from "@/ui/components/forms-elemets/input";

import { Clock, Plus, Trash2 } from "lucide-react";

const Timeline: React.FC = () => {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 space-y-3 sm:space-y-4">
      <div className="flex items-center gap-2 text-purple-400">
        <Clock size={16} className="shrink-0" />
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
          Таймлайн
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center gap-2 w-full bg-slate-800/30 p-2 rounded-lg group">
          <div className="flex items-center gap-2 sm:gap-3 text-xs text-slate-400 min-w-0 flex-1">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-sky-500 shrink-0"></div>
            <Input
              id="stage-name"
              placeholder="Регистрация"
              className="w-full bg-transparent border-none p-0 text-xs sm:text-sm text-slate-300 focus:ring-0 outline-none placeholder:text-slate-600 truncate"
            />
          </div>

          <button className="shrink-0 text-slate-600 hover:text-red-400 transition-all ml-1">
            <Trash2 size={12} className="sm:w-3.5 sm:h-3.5" />
          </button>
        </div>

        <button className="w-full py-2 sm:py-2.5 border border-dashed border-slate-700 rounded-lg text-[10px] sm:text-xs text-slate-500 hover:text-slate-300 hover:border-slate-500 transition-all flex items-center justify-center gap-1">
          <Plus size={12} className="sm:w-3.5 sm:h-3.5 shrink-0" />
          <span className="truncate">Добавить этап</span>
        </button>
      </div>
    </div>
  );
};

export default Timeline;
