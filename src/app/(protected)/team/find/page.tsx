"use client";

import React from 'react';
import Sidebar from '@/ui/layout/nav/sideBar';
import Header from '@/ui/components/header';
import { UserPlus,  Star, User } from "lucide-react";
import SearchInput from '@/ui/components/searchInput'
import Button from  '@/ui/components/button'
// в будущем можно добавить avatar
interface Candidate {
  id: string;
  name: string;
  role: string;
  skills: string[];
}

const candidates: Candidate[] = [
  {
    id: "1",
    name: "Артем Волков",
    role: "Data Scientist",
    skills: ["Python", "SQL"],
  },
  {
    id: "2",
    name: "Дарья Соколова",
    role: "Frontend Developer",
    skills: ["React", "TS", "Tailwind"],
  },
  {
    id: "3",
    name: "Анна Ли",
    role: "Mobile Developer",
    skills: ["Flutter", "Dart", "Firebase"],
  },
  {
    id: "4",
    name: "Олег Мухин",
    role: "Backend Engineer",
    skills: ["Node.js", "Redis", "Docker"],
  },
  {
    id: "5",
    name: "Юлия Кравц",
    role: "Product Designer",
    skills: ["Figma", "Prototyping"],
  },
  {
    id: "6",
    name: "Михаил Иванов",
    role: "QA Automation",
    skills: ["Selenium", "Java", "JUnit"],
  },
];

const TeamFind: React.FC = () => {
  return (
    <div className="flex h-screen w-full bg-slate-950 text-slate-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Header />
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-slate-950/50 hide-scrollbar">
          <div className="p-8 space-y-8 animate-fadeIn ">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  Найти участников
                </h1>
                <p className="text-slate-400">
                  Найдите идеальных партнеров для вашего следующего хакатона!
                </p>
              </div>

          <SearchInput
          placeholder='Поиск...'
          className='w-full md:w-80'
          />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {candidates.map((candidate) => (
                <div
                  key={candidate.id}
                  className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl hover:border-sky-500/30 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center">
                      <User className="w-8 h-8 text-slate-400" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white">{candidate.name}</h3>
                  <p className="text-sm text-sky-400 mb-4">{candidate.role}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {candidate.skills.map((skill, item) => (
                      <span
                        key={item}
                        className="px-2 py-1 bg-slate-800 text-slate-400 text-[10px] font-semibold rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      icon = {UserPlus}
                      text = 'Пригласить'
                    />
                    <button className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-400 rounded-xl">  
                      <Star size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>

  );
};

export default TeamFind;
