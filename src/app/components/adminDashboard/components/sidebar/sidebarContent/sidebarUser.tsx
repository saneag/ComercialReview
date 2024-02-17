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
      <div className='flex w-full items-center space-x-2'>
        <User size={20} />
        <div className='space-x-1'>
          <span className='font-semibold'>Test{user.firstName}</span>
          <span className='font-semibold'>User{user.lastName}</span>
        </div>
      </div>
      <Button variant='ghost' size='icon' onClick={handleUserLogout}>
        <LogOut size={20} />
      </Button>
    </div>
  );
}
