'use client';
import NotAuthComponent from '@/app/components/auth/components/NotAuthComponent';
import { useAppSelector } from '@/app/redux/store';

export default function NotAuthPageGuard(Component: any) {
  return function RouteGuardWrapper(props: any) {
    const isAuth = useAppSelector((state) => state.user.isAuth);

    if (!isAuth) {
      return <NotAuthComponent />;
    }

    return <Component {...props} />;
  };
}
