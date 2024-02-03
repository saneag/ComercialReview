import { ReactNode } from 'react';

import Header from '@/app/components/header/header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex min-h-screen'>
      <div className='flex-1 bg-gray-100'>
        <Header />
        <div className='container'>{children}</div>
      </div>
    </div>
  );
}
