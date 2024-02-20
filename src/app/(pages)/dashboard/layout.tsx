'use client';

import { ReactNode } from 'react';

import Sidebar from '@/app/components/adminDashboard/sidebar/Sidebar';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 bg-gray-100'>{children}</div>
    </div>
  );
}

export default Layout;
