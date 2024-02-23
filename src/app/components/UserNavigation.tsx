'use client';

import Links from '@/app/components/header/Links';

export default function UserNavigation() {
  return (
    <div className='fixed bottom-3 left-0 z-10 flex w-full justify-center'>
      <div className='flex h-16 w-11/12 items-center justify-center rounded-lg border px-5 nm-flat-gray-300-sm'>
        <Links />
      </div>
    </div>
  );
}
