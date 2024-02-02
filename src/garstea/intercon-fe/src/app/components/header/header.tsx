'use client';

import Links from '@/app/components/header/links';
import Logo from '@/app/components/header/logo';
import UserDropdown from '@/app/components/header/userDropdown';

export default function Header() {
  const isAuth = false;
  const role = 'admin';

  return (
    <div className='flex h-16 w-full items-center justify-between px-5 nm-flat-white'>
      <Logo />
      <Links />
      <UserDropdown />
    </div>
  );
}
