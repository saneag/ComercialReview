'use client';

import { ReactNode, useEffect } from 'react';

import { jwtDecode } from 'jwt-decode';

import { Toaster } from '@/app/components/ui/toaster';
import { getUserToken, setUser } from '@/app/redux/features/slices/userSlice';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';
import { UserJwtClaimsEnum } from '@/app/types/enums/UserJwtClaimsEnum';
import { UserRoleEnum } from '@/app/types/enums/UserRoleEnum';

export default function AppWrapper({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.user.token);

  useEffect(() => {
    dispatch(getUserToken());
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      const decoded: any = jwtDecode(token);

      const userEmail = decoded[UserJwtClaimsEnum.Email];
      const userName = decoded[UserJwtClaimsEnum.UserName];

      dispatch(
        setUser({
          user: {
            firstName: 'Alexandr',
            lastName: 'Garstea',
            email: userEmail || '',
            userName: userName || '',
          },
          isAuth: true,
          role: UserRoleEnum.SUPER_ADMIN,
        })
      );
    }
  }, [token, dispatch]);

  return (
    <>
      <Toaster />
      {children}
    </>
  );
}
