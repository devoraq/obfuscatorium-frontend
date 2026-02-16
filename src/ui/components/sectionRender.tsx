'use client'
import { ENavigationKey } from "@/ui/components/sidebar/types";
import Dashboard from '@/app/main/dashboard/page'
import HackathonFind from '@/app/main/hackathonFind/page'
import HackathonMy from '@/app/main/hackathonMy/page'
import HackathonCreate from '@/app/main/hackathonCreate/page'
import TeamMy from '@/app/main/teamMy/page'
import TeamFind from '@/app/main/teamFind/page'
import Profile from '@/app/main/profile/page'
import Settings from '@/app/main/settings/page'
import Stats from '@/app/main/stats/page'
import Subscription from '@/app/main/subscription/page'
import Notifications from '@/app/main/notifications/page'


interface SectionRendererProps {
  activeKey: ENavigationKey;

}


const SectionRenderer:React.FC<SectionRendererProps> = ({ activeKey,  }) => {
     const views: Record<string, React.ReactNode> = {
    [ENavigationKey.Dashboard]: <Dashboard  />  ,
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
