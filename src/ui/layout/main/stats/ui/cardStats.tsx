import React from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface CardData {
  id: number;
  label: string;
  value: string;
  trend: string;
}

const data: CardData[] = [
  { id: 1, label: "Участий в хакатонах", value: "24", trend: "" },
  { id: 2, label: "Победы", value: "8", trend: "+3" },
  { id: 3, label: "Проектов создано", value: "15", trend: "+3" },
  { id: 4, label: "Призовой фонд", value: "$12,500", trend: "-$2,400" },
];

const CardStats: React.FC = () => {
  const getTrendColor = (trend: string): string => {
    if (trend.startsWith("+")) return "text-green-500";
    if (trend.startsWith("-")) return "text-red-500";
    return "text-blue-500";
  };

  const getTrendIcon = (trend: string) => {
    if (trend.startsWith("+")) {
      return <TrendingUp className="w-3 h-3" />;
    }
    if (trend.startsWith("-")) {
      return <TrendingDown className="w-3 h-3" />;
    }
    return <Minus className="w-3 h-3" />;
  };

  return (
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl group hover:border-slate-700 transition-all hover:scale-105"
        >
          <p className="text-sm text-slate-500 font-medium mb-1">
            {item.label}
          </p>
          <div className="flex items-end justify-between">
            <p className="text-2xl font-bold text-white">{item.value}</p>
            <span
              className={`flex items-center gap-1 text-xs font-bold ${getTrendColor(item.trend)}`}
            >
              {getTrendIcon(item.trend)}
              {item.trend}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardStats;
