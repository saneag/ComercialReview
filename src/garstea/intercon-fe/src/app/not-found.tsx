'use client';

import { useEffect, useState } from 'react';

import { Frown, Home } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/app/components/ui/button';

export default function NotFoundPage() {
  const router = useRouter();

  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/');
    }, 5000);
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [router]);

  const handleButtonClick = () => {
    router.replace('/');
  };

  return (
    <div className='flex-col-center h-screen gap-y-2 bg-gray-400'>
      <Frown className='h-52 w-52' />
      <p className='text-6xl'>404</p>
      <p className='text-4xl text-gray-600'>Page not found</p>
      <p>
        The page you are looking for doesn&apos;t exist or other error occurred.
      </p>
      <p>You will be redirected to main page in {seconds} seconds</p>
      <Button className='flex items-center gap-2' onClick={handleButtonClick}>
        <span>Go Home</span> <Home className='h-5 w-5' />
      </Button>
    </div>
  );
}
