'use client';

import React from 'react';

import { Header } from '@/ui/components/header';
import { Sidebar } from '@/ui/layout/nav/sideBar';

const Profile: React.FC = () => (
  <div className='flex h-screen w-full overflow-hidden bg-slate-950 text-slate-100'>
    <Sidebar />
    <div className='relative flex flex-1 flex-col overflow-hidden'>
      <Header />
      <main className='hide-scrollbar flex-1 overflow-x-hidden overflow-y-auto bg-slate-950/50'>
        Profile
      </main>
    </div>
  </div>
);

export default Profile;
