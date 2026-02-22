"use client";

import { useState } from "react";
import {
  ChevronDown,
  LogOut,
  User,
  Bell,
  CreditCard,
  Settings,
} from "lucide-react";

import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { setActiveKey } from "@/features/navigate-menu/model/navigateSlice";
import { ENavigationKey } from "@/ui/layout/nav/types";

interface Props {
  isOpen: boolean;
};


const PROFILE_ITEMS = [
  { key: ENavigationKey.Profile, label: "Мой профиль", icon: User, path: "/profile" },
  { key: ENavigationKey.Notifications, label: "Уведомления", icon: Bell, path: "/notifications" },
  { key: ENavigationKey.Subscription, label: "Подписка", icon: CreditCard, path: "/subscription" },
  { key: ENavigationKey.Settings, label: "Настройки", icon: Settings, path: "/settings" },
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

  const justifyClass = isOpen ? "" : "justify-center";

  return (
    <div className="relative p-2">
      <button
        onClick={() => isOpen && setIsMenuOpen(!isMenuOpen)}
        className={`w-full flex items-center gap-3 p-2 rounded-xl bg-slate-800 border border-slate-700 ${justifyClass}`}
      >
        <div className="w-10 h-10 rounded-lg bg-sky-500 flex items-center justify-center text-white font-bold">
          И
        </div>

        {isOpen && (
          <>
            <div className="flex-1 text-left">
              <p className="text-sm font-semibold text-slate-200">Иван</p>
              <p className="text-xs text-slate-500">Разработчик</p>
            </div>
            <ChevronDown size={16} />
          </>
        )}
      </button>

      {isOpen && isMenuOpen && (
        <div className="absolute bottom-full mb-3 left-2 right-2 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2">
          {PROFILE_ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.key}
                onClick={() => handleSelect(item)}
                className="w-full flex items-center gap-3 p-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg"
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}

          <div className="h-px bg-slate-800 my-2" />

          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-full flex items-center gap-3 p-2 text-sm text-red-400 hover:bg-red-500/20 rounded-lg"
          >
            <LogOut size={18} />
            Выйти
          </button>
        </div>
      )}
    </div>
  );
};