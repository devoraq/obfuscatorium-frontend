'use client'
import React, { useState, useCallback, memo } from 'react';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { SidebarItem } from '@/ui/components/sidebar/sidebarItem'
import { SidebarProfile } from '@/ui/components/sidebar/sidebarProfil';
import { NAVIGATION_ITEMS } from '@/ui/components/navigation/constants';
import { ENavigationKey } from "@/ui/components/sidebar/types";
import { Logo } from '@/ui/components/logo';

interface SidebarProps {
  activeKey: ENavigationKey;
  onSelect: (key: ENavigationKey) => void;
}

export const Sidebar: React.FC<SidebarProps> = memo(({ activeKey, onSelect }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [openGroups, setOpenGroups] = useState<ENavigationKey[]>([]);

  const handleSelect = useCallback((key: ENavigationKey) => {
    onSelect(key);
    
    const parentItem = NAVIGATION_ITEMS.find(item => 
      item.subItems?.some(sub => sub.key === key)
    );
    
    if (parentItem) {
      setOpenGroups(prev => prev.includes(parentItem.key) ? prev : [...prev, parentItem.key]);
    }
  }, [onSelect]);

  const toggleSidebar = () => setIsOpen(prev => !prev);
  
  const toggleGroup = useCallback((key: ENavigationKey) => {
    setOpenGroups(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
  }, []);

  return (
    <aside className={`h-screen sticky top-0 bg-slate-900/95 backdrop-blur-xl border-r border-slate-800/60 flex flex-col transition-all duration-500 ease-in-out z-40 shrink-0 ${isOpen ? "w-72" : "w-20"}`}>
      <div className="p-4 h-20 flex items-center justify-between border-b border-slate-800/40 overflow-hidden select-none">
        <Logo imageSize="h-10 w-10" textSize={isOpen ? "text-lg" : "opacity-0 scale-0 w-0"} />
      </div>
      <nav className="flex-1 px-4 py-4 flex flex-col gap-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
        {NAVIGATION_ITEMS.map((item) => (
          <SidebarItem
            key={item.key}
            item={item}
            isOpen={isOpen}
            isActive={activeKey === item.key || !!item.subItems?.some(s => s.key === activeKey)}
            isGroupOpen={openGroups.includes(item.key)}
            onToggleGroup={toggleGroup}
            onSelect={handleSelect}
            activeKey={activeKey}
          />
        ))}
      </nav>
      <div className="border-t border-slate-800/50 bg-slate-900/60">
        <SidebarProfile isOpen={isOpen} onSelect={handleSelect} />
        <button onClick={toggleSidebar} className="w-full flex items-center gap-3 p-4 text-slate-500 hover:text-white hover:bg-slate-800/60 transition-all group">
          {isOpen ? (
            <><PanelLeftClose size={20} className="shrink-0 group-hover:-translate-x-0.5 transition-transform" /><span className="text-sm font-medium">Свернуть</span></>
          ) : (
            <div className="w-full flex justify-center"><PanelLeftOpen size={20} className="shrink-0 group-hover:scale-110 transition-transform" /></div>
          )}
        </button>
      </div>
    </aside>
  );
});

Sidebar.displayName = 'Sidebar';
