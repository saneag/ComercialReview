'use client';

import { ReactNode, useCallback, useEffect } from 'react';

import { jwtDecode } from 'jwt-decode';

import { Toaster } from '@/app/components/ui/toaster';
import {
  getUserAccessToken,
  getUserRefreshToken,
  resetUserOnLogout,
  setUser,
  setUserRole,
} from '@/app/redux/features/slices/userSlice';
import { useLazyGetUserQuery } from '@/app/redux/features/userApi/userApi';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';
import { UserJwtClaimsEnum } from '@/app/types/enums/UserJwtClaimsEnum';

export default function AppWrapper({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();
  const [getUser, { data: user, isError }] = useLazyGetUserQuery();
  const accessToken = useAppSelector((state) => state.user.accessToken);

  useEffect(() => {
    dispatch(getUserAccessToken());
    dispatch(getUserRefreshToken());
  }, [dispatch]);

  const getUserFromToken = useCallback(() => {
    try {
      if (accessToken) {
        const decoded: any = jwtDecode(accessToken);
        const userId = decoded[UserJwtClaimsEnum.UserId];
        const role = decoded[UserJwtClaimsEnum.Role];
        dispatch(setUserRole(Number(role)));
        getUser(userId);
      }
    } catch (error) {
      dispatch(resetUserOnLogout());
    }
  }, [accessToken, dispatch, getUser]);

  useEffect(() => {
    getUserFromToken();
  }, [getUserFromToken]);

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

  useEffect(() => {
    if (isError) {
      dispatch(resetUserOnLogout());
    }
  }, [dispatch, isError]);

  return (
    <>
      <Toaster />
      {children}
    </>
  );
}
