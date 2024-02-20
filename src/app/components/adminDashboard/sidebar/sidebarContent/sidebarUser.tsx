import { LogOut, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/app/components/ui/button';
import { resetUserOnLogout } from '@/app/redux/features/slices/userSlice';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';

export default function SidebarUser() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const user = useAppSelector((state) => state.user.user);

  const handleUserLogout = () => {
    dispatch(resetUserOnLogout());
    localStorage.removeItem('user');
    router.replace('/businesses');
  };

  return (
    <div className='flex w-full items-center'>
      <div className='flex w-full flex-1 items-center space-x-2'>
        <div>
          <User size={20} />
        </div>
        {user ? (
          <div className='flex flex-wrap space-x-1'>
            <span className='font-semibold'>{user.firstName}</span>
            <span className='font-semibold'>{user.lastName}</span>
          </div>
        ) : (
          <div className='flex flex-wrap space-x-1'>
            <span className='font-semibold'>Test</span>
            <span className='font-semibold'>User</span>
          </div>
        )}
      </div>
      <Button
        variant='ghost'
        size='icon'
        className='w-2/12'
        onClick={handleUserLogout}
      >
        <LogOut size={20} />
      </Button>
    </div>
  );
}
