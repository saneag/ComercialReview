import React from 'react';

import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import ReduxProvider from '@/app/redux/provider';
import { cn } from '@/lib/utils';

import './styles/globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Intercon',
  description: 'App for reviews',
  icons: '/assets/images/intercon-logo.png',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ReduxProvider>
          <div className='flex min-h-screen'>
            <div className='flex-1 bg-gray-100'>
              <>{children}</>
            </div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
