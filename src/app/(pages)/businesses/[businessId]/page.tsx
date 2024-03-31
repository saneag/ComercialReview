'use client';

import { useEffect } from 'react';

import BusinessDetails from '@/app/components/businessDetails/BusinessDetails';
import {
  resetPagination,
  setPage,
} from '@/app/redux/features/slices/paginationSlice';
import { useAppDispatch } from '@/app/redux/store';

export default function BusinessDetailsPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setPage({
        pageIndex: 1,
        pageSize: 3,
      })
    );

    return () => {
      dispatch(resetPagination());
    };
  }, [dispatch]);

  return <BusinessDetails />;
}
