"use client"
import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

interface HackathonData {
  name: string;      
  wins: number;       
  losses: number;     
}

const data: HackathonData[] = [
  { name: "Янв", wins: 1, losses: 1 },
  { name: "Фев", wins: 0, losses: 1 },
  { name: "Мар", wins: 2, losses: 2 },
  { name: "Апр", wins: 1, losses: 2 },
  { name: "Май", wins: 3, losses: 2 },
  { name: "Июн", wins: 1, losses: 1 },
];


const HackathonResults: React.FC = () => {
  return (
    <div className='bg-slate-900/50 border border-slate-800 rounded-2xl p-6 h-96'>
      <h3 className="text-lg font-semibold mb-6 text-white">
        Результаты хакатонов (Победы vs Проигрыши)
      </h3>
       <div className="h-75 w-full">
            <ResponsiveContainer width="100%" height="85%">
        <BarChart 
          data={data} 
          barGap={8}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid 
            strokeDasharray="3 3"
            stroke="#1e293b"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            stroke="#64748b"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#94a3b8' }} //задает цвет текста делений (подписей)
          />
          <YAxis
            stroke="#64748b"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#94a3b8' }}
            allowDecimals={false}  // запрещает отображение дробных чисел
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#0f172a",
              border: "1px solid #1e293b",
              borderRadius: "12px",
              color: "#fff"
            }}
            cursor={{ fill: "rgba(255,255,255,0.05)" }}
            labelStyle={{ color: "#94a3b8", fontWeight: "bold" }}
          /> 
          <Legend  // это расположение легенды
            verticalAlign="top"
            align="right"
            iconType="circle"
            wrapperStyle={{ 
              paddingBottom: "20px", 
              fontSize: "12px",
              color: "#fff"
            }}
          />
          <Bar
            name="Победы" //название набора данных, отображается в легенде
            dataKey="wins"
            fill="#10b981"
            radius={[4, 4, 0, 0]}
            maxBarSize={50}
          />
          <Bar
            name="Проигрыши"
            dataKey="losses"
            fill="#ef4444"
            radius={[4, 4, 0, 0]}
            fillOpacity={0.6} // прозрачность заливки 
            maxBarSize={50}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default HackathonResults;