"use client";

import { LayoutDashboard, Trophy,  Users, PieChart, ChevronDown } from "lucide-react";

import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { toggleGroup, setActiveKey } from "@/features/navigate-menu/model/navigateSlice";
import type { LucideIcon } from "lucide-react";
import { ENavigationKey } from "@/ui/layout/nav/types";

interface Props {
  isOpen: boolean;
  activeKey?: ENavigationKey;
  openGroups: ENavigationKey[];
};

interface Item {
  key: ENavigationKey;
  path: string;
  label: string;
}

type MenuItemWithPath = {
  key: ENavigationKey;
  label: string;
  icon: LucideIcon;
  path: string;
  subItems?: never;
};

type MenuItemWithSub = {
  key: ENavigationKey;
  label: string;
  icon: LucideIcon;
  subItems: Item[];
  path?: never;
};

type MenuItem = MenuItemWithPath | MenuItemWithSub;

const NAV_ITEMS: MenuItem[] = [
  {
    key: ENavigationKey.Dashboard,
    label: "Главная",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    key: ENavigationKey.Stats,
    label: "Статистика",
    icon: PieChart,
    path: "/stats",
  },
  {
    key: ENavigationKey.Hackathons,
    label: "Хакатоны",
    icon: Trophy,
    subItems: [
      { key: ENavigationKey.HackathonFind, label: "Найти", path: "/hackaton/find" },
      { key: ENavigationKey.HackathonMy, label: "Мои", path: "/hackaton/my" },
      { key: ENavigationKey.HackathonCreate, label: "Создать", path: "/hackaton/create" },
    ],
  },
  {
    key: ENavigationKey.Team,
    label: "Команда",
    icon: Users,
    subItems: [
      { key: ENavigationKey.TeamMy, label: "Моя", path: "/team/my" },
      { key: ENavigationKey.TeamFind, label: "Найти", path: "/team/find" },
    ],
  },
];

export const SidebarNavigation = ({ isOpen, activeKey, openGroups }: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleMainClick = (item: MenuItem) => {
    if ("subItems" in item) {
      dispatch(toggleGroup(item.key));
      return;
    }

    dispatch(setActiveKey(item.key));
    router.push(item.path);
  };

  const handleSubClick = (sub: Item) => {
    dispatch(setActiveKey(sub.key));
    router.push(sub.path);
  };

  return (
    <nav className="flex-1 px-4 py-4 flex flex-col gap-1 overflow-y-auto">
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const hasSub = "subItems" in item;

        const isActive =  activeKey === item.key || ("subItems" in item && item.subItems?.some((s) => s.key === activeKey));
        const isGroupOpen = openGroups.includes(item.key);
        const buttonClass = isActive ? "w-full flex items-center gap-3 p-3 rounded-xl bg-sky-600/20 text-white" : "w-full flex items-center gap-3 p-3 rounded-xl text-slate-400 hover:bg-slate-800/40";
        const chevronClass = isGroupOpen ? "transition-transform rotate-180 text-sky-400" : "transition-transform";

        return (
          <div key={item.key}>
            <button
              onClick={() => handleMainClick(item)}
              className={buttonClass}
            >
              <Icon size={20} />

              {isOpen && (
                <span className="flex-1 text-left text-sm truncate">
                  {item.label}
                </span>
              )}

              {isOpen && hasSub && (
                <ChevronDown size={14} className={chevronClass} />
              )}
            </button>

            {isOpen && hasSub && isGroupOpen && (
              <div className="mt-1 ml-8 flex flex-col gap-1">
                {"subItems" in item && item.subItems?.map((sub) => {
                  const subClass =
                    activeKey === sub.key
                      ? "text-left py-2 px-3 text-sm rounded-lg text-sky-400 bg-sky-500/5"
                      : "text-left py-2 px-3 text-sm rounded-lg text-slate-500 hover:text-sky-400";

                  return (
                    <button
                      key={sub.key}
                      onClick={() => handleSubClick(sub)}
                      className={subClass}
                    >
                      {sub.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};