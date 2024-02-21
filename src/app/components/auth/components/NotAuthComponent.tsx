'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import LoadingScreen from '@/app/components/LoadingScreen';

export default function NotAuthComponent() {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.replace('/auth/login');
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [router]);

  return (
    <div className='fixed bottom-0 left-0 right-0 top-0 z-50'>
      <LoadingScreen />
    </div>
  );
}
