'use client';

import { ReactNode } from 'react';

import { Toaster } from '@/app/components/ui/toaster';

export default function AppWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
}
