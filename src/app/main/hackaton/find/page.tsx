import React from "react";
import {
  Filter,
  Globe,
  Cpu,
  Landmark,
  Shield,
  Gamepad2,
  Sparkles,
} from "lucide-react";
import SearchInput from "@/ui/components/searchInput";
import CategoryButton from "@/ui/components/categoryButton";
import HackathonCard from '@/ui/layout/main/hackathonFind/ui/hackathonCard'


const CATEGORIES = [
  { name: "Все", icon: <Globe size={16} /> },
  { name: "Web3", icon: <Sparkles size={16} /> },
  { name: "AI", icon: <Cpu size={16} /> },
  { name: "Fintech", icon: <Landmark size={16} /> },
  { name: "Security", icon: <Shield size={16} /> },
  { name: "GameDev", icon: <Gamepad2 size={16} /> },
];

const HackathonFind: React.FC = () => {
  return (
    <div className="space-y-8 p-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white mb-4">Найти хакатон</h1>
          <div className="flex gap-4">
            <SearchInput
              placeholder="Название, технология или тема..."
              className="flex-1 "
            />
            <button className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 transition-all flex items-center gap-2 text-white">
              <Filter size={18} />
              <span className="hidden sm:inline">Фильтры</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide flex-wrap">
        {CATEGORIES.map((category, index) => (
          <CategoryButton
            key={index}
            name={category.name}
            icon={category.icon}
            isActive={index === 0}
          />
        ))}
      </div>
      <HackathonCard />
    </div>
  );
};

export default HackathonFind;
