import { useEffect, useState } from 'react';

import { UserRound } from 'lucide-react';
import Link from 'next/link';

import Dropdown from '@/app/components/dropdown';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/app/components/ui/avatar';
import { Button } from '@/app/components/ui/button';
import { useAppSelector } from '@/app/redux/store';
import { DropdownContentFields } from '@/app/types/dropdown/DropdownContentFields';
import { UserRoleEnum } from '@/app/types/enums/UserRoleEnum';

export default function UserDropdown() {
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
      label: 'Settings',
      value: 'settings',
    },
  ];

  useEffect(() => {
    if (isAuth) {
      setAdditionalContent([
        {
          label: (
            <Button
              variant='link'
              className='h-5 w-full justify-start p-0 hover:no-underline'
              onClick={() => {}}
            >
              Logout
            </Button>
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
  }, [isAuth]);

  return (
    <div>
      <Dropdown
        triggerText={
          <div className='cursor-pointer rounded-full p-0.5 nm-flat-gray-400'>
            <Avatar>
              <AvatarImage></AvatarImage>
              <AvatarFallback className='nm-convex-gray-200'>
                {user && userRole !== UserRoleEnum.GUEST ? (
                  <span className='text-capitalize'>
                    {user.lastName[0]}
                    {user.firstName[0]}
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
