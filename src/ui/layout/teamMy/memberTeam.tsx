import React from 'react';
import { Github, Mail, MoreVertical, User } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  skills: string[];
  email?: string;
  github?: string;
}

const MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Александр Воронин',
    role: 'Team Lead / Fullstack',
    skills: ['React', 'Node.js', 'Go'],
    email: 'ivan@example.com',
    github: '@ivanov',
  },
  {
    id: '2',
    name: 'Мария Ким',
    role: 'UI/UX Designer',
    skills: ['Figma', 'Spline', 'React'],
    email: 'maria@example.com',
  },
  {
    id: '3',
    name: 'Иван Смирнов',
    role: 'Backend Dev (Go)',
    skills: ['Go', 'Postgres', 'Redis'],
    github: '@alex',
  },
  {
    id: '4',
    name: 'Елена Петрова',
    role: 'DevOps / Infra',
    skills: ['Docker', 'K8s', 'AWS'],
    email: 'elena@example.com',
  },
];

export const MemberTeam: React.FC = () => (
  <section className='space-y-6'>
    <h3 className='flex items-center gap-2 text-xl font-bold text-white'>
      Участники команды
      <span className='rounded-full bg-slate-800 px-2 py-0.5 font-mono text-xs text-slate-400'>
        {MEMBERS.length}
      </span>
    </h3>

    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
      {MEMBERS.map((member) => (
        <div
          key={member.id}
          className='group rounded-3xl border border-slate-800 bg-slate-900/50 p-5 transition-all hover:border-sky-500/30 hover:bg-slate-900/80'
        >
          <div className='mb-4 flex items-start justify-between'>
            <div className='flex items-center gap-4'>
              <div className='relative'>
                <div className='flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-slate-800 bg-linear-to-br from-sky-500/20 to-purple-500/20 transition-colors group-hover:border-sky-500/50'>
                  <User className='h-7 w-7 text-sky-400' />
                </div>
              </div>

              <div className='min-w-0'>
                <h4 className='flex truncate font-bold text-wrap text-white'>
                  {member.name}
                </h4>
                <p className='text-xs font-medium text-slate-500'>
                  {member.role}
                </p>

                <div className='mt-1 flex items-center gap-2'>
                  {member.email && (
                    <Mail size={12} className='text-slate-600' />
                  )}
                  {member.github && (
                    <Github size={12} className='text-slate-600' />
                  )}
                </div>
              </div>
            </div>

            <button className='rounded-lg p-2 text-slate-500 transition-all hover:bg-slate-800 hover:text-white'>
              <MoreVertical size={16} />
            </button>
          </div>

          <div className='flex flex-wrap gap-1.5'>
            {member.skills.map((skill, index) => (
              <span
                key={index}
                className='rounded-md border border-slate-700/50 bg-slate-800/50 px-2 py-0.5 text-[10px] font-medium text-slate-400'
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
