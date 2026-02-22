'use client';

import React, { memo, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { INavItem, ENavigationKey } from '@/ui/layout/nav/types';

interface SidebarItemProps {
  item: INavItem;
  isOpen: boolean;
  isActive: boolean;
  isGroupOpen: boolean;
  onToggleGroup: (key: ENavigationKey) => void;
  onSelect: (key: ENavigationKey) => void;
  activeKey?: ENavigationKey;
}

export const SidebarItem: React.FC<SidebarItemProps> = memo(({ 
  item, 
  isOpen, 
  isActive, 
  isGroupOpen, 
  onToggleGroup, 
  onSelect, 
  activeKey 
}) => {
  const hasSubItems = !!item.subItems?.length;
  const Icon = item.icon;

  const handleClick = useCallback(() => {
    if (hasSubItems) {
      if (isOpen) {
        onToggleGroup(item.key);
      } else if (item.subItems?.[0]) {
        onSelect(item.subItems[0].key);
      }
    } else {
      onSelect(item.key);
    }
  }, [hasSubItems, isOpen, item, onToggleGroup, onSelect]);

  return (
    <div className="w-full">
      <button
        onClick={handleClick}
        className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all relative cursor-pointer
          ${isActive && !hasSubItems 
            ? 'bg-linear-to-r from-sky-600/20 to-transparent text-white' 
            : 'text-slate-400 hover:bg-slate-800/40 hover:text-slate-100'}
        `}
      >
        {isActive && !hasSubItems && (
          <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-sky-500 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
        )}
        
        <Icon size={20} className="shrink-0" />
        
        {isOpen && (
          <span className="flex-1 text-left font-medium text-sm truncate">
            {item.label}
          </span>
        )}
        
        {isOpen && hasSubItems && (
          <ChevronDown 
            size={14} 
            className={`transition-transform duration-300 ${isGroupOpen ? 'rotate-180 text-sky-400' : 'text-slate-500'}`} 
          />
        )}
      </button>

      {isOpen && hasSubItems && isGroupOpen && (
        <div className="mt-1 ml-9 flex flex-col gap-0.5 border-l border-slate-800/60 pl-2">
          {item.subItems?.map((sub) => (
            <button
              key={sub.key}
              onClick={() => onSelect(sub.key)}
              className={`group/sub text-left py-2 px-3 text-sm transition-all rounded-lg cursor-pointer
                ${activeKey === sub.key ? 'text-sky-400 bg-sky-500/5' : 'text-slate-500 hover:text-sky-400 hover:bg-slate-800/20'}
              `}
            >
              <span className="relative">
                {sub.label}
                <span className={`absolute -left-5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full 
                  ${activeKey === sub.key ? 'bg-sky-500' : 'bg-slate-700 group-hover/sub:bg-sky-500'}
                `} />
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
});

SidebarItem.displayName = 'SidebarItem';