import { ReactNode } from 'react';

import Image from 'next/image';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex-col-center min-h-screen space-y-4 bg-gray-100'>
      <Image
        src='/assets/images/intercon-logo-no-text.png'
        alt=''
        width='0'
        height='0'
        sizes='100vw'
        placeholder='blur'
        blurDataURL='/assets/images/intercon-logo-no-text.png'
        className='h-auto w-20'
      />
      {children}
    </div>
  );
}
