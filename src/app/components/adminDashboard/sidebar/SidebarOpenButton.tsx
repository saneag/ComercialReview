import { ChevronRight } from 'lucide-react';

import { Button } from '@/app/components/ui/button';

interface SidebarOpenButtonProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}

export default function SidebarOpenButton({
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarOpenButtonProps) {
  return (
    <div className='lg:hidden'>
      <Button
        className='h-8 p-2'
        variant='link'
        onClick={() => {
          setIsSidebarOpen(!isSidebarOpen);
        }}
      >
        <ChevronRight
          className={`
      transform transition-transform ${isSidebarOpen ? 'rotate-180' : ''}`}
        />
      </Button>
    </div>
  );
}
