'use client';

import { notFound } from 'next/navigation';

import UserProfileForm from '@/app/components/userPage/userProfile/userProfileForm';
import { useAppSelector } from '@/app/redux/store';

export default function UserProfilePage() {
  const isAuth = useAppSelector((state) => state.user.isAuth);

  if (!isAuth) {
    return notFound();
  }

  return (
    <div>
      <UserProfileForm />
    </div>
  );
}
