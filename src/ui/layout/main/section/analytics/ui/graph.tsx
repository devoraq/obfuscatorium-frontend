import React from "react";
import { Activity } from "lucide-react";

interface GraphData {
  id: string;
  days: string[];
  activityData: number[];
}

const Graph: React.FC = () => {
    
  const graphData: GraphData = {
    id: "1",
    days: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"],
    activityData: [40, 70, 45, 20, 65, 80, 50],
  };

  return (
    <div className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-3xl p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Activity size={20} className="text-sky-400" />
          Активность за неделю
        </h3>
      </div>

      <div className="h-48 w-full flex items-end gap-2 px-2">
        {graphData.activityData.map((height, index) => (
          <div
            key={`${graphData.id}-${index}`}
            className="flex-1 flex flex-col items-center gap-2 h-full group"
          >
            <div className="w-full flex-1 flex items-end">
              {/* столбец */}
              <div
                className="w-full bg-linear-to-t from-sky-600 to-sky-400 rounded-t-lg transition-all duration-300 group-hover:brightness-125"
                style={{ height: `${height}%` }}
              />
            </div>
            {/* день недели */}
            <span className="text-[10px] text-slate-500 font-bold">
              {graphData.days[index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Graph;
