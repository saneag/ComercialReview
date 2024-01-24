import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex min-h-screen'>
      <div className='flex-1 bg-gray-100'>{children}</div>
    </div>
  );
}
