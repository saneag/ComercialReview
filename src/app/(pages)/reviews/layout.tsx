import { ReactNode } from 'react';

import Header from '@/app/components/header/Header';
import UserNavigation from '@/app/components/userNavigation';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex min-h-screen'>
      <div className='flex-1 bg-gray-100'>
        <Header />
        <div className='container mt-10'>{children}</div>
        <div className='sm:hidden'>
          <UserNavigation />
        </div>
      </div>
    </div>
  );
}
