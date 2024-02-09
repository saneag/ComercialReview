import React from 'react';

import type { Metadata } from 'next';
import { Nunito as FontSans } from 'next/font/google';

import ReduxProvider from '@/app/redux/provider';
import { cn } from '@/lib/utils';

import AppWrapper from './providers/AppWrapper';

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
          <AppWrapper>{children}</AppWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
