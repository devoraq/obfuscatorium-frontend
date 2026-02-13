
import { LucideIcon } from 'lucide-react';

export enum ENavigationKey {
  Dashboard = 'dashboard',
  Analytics = 'analytics',
  Stats = 'stats',
  Hackathons = 'hackathons',
  HackathonFind = 'hackathon/find',
  HackathonMy = 'hackathon/my',
  HackathonCreate = 'hackathon/create',
  Teams = 'teams',
  TeamMy = 'team/my',
  TeamFind = 'team/find',
  Profile = 'profile',
  Notifications = 'notifications',
  Subscription = 'subscription',
  Settings = 'settings',
}

export interface ISubNavItem {
  key: ENavigationKey;
  label: string;
}

export interface INavItem {
  key: ENavigationKey;
  label: string;
  icon: LucideIcon;
  subItems?: ISubNavItem[];
}
