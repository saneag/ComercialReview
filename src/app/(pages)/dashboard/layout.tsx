'use client';

import { ReactNode } from 'react';

import NavBar from '@/app/components/adminDashboard/components/navBar/navBar';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex'>
      <NavBar />
      <div className='flex-1 bg-gray-100'>{children}</div>
    </div>
  );
}

export default Layout;
