import { ReactNode } from 'react';

import HomeLogoLink from '@/app/components/homeLogoLink';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex-col-center min-h-screen space-y-4 bg-gray-100 max-md:py-5'>
      <HomeLogoLink />
      {children}
    </div>
  );
}
