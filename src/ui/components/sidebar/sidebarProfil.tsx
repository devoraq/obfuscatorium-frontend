"use client";
import React, { useState, memo } from "react";
import { ChevronDown, LogOut } from "lucide-react";
import { PROFILE_MENU_ITEMS } from "@/ui/components/navigation/constants";
import { ENavigationKey } from '@/ui/layout/nav/types';

interface SidebarProfileProps {
  isOpen: boolean;
  onSelect: (key: ENavigationKey) => void;
}

export const SidebarProfile: React.FC<SidebarProfileProps> = memo(
  ({ isOpen, onSelect }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      if (isOpen) setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = (key: ENavigationKey) => {
      onSelect(key);
      setIsMenuOpen(false);
    };

    return (
      <div className="relative p-2">
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-transparent cursor-default"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        <button
          onClick={toggleMenu}
          className={`w-full flex items-center gap-3 p-2 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/60 transition-all group relative z-50
          ${!isOpen ? "justify-center" : ""}
        `}
        >
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-inner shrink-0">
            И
          </div>

          {isOpen && (
            <>
              <div className="flex-1 min-w-0 text-left">
                <p className="text-sm font-semibold text-slate-200 truncate">
                  Иван
                </p>
                <p className="text-xs text-slate-500 truncate">Разработчик</p>
              </div>
              <ChevronDown
                size={16}
                className={`text-slate-500 transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`}
              />
            </>
          )}
        </button>

        {isOpen && isMenuOpen && (
          <div className="absolute bottom-full mb-3 left-2 right-2 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2 z-50 animate-fadeIn origin-bottom">
            {PROFILE_MENU_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.key}
                  onClick={() => handleMenuItemClick(item.key)}
                  className="w-full flex items-center gap-3 p-2.5 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all"
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <div className="h-px bg-slate-800 my-2" />
            <button
              className="w-full flex items-center gap-3 p-2.5 text-sm text-red-400 hover:text-white hover:bg-red-500/20 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <LogOut size={18} />
              <span>Выйти</span>
            </button>
          </div>
        )}
      </div>
    );
  },
);

SidebarProfile.displayName = "SidebarProfile";
