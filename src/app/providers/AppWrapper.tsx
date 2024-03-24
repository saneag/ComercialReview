'use client';

import { ReactNode, useEffect } from 'react';

import { jwtDecode } from 'jwt-decode';

import { Toaster } from '@/app/components/ui/toaster';
import {
  getUserAccessToken,
  setUser,
  setUserRole,
} from '@/app/redux/features/slices/userSlice';
import { useLazyGetUserIdentityQuery } from '@/app/redux/features/userApi/userApi';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';
import { UserJwtClaimsEnum } from '@/app/types/enums/UserJwtClaimsEnum';

export default function AppWrapper({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();
  const [getUserIdentity, { data: user }] = useLazyGetUserIdentityQuery();
  const accessToken = useAppSelector((state) => state.user.accessToken);

  useEffect(() => {
    dispatch(getUserAccessToken());
  }, [dispatch]);

  useEffect(() => {
    if (accessToken) {
      const decoded: any = jwtDecode(accessToken);
      const role = decoded[UserJwtClaimsEnum.Role];
      dispatch(setUserRole(role));
      getUserIdentity();
    }
  }, [accessToken, dispatch, getUserIdentity]);

  useEffect(() => {
    if (user) {
      dispatch(
        setUser({
          user: user,
          isAuth: true,
        })
      );
    }
  }, [user, dispatch]);

  return (
    <>
      <Toaster />
      {children}
    </>
  );
}
