'use client';

import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';

import { SidebarNavigation } from './sideBarNav';
import { SidebarProfile } from './sideBarProfile';

import { toggleSidebar } from '@/features/navigate-menu/model/navigate.slice';

import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { Logo } from '@/ui/components/logo';

export const Sidebar = () => {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector((state) => state.nav.isSidebarOpen);
  const activeKey = useAppSelector((state) => state.nav.activeKey);
  const openGroups = useAppSelector((state) => state.nav.openGroups);

  const asideWidthClass = isOpen ? 'w-72' : 'w-20';
  const logoTextSize = isOpen ? 'text-lg' : 'opacity-0 w-0';

  const ToggleIcon = isOpen ? PanelLeftClose : PanelLeftOpen;

  return (
    <aside
      className={`sticky top-0 flex h-screen flex-col border-r border-slate-800 bg-slate-900 transition-all duration-300 ${asideWidthClass}`}
    >
      <div className='flex h-20 items-center border-b border-slate-800 p-4'>
        <Logo imageSize='h-10 w-10' textSize={logoTextSize} />
      </div>

      <SidebarNavigation
        isOpen={isOpen}
        activeKey={activeKey}
        openGroups={openGroups}
      />

      <div className='border-t border-slate-800 bg-slate-900'>
        <SidebarProfile isOpen={isOpen} />

        <button
          onClick={() => dispatch(toggleSidebar())}
          className='flex w-full items-center gap-3 p-4 text-slate-500 transition-all hover:bg-slate-800 hover:text-white'
        >
          <ToggleIcon size={20} />
          {isOpen && <span className='text-sm'>Свернуть</span>}
        </button>
      </div>
    </aside>
  );
};
