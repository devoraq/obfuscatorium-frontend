"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Logo } from "@/ui/components/logo";

import { SidebarNavigation } from "./sideBarNav";
import { SidebarProfile } from "./sideBarProfile";

import {
  toggleSidebar,
} from "@/features/navigate-menu/model/navigateSlice";

const Sidebar = () => {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector((state) => state.nav.isSidebarOpen);
  const activeKey = useAppSelector((state) => state.nav.activeKey);
  const openGroups = useAppSelector((state) => state.nav.openGroups);

  const asideWidthClass = isOpen ? "w-72" : "w-20";
  const logoTextSize = isOpen ? "text-lg" : "opacity-0 w-0";

  const ToggleIcon = isOpen ? PanelLeftClose : PanelLeftOpen;

  return (
    <aside
      className={`h-screen sticky top-0 bg-slate-900 border-r border-slate-800 flex flex-col transition-all duration-300 ${asideWidthClass}`}
    >
      <div className="p-4 h-20 flex items-center border-b border-slate-800">
        <Logo imageSize="h-10 w-10" textSize={logoTextSize} />
      </div>

      <SidebarNavigation
        isOpen={isOpen}
        activeKey={activeKey}
        openGroups={openGroups}
      />

      <div className="border-t border-slate-800 bg-slate-900">
        <SidebarProfile isOpen={isOpen} />

        <button
          onClick={() => dispatch(toggleSidebar())}
          className="w-full flex items-center gap-3 p-4 text-slate-500 hover:text-white hover:bg-slate-800 transition-all"
        >
          <ToggleIcon size={20} />
          {isOpen && <span className="text-sm">Свернуть</span>}
        </button>
      </div>
    </aside>
  );
};
export default Sidebar;