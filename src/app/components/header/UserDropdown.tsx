import { useCallback, useEffect, useState } from 'react';

import { UserRound } from 'lucide-react';
import Link from 'next/link';

import Dropdown from '@/app/components/dropdown';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/components/ui/avatar';
import { resetUserOnLogout } from '@/app/redux/features/slices/userSlice';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';
import { DropdownContentFields } from '@/app/types/dropdown/DropdownContentFields';
import { UserRoleEnum } from '@/app/types/enums/UserRoleEnum';

export default function UserDropdown() {
  const dispatch = useAppDispatch();

  const isAuth = useAppSelector((state) => state.user.isAuth);
  const user = useAppSelector((state) => state.user.user);
  const userRole = useAppSelector((state) => state.user.role);

  const [additionalContent, setAdditionalContent] = useState<
    DropdownContentFields[]
  >([]);

  const contentFields: DropdownContentFields[] = [
    {
      label: <Link href='/profile'>Profile</Link>,
      value: 'profile',
    },
    {
      label: <Link href='/settings'>Settings</Link>,
      value: 'settings',
    },
  ];

  const handleUserLogout = useCallback(() => {
    dispatch(resetUserOnLogout());
  }, [dispatch]);

  useEffect(() => {
    if (isAuth) {
      setAdditionalContent([
        {
          label: (
            <span
              className='w-full justify-start p-0 hover:no-underline'
              onClick={handleUserLogout}
            >
              Logout
            </span>
          ),
          value: 'logout',
        },
      ]);
    } else {
      setAdditionalContent([
        {
          label: (
            <Link href='/auth/login' className='block w-full'>
              Login
            </Link>
          ),
          value: 'login',
        },
      ]);
    }
  }, [handleUserLogout, isAuth]);

  return (
    <div>
      <Dropdown
        triggerText={
          <div className='cursor-pointer rounded-full p-0.5 nm-flat-gray-400-sm'>
            <Avatar>
              <AvatarImage src={user?.avatarPath ?? ''}></AvatarImage>
              <AvatarFallback className='nm-convex-gray-200'>
                {user && userRole !== UserRoleEnum.GUEST ? (
                  <span className='text-capitalize'>
                    {user.firstName[0]}
                    {user.lastName[0]}
                  </span>
                ) : (
                  <UserRound />
                )}
              </AvatarFallback>
            </Avatar>
          </div>
        }
        contentLabel='User menu'
        contentFields={isAuth ? contentFields : []}
        additionalContent={additionalContent}
      />
    </div>
  );
}
