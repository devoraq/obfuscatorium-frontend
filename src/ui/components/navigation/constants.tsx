import {
  LayoutDashboard,
  Trophy,
  Users,
  Settings,
  Bell,
  CreditCard,
  User,
  PieChart,
} from "lucide-react";
import { ENavigationKey, INavItem } from "@/ui/components/sidebar/types";

export const NAVIGATION_ITEMS: INavItem[] = [
  { key: ENavigationKey.Dashboard, label: "Главная", icon: LayoutDashboard,  path: '/main/dashboard'},
  { key: ENavigationKey.Stats, label: "Статистика", icon: PieChart, path: '/main/stats'  },

  {
    key: ENavigationKey.Hackathons,
    label: "Хакатоны",
    icon: Trophy,
    subItems: [
      { key: ENavigationKey.HackathonFind, label: "Найти хакатоны", path: '/main/hackaton/find'},
      { key: ENavigationKey.HackathonMy, label: "Мои хакатоны",  path: '/main/hackaton/my' },
      { key: ENavigationKey.HackathonCreate, label: "Создать хакатон", path: '/main/hackaton/create' },
    ],
  },

  {
    key: ENavigationKey.Team,
    label: "Команда",
    icon: Users,
    subItems: [
      { key: ENavigationKey.TeamMy, label: "Моя команда",  path: '/main/team/my'},
      { key: ENavigationKey.TeamFind, label: "Найти участников",  path: '/main/team/find' },
    ],
  },
];

export const PROFILE_MENU_ITEMS = [
  { key: ENavigationKey.Profile, label: "Мой профиль", icon: User, path: '/main/profile' },
  { key: ENavigationKey.Notifications, label: "Уведомления", icon: Bell,  path: '/main/notifications '},
  { key: ENavigationKey.Subscription, label: "Подписка", icon: CreditCard,  path: '/main/subscription' },
  { key: ENavigationKey.Settings, label: "Настройки", icon: Settings,  path: '/main/settings'},
];
