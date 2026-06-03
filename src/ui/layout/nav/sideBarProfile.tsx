'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Bell,
  ChevronDown,
  CreditCard,
  LogOut,
  Settings,
  User,
} from 'lucide-react';

import { setActiveKey } from '@/features/navigate-menu/model/navigate.slice';

import { useAppDispatch } from '@/store/hooks';

import { ENavigationKey } from '@/ui/layout/nav/types';

interface Props {
  isOpen: boolean;
}

const PROFILE_ITEMS = [
  {
    key: ENavigationKey.Profile,
    label: 'Мой профиль',
    icon: User,
    path: '/profile',
  },
  {
    key: ENavigationKey.Notifications,
    label: 'Уведомления',
    icon: Bell,
    path: '/notifications',
  },
  {
    key: ENavigationKey.Subscription,
    label: 'Подписка',
    icon: CreditCard,
    path: '/subscription',
  },
  {
    key: ENavigationKey.Settings,
    label: 'Настройки',
    icon: Settings,
    path: '/settings',
  },
];

export const SidebarProfile = ({ isOpen }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSelect = (item: { key: string; path: string }) => {
    dispatch(setActiveKey(item.key as ENavigationKey));
    router.push(item.path);
    setIsMenuOpen(false);
  };

  const justifyClass = isOpen ? '' : 'justify-center';

  return (
    <div className='relative p-2'>
      <button
        onClick={() => isOpen && setIsMenuOpen(!isMenuOpen)}
        className={`flex w-full items-center gap-3 rounded-xl border border-slate-700 bg-slate-800 p-2 ${justifyClass}`}
      >
        <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500 font-bold text-white'>
          И
        </div>

        {isOpen && (
          <>
            <div className='flex-1 text-left'>
              <p className='text-sm font-semibold text-slate-200'>Иван</p>
              <p className='text-xs text-slate-500'>Разработчик</p>
            </div>
            <ChevronDown size={16} />
          </>
        )}
      </button>

      {isOpen && isMenuOpen && (
        <div className='absolute right-2 bottom-full left-2 mb-3 rounded-xl border border-slate-800 bg-slate-900 p-2 shadow-2xl'>
          {PROFILE_ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.key}
                onClick={() => handleSelect(item)}
                className='flex w-full items-center gap-3 rounded-lg p-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-white'
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}

          <div className='my-2 h-px bg-slate-800' />

          <button
            onClick={() => setIsMenuOpen(false)}
            className='flex w-full items-center gap-3 rounded-lg p-2 text-sm text-red-400 hover:bg-red-500/20'
          >
            <LogOut size={18} />
            Выйти
          </button>
        </div>
      )}
    </div>
  );
};
