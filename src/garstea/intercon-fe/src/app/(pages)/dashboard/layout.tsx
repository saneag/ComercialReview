'use client';

import { ReactNode } from 'react';

import NavBar from '@/app/components/adminDashboard/components/navBar/navBar';
import AdminRouteGuard from '@/app/providers/AdminRouteGuard';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex'>
      <NavBar />
      <div className='flex-1 bg-gray-100'>{children}</div>
    </div>
  );
}

export default AdminRouteGuard(Layout);
