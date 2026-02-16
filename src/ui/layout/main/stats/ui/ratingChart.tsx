import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"; 

interface DataItem {
  name: string;
  projects: number;
  commits: number;
  score: number;
}
//score это показатель активности, нужно будет придумать как его подсчитывать и какие данные брать, это пока просто заготовка, если не нужно будет просто уберем
//комментарии сделала для себя, мне так будет удобнее в дальнейшем работать 
const data: DataItem[] = [
  { name: "Янв", projects: 2, commits: 45, score: 780 },
  { name: "Фев", projects: 1, commits: 52, score: 850 },
  { name: "Мар", projects: 4, commits: 120, score: 1200 },
  { name: "Апр", projects: 3, commits: 88, score: 1100 },
  { name: "Май", projects: 5, commits: 140, score: 1600 },
  { name: "Июн", projects: 2, commits: 90, score: 1450 },
];

const RatingChart: React.FC = () => {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 h-96">
      <h3 className="text-lg font-semibold mb-6">Динамика рейтинга</h3>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={data}>
          {/* сетка */}
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#1e293b"
            vertical={false}
          />

          {/* Оси */}
          <XAxis
            dataKey="name"
            stroke="#64748b"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#64748b"
            fontSize={12}
            tickLine={false}
            axisLine={false} //это линии по вертикали
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: "12px",
            }}
            itemStyle={{ color: "#fff" }} // стиль текста
          />

          {/* Область графика */}
          <Area
            type="monotone" // тип линии
            dataKey="score"
            stroke="#0ea5e9"
            strokeWidth={3}
            fill="rgba(14, 165, 233, 0.3)" // это заливка графика
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;
