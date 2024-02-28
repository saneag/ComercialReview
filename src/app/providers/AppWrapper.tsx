'use client';

import { ReactNode, useEffect } from 'react';

import { jwtDecode } from 'jwt-decode';

import { Toaster } from '@/app/components/ui/toaster';
import {
  getUserAccessToken,
  setUser,
} from '@/app/redux/features/slices/userSlice';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';
import { UserJwtClaimsEnum } from '@/app/types/enums/UserJwtClaimsEnum';
import { UserRoleEnum } from '@/app/types/enums/UserRoleEnum';

export default function AppWrapper({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector((state) => state.user.accessToken);

  useEffect(() => {
    dispatch(getUserAccessToken());
  }, [dispatch]);

  useEffect(() => {
    if (accessToken) {
      const decoded: any = jwtDecode(accessToken);

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
  }, [accessToken, dispatch]);

  return (
    <>
      <Toaster />
      {children}
    </>
  );
}
