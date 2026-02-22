"use client";

import React, { useCallback, memo, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { SidebarItem } from "@/ui/components/sidebar/sidebarItem";
import { SidebarProfile } from "@/ui/components/sidebar/sidebarProfil";

import {
  NAVIGATION_ITEMS,
  PROFILE_MENU_ITEMS,
} from "@/ui/components/navigation/constants";

import { ENavigationKey } from "@/ui/components/sidebar/types";
import { Logo } from "@/ui/components/logo";

import { 
  toggleSidebar, 
  toggleGroup,
  selectIsSidebarOpen 
} from "@/store/slices/sidebarSlice";

import {
  setActiveKey,
  selectActiveKey,
  selectOpenGroups,
} from "@/store/slices/navigationSlice";

export const Sidebar: React.FC = memo(() => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector(selectIsSidebarOpen);
  const activeKey = useAppSelector(selectActiveKey);
  const openGroups = useAppSelector(selectOpenGroups);

  useEffect(() => {
    let newActiveKey: ENavigationKey | undefined;

    for (const item of NAVIGATION_ITEMS) {
      if (item.path === pathname) {
        newActiveKey = item.key;
        break;
      }
      if (item.subItems) {
        const subItem = item.subItems.find((sub) => sub.path === pathname);
        if (subItem) {
          newActiveKey = subItem.key;
          break;
        }
      }
    }

    if (!newActiveKey) {
      const profileItem = PROFILE_MENU_ITEMS.find(
        (item) => item.path === pathname,
      );
      if (profileItem) {
        newActiveKey = profileItem.key;
      }
    }

    dispatch(setActiveKey(newActiveKey));
  }, [pathname, dispatch]);

  const handleSelect = useCallback(
    (key: ENavigationKey) => {
      let path: string | undefined;

      for (const item of NAVIGATION_ITEMS) {
        if (item.key === key && item.path) {
          path = item.path;
          break;
        }
        if (item.subItems) {
          const subItem = item.subItems.find((sub) => sub.key === key);
          if (subItem?.path) {
            path = subItem.path;
            break;
          }
        }
      }

      if (!path) {
        const profileItem = PROFILE_MENU_ITEMS.find((item) => item.key === key);
        if (profileItem?.path) {
          path = profileItem.path;
        }
      }

      if (path) {
        router.push(path);
        dispatch(setActiveKey(key));
      }
    },
    [router, dispatch],
  );

  const handleToggleGroup = useCallback(
    (key: ENavigationKey) => {
      dispatch(toggleGroup(key));
    },
    [dispatch],
  );

  const handleToggleSidebar = useCallback(() => {
    dispatch(toggleSidebar());
  }, [dispatch]);

  return (
    <aside
      className={`h-screen sticky top-0 bg-slate-900/95 backdrop-blur-xl border-r border-slate-800/60 flex flex-col transition-all duration-500 z-40 shrink-0 ${isOpen ? "w-72" : "w-20"}`}
    >
      <div className="p-4 h-20 flex items-center border-b border-slate-800/40 overflow-hidden">
        <Logo
          imageSize="h-10 w-10"
          textSize={isOpen ? "text-lg" : "opacity-0 w-0"}
        />
      </div>

      <nav className="flex-1 px-4 py-4 flex flex-col gap-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
        {NAVIGATION_ITEMS.map((item) => (
          <SidebarItem
            key={item.key}
            item={item}
            isOpen={isOpen}
            isActive={
              activeKey === item.key ||
              !!item.subItems?.some((s) => s.key === activeKey)
            }
            isGroupOpen={openGroups.includes(item.key)}
            onToggleGroup={handleToggleGroup}
            onSelect={handleSelect}
            activeKey={activeKey}
          />
        ))}
      </nav>

      <div className="border-t border-slate-800/50 bg-slate-900/60">
        <SidebarProfile isOpen={isOpen} onSelect={handleSelect} />

        <button
          onClick={handleToggleSidebar}
          className="w-full flex items-center gap-3 p-4 text-slate-500 hover:text-white hover:bg-slate-800/60 transition-all"
        >
          {isOpen ? (
            <>
              <PanelLeftClose size={20} />
              <span className="text-sm font-medium">Свернуть</span>
            </>
          ) : (
            <div className="w-full flex justify-center">
              <PanelLeftOpen size={20} />
            </div>
          )}
        </button>
      </div>
    </aside>
  );
});

Sidebar.displayName = "Sidebar";
