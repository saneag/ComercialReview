import SidebarLinks from '@/app/components/adminDashboard/components/sidebar/sidebarContent/sidebarLinks';
import SidebarUser from '@/app/components/adminDashboard/components/sidebar/sidebarContent/sidebarUser';
import HomeLogoLink from '@/app/components/homeLogoLink';

interface SidebarContentProps {
  isSidebarOpen: boolean;
}

export default function SidebarContent({ isSidebarOpen }: SidebarContentProps) {
  return (
    <div
      className={`h-full flex-col lg:flex ${
        isSidebarOpen
          ? 'fixed left-10 top-0 z-10 flex bg-white px-5 py-4 animate-in slide-in-from-left-10'
          : 'hidden'
      }`}
    >
      <div className='space-y-3'>
        <HomeLogoLink className='w-10' replace={false}>
          <span className='text-xl'>Intercon</span>
        </HomeLogoLink>
        <SidebarUser />
        <SidebarLinks />
      </div>
    </div>
  );
}
