import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <div className='flex-center min-h-screen bg-gray-100'>{children}</div>;
}
