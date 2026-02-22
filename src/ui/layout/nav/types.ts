
import { LucideIcon } from 'lucide-react';

export enum ENavigationKey {
  Dashboard = 'dashboard',
  Stats = 'stats',
  Hackathons = 'hackathons',
  HackathonFind = 'hackathon/find',
  HackathonMy = 'hackathon/my',
  HackathonCreate = 'hackathon/create',
  Team = 'team',
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
  path?: string;
}

export interface INavItem {
  key: ENavigationKey;
  label: string;
  icon: LucideIcon;
  path?: string;
  subItems?: ISubNavItem[];
}
