'use client';

import { useState } from 'react';

import { ChevronRight, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/app/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';
import { adminLinks } from '@/app/constants/routes';
import { resetUserOnLogout } from '@/app/redux/features/slices/userSlice';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';

export default function NavBar() {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const user = useAppSelector((state) => state.user.user);
  const isAuth = useAppSelector((state) => state.user.isAuth);

  const dropdownMenuItems: { title: string; onClick: any; link: string }[] = [
    {
      title: 'Log out',
      onClick: () => {
        // localStorage.removeItem('user');
        dispatch(resetUserOnLogout());
      },
      link: '/auth/login',
    },
  ];

  return (
    <aside className='h-screen min-w-[2.5rem] max-w-[2.5rem] border-r bg-white py-5 lg:w-52 lg:min-w-[13rem]'>
      <div className='fixed left-0 top-0 z-10 h-full w-32 py-5 lg:w-52 lg:px-5'>
        <div className='lg:hidden'>
          <Button
            className='h-8 p-2'
            variant='link'
            onClick={() => {
              setIsSidebarOpen(!isSidebarOpen);
            }}
          >
            <ChevronRight
              className={`
            transform transition-transform ${
              isSidebarOpen ? 'rotate-180' : ''
            }`}
            />
          </Button>
        </div>
        <div
          className={`h-full flex-col lg:flex ${
            isSidebarOpen
              ? 'fixed left-10 top-0 z-10 flex border-r bg-white px-5 py-5 pt-12 animate-in slide-in-from-left-10'
              : 'hidden'
          }`}
        >
          <div>
            <ul className='space-y-3'>
              {adminLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={pathname !== link.path ? link.path : ''}
                    className={`flex items-center gap-2 whitespace-nowrap rounded-md p-1 hover:bg-gray-100 ${
                      pathname === link.path ? 'bg-gray-100' : 'text-gray-500'
                    }`}
                  >
                    {link?.icon}
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-auto flex w-full justify-between'>
            <div className='space-x-1'>
              <span className='font-semibold'>{user.firstName}</span>
              <span className='font-semibold'>{user.lastName}</span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MoreHorizontal />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className={`space-y-2 ${!isAuth ? 'hidden' : ''}`}
              >
                {dropdownMenuItems.map((item) => (
                  <DropdownMenuItem asChild key={item.title}>
                    <Link
                      onClick={item.onClick}
                      href={item.link}
                      className='w-full cursor-pointer'
                    >
                      {item.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </aside>
  );
}
