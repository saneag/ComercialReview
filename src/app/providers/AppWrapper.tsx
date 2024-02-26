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

      const userId = decoded[UserJwtClaimsEnum.UserId];
      const email = decoded[UserJwtClaimsEnum.Email];
      const firstName = decoded[UserJwtClaimsEnum.FirstName];
      const lastName = decoded[UserJwtClaimsEnum.LastName];
      const role = decoded[UserJwtClaimsEnum.Role];

      dispatch(
        setUser({
          user: {
            userId: Number(userId),
            firstName,
            lastName,
            email,
          },
          isAuth: true,
          role: Number(role) as UserRoleEnum,
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
