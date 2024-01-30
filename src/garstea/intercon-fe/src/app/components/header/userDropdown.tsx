import { UserRound } from 'lucide-react';
import Link from 'next/link';

import Dropdown from '@/app/components/dropdown';
import { DropdownContentFields } from '@/app/types/dropdown/DropdownContentFields';

export default function UserDropdown() {
  const contentFields: DropdownContentFields[] = [
    {
      label: <Link href='/profile'>Profile</Link>,
      value: 'profile',
    },
    {
      label: 'Settings',
      value: 'settings',
    },
    {
      label: <Link href='/auth/login'>Login</Link>,
      value: 'login',
    },
    {
      label: 'Logout',
      value: 'logout',
    },
  ];

  return (
    <div>
      <Dropdown
        triggerText={
          <div className='cursor-pointer rounded-full bg-gray-400 p-2'>
            {<UserRound />}
          </div>
        }
        contentLabel='User menu'
        contentFields={contentFields}
      />
    </div>
  );
}
