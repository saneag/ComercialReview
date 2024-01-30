'use client';

import Links from '@/app/components/header/links';
import Logo from '@/app/components/header/logo';
import UserDropdown from '@/app/components/header/userDropdown';

export default function Header() {
  const isAuth = false;
  const role = 'admin';

  return (
    <div className='fixed top-0 flex h-16 w-full items-center justify-between bg-gray-300 px-5'>
      <Logo />
      <Links />
      <UserDropdown />
    </div>
  );
}
