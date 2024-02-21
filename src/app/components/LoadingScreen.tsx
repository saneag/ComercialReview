import { Loader2 } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <Loader2 className='h-72 w-72 animate-spin' />
    </div>
  );
}
