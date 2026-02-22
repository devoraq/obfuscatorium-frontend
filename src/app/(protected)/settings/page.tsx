'use client';

import React from 'react';
import { Sidebar } from '@/ui/layout/nav/sideBar'
import Header from '@/ui/components/header';

const Settings: React.FC = () => {
  return (
    <div className="flex h-screen w-full bg-slate-950 text-slate-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Header />
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-slate-950/50 hide-scrollbar">
          Settings
        </main>
      </div>
    </div>
  )
};

export default Settings;
