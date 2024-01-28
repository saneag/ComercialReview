'use client';

import { routes } from '@utils/routes';
import Link from 'next/link';

export default function Header() {
  const isAuth = false;

  const filteredRoutes = routes.filter((route) =>
    isAuth ? true : !route.protected
  );

  return (
    <div className='flex-center fixed top-0 h-16 w-full bg-gray-300'>
      {filteredRoutes.map((route) => (
        <Link href={route.path} key={route.path}>
          <div className='flex items-center gap-1 p-2'>
            {route.icon}
            <span className='mt-1 text-lg'>{route.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
