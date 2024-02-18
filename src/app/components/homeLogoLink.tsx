import { ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';

interface HomeLogoLinkProps {
  className?: string;
  children?: ReactNode;
  replace?: boolean;
}

export default function HomeLogoLink({
  className,
  children,
  replace = true,
}: HomeLogoLinkProps) {
  return (
    <Link
      href='/businesses'
      replace={replace}
      className='flex items-center gap-3'
    >
      <Image
        src='/assets/images/intercon-logo-no-text.png'
        alt=''
        width='0'
        height='0'
        sizes='100vw'
        placeholder='blur'
        blurDataURL='/assets/images/intercon-logo-no-text.png'
        className={`h-auto cursor-pointer ${className}`}
      />
      {children}
    </Link>
  );
}
