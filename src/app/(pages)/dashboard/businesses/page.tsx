'use client';

import { useEffect } from 'react';

import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import BusinessesList from '@/app/components/businessesList/BusinessesList';
import { Button } from '@/app/components/ui/button';
import {
  resetPagination,
  setPage,
} from '@/app/redux/features/slices/paginationSlice';
import { useAppDispatch } from '@/app/redux/store';

export default function DashboardBusinesses() {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const pageIndex = searchParams.get('pageIndex') || 1;
  const pageSize = searchParams.get('pageSize') || 6;

  useEffect(() => {
    dispatch(
      setPage({
        pageIndex: Number(pageIndex),
        pageSize: Number(pageSize),
      })
    );

    return () => {
      dispatch(resetPagination());
    };
  }, [dispatch, pageIndex, pageSize]);

  return (
    <div className='my-10 space-y-4'>
      <div className='flex justify-end'>
        <Link href='/dashboard/businesses/create'>
          <Button className='space-x-1 nm-flat-green-500-sm hover:nm-flat-green-600-sm'>
            <span>Add a business</span>
            <Plus size={20} />
          </Button>
        </Link>
      </div>
      <BusinessesList />
    </div>
  );
}
