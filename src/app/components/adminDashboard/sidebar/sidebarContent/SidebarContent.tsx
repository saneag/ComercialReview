import SidebarLinks from '@/app/components/adminDashboard/sidebar/sidebarContent/SidebarLinks';
import SidebarUser from '@/app/components/adminDashboard/sidebar/sidebarContent/SidebarUser';
import HomeLogoLink from '@/app/components/HomeLogoLink';

interface SidebarContentProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}

export default function SidebarContent({
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarContentProps) {
  return (
    <>
      {!isSidebarOpen && (
        <div className='mt-2 flex w-full flex-col items-center gap-3 lg:hidden'>
          <div className='flex'>
            <HomeLogoLink className='w-7' />
          </div>
          <SidebarLinks
            setIsSidebarOpen={setIsSidebarOpen}
            includeLabel={false}
          />
        </div>
      )}
      <div
        className={`h-full flex-col lg:flex ${
          isSidebarOpen
            ? 'fixed left-10 top-0 z-10 flex w-1/4 bg-white px-5 py-4 animate-in slide-in-from-left-10'
            : 'hidden'
        }`}
      >
        <div className='space-y-5'>
          <HomeLogoLink className='w-10'>
            <span className='text-xl'>Intercon</span>
          </HomeLogoLink>
          <SidebarUser />
          <SidebarLinks setIsSidebarOpen={setIsSidebarOpen} />
        </div>
      </div>
      {isSidebarOpen && (
        <div
          className='fixed inset-0 left-10 bg-black bg-opacity-20 lg:hidden'
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
}
