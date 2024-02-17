import { useState } from 'react';

import SidebarContent from '@/app/components/adminDashboard/components/sidebar/sidebarContent/sidebarContent';
import SidebarOpenButton from '@/app/components/adminDashboard/components/sidebar/sidebarOpenButton';

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <aside
      className='h-screen min-w-[2.5rem] max-w-[2.5rem] 
      border-r lg:w-52 lg:min-w-[13rem]'
    >
      <div className='fixed left-0 top-0 z-10 h-full w-32 py-5 lg:w-52 lg:px-5'>
        <SidebarOpenButton
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <SidebarContent isSidebarOpen={isSidebarOpen} />
      </div>
    </aside>
  );
}
