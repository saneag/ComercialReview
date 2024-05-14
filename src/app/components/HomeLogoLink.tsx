'use client';

import { ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { setPage } from '@/app/redux/features/slices/paginationSlice';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';

interface HomeLogoLinkProps {
  className?: string;
  children?: ReactNode;
}

export default function HomeLogoLink({
  className,
  children,
}: HomeLogoLinkProps) {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.pagination);

  const handleClick = () => {
    dispatch(setPage({ pageIndex: 1, pageSize: page.pageSize }));
  };

  return (
    <Link
      href='/businesses'
      onClick={handleClick}
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
        className={`h-auto min-w-12 cursor-pointer ${className}`}
      />
      {children}
    </Link>
  );
}
