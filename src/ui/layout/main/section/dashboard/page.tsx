
import React from 'react';
import Stats from '@/ui/layout/main/section/dashboard/ui/stats'
import Team from '@/ui/layout/main/section/dashboard/ui/team'
import Events from '@/ui/layout/main/section/dashboard/ui/events';

 const Dashboard: React.FC = () => {
 return (
    <div className="p-8 space-y-8 animate-fadeIn">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight text-white">Добро пожаловать обратно! Вот что происходит в ваших проектах сегодня.</h1>
      </div>
     <Stats />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
       <Team />
      <Events/>
      </div>
    </div>
  );
};
export default Dashboard