'use client';

import { ReactNode } from 'react';

import HomeLogoLink from '@/app/components/HomeLogoLink';
import AuthPageGuard from '@/app/providers/AuthPageGuard';

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex-col-center min-h-screen space-y-4 bg-gray-100 max-md:py-5'>
      <HomeLogoLink className='w-20' />
      {children}
    </div>
  );
}

export default AuthPageGuard(Layout);
