'use client';

import { ReactNode } from 'react';

import Sidebar from '@/app/components/adminDashboard/sidebar/Sidebar';
import AdminRouteGuard from '@/app/providers/AdminRouteGuard';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex bg-gray-100'>
      <Sidebar />
      <div className='container flex-1'>{children}</div>
    </div>
  );
}

export default AdminRouteGuard(Layout);
