'use client';

import { notFound } from 'next/navigation';

import UnderConstruction from '@/app/components/UnderConstruction';
import { useAppSelector } from '@/app/redux/store';

export default function UserSettingsPage() {
  const isAuth = useAppSelector((state) => state.user.isAuth);

  if (!isAuth) {
    return notFound();
  }

  return (
    <div>
      <UnderConstruction className='mt-64' />
    </div>
  );
}
