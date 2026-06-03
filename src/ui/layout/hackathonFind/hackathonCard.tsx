import React from 'react';
import {
  Calendar,
  // Cpu,
  // Gamepad2,
  // Globe,
  // Landmark,
  // Shield,
  // Sparkles,
  // Tag,
  Trophy,
  Users,
} from 'lucide-react';

import { Contest } from '@/entities/contests/model/contest.slice';

// interface CategoryIcons {
//   [key: string]: React.ReactNode;
// }

// const CATEGORY_ICONS: CategoryIcons = {
//   Web3: <Sparkles className='h-5 w-5 text-white' />,
//   AI: <Cpu className='h-5 w-5 text-white' />,
//   Fintech: <Landmark className='h-5 w-5 text-white' />,
//   Security: <Shield className='h-5 w-5 text-white' />,
//   GameDev: <Gamepad2 className='h-5 w-5 text-white' />,
//   Other: <Globe className='h-5 w-5 text-white' />,
// };
interface Props {
  contest: Contest;
}

export const HackathonCard: React.FC<Props> = ({ contest }) => {
  // const statusLabel =
  //   contest.status === 'ongoing'
  //     ? 'Открыт'
  //     : contest.status === 'upcoming'
  //       ? 'Скоро'
  //       : 'Завершен';

  const statusDotColor =
    contest.status === 'ongoing'
      ? 'bg-green-500'
      : contest.status === 'upcoming'
        ? 'bg-amber-500'
        : 'bg-gray-500';

  return (
    <div className='group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/50'>
      <div className='flex h-24 items-center justify-between bg-linear-to-br from-slate-800 to-slate-900 p-4 transition-all duration-300 group-hover:from-sky-900/30 group-hover:to-purple-900/30'>
        <div className='flex items-center gap-3'>
          <div className='flex items-center gap-1.5 rounded-lg bg-black/40 px-2 py-1 backdrop-blur-sm'>
            <div className={`h-2 w-2 rounded-full ${statusDotColor}`} />

            {/* статус */}
            {/* <span className="text-xs font-medium text-white">
              {statusLabel}
            </span> */}
          </div>

          {contest.participantsCount && (
            <div className='flex items-center gap-1.5 rounded-lg bg-black/40 px-2 py-1 backdrop-blur-sm'>
              <Users size={12} className='text-slate-400' />

              {/* участники */}
              {/* <span className="text-xs text-slate-300">
                {contest.participantsCount}
              </span> */}
            </div>
          )}
        </div>
      </div>

      <div className='p-6'>
        <h3 className='mb-3 line-clamp-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-sky-400'>
          {contest.title}
        </h3>

        <div className='mb-6 flex items-center justify-between rounded-xl border border-slate-700/50 bg-slate-800/30 p-3 text-sm'>
          <div className='flex items-center gap-2 text-slate-400'>
            <Calendar size={14} className='text-sky-400' />

            {/* дата */}
            {/* <span>{contest.month} {contest.day}</span> */}
          </div>

          {contest.prize && (
            <div className='flex items-center gap-2 font-semibold text-amber-400'>
              <Trophy size={14} />

              {/* приз */}
              {/* <span>{contest.prize}</span> */}
            </div>
          )}
        </div>

        <button className='flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-sky-400 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-600/20'>
          {/* Подробнее */}
          {/* Подробнее */}
          <span className='transition-transform duration-300 group-hover:translate-x-1'>
            →
          </span>
        </button>
      </div>
    </div>
  );
};
