import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  <div className='flex-center min-h-screen'>
    <div className='flex-1 bg-gray-100 dark:bg-gray-800'>{children}</div>
  </div>;
}
