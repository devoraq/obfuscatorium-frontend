'use client';

import React from 'react';
import { Star, User, UserPlus } from 'lucide-react';

import { Button } from '@/ui/components/button';
import { Header } from '@/ui/components/header';
import { SearchInput } from '@/ui/components/searchInput';
import { Sidebar } from '@/ui/layout/nav/sideBar';
// в будущем можно добавить avatar
interface Candidate {
  id: string;
  name: string;
  role: string;
  skills: string[];
}

const candidates: Candidate[] = [
  {
    id: '1',
    name: 'Артем Волков',
    role: 'Data Scientist',
    skills: ['Python', 'SQL'],
  },
  {
    id: '2',
    name: 'Дарья Соколова',
    role: 'Frontend Developer',
    skills: ['React', 'TS', 'Tailwind'],
  },
  {
    id: '3',
    name: 'Анна Ли',
    role: 'Mobile Developer',
    skills: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    id: '4',
    name: 'Олег Мухин',
    role: 'Backend Engineer',
    skills: ['Node.js', 'Redis', 'Docker'],
  },
  {
    id: '5',
    name: 'Юлия Кравц',
    role: 'Product Designer',
    skills: ['Figma', 'Prototyping'],
  },
  {
    id: '6',
    name: 'Михаил Иванов',
    role: 'QA Automation',
    skills: ['Selenium', 'Java', 'JUnit'],
  },
];

const TeamFind: React.FC = () => (
  <div className='flex h-screen w-full overflow-hidden bg-slate-950 text-slate-100'>
    <Sidebar />
    <div className='relative flex flex-1 flex-col overflow-hidden'>
      <Header />
      <main className='hide-scrollbar flex-1 overflow-x-hidden overflow-y-auto bg-slate-950/50'>
        <div className='animate-fadeIn space-y-8 p-8'>
          <div className='flex flex-col justify-between gap-6 md:flex-row md:items-end'>
            <div>
              <h1 className='mb-2 text-3xl font-bold text-white'>
                Найти участников
              </h1>
              <p className='text-slate-400'>
                Найдите идеальных партнеров для вашего следующего хакатона!
              </p>
            </div>

            <SearchInput placeholder='Поиск...' className='w-full md:w-80' />
          </div>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {candidates.map((candidate) => (
              <div
                key={candidate.id}
                className='rounded-3xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-sky-500/30'
              >
                <div className='mb-4 flex items-start justify-between'>
                  <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800'>
                    <User className='h-8 w-8 text-slate-400' />
                  </div>
                </div>
                <h3 className='text-lg font-bold text-white'>
                  {candidate.name}
                </h3>
                <p className='mb-4 text-sm text-sky-400'>{candidate.role}</p>
                <div className='mb-6 flex flex-wrap gap-2'>
                  {candidate.skills.map((skill, item) => (
                    <span
                      key={item}
                      className='rounded-md bg-slate-800 px-2 py-1 text-[10px] font-semibold text-slate-400'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className='flex gap-2'>
                  <Button icon={UserPlus} text='Пригласить' />
                  <button className='rounded-xl bg-slate-800 p-2.5 text-slate-400 hover:bg-slate-700'>
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

export default TeamFind;
