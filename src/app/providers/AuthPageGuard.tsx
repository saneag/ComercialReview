'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { useAppSelector } from '@/app/redux/store';

export default function AuthPageGuard(Component: any) {
  return function RouteGuardWrapper(props: any) {
    const router = useRouter();
    const isAuth = useAppSelector((state) => state.user.isAuth);

    useEffect(() => {
      if (isAuth) {
        router.replace('/');
      }
    }, [isAuth, router]);

    return <Component {...props} />;
  };
}
