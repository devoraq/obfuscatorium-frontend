'use client'
import { Sidebar } from '@/ui/components/sidebar/sidebar'
import  Header  from '@/ui/components/header';
import React from 'react';
const Main = ({children}: {
  children: React.ReactNode;
}) => {
   return (
    <div className="flex h-screen w-full bg-slate-950 text-slate-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Header />
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-slate-950/50 hide-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}
export default Main