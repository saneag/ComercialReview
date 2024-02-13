'use client';

import { notFound } from 'next/navigation';

import { useAppSelector } from '@/app/redux/store';
import { UserRoleEnum } from '@/app/types/enums/UserRoleEnum';

export default function AdminRouteGuard(Component: any) {
  return function RouteGuardWrapper(props: any) {
    const isAuth = useAppSelector((state) => state.user.isAuth);
    const role = useAppSelector((state) => state.user.role);

    if (
      !isAuth ||
      (role !== UserRoleEnum.ADMIN && role !== UserRoleEnum.SUPER_ADMIN)
    ) {
      return notFound();
    }

    return <Component {...props} />;
  };
}
