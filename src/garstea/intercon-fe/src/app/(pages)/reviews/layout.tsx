import { ReactNode } from 'react';

import Header from '@/app/components/header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex min-h-screen'>
      <div className='flex-1 bg-gray-100 dark:bg-gray-800'>
        <Header />
        <div className='h-[200vh] pt-16'>{children}</div>
      </div>
    </div>
  );
}
