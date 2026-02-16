'use client'
import React, { useState, useCallback } from 'react';
import { Sidebar } from '@/ui/components/sidebar/sidebar'
import  Header  from '@/ui/components/header';
import  SectionRenderer  from '@/ui/components/sectionRender';
import { ENavigationKey } from "@/ui/components/sidebar/types";

const Main: React.FC = () => {
  const [activeKey, setActiveKey] = useState<ENavigationKey>(ENavigationKey.Dashboard);

  const handleNavigation = useCallback((key: ENavigationKey) => {
    setActiveKey(key);
  }, []);

  return (
    <div className="flex h-screen w-full bg-slate-950 text-slate-100 font-sans overflow-hidden">
      <Sidebar onSelect={handleNavigation} activeKey={activeKey} />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Header />
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-slate-950/50 custom-scrollbar">
          <div className="relative z-10 min-h-full pb-10">
          <SectionRenderer activeKey={activeKey}  />
          </div>
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
           
          </div>
        </main>
      </div>
    </div>
  );
};

export default Main;
