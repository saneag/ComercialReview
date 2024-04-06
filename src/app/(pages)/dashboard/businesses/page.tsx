'use client';

import { useEffect } from 'react';

import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import BusinessCard from '@/app/components/businessesList/businessCard/BusinessCard';
import BusinessesList from '@/app/components/businessesList/BusinessesList';
import { Button } from '@/app/components/ui/button';
import { useGetMyBusinessQuery } from '@/app/redux/features/businessApi/businessApi';
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

  const { data: business, isLoading } = useGetMyBusinessQuery();

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
      <div className='space-y-10'>
        {business ? (
          <div className='space-y-2'>
            <p className='text-3xl'>My business</p>
            <BusinessCard business={business} />
          </div>
        ) : (
          <div className='flex justify-end'>
            {!isLoading && (
              <Link href='/dashboard/businesses/create'>
                <Button className='space-x-1 nm-flat-green-500-sm hover:nm-flat-green-600-sm'>
                  <span>Add a business</span>
                  <Plus size={20} />
                </Button>
              </Link>
            )}
          </div>
        )}
        <BusinessesList />
      </div>
    </div>
  );
}
