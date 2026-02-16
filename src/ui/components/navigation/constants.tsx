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
  { key: ENavigationKey.Dashboard, label: "Главная", icon: LayoutDashboard },
  { key: ENavigationKey.Stats, label: "Статистика", icon: PieChart },

  {
    key: ENavigationKey.Hackathons,
    label: "Хакатоны",
    icon: Trophy,
    subItems: [
      { key: ENavigationKey.HackathonFind, label: "Найти хакатоны" },
      { key: ENavigationKey.HackathonMy, label: "Мои хакатоны" },
      { key: ENavigationKey.HackathonCreate, label: "Создать хакатон" },
    ],
  },

  {
    key: ENavigationKey.Teams,
    label: "Команда",
    icon: Users,
    subItems: [
      { key: ENavigationKey.TeamMy, label: "Моя команда" },
      { key: ENavigationKey.TeamFind, label: "Найти участников" },
    ],
  },
];

export const PROFILE_MENU_ITEMS = [
  { key: ENavigationKey.Profile, label: "Мой профиль", icon: User },
  { key: ENavigationKey.Notifications, label: "Уведомления", icon: Bell },
  { key: ENavigationKey.Subscription, label: "Подписка", icon: CreditCard },
  { key: ENavigationKey.Settings, label: "Настройки", icon: Settings },
];
