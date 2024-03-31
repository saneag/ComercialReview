import { useEffect } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { PaginationType } from '@/app/types/PaginationType';

interface UseQueryParamsProps {
  page: PaginationType;
}

export const useQueryParams = ({ page }: UseQueryParamsProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set('pageIndex', page.pageIndex.toString());
    params.set('pageSize', page.pageSize.toString());
    router.push(`${pathname}?${params.toString()}`);
  }, [page.pageIndex, page.pageSize, pathname, router, searchParams]);
};
