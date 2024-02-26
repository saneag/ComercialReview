'use client';

import { ReactNode } from 'react';

import Header from '@/app/components/header/Header';
import UserNavigation from '@/app/components/UserNavigation';
import AdminRouteGuard from '@/app/providers/AdminRouteGuard';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex min-h-screen'>
      <div className='flex-1 bg-gray-100'>
        <Header />
        <div className='container my-10'>{children}</div>
        <div className='hidden'>
          <UserNavigation />
        </div>
      </div>
    </div>
  );
}

export default AdminRouteGuard(Layout);
