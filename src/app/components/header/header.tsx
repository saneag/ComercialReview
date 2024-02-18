'use client';

import Links from '@/app/components/header/links';
import UserDropdown from '@/app/components/header/userDropdown';
import HomeLogoLink from '@/app/components/homeLogoLink';
import { useAppSelector } from '@/app/redux/store';

export default function Header() {
  const isAuth = useAppSelector((state) => state.user.isAuth);
  const role = useAppSelector((state) => state.user.role);

  return (
    <div className='flex h-16 w-full items-center justify-between px-5 nm-flat-white'>
      <HomeLogoLink className='w-12' />
      <Links />
      <UserDropdown />
    </div>
  );
}
