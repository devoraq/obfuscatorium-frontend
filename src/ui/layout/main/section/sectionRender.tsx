'use client'
import { ENavigationKey } from '@/ui/layout/main/sidebar/types';
import Analitic from '@/ui/layout/main/section/analytics/page'
import Dashboard from '@/ui/layout/main/section/dashboard/page'
import HackathonFind from '@/ui/layout/main/section/hackathonFind/page'
import HackathonMy from '@/ui/layout/main/section/hackathonMy/page'
import HackathonCreate from '@/ui/layout/main/section/hackathonCreate/page'
import TeamMy from '@/ui/layout/main/section/teamMy/page'
import TeamFind from '@/ui/layout/main/section/teamFind/page'
import Profile from '@/ui/layout/main/section/profile/page'
import Settings from '@/ui/layout/main/section/settings/page'
import Stats from '@/ui/layout/main/section/stats/page'
import Subscription from '@/ui/layout/main/section/subscription/page'
import Notifications from '@/ui/layout/main/section/notifications/page'

const SectionRenderer:React.FC<{activeKey: ENavigationKey }> = ({ activeKey }) => {
     const views: Record<string, React.ReactNode> = {
    [ENavigationKey.Dashboard]: <Dashboard /> ,
    [ENavigationKey.Analytics]:<Analitic />,
    [ENavigationKey.Stats]: <Stats />,

    [ENavigationKey.HackathonFind]:<HackathonFind />,
    [ENavigationKey.HackathonMy]:<HackathonMy />,
    [ENavigationKey.HackathonCreate]:<HackathonCreate />,

    [ENavigationKey.TeamMy]: < TeamMy /> ,
    [ENavigationKey.TeamFind]: < TeamFind /> ,
   
   
    [ENavigationKey.Profile]: <Profile /> ,
    [ENavigationKey.Settings]: <Settings /> ,
    [ENavigationKey.Subscription]: <Subscription /> ,
    [ENavigationKey.Notifications]: <Notifications /> ,
     }
  return views[activeKey] 
}

export default SectionRenderer
