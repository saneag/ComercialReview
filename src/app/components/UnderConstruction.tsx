import Image from 'next/image';

import HomeLogoLink from '@/app/components/HomeLogoLink';

interface UnderConstructionProps {
  className?: string;
}

export default function UnderConstruction({
  className,
}: UnderConstructionProps) {
  return (
    <div
      className={`flex-center w-full select-none flex-col gap-5 ${className ?? ''}`}
    >
      <div>
        <HomeLogoLink className='animate-spin-10 w-20' />
      </div>
      <div className='flex-y-center gap-2 text-7xl'>
        <UnderConstructionImage />
        <p className='text-center'>Coming Soon</p>
        <UnderConstructionImage />
      </div>
      <div className='text-center text-lg text-gray-500'>
        <p>We are working hard to bring you an amazing experience!</p>
        <p>This page will be available soon. Thank you for your patience.</p>
      </div>
    </div>
  );
}

const UnderConstructionImage = () => (
  <Image
    src='/assets/images/under-construction.png'
    alt='under-construction'
    width={0}
    height={0}
    sizes='100vw'
    className='size-10 max-sm:hidden'
  />
);
