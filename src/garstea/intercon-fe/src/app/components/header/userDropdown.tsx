import { useEffect, useState } from 'react';

import { UserRound } from 'lucide-react';
import Link from 'next/link';

import Dropdown from '@/app/components/dropdown';
import { DropdownContentFields } from '@/app/types/dropdown/DropdownContentFields';

export default function UserDropdown() {
  const isAuth = false;

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
          label: 'Logout',
          value: 'logout',
        },
      ]);
    } else {
      setAdditionalContent([
        {
          label: <Link href='/auth/login'>Login</Link>,
          value: 'login',
        },
      ]);
    }
  }, [isAuth]);

  return (
    <div>
      <Dropdown
        triggerText={
          <div className='cursor-pointer rounded-full bg-gray-400 p-2'>
            {<UserRound />}
          </div>
        }
        contentLabel='User menu'
        contentFields={isAuth ? contentFields : []}
        additionalContent={additionalContent}
      />
    </div>
  );
}
